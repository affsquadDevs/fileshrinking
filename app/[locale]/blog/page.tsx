import type { Metadata } from "next";
import { redirect, notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PostCard } from "@/components/blog/post-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { getLocalizedPosts, localesWithPosts } from "@/lib/blog/i18n";
import { getT } from "@/lib/i18n/messages";
import {
  isLocale,
  DEFAULT_LOCALE,
  localizePath,
  type Locale,
} from "@/lib/i18n/config";

export function generateStaticParams() {
  return localesWithPosts().map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getT(locale as Locale);
  return buildMetadata({
    title: t("blog.indexMetaTitle"),
    description: t("blog.indexMetaDescription"),
    path: "/blog",
    locale: locale as Locale,
  });
}

export default async function LocalizedBlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) notFound();
  const posts = getLocalizedPosts(locale as Locale);
  if (!posts || posts.length === 0) redirect("/blog");

  const t = getT(locale as Locale);
  const lp = (h: string) => localizePath(h, locale as Locale);

  return (
    <Container className="py-8 lg:py-10">
      <Breadcrumbs
        items={[{ label: t("common.home"), href: lp("/") }, { label: t("nav.blog") }]}
        className="mb-6"
        ariaLabel={t("common.breadcrumb")}
      />
      <header className="mb-10 max-w-2xl">
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          {t("blog.indexTitle")}
        </h1>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          {t("blog.indexSubtitle")}
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} locale={locale as Locale} />
        ))}
      </div>

      <JsonLd
        data={breadcrumbSchema([
          { name: t("common.home"), url: lp("/") },
          { name: t("nav.blog") },
        ])}
      />
    </Container>
  );
}
