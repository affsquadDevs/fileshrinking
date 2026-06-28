/**
 * i18n configuration — single source of truth for locales and URL shape.
 *
 * Strategy: English is the DEFAULT and lives at the site root with NO prefix
 * (e.g. /compress-jpeg). Every other locale is path-prefixed
 * (e.g. /es/compress-jpeg). x-default → English. This preserves all existing
 * English URLs and their SEO.
 *
 * Ukrainian uses the ISO-639-1 language code `uk` (the correct hreflang value),
 * not the country code `ua`.
 */

export const DEFAULT_LOCALE = "en" as const;

export const LOCALES = ["en", "es", "pt", "it", "de", "fr", "pl", "uk"] as const;

export type Locale = (typeof LOCALES)[number];

/** Locales that carry a URL prefix (everything except the default). */
export const PREFIXED_LOCALES = LOCALES.filter(
  (l) => l !== DEFAULT_LOCALE,
) as Exclude<Locale, typeof DEFAULT_LOCALE>[];

/**
 * Locales that are fully translated and offered in the language switcher.
 * Add a locale here once its full content set is live. (Other locales' routes
 * still exist but fall back to English and aren't advertised.)
 */
export const LIVE_LOCALES: Locale[] = [
  "en",
  "es",
  "pt",
  "it",
  "de",
  "fr",
  "pl",
  "uk",
];

/** Display metadata for the language switcher. `name` is the autonym (shown to
 *  speakers of that language); `english` is for aria/fallback. */
export const LOCALE_META: Record<
  Locale,
  { name: string; english: string; /** BCP-47 for html lang / hreflang */ bcp47: string }
> = {
  en: { name: "English", english: "English", bcp47: "en" },
  es: { name: "Español", english: "Spanish", bcp47: "es" },
  pt: { name: "Português", english: "Portuguese", bcp47: "pt" },
  it: { name: "Italiano", english: "Italian", bcp47: "it" },
  de: { name: "Deutsch", english: "German", bcp47: "de" },
  fr: { name: "Français", english: "French", bcp47: "fr" },
  pl: { name: "Polski", english: "Polish", bcp47: "pl" },
  uk: { name: "Українська", english: "Ukrainian", bcp47: "uk" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/**
 * Prefix an internal app path for a locale.
 *   localizePath("/compress-jpeg", "es") -> "/es/compress-jpeg"
 *   localizePath("/compress-jpeg", "en") -> "/compress-jpeg"
 *   localizePath("/", "es")              -> "/es"
 */
export function localizePath(path: string, locale: Locale): string {
  const clean = path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  if (locale === DEFAULT_LOCALE) return clean;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

/**
 * Split a pathname into its locale + the de-prefixed path.
 *   splitLocale("/es/compress-jpeg") -> { locale: "es", path: "/compress-jpeg" }
 *   splitLocale("/compress-jpeg")    -> { locale: "en", path: "/compress-jpeg" }
 */
export function splitLocale(pathname: string): { locale: Locale; path: string } {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isLocale(segments[0]) && segments[0] !== DEFAULT_LOCALE) {
    const locale = segments[0];
    const rest = "/" + segments.slice(1).join("/");
    return { locale, path: rest === "/" ? "/" : rest };
  }
  return { locale: DEFAULT_LOCALE, path: pathname || "/" };
}
