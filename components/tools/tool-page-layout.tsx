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
  /** Page H1 (defaults to the tool's title). */
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

function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function ToolPageLayout({
  slug,
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
  const title = heading ?? tool.title;

  const crumbs: Crumb[] = [
    { label: "Home", href: "/" },
    { label: category.label, href: `/${category.hub}` },
    { label: tool.shortName },
  ];

  // Related = explicit prop, else the category hub + siblings (minus self).
  const siblings = (
    related ?? [
      category.hub,
      ...toolsInCategory(tool.category).map((t) => t.slug),
    ]
  )
    .filter((s) => s !== slug)
    .slice(0, 6);

  return (
    <Container className="py-8 lg:py-10">
      <Breadcrumbs items={crumbs} className="mb-6" />

      {/* Hero + tool (kept free of ads to respect accidental-click policy) */}
      <header className="mb-8 max-w-3xl">
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <div className="mt-4 text-pretty text-lg text-muted-foreground">
          {intro}
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <PrivacyBadge variant="pill" />
          <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <CalendarClock className="size-3.5" aria-hidden="true" />
            Last updated {formatDate(lastUpdated)}
          </span>
        </div>
      </header>

      <section aria-label={`${tool.shortName} tool`} className="mb-12">
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
              Frequently asked questions
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
        <RelatedTools slugs={siblings.length ? siblings : [category.hub]} />
      </div>

      <div className="mt-12">
        <AdUnit name="contentBottom" />
      </div>

      {/* Structured data */}
      <JsonLd
        data={[
          softwareApplicationSchema({
            name: tool.title,
            description: tool.description,
            url: `/${tool.slug}`,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: category.label, url: `/${category.hub}` },
            { name: tool.shortName },
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
