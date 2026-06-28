import type { Metadata } from "next";
import Link from "next/link";
import { ImageTool } from "@/components/tools/image-tool";
import { ToolPageLayout, type ToolFaq } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "image-compressor";
const UPDATED = "2026-06-27";

export const metadata: Metadata = buildMetadata({
  title: "Image Compressor — Free Online & Private",
  description:
    "Compress JPEG, PNG, WebP, AVIF & GIF images in your browser. 100% private, no upload, no sign-up — your pictures never leave your device.",
  path: `/${SLUG}`,
});

const faqs: ToolFaq[] = [
  {
    q: "Are my images uploaded to a server?",
    a: (
      <>
        No. Every image you add is decoded and re-encoded entirely in your own
        browser using WebAssembly. Nothing is sent anywhere — there is no upload
        step and no server that ever sees your files. You can even turn off your
        internet connection once the page has loaded and keep compressing.
      </>
    ),
    text: "No. Every image is decoded and re-encoded entirely in your own browser using WebAssembly. Nothing is sent anywhere; there is no upload step and no server that ever sees your files. You can turn off your internet connection once the page has loaded and keep compressing.",
  },
  {
    q: "Is the image compressor free to use?",
    a: (
      <>
        Yes — it is completely free with no account, no watermarks, and no daily
        limits. You can process as many images as your device&rsquo;s memory
        allows. The site is kept running by unobtrusive ads shown alongside the
        article, never inside the tool itself.
      </>
    ),
    text: "Yes. It is completely free with no account, no watermarks, and no daily limits. You can process as many images as your device's memory allows. The site is supported by unobtrusive ads shown alongside the article, not inside the tool.",
  },
  {
    q: "Will compressing reduce the quality of my images?",
    a: (
      <>
        It depends on the format and settings. Lossy formats like JPEG, WebP and
        AVIF discard fine detail to shrink the file, but at a quality of around
        75 the change is usually invisible. Lossless PNG optimization removes no
        detail at all — it only rewrites the file more efficiently. Use the
        quality slider to balance size against fidelity for each job.
      </>
    ),
    text: "It depends on the format and settings. Lossy formats like JPEG, WebP and AVIF discard fine detail to shrink the file, but at a quality of around 75 the change is usually invisible. Lossless PNG optimization removes no detail; it only rewrites the file more efficiently. Use the quality slider to balance size against fidelity.",
  },
  {
    q: "What is the maximum file size I can compress?",
    a: (
      <>
        There is no fixed limit — it is bounded only by your device&rsquo;s
        available memory. Ordinary photos of a few megabytes and large 20–50 MP
        images work comfortably on phones and laptops alike. Batches are
        processed one image at a time, which keeps memory use low even with many
        large files.
      </>
    ),
    text: "There is no fixed limit; it is bounded only by your device's available memory. Ordinary photos of a few megabytes and large 20-50 MP images work comfortably on phones and laptops. Batches are processed one image at a time to keep memory use low.",
  },
  {
    q: "Which image formats does this tool support?",
    a: (
      <>
        You can drop in JPEG, PNG, WebP, AVIF and GIF files, and export to JPEG,
        PNG, WebP or AVIF. Leave the output set to &ldquo;Same format&rdquo; to
        recompress in place, or pick a different format to convert. For a
        dedicated, format-specific workflow, jump to the{" "}
        <Link href="/compress-jpeg">JPEG</Link>,{" "}
        <Link href="/compress-png">PNG</Link>,{" "}
        <Link href="/compress-webp">WebP</Link>,{" "}
        <Link href="/compress-avif">AVIF</Link> or{" "}
        <Link href="/compress-gif">GIF</Link> compressor.
      </>
    ),
    text: "You can drop in JPEG, PNG, WebP, AVIF and GIF files, and export to JPEG, PNG, WebP or AVIF. Leave the output set to Same format to recompress in place, or pick a different format to convert. Dedicated tools exist for JPEG, PNG, WebP, AVIF and GIF.",
  },
  {
    q: "What is the difference between compressing and converting an image?",
    a: (
      <>
        Compressing keeps the same format and makes the file smaller; converting
        changes the format itself — for example turning a heavy PNG screenshot
        into a much smaller WebP. This hub does both: set the output format to
        convert, or keep it the same to compress only. If conversion is your main
        goal, the dedicated <Link href="/image-converter">image converter</Link>{" "}
        is a more focused option, and the{" "}
        <Link href="/image-resizer">image resizer</Link> handles changing
        dimensions.
      </>
    ),
    text: "Compressing keeps the same format and makes the file smaller; converting changes the format itself, such as turning a heavy PNG into a smaller WebP. This hub does both. For conversion the dedicated image converter is more focused, and the image resizer handles changing dimensions.",
  },
];

export default function Page() {
  return (
    <ToolPageLayout
      slug={SLUG}
      heading="Image Compressor"
      intro={
        <>
          Compress and convert JPEG, PNG, WebP, AVIF and GIF images right in your
          browser. Drop in your pictures, choose a format and quality, and
          download smaller files in seconds — everything runs on your device, so
          nothing is ever uploaded.
        </>
      }
      lastUpdated={UPDATED}
      howTo={{
        name: "How to compress an image",
        description:
          "Compress or convert any common image format locally in your browser in four steps.",
        steps: [
          {
            name: "Add your images",
            text: "Drag and drop JPEG, PNG, WebP, AVIF or GIF files onto the dropzone, click to browse, or paste from your clipboard. Mix formats freely — each file is handled on its own.",
          },
          {
            name: "Pick an output format",
            text: "Leave it on Same format to recompress in place, or choose JPEG, PNG, WebP or AVIF to convert. WebP and AVIF give the smallest files for photos.",
          },
          {
            name: "Set quality (and resize if needed)",
            text: "Use the quality slider — around 75 suits most photos — or the lossless level for PNG. Optionally resize by percentage or exact pixels for an even bigger saving.",
          },
          {
            name: "Download your results",
            text: "Save images one at a time or grab everything as a ZIP. Each file shows its original size, new size and percentage saved, so you can re-tune and try again.",
          },
        ],
      }}
      faqs={faqs}
      content={
        <>
          <h2 id="why">Why compress and convert images?</h2>
          <p>
            Images are the single heaviest part of most web pages, emails and
            shared folders. A modern phone camera can produce 4–12 MB photos, and
            screenshots saved as PNG can be surprisingly large too. Oversized
            images slow down websites, push email attachments past size limits,
            fill up cloud storage, and burn through mobile data. Compressing them
            keeps the detail you actually care about while cutting the file size
            dramatically — often by 60–90% depending on the format you choose.
          </p>
          <p>
            This page is the hub for every image format. Because it runs{" "}
            <strong>entirely on your device</strong>, it is also the private way
            to do it. Conventional online compressors upload your photos to a
            remote server, process them there, and send them back. Here, each
            image is read into memory, re-encoded with a WebAssembly codec, and
            handed straight back to you. Your pictures never travel across a
            network, which matters for personal photos, ID scans, contracts and
            anything else you would rather not hand to a stranger&rsquo;s server.
          </p>

          <h2 id="lossy">Lossy versus lossless: the core tradeoff</h2>
          <p>
            Every image format falls into one of two camps.{" "}
            <strong>Lossy</strong> compression — used by JPEG, and the default
            modes of WebP and AVIF — permanently throws away detail the human eye
            is least likely to miss, which is how it achieves such large savings.
            The quality slider controls how aggressive that is: higher values
            keep more detail and produce bigger files, while lower values save
            more space but can introduce visible &ldquo;artifacts&rdquo; like
            blockiness or halos around edges.{" "}
            <strong>Lossless</strong> compression — used by PNG and GIF, and an
            optional mode of WebP — rewrites the file more efficiently without
            discarding a single pixel, so the image is byte-for-byte identical
            when decoded. The catch is that lossless savings are far more modest.
          </p>
          <p>
            The practical rule: use lossy formats for photographs and realistic
            imagery, where a quality of 70–80 is usually indistinguishable from
            the original, and use lossless formats for graphics, logos,
            screenshots and anything with sharp edges or text, where lossy
            artifacts are obvious. Remember that lossy compression is{" "}
            <strong>cumulative</strong> — always work from your highest-quality
            master rather than re-saving an already-compressed copy.
          </p>

          <h2 id="formats">Choosing the right format</h2>
          <p>
            Picking the format matters as much as the quality setting. As a quick
            guide: <strong>JPEG</strong> is the universal choice for photos with
            no transparency; <strong>PNG</strong> is best for flat graphics,
            screenshots and anything needing a transparent background;{" "}
            <strong>WebP</strong> typically produces files 25–35% smaller than
            JPEG while supporting both transparency and animation;{" "}
            <strong>AVIF</strong> is the newest and usually the smallest of all
            for photographs, at the cost of slower encoding; and{" "}
            <strong>GIF</strong> is an old animation format that is almost always
            beaten by converting to WebP or video. The authoritative rundown of
            how each format behaves in browsers lives in{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN&rsquo;s image file type and format guide
            </a>
            .
          </p>
          <p>
            If you already know the format you are working with, the dedicated
            tools give you the most relevant controls and explanations: the{" "}
            <Link href="/compress-jpeg">JPEG compressor</Link> for photos, the{" "}
            <Link href="/compress-png">PNG compressor</Link> for lossless
            graphics, the <Link href="/compress-webp">WebP</Link> and{" "}
            <Link href="/compress-avif">AVIF</Link> tools for the smallest modern
            files, and the <Link href="/compress-gif">GIF compressor</Link> for
            animations. To switch a batch of files from one format to another,
            use the <Link href="/image-converter">image converter</Link>; to
            change pixel dimensions, reach for the{" "}
            <Link href="/image-resizer">image resizer</Link>.
          </p>

          <h2 id="tips">Practical tips for the best results</h2>
          <ul>
            <li>
              <strong>Resize before you compress.</strong> If an image will only
              ever be shown 1200px wide, shipping a 6000px original wastes most of
              the file. Scaling down usually saves more than the quality slider
              ever could.
            </li>
            <li>
              <strong>Match the format to the content.</strong> Photos belong in
              JPEG, WebP or AVIF; logos, icons and screenshots stay sharper and
              smaller as PNG. Converting a PNG photo to WebP can shrink it by an
              order of magnitude.
            </li>
            <li>
              <strong>Keep a master copy.</strong> Because lossy re-encoding
              compounds, always compress from your original rather than from a
              file you exported earlier.
            </li>
            <li>
              <strong>Compare before committing.</strong> Try &ldquo;Balanced&rdquo;
              first, then re-run at &ldquo;Smallest&rdquo; and check whether you
              can spot the difference at the size you will actually display the
              image.
            </li>
            <li>
              <strong>Batch similar images together.</strong> Photos from the
              same camera or screenshots from the same screen usually look great
              at one shared setting, so you can process them in a single pass.
            </li>
          </ul>
        </>
      }
    >
      <ImageTool
        toolId={SLUG}
        accept={["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"]}
        outputFormats={["jpeg", "png", "webp", "avif"]}
        defaultTarget="keep"
        allowKeep
        defaultQuality={75}
      />
    </ToolPageLayout>
  );
}
