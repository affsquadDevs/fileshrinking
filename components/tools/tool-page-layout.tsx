import * as React from "react";
import { CalendarClock } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Breadcrumbs, type Crumb } from "@/components/layout/breadcrumbs";
import { PrivacyBadge } from "@/components/privacy-badge";
import { FAQ } from "@/components/faq";
import { Prose } from "@/components/content/prose";
import { RelatedTools } from "@/components/tools/related-tools";
import { AdUnit } from "@/components/ads/ad-unit";
import { JsonLd } from "@/components/seo/json-ld";
import {
  breadcrumbSchema,
  softwareApplicationSchema,
  howToSchema,
  faqSchema,
  type HowToStep,
} from "@/lib/seo/schema";
import {
  getCategory,
  getTool,
  toolsInCategory,
  type ToolDef,
} from "@/lib/site-config";
import {
  DEFAULT_LOCALE,
  LOCALE_META,
  localizePath,
  type Locale,
} from "@/lib/i18n/config";
import { getT } from "@/lib/i18n/messages";
import { localizedTool } from "@/lib/i18n/content";

export interface ToolFaq {
  q: string;
  /** Rendered answer (may include links). */
  a: React.ReactNode;
  /** Plain-text answer for FAQPage structured data. */
  text: string;
}

export interface ToolPageLayoutProps {
  /** Canonical slug; used to resolve the ToolDef from site-config. */
  slug: string;
  /** Active locale (default English). */
  locale?: Locale;
  /** Page H1 (defaults to the tool's localized title). */
  heading?: string;
  /** Short intro shown under the H1, above the tool. */
  intro: React.ReactNode;
  /** The interactive tool component. */
  children: React.ReactNode;
  /** HowTo block (rendered as a section + HowTo JSON-LD). */
  howTo: { name: string; description: string; steps: HowToStep[] };
  /** Long-form content sections (Prose-wrapped automatically). */
  content: React.ReactNode;
  /** Optional second content block shown after the in-article ad. */
  contentAfterAd?: React.ReactNode;
  faqs: ToolFaq[];
  /** ISO date string, e.g. "2026-06-27". */
  lastUpdated: string;
  /** Related tool slugs; defaults to siblings in the same category. */
  related?: string[];
}

function formatDate(iso: string, locale: Locale): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString(LOCALE_META[locale].bcp47, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function ToolPageLayout({
  slug,
  locale = DEFAULT_LOCALE,
  heading,
  intro,
  children,
  howTo,
  content,
  contentAfterAd,
  faqs,
  lastUpdated,
  related,
}: ToolPageLayoutProps) {
  const tool = getTool(slug) as ToolDef;
  const category = getCategory(tool.category);
  const t = getT(locale);
  const label = localizedTool(slug, locale);
  const title = heading ?? label.title;
  const categoryLabel = t(`categories.${tool.category}` as const);

  const crumbs: Crumb[] = [
    { label: t("common.home"), href: localizePath("/", locale) },
    { label: categoryLabel, href: localizePath(`/${category.hub}`, locale) },
    { label: label.shortName },
  ];

  // Related = explicit prop, else the category hub + siblings (minus self).
  const siblings = (
    related ?? [
      category.hub,
      ...toolsInCategory(tool.category).map((tdef) => tdef.slug),
    ]
  )
    .filter((s) => s !== slug)
    .slice(0, 6);

  return (
    <Container className="py-8 lg:py-10">
      <Breadcrumbs
        items={crumbs}
        className="mb-6"
        ariaLabel={t("common.breadcrumb")}
      />

      {/* Hero + tool (kept free of ads to respect accidental-click policy) */}
      <header className="mb-8 max-w-3xl">
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <div className="mt-4 text-pretty text-lg text-muted-foreground">
          {intro}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <PrivacyBadge variant="pill" locale={locale} />
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <CalendarClock className="size-3.5" aria-hidden="true" />
            {t("common.lastUpdated", { date: formatDate(lastUpdated, locale) })}
          </span>
        </div>
      </header>

      <section aria-label={label.shortName} className="mb-12">
        {children}
      </section>

      {/* Long-form content begins; ads live only down here, away from controls */}
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="min-w-0">
          <Prose>
            <h2 id="how-to">{howTo.name}</h2>
            <ol>
              {howTo.steps.map((step, i) => (
                <li key={i}>
                  <strong>{step.name}.</strong> {step.text}
                </li>
              ))}
            </ol>
          </Prose>

          <div className="prose mt-2">{content}</div>

          <div className="my-10">
            <AdUnit name="inArticle" />
          </div>

          {contentAfterAd ? (
            <div className="prose">{contentAfterAd}</div>
          ) : null}

          <section aria-labelledby="faq-heading" className="mt-12">
            <h2 id="faq-heading" className="text-2xl font-bold tracking-tight">
              {t("common.faqHeading")}
            </h2>
            <FAQ
              className="mt-4"
              defaultOpenFirst
              items={faqs.map((f) => ({ q: f.q, a: f.a }))}
            />
          </section>
        </article>

        {/* Sidebar (desktop) */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <AdUnit name="sidebar" />
          </div>
        </aside>
      </div>

      <div className="mt-14">
        <RelatedTools
          slugs={siblings.length ? siblings : [category.hub]}
          locale={locale}
        />
      </div>

      <div className="mt-12">
        <AdUnit name="contentBottom" />
      </div>

      {/* Structured data */}
      <JsonLd
        data={[
          softwareApplicationSchema({
            name: label.title,
            description: label.description,
            url: localizePath(`/${tool.slug}`, locale),
          }),
          breadcrumbSchema([
            { name: t("common.home"), url: localizePath("/", locale) },
            {
              name: categoryLabel,
              url: localizePath(`/${category.hub}`, locale),
            },
            { name: label.shortName },
          ]),
          howToSchema({
            name: howTo.name,
            description: howTo.description,
            steps: howTo.steps,
          }),
          faqSchema(faqs.map((f) => ({ q: f.q, a: f.text }))),
        ]}
      />
    </Container>
  );
}
