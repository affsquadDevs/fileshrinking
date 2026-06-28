import type { MetadataRoute } from "next";
import { SITE, TOOLS, COMPANY_LINKS, LEGAL_LINKS } from "@/lib/site-config";
import { POSTS } from "@/lib/blog/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];

  const tools: MetadataRoute.Sitemap = TOOLS.map((t) => ({
    url: `${base}/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: t.isHub ? 0.9 : 0.8,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    ...COMPANY_LINKS,
    ...LEGAL_LINKS,
  ].map((l) => ({
    url: `${base}${l.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: l.href === "/blog" ? 0.7 : 0.4,
  }));

  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date((p.dateModified ?? p.datePublished) + "T00:00:00Z"),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...home, ...tools, ...staticPages, ...posts];
}
