import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";
import {
  DEFAULT_LOCALE,
  LOCALE_META,
  localizePath,
  type Locale,
} from "@/lib/i18n/config";
import { localesForPath } from "@/lib/i18n/availability";

export interface PageMetaInput {
  title: string;
  description: string;
  /** De-prefixed path with leading slash, e.g. "/compress-jpeg" or "/". The
   *  locale prefix is applied automatically from `locale`. */
  path: string;
  /** Active locale (default English at the root). */
  locale?: Locale;
  /** Override OG image path; defaults to the branded OG image. */
  ogImage?: string;
  /** Mark article pages so OG type is "article". */
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  /** Set true to keep a page out of the index (e.g. thank-you pages). */
  noindex?: boolean;
}

function abs(path: string): string {
  return new URL(path, SITE.url).toString();
}

/**
 * Builds a complete Metadata object: title, description, canonical, hreflang
 * alternates (every locale + x-default → English), Open Graph and Twitter
 * cards. `path` is the de-prefixed path; the locale prefix is added here.
 */
export function buildMetadata(input: PageMetaInput): Metadata {
  const locale = input.locale ?? DEFAULT_LOCALE;
  const localizedPath = localizePath(input.path, locale);
  const url = abs(localizedPath);
  const ogImage = input.ogImage ?? "/og/default.png";

  // hreflang map: only locales that actually have this page, keyed by BCP-47,
  // plus x-default → English.
  const languages: Record<string, string> = {};
  for (const loc of localesForPath(input.path)) {
    languages[LOCALE_META[loc].bcp47] = abs(localizePath(input.path, loc));
  }
  languages["x-default"] = abs(localizePath(input.path, DEFAULT_LOCALE));

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: localizedPath, languages },
    ...(input.noindex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: input.type ?? "website",
      siteName: SITE.name,
      title: input.title,
      description: input.description,
      url,
      locale: LOCALE_META[locale].bcp47,
      images: [{ url: ogImage, width: 1200, height: 630, alt: input.title }],
      ...(input.type === "article"
        ? {
            publishedTime: input.publishedTime,
            modifiedTime: input.modifiedTime,
            authors: input.authors,
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      site: SITE.twitterHandle,
      images: [ogImage],
    },
  };
}
