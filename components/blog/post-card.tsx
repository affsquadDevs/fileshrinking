import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { getAuthor } from "@/lib/blog/authors";
import type { BlogPost } from "@/lib/blog/types";

function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function PostCard({ post }: { post: BlogPost }) {
  const author = getAuthor(post.authorId);
  return (
    <article className="group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-brand/40 hover:shadow-md hover:shadow-brand/5">
      <div className="mb-3 flex flex-wrap gap-2">
        {post.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="text-lg font-semibold tracking-tight">
        <Link
          href={`/blog/${post.slug}`}
          className="after:absolute after:inset-0 focus-visible:outline-none"
        >
          {post.title}
        </Link>
      </h2>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">
        {post.description}
      </p>
      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          {author.name} · {formatDate(post.datePublished)}
        </span>
        <span className="inline-flex items-center gap-1">
          <Clock className="size-3" aria-hidden="true" />
          {post.readingMinutes} min
        </span>
      </div>
    </article>
  );
}
