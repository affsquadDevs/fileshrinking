import type { MetadataRoute } from "next";
import { getLocalizedSitemap } from "@/lib/seo/site-urls";

/** XML sitemap at /sitemap.xml. One <url> per (path × translated locale), each
 *  with hreflang alternates. Derived from the shared lib/seo/site-urls source,
 *  so new tools, posts, and locale translations appear automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  return getLocalizedSitemap().map((e) => ({
    url: e.url,
    lastModified: e.lastModified,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
    alternates: { languages: e.alternates },
  }));
}
