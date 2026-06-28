import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { PostCard } from "@/components/blog/post-card";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { buildMetadata } from "@/lib/seo/metadata";
import { POSTS } from "@/lib/blog/registry";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Compression Guides & Tips",
  description:
    "Practical, no-nonsense guides to compressing images, PDFs, video and audio: formats, quality trade-offs, and how to shrink files without losing quality.",
  path: "/blog",
});

export default function BlogIndex() {
  return (
    <Container className="py-8 lg:py-10">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Blog" }]}
        className="mb-6"
      />
      <header className="mb-10 max-w-2xl">
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          The FileShrinking Blog
        </h1>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          Practical guides to compressing and converting files — formats,
          quality trade-offs, and how to make things smaller without losing what
          matters. Every tool we mention runs privately in your browser.
        </p>
      </header>

      {POSTS.length === 0 ? (
        <p className="text-muted-foreground">Articles are coming soon.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog" },
        ])}
      />
    </Container>
  );
}
