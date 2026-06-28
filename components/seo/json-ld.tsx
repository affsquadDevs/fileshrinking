/**
 * Renders a JSON-LD <script>. Server component — emitted into the static HTML
 * so crawlers see structured data without executing JS. Pass a plain object
 * (or array of objects) built with the helpers in lib/seo/schema.ts.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // Schema content is built server-side from trusted config, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
