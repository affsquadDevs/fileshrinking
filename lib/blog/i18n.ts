import type { BlogPost, BlogPostModule } from "@/lib/blog/types";
import { POSTS as EN_POSTS } from "@/lib/blog/registry";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";

import * as lossyVsLossless from "@/components/blog/posts/lossy-vs-lossless.es";
import * as jpegVsPngVsWebpVsAvif from "@/components/blog/posts/jpeg-vs-png-vs-webp-vs-avif.es";
import * as compressImagesWithoutLosingQuality from "@/components/blog/posts/compress-images-without-losing-quality.es";
import * as whyIsMyPdfSoBig from "@/components/blog/posts/why-is-my-pdf-so-big.es";
import * as howToCompressVideoForEmailAndWeb from "@/components/blog/posts/how-to-compress-video-for-email-and-web.es";
import * as bestImageFormatsForTheWeb2026 from "@/components/blog/posts/best-image-formats-for-the-web-2026.es";
import * as whatIsWebp from "@/components/blog/posts/what-is-webp-and-should-you-use-it.es";
import * as howToCompressAudioFiles from "@/components/blog/posts/how-to-compress-audio-files.es";
import * as howClientSideCompressionWorks from "@/components/blog/posts/how-client-side-file-compression-works.es";
import * as isItSafeToCompressFilesOnline from "@/components/blog/posts/is-it-safe-to-compress-files-online.es";
import * as mp4VsWebmVsMovVsMkv from "@/components/blog/posts/mp4-vs-webm-vs-mov-vs-mkv.es";

const ES_MODULES: BlogPostModule[] = [
  lossyVsLossless,
  jpegVsPngVsWebpVsAvif,
  compressImagesWithoutLosingQuality,
  whyIsMyPdfSoBig,
  howToCompressVideoForEmailAndWeb,
  bestImageFormatsForTheWeb2026,
  whatIsWebp,
  howToCompressAudioFiles,
  howClientSideCompressionWorks,
  isItSafeToCompressFilesOnline,
  mp4VsWebmVsMovVsMkv,
].map((m) => m as unknown as BlogPostModule);

const ES_POSTS: BlogPost[] = ES_MODULES.map((m) => ({
  ...m.meta,
  Content: m.default,
})).sort((a, b) => b.datePublished.localeCompare(a.datePublished));

const BY_LOCALE: Partial<Record<Locale, BlogPost[]>> = {
  es: ES_POSTS,
};

/** Posts for a locale, or null if that locale has no translations (caller
 *  should fall back / redirect to English). English returns the English list. */
export function getLocalizedPosts(locale: Locale): BlogPost[] | null {
  if (locale === DEFAULT_LOCALE) return EN_POSTS;
  return BY_LOCALE[locale] ?? null;
}

export function getLocalizedPost(slug: string, locale: Locale): BlogPost | null {
  const posts = locale === DEFAULT_LOCALE ? EN_POSTS : BY_LOCALE[locale];
  return posts?.find((p) => p.slug === slug) ?? null;
}

export function localizedPostSlugs(locale: Locale): string[] {
  return (BY_LOCALE[locale] ?? []).map((p) => p.slug);
}

export function localesWithPosts(): Locale[] {
  return Object.keys(BY_LOCALE) as Locale[];
}
