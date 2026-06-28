import { redirect } from "next/navigation";
import {
  TOOLS,
  COMPANY_LINKS,
  LEGAL_LINKS,
} from "@/lib/site-config";
import { POSTS } from "@/lib/blog/registry";
import { PREFIXED_LOCALES } from "@/lib/i18n/config";

/**
 * Fallback for any localized path that does not yet have a dedicated
 * (translated) route. It 308-redirects to the English equivalent so links are
 * never broken while translations are still being added. As a page gets its own
 * app/[locale]/… route, that route takes precedence over this catch-all.
 */
function englishPaths(): string[][] {
  const paths: string[][] = [
    ...TOOLS.map((t) => [t.slug]),
    ...COMPANY_LINKS.map((l) => l.href.replace(/^\//, "").split("/")),
    ...LEGAL_LINKS.map((l) => l.href.replace(/^\//, "").split("/")),
    ...POSTS.map((p) => ["blog", p.slug]),
  ];
  // de-dupe
  const seen = new Set<string>();
  return paths.filter((segs) => {
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

export default async function LocalizedFallback({
  params,
}: {
  params: Promise<{ locale: string; rest: string[] }>;
}) {
  const { rest } = await params;
  redirect("/" + rest.join("/"));
}
