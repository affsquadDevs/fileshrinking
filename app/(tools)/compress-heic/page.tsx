import type { Metadata } from "next";
import Link from "next/link";
import { ImageTool } from "@/components/tools/image-tool";
import { ToolPageLayout, type ToolFaq } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "compress-heic";
const UPDATED = "2026-06-28";

export const metadata: Metadata = buildMetadata({
  title: "Compress HEIC — Free HEIC to JPG Converter",
  description:
    "Convert iPhone HEIC & HEIF photos to JPG, WebP or AVIF in your browser, with adjustable quality and resizing. Zero uploads — your photos never leave your device.",
  path: `/${SLUG}`,
});

const faqs: ToolFaq[] = [
  {
    q: "Are my HEIC photos uploaded to a server?",
    a: "No. Your HEIC files are decoded and re-encoded entirely in your browser using WebAssembly — they never leave your device. Most other &ldquo;HEIC converter&rdquo; sites upload your personal photos to their servers; this one has no server to upload to, and you can disconnect from the internet after the page loads and it still works.",
    text: "No. HEIC files are decoded and re-encoded entirely in your browser using WebAssembly and never leave your device. Most other HEIC converter sites upload your personal photos to a server; this one does not. You can disconnect from the internet after the page loads and it still works.",
  },
  {
    q: "Why would I convert HEIC to JPG?",
    a: "HEIC is Apple's default photo format, but many Windows PCs, websites, apps, and older devices can't open it. Converting to JPG (or WebP/AVIF) makes your photos open everywhere, so you can share, upload, and edit them without compatibility errors.",
    text: "HEIC is Apple's default photo format but many Windows PCs, websites, apps, and older devices cannot open it. Converting to JPG, WebP, or AVIF makes the photos open everywhere so you can share, upload, and edit them.",
  },
  {
    q: "Will converting reduce my photo's quality?",
    a: "Converting to JPEG, WebP, or AVIF is lossy, so some detail is re-encoded. At quality 75–85 the difference is normally invisible at standard viewing sizes. Keep the quality high to stay faithful to the original, or lower it (and resize) when a smaller file matters more.",
    text: "Converting to JPEG, WebP, or AVIF is lossy so some detail is re-encoded. At quality 75-85 the difference is normally invisible. Keep quality high to stay faithful to the original, or lower it and resize when a smaller file matters more.",
  },
  {
    q: "Why is the converted JPG sometimes larger than the HEIC?",
    a: "HEIC is an extremely efficient format — it often stores a photo in roughly half the size of an equivalent JPEG. So a straight HEIC→JPEG conversion can occasionally produce a larger file. To actually shrink the photo, choose WebP or AVIF (which match HEIC's efficiency), lower the quality slider, or resize the image.",
    text: "HEIC is very efficient and often stores a photo in about half the size of an equivalent JPEG, so a straight HEIC to JPEG conversion can produce a larger file. To shrink the photo, choose WebP or AVIF, lower the quality slider, or resize the image.",
  },
  {
    q: "What's the difference between HEIC and HEIF?",
    a: "HEIF (High Efficiency Image File Format) is the container; HEIC is the common variant Apple uses, where the image inside is encoded with HEVC (H.265). In everyday use the names are interchangeable — this tool accepts both .heic and .heif files.",
    text: "HEIF (High Efficiency Image File Format) is the container and HEIC is the common Apple variant where the image is encoded with HEVC (H.265). The names are used interchangeably; this tool accepts both .heic and .heif files.",
  },
  {
    q: "Can I convert several HEIC photos at once?",
    a: "Yes. Drop in a whole batch — for example a folder of photos AirDropped from your iPhone — and they're converted one at a time, then you can download them individually or all together as a ZIP.",
    text: "Yes. Add a whole batch of HEIC photos and they are converted one at a time, then downloaded individually or together as a ZIP.",
  },
  {
    q: "Is the HEIC converter free?",
    a: "Completely free — no sign-up, no watermarks, and no file-count or size limits beyond your device's memory. The site is supported by unobtrusive ads, and the code is open source so you can verify exactly what it does.",
    text: "Yes. It is completely free with no sign-up, watermarks, or file limits beyond your device's memory. The site is supported by unobtrusive ads and the code is open source.",
  },
];

export default function Page() {
  return (
    <ToolPageLayout
      slug={SLUG}
      heading="HEIC Compressor & Converter"
      intro={
        <>
          Turn iPhone HEIC and HEIF photos into universally-compatible JPG, WebP,
          or AVIF files — and shrink them with adjustable quality and resizing.
          Everything runs in your browser, so your photos are never uploaded.
        </>
      }
      lastUpdated={UPDATED}
      howTo={{
        name: "How to convert and compress HEIC photos",
        description:
          "Convert iPhone HEIC/HEIF images to JPG, WebP, or AVIF locally in your browser.",
        steps: [
          {
            name: "Add your HEIC photos",
            text: "Drag and drop your .heic or .heif files onto the dropzone, click to browse, or paste them. You can add a whole batch at once.",
          },
          {
            name: "Pick an output format",
            text: "Choose JPG for maximum compatibility, or WebP/AVIF for the smallest files. Set a quality level — around 80 is great for photos.",
          },
          {
            name: "Convert on your device",
            text: "Each photo is decoded with a WebAssembly build of libheif and re-encoded locally. You'll see the original and new size for every file.",
          },
          {
            name: "Download your photos",
            text: "Download images one at a time, or grab everything as a ZIP. Adjust the format, quality, or size and re-run anytime.",
          },
        ],
      }}
      faqs={faqs}
      content={
        <>
          <h2 id="why-convert">Why convert HEIC files?</h2>
          <p>
            Since iOS 11, iPhones and iPads save photos as <strong>HEIC</strong>{" "}
            by default. It&rsquo;s a brilliant format for saving space on your
            device, but it has one big drawback: <strong>compatibility</strong>.
            Plenty of Windows PCs, web apps, content management systems, photo
            printers, and older phones still can&rsquo;t open a .heic file,
            which leads to the all-too-familiar &ldquo;unsupported format&rdquo;
            error when you try to share or upload a picture.
          </p>
          <p>
            Converting your HEIC photos to a widely-supported format like{" "}
            <strong>JPG</strong>, <strong>WebP</strong>, or{" "}
            <strong>AVIF</strong> fixes that instantly — the image opens
            everywhere, while you keep control over quality and file size. And
            because this tool runs entirely on your device, your personal photos
            are never uploaded to anyone&rsquo;s server.
          </p>

          <h2 id="what-is-heic">What is HEIC (and HEIF)?</h2>
          <p>
            HEIC stands for <em>High Efficiency Image Container</em>. It&rsquo;s
            Apple&rsquo;s implementation of the{" "}
            <strong>HEIF</strong> (High Efficiency Image File Format) standard,
            in which the actual picture is compressed with{" "}
            <strong>HEVC (H.265)</strong> — the same modern video codec used for
            efficient video. That advanced compression is why a HEIC photo is
            typically around <strong>half the size</strong> of an equivalent
            JPEG at the same visual quality, and why it can also store extras
            like depth maps, Live Photos, and wider color. You can read more
            about how browsers handle image formats on{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN&rsquo;s image format reference
            </a>
            . The decoding here is powered by{" "}
            <a
              href="https://github.com/strukturag/libheif"
              target="_blank"
              rel="noopener noreferrer"
            >
              libheif
            </a>
            , the open-source HEIF/HEIC library, compiled to WebAssembly.
          </p>

          <h2 id="compress-vs-convert">
            Compressing vs converting: what to expect
          </h2>
          <p>
            Here&rsquo;s an honest point most converters won&rsquo;t tell you:
            because HEIC is already so efficient, a plain HEIC&nbsp;→&nbsp;JPEG
            conversion <strong>won&rsquo;t always make the file smaller</strong>
            — and can occasionally make it a little larger. That&rsquo;s not a
            bug; it&rsquo;s the cost of moving to JPEG&rsquo;s older, more
            compatible compression.
          </p>
          <p>
            If your goal is genuinely smaller files, you have three levers, and
            you can combine them:
          </p>
          <ul>
            <li>
              <strong>Choose WebP or AVIF instead of JPEG.</strong> These modern
              formats rival HEIC&rsquo;s efficiency, so you keep the small size{" "}
              <em>and</em> gain broad compatibility. AVIF, like HEIC, is based on
              modern codec technology and usually produces the smallest result.
            </li>
            <li>
              <strong>Lower the quality slider.</strong> Dropping from 90 to
              70–75 cuts the file substantially with little visible change.
            </li>
            <li>
              <strong>Resize the image.</strong> A 4032&times;3024 phone photo is
              far larger than any screen needs. Scaling it down is the single
              biggest saving for sharing or the web.
            </li>
          </ul>

          <h2 id="choosing-format">JPEG, WebP, or AVIF: which to choose</h2>
          <p>
            <strong>JPEG</strong> is the safe default: every device, app, and
            website on earth can open it, making it perfect for emailing photos,
            uploading to a site that rejects HEIC, or sending to someone on
            Windows. <Link href="/compress-jpeg">Compress JPEGs</Link> further
            anytime.
          </p>
          <p>
            <strong>WebP</strong> is widely supported in modern browsers and
            apps and is roughly 25–35% smaller than JPEG — a great pick for the
            web. <strong>AVIF</strong> is the most space-efficient of the three
            and the closest relative to HEIC, ideal when small size matters most
            and your destination supports it. Not sure? Convert a sample both
            ways with our <Link href="/image-converter">image converter</Link>{" "}
            and compare, or read{" "}
            <Link href="/blog/jpeg-vs-png-vs-webp-vs-avif">
              our format comparison
            </Link>
            .
          </p>

          <h2 id="privacy">Private by design, and open source</h2>
          <p>
            Your camera roll is personal. Uploading it to a random conversion
            site means handing strangers copies of your photos — including
            whatever&rsquo;s in the background. FileShrinking takes a different
            approach: your HEIC files are decoded and re-encoded{" "}
            <strong>locally in your browser</strong> and never transmitted
            anywhere. You don&rsquo;t have to take our word for it either — the
            entire project is{" "}
            <Link href="/about">open source</Link>, so the no-upload promise is
            something anyone can verify in the code. Learn more about how this
            works in{" "}
            <Link href="/blog/how-client-side-file-compression-works">
              our explainer on client-side compression
            </Link>
            .
          </p>

          <h2 id="tips">Tips for the best results</h2>
          <ul>
            <li>
              <strong>Sending to someone or uploading somewhere?</strong> Pick
              JPG — it&rsquo;s guaranteed to open.
            </li>
            <li>
              <strong>Optimizing for the web or storage?</strong> Pick AVIF or
              WebP for the smallest files at the same quality.
            </li>
            <li>
              <strong>Resize before you convert.</strong> If the photo will be
              viewed on a phone or in a document, scaling it down saves far more
              than quality alone.
            </li>
            <li>
              <strong>Batch a whole AirDrop.</strong> Drop in every photo at
              once and download them together as a ZIP.
            </li>
          </ul>
        </>
      }
    >
      <ImageTool
        toolId={SLUG}
        accept={["image/heic", "image/heif", ".heic", ".heif"]}
        outputFormats={["jpeg", "webp", "avif"]}
        defaultTarget="jpeg"
        defaultQuality={80}
        dropHint="HEIC & HEIF photos (.heic, .heif) — convert to JPG, WebP or AVIF."
      />
    </ToolPageLayout>
  );
}
