import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostLayout } from "@/components/blog/post-layout";
import { buildMetadata } from "@/lib/seo/metadata";
import { getPost, allPostSlugs } from "@/lib/blog/registry";

export function generateStaticParams() {
  return allPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified ?? post.datePublished,
    ogImage: post.image,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return <PostLayout post={post} />;
}
