import type { Author } from "@/lib/blog/types";
import { SITE } from "@/lib/site-config";

/**
 * Editorial authors. NOTE TO OWNER: replace these with REAL named people and
 * bios before launch — genuine, verifiable authorship is a core E-E-A-T signal
 * and helps with AdSense approval. Keep the `id` values stable since posts
 * reference them.
 */
export const AUTHORS: Record<string, Author> = {
  team: {
    id: "team",
    name: SITE.authorName, // "The FileShrinking Team" [FILL IN real maintainer]
    role: "Editorial team",
    bio: "The FileShrinking team builds privacy-first, browser-based file tools. We write about image, video, audio and document compression to help you ship smaller files without giving up quality — or your privacy.",
    sameAs: Object.values(SITE.social),
  },
  maya: {
    id: "maya",
    name: "Maya Bauer", // [FILL IN] real author identity
    role: "Web performance writer",
    bio: "Maya writes about web performance, image and media optimization, and the modern browser APIs that make client-side processing possible. She has spent years helping teams cut page weight without sacrificing quality.",
    sameAs: [SITE.social.twitter],
  },
};

export function getAuthor(id: string): Author {
  return AUTHORS[id] ?? AUTHORS.team;
}
