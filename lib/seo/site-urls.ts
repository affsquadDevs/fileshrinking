/**
 * Single source of truth for every indexable URL on the site. Both the XML
 * sitemap (app/sitemap.ts) and the plain-text sitemap (app/sitemap.txt) derive
 * from this, so a new tool or blog post automatically appears in BOTH.
 */
import { SITE, TOOLS, COMPANY_LINKS, LEGAL_LINKS } from "@/lib/site-config";
import { POSTS } from "@/lib/blog/registry";

export type ChangeFreq = "weekly" | "monthly" | "yearly";

export interface SiteEntry {
  path: string;
  lastModified: Date;
  changeFrequency: ChangeFreq;
  priority: number;
}

export function getSiteEntries(): SiteEntry[] {
  const now = new Date();

  const entries: SiteEntry[] = [
    { path: "/", lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...TOOLS.map((t) => ({
      path: `/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as ChangeFreq,
      priority: t.isHub ? 0.9 : 0.8,
    })),
    ...[...COMPANY_LINKS, ...LEGAL_LINKS].map((l) => ({
      path: l.href,
      lastModified: now,
      changeFrequency: "monthly" as ChangeFreq,
      priority: l.href === "/blog" ? 0.7 : 0.4,
    })),
    ...POSTS.map((p) => ({
      path: `/blog/${p.slug}`,
      lastModified: new Date((p.dateModified ?? p.datePublished) + "T00:00:00Z"),
      changeFrequency: "yearly" as ChangeFreq,
      priority: 0.6,
    })),
  ];

  // De-duplicate by path (e.g. /blog appears in COMPANY_LINKS).
  const seen = new Set<string>();
  return entries.filter((e) =>
    seen.has(e.path) ? false : (seen.add(e.path), true),
  );
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).toString();
}
