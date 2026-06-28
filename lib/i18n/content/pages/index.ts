import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import type { LocalizedContentPage } from "@/lib/i18n/content/pages/types";

import { content as aboutEs } from "@/lib/i18n/content/pages/about.es";
import { content as privacyPolicyEs } from "@/lib/i18n/content/pages/privacy-policy.es";
import { content as termsOfServiceEs } from "@/lib/i18n/content/pages/terms-of-service.es";
import { content as cookiePolicyEs } from "@/lib/i18n/content/pages/cookie-policy.es";
import { content as disclaimerEs } from "@/lib/i18n/content/pages/disclaimer.es";

/** Single-segment static pages handled by the localized content-page renderer.
 *  (contact is excluded for now — its form needs separate localization.) */
export const CONTENT_PAGE_SLUGS = [
  "about",
  "privacy-policy",
  "terms-of-service",
  "cookie-policy",
  "disclaimer",
] as const;

export function isContentPageSlug(slug: string): boolean {
  return (CONTENT_PAGE_SLUGS as readonly string[]).includes(slug);
}

const ES: Record<string, LocalizedContentPage> = {
  about: aboutEs,
  "privacy-policy": privacyPolicyEs,
  "terms-of-service": termsOfServiceEs,
  "cookie-policy": cookiePolicyEs,
  disclaimer: disclaimerEs,
};

const REGISTRY: Partial<Record<Locale, Record<string, LocalizedContentPage>>> = {
  es: ES,
};

export function getContentPage(
  slug: string,
  locale: Locale,
): LocalizedContentPage | null {
  if (locale === DEFAULT_LOCALE) return null;
  return REGISTRY[locale]?.[slug] ?? null;
}
