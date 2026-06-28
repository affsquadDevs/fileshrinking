import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";

export interface PageMetaInput {
  title: string;
  description: string;
  /** Path with leading slash, e.g. "/compress-jpeg". */
  path: string;
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

/**
 * Builds a complete, unique Metadata object: title (≤60 chars expected),
 * description (≤155), canonical, Open Graph and Twitter cards. Titles get the
 * "| FileShrinking" suffix automatically via the root layout template, so pass
 * the bare page title here.
 */
export function buildMetadata(input: PageMetaInput): Metadata {
  const url = new URL(input.path, SITE.url).toString();
  const ogImage = input.ogImage ?? "/og/default.png";

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.path },
    ...(input.noindex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: input.type ?? "website",
      siteName: SITE.name,
      title: input.title,
      description: input.description,
      url,
      locale: SITE.locale,
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
