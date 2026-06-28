import type { Metadata } from "next";
import Link from "next/link";
import { ImageTool } from "@/components/tools/image-tool";
import { ToolPageLayout, type ToolFaq } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "image-converter";
const UPDATED = "2026-06-27";

export const metadata: Metadata = buildMetadata({
  title: "Image Converter — JPEG, PNG, WebP & AVIF",
  description:
    "Convert images between JPEG, PNG, WebP and AVIF privately in your browser. No upload — your files are processed in-browser and never leave your device.",
  path: `/${SLUG}`,
});

const faqs: ToolFaq[] = [
  {
    q: "Are my files uploaded to a server when I convert them?",
    a: "No. Conversion happens entirely in your browser using WebAssembly codecs. The image is decoded and re-encoded in memory on your own device, so your files never touch a server — you can even go offline after the page loads and it still works.",
    text: "No. Conversion happens entirely in your browser using WebAssembly codecs. The image is decoded and re-encoded in memory on your own device, so your files never touch a server. You can go offline after the page loads and it still works.",
  },
  {
    q: "Is the image converter free to use?",
    a: "Yes — it is completely free with no sign-up, no watermarks, and no caps on how many files you convert or how large they are beyond what your device's memory allows. The site is funded by unobtrusive ads.",
    text: "Yes. It is completely free with no sign-up, no watermarks, and no caps on how many files you convert or how large they are beyond what your device's memory allows. The site is funded by unobtrusive ads.",
  },
  {
    q: "Will converting affect the image quality?",
    a: "It depends on the target format. Converting to PNG is lossless, so no detail is lost. Converting to JPEG, WebP or AVIF is lossy and re-encodes the image at the quality you choose — 75–85 is visually indistinguishable from the original for most photos. Because lossy re-encoding compounds, always convert from your highest-quality source rather than an already-compressed copy.",
    text: "It depends on the target format. Converting to PNG is lossless, so no detail is lost. Converting to JPEG, WebP or AVIF is lossy and re-encodes at the quality you choose; 75-85 is visually indistinguishable from the original for most photos. Lossy re-encoding compounds, so always convert from your highest-quality source.",
  },
  {
    q: "What is the maximum file size I can convert?",
    a: "There is no hard limit — it is bounded only by your device's available memory. Everyday photos of a few megabytes and large 20–50 MP images convert without trouble, and AVIF encoding is the most CPU-intensive, so very large images simply take a little longer.",
    text: "There is no hard limit; it is bounded only by your device's available memory. Everyday photos of a few megabytes and large 20-50 MP images convert without trouble. AVIF encoding is the most CPU-intensive, so very large images take a little longer.",
  },
  {
    q: "Which format should I convert to?",
    a: "For photographs you want broad compatibility with, use JPEG or WebP. For graphics, logos, screenshots or anything that needs transparency, use PNG or WebP. For the smallest possible file with modern browser support, choose AVIF. WebP is the safest all-rounder because it supports both lossy photos and lossless transparency.",
    text: "For photographs you want broad compatibility with, use JPEG or WebP. For graphics, logos, screenshots or anything needing transparency, use PNG or WebP. For the smallest possible file with modern browser support, choose AVIF. WebP is the safest all-rounder, supporting both lossy photos and lossless transparency.",
  },
  {
    q: "What happens to transparency when I convert to JPEG?",
    a: "JPEG does not support an alpha channel, so any transparent areas are flattened against a solid background when you convert to JPEG. If your image relies on transparency — for example a logo meant to sit on different backgrounds — convert to PNG or WebP instead, both of which preserve the alpha channel.",
    text: "JPEG does not support an alpha channel, so transparent areas are flattened against a solid background when you convert to JPEG. If your image relies on transparency, such as a logo, convert to PNG or WebP instead, both of which preserve the alpha channel.",
  },
];

export default function Page() {
  return (
    <ToolPageLayout
      slug={SLUG}
      heading="Image Converter"
      intro={
        <>
          Convert images between JPEG, PNG, WebP and AVIF right in your browser.
          Drop in a file, pick the format you need, and download the result in
          seconds — every conversion runs on your device, so nothing is ever
          uploaded.
        </>
      }
      lastUpdated={UPDATED}
      howTo={{
        name: "How to convert an image",
        description:
          "Convert between JPEG, PNG, WebP and AVIF locally in your browser in four steps.",
        steps: [
          {
            name: "Add your image",
            text: "Drag and drop a JPEG, PNG, WebP, AVIF or GIF onto the dropzone, click to browse, or paste from your clipboard. You can queue up several at once.",
          },
          {
            name: "Choose the output format",
            text: "Pick JPEG, PNG, WebP or AVIF. Use WebP or AVIF for the smallest web-ready files, PNG when you need lossless transparency, or JPEG for maximum compatibility.",
          },
          {
            name: "Set the quality",
            text: "For JPEG, WebP and AVIF, adjust the quality slider — around 80 is a great balance. PNG output is always lossless, so there is no quality to set.",
          },
          {
            name: "Download your converted files",
            text: "Save each converted image individually, or grab them all at once as a ZIP. Change the format or quality and re-convert anytime.",
          },
        ],
      }}
      faqs={faqs}
      content={
        <>
          <h2 id="why">Why convert between image formats?</h2>
          <p>
            Not every image format is right for every job. A logo saved as a
            JPEG looks fuzzy around its edges; a photograph saved as a PNG can be
            several times larger than it needs to be; and a decade-old GIF takes
            up far more space than a modern equivalent. Converting an image to a
            more suitable format can make it dramatically smaller, sharper, or
            more compatible with whatever you are publishing to — without
            re-shooting or re-designing anything.
          </p>
          <p>
            The most common reason people convert is to shrink images for the
            web. Moving a photo from JPEG to <Link href="/compress-webp">WebP</Link>{" "}
            or <Link href="/compress-avif">AVIF</Link> can cut its size by a
            quarter to a half at the same visual quality, which means faster
            pages and lower bandwidth bills. Others convert the other direction —
            turning a WebP or AVIF back into a universally supported JPEG or PNG
            so it opens in older software or can be attached to an email. Because
            this converter runs entirely on your device, you can do all of that
            without handing your images to a remote server.
          </p>

          <h2 id="lossy">Lossless and lossy conversion: what changes</h2>
          <p>
            Converting an image always means decoding it and re-encoding it in a
            new format, and the format you choose decides whether that step is{" "}
            <strong>lossless</strong> or <strong>lossy</strong>. PNG is lossless:
            every pixel is preserved exactly, which is why it is ideal for
            graphics and screenshots but produces large files for photos. JPEG,
            WebP and AVIF are lossy by default — they throw away detail your eye
            is least likely to miss in order to make the file far smaller, and a
            quality slider controls how aggressive that trade-off is.
          </p>
          <p>
            A key thing to understand is that lossy conversion{" "}
            <strong>compounds</strong>. Each time you re-encode an already-lossy
            image, a little more detail is discarded, so you should always
            convert from the highest-quality source you have rather than from a
            copy that has already been squeezed. Converting a lossy JPEG{" "}
            <em>to</em> PNG will not magically restore lost detail either — it
            simply stores the already-degraded pixels losslessly, usually in a
            bigger file. For photos, a quality of <strong>75–85</strong> in
            JPEG, WebP or AVIF is the sweet spot where the result is essentially
            indistinguishable from the original at normal viewing sizes.
          </p>

          <h2 id="formats">A quick guide to the four formats</h2>
          <p>
            Each format has a job it does best. <strong>JPEG</strong> is the
            universal photo format — supported everywhere, great for
            continuous-tone images, but with no transparency.{" "}
            <strong>PNG</strong> is lossless and supports an alpha channel, which
            makes it the right pick for logos, icons, screenshots and any graphic
            that needs crisp edges or a transparent background.{" "}
            <strong>WebP</strong> is the modern all-rounder: it handles both
            lossy photos and lossless transparency and is typically 25–35%
            smaller than JPEG. <strong>AVIF</strong> usually produces the
            smallest files of all and supports transparency too, at the cost of
            slower encoding and slightly narrower software support. You can read
            an authoritative breakdown of each on{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types"
              target="_blank"
              rel="noopener noreferrer"
            >
              MDN&rsquo;s guide to image file types
            </a>
            .
          </p>
          <p>
            In practice: choose <strong>JPEG or WebP</strong> for photographs,{" "}
            <strong>PNG or WebP</strong> for graphics and anything with
            transparency, and <strong>AVIF</strong> when the absolute smallest
            file matters and your audience uses current browsers. Remember that{" "}
            <strong>JPEG has no transparency</strong>, so converting a
            transparent PNG or WebP to JPEG will flatten it onto a solid
            background. If you only want to make a file smaller without changing
            its format, the dedicated{" "}
            <Link href="/compress-jpeg">JPEG</Link>,{" "}
            <Link href="/compress-png">PNG</Link>,{" "}
            <Link href="/compress-webp">WebP</Link> and{" "}
            <Link href="/compress-avif">AVIF</Link> compressors are a better fit.
          </p>

          <h2 id="tips">Tips for clean conversions</h2>
          <ul>
            <li>
              <strong>Convert from the original.</strong> Start from the
              highest-quality source you have so you are not re-compressing
              detail that was already lost.
            </li>
            <li>
              <strong>Mind transparency before choosing JPEG.</strong> If your
              image has transparent areas you want to keep, pick PNG or WebP —
              JPEG cannot store an alpha channel.
            </li>
            <li>
              <strong>Try WebP first for the web.</strong> It is the best balance
              of small size, transparency support and broad browser
              compatibility, making it a safe default for most websites.
            </li>
            <li>
              <strong>Resize while you convert.</strong> If the image will be
              displayed small, reducing its dimensions saves far more than format
              choice alone — use the built-in resize option or the dedicated{" "}
              <Link href="/image-resizer">image resizer</Link>.
            </li>
            <li>
              <strong>Compare before committing.</strong> Convert the same source
              to WebP and AVIF and check the file sizes and how they look at your
              display size; the winner varies from image to image.
            </li>
          </ul>
        </>
      }
    >
      <ImageTool
        toolId={SLUG}
        accept={["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"]}
        outputFormats={["jpeg", "png", "webp", "avif"]}
        defaultTarget="webp"
        defaultQuality={80}
      />
    </ToolPageLayout>
  );
}
