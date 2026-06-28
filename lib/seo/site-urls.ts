/**
 * Single source of truth for every indexable URL on the site. Both the XML
 * sitemap (app/sitemap.ts) and the plain-text sitemap (app/sitemap.txt) derive
 * from this, so a new tool or blog post automatically appears in BOTH.
 */
import { SITE, TOOLS, COMPANY_LINKS, LEGAL_LINKS } from "@/lib/site-config";
import { POSTS } from "@/lib/blog/registry";
import {
  DEFAULT_LOCALE,
  LOCALE_META,
  localizePath,
} from "@/lib/i18n/config";
import { localesForPath } from "@/lib/i18n/availability";

export type ChangeFreq = "weekly" | "monthly" | "yearly";

export interface SiteEntry {
  path: string;
  lastModified: Date;
  changeFrequency: ChangeFreq;
  priority: number;
}

/**
 * Stable last-modified date for non-article pages. Bump this when the tool/
 * static-page content is meaningfully revised. Using a fixed date (not the
 * build time) keeps lastmod honest — it shouldn't change on every deploy.
 */
const STATIC_LASTMOD = new Date("2026-06-28T00:00:00.000Z");

export function getSiteEntries(): SiteEntry[] {
  const entries: SiteEntry[] = [
    { path: "/", lastModified: STATIC_LASTMOD, changeFrequency: "weekly", priority: 1 },
    ...TOOLS.map((t) => ({
      path: `/${t.slug}`,
      lastModified: STATIC_LASTMOD,
      changeFrequency: "monthly" as ChangeFreq,
      priority: t.isHub ? 0.9 : 0.8,
    })),
    ...[...COMPANY_LINKS, ...LEGAL_LINKS].map((l) => ({
      path: l.href,
      lastModified: STATIC_LASTMOD,
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

export interface LocalizedSitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: ChangeFreq;
  priority: number;
  /** hreflang → absolute URL (every available locale + x-default). */
  alternates: Record<string, string>;
}

/**
 * One sitemap entry per (path × available-locale), each carrying the full
 * hreflang alternate set. Only locales with a genuine translation are emitted.
 */
export function getLocalizedSitemap(): LocalizedSitemapEntry[] {
  const out: LocalizedSitemapEntry[] = [];
  for (const e of getSiteEntries()) {
    const locales = localesForPath(e.path);
    const alternates: Record<string, string> = {};
    for (const loc of locales) {
      alternates[LOCALE_META[loc].bcp47] = absoluteUrl(
        localizePath(e.path, loc),
      );
    }
    alternates["x-default"] = absoluteUrl(localizePath(e.path, DEFAULT_LOCALE));

    for (const loc of locales) {
      out.push({
        url: absoluteUrl(localizePath(e.path, loc)),
        lastModified: e.lastModified,
        changeFrequency: e.changeFrequency,
        priority: e.priority,
        alternates,
      });
    }
  }
  return out;
}

/** Flat list of every localized absolute URL (for the plain-text sitemap). */
export function getAllLocalizedUrls(): string[] {
  const urls: string[] = [];
  for (const e of getSiteEntries()) {
    for (const loc of localesForPath(e.path)) {
      urls.push(absoluteUrl(localizePath(e.path, loc)));
    }
  }
  return Array.from(new Set(urls));
}
