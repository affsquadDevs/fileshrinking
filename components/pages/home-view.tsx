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
  Eye,
  Scale,
  Server,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section, SectionHeader } from "@/components/layout/section";
import { LinkButton } from "@/components/link-button";
import { buttonVariants } from "@/components/ui/button";
import { ToolCard } from "@/components/tool-card";
import { PrivacyBadge } from "@/components/privacy-badge";
import { FAQ } from "@/components/faq";
import { GithubMark } from "@/components/icons/github";
import { cn } from "@/lib/utils";
import { SITE, TOOL_CATEGORIES, TOOLS } from "@/lib/site-config";
import { localizePath, type Locale } from "@/lib/i18n/config";
import { localizedTool } from "@/lib/i18n/content";
import { getHomeContent } from "@/lib/i18n/content/home";

const FEATURE_ICONS: LucideIcon[] = [ShieldCheck, Zap, Gift, InfinityIcon];
const STEP_ICONS: LucideIcon[] = [Upload, Settings2, Download];
const OS_ICONS: LucideIcon[] = [Eye, Scale, Server];
const TRUST_ICONS: LucideIcon[] = [ShieldCheck, Gift, Zap];
const POPULAR = ["compress-jpeg", "pdf-compressor", "compress-mp4", "compress-png"];

export function HomeView({ locale }: { locale: Locale }) {
  const c = getHomeContent(locale);
  const lp = (href: string) => localizePath(href, locale);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
        <Container className="relative py-16 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <PrivacyBadge variant="pill" className="mb-6">
              {c.hero.badge}
            </PrivacyBadge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {c.hero.titleLead}{" "}
              <span className="text-brand">{c.hero.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
              {c.hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <LinkButton href={lp("/image-compressor")} size="lg">
                {c.hero.ctaImages}
                <ArrowRight className="size-4" aria-hidden="true" />
              </LinkButton>
              <LinkButton href={lp("/pdf-compressor")} size="lg" variant="outline">
                {c.hero.ctaPdf}
              </LinkButton>
            </div>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {c.hero.trust.map((label, i) => {
                const Icon = TRUST_ICONS[i] ?? ShieldCheck;
                return (
                  <span key={i} className="inline-flex items-center gap-1.5">
                    <Icon className="size-4 text-brand" aria-hidden="true" />
                    {label}
                  </span>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Popular tools quick links */}
      <Section className="py-10 sm:py-12">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            {c.popular}
          </span>
          {POPULAR.map((slug) => (
            <LinkButton
              key={slug}
              href={lp(`/${slug}`)}
              variant="secondary"
              size="sm"
            >
              {localizedTool(slug, locale).title}
            </LinkButton>
          ))}
        </div>
      </Section>

      {/* All tools by category */}
      <Section className="pt-4">
        <SectionHeader
          eyebrow={c.toolsEyebrow}
          title={c.toolsTitle}
          description={c.toolsDescription}
        />
        <div className="mt-12 space-y-12">
          {TOOL_CATEGORIES.map((cat) => {
            const tools = TOOLS.filter((t) => t.category === cat.id);
            return (
              <div key={cat.id}>
                <div className="mb-5 flex items-end justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {localizedTool(cat.hub, locale).shortName}
                  </h3>
                  <Link
                    href={lp(`/${cat.hub}`)}
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                  >
                    {c.viewAll}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {tools.map((tool) => (
                    <ToolCard key={tool.slug} tool={tool} locale={locale} />
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
          eyebrow={c.whyEyebrow}
          title={c.whyTitle}
          description={c.whyDescription}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.features.map((f, i) => {
            const Icon = FEATURE_ICONS[i] ?? ShieldCheck;
            return (
              <div
                key={i}
                className="rounded-xl border border-border bg-card p-6"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeader
          eyebrow={c.howEyebrow}
          title={c.howTitle}
          description={c.howDescription}
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {c.steps.map((s, i) => {
            const Icon = STEP_ICONS[i] ?? Upload;
            return (
              <li key={i} className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-brand font-semibold text-brand-foreground">
                    {i + 1}
                  </span>
                  <Icon className="size-5 text-brand" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground">{s.body}</p>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* Open source */}
      <Section className="border-t border-border/60">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-brand/20 bg-brand/5 p-8 text-center sm:p-12">
          <span className="mx-auto flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <GithubMark className="size-6" />
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight">
            {c.os.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground">
            {c.os.body}
          </p>
          <div className="mx-auto mt-8 grid max-w-xl gap-4 text-left sm:grid-cols-3">
            {c.os.points.map((p, i) => {
              const Icon = OS_ICONS[i] ?? Eye;
              return (
                <div key={i}>
                  <Icon className="size-5 text-brand" aria-hidden="true" />
                  <h3 className="mt-2 text-sm font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <a
              href={SITE.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              <GithubMark className="size-4" />
              {c.os.button}
            </a>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="border-t border-border/60">
        <div className="mx-auto max-w-3xl">
          <SectionHeader title={c.faqTitle} />
          <FAQ items={c.faqs} className="mt-8 w-full" />
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">{c.ctaTitle}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{c.ctaBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <LinkButton href={lp("/image-compressor")} size="lg">
              {c.ctaStart}
              <ArrowRight className="size-4" aria-hidden="true" />
            </LinkButton>
            <LinkButton href={lp("/about")} size="lg" variant="outline">
              {c.ctaTrust}
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
