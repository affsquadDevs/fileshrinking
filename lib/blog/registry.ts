import type { BlogPost, BlogPostModule } from "@/lib/blog/types";

// Each post is a module exporting `meta` + a default Content component.
// Add new posts here. (Explicit imports so the bundler can tree-shake and
// types stay sound — no dynamic globbing.)
import * as lossyVsLossless from "@/components/blog/posts/lossy-vs-lossless";
import * as jpegVsPngVsWebpVsAvif from "@/components/blog/posts/jpeg-vs-png-vs-webp-vs-avif";
import * as compressImagesWithoutLosingQuality from "@/components/blog/posts/compress-images-without-losing-quality";
import * as whyIsMyPdfSoBig from "@/components/blog/posts/why-is-my-pdf-so-big";
import * as howToCompressVideoForEmailAndWeb from "@/components/blog/posts/how-to-compress-video-for-email-and-web";
import * as bestImageFormatsForTheWeb2026 from "@/components/blog/posts/best-image-formats-for-the-web-2026";
import * as whatIsWebp from "@/components/blog/posts/what-is-webp-and-should-you-use-it";
import * as howToCompressAudioFiles from "@/components/blog/posts/how-to-compress-audio-files";

const MODULES: BlogPostModule[] = [
  lossyVsLossless,
  jpegVsPngVsWebpVsAvif,
  compressImagesWithoutLosingQuality,
  whyIsMyPdfSoBig,
  howToCompressVideoForEmailAndWeb,
  bestImageFormatsForTheWeb2026,
  whatIsWebp,
  howToCompressAudioFiles,
].map((m) => m as unknown as BlogPostModule);

export const POSTS: BlogPost[] = MODULES.map((m) => ({
  ...m.meta,
  Content: m.default,
})).sort((a, b) => b.datePublished.localeCompare(a.datePublished));

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function allPostSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}
