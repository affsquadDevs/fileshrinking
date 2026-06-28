import { getLocalizedSitemap } from "@/lib/seo/site-urls";

/**
 * /sitemap.xml — hand-built so we control formatting: indented output, a
 * human-readable XSL stylesheet, date-only <lastmod>, and one <url> per
 * (path × translated locale) carrying the full set of hreflang alternates
 * (every language + x-default + self), per Google's i18n sitemap guidance.
 */
export const dynamic = "force-static";

function xmlEscape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET(): Response {
  const urls = getLocalizedSitemap()
    .map((e) => {
      const alts = Object.entries(e.alternates)
        .map(
          ([hreflang, href]) =>
            `    <xhtml:link rel="alternate" hreflang="${xmlEscape(hreflang)}" href="${xmlEscape(href)}" />`,
        )
        .join("\n");
      const lastmod = e.lastModified.toISOString().slice(0, 10);
      return [
        "  <url>",
        `    <loc>${xmlEscape(e.url)}</loc>`,
        alts,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${e.changeFrequency}</changefreq>`,
        `    <priority>${e.priority.toFixed(1)}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
