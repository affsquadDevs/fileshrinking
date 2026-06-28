import * as React from "react";
import Link from "next/link";
import { CalendarClock, Clock } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Prose } from "@/components/content/prose";
import { AdUnit } from "@/components/ads/ad-unit";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPostingSchema, breadcrumbSchema, personSchema } from "@/lib/seo/schema";
import { getAuthor } from "@/lib/blog/authors";
import type { BlogPost } from "@/lib/blog/types";

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function PostLayout({ post }: { post: BlogPost }) {
  const author = getAuthor(post.authorId);
  const published = formatDate(post.datePublished);
  const modified = post.dateModified ? formatDate(post.dateModified) : null;
  const Content = post.Content;

  return (
    <Container className="max-w-3xl py-8 lg:py-10">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        className="mb-6"
      />

      <article>
        <header className="mb-8">
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            {post.description}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{author.name}</span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="size-3.5" aria-hidden="true" />
              {published}
              {modified && modified !== published ? ` · updated ${modified}` : ""}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              {post.readingMinutes} min read
            </span>
          </div>
        </header>

        <Prose>
          <Content />
        </Prose>

        <div className="my-10">
          <AdUnit name="inArticle" />
        </div>

        {/* Author bio (E-E-A-T) */}
        <aside className="mt-12 rounded-xl border border-border bg-muted/30 p-6">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            About the author
          </h2>
          <p className="mt-2 font-medium">
            {author.name}{" "}
            <span className="font-normal text-muted-foreground">
              · {author.role}
            </span>
          </p>
          <p className="mt-2 text-sm text-muted-foreground">{author.bio}</p>
        </aside>

        <div className="mt-10">
          <Link
            href="/blog"
            className="text-sm font-medium text-brand hover:underline"
          >
            ← Back to all articles
          </Link>
        </div>
      </article>

      <JsonLd
        data={[
          blogPostingSchema({
            title: post.title,
            description: post.description,
            slug: post.slug,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            authorName: author.name,
            authorUrl: "/about",
            image: post.image,
          }),
          personSchema({
            name: author.name,
            description: author.bio,
            url: "/about",
            sameAs: author.sameAs,
          }),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title },
          ]),
        ]}
      />
    </Container>
  );
}
