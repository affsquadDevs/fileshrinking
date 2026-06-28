/// <reference lib="webworker" />
/**
 * PDF compression worker. Pure client-side.
 *
 * Strategy (honest about its limits — see the PDF tool page): walk the PDF's
 * indirect objects, find embedded raster image XObjects encoded as JPEG
 * (DCTDecode), decode them with the browser, optionally downscale, recompress
 * with MozJPEG at the chosen quality, and write them back. Then rebuild the
 * file with object streams and stripped metadata. We always return the SMALLER
 * of {input, output}, so a text/vector PDF (little to compress) is never made
 * larger.
 *
 * Images with soft masks / stencil masks (transparency) are skipped to avoid
 * altering appearance — JPEG cannot carry an alpha channel.
 */
import * as Comlink from "comlink";
import {
  PDFDocument,
  PDFName,
  PDFNumber,
  PDFDict,
  PDFArray,
  PDFRawStream,
  PDFRef,
  type PDFObject,
} from "pdf-lib";
import type {
  PdfCompressOptions,
  PdfCompressResult,
} from "@/lib/compress/pdf-types";

type ProgressFn = (value: number) => void;

const N = (s: string) => PDFName.of(s);
const DCT = N("DCTDecode");

function filterIncludes(
  filter: PDFObject | undefined,
  name: PDFName,
): boolean {
  if (!filter) return false;
  if (filter instanceof PDFArray) {
    return filter.asArray().some((f) => f === name);
  }
  return filter === name;
}

function isImageStream(obj: PDFObject): obj is PDFRawStream {
  if (!(obj instanceof PDFRawStream)) return false;
  const subtype = obj.dict.get(N("Subtype"));
  return subtype === N("Image");
}

const api = {
  async compress(
    input: ArrayBuffer,
    opts: PdfCompressOptions,
    onProgress?: ProgressFn,
  ): Promise<PdfCompressResult> {
    const srcBytes = new Uint8Array(input);
    onProgress?.(0.04);

    let pdf: PDFDocument;
    try {
      pdf = await PDFDocument.load(srcBytes, {
        updateMetadata: false,
        ignoreEncryption: true,
      });
    } catch {
      throw new Error(
        "This PDF could not be opened. It may be encrypted or corrupted.",
      );
    }

    // Strip identifying metadata.
    try {
      pdf.setTitle("");
      pdf.setAuthor("");
      pdf.setSubject("");
      pdf.setKeywords([]);
      pdf.setProducer("");
      pdf.setCreator("");
    } catch {
      /* non-fatal */
    }

    const ctx = pdf.context;
    const images: [PDFRef, PDFRawStream][] = [];
    for (const [ref, obj] of ctx.enumerateIndirectObjects()) {
      if (isImageStream(obj)) images.push([ref, obj]);
    }

    let recompressed = 0;
    const { encode } = images.length
      ? await import("@jsquash/jpeg")
      : { encode: null as never };

    for (let i = 0; i < images.length; i++) {
      const [ref, stream] = images[i];
      onProgress?.(0.1 + 0.75 * (i / Math.max(1, images.length)));
      try {
        const dict = stream.dict;

        // Skip masks / transparency to preserve appearance.
        if (
          dict.get(N("SMask")) ||
          dict.get(N("Mask")) ||
          dict.lookup(N("ImageMask"))
        ) {
          continue;
        }

        // Only handle JPEG-encoded images in this pass.
        if (!filterIncludes(dict.get(N("Filter")), DCT)) continue;

        const jpegBytes = stream.contents;
        if (!jpegBytes || jpegBytes.length < 2048) continue; // not worth it

        const bitmap = await createImageBitmap(
          new Blob([jpegBytes as BlobPart], { type: "image/jpeg" }),
        );
        let tw = bitmap.width;
        let th = bitmap.height;
        const maxD = opts.maxImageDimension;
        if (maxD && Math.max(tw, th) > maxD) {
          const s = maxD / Math.max(tw, th);
          tw = Math.max(1, Math.round(tw * s));
          th = Math.max(1, Math.round(th * s));
        }

        const canvas = new OffscreenCanvas(tw, th);
        const cctx = canvas.getContext("2d", {
          willReadFrequently: true,
        }) as OffscreenCanvasRenderingContext2D;
        cctx.drawImage(bitmap, 0, 0, tw, th);
        bitmap.close();
        const imageData = cctx.getImageData(0, 0, tw, th);

        const out = await encode(imageData, { quality: opts.quality });
        const newBytes = new Uint8Array(out);

        // Only replace if we actually saved bytes.
        if (newBytes.length >= jpegBytes.length) continue;

        const newDict = PDFDict.withContext(ctx);
        newDict.set(N("Type"), N("XObject"));
        newDict.set(N("Subtype"), N("Image"));
        newDict.set(N("Width"), PDFNumber.of(tw));
        newDict.set(N("Height"), PDFNumber.of(th));
        newDict.set(N("ColorSpace"), N("DeviceRGB"));
        newDict.set(N("BitsPerComponent"), PDFNumber.of(8));
        newDict.set(N("Filter"), DCT);
        newDict.set(N("Length"), PDFNumber.of(newBytes.length));

        ctx.assign(ref, PDFRawStream.of(newDict, newBytes));
        recompressed++;
      } catch {
        // Skip any image we can't safely process.
        continue;
      }
    }

    onProgress?.(0.9);
    const outBytes = await pdf.save({ useObjectStreams: true });
    onProgress?.(1);

    // Honesty rule: never hand back a bigger file.
    if (outBytes.length >= srcBytes.length) {
      const copy = srcBytes.slice();
      const note =
        images.length === 0
          ? "This PDF is text/vector-based, so there were no images to recompress — it's already about as small as it gets."
          : "This PDF is already well-optimized — we kept your original because it was smaller.";
      return Comlink.transfer(
        {
          buffer: copy.buffer,
          recompressedImages: recompressed,
          totalImages: images.length,
          note,
          keptOriginal: true,
        },
        [copy.buffer],
      );
    }

    const ab = outBytes.slice().buffer;
    return Comlink.transfer(
      {
        buffer: ab,
        recompressedImages: recompressed,
        totalImages: images.length,
        note:
          recompressed === 0 && images.length > 0
            ? "Embedded images were already compressed; savings come from cleanup and metadata removal."
            : undefined,
        keptOriginal: false,
      },
      [ab],
    );
  },
};

export type PdfWorkerApi = typeof api;

Comlink.expose(api);
