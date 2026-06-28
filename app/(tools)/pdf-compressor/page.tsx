import type { Metadata } from "next";
import Link from "next/link";
import { PdfTool } from "@/components/tools/pdf-tool";
import { ToolPageLayout, type ToolFaq } from "@/components/tools/tool-page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const SLUG = "pdf-compressor";
const UPDATED = "2026-06-27";

export const metadata: Metadata = buildMetadata({
  title: "PDF Compressor — Free, Private, In-Browser",
  description:
    "Compress PDF files in your browser. Recompress embedded images to shrink scanned & image-heavy PDFs privately — no upload, no sign-up, no size limit.",
  path: `/${SLUG}`,
});

const faqs: ToolFaq[] = [
  {
    q: "Are my PDF files uploaded to a server?",
    a: "No. Each PDF is opened and rewritten entirely in your browser using pdf-lib and a WebAssembly image encoder. Nothing is uploaded — there is no server to send your document to. You can even go offline after the page loads and it still works.",
    text: "No. Each PDF is opened and rewritten entirely in your browser using pdf-lib and a WebAssembly image encoder. Nothing is uploaded and there is no server to send your document to. You can go offline after the page loads and it still works.",
  },
  {
    q: "Is the PDF compressor really free?",
    a: "Yes — it is completely free with no sign-up, no watermarks stamped on your pages, and no daily file or page limits. The only practical ceiling is your device's memory. The site is supported by unobtrusive ads.",
    text: "Yes. It is completely free with no sign-up, no watermarks on your pages, and no daily file or page limits. The only practical ceiling is your device's memory. The site is supported by unobtrusive ads.",
  },
  {
    q: "Will compressing reduce the quality of my PDF?",
    a: "It only affects embedded images, which are downsampled and re-encoded as JPEG; text and vector graphics stay crisp and fully selectable. Higher image-quality settings keep photos sharp, while lower ones save more space. Scanned PDFs (which are really images) will show the most visible trade-off.",
    text: "It only affects embedded images, which are downsampled and re-encoded as JPEG; text and vector graphics stay crisp and selectable. Higher image-quality settings keep photos sharp, while lower ones save more space. Scanned PDFs, which are really images, show the most visible trade-off.",
  },
  {
    q: "What is the maximum file size I can compress?",
    a: "There is no hard limit — it depends on how much memory your device has free. Typical documents of a few megabytes are instant, and large scanned PDFs of 50–100 MB usually work on a modern laptop. Very large files use more RAM because the whole PDF is held in memory while it is rewritten.",
    text: "There is no hard limit; it depends on how much memory your device has free. Typical documents of a few megabytes are instant, and large scanned PDFs of 50-100 MB usually work on a modern laptop. Very large files use more RAM because the whole PDF is held in memory while it is rewritten.",
  },
  {
    q: "Why didn't my PDF get any smaller?",
    a: "This tool shrinks PDFs by recompressing embedded images. If your document is mostly text, tables, or vector graphics, there are no large images to optimize, so there is little to remove. When a recompressed PDF would end up larger than the original, the tool keeps your original file untouched.",
    text: "This tool shrinks PDFs by recompressing embedded images. If your document is mostly text, tables, or vector graphics, there are no large images to optimize, so there is little to remove. When a recompressed PDF would end up larger than the original, the tool keeps your original file untouched.",
  },
  {
    q: "Does compressing keep my PDF text searchable?",
    a: "Yes. The tool never rasterizes your pages or converts text to images, so any selectable, searchable text in the original stays selectable and searchable afterward. Only the picture data embedded in the file is re-encoded, and the page layout is preserved.",
    text: "Yes. The tool never rasterizes your pages or converts text to images, so any selectable, searchable text in the original stays selectable and searchable afterward. Only the picture data embedded in the file is re-encoded, and the page layout is preserved.",
  },
];

export default function Page() {
  return (
    <ToolPageLayout
      slug={SLUG}
      heading="PDF Compressor"
      intro={
        <>
          Reduce the size of image-heavy and scanned PDFs right in your browser.
          This tool recompresses the pictures embedded in your document and
          strips bloated metadata, so the file gets smaller while your text stays
          sharp — and nothing is ever uploaded.
        </>
      }
      lastUpdated={UPDATED}
      howTo={{
        name: "How to compress a PDF",
        description:
          "Shrink a PDF locally in your browser in four steps, with no upload.",
        steps: [
          {
            name: "Add your PDF",
            text: "Drag and drop your PDF onto the dropzone or click to browse. The file is read straight into your browser — it is never sent anywhere.",
          },
          {
            name: "Pick a compression level",
            text: "Choose a preset or fine-tune the image-quality slider. Balanced suits most documents; pick Smallest for the biggest saving on scans and photo-heavy files.",
          },
          {
            name: "Let it process on your device",
            text: "Embedded images are downsampled and re-encoded as JPEG and metadata is stripped, all locally. You'll see the original size, the new size, and the percentage saved.",
          },
          {
            name: "Download the smaller PDF",
            text: "Save your optimized file. If the result would be larger than your original, the tool keeps the original so you never get a bigger file.",
          },
        ],
      }}
      faqs={faqs}
      content={
        <>
          <h2 id="why">Why are PDF files so large?</h2>
          <p>
            A PDF can balloon to tens of megabytes for reasons that are not
            obvious when you look at the page. The single biggest culprit is{" "}
            <strong>embedded images</strong>: when you scan a document, export
            slides, or drop a phone photo into a report, the full-resolution
            picture is stored inside the file — often at 300 DPI or higher, far
            more detail than a screen or an email recipient will ever see. Other
            common contributors are <strong>embedded fonts</strong>, duplicated
            objects from repeated edits, and leftover{" "}
            <strong>metadata</strong> such as thumbnails, annotations, and
            revision history.
          </p>
          <p>
            Scanned documents are the extreme case. A &ldquo;scanned PDF&rdquo;
            is really a stack of photographs of paper, with one large image per
            page and little or no real text. That is why a 10-page scan can be
            bigger than a 200-page text report. Those image-heavy and scanned
            files are exactly where this compressor shines.
          </p>
          <p>
            It helps to think of a PDF as a zip-like container rather than a
            single flat picture. A born-digital report exported from a word
            processor is mostly compact text instructions plus a few embedded
            fonts, so it stays small. The moment you add high-resolution charts,
            product photos, or full-page screenshots, the file inherits all of
            their pixel data. Repeatedly editing and re-saving in some apps can
            also leave orphaned copies of replaced images behind, quietly
            inflating the file with data that is no longer even visible on the
            page.
          </p>

          <h2 id="how-it-works">How this PDF compressor works</h2>
          <p>
            Let&rsquo;s be precise about what happens, because honesty matters
            more than a flashy &ldquo;90% smaller&rdquo; promise. This tool opens
            your PDF, finds the images embedded in it, and{" "}
            <strong>downsamples</strong> any that are larger than needed, then{" "}
            <strong>re-encodes them as JPEG</strong> at the quality you choose.
            It also strips non-essential metadata. It then rebuilds the document
            with{" "}
            <a
              href="https://pdf-lib.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              pdf-lib
            </a>{" "}
            and a WebAssembly image encoder — all inside the browser tab.
          </p>
          <p>
            What it does <strong>not</strong> do is just as important. It does
            not flatten your pages into pictures, so your{" "}
            <strong>text stays real, selectable, and searchable</strong>, and
            vector graphics stay crisp at any zoom. The flip side: if your PDF is
            mostly text, tables, or vector art, there is almost nothing for an
            image recompressor to shave off, and the saving will be small. In
            that case the tool simply <strong>returns your original file</strong>{" "}
            — it never hands back something larger than what you started with.
          </p>
          <p>
            The two settings you control map directly onto those two levers. The
            <strong> image-quality slider</strong> sets how aggressively each
            picture is re-encoded as JPEG: higher keeps fine detail and gradients
            intact, lower discards more for a smaller file. The presets also cap
            the maximum pixel dimensions of embedded images, so an oversized
            photo gets <strong>downsampled</strong> to a sensible resolution
            before it is re-encoded. Downsampling is usually where the biggest
            savings come from, because halving an image&rsquo;s width and height
            removes roughly three-quarters of its pixels. Everything is processed
            one file at a time so memory use stays predictable even on a phone.
          </p>

          <h2 id="format">What a PDF actually is, and the privacy model</h2>
          <p>
            PDF (Portable Document Format) was created by Adobe and is now an
            open ISO standard (ISO 32000). A PDF is a container of objects: page
            descriptions, fonts, vector paths, and image streams, each of which
            can use its own compression. Because images are stored as separate
            streams, they can be swapped for smaller, re-encoded versions without
            touching the rest of the document — that is the mechanism this tool
            relies on. You can read Adobe&rsquo;s own overview of the format on
            the{" "}
            <a
              href="https://www.adobe.com/acrobat/about-adobe-pdf.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adobe PDF reference page
            </a>
            .
          </p>
          <p>
            Privacy is the reason to do this in a browser rather than uploading
            to a website. PDFs are often the <em>most</em> sensitive files people
            compress: contracts, tax returns, medical records, ID scans, and
            signed agreements. With a typical online compressor, all of that
            leaves your machine and sits on someone else&rsquo;s server. Here,
            your document is read into memory, rewritten on your device, and
            handed straight back to you. Nothing is transmitted, logged, or
            stored — you can disconnect from the internet after the page loads
            and the tool keeps working.
          </p>
          <p>
            This local-first approach has a practical upside too: there are no
            queues, no per-file size caps imposed by a server, and no waiting for
            an upload and a download to finish. The speed depends only on your
            own hardware. The trade-off is that very large files lean on your
            device&rsquo;s memory while they are being rewritten, so an
            extremely large scan on an older phone may be slow — splitting it
            into smaller PDFs first is an easy workaround.
          </p>

          <h2 id="tips">Tips for the smallest PDFs</h2>
          <ul>
            <li>
              <strong>Scan at a lower DPI.</strong> 150–200 DPI is plenty for
              on-screen reading and email; 600 DPI quadruples the data for detail
              you&rsquo;ll rarely see. Set the resolution before you scan for the
              easiest win of all.
            </li>
            <li>
              <strong>Choose Balanced first, then Smallest.</strong> Start with
              the Balanced preset, check the result, then re-run at Smallest and
              compare. On photo-heavy scans the lower setting can roughly halve
              the size again with little visible difference.
            </li>
            <li>
              <strong>Compress source images before they go in.</strong> If
              you&rsquo;re building a PDF from photos or screenshots, shrink them
              first with the{" "}
              <Link href="/image-compressor">image compressor</Link> or{" "}
              <Link href="/compress-jpeg">JPEG compressor</Link>. A leaner input
              means a leaner PDF.
            </li>
            <li>
              <strong>Resize oversized pictures up front.</strong> A 6000-pixel
              photo on an A4 page is wasted detail. Use the{" "}
              <Link href="/image-resizer">image resizer</Link> or convert to a
              modern format with the{" "}
              <Link href="/image-converter">image converter</Link> before
              assembling the document.
            </li>
            <li>
              <strong>Don&rsquo;t expect miracles from text PDFs.</strong> If a
              file is almost all text and it barely shrinks, that&rsquo;s normal —
              there were simply no heavy images to optimize.
            </li>
          </ul>
        </>
      }
    >
      <PdfTool />
    </ToolPageLayout>
  );
}
