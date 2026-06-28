import type { Metadata } from "next";
import { redirect, notFound } from "next/navigation";
import { getTool, TOOLS, COMPANY_LINKS, LEGAL_LINKS } from "@/lib/site-config";
import { POSTS } from "@/lib/blog/registry";
import { ToolPageLayout } from "@/components/tools/tool-page-layout";
import { ContentPageLayout } from "@/components/content/page-layout";
import { toolRenderer } from "@/lib/tools/tool-renderers";
import { getToolContent } from "@/lib/i18n/content/tools";
import { getContentPage, isContentPageSlug } from "@/lib/i18n/content/pages";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  PREFIXED_LOCALES,
  isLocale,
  DEFAULT_LOCALE,
  localizePath,
  type Locale,
} from "@/lib/i18n/config";
import { getT } from "@/lib/i18n/messages";

/**
 * Localized non-home, non-blog routes. Renders translated tool pages and
 * static content pages (legal, about) when available; otherwise 308-redirects
 * to the English equivalent so links never break.
 */
function englishPaths(): string[][] {
  const paths: string[][] = [
    ...TOOLS.map((t) => [t.slug]),
    ...COMPANY_LINKS.map((l) => l.href.replace(/^\//, "").split("/")),
    ...LEGAL_LINKS.map((l) => l.href.replace(/^\//, "").split("/")),
    ...POSTS.map((p) => ["blog", p.slug]),
  ];
  const seen = new Set<string>();
  return paths.filter((segs) => {
    // Blog routes have dedicated app/[locale]/blog/* routes — exclude here.
    if (segs[0] === "blog") return false;
    const key = segs.join("/");
    return seen.has(key) ? false : (seen.add(key), true);
  });
}

export function generateStaticParams() {
  const params: { locale: string; rest: string[] }[] = [];
  for (const locale of PREFIXED_LOCALES) {
    for (const rest of englishPaths()) {
      params.push({ locale, rest });
    }
  }
  return params;
}

type Resolved =
  | { kind: "tool"; slug: string; locale: Locale }
  | { kind: "page"; slug: string; locale: Locale };

function resolve(locale: string, rest: string[]): Resolved | null {
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) return null;
  if (rest.length !== 1) return null;
  const slug = rest[0];
  const loc = locale as Locale;
  if (getTool(slug) && getToolContent(slug, loc)) {
    return { kind: "tool", slug, locale: loc };
  }
  if (isContentPageSlug(slug) && getContentPage(slug, loc)) {
    return { kind: "page", slug, locale: loc };
  }
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; rest: string[] }>;
}): Promise<Metadata> {
  const { locale, rest } = await params;
  const r = resolve(locale, rest);
  if (!r) return {};
  if (r.kind === "tool") {
    const c = getToolContent(r.slug, r.locale)!;
    return buildMetadata({
      title: c.metaTitle,
      description: c.metaDescription,
      path: `/${r.slug}`,
      locale: r.locale,
    });
  }
  const c = getContentPage(r.slug, r.locale)!;
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/${r.slug}`,
    locale: r.locale,
  });
}

export default async function LocalizedCatchAll({
  params,
}: {
  params: Promise<{ locale: string; rest: string[] }>;
}) {
  const { locale, rest } = await params;
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) notFound();

  const r = resolve(locale, rest);

  if (r?.kind === "tool") {
    const c = getToolContent(r.slug, r.locale)!;
    return (
      <ToolPageLayout
        slug={r.slug}
        locale={r.locale}
        heading={c.heading}
        intro={c.intro}
        lastUpdated={c.lastUpdated}
        howTo={c.howTo}
        faqs={c.faqs}
        content={c.content}
      >
        {toolRenderer(r.slug, r.locale)}
      </ToolPageLayout>
    );
  }

  if (r?.kind === "page") {
    const c = getContentPage(r.slug, r.locale)!;
    const t = getT(r.locale);
    return (
      <ContentPageLayout
        title={c.title}
        intro={c.intro}
        lastUpdated={c.lastUpdated}
        locale={r.locale}
        crumbs={[
          { label: t("common.home"), href: localizePath("/", r.locale) },
          { label: c.title },
        ]}
      >
        {c.body}
      </ContentPageLayout>
    );
  }

  redirect("/" + rest.join("/"));
}
