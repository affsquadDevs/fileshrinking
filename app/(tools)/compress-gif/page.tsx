import type { Metadata } from "next";
import Link from "next/link";
import { ImageTool } from "@/components/tools/image-tool";
import { ToolPageLayout, type ToolFaq } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "compress-gif";
const UPDATED = "2026-06-27";

export const metadata: Metadata = buildMetadata({
  title: "Compress GIF — Free Online GIF Optimizer",
  description:
    "Compress a GIF to a smaller WebP or PNG in your browser. 100% private, no upload — your files stay on your device. For animated GIFs, convert to video.",
  path: `/${SLUG}`,
});

const faqs: ToolFaq[] = [
  {
    q: "Does this keep my GIF animated?",
    a: (
      <>
        No — and this is the most important thing to know. This in-browser tool
        converts the <strong>first frame</strong> of your GIF into a single still
        WebP or PNG image. It does not preserve animation. If your GIF moves and
        you want to keep that motion at a fraction of the size, convert it to a
        short video instead with our{" "}
        <Link href="/compress-mp4">MP4 compressor</Link> or{" "}
        <Link href="/video-compressor">video compressor</Link>.
      </>
    ),
    text: "No. This tool converts the first frame of your GIF into a single still WebP or PNG image and does not preserve animation. To keep motion at a fraction of the size, convert an animated GIF to a short video using our MP4 compressor or video compressor.",
  },
  {
    q: "Are my GIF files uploaded to a server?",
    a: "No. Every file is processed locally in your browser. Your GIFs never leave your device and there is no server to upload them to — you can even disconnect from the internet after the page loads and it still works.",
    text: "No. Every file is processed locally in your browser. Your GIFs never leave your device and there is no server to upload them to. You can disconnect from the internet after the page loads and it still works.",
  },
  {
    q: "Is the GIF compressor really free?",
    a: "Yes — it is completely free with no sign-up, no watermarks, and no file-count or file-size limits beyond what your device's memory can handle. The site is supported by unobtrusive ads.",
    text: "Yes. It is completely free with no sign-up, no watermarks, and no file-count or file-size limits beyond what your device's memory can handle. The site is supported by unobtrusive ads.",
  },
  {
    q: "Will converting reduce the quality?",
    a: (
      <>
        For a static GIF, converting to WebP usually improves quality{" "}
        <em>and</em> shrinks the file, because WebP supports millions of colors
        while GIF is limited to 256. Choose <strong>PNG</strong> for a lossless
        result, or use the quality slider with <strong>WebP</strong> to trade a
        little detail for a much smaller file. Around 75 is a great balance.
      </>
    ),
    text: "For a static GIF, converting to WebP usually improves quality and shrinks the file, because WebP supports millions of colors while GIF is limited to 256. Choose PNG for a lossless result, or use the quality slider with WebP to trade a little detail for a much smaller file. Around 75 is a good balance.",
  },
  {
    q: "What is the maximum file size I can process?",
    a: "There is no hard limit — it depends on your device's available memory. Phones and laptops comfortably handle typical GIFs of a few megabytes, and even larger files work fine. Because everything runs in memory, very large files use more RAM, so close other heavy tabs if you hit a limit.",
    text: "There is no hard limit; it depends on your device's available memory. Typical GIFs of a few megabytes and even larger files work fine. Because everything runs in memory, very large files use more RAM, so close other heavy tabs if you hit a limit.",
  },
  {
    q: "Should I use WebP or PNG as the output?",
    a: (
      <>
        Use <strong>WebP</strong> for the smallest file — it is ideal for the web
        and supports both lossy and lossless modes. Use <strong>PNG</strong> when
        you need maximum compatibility with older software or a guaranteed
        lossless copy, for example a logo or icon you extracted from a GIF.
      </>
    ),
    text: "Use WebP for the smallest file; it is ideal for the web and supports both lossy and lossless modes. Use PNG when you need maximum compatibility with older software or a guaranteed lossless copy, such as a logo or icon extracted from a GIF.",
  },
];

export default function Page() {
  return (
    <ToolPageLayout
      slug={SLUG}
      heading="GIF Compressor"
      intro={
        <>
          Turn a GIF into a much smaller WebP or PNG image, right in your browser
          — nothing is ever uploaded. Please note this converts the{" "}
          <strong>first frame</strong> only and does not keep animation. To shrink
          an <em>animated</em> GIF while keeping the motion, convert it to a{" "}
          <Link href="/compress-mp4">tiny MP4 video</Link> instead.
        </>
      }
      lastUpdated={UPDATED}
      howTo={{
        name: "How to compress a GIF",
        description:
          "Convert a GIF to a smaller WebP or PNG locally in your browser in four steps.",
        steps: [
          {
            name: "Add your GIF",
            text: "Drag and drop your .gif file onto the dropzone, click to browse, or paste it from your clipboard. You can add several at once.",
          },
          {
            name: "Pick an output format",
            text: "Choose WebP for the smallest web-ready file, or PNG for a lossless, maximally compatible copy of the first frame.",
          },
          {
            name: "Set the quality",
            text: "For WebP, drag the quality slider — around 75 is a great balance of size and detail. PNG is always lossless.",
          },
          {
            name: "Download your file",
            text: "Save images one by one or all at once as a ZIP. Re-run with different settings anytime to compare results.",
          },
        ],
      }}
      faqs={faqs}
      content={
        <>
          <h2 id="why">Why convert or compress a GIF?</h2>
          <p>
            The GIF format is everywhere, but it is one of the least efficient
            ways to store an image. A GIF is limited to a palette of just{" "}
            <strong>256 colors</strong> per frame and uses an older, lightweight
            compression scheme, so photographs and detailed graphics saved as GIFs
            look banded and weigh far more than they should. Animated GIFs are
            worse still: every frame is stored as a full image, which is why a
            short clip can balloon to many megabytes — sometimes larger than a
            high-definition video of the same content.
          </p>
          <p>
            This tool tackles the static case. It reads the first frame of your
            GIF and re-encodes it as a modern <strong>WebP</strong> or{" "}
            <strong>PNG</strong>, which typically produces a dramatically smaller,
            higher-quality file. Because everything happens on your device, it is
            also private: your GIF is decoded in memory, converted with a
            WebAssembly encoder, and handed straight back to you. It never touches
            a network.
          </p>
          <p>
            If your GIF is animated, keep reading — the genuinely useful move is
            not to compress the GIF at all, but to convert it to video, where the
            savings are enormous.
          </p>

          <h2 id="animation">Animated GIF? Convert it to video instead</h2>
          <p>
            Let&rsquo;s be transparent: this in-browser converter outputs a single
            still frame, so it cannot preserve animation. That is a deliberate,
            honest limitation rather than a bug. For an animated GIF, the right
            answer is to replace it with a real video format such as MP4 (H.264)
            or WebM. Modern video codecs use motion compensation — they only
            store what changes between frames — so the same animation usually
            comes out <strong>90% smaller or more</strong> while looking sharper.
          </p>
          <p>
            This isn&rsquo;t just our opinion; it is long-standing web-performance
            guidance. Google&rsquo;s web.dev recommends you{" "}
            <a
              href="https://web.dev/articles/replace-gifs-with-videos"
              target="_blank"
              rel="noopener noreferrer"
            >
              replace animated GIFs with video
            </a>{" "}
            for exactly this reason. To do that here, send your animated GIF to our{" "}
            <Link href="/compress-mp4">MP4 compressor</Link> or the broader{" "}
            <Link href="/video-compressor">video compressor</Link>, which also
            handles MOV, WebM and more. You&rsquo;ll get a tiny file that plays
            smoothly and autoloops just like the original GIF did.
          </p>

          <h2 id="format">What is a GIF, and why WebP or PNG wins</h2>
          <p>
            GIF (Graphics Interchange Format) dates back to 1987 and uses LZW
            compression with an indexed palette capped at 256 colors. It supports
            simple animation and one level of binary transparency, which made it
            iconic on the early web — but those constraints are exactly why it
            struggles with anything beyond small, flat graphics. You can read the
            technical background on{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN&rsquo;s image format reference
            </a>
            .
          </p>
          <p>
            Converting the frame to <strong>WebP</strong> lifts the 256-color
            limit, adds full alpha transparency, and supports both lossy and
            lossless modes, so files are typically much smaller at equal or better
            quality. <strong>PNG</strong> is the right pick when you need a
            guaranteed lossless copy or the widest software compatibility — for
            example, extracting a logo or sticker from a GIF. If you later want to
            explore other targets such as AVIF, our{" "}
            <Link href="/compress-webp">WebP tool</Link> and{" "}
            <Link href="/image-converter">image converter</Link> let you compare
            formats side by side.
          </p>

          <h2 id="tips">Tips for the best results</h2>
          <ul>
            <li>
              <strong>Animated GIF? Go to video.</strong> Don&rsquo;t fight the
              format. Convert with the{" "}
              <Link href="/compress-mp4">MP4 compressor</Link> for the biggest
              saving and the smoothest playback.
            </li>
            <li>
              <strong>Choose PNG for graphics, WebP for size.</strong> Logos,
              icons and sharp-edged art stay crisp as PNG; for the web, WebP is
              almost always the smaller choice.
            </li>
            <li>
              <strong>Resize before converting.</strong> If the image will display
              at 400px wide, shrink it with the built-in resize option — that
              saves far more than quality settings alone.
            </li>
            <li>
              <strong>Compare the result.</strong> Try WebP at quality 75, then
              re-run lower or switch to PNG and check whether you can spot the
              difference at your display size.
            </li>
          </ul>
        </>
      }
    >
      <ImageTool
        toolId={SLUG}
        accept={["image/gif"]}
        outputFormats={["webp", "png"]}
        defaultTarget="webp"
        defaultQuality={75}
      />
    </ToolPageLayout>
  );
}
