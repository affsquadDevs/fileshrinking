import type { Metadata } from "next";
import Link from "next/link";
import { ImageTool } from "@/components/tools/image-tool";
import { ToolPageLayout, type ToolFaq } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "compress-webp";
const UPDATED = "2026-06-27";

export const metadata: Metadata = buildMetadata({
  title: "Compress WebP — Free WebP Compressor & Converter",
  description:
    "Compress WebP or convert JPEG & PNG to WebP in your browser. Lossy or lossless, private and in-browser — no upload, nothing leaves your device.",
  path: `/${SLUG}`,
});

const faqs: ToolFaq[] = [
  {
    q: "Are my WebP files uploaded to a server?",
    a: "No. Everything happens locally in your browser using WebAssembly. Your images are read into memory, converted, and handed back to you — there is no server to upload to, and you can stay offline after the page loads.",
    text: "No. Everything happens locally in your browser using WebAssembly. Your images are read into memory, converted, and handed back to you. There is no server to upload to, and you can stay offline after the page loads.",
  },
  {
    q: "Is the WebP compressor really free?",
    a: "Yes — it is completely free with no sign-up, no watermarks, and no caps on the number or size of files beyond what your device's memory allows. Unobtrusive ads keep the site running.",
    text: "Yes. It is completely free with no sign-up, no watermarks, and no caps on the number or size of files beyond what your device's memory allows. Unobtrusive ads keep the site running.",
  },
  {
    q: "How does converting to WebP affect image quality?",
    a: "Lossy WebP discards some detail to shrink the file, much like JPEG, but it is more efficient — a WebP is typically 25–35% smaller than a JPEG at the same visible quality. At quality 75–85 the result is usually indistinguishable from the source. Choose lossless WebP if you need a pixel-perfect copy.",
    text: "Lossy WebP discards some detail to shrink the file, much like JPEG, but it is more efficient: a WebP is typically 25-35% smaller than a JPEG at the same visible quality. At quality 75-85 the result is usually indistinguishable from the source. Choose lossless WebP if you need a pixel-perfect copy.",
  },
  {
    q: "What is the maximum file size I can compress?",
    a: "There is no fixed limit — it depends on your device's available memory. Typical photos of a few megabytes and large 20–50 MP images work fine, and batches are processed one file at a time to keep memory use low.",
    text: "There is no fixed limit; it depends on your device's available memory. Typical photos of a few megabytes and large 20-50 MP images work fine, and batches are processed one file at a time to keep memory use low.",
  },
  {
    q: "Can I convert JPEG and PNG files to WebP?",
    a: "Yes. This tool accepts JPEG, PNG, WebP, AVIF and GIF and outputs WebP, so it works as both a recompressor for existing WebP files and a converter from other formats. Transparency in PNG files is preserved because WebP supports an alpha channel.",
    text: "Yes. This tool accepts JPEG, PNG, WebP, AVIF and GIF and outputs WebP, so it works as both a recompressor for existing WebP files and a converter from other formats. Transparency in PNG files is preserved because WebP supports an alpha channel.",
  },
  {
    q: "Should I use lossy or lossless WebP?",
    a: "Use lossy WebP for photographs and complex imagery where the smallest size matters and tiny detail loss is invisible. Use lossless WebP for logos, icons, screenshots, and graphics with flat colors or sharp text, where you want an exact reproduction with no artifacts.",
    text: "Use lossy WebP for photographs and complex imagery where the smallest size matters and tiny detail loss is invisible. Use lossless WebP for logos, icons, screenshots, and graphics with flat colors or sharp text, where you want an exact reproduction with no artifacts.",
  },
];

export default function Page() {
  return (
    <ToolPageLayout
      slug={SLUG}
      heading="WebP Compressor & Converter"
      intro={
        <>
          Compress existing WebP images or convert JPEG, PNG and other formats to
          WebP — all in your browser. Pick a quality level, drop in your files,
          and download smaller images in seconds. Nothing is ever uploaded.
        </>
      }
      lastUpdated={UPDATED}
      howTo={{
        name: "How to compress or convert to WebP",
        description:
          "Compress WebP or convert images to WebP locally in your browser in four steps.",
        steps: [
          {
            name: "Add your images",
            text: "Drag and drop WebP, JPEG, PNG, AVIF or GIF files onto the dropzone, click to browse, or paste from your clipboard. Add several at once if you like.",
          },
          {
            name: "Choose a quality level",
            text: "Use the quality slider or a preset. Around 80 is an excellent balance of small size and visual fidelity for most photos and graphics.",
          },
          {
            name: "Let it convert on your device",
            text: "Each image is encoded to WebP locally with WebAssembly. You'll see the original size, the new WebP size, and the percentage saved for every file.",
          },
          {
            name: "Download your WebP files",
            text: "Download images one at a time, or grab everything at once as a ZIP. Adjust the quality and re-run anytime to compare.",
          },
        ],
      }}
      faqs={faqs}
      content={
        <>
          <h2 id="why">Why compress and convert to WebP?</h2>
          <p>
            WebP is a modern image format built specifically for the web, and
            switching to it is one of the easiest ways to make a site faster
            without sacrificing how images look. A WebP file is typically{" "}
            <strong>25–35% smaller than an equivalent JPEG</strong> and far
            smaller than a comparable PNG, which means quicker page loads, lower
            bandwidth bills, and a better experience for visitors on slow or
            metered mobile connections.
          </p>
          <p>
            This tool does double duty. If you already have WebP images, it
            re-encodes them at your chosen quality to squeeze out extra savings.
            If you have JPEGs, PNGs, AVIFs or GIFs, it converts them to WebP so
            you can modernize an entire folder of assets at once. Because
            everything runs on your device with a WebAssembly encoder, your
            images are never uploaded — a genuinely private alternative to
            server-based converters that send your photos off to a remote
            machine.
          </p>

          <h2 id="lossy-lossless">Lossy vs lossless WebP, and quality</h2>
          <p>
            WebP supports two distinct compression modes, and choosing the right
            one matters. <strong>Lossy WebP</strong> works like JPEG: it
            permanently discards detail the eye is least likely to notice, which
            yields very small files. It is the right choice for photographs and
            rich, continuous-tone imagery. The quality slider controls how
            aggressive this is — higher values keep more detail at a larger size,
            lower values save more space but can introduce visible artifacts.
          </p>
          <p>
            <strong>Lossless WebP</strong>, by contrast, reproduces every pixel
            exactly, with no artifacts at all. It is the better pick for logos,
            icons, screenshots, and flat-color graphics or text — the same cases
            where you would normally reach for{" "}
            <Link href="/compress-png">PNG</Link>, except WebP usually produces a
            smaller file. For most photographs a lossy quality of{" "}
            <strong>75–85</strong> is the sweet spot: visually identical to the
            original at normal viewing sizes, yet a fraction of the size. Keep in
            mind that lossy compression is cumulative, so always convert from your
            highest-quality original rather than from an already-compressed copy.
          </p>

          <h2 id="format">What is WebP, and when should you use it?</h2>
          <p>
            WebP was developed by Google and combines lossy compression derived
            from the VP8 video codec with an efficient lossless mode. Beyond raw
            size, it supports two features that older formats handle awkwardly:{" "}
            <strong>transparency</strong> (an alpha channel, like PNG) and{" "}
            <strong>animation</strong> (like GIF, but dramatically smaller). That
            combination lets a single format replace JPEG, PNG and animated GIF
            in many situations. You can read the technical overview on{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#webp_image"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN&rsquo;s image format reference
            </a>{" "}
            and a practical guide to adopting it on{" "}
            <a
              href="https://web.dev/articles/serve-images-webp"
              target="_blank"
              rel="noopener noreferrer"
            >
              web.dev
            </a>
            .
          </p>
          <p>
            Browser support is now effectively universal — every current version
            of Chrome, Firefox, Safari and Edge renders WebP — so it is safe to
            use across the modern web. If you need to support very old browsers,
            keep a JPEG or PNG fallback. And when you want the absolute smallest
            files and can accept slower encoding,{" "}
            <Link href="/compress-avif">AVIF</Link> often beats WebP; compare the
            two on your own images. To go the other direction, or to switch
            between several formats at once, use our{" "}
            <Link href="/image-converter">image converter</Link>, and if your
            sources are photographs you may also want our dedicated{" "}
            <Link href="/compress-jpeg">JPEG compressor</Link>.
          </p>

          <h2 id="tips">Tips for the best WebP results</h2>
          <ul>
            <li>
              <strong>Match the mode to the content.</strong> Use lossy WebP for
              photos and lossless WebP for logos, screenshots, and flat graphics
              with sharp edges.
            </li>
            <li>
              <strong>Resize before you encode.</strong> If an image will display
              at 1200px wide, there&rsquo;s no reason to ship a 6000px file. The
              built-in resize option saves far more than quality alone.
            </li>
            <li>
              <strong>Preserve transparency on purpose.</strong> Converting a
              transparent PNG to WebP keeps the alpha channel — but flattening it
              to JPEG would not. Choose WebP when transparency matters.
            </li>
            <li>
              <strong>Compare against AVIF.</strong> For hero images and large
              photos, re-run the same file through AVIF and pick whichever gives
              the smaller size at a quality you&rsquo;re happy with.
            </li>
            <li>
              <strong>Batch by content type.</strong> Group your photos together
              and your graphics together so each set can use a single, ideal
              quality setting in one pass.
            </li>
          </ul>
        </>
      }
    >
      <ImageTool
        toolId={SLUG}
        accept={["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"]}
        outputFormats={["webp"]}
        defaultTarget="webp"
        defaultQuality={80}
      />
    </ToolPageLayout>
  );
}
