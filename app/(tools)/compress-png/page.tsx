import type { Metadata } from "next";
import Link from "next/link";
import { ImageTool } from "@/components/tools/image-tool";
import { ToolPageLayout, type ToolFaq } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "compress-png";
const UPDATED = "2026-06-27";

export const metadata: Metadata = buildMetadata({
  title: "Compress PNG — Free Online PNG Optimizer",
  description:
    "Optimize PNG images in your browser with OxiPNG — lossless, private, no upload. Or convert to WebP for much smaller files. Your images never leave your device.",
  path: `/${SLUG}`,
});

const faqs: ToolFaq[] = [
  {
    q: "Are my PNG files uploaded to a server?",
    a: "No. Every PNG is optimized locally in your browser using WebAssembly. Your images never leave your device, and there is no server to upload them to — you can even disconnect from the internet after the page loads and it still works.",
    text: "No. Every PNG is optimized locally in your browser using WebAssembly. Your images never leave your device and there is no server to upload them to. You can disconnect from the internet after the page loads and it still works.",
  },
  {
    q: "Is the PNG compressor really free?",
    a: "Yes — it is completely free with no sign-up, no watermarks, and no file-count or file-size limits beyond what your device's memory can handle. The site is supported by unobtrusive ads.",
    text: "Yes. It is completely free with no sign-up, no watermarks, and no file-count or file-size limits beyond what your device's memory can handle. The site is supported by unobtrusive ads.",
  },
  {
    q: "Will optimizing my PNG reduce its quality?",
    a: (
      <>
        No — PNG optimization with OxiPNG is{" "}
        <strong>completely lossless</strong>. Every pixel is preserved exactly,
        including transparency; OxiPNG simply rewrites the file more efficiently.
        The trade-off is that lossless savings are modest, usually 5–30%. If you
        convert to WebP instead, that step is lossy and can change the image
        slightly, but cuts the size far more.
      </>
    ),
    text: "No. PNG optimization with OxiPNG is completely lossless. Every pixel is preserved exactly, including transparency; OxiPNG just rewrites the file more efficiently. Lossless savings are modest, usually 5-30%. Converting to WebP is lossy but cuts size far more.",
  },
  {
    q: "What is the maximum file size I can optimize?",
    a: "There is no hard limit — it depends on your device's available memory. Phones and laptops comfortably handle typical screenshots and logos, and even large high-resolution PNGs. Big batches are processed one file at a time to keep memory use low.",
    text: "There is no hard limit; it depends on your device's available memory. Typical screenshots, logos and even large high-resolution PNGs work fine. Big batches are processed one file at a time to keep memory use low.",
  },
  {
    q: "Why is my PNG photo still huge after optimizing?",
    a: (
      <>
        PNG is lossless, so it cannot throw away photographic detail the way JPEG
        or WebP can — a full-color photo simply needs a lot of data as a PNG.
        Optimization trims the overhead, but the real fix for photos is to convert
        to a lossy format. Try our{" "}
        <Link href="/compress-webp">WebP</Link> or{" "}
        <Link href="/compress-avif">AVIF</Link> tools to make photo files a
        fraction of the size.
      </>
    ),
    text: "PNG is lossless, so it cannot discard photographic detail the way JPEG or WebP can; a full-color photo needs a lot of data as a PNG. Optimization trims overhead, but the real fix for photos is converting to a lossy format like WebP or AVIF.",
  },
  {
    q: "Does optimizing keep my PNG transparency?",
    a: "Yes. The alpha (transparency) channel is preserved exactly, so logos, icons and UI assets with transparent backgrounds come out pixel-identical — just in a smaller file. Converting to WebP also keeps transparency; converting to JPEG does not, since JPEG has no alpha channel.",
    text: "Yes. The alpha (transparency) channel is preserved exactly, so logos, icons and UI assets with transparent backgrounds come out pixel-identical in a smaller file. WebP also keeps transparency; JPEG does not, since it has no alpha channel.",
  },
];

export default function Page() {
  return (
    <ToolPageLayout
      slug={SLUG}
      heading="PNG Compressor"
      intro={
        <>
          Optimize PNG images right in your browser with OxiPNG, a lossless
          optimizer that shrinks files without touching a single pixel. Keep your
          transparency and crisp edges intact — or convert to WebP for far bigger
          savings. Nothing is ever uploaded.
        </>
      }
      lastUpdated={UPDATED}
      howTo={{
        name: "How to compress a PNG",
        description:
          "Optimize PNG images losslessly in your browser in four steps.",
        steps: [
          {
            name: "Add your PNG images",
            text: "Drag and drop your PNG files onto the dropzone, click to browse, or paste from your clipboard. You can add several at once.",
          },
          {
            name: "Choose an optimization level",
            text: "Pick Fast, Balanced or Max. Higher levels search harder for a smaller lossless encoding, so they take a bit longer but squeeze out a little more.",
          },
          {
            name: "Optimize on your device",
            text: "Each PNG is rewritten locally with OxiPNG. You'll see the original size, new size, and percentage saved for every file — with every pixel preserved.",
          },
          {
            name: "Download — or convert for more",
            text: "Download files individually or all at once as a ZIP. If a PNG photo is still large, switch the output to WebP for a much smaller, web-friendly result.",
          },
        ],
      }}
      faqs={faqs}
      content={
        <>
          <h2 id="why">Why compress or convert a PNG?</h2>
          <p>
            PNG is everywhere — it&rsquo;s the default for screenshots, the
            go-to for logos and icons, and the standard for any graphic that
            needs a transparent background. The catch is that PNG files are often
            bigger than they need to be. Image editors and screenshot tools save
            generous, unoptimized files with extra metadata, suboptimal
            compression settings, and color data they don&rsquo;t need.
            Optimizing strips that waste away so pages load faster, attachments
            send quicker, and storage goes further.
          </p>
          <p>
            Because this tool runs entirely on your device, it&rsquo;s also the
            private way to do it. Traditional online optimizers upload your
            images to a remote server, process them there, and send them back.
            Here, each PNG is read into memory, rewritten with a WebAssembly build
            of <strong>OxiPNG</strong>, and handed straight back to you — your
            files never touch a network, which matters when a screenshot or design
            asset contains sensitive information.
          </p>

          <h2 id="lossless">Lossless optimization vs. lossy conversion</h2>
          <p>
            PNG is a <strong>lossless</strong> format: it reproduces every pixel
            exactly, with no compression artifacts and full support for
            transparency. That fidelity is the whole point of PNG, but it also
            limits how small a PNG can get. OxiPNG keeps your image{" "}
            <strong>pixel-perfect</strong> — it only finds a more efficient way to
            store the same data by reducing the color palette where possible,
            choosing better filters, and dropping needless chunks. Be honest about
            the math: lossless savings are <strong>modest, typically 5–30%</strong>
            , and an already-optimized PNG may barely shrink at all.
          </p>
          <p>
            When you need a dramatic reduction, the answer isn&rsquo;t a better
            PNG — it&rsquo;s a different format. Converting a PNG to{" "}
            <Link href="/compress-webp">WebP</Link> or{" "}
            <Link href="/compress-avif">AVIF</Link> applies lossy compression that
            can cut file size by 60–90% while still supporting transparency. The
            trade-off is that lossy conversion can introduce subtle changes, so
            it&rsquo;s ideal for photographs and complex images, while lossless PNG
            stays best for sharp-edged graphics where every pixel matters. This
            tool lets you choose: keep PNG for fidelity, or switch the output to
            WebP for size.
          </p>

          <h2 id="format">What is a PNG, and when should you use it?</h2>
          <p>
            PNG (Portable Network Graphics) was created as a patent-free,
            lossless replacement for GIF. It uses DEFLATE compression together
            with per-row prediction filters, and supports a full 8-bit alpha
            channel for smooth transparency. That makes it excellent for{" "}
            <strong>logos, icons, screenshots, line art, charts, and any image
            with sharp edges, flat color, or text</strong> — content that lossy
            formats blur or surround with halos. You can read the technical
            details on{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN&rsquo;s image format reference
            </a>
            .
          </p>
          <p>
            PNG is the <strong>wrong</strong> choice for photographs. Because it
            never discards detail, a continuous-tone photo becomes an enormous PNG
            — often many times larger than the same image as a{" "}
            <Link href="/compress-jpeg">JPEG</Link> or WebP. If you&rsquo;ve been
            saving photos as PNG, that single habit is probably your biggest
            source of bloat. Reach for PNG when you need crisp edges or
            transparency, and reach for a lossy format when you have a photo. Not
            sure which to use? Our{" "}
            <Link href="/image-converter">image converter</Link> lets you try both
            and compare the results side by side.
          </p>

          <h2 id="tips">Tips for the best results</h2>
          <ul>
            <li>
              <strong>Match the optimization level to the job.</strong> Use{" "}
              &ldquo;Fast&rdquo; for a quick pass on many files, and
              &ldquo;Max&rdquo; when squeezing every last byte from a single
              hero image is worth the extra processing time.
            </li>
            <li>
              <strong>Resize before you optimize.</strong> A 4K screenshot shown
              at 800px wide is mostly wasted pixels. Use the built-in resize
              option for a far bigger saving than lossless optimization can ever
              deliver on its own.
            </li>
            <li>
              <strong>Convert photos, don&rsquo;t fight them.</strong> If a
              &ldquo;PNG&rdquo; is really a photo, switch the output to{" "}
              <Link href="/compress-webp">WebP</Link> instead of expecting
              lossless optimization to work miracles.
            </li>
            <li>
              <strong>Keep PNG for transparency.</strong> When you need a
              transparent background and broad compatibility, lossless PNG is the
              safe pick — and OxiPNG keeps that alpha channel pixel-perfect.
            </li>
          </ul>
        </>
      }
    >
      <ImageTool
        toolId={SLUG}
        accept={["image/png"]}
        outputFormats={["png", "webp"]}
        defaultTarget="png"
        defaultQuality={80}
      />
    </ToolPageLayout>
  );
}
