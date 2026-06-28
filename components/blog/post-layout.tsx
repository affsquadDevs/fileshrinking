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
import {
  DEFAULT_LOCALE,
  LOCALE_META,
  localizePath,
  type Locale,
} from "@/lib/i18n/config";
import { getT } from "@/lib/i18n/messages";

function formatDate(iso: string, locale: Locale): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString(
    LOCALE_META[locale].bcp47,
    { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" },
  );
}

export function PostLayout({
  post,
  locale = DEFAULT_LOCALE,
}: {
  post: BlogPost;
  locale?: Locale;
}) {
  const t = getT(locale);
  const lp = (href: string) => localizePath(href, locale);
  const author = getAuthor(post.authorId);
  const published = formatDate(post.datePublished, locale);
  const modified = post.dateModified
    ? formatDate(post.dateModified, locale)
    : null;
  const Content = post.Content;

  return (
    <Container className="max-w-3xl py-8 lg:py-10">
      <Breadcrumbs
        items={[
          { label: t("common.home"), href: lp("/") },
          { label: t("nav.blog"), href: lp("/blog") },
          { label: post.title },
        ]}
        className="mb-6"
        ariaLabel={t("common.breadcrumb")}
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
              {modified && modified !== published
                ? ` · ${t("blog.updatedOn", { date: modified })}`
                : ""}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5" aria-hidden="true" />
              {t("blog.minRead", { n: post.readingMinutes })}
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
            {t("blog.aboutAuthor")}
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
            href={lp("/blog")}
            className="text-sm font-medium text-brand hover:underline"
          >
            ← {t("blog.backToAll")}
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
            { name: t("common.home"), url: lp("/") },
            { name: t("nav.blog"), url: lp("/blog") },
            { name: post.title },
          ]),
        ]}
      />
    </Container>
  );
}
