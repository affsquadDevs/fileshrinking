import type { Metadata } from "next";
import Link from "next/link";
import { ImageTool } from "@/components/tools/image-tool";
import { ToolPageLayout, type ToolFaq } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "compress-avif";
const UPDATED = "2026-06-27";

export const metadata: Metadata = buildMetadata({
  title: "Compress AVIF — Free Online AVIF Converter",
  description:
    "Convert and compress images to AVIF in your browser. Private, no upload, no sign-up — your files never leave your device. Tiny files, great quality.",
  path: `/${SLUG}`,
});

const faqs: ToolFaq[] = [
  {
    q: "Are my AVIF files uploaded to a server?",
    a: "No. Encoding happens entirely on your device using a WebAssembly AV1 encoder. Your images are read into memory, converted to AVIF locally, and handed back to you — nothing is ever uploaded, so you can even go offline after the page loads.",
    text: "No. Encoding happens entirely on your device using a WebAssembly AV1 encoder. Your images are read into memory, converted to AVIF locally, and handed back to you. Nothing is ever uploaded, so you can go offline after the page loads.",
  },
  {
    q: "Is the AVIF compressor really free?",
    a: "Yes — it is completely free with no sign-up, no watermarks, and no file-count or size limits beyond your device's memory. The site is supported by unobtrusive ads.",
    text: "Yes. It is completely free with no sign-up, no watermarks, and no file-count or size limits beyond your device's memory. The site is supported by unobtrusive ads.",
  },
  {
    q: "How does AVIF affect image quality?",
    a: (
      <>
        AVIF compression is lossy, but its AV1-based encoder preserves detail far
        better than older formats at the same file size. Note that the quality
        scale reads differently: a value around <strong>50–60</strong> on AVIF
        usually looks excellent, whereas the same number on JPEG would look poor.
        Raise the slider for near-perfect fidelity, or lower it for the smallest
        possible files.
      </>
    ),
    text: "AVIF compression is lossy, but its AV1-based encoder preserves detail far better than older formats at the same file size. The quality scale reads differently: around 50-60 usually looks excellent, whereas the same number on JPEG would look poor. Raise the slider for near-perfect fidelity or lower it for the smallest files.",
  },
  {
    q: "Why is AVIF encoding slow?",
    a: (
      <>
        AVIF uses the AV1 codec, which is computationally heavy — it does much
        more work per pixel than JPEG or WebP to reach its tiny file sizes.
        Running that encoder in the browser with WebAssembly means a large photo
        can take several seconds, and very large images (think 20+ megapixels)
        can take noticeably longer. This is normal: the wait buys you a
        dramatically smaller file. Resizing first speeds things up a lot.
      </>
    ),
    text: "AVIF uses the AV1 codec, which is computationally heavy and does much more work per pixel than JPEG or WebP. Running that encoder in the browser with WebAssembly means a large photo can take several seconds, and very large images can take noticeably longer. This is normal and resizing first speeds things up.",
  },
  {
    q: "What is the maximum file size I can convert?",
    a: "There is no hard limit — it depends on your device's available memory. Typical photos work fine, and large 20–50 MP images are supported too, though they encode more slowly because AV1 is intensive. Batches are processed one file at a time to keep memory use low.",
    text: "There is no hard limit; it depends on your device's available memory. Typical photos work fine and large 20-50 MP images are supported too, though they encode more slowly because AV1 is intensive. Batches are processed one file at a time to keep memory use low.",
  },
  {
    q: "Which browsers can open AVIF files?",
    a: (
      <>
        Browser support is now broad: Chrome, Edge, Firefox, Safari, and Opera
        all display AVIF on modern versions, and most phones do too. For very old
        browsers or some desktop apps that haven&rsquo;t caught up, keep a{" "}
        <Link href="/compress-jpeg">JPEG</Link> or{" "}
        <Link href="/compress-webp">WebP</Link> fallback, or serve AVIF inside a{" "}
        <code>&lt;picture&gt;</code> element so the browser picks the best format
        it can read.
      </>
    ),
    text: "Browser support is now broad: Chrome, Edge, Firefox, Safari and Opera all display AVIF on modern versions, and most phones do too. For very old browsers or some desktop apps, keep a JPEG or WebP fallback, or serve AVIF inside a picture element so the browser picks the best format it can read.",
  },
];

export default function Page() {
  return (
    <ToolPageLayout
      slug={SLUG}
      heading="AVIF Compressor & Converter"
      intro={
        <>
          Turn JPEG, PNG, WebP, GIF or existing AVIF images into tiny,
          high-quality AVIF files right in your browser. AVIF is the smallest
          modern image format — pick a quality level, drop in your photos, and
          download featherweight files without anything ever being uploaded.
        </>
      }
      lastUpdated={UPDATED}
      howTo={{
        name: "How to convert and compress AVIF",
        description:
          "Create or recompress AVIF images locally in your browser in four steps.",
        steps: [
          {
            name: "Add your images",
            text: "Drag and drop JPEG, PNG, WebP, GIF or AVIF files onto the dropzone, click to browse, or paste from your clipboard. You can add several at once.",
          },
          {
            name: "Pick a quality level",
            text: "AVIF's quality scale runs lower than JPEG's — a default around 55 already looks great. Raise it for near-lossless results or lower it for the very smallest files.",
          },
          {
            name: "Let the AV1 encoder run on your device",
            text: "Each image is encoded locally to AVIF. AV1 is intensive, so large photos may take a few seconds — that is expected, and it is what makes the files so small.",
          },
          {
            name: "Download your AVIF files",
            text: "Save images one at a time, or grab everything as a ZIP. Adjust the quality and re-encode anytime to find your ideal size.",
          },
        ],
      }}
      faqs={faqs}
      content={
        <>
          <h2 id="why">Why convert images to AVIF?</h2>
          <p>
            AVIF is the smallest mainstream image format available today. Built
            on the royalty-free <strong>AV1</strong> video codec, it routinely
            produces files <strong>30–50% smaller than WebP</strong> and often
            half the size of a comparable JPEG — at the same perceived quality.
            For photo-heavy websites, that translates directly into faster page
            loads, better Core Web Vitals, lower bandwidth bills, and a smoother
            experience on slow mobile connections.
          </p>
          <p>
            Beyond raw size, AVIF brings genuinely modern features to still
            images: full <strong>alpha transparency</strong> like PNG, wide color
            gamut and <strong>HDR</strong> (10- and 12-bit) support, and both
            lossy and lossless modes in one format. Because this converter runs
            entirely on your device, it is also the private way to adopt AVIF —
            unlike typical online converters, your photos are encoded with a
            WebAssembly AV1 build right in the page and never travel to a server.
          </p>

          <h2 id="quality">Quality, the AVIF scale, and encoding speed</h2>
          <p>
            AVIF is normally used as a <strong>lossy</strong> format, discarding
            detail the eye is least likely to miss — but it does so far more
            cleverly than JPEG, avoiding the blocky artifacts you get when you
            push older formats too hard. One thing to know up front: the{" "}
            <strong>quality numbers read differently</strong>. A setting near{" "}
            <strong>50–60</strong> on AVIF typically looks excellent, where the
            same value on a JPEG would look rough. That is why this tool defaults
            to around <strong>55</strong> — it is a sweet spot, not a compromise.
          </p>
          <p>
            The honest trade-off is <strong>speed</strong>. AV1 does a great deal
            of computation per pixel to reach those tiny sizes, and running it in
            the browser through WebAssembly is slower than a JPEG or WebP encode.
            A typical photo finishes in a few seconds; a very large 20+ megapixel
            image can take noticeably longer, and a big batch adds up. This is
            expected — it is the cost of AVIF&rsquo;s efficiency, not a bug.
            Resizing before you encode is the single biggest speed-up, and it
            shrinks the output even further.
          </p>

          <h2 id="format">What is AVIF, and when should you use it?</h2>
          <p>
            AVIF (AV1 Image File Format) stores one or more AV1-encoded frames in
            an ISO base media container — the same family as MP4. It supports
            transparency, animation, wide color, and HDR, which makes it a strong
            single replacement for JPEG, PNG, and even animated GIF in many cases.
            You can read the full breakdown of capabilities and browser support on{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#avif_image"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN&rsquo;s AVIF image documentation
            </a>
            .
          </p>
          <p>
            AVIF is an excellent default for photographs and rich web imagery
            destined for modern browsers. It is less ideal when you need
            universal compatibility with older software, when files must be
            re-edited many times (each lossy pass loses a little), or for simple
            flat graphics where lossless{" "}
            <Link href="/compress-png">PNG</Link> can rival it. If you want
            slightly broader support with still-great compression,{" "}
            <Link href="/compress-webp">WebP</Link> is the natural middle ground,
            and our <Link href="/image-converter">image converter</Link> lets you
            compare formats side by side. To trim oversized source images before
            encoding, reach for the{" "}
            <Link href="/image-resizer">image resizer</Link>.
          </p>

          <h2 id="tips">Tips for the best AVIF results</h2>
          <ul>
            <li>
              <strong>Trust the lower numbers.</strong> Don&rsquo;t set AVIF
              quality to 80–90 out of JPEG habit — start near 55 and only raise it
              if you can actually see a difference at your display size.
            </li>
            <li>
              <strong>Resize before encoding.</strong> Shipping a 6000px image
              that displays at 1200px wastes both file size and encoding time.
              Resizing first makes the slow AV1 pass dramatically faster.
            </li>
            <li>
              <strong>Keep a JPEG or WebP fallback.</strong> For maximum reach,
              serve AVIF inside a <code>&lt;picture&gt;</code> element with a{" "}
              <Link href="/compress-jpeg">JPEG</Link> or{" "}
              <Link href="/compress-webp">WebP</Link> source so older clients
              still get an image.
            </li>
            <li>
              <strong>Be patient with big batches.</strong> AVIF&rsquo;s savings
              are worth the wait. Queue your files, let the encoder work through
              them one by one, and download everything as a ZIP at the end.
            </li>
          </ul>
        </>
      }
    >
      <ImageTool
        toolId={SLUG}
        accept={["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"]}
        outputFormats={["avif"]}
        defaultTarget="avif"
        defaultQuality={55}
      />
    </ToolPageLayout>
  );
}
