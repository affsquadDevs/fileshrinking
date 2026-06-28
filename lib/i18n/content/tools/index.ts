import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";
import { TOOL_REGISTRY } from "@/lib/i18n/content/tools/registry.generated";

// Translated tool-page content per locale. The registry is generated from the
// per-locale modules by scripts/gen-i18n.mjs. English routes use their own
// inline pages, so en is intentionally absent.

export function getToolContent(
  slug: string,
  locale: Locale,
): LocalizedToolContent | null {
  if (locale === DEFAULT_LOCALE) return null;
  return TOOL_REGISTRY[locale]?.[slug] ?? null;
}

/** Slugs that have a translation for the given locale (for generateStaticParams). */
export function translatedToolSlugs(locale: Locale): string[] {
  return Object.keys(TOOL_REGISTRY[locale] ?? {});
}
