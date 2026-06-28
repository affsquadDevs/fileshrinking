import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Nothing sensitive to hide; keep build/internal asset paths out.
        disallow: ["/_next/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
