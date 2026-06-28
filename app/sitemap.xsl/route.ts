/**
 * /sitemap.xsl — an XSLT 1.0 stylesheet that renders /sitemap.xml as a clean,
 * human-readable table in the browser (crawlers ignore it). Served as a route
 * so the content type is guaranteed to be an XML/XSL type the browser applies.
 */
export const dynamic = "force-static";

const XSL = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"
    doctype-system="about:legacy-compat" />
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex" />
        <title>FileShrinking — XML Sitemap</title>
        <style>
          :root { color-scheme: light dark; }
          body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; margin: 0; padding: 2rem 1rem; line-height: 1.5; color: #18181b; background: #fafafa; }
          @media (prefers-color-scheme: dark) { body { color: #e4e4e7; background: #0a0a0a; } a { color: #6ea8fe; } th { background: #18181b !important; } tr:nth-child(even) td { background: #111113; } td { border-color: #27272a !important; } }
          .wrap { max-width: 1100px; margin: 0 auto; }
          h1 { font-size: 1.4rem; margin: 0 0 .25rem; }
          p.lead { color: #71717a; margin: 0 0 1.5rem; }
          a { color: #2563eb; text-decoration: none; word-break: break-all; }
          a:hover { text-decoration: underline; }
          table { width: 100%; border-collapse: collapse; font-size: .875rem; }
          th, td { text-align: left; padding: .5rem .75rem; border-bottom: 1px solid #e4e4e7; vertical-align: top; }
          th { background: #f4f4f5; font-weight: 600; position: sticky; top: 0; }
          td.num { text-align: right; font-variant-numeric: tabular-nums; color: #71717a; white-space: nowrap; }
          .count { font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="wrap">
          <h1>FileShrinking — XML Sitemap</h1>
          <p class="lead">
            <span class="count"><xsl:value-of select="count(s:urlset/s:url)" /></span>
            URLs. This page is for humans; search engines read the underlying XML.
          </p>
          <table>
            <tr>
              <th>#</th>
              <th>URL</th>
              <th>Alternates</th>
              <th>Last modified</th>
            </tr>
            <xsl:for-each select="s:urlset/s:url">
              <tr>
                <td class="num"><xsl:value-of select="position()" /></td>
                <td>
                  <a href="{s:loc}"><xsl:value-of select="s:loc" /></a>
                </td>
                <td class="num"><xsl:value-of select="count(xhtml:link)" /></td>
                <td class="num"><xsl:value-of select="s:lastmod" /></td>
              </tr>
            </xsl:for-each>
          </table>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
`;

export function GET(): Response {
  return new Response(XSL, {
    headers: {
      "Content-Type": "text/xsl; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
