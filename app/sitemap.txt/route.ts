import { getSiteEntries, absoluteUrl } from "@/lib/seo/site-urls";

/**
 * Plain-text sitemap at /sitemap.txt — one absolute URL per line. Search
 * engines (Google, Bing) accept this format. Shares the same URL source as the
 * XML sitemap, so new tools and blog posts appear here automatically.
 */
export const dynamic = "force-static";

export function GET(): Response {
  const body =
    getSiteEntries()
      .map((e) => absoluteUrl(e.path))
      .join("\n") + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
