import type { Metadata } from "next";
import Link from "next/link";
import { ImageTool } from "@/components/tools/image-tool";
import { ToolPageLayout, type ToolFaq } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "compress-jpeg";
const UPDATED = "2026-06-27";

export const metadata: Metadata = buildMetadata({
  title: "Compress JPEG — Free Online JPG Compressor",
  description:
    "Compress JPG & JPEG images in your browser with MozJPEG. Adjustable quality, batch processing, zero uploads — your photos never leave your device.",
  path: `/${SLUG}`,
});

const faqs: ToolFaq[] = [
  {
    q: "Are my JPEG files uploaded to a server?",
    a: "No. Every image is compressed locally in your browser using WebAssembly. Your files never leave your device, and there is no server to upload them to — you can even disconnect from the internet after the page loads and it still works.",
    text: "No. Every image is compressed locally in your browser using WebAssembly. Your files never leave your device and there is no server to upload them to. You can disconnect from the internet after the page loads and it still works.",
  },
  {
    q: "Is the JPEG compressor really free?",
    a: "Yes — it is completely free with no sign-up, no watermarks, and no file-count or file-size limits beyond what your device's memory can handle. The site is supported by unobtrusive ads.",
    text: "Yes. It is completely free with no sign-up, no watermarks, and no file-count or file-size limits beyond what your device's memory can handle. The site is supported by unobtrusive ads.",
  },
  {
    q: "Will compressing reduce the quality of my photos?",
    a: "JPEG compression is lossy, so some data is discarded. At quality 70–80 the difference is usually invisible while the file is far smaller. Lower the quality slider for smaller files, or raise it to stay closer to the original.",
    text: "JPEG is a lossy format, so some data is discarded. At quality 70-80 the difference is usually invisible while the file is much smaller. Lower the quality slider for smaller files or raise it to stay closer to the original.",
  },
  {
    q: "What is the maximum file size I can compress?",
    a: "There is no hard limit — it depends on your device's available memory. Phones and laptops comfortably handle typical photos (a few megabytes) and even large 20–50 MP images. Very large batches are processed one file at a time to keep memory use low.",
    text: "There is no hard limit; it depends on your device's available memory. Typical photos of a few megabytes and even large 20-50 MP images work fine. Large batches are processed one file at a time to keep memory use low.",
  },
  {
    q: "Can I compress many JPEGs at once?",
    a: "Yes. Drop in as many files as you like and they are queued and compressed sequentially, then you can download them individually or all together as a ZIP.",
    text: "Yes. Add as many files as you like; they are queued and compressed one by one, then downloaded individually or together as a ZIP.",
  },
  {
    q: "Does it keep my original if compression would make the file bigger?",
    a: "Yes. If a re-encoded JPEG would be larger than your original (common with already-optimized images), the tool keeps your original file and tells you it was already well-optimized.",
    text: "Yes. If a re-encoded JPEG would be larger than the original, the tool keeps your original file and notes that it was already well-optimized.",
  },
];

export default function Page() {
  return (
    <ToolPageLayout
      slug={SLUG}
      heading="JPEG Compressor"
      intro={
        <>
          Compress JPG and JPEG images right in your browser using MozJPEG, the
          same encoder trusted by photographers and web developers. Pick a
          quality level, drop in your photos, and download smaller files in
          seconds — nothing is ever uploaded.
        </>
      }
      lastUpdated={UPDATED}
      howTo={{
        name: "How to compress a JPEG",
        description:
          "Compress JPG/JPEG images locally in your browser in four steps.",
        steps: [
          {
            name: "Add your images",
            text: "Drag and drop your JPG files onto the dropzone, click to browse, or paste from your clipboard. You can add several at once.",
          },
          {
            name: "Choose a quality level",
            text: "Use the quality slider or a preset. Around 75 is a great balance of size and visual quality for most photos.",
          },
          {
            name: "Let it compress on your device",
            text: "Each image is compressed locally with MozJPEG. You'll see the original size, new size, and percentage saved for every file.",
          },
          {
            name: "Download your files",
            text: "Download images one by one, or grab everything at once as a ZIP. Adjust the quality and re-compress anytime.",
          },
        ],
      }}
      faqs={faqs}
      content={
        <>
          <h2 id="why">Why compress JPEG images?</h2>
          <p>
            JPEG (also written JPG) is the most common format for photographs on
            the web, but camera and phone images are often far larger than they
            need to be — frequently several megabytes each. Large images slow
            down websites, fill up email attachments, eat into cloud storage,
            and waste mobile data. Compressing them keeps the visual quality you
            care about while dramatically cutting the file size, often by 60–80%.
          </p>
          <p>
            Because this tool runs entirely on your device, it is also the
            private way to do it. Traditional online compressors upload your
            photos to a remote server, process them there, and send them back.
            Here, your images are read into memory, compressed with a WebAssembly
            build of MozJPEG, and handed straight back to you — they never touch
            a network.
          </p>

          <h2 id="lossy">Lossy compression and quality: what to expect</h2>
          <p>
            JPEG is a <strong>lossy</strong> format: to make files smaller it
            permanently discards image detail that the human eye is least likely
            to notice. The quality slider controls how aggressive that is. Higher
            values preserve more detail and produce larger files; lower values
            save more space but can introduce visible &ldquo;artifacts&rdquo;
            such as blockiness or halos around sharp edges.
          </p>
          <p>
            For most photographs, a quality of <strong>70–80</strong> is the
            sweet spot — the result is visually indistinguishable from the
            original at normal viewing sizes, yet a fraction of the size. Drop to
            50–60 when small size matters more than perfect fidelity (for
            example thumbnails), and stay at 85–90 for images with fine gradients
            or text where artifacts are more obvious. Compression is{" "}
            <strong>cumulative</strong>, so always re-compress from your highest
            quality original rather than from an already-compressed copy.
          </p>

          <h2 id="format">What is a JPEG, and when should you use it?</h2>
          <p>
            JPEG was standardized by the Joint Photographic Experts Group and
            uses the discrete cosine transform to compress continuous-tone images
            efficiently. It excels at photographs and realistic imagery with
            smooth color transitions, which is why nearly every camera saves
            JPEGs by default. You can read the technical details on{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN&rsquo;s image format reference
            </a>
            .
          </p>
          <p>
            JPEG is not always the right choice, though. It does not support
            transparency and handles flat graphics, logos, screenshots, and text
            poorly — those compress better and look sharper as{" "}
            <Link href="/compress-png">PNG</Link>. And for the smallest possible
            photos with modern browser support, newer formats win: a{" "}
            <Link href="/compress-webp">WebP</Link> file is typically 25–35%
            smaller than an equivalent JPEG, and{" "}
            <Link href="/compress-avif">AVIF</Link> can be smaller still. If
            you&rsquo;re optimizing for the web, try converting with our{" "}
            <Link href="/image-converter">image converter</Link> and compare.
          </p>

          <h2 id="tips">Tips for the best results</h2>
          <ul>
            <li>
              <strong>Start from the original.</strong> Re-saving a JPEG repeatedly
              degrades it. Keep a master copy and compress from that.
            </li>
            <li>
              <strong>Resize before you compress.</strong> If an image will be
              displayed at 1200px wide, there&rsquo;s no need to ship a 6000px
              file. Use the built-in resize option for a much bigger saving than
              quality alone.
            </li>
            <li>
              <strong>Use presets to compare.</strong> Try &ldquo;Balanced&rdquo;
              first, then re-compress at &ldquo;Smallest&rdquo; and check whether
              you can tell the difference at your display size.
            </li>
            <li>
              <strong>Batch similar images together.</strong> Photos from the
              same camera usually look great at the same quality setting, so you
              can process them in one go.
            </li>
          </ul>
        </>
      }
    >
      <ImageTool
        toolId={SLUG}
        accept={["image/jpeg"]}
        outputFormats={["jpeg"]}
        defaultTarget="jpeg"
        defaultQuality={75}
      />
    </ToolPageLayout>
  );
}
