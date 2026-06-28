import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageLayout } from "@/components/content/page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Service",
  description:
    "The terms for using FileShrinking — a free, client-side file compressor. The service is provided as-is, runs locally, and never uploads your files.",
  path: "/terms-of-service",
});

export default function Page() {
  return (
    <ContentPageLayout
      title="Terms of Service"
      intro={
        <>
          These terms govern your use of FileShrinking. By using the site you
          agree to them. They are written to be readable — and because every
          tool runs entirely in your browser, they are mercifully short.
        </>
      }
      lastUpdated="2026-06-27"
    >
      <h2 id="acceptance">1. Acceptance of these terms</h2>
      <p>
        FileShrinking (&ldquo;FileShrinking,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;the service&rdquo;) provides free,
        browser-based tools that compress and convert images, PDFs, video, and
        audio. By accessing or using the website at{" "}
        <a href="https://fileshrinking.com">fileshrinking.com</a> you agree to
        be bound by these Terms of Service. If you do not agree with any part of
        these terms, please do not use the site.
      </p>
      <p>
        These terms work alongside our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
        <Link href="/disclaimer">Disclaimer</Link>, which are incorporated here
        by reference. Together they describe how the service works and the
        limits of what we can promise.
      </p>

      <h2 id="how-it-works">2. How the service works</h2>
      <p>
        FileShrinking is a <strong>100% client-side</strong> tool. When you add
        a file, it is read into your browser&rsquo;s memory and processed there
        using WebAssembly and standard web APIs. Your files are{" "}
        <strong>never uploaded to a server</strong>, never transmitted over the
        network, and never stored by us. Because the work happens on your own
        device, we cannot see, access, copy, or take ownership of any file you
        process — there is simply no server-side copy for us to hold.
      </p>
      <p>
        A practical consequence of this design is that results depend on your
        own hardware and software. Processing speed, the maximum file size you
        can handle, the formats your browser supports, and the exact output all
        vary by device, browser, available memory, and operating system. We do
        not guarantee that any particular file will compress, convert, or open
        successfully on your setup.
      </p>

      <h2 id="free">3. The service is free</h2>
      <p>
        The tools are free to use with no sign-up, no subscription, and no
        watermarks. We keep the lights on through advertising rather than
        charging you. We may add, change, or remove tools and features at any
        time, and we may limit or discontinue the service in whole or in part
        without notice. We are under no obligation to keep any specific tool
        available.
      </p>

      <h2 id="acceptable-use">4. Acceptable use</h2>
      <p>You agree that you will not use FileShrinking to:</p>
      <ul>
        <li>
          process, create, or distribute content that is illegal, infringing,
          defamatory, or that violates the rights of any third party;
        </li>
        <li>
          handle files you do not own or otherwise lack the rights and
          permissions to use;
        </li>
        <li>
          violate any applicable law or regulation in your jurisdiction,
          including export, privacy, and intellectual-property laws;
        </li>
        <li>
          attempt to disrupt, overload, reverse-engineer for malicious
          purposes, or interfere with the operation, security, or integrity of
          the site or its underlying code; or
        </li>
        <li>
          misrepresent the service, for example by re-hosting it in a way that
          implies it is your own or that it uploads files when it does not.
        </li>
      </ul>
      <p>
        <strong>You are solely responsible for your files</strong> and for
        confirming that you have the right to use them. Since processing happens
        on your device, you alone control what you put into the tools and what
        you do with the results.
      </p>

      <h2 id="no-warranty">5. No warranty — provided &ldquo;as is&rdquo;</h2>
      <p>
        The service is provided <strong>&ldquo;as is&rdquo;</strong> and{" "}
        <strong>&ldquo;as available,&rdquo;</strong> without warranties of any
        kind, whether express or implied. To the fullest extent permitted by
        law, we disclaim all warranties, including the implied warranties of
        merchantability, fitness for a particular purpose, accuracy, and
        non-infringement. We do not warrant that the service will be
        uninterrupted, error-free, secure, or that any output will meet your
        expectations.
      </p>
      <p>
        Compression is often <strong>lossy</strong>: to make files smaller,
        tools may discard data that cannot be recovered. You are responsible for
        reviewing every result before relying on it.
      </p>

      <h2 id="liability">6. Limitation of liability and data loss</h2>
      <p>
        To the maximum extent permitted by law, FileShrinking and its operators
        will not be liable for any indirect, incidental, special,
        consequential, or punitive damages, or for any loss of data, files,
        profits, or goodwill, arising out of or related to your use of (or
        inability to use) the service — even if we have been advised of the
        possibility of such damages.
      </p>
      <p>
        Crucially: <strong>always keep a copy of your original files.</strong>{" "}
        Browser-based processing can fail, a tab can crash, or a result can be
        unsatisfactory, and because we never receive your files we cannot
        recover anything for you. Treat the output as a new copy and verify it
        before deleting your originals.
      </p>

      <h2 id="ip">7. Intellectual property</h2>
      <p>
        The FileShrinking name, logo, website design, text, and original code
        are owned by us or our licensors and are protected by intellectual
        property laws. You may use the site for its intended purpose, but you
        may not copy, rebrand, or redistribute the site itself without
        permission. The underlying compression engines are provided by their
        respective open-source projects under their own licenses.
      </p>
      <p>
        <strong>Your files remain yours.</strong> We claim no ownership of, and
        acquire no rights in, any file you process — and as noted above, we
        never even receive it.
      </p>

      <h2 id="third-party">8. Third-party services</h2>
      <p>
        We use a small number of third-party services to operate the site and
        keep it free. These are loaded only as described in our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> and, where required,
        are gated behind your consent:
      </p>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Purpose</th>
            <th>When it loads</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google AdSense</td>
            <td>Advertising that funds the free tools</td>
            <td>Only after you consent</td>
          </tr>
          <tr>
            <td>Google Analytics</td>
            <td>Aggregate, anonymous usage statistics</td>
            <td>Only after you consent</td>
          </tr>
        </tbody>
      </table>
      <p>
        These providers operate under their own terms and privacy policies,
        which we do not control. Importantly, none of them ever receive your
        files — they handle only standard web analytics and advertising data,
        and only with your consent.
      </p>

      <h2 id="changes">9. Changes to these terms</h2>
      <p>
        We may update these terms from time to time as the service evolves or
        the law changes. When we do, we will revise the &ldquo;Last
        updated&rdquo; date at the top of this page. Material changes may be
        highlighted on the site. Your continued use of FileShrinking after an
        update means you accept the revised terms.
      </p>

      <h2 id="governing-law">10. Governing law</h2>
      <p>
        These terms are governed by the laws applicable where the Site operator
        is established, without regard to conflict-of-law rules. Where mandatory
        consumer-protection law applies, you retain the right to bring
        proceedings in your own country of residence, and nothing in these terms
        limits rights that cannot be waived under the law that applies to you. If
        any provision of these terms is found unenforceable, the remaining
        provisions stay in full effect.
      </p>

      <h2 id="contact">11. Contact</h2>
      <p>
        Questions about these terms? Email us at{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> or
        visit our <Link href="/contact">contact page</Link>. We are happy to
        help clarify anything here.
      </p>
    </ContentPageLayout>
  );
}
