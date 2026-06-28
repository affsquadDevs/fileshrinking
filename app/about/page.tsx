import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageLayout } from "@/components/content/page-layout";
import { buildMetadata } from "@/lib/seo/metadata";
import { JsonLd } from "@/components/seo/json-ld";
import { organizationSchema, personSchema } from "@/lib/seo/schema";

export const metadata: Metadata = buildMetadata({
  title: "About FileShrinking",
  description:
    "Learn who builds FileShrinking and why our 100% in-browser file compressor keeps your images, PDFs, video and audio entirely on your device.",
  path: "/about",
});

export default function Page() {
  return (
    <ContentPageLayout
      title="About FileShrinking"
      intro={
        <>
          FileShrinking is a free, privacy-first toolkit for compressing images,
          PDFs, video and audio. Every file is processed entirely in your
          browser, so nothing you open here is ever uploaded to a server.
        </>
      }
      lastUpdated="2026-06-27"
    >
      <h2>Our mission</h2>
      <p>
        FileShrinking exists to make file compression genuinely free, genuinely
        private, and available to anyone with a web browser. Big files slow down
        websites, clog email inboxes, and fill up phone storage and cloud plans.
        Shrinking them should not require installing software, creating an
        account, paying a subscription, or handing your personal documents to a
        company you have never met. Our goal is simple: give you professional-grade
        compression that runs on your own device, costs nothing, and respects your
        privacy by design.
      </p>

      <h2>Why &ldquo;100% in your browser&rdquo; matters</h2>
      <p>
        Most online compressors work by uploading your file to a remote server,
        processing it there, and sending the result back. That means a copy of
        your photo, contract, or home video sits on someone else&rsquo;s computer,
        at least temporarily. FileShrinking works differently. When you choose a
        file, it is read into your browser&rsquo;s memory and compressed locally
        using WebAssembly builds of trusted, open-source encoders such as MozJPEG,
        OxiPNG, and FFmpeg. The finished file is handed straight back to you.
      </p>
      <p>
        The practical result is that <strong>your files physically never leave
        your device</strong>. There is nothing for us to store, nothing for us to
        leak in a data breach, and nothing for us to sell or share. You can prove
        it to yourself: load any of our tools, disconnect from the internet, and
        the compression still works, because all the heavy lifting happens on your
        machine. That local-only model is the foundation of the trust we are
        asking you to place in us, and it is not a marketing slogan we can quietly
        walk back later.
      </p>

      <h2>What we build</h2>
      <p>
        FileShrinking is a growing suite of focused, single-purpose tools. Our{" "}
        <Link href="/image-compressor">image compressor</Link> handles JPEG, PNG,
        WebP, AVIF and GIF, with companion tools for converting and resizing.
        Alongside the image tools we offer a PDF compressor that recompresses the
        images embedded inside documents, in-browser video compression for
        formats like MP4, MOV, WebM, MKV and AVI, and an audio compressor for
        MP3, WAV and AAC. Every tool shares the same principles: no uploads, no
        sign-up, no watermarks, and no artificial file-count or file-size limits
        beyond what your own device&rsquo;s memory allows.
      </p>

      <h2>How we research and write our guides</h2>
      <p>
        Beyond the tools, we publish practical guides and explainers on our{" "}
        <Link href="/blog">blog</Link> covering how compression formats actually
        work and how to get the best quality-to-size trade-off. We take accuracy
        seriously. Our editorial process starts with primary, authoritative
        sources: the format specifications themselves, web platform documentation
        from{" "}
        <a
          href="https://developer.mozilla.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MDN Web Docs
        </a>{" "}
        and the{" "}
        <a href="https://www.w3.org/" target="_blank" rel="noopener noreferrer">
          W3C
        </a>
        , and the documentation of the open-source encoders our tools rely on. We
        test claims against the real behaviour of the tools we ship, cite our
        sources so you can verify them, and revise articles when standards or
        browser support change. When we are uncertain, we say so rather than
        guessing.
      </p>

      <h2>Who maintains FileShrinking</h2>
      <p>
        FileShrinking is built and maintained by a small, independent team of web
        developers who care about performance and privacy on the modern web. We
        are not venture-backed and we do not run a data business; the site is kept
        free through unobtrusive, clearly-labelled advertising.
      </p>
      <p>
        Our maintainers come from web-performance and media-processing
        backgrounds, and have spent years helping teams ship lighter, faster
        pages without sacrificing quality. The team leads the project&rsquo;s
        technical direction, reviews every tool before release, and is
        responsible for the editorial standards described above. You can reach us
        directly at{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>

      <h2>Advertising, analytics, and your consent</h2>
      <p>
        To keep FileShrinking free we display advertising and use analytics to
        understand which tools are useful. These third-party services are{" "}
        <strong>consent-gated</strong>: advertising and analytics scripts load
        only after you agree, and you can decline them and still use every tool.
        Crucially, none of this changes how your files are handled — ads and
        analytics never receive your documents, photos, video, or audio, because
        those are never transmitted off your device in the first place. For the
        full details, see our published privacy and cookie policies.
      </p>

      <h2>Get in touch</h2>
      <p>
        Questions, bug reports, or ideas for a tool we should build next are
        always welcome. Visit our <Link href="/contact">contact page</Link> or
        email us at{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>. We
        read everything and use your feedback to decide what to improve.
      </p>

      <JsonLd
        data={[
          organizationSchema(),
          personSchema({
            name: "The FileShrinking Team",
            description:
              "The independent team of web developers who build and maintain FileShrinking, a free, privacy-first, 100% in-browser file compression toolkit.",
            url: "/about",
          }),
        ]}
      />
    </ContentPageLayout>
  );
}
