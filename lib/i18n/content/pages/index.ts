import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";
import { PAGE_REGISTRY } from "@/lib/i18n/content/pages/registry.generated";

/** Single-segment static pages handled by the localized content-page renderer. */
export const CONTENT_PAGE_SLUGS = [
  "about",
  "contact",
  "privacy-policy",
  "terms-of-service",
  "cookie-policy",
  "disclaimer",
] as const;

export function isContentPageSlug(slug: string): boolean {
  return (CONTENT_PAGE_SLUGS as readonly string[]).includes(slug);
}

export function getContentPage(
  slug: string,
  locale: Locale,
): LocalizedContentPage | null {
  if (locale === DEFAULT_LOCALE) return null;
  return PAGE_REGISTRY[locale]?.[slug] ?? null;
}
