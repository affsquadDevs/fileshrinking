import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Gift,
  Infinity as InfinityIcon,
  Upload,
  Settings2,
  Download,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section, SectionHeader } from "@/components/layout/section";
import { LinkButton } from "@/components/link-button";
import { ToolCard } from "@/components/tool-card";
import { PrivacyBadge } from "@/components/privacy-badge";
import { FAQ } from "@/components/faq";
import { TOOL_CATEGORIES, TOOLS } from "@/lib/site-config";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "100% private",
    body: "Files are read and compressed on your device. Nothing is ever uploaded to a server — there's no server to upload to.",
  },
  {
    icon: Zap,
    title: "Fast & offline-capable",
    body: "No upload or download round-trip. Compression runs locally with WebAssembly, so it works even after your connection drops.",
  },
  {
    icon: Gift,
    title: "Free, no sign-up",
    body: "Every tool is free with no account, no watermark, and no email required. Use it as much as you like.",
  },
  {
    icon: InfinityIcon,
    title: "No file-count limits",
    body: "Batch-process many files at once and download them all in a single zip. Limited only by your device's memory.",
  },
];

const STEPS = [
  {
    icon: Upload,
    title: "Add your files",
    body: "Drag and drop, browse, or paste from your clipboard. Queue as many as you like — they stay on your device.",
  },
  {
    icon: Settings2,
    title: "Choose your settings",
    body: "Pick a preset or fine-tune quality. See the projected savings update before you commit.",
  },
  {
    icon: Download,
    title: "Download instantly",
    body: "Grab each compressed file, or download everything as a zip. No waiting on an upload or a server queue.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Are my files uploaded to a server?",
    a: "No. Every tool on FileShrinking runs entirely in your web browser using WebAssembly. Your files are read into memory on your own device, compressed locally, and handed back to you for download. They never travel across the network, so there is nothing for us — or anyone else — to see.",
  },
  {
    q: "Is FileShrinking really free?",
    a: "Yes. All of our compressors and converters are free to use with no account, no watermark, and no hidden limits. The site is supported by unobtrusive advertising, which is why you may see ads alongside the content.",
  },
  {
    q: "Will compressing reduce my file's quality?",
    a: "It depends on the format and settings. Lossless options (like our PNG optimizer) reduce size with no quality change at all. Lossy options (JPEG, WebP, AVIF, video) trade a small, usually invisible amount of quality for a much smaller file — and you control exactly how much with the quality slider.",
  },
  {
    q: "What's the maximum file size I can compress?",
    a: "There's no fixed limit because processing happens on your device. The practical ceiling is your device's available memory. Large images and audio are handled easily; for video we recommend files under roughly 150 MB since browser-based video encoding is memory-intensive.",
  },
  {
    q: "Which browsers and devices are supported?",
    a: "Any modern browser — Chrome, Edge, Firefox, Safari — on desktop or mobile. The tools use standard web technology that works everywhere, though faster devices will naturally compress large files more quickly.",
  },
  {
    q: "Do you store or track my files?",
    a: "We can't. Files never leave your browser, so we have no copy of them and no ability to access them. We use privacy-respecting analytics only after you consent, and you can change your consent choices at any time from the footer.",
  },
];

export default function HomePage() {
  const popular = [
    "compress-jpeg",
    "pdf-compressor",
    "compress-mp4",
    "compress-png",
  ];
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <Container className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <PrivacyBadge variant="pill" className="mb-6">
              No uploads · Files stay on your device
            </PrivacyBadge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Shrink any file,{" "}
              <span className="text-brand">right in your browser</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
              Free, privacy-first compression for images, PDFs, video and audio.
              Your files are processed entirely on your device — nothing is ever
              uploaded.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <LinkButton href="/image-compressor" size="lg">
                Compress images
                <ArrowRight className="size-4" aria-hidden="true" />
              </LinkButton>
              <LinkButton href="/pdf-compressor" size="lg" variant="outline">
                Compress a PDF
              </LinkButton>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-4 text-brand" aria-hidden="true" />
                No file ever uploaded
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Gift className="size-4 text-brand" aria-hidden="true" />
                100% free
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Zap className="size-4 text-brand" aria-hidden="true" />
                No sign-up
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Popular tools quick links */}
      <Section className="py-10 sm:py-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            Popular:
          </span>
          {popular.map((slug) => {
            const tool = TOOLS.find((t) => t.slug === slug)!;
            return (
              <LinkButton
                key={slug}
                href={`/${slug}`}
                variant="secondary"
                size="sm"
              >
                {tool.title}
              </LinkButton>
            );
          })}
        </div>
      </Section>

      {/* All tools by category */}
      <Section className="pt-4">
        <SectionHeader
          eyebrow="Every tool you need"
          title="Compress and convert any file"
          description="A focused tool for each format — each one runs locally, with clear before-and-after size feedback."
        />
        <div className="mt-12 space-y-12">
          {TOOL_CATEGORIES.map((cat) => {
            const tools = TOOLS.filter((t) => t.category === cat.id);
            return (
              <div key={cat.id}>
                <div className="mb-5 flex items-end justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {cat.label}
                  </h3>
                  <Link
                    href={`/${cat.hub}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                  >
                    View all
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {tools.map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Why */}
      <Section className="border-y border-border/60 bg-muted/30">
        <SectionHeader
          eyebrow="Why FileShrinking"
          title="Compression that respects your privacy"
          description="Most online compressors upload your files to their servers. We took a different approach — and it turns out to be better in almost every way."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                <f.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          eyebrow="How it works"
          title="Three steps, zero uploads"
          description="From file to smaller file in seconds — without your data ever leaving your device."
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-brand font-semibold text-brand-foreground">
                  {i + 1}
                </span>
                <s.icon className="size-5 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-border/60">
        <div className="mx-auto max-w-3xl">
          <SectionHeader title="Frequently asked questions" />
          <FAQ items={FAQ_ITEMS} className="mt-8 w-full" />
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to shrink your files?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No account, no upload, no catch. Pick a tool and try it now.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <LinkButton href="/image-compressor" size="lg">
              Start compressing
              <ArrowRight className="size-4" aria-hidden="true" />
            </LinkButton>
            <LinkButton href="/about" size="lg" variant="outline">
              Why trust us
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
