import { ToolCard } from "@/components/tool-card";
import { TOOLS, type ToolDef } from "@/lib/site-config";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getT } from "@/lib/i18n/messages";

/** A responsive grid of related tool cards, resolved from slugs. */
export function RelatedTools({
  slugs,
  locale = DEFAULT_LOCALE,
  heading,
}: {
  slugs: string[];
  locale?: Locale;
  heading?: string;
}) {
  const tools = slugs
    .map((s) => TOOLS.find((t) => t.slug === s))
    .filter((t): t is ToolDef => Boolean(t));
  if (tools.length === 0) return null;

  return (
    <section aria-labelledby="related-tools-heading">
      <h2
        id="related-tools-heading"
        className="text-2xl font-bold tracking-tight"
      >
        {heading ?? getT(locale)("common.relatedHeading")}
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} locale={locale} />
        ))}
      </div>
    </section>
  );
}
