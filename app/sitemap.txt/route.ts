import { getAllLocalizedUrls } from "@/lib/seo/site-urls";

/**
 * Plain-text sitemap at /sitemap.txt — one absolute URL per line, including
 * every translated locale URL. Search engines (Google, Bing) accept this
 * format. Shares the same URL source as the XML sitemap, so new tools, posts,
 * and locale translations appear here automatically.
 */
export const dynamic = "force-static";

export function GET(): Response {
  const body = getAllLocalizedUrls().join("\n") + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
