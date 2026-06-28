import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageLayout } from "@/components/content/page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Disclaimer",
  description:
    "Honest disclaimer for FileShrinking: our free, 100% in-browser compression tools come with no fidelity or file-size guarantees. Always keep originals.",
  path: "/disclaimer",
});

export default function Page() {
  return (
    <ContentPageLayout
      title="Disclaimer"
      intro={
        <>
          FileShrinking provides free, browser-based compression tools as a
          convenience. This page explains the limits of those tools, the
          results you can realistically expect, and the responsibilities that
          remain yours.
        </>
      }
      lastUpdated="2026-06-27"
    >
      <h2 id="general">General information only</h2>
      <p>
        The information, tools, and content on FileShrinking (the
        &ldquo;Service&rdquo;) are provided for general informational and
        practical use only. We work hard to keep everything accurate and
        useful, but we make no warranties of any kind, express or implied,
        about the completeness, accuracy, reliability, suitability, or
        availability of the Service or its results. Your use of the Service is
        entirely at your own risk. This disclaimer should be read together with
        our <Link href="/terms-of-service">Terms of Service</Link>, which
        governs your use of the site.
      </p>

      <h2 id="how-it-works">How our tools actually work</h2>
      <p>
        Every compressor on FileShrinking runs{" "}
        <strong>entirely inside your web browser</strong>. Your images, PDFs,
        videos, and audio files are read into your device&rsquo;s memory,
        processed locally with WebAssembly, and handed straight back to you.{" "}
        <strong>
          Your files are never uploaded to us, transmitted over the network, or
          stored on any server.
        </strong>{" "}
        Because all the work happens on your own hardware, the speed, quality,
        and even whether a given file can be processed at all depend on your
        device, browser, available memory, and the file you provide. For details
        on the limited data the site itself handles, see our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
        <Link href="/cookie-policy">Cookie Policy</Link>.
      </p>

      <h2 id="no-guarantee">No guarantee of results</h2>
      <p>
        Compression is not magic, and we cannot promise a specific outcome.
        Most image, video, and audio compression is <strong>lossy</strong>,
        which means it permanently discards some data to make files smaller. We
        do not guarantee any particular compression ratio, file size, output
        quality, or perfect fidelity to your original. How much a file shrinks
        and how it looks or sounds afterward depend on the content itself, the
        format, the settings you choose, and how well the original was already
        optimized. A photo straight from a camera may shrink dramatically, while
        an already-optimized file may barely change &mdash; or, in some cases, a
        re-encoded file could even be larger than the original.
      </p>

      <h2 id="limits">Real limits you should know about</h2>
      <p>
        Different file types behave very differently, and some have hard
        practical limits that no in-browser tool can overcome:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>File type</th>
              <th>What to expect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Images (JPEG, PNG, WebP, AVIF, GIF)</td>
              <td>
                Usually compress well, but savings vary. Already-optimized
                images may shrink little or not at all.
              </td>
            </tr>
            <tr>
              <td>PDFs</td>
              <td>
                Our PDF tool reduces size mainly by recompressing embedded
                images. PDFs made of text and vector graphics may shrink very
                little or not at all, because there are no large images to
                optimize.
              </td>
            </tr>
            <tr>
              <td>Video</td>
              <td>
                Browser-based video compression is single-threaded and
                CPU-intensive. It can be slow, and very large files may fail
                outright on low-memory devices or older browsers.
              </td>
            </tr>
            <tr>
              <td>Audio</td>
              <td>
                Lossy re-encoding can reduce size, but re-compressing an
                already-compressed file (such as a low-bitrate MP3) yields
                little benefit and can reduce quality.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        If a tool stalls, runs out of memory, or fails on a large file, that is
        a limitation of running heavy processing in a browser tab &mdash; not a
        defect you should rely on us to fix for any specific file. Trying a
        smaller file, a different browser, a more powerful device, or closing
        other tabs often helps.
      </p>

      <h2 id="keep-originals">Always keep your original files</h2>
      <p>
        This is the single most important point on this page.{" "}
        <strong>
          Always keep a safe, unmodified copy of every original file before you
          compress it.
        </strong>{" "}
        Compression can be cumulative and irreversible: once detail is
        discarded, it cannot be recovered from the compressed output. Treat the
        compressed file as a new, separate copy &mdash; never your only copy.
      </p>
      <ul>
        <li>
          Keep masters of important photos, documents, and recordings backed up
          before processing.
        </li>
        <li>
          Re-compress from your highest-quality original, not from a file that
          has already been compressed.
        </li>
        <li>
          Verify that a compressed file opens correctly and looks or sounds
          acceptable before you delete the original.
        </li>
      </ul>

      <h2 id="no-liability">No responsibility for data loss</h2>
      <p>
        To the fullest extent permitted by law, FileShrinking is not responsible
        or liable for any loss, corruption, or damage to your files or data, or
        for any other direct, indirect, incidental, or consequential loss
        arising from your use of (or inability to use) the Service. This
        includes browser crashes, device errors, interrupted processing,
        unexpected output, or deleting an original before you confirmed the
        result. Because everything runs locally on your device, we have no
        access to your files and no ability to recover them. The responsibility
        for backing up and verifying your data is yours alone.
      </p>

      <h2 id="external-links">External links and advertising</h2>
      <p>
        The Service may contain links to third-party websites and displays
        advertising provided by Google AdSense. These links and ads are offered
        for convenience and to support the free running of the site. We do not
        control, endorse, guarantee, or take responsibility for the content,
        products, services, accuracy, or practices of any third-party site or
        advertiser. A link or an advertisement is{" "}
        <strong>not an endorsement</strong>. Any dealings you have with a third
        party are solely between you and that party. Advertising and analytics
        cookies are loaded only after you give consent; you can read how we
        handle this in our <Link href="/cookie-policy">Cookie Policy</Link> and{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2 id="no-professional-advice">Not professional advice</h2>
      <p>
        Nothing on FileShrinking constitutes legal, technical, financial, or
        other professional advice. Guides, FAQs, and explanations about file
        formats and compression are general educational content and may not
        apply to your specific situation. If you need to meet a particular
        technical specification, archival standard, or legal or regulatory
        requirement &mdash; for example for court filings, medical imaging, or
        professional print &mdash; consult a qualified professional rather than
        relying on these tools or articles.
      </p>

      <h2 id="availability">Availability and changes</h2>
      <p>
        We provide the Service on an &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo; basis. We may change, suspend, or discontinue any tool
        or feature at any time without notice, and we do not guarantee that the
        Service will be uninterrupted, error-free, or compatible with every
        device or browser. We may update this disclaimer from time to time; the
        &ldquo;Last updated&rdquo; date above reflects the most recent change,
        and your continued use of the Service means you accept the current
        version.
      </p>

      <h2 id="contact">Contact us</h2>
      <p>
        If you have any questions about this disclaimer, you are welcome to email
        us at{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>
    </ContentPageLayout>
  );
}
