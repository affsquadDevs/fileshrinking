import type { ComponentType } from "react";

export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  /** Optional avatar path under /public. */
  avatar?: string;
  sameAs?: string[];
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. "2026-06-27". */
  datePublished: string;
  dateModified?: string;
  authorId: string;
  tags: string[];
  /** Approx reading time in minutes. */
  readingMinutes: number;
  /** Optional hero/OG image under /public. */
  image?: string;
}

export interface BlogPostModule {
  meta: BlogPostMeta;
  /** The article body (Prose children). */
  default: ComponentType;
}

export interface BlogPost extends BlogPostMeta {
  Content: ComponentType;
}
