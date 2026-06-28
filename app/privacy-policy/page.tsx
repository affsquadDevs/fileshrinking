import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageLayout } from "@/components/content/page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description:
    "How FileShrinking handles your data: your files are never uploaded — all compression happens locally in your browser. Analytics and ads are consent-gated.",
  path: "/privacy-policy",
});

export default function Page() {
  return (
    <ContentPageLayout
      title="Privacy Policy"
      lastUpdated="2026-06-27"
      intro={
        <>
          FileShrinking is built privacy-first. The files you compress are never
          uploaded — they are processed entirely in your browser, so we never
          receive, see, or store them. This policy explains the limited data we
          do handle and the choices you control.
        </>
      }
    >
      <h2 id="overview">Overview</h2>
      <p>
        This Privacy Policy describes how FileShrinking
        ({" "}
        <a href="https://fileshrinking.com">fileshrinking.com</a>, the
        &ldquo;Site&rdquo;) collects, uses, and protects information when you
        visit. The Site is operated by the FileShrinking team (
        &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using the
        Site you agree to the practices described here. Please also read our{" "}
        <Link href="/cookie-policy">Cookie Policy</Link> and{" "}
        <Link href="/terms-of-service">Terms of Service</Link>, which form part
        of your agreement with us.
      </p>

      <h2 id="files-never-uploaded">Your files are never uploaded</h2>
      <p>
        This is the most important thing to understand about FileShrinking. All
        of our compression tools — for images, PDF, video, and audio — run{" "}
        <strong>100% inside your web browser</strong> using WebAssembly. When you
        add a file, it is read into your device&rsquo;s memory and processed
        locally on your own hardware. The compressed result is handed straight
        back to you for download.
      </p>
      <p>
        Because of this design, we <strong>never receive, see, store, or
        transmit</strong> the files you compress or any of their contents. There
        is no server-side upload step, no copy is kept anywhere, and your files
        never leave your device. In fact, once the page has loaded you can
        disconnect from the internet entirely and the tools will still work.
      </p>

      <h2 id="what-we-do-not-collect">What we do not collect</h2>
      <ul>
        <li>
          <strong>Your files or their contents.</strong> We have no access to
          the documents, photos, videos, or audio you process.
        </li>
        <li>
          <strong>Account data.</strong> FileShrinking has no sign-up, login, or
          user accounts, so we do not collect names, passwords, or profiles.
        </li>
        <li>
          <strong>Payment information.</strong> The Site is free to use; we do
          not process payments or store any financial details.
        </li>
      </ul>

      <h2 id="data-we-use">Information that is used</h2>
      <p>
        FileShrinking is intentionally light on data. The table below summarizes
        what is stored or processed, where it lives, and why.
      </p>
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Where it lives</th>
            <th>Purpose</th>
            <th>Consent required?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Consent choice</td>
            <td>localStorage (your browser)</td>
            <td>Remember whether you accepted or declined analytics and ads</td>
            <td>No — strictly necessary</td>
          </tr>
          <tr>
            <td>Theme preference</td>
            <td>localStorage (your browser)</td>
            <td>Remember light/dark mode so the Site looks right on return</td>
            <td>No — strictly necessary</td>
          </tr>
          <tr>
            <td>Analytics data</td>
            <td>Google Analytics (via Google Tag Manager)</td>
            <td>Understand aggregate usage to improve the Site</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Advertising data</td>
            <td>Google AdSense</td>
            <td>Show ads that help keep the Site free</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
      <p>
        The <strong>localStorage</strong> values above are small settings stored
        only in your browser. They are not transmitted to us and contain no
        personal information — just your consent decision and your chosen theme.
        You can clear them at any time through your browser settings.
      </p>

      <h2 id="analytics">Analytics</h2>
      <p>
        We use <strong>Google Analytics</strong>, loaded through{" "}
        <strong>Google Tag Manager (GTM)</strong>, to understand how visitors
        use the Site in aggregate — for example which tools are popular and which
        pages load slowly. This helps us prioritize improvements. Analytics is{" "}
        <strong>only loaded after you give consent</strong>. If you decline,
        these scripts do not run and no analytics data is collected. Analytics
        data is collected and processed in aggregate and is not used to identify
        you personally.
      </p>

      <h2 id="advertising">Advertising</h2>
      <p>
        FileShrinking is free, and we cover our costs with advertising served by{" "}
        <strong>Google AdSense</strong>. Ads are{" "}
        <strong>only loaded after you give consent</strong>. When you consent to
        advertising, Google and its partners may use cookies, device
        identifiers, and similar technologies to serve and measure ads,
        including <strong>personalized (interest-based) ads</strong> based on
        your prior activity. If you decline, AdSense is not loaded and you will
        not receive personalized advertising from us.
      </p>
      <p>
        Google&rsquo;s use of advertising cookies is governed by Google&rsquo;s
        own policies. You can learn more and manage your ad settings at{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&rsquo;s Advertising page
        </a>{" "}
        and review the{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Privacy Policy
        </a>
        .
      </p>

      <h2 id="consent-mode">Google Consent Mode v2</h2>
      <p>
        We implement <strong>Google Consent Mode v2</strong>. Before you make a
        choice, Google&rsquo;s analytics and advertising tags default to a denied
        state, meaning they do not set identifying cookies or collect personal
        data. Only after you grant consent are the relevant signals updated and
        the corresponding services enabled. This gives you genuine control over
        whether analytics and advertising run at all.
      </p>

      <h2 id="third-party">Third-party services and links</h2>
      <p>
        The third-party services referenced above are operated by Google LLC.
        Their handling of any data they collect is governed by their own terms,
        not ours:
      </p>
      <ul>
        <li>
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>
        </li>
        <li>
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Google uses cookies in advertising
          </a>
        </li>
        <li>
          <a
            href="https://support.google.com/analytics/answer/6004245"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics data privacy and security
          </a>
        </li>
      </ul>
      <p>
        The Site may also contain links to other websites we do not control. We
        are not responsible for the privacy practices of those sites and
        encourage you to read their policies.
      </p>

      <h2 id="your-rights">Your privacy rights (GDPR)</h2>
      <p>
        If you are in the European Economic Area or the United Kingdom, you have
        rights under the General Data Protection Regulation, including the right
        to <strong>access</strong> the personal data held about you, the right to{" "}
        <strong>erasure (deletion)</strong>, the right to{" "}
        <strong>object to or restrict processing</strong>, and the right to{" "}
        <strong>withdraw consent</strong> at any time. Where we rely on consent
        (analytics and advertising), withdrawing it is as easy as giving it and
        will not affect the lawfulness of processing carried out beforehand.
      </p>
      <p>To exercise these rights you can:</p>
      <ul>
        <li>
          <strong>Re-open your consent settings</strong> at any time using the
          consent or cookie-preferences link in the footer of every page, then
          change or withdraw your choices.
        </li>
        <li>
          <strong>Clear your browser storage</strong> to remove the
          locally-stored consent and theme values.
        </li>
        <li>
          <strong>Email us</strong> at{" "}
          <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>{" "}
          and we will respond within the timeframe required by applicable law.
        </li>
      </ul>
      <p>
        You also have the right to lodge a complaint with the data protection
        authority in your country or region if you believe your rights have been
        infringed.
      </p>

      <h2 id="ccpa">California privacy rights (CCPA/CPRA)</h2>
      <p>
        If you are a California resident, the California Consumer Privacy Act, as
        amended, gives you rights to know what personal information is collected,
        to request its deletion, and to opt out of the &ldquo;sale&rdquo; or
        &ldquo;sharing&rdquo; of personal information. We do not sell your
        personal information for money. Where the use of advertising cookies may
        be considered &ldquo;sharing&rdquo; for cross-context behavioral
        advertising, you can opt out by declining advertising consent in our
        consent settings or by not granting it in the first place. To make a
        request, email{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>.
      </p>

      <h2 id="retention">Data retention</h2>
      <p>
        Because your files are processed locally and never reach us, there is
        nothing for us to retain about them. The consent and theme values stored
        in your browser persist until you clear them or change your choices.
        Analytics and advertising data, when enabled with your consent, are
        retained by Google according to Google&rsquo;s own retention settings and
        policies.
      </p>

      <h2 id="children">Children&rsquo;s privacy</h2>
      <p>
        FileShrinking is a general-audience tool and is not directed at children
        under 13 (or the minimum age in your jurisdiction). We do not knowingly
        collect personal information from children. If you believe a child has
        provided us with personal information, please contact us so we can take
        appropriate action.
      </p>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        We may update this Privacy Policy from time to time to reflect changes in
        our practices or for legal reasons. When we do, we will revise the
        &ldquo;Last updated&rdquo; date at the top of this page. Significant
        changes may be highlighted on the Site. We encourage you to review this
        page periodically.
      </p>

      <h2 id="contact">Contact us</h2>
      <p>
        If you have any questions about this Privacy Policy or how your data is
        handled, please email us at{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> or
        visit our <Link href="/contact">contact page</Link>, and we will be happy
        to help.
      </p>
    </ContentPageLayout>
  );
}
