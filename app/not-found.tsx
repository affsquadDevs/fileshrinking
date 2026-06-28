import Link from "next/link";
import { Container } from "@/components/layout/container";
import { LinkButton } from "@/components/link-button";
import { ToolCard } from "@/components/tool-card";
import { TOOL_CATEGORIES, getCategory, TOOLS } from "@/lib/site-config";
import { DEFAULT_LOCALE } from "@/lib/i18n/config";
import { getT } from "@/lib/i18n/messages";

// The global 404 has no locale segment, so it renders in the default language.
export default function NotFound() {
  const t = getT(DEFAULT_LOCALE);
  const featured = TOOLS.filter((tool) => tool.isHub);
  return (
    <Container className="py-16 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          {t("notFound.code")}
        </p>
        <h1 className="mt-2 text-balance text-4xl font-bold tracking-tight">
          {t("notFound.title")}
        </h1>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          {t("notFound.body")}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <LinkButton href="/">{t("notFound.goHome")}</LinkButton>
          <LinkButton href="/image-compressor" variant="outline">
            {t("notFound.browseTools")}
          </LinkButton>
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      <nav
        aria-label={t("categories.image")}
        className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2 text-sm"
      >
        {TOOL_CATEGORIES.map((c) => {
          const cat = getCategory(c.id);
          return (
            <Link
              key={c.id}
              href={`/${cat.hub}`}
              className="text-muted-foreground hover:text-foreground"
            >
              {t(`categories.${c.id}` as const)}
            </Link>
          );
        })}
        <Link href="/blog" className="text-muted-foreground hover:text-foreground">
          {t("nav.blog")}
        </Link>
      </nav>
    </Container>
  );
}
