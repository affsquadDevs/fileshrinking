import type { MetadataRoute } from "next";
import { getSiteEntries, absoluteUrl } from "@/lib/seo/site-urls";

/** XML sitemap at /sitemap.xml. URLs come from the shared lib/seo/site-urls
 *  source, so new tools and blog posts appear here automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  return getSiteEntries().map((e) => ({
    url: absoluteUrl(e.path),
    lastModified: e.lastModified,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));
}
