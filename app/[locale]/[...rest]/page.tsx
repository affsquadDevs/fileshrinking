import type { Metadata } from "next";
import { redirect, notFound } from "next/navigation";
import { getTool, TOOLS, COMPANY_LINKS, LEGAL_LINKS } from "@/lib/site-config";
import { POSTS } from "@/lib/blog/registry";
import { ToolPageLayout } from "@/components/tools/tool-page-layout";
import { toolRenderer } from "@/lib/tools/tool-renderers";
import { getToolContent } from "@/lib/i18n/content/tools";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  PREFIXED_LOCALES,
  isLocale,
  DEFAULT_LOCALE,
  type Locale,
} from "@/lib/i18n/config";

/**
 * Localized non-home routes. Renders translated tool-page content when it
 * exists; otherwise 308-redirects to the English equivalent so links never
 * break while translations are still being added. Dedicated localized routes
 * (blog, legal, …) added later take precedence over this catch-all.
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
    // Blog routes are handled by dedicated app/[locale]/blog/* routes — exclude
    // them here so prerendered paths don't collide.
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

function resolveTool(locale: string, rest: string[]) {
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) return null;
  if (rest.length !== 1) return null;
  const tool = getTool(rest[0]);
  if (!tool) return null;
  const content = getToolContent(rest[0], locale as Locale);
  return content ? { slug: rest[0], locale: locale as Locale, content } : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; rest: string[] }>;
}): Promise<Metadata> {
  const { locale, rest } = await params;
  const resolved = resolveTool(locale, rest);
  if (!resolved) return {};
  return buildMetadata({
    title: resolved.content.metaTitle,
    description: resolved.content.metaDescription,
    path: `/${resolved.slug}`,
    locale: resolved.locale,
  });
}

export default async function LocalizedCatchAll({
  params,
}: {
  params: Promise<{ locale: string; rest: string[] }>;
}) {
  const { locale, rest } = await params;
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) notFound();

  const resolved = resolveTool(locale, rest);
  if (resolved) {
    const { slug, content } = resolved;
    return (
      <ToolPageLayout
        slug={slug}
        locale={resolved.locale}
        heading={content.heading}
        intro={content.intro}
        lastUpdated={content.lastUpdated}
        howTo={content.howTo}
        faqs={content.faqs}
        content={content.content}
      >
        {toolRenderer(slug, resolved.locale)}
      </ToolPageLayout>
    );
  }

  redirect("/" + rest.join("/"));
}
