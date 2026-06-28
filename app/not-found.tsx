import Link from "next/link";
import { Container } from "@/components/layout/container";
import { LinkButton } from "@/components/link-button";
import { ToolCard } from "@/components/tool-card";
import { TOOL_CATEGORIES, getCategory } from "@/lib/site-config";
import { TOOLS } from "@/lib/site-config";

export default function NotFound() {
  const featured = TOOLS.filter((t) => t.isHub);
  return (
    <Container className="py-16 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand">
          404
        </p>
        <h1 className="mt-2 text-balance text-4xl font-bold tracking-tight">
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          The page may have moved or never existed. Try one of our compression
          tools below, or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <LinkButton href="/">Go home</LinkButton>
          <LinkButton href="/image-compressor" variant="outline">
            Browse all tools
          </LinkButton>
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      <nav
        aria-label="Tool categories"
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
              {cat.label}
            </Link>
          );
        })}
        <Link href="/blog" className="text-muted-foreground hover:text-foreground">
          Blog
        </Link>
      </nav>
    </Container>
  );
}
