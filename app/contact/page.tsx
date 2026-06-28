import type { Metadata } from "next";
import Link from "next/link";
import { ContentPageLayout } from "@/components/content/page-layout";
import { ContactForm } from "@/components/contact-form";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with FileShrinking. Send questions, feedback, bug reports, or feature requests. Email hello@fileshrinking.com — privacy-first, no data stored.",
  path: "/contact",
});

export default function Page() {
  return (
    <ContentPageLayout
      title="Contact Us"
      intro={
        <>
          We&rsquo;d love to hear from you. Whether you have a question, a piece
          of feedback, a bug to report, or an idea for a feature, the form below
          is the quickest way to reach the people who build FileShrinking.
        </>
      }
      lastUpdated="2026-06-27"
    >
      <h2 id="get-in-touch">Get in touch</h2>
      <p>
        FileShrinking is a free, privacy-first toolkit for shrinking files
        directly in your browser &mdash; from{" "}
        <Link href="/compress-jpeg">JPEG</Link> and{" "}
        <Link href="/compress-png">PNG</Link> images to{" "}
        <Link href="/pdf-compressor">PDF documents</Link>,{" "}
        <Link href="/video-compressor">video</Link>, and{" "}
        <Link href="/audio-compressor">audio</Link>. Because every tool runs
        entirely on your own device, we don&rsquo;t see your files and can&rsquo;t
        help recover or inspect them. But for anything else &mdash; how a tool
        works, why a result looks the way it does, or what we should build next
        &mdash; we&rsquo;re genuinely glad to help.
      </p>
      <p>Reasons people usually write in:</p>
      <ul>
        <li>
          <strong>Questions</strong> about how a tool works, which format to
          choose, or how to get the smallest file without losing quality.
        </li>
        <li>
          <strong>Bug reports</strong> &mdash; a file that won&rsquo;t process, a
          button that doesn&rsquo;t respond, or anything that looks broken.
          Telling us your browser and operating system helps us reproduce it
          quickly.
        </li>
        <li>
          <strong>Feature requests</strong> &mdash; a format you wish we
          supported, an option you&rsquo;re missing, or a workflow we could make
          smoother.
        </li>
        <li>
          <strong>Feedback</strong> of any kind, including the parts you love and
          the parts that frustrate you. It all shapes what we do next.
        </li>
      </ul>

      <h2 id="form">Send us a message</h2>
      <p>
        Fill in the form below and click &ldquo;Send message.&rdquo; Here&rsquo;s
        something important to know about how it works:{" "}
        <strong>
          the form composes an email in your own mail app rather than sending
          anything to us directly.
        </strong>{" "}
        When you submit, your device opens your default email client (such as
        Apple Mail, Outlook, or Gmail) with the message pre-filled and addressed
        to us. Nothing is transmitted until <em>you</em> hit send inside that
        app. As a result, no message data is collected, transmitted to a server,
        or stored by FileShrinking through this page &mdash; the same
        privacy-first principle that keeps your files on your device applies to
        your messages too.
      </p>

      <ContactForm />

      <h2 id="email">Prefer to email directly?</h2>
      <p>
        You can always reach us the old-fashioned way. Email{" "}
        <a href="mailto:hello@fileshrinking.com">hello@fileshrinking.com</a> from
        whichever account you like, and your message lands straight in our
        support inbox. This is handy if your browser blocks the form&rsquo;s
        &ldquo;open my mail app&rdquo; action, if you&rsquo;re on a shared
        computer without a configured mail client, or if you simply want to
        attach a screenshot &mdash; which often makes a bug report much easier to
        understand.
      </p>

      <h2 id="response-times">Response times</h2>
      <p>
        FileShrinking is run by a small team, so we read every message
        personally rather than routing them through a call center. We aim to
        reply within <strong>two to three business days</strong>. During busy
        periods, or for tricky technical questions that need investigation, it
        can take a little longer &mdash; thanks in advance for your patience. If
        you don&rsquo;t hear back within about a week, please check your spam or
        junk folder, then feel free to email us again in case your original
        message went astray.
      </p>
      <p>
        Please note that we provide support in English only, and we can&rsquo;t
        offer help with files you processed elsewhere or with third-party
        software. For questions about how we handle data and the limited
        analytics and advertising on this site &mdash; all of which are gated
        behind your consent &mdash; see our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>. For the rules that
        govern use of the site, see our{" "}
        <Link href="/terms-of-service">Terms of Service</Link>.
      </p>

      <h2 id="before-you-write">Before you write, a quick tip</h2>
      <p>
        Many common questions are already answered on each tool&rsquo;s page,
        where you&rsquo;ll find a short FAQ covering privacy, file-size limits,
        quality, and batch processing. If you&rsquo;re curious about who builds
        FileShrinking and why we chose a fully client-side approach, our{" "}
        <Link href="/about">About page</Link> tells the story. And if your answer
        isn&rsquo;t there, that&rsquo;s exactly what the form above is for &mdash;
        don&rsquo;t hesitate to reach out.
      </p>
    </ContentPageLayout>
  );
}
