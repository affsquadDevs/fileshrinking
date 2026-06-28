/**
 * Which locales genuinely have a translated page at a given de-prefixed path.
 * Drives hreflang alternates and the sitemap so we never advertise a localized
 * URL that would just redirect back to English.
 */
import {
  DEFAULT_LOCALE,
  PREFIXED_LOCALES,
  type Locale,
} from "@/lib/i18n/config";
import { TOOLS } from "@/lib/site-config";
import { getToolContent } from "@/lib/i18n/content/tools";
import { getContentPage, CONTENT_PAGE_SLUGS } from "@/lib/i18n/content/pages";
import { homeTranslatedLocales } from "@/lib/i18n/content/home";
import { getLocalizedPosts } from "@/lib/blog/i18n";

function buildSet(locale: Locale): Set<string> {
  const s = new Set<string>();
  if (homeTranslatedLocales().includes(locale)) s.add("/");
  for (const t of TOOLS) {
    if (getToolContent(t.slug, locale)) s.add(`/${t.slug}`);
  }
  const posts = getLocalizedPosts(locale);
  if (posts) {
    s.add("/blog");
    for (const p of posts) s.add(`/blog/${p.slug}`);
  }
  for (const slug of CONTENT_PAGE_SLUGS) {
    if (getContentPage(slug, locale)) s.add(`/${slug}`);
  }
  return s;
}

const SETS = new Map<Locale, Set<string>>();
function setFor(locale: Locale): Set<string> {
  let s = SETS.get(locale);
  if (!s) {
    s = buildSet(locale);
    SETS.set(locale, s);
  }
  return s;
}

/** Locales (English first, then any prefixed locale that has it) for a path. */
export function localesForPath(path: string): Locale[] {
  const result: Locale[] = [DEFAULT_LOCALE];
  for (const loc of PREFIXED_LOCALES) {
    if (setFor(loc).has(path)) result.push(loc);
  }
  return result;
}
