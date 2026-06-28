/// <reference lib="webworker" />
/**
 * Image compression worker. Runs entirely off the main thread.
 *
 * Decode: the browser's native createImageBitmap + OffscreenCanvas (handles
 * JPEG/PNG/WebP/AVIF/GIF[first frame] with no extra WASM). Falls back to
 * jSquash decoders if the browser can't decode a format.
 *
 * Encode: jSquash WASM codecs, dynamically imported per-format so a page only
 * downloads the codec it actually uses. Each codec lazily initialises its own
 * .wasm on first call.
 */
import * as Comlink from "comlink";
import {
  FORMAT_META,
  mimeToFormat,
  type ImageCompressOptions,
  type ImageCompressResult,
  type ImageEncodeFormat,
  type ResizeOptions,
} from "@/lib/compress/image-types";

type ProgressFn = (value: number) => void;

async function decodeImage(
  buffer: ArrayBuffer,
  mime: string,
): Promise<ImageData> {
  const blob = new Blob([buffer], { type: mime || "application/octet-stream" });
  try {
    const bitmap = await createImageBitmap(blob);
    const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
    const ctx = canvas.getContext("2d", {
      willReadFrequently: true,
    }) as OffscreenCanvasRenderingContext2D;
    ctx.drawImage(bitmap, 0, 0);
    bitmap.close();
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
  } catch {
    // Fallback: jSquash format-specific decoders.
    let decoded: ImageData | null = null;
    switch (mime) {
      case "image/jpeg":
        decoded = await (await import("@jsquash/jpeg")).decode(buffer);
        break;
      case "image/png":
        decoded = await (await import("@jsquash/png")).decode(buffer);
        break;
      case "image/webp":
        decoded = await (await import("@jsquash/webp")).decode(buffer);
        break;
      case "image/avif":
        decoded = await (await import("@jsquash/avif")).decode(buffer);
        break;
    }
    if (!decoded) {
      throw new Error("This image format could not be decoded by your browser.");
    }
    return decoded;
  }
}

function targetDimensions(
  w: number,
  h: number,
  r?: ResizeOptions,
): { width: number; height: number } | null {
  if (!r || r.mode === "none") return null;

  if (r.mode === "percentage" && r.percentage && r.percentage > 0) {
    const s = r.percentage / 100;
    return {
      width: Math.max(1, Math.round(w * s)),
      height: Math.max(1, Math.round(h * s)),
    };
  }

  if (r.mode === "dimensions") {
    let tw = r.width;
    let th = r.height;
    const keep = r.maintainAspectRatio ?? true;
    if (keep) {
      if (tw && !th) th = Math.round((tw * h) / w);
      else if (th && !tw) tw = Math.round((th * w) / h);
      else if (tw && th) {
        const scale = Math.min(tw / w, th / h);
        tw = Math.round(w * scale);
        th = Math.round(h * scale);
      }
    }
    if (!tw || !th) return null;
    return { width: Math.max(1, tw), height: Math.max(1, th) };
  }
  return null;
}

function toArrayBuffer(out: ArrayBuffer | Uint8Array): ArrayBuffer {
  if (out instanceof Uint8Array) {
    return out.buffer.slice(
      out.byteOffset,
      out.byteOffset + out.byteLength,
    ) as ArrayBuffer;
  }
  return out;
}

async function encodeImage(
  imageData: ImageData,
  format: ImageEncodeFormat,
  opts: ImageCompressOptions,
): Promise<ArrayBuffer> {
  const quality = Math.min(100, Math.max(1, Math.round(opts.quality)));
  switch (format) {
    case "jpeg": {
      const { encode } = await import("@jsquash/jpeg");
      return toArrayBuffer(
        await encode(imageData, {
          quality,
          progressive: opts.progressive ?? true,
        }),
      );
    }
    case "webp": {
      const { encode } = await import("@jsquash/webp");
      return toArrayBuffer(await encode(imageData, { quality }));
    }
    case "avif": {
      const { encode } = await import("@jsquash/avif");
      // speed 0(best/slowest)–10(fastest); 6 balances quality and time.
      return toArrayBuffer(await encode(imageData, { quality, speed: 6 }));
    }
    case "png": {
      const { encode } = await import("@jsquash/png");
      const { optimise } = await import("@jsquash/oxipng");
      const raw = await encode(imageData);
      return toArrayBuffer(
        await optimise(raw, { level: opts.oxipngLevel ?? 3 }),
      );
    }
  }
}

const api = {
  async compress(
    input: ArrayBuffer,
    inputMime: string,
    opts: ImageCompressOptions,
    onProgress?: ProgressFn,
  ): Promise<ImageCompressResult> {
    onProgress?.(0.08);
    let imageData = await decodeImage(input, inputMime);
    onProgress?.(0.4);

    const dims = targetDimensions(imageData.width, imageData.height, opts.resize);
    if (dims && (dims.width !== imageData.width || dims.height !== imageData.height)) {
      const { default: resize } = await import("@jsquash/resize");
      imageData = await resize(imageData, {
        width: dims.width,
        height: dims.height,
      });
    }
    onProgress?.(0.6);

    const format: ImageEncodeFormat =
      opts.target === "keep" ? mimeToFormat(inputMime) ?? "png" : opts.target;

    const buffer = await encodeImage(imageData, format, opts);
    onProgress?.(1);

    const meta = FORMAT_META[format];
    const result: ImageCompressResult = {
      buffer,
      width: imageData.width,
      height: imageData.height,
      mime: meta.mime,
      ext: meta.ext,
    };
    return Comlink.transfer(result, [buffer]);
  },
};

export type ImageWorkerApi = typeof api;

Comlink.expose(api);
