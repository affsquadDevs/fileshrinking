import type { Metadata } from "next";
import { redirect, notFound } from "next/navigation";
import { PostLayout } from "@/components/blog/post-layout";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  getLocalizedPost,
  localizedPostSlugs,
  localesWithPosts,
} from "@/lib/blog/i18n";
import { isLocale, DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of localesWithPosts()) {
    for (const slug of localizedPostSlugs(locale)) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const post = getLocalizedPost(slug, locale as Locale);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    locale: locale as Locale,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified ?? post.datePublished,
    ogImage: post.image,
  });
}

export default async function LocalizedPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) notFound();
  const post = getLocalizedPost(slug, locale as Locale);
  if (!post) redirect(`/blog/${slug}`);
  return <PostLayout post={post} locale={locale as Locale} />;
}
