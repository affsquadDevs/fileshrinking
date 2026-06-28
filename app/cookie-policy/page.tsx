import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageLayout } from "@/components/content/page-layout";
import { buildMetadata } from "@/lib/seo/metadata";

const UPDATED = "2026-06-27";

export const metadata: Metadata = buildMetadata({
  title: "Cookie Policy",
  description:
    "How FileShrinking uses cookies and local storage: minimal first-party storage for your consent and theme, plus consent-gated Google Analytics and AdSense.",
  path: "/cookie-policy",
});

export default function Page() {
  return (
    <ContentPageLayout
      title="Cookie Policy"
      lastUpdated={UPDATED}
      intro={
        <>
          FileShrinking runs entirely in your browser and keeps cookies to an
          absolute minimum. This page explains exactly what is stored on your
          device, why, for how long, and how you can change your choices at any
          time.
        </>
      }
    >
      <h2 id="overview">Overview</h2>
      <p>
        A &ldquo;cookie&rdquo; is a small text file a website asks your browser
        to store so it can remember information between visits. Related
        technologies such as <strong>localStorage</strong> work the same way:
        they save a little data on your own device. FileShrinking is a privacy
        first, 100% client side tool. Your files are compressed locally in your
        browser and are <strong>never uploaded</strong> to us or anyone else, so
        we never set a cookie that contains, tracks, or transmits your files or
        their contents.
      </p>
      <p>
        We use only a tiny amount of <strong>first party</strong> storage to
        remember your preferences, and we load{" "}
        <strong>third party advertising and analytics</strong> services from
        Google <strong>only after you give consent</strong>. Until you accept,
        those services are blocked and set no cookies. This policy should be read
        alongside our <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      <h2 id="first-party">First party storage we set</h2>
      <p>
        These items are written by FileShrinking itself, live only on your
        device, and are essential for the site to remember basic choices. They
        are stored in your browser&rsquo;s localStorage rather than as
        traditional cookies, are never sent to a server, and do not identify you.
      </p>
      <ul>
        <li>
          <strong>Consent choice.</strong> When you accept or reject the
          optional services in our consent banner, we save that decision so we do
          not ask again on every page load and so we can honour it.
        </li>
        <li>
          <strong>Theme preference.</strong> If you switch between light and dark
          mode, we remember your choice so the site looks the way you left it.
        </li>
      </ul>

      <h2 id="consent-gated">Consent gated third party services</h2>
      <p>
        To keep FileShrinking free, the site is supported by advertising and we
        use analytics to understand which tools are useful. These services are
        provided by Google and are loaded through{" "}
        <strong>Google Tag Manager</strong>. They can set their own cookies, but
        they only run <strong>after you have explicitly accepted</strong> in our
        consent banner. The services involved are:
      </p>
      <ul>
        <li>
          <strong>Google Analytics</strong> &mdash; measures aggregate, anonymous
          usage such as page views and which compressors are popular, helping us
          improve the site.
        </li>
        <li>
          <strong>Google AdSense</strong> (and its DoubleClick ad serving) &mdash;
          displays the ads that fund the project and helps limit how often you
          see the same ad.
        </li>
      </ul>

      <h2 id="table">Cookies and storage we use</h2>
      <p>
        The table below lists the main items. Exact names and lifetimes set by
        Google can change; for the most current details see Google&rsquo;s own
        documentation linked under{" "}
        <a href="#managing">Managing your choices</a>.
      </p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Provider</th>
            <th>Purpose</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Consent choice
              <br />
              (localStorage)
            </td>
            <td>FileShrinking (first party)</td>
            <td>Remembers whether you accepted or rejected optional cookies.</td>
            <td>Persistent until you clear it</td>
          </tr>
          <tr>
            <td>
              Theme
              <br />
              (localStorage)
            </td>
            <td>FileShrinking (first party)</td>
            <td>Remembers your light or dark mode preference.</td>
            <td>Persistent until you clear it</td>
          </tr>
          <tr>
            <td>_ga, _ga_*</td>
            <td>Google Analytics (set only with consent)</td>
            <td>
              Distinguishes anonymous visitors to measure aggregate site usage.
            </td>
            <td>Up to 2 years</td>
          </tr>
          <tr>
            <td>
              IDE, DSID, test_cookie
              <br />
              and related ad cookies
            </td>
            <td>Google AdSense / DoubleClick (set only with consent)</td>
            <td>
              Serves and measures ads and limits repeated display of the same ad.
            </td>
            <td>Session up to 13 months</td>
          </tr>
        </tbody>
      </table>

      <h2 id="consent-mode">Consent Mode v2: denied by default</h2>
      <p>
        We use Google&rsquo;s <strong>Consent Mode v2</strong>. In plain terms,
        this means every consent signal &mdash; for analytics storage, ad
        storage, ad personalisation, and ad user data &mdash; starts in the{" "}
        <strong>&ldquo;denied&rdquo;</strong> state by default the moment the
        page loads. Nothing is granted until you make a choice.
      </p>
      <p>
        If you <strong>accept</strong>, the relevant signals switch to
        &ldquo;granted&rdquo; and Google Analytics and AdSense may set the
        cookies described above. If you <strong>reject</strong> or simply ignore
        the banner, those signals stay &ldquo;denied&rdquo;: the scripts run in a
        restricted, cookieless mode and do not store identifiers on your device.
        Either way, your first party preferences above continue to work because
        they are strictly necessary for the site to function.
      </p>

      <h2 id="managing">Managing your choices</h2>
      <p>
        You are always in control. You can change or withdraw your consent at any
        time using the <strong>Consent settings</strong> link in the footer of
        every page, which reopens the consent banner so you can update your
        decision. Withdrawing consent stops Google&rsquo;s services from setting
        new cookies going forward.
      </p>
      <p>
        You can also manage cookies directly in your browser: most browsers let
        you view, block, or delete cookies and clear site storage from their
        privacy or settings menu. Deleting our first party items simply means the
        site will ask for your theme and consent preferences again. For more
        detail on the third party services, see Google&rsquo;s{" "}
        <a
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          cookie information
        </a>{" "}
        and its{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          privacy policy
        </a>
        .
      </p>

      <h2 id="changes">Changes to this policy</h2>
      <p>
        We may update this Cookie Policy if we add a feature or change the
        services we rely on. When we do, we will revise the &ldquo;Last
        updated&rdquo; date at the top of this page. Significant changes that
        affect the cookies we set will be reflected in the consent banner so you
        can review your choice.
      </p>

      <h2 id="contact">Contact us</h2>
      <p>
        If you have any questions about how we use cookies or local storage,
        email us at{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a>. For
        a fuller picture of how we handle data, please read our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
    </ContentPageLayout>
  );
}
