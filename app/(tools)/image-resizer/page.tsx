import type { Metadata } from "next";
import Link from "next/link";
import { ImageTool } from "@/components/tools/image-tool";
import { ToolPageLayout, type ToolFaq } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "image-resizer";
const UPDATED = "2026-06-27";

export const metadata: Metadata = buildMetadata({
  title: "Image Resizer — Free Online Resize by Pixel or %",
  description:
    "Resize JPG, PNG, WebP, AVIF & GIF by pixels or percentage in your browser. Private and in-browser with no upload — images never leave your device.",
  path: `/${SLUG}`,
});

const faqs: ToolFaq[] = [
  {
    q: "Are my images uploaded to a server when I resize them?",
    a: "No. Resizing happens entirely in your browser using your device's own processor. The files are read into memory, resized, and handed straight back to you — nothing is ever sent to a server, so your images stay completely private. You can even go offline after the page loads.",
    text: "No. Resizing happens entirely in your browser using your device's processor. Files are read into memory, resized, and handed straight back to you. Nothing is sent to a server, so your images stay private. You can even go offline after the page loads.",
  },
  {
    q: "Is the image resizer really free?",
    a: "Yes — it is completely free with no sign-up, no watermarks, and no caps on how many images you can resize or how big they are, beyond what your device's memory allows. The site is supported by unobtrusive ads.",
    text: "Yes. It is completely free with no sign-up, no watermarks, and no caps on the number or size of images beyond what your device's memory allows. The site is supported by unobtrusive ads.",
  },
  {
    q: "Will resizing reduce the quality of my image?",
    a: "Making an image smaller is gentle on quality because pixels are intelligently averaged using high-quality Lanczos resampling, which keeps edges crisp and avoids the jagged look of naive scaling. Quality only suffers if you enlarge (upscale) an image past its original size, since there is no real detail to invent.",
    text: "Making an image smaller is gentle on quality because pixels are averaged using high-quality Lanczos resampling, which keeps edges crisp. Quality only suffers if you enlarge an image past its original size, because there is no real detail to invent.",
  },
  {
    q: "What is the maximum file size I can resize?",
    a: "There is no fixed limit — it depends on your device's available memory. Typical photos of a few megabytes and even very large 40–80 MP images resize comfortably. Large batches are processed one file at a time to keep memory use low.",
    text: "There is no fixed limit; it depends on your device's available memory. Typical photos of a few megabytes and even very large 40-80 MP images resize comfortably. Large batches are processed one file at a time to keep memory use low.",
  },
  {
    q: "Can I keep the aspect ratio so my image doesn't look stretched?",
    a: "Yes. Keep the “Keep aspect ratio” box ticked and enter just a width or just a height — the other dimension is calculated automatically so the image scales proportionally. Untick it only when you deliberately need exact, non-proportional dimensions.",
    text: "Yes. Keep the Keep aspect ratio box ticked and enter just a width or just a height; the other dimension is calculated automatically so the image scales proportionally. Untick it only when you deliberately need exact, non-proportional dimensions.",
  },
  {
    q: "Can I resize and compress at the same time?",
    a: "Yes — and you should. Set the target dimensions, then pick an output format and quality level. Resizing shrinks the pixel count while compression squeezes the remaining pixels, so combining both gives the smallest possible file in a single pass.",
    text: "Yes, and you should. Set the target dimensions, then pick an output format and quality level. Resizing shrinks the pixel count while compression squeezes the remaining pixels, so combining both gives the smallest possible file in one pass.",
  },
];

export default function Page() {
  return (
    <ToolPageLayout
      slug={SLUG}
      heading="Image Resizer"
      intro={
        <>
          Resize JPG, PNG, WebP, AVIF and GIF images by exact pixels or by
          percentage, right in your browser. Changing dimensions is the single
          biggest way to shrink a file — drop in your images, set a target size,
          and download in seconds. Nothing is ever uploaded.
        </>
      }
      lastUpdated={UPDATED}
      howTo={{
        name: "How to resize an image",
        description:
          "Resize images by pixels or percentage locally in your browser in four steps.",
        steps: [
          {
            name: "Add your images",
            text: "Drag and drop your photos onto the dropzone, click to browse, or paste from the clipboard. JPEG, PNG, WebP, AVIF and GIF are all supported, and you can add several at once.",
          },
          {
            name: "Choose pixels or percentage",
            text: "Pick “Percent” to scale by a ratio (great for whole batches), or “Pixels” to type an exact width or height. Keep aspect ratio on to avoid stretching.",
          },
          {
            name: "Set format and quality (optional)",
            text: "Leave the format as “Same format” to keep the original type, or convert to WebP or AVIF for a smaller file. Adjust the quality slider to compress at the same time.",
          },
          {
            name: "Download your resized images",
            text: "Each image is resized on your device with Lanczos resampling. Download them individually or grab everything at once as a ZIP.",
          },
        ],
      }}
      faqs={faqs}
      content={
        <>
          <h2 id="why">Why resize your images?</h2>
          <p>
            Modern phones and cameras capture enormous images — a single photo
            can be 6000 pixels wide and weigh ten megabytes or more. That is far
            more detail than almost any screen, email, or web page will ever
            show. A blog header might display at 1200 pixels wide; a profile
            picture at 400; an email signature at 150. Shipping a 6000-pixel file
            into a 1200-pixel slot wastes bandwidth, slows page loads, and bloats
            attachments for no visible benefit.
          </p>
          <p>
            Resizing is also the <strong>most powerful lever you have on file
            size</strong>. Because an image&rsquo;s data scales with its total
            pixel count, halving both the width and height removes roughly
            three-quarters of the pixels — and therefore most of the file size —
            before any compression even happens. Lowering JPEG quality might trim
            30–50%; resizing a too-large photo to its real display size routinely
            cuts 80–95%. If a file feels too big, resize first and compress
            second.
          </p>
          <p>
            And because this tool runs entirely on your device, it is the private
            way to do it. Other online resizers upload your photos to a remote
            server, process them there, and send them back. Here your images are
            read into memory, resized locally, and handed straight back — they
            never touch a network.
          </p>

          <h2 id="quality">How resizing affects quality</h2>
          <p>
            Downscaling — making an image smaller — is inherently gentle on
            quality, but <em>how</em> the pixels are combined matters a lot. Naive
            scaling simply throws away pixels, producing jagged edges and shimmer
            on fine detail. This tool instead uses high-quality{" "}
            <strong>Lanczos resampling</strong>, which weighs a neighborhood of
            surrounding pixels for each output pixel. The result keeps edges crisp
            and text legible, so a downscaled image looks clean rather than
            blurry or aliased.
          </p>
          <p>
            The one operation that genuinely hurts is{" "}
            <strong>upscaling</strong> — enlarging an image beyond its original
            dimensions. No resampler can invent detail that was never captured, so
            an upscaled photo looks soft and mushy. As a rule, only ever resize{" "}
            <em>down</em>: choose the largest size you actually need and resize to
            that, never above the source dimensions. When you also convert to a
            lossy format, remember that compression and resizing stack — a
            resized image has fewer pixels to compress, which is exactly why the
            two together produce such small files.
          </p>

          <h2 id="sizes">Pixels, percentage, and common target sizes</h2>
          <p>
            <strong>Percentage</strong> mode is ideal for batches: set 50% and
            every image shrinks proportionally regardless of its starting size.{" "}
            <strong>Pixel</strong> mode is for precise targets — type a width (or
            a height) and, with aspect ratio locked, the other dimension is
            calculated for you so nothing is stretched. The aspect ratio is just
            the relationship between width and height (16:9, 4:3, 1:1); keeping it
            intact is what stops faces and logos from looking squashed. You can
            read more about how images and their dimensions work on{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN&rsquo;s guide to images on the web
            </a>
            .
          </p>
          <p>
            Useful targets to keep in mind: most <strong>web</strong> content
            looks great between 1200 and 2000 pixels on the long edge (use the
            larger end for full-width hero images on high-density displays).{" "}
            <strong>Email</strong> attachments and signatures should usually stay
            at or below 800 pixels to keep inboxes happy. For{" "}
            <strong>social media</strong>, common dimensions are roughly 1080×1080
            for a square Instagram post, 1080×1920 for vertical stories and
            reels, 1200×630 for a Facebook or Open Graph link preview, and
            1500×500 for an X/Twitter header. When in doubt, resize to the largest
            place the image will appear and let the platform scale down from
            there.
          </p>

          <h2 id="tips">Tips for the best results</h2>
          <ul>
            <li>
              <strong>Never upscale.</strong> Enlarging past the original size
              only adds blur. Pick the biggest dimension you truly need and stop
              there.
            </li>
            <li>
              <strong>Resize before you compress.</strong> Fewer pixels means a
              smaller file and less work for the encoder. For the smallest photos,
              resize here and then run them through{" "}
              <Link href="/compress-jpeg">JPEG compression</Link>.
            </li>
            <li>
              <strong>Lock the aspect ratio.</strong> Enter only width or only
              height and let the other auto-fill — it is the easiest way to avoid
              stretched, distorted images.
            </li>
            <li>
              <strong>Convert while you resize.</strong> Switching to WebP or AVIF
              with the{" "}
              <Link href="/image-converter">image converter</Link> can shrink a
              resized photo another 25–50% with no visible quality loss.
            </li>
            <li>
              <strong>Keep your originals.</strong> Resize from a full-resolution
              master each time rather than re-resizing an already-shrunken copy,
              which compounds quality loss.
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
        resizeByDefault
        defaultQuality={82}
      />
    </ToolPageLayout>
  );
}
