import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";

export const meta: BlogPostMeta = {
  slug: "why-is-my-pdf-so-big",
  title: "Why Is My PDF So Big? (And How to Shrink It)",
  description:
    "High-res images, scanned pages, embedded fonts, and duplicate objects all bloat a PDF. Here is what causes a large PDF and how to fix each cause.",
  datePublished: "2026-06-24",
  dateModified: "2026-06-24",
  authorId: "team",
  tags: ["PDF", "How-to"],
  readingMinutes: 7,
};

export default function Content() {
  return (
    <>
      <p>
        You finished a two-page document, exported it as a PDF, and somehow ended
        up with a 40&nbsp;MB file that refuses to attach to an email. It is a
        surprisingly common experience. A PDF is not a single thing — it is a
        container that bundles text, fonts, images, vector graphics, and metadata
        into one file. When that file is huge, the size almost always comes from
        a few specific culprits. Once you know which one is to blame, shrinking
        the PDF is straightforward. This guide walks through each cause and the
        fix that actually works for it.
      </p>

      <h2 id="how-pdfs-store-data">What is actually inside a PDF</h2>
      <p>
        A PDF stores content as a collection of <strong>objects</strong>: streams
        of text, image data, font programs, and the instructions that lay them
        out on the page. The format is defined by an open ISO standard, and the{" "}
        <a
          href="https://www.pdfa.org/resource/iso-32000-pdf/"
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF Association&rsquo;s overview of ISO&nbsp;32000
        </a>{" "}
        is a good reference if you want the formal details. The practical takeaway
        is simple: <strong>text and vector graphics are tiny</strong>, while{" "}
        <strong>images are enormous by comparison</strong>. A full page of dense
        text might be a few kilobytes. A single full-page photo can be several
        megabytes. So when a PDF is unexpectedly large, the first question to ask
        is almost always: where are the images coming from?
      </p>

      <h2 id="high-res-images">Cause #1: High-resolution embedded images</h2>
      <p>
        This is the single most common reason a PDF balloons in size. When you
        drop a photo from a modern phone or camera into a document, it can be
        4000&nbsp;pixels wide or more. Even though it is displayed at a fraction
        of that size on the page, the PDF often stores the <em>full</em>{" "}
        resolution. For a document meant to be read on screen or printed at
        normal quality, you rarely need more than{" "}
        <strong>150 pixels per inch (PPI)</strong>; for high-quality print,
        300&nbsp;PPI is plenty. Anything beyond that is wasted weight.
      </p>
      <p>
        The fix is to downsample and recompress those images before or after they
        go into the PDF. If you control the source images, shrink them first —
        run them through the{" "}
        <Link href="/compress-jpeg">JPEG compressor</Link> at quality 70&ndash;80
        and resize them to the dimensions you actually need. If the images are
        already baked into the PDF, run the whole file through the{" "}
        <Link href="/pdf-compressor">PDF compressor</Link>, which re-encodes the
        embedded images at a lower, sensible size. For photographic content, this
        step alone often cuts the file by 80&nbsp;percent or more.
      </p>

      <h2 id="scanned-pages">Cause #2: Scanned pages</h2>
      <p>
        A scanned document is a special, and especially heavy, case. When you
        scan paper, every page becomes a full-page image — there is no real text
        in the file at all, just pictures of text. Scanners frequently default to
        very high DPI settings (600&nbsp;DPI is common), and in full color, which
        produces massive files for what is essentially black ink on white paper.
      </p>
      <p>
        There are two things you can do. First, scan smarter: for a text document,
        scanning at <strong>200&ndash;300&nbsp;DPI in grayscale or black-and-white</strong>{" "}
        rather than 600&nbsp;DPI in color can reduce the size dramatically while
        staying perfectly legible. Second, for scans you already have, recompress
        them — passing the file through the{" "}
        <Link href="/pdf-compressor">PDF compressor</Link> re-encodes those
        page-images at a more reasonable resolution and quality. Be realistic
        about the limit, though: a scan is fundamentally a stack of images, so it
        will always be larger than a born-digital text PDF of the same length.
      </p>

      <h2 id="fonts-and-objects">Cause #3: Embedded fonts and duplicated objects</h2>
      <p>
        PDFs embed the fonts they use so the document looks identical on every
        device — which is great for fidelity but adds weight. A well-behaved
        exporter <strong>subsets</strong> fonts, embedding only the characters
        actually used. Poorly configured tools embed the <em>entire</em> font
        family, and a document that uses several decorative typefaces can carry
        several megabytes of font data it barely touches. Sticking to a small set
        of common fonts, and letting your software subset them, keeps this in
        check.
      </p>
      <p>
        Then there is plain inefficiency. Some software writes the same image or
        resource into the file multiple times instead of referencing it once — a
        logo that appears in a header on every page can get embedded dozens of
        times. Repeated &ldquo;Save As&rdquo; cycles and incremental edits can
        also leave behind orphaned, superseded objects that never get cleaned up.
        Re-saving the PDF through a tool that rewrites and de-duplicates its
        object structure clears this out automatically.
      </p>

      <h2 id="metadata">Cause #4: Metadata, attachments, and leftovers</h2>
      <p>
        Smaller contributors add up. PDFs can carry document metadata, XMP
        packets, embedded color profiles, thumbnails, form-field data, JavaScript,
        and even whole file attachments. Documents exported from design software
        sometimes include hidden layers, comments, or revision history. None of
        this is visible on the page, but all of it counts toward the byte total.
        Optimizing or &ldquo;flattening&rdquo; the PDF strips the parts you do not
        need while leaving the visible content intact.
      </p>

      <h2 id="when-it-wont-shrink">When a PDF won&rsquo;t shrink much</h2>
      <p>
        Compression is not magic, and it helps to know when you have hit the
        floor. If your PDF is <strong>mostly real text and vector graphics</strong>{" "}
        — a born-digital report, a contract, a code listing — it is probably
        already small, and there is little to gain. The bytes are doing useful
        work, and squeezing harder will not help. The big wins come almost
        entirely from <strong>images</strong>: high-resolution photos and scanned
        pages. If recompressing those does not move the needle, your file likely
        was not image-heavy to begin with.
      </p>
      <p>
        A quick way to diagnose this: ask yourself whether you can select and copy
        the text in the document. If you can, it is born-digital and the size is
        coming from embedded images, fonts, or leftovers. If you cannot — if the
        text is just part of a picture — you have a scan, and downsampling those
        page-images is your biggest lever.
      </p>

      <h2 id="do-it">Shrinking yours, privately</h2>
      <p>
        The good news is that fixing all of this does not require uploading your
        document anywhere. The{" "}
        <Link href="/pdf-compressor">FileShrinking PDF compressor</Link> runs
        entirely in your browser, so a confidential contract or a scanned ID never
        leaves your device — it is processed locally and nothing is sent to a
        server. Start there for any large PDF; if you are assembling a document
        from your own photos, pre-shrink them with the{" "}
        <Link href="/compress-jpeg">JPEG compressor</Link> first so the bloat
        never gets in. Between the two, most oversized PDFs come down to a
        manageable, email-friendly size in a single pass.
      </p>
    </>
  );
}
