import type { BlogPost } from "@/lib/blog/types";
import { POSTS as EN_POSTS } from "@/lib/blog/registry";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { POSTS_BY_LOCALE } from "@/lib/blog/posts.generated";

// Translated posts per locale come from posts.generated.ts (built by
// scripts/gen-i18n.mjs from the per-locale .<loc>.tsx post modules).

/** Posts for a locale, or null if that locale has no translations (caller
 *  should fall back / redirect to English). English returns the English list. */
export function getLocalizedPosts(locale: Locale): BlogPost[] | null {
  if (locale === DEFAULT_LOCALE) return EN_POSTS;
  return POSTS_BY_LOCALE[locale] ?? null;
}

export function getLocalizedPost(slug: string, locale: Locale): BlogPost | null {
  const posts = locale === DEFAULT_LOCALE ? EN_POSTS : POSTS_BY_LOCALE[locale];
  return posts?.find((p) => p.slug === slug) ?? null;
}

export function localizedPostSlugs(locale: Locale): string[] {
  return (POSTS_BY_LOCALE[locale] ?? []).map((p) => p.slug);
}

export function localesWithPosts(): Locale[] {
  return Object.keys(POSTS_BY_LOCALE) as Locale[];
}
