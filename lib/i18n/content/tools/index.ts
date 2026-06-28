import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import type { LocalizedToolContent } from "@/lib/i18n/content/tools/types";

import { content as imageCompressorEs } from "@/lib/i18n/content/tools/image-compressor.es";
import { content as compressJpegEs } from "@/lib/i18n/content/tools/compress-jpeg.es";
import { content as compressPngEs } from "@/lib/i18n/content/tools/compress-png.es";
import { content as compressWebpEs } from "@/lib/i18n/content/tools/compress-webp.es";
import { content as compressAvifEs } from "@/lib/i18n/content/tools/compress-avif.es";
import { content as compressGifEs } from "@/lib/i18n/content/tools/compress-gif.es";
import { content as compressHeicEs } from "@/lib/i18n/content/tools/compress-heic.es";
import { content as imageConverterEs } from "@/lib/i18n/content/tools/image-converter.es";
import { content as imageResizerEs } from "@/lib/i18n/content/tools/image-resizer.es";
import { content as pdfCompressorEs } from "@/lib/i18n/content/tools/pdf-compressor.es";
import { content as videoCompressorEs } from "@/lib/i18n/content/tools/video-compressor.es";
import { content as compressMp4Es } from "@/lib/i18n/content/tools/compress-mp4.es";
import { content as compressMovEs } from "@/lib/i18n/content/tools/compress-mov.es";
import { content as audioCompressorEs } from "@/lib/i18n/content/tools/audio-compressor.es";

const ES: Record<string, LocalizedToolContent> = {
  "image-compressor": imageCompressorEs,
  "compress-jpeg": compressJpegEs,
  "compress-png": compressPngEs,
  "compress-webp": compressWebpEs,
  "compress-avif": compressAvifEs,
  "compress-gif": compressGifEs,
  "compress-heic": compressHeicEs,
  "image-converter": imageConverterEs,
  "image-resizer": imageResizerEs,
  "pdf-compressor": pdfCompressorEs,
  "video-compressor": videoCompressorEs,
  "compress-mp4": compressMp4Es,
  "compress-mov": compressMovEs,
  "audio-compressor": audioCompressorEs,
};

// Translated tool-page content per locale. English routes use their own inline
// pages, so en is intentionally absent here.
const REGISTRY: Partial<Record<Locale, Record<string, LocalizedToolContent>>> = {
  es: ES,
};

export function getToolContent(
  slug: string,
  locale: Locale,
): LocalizedToolContent | null {
  if (locale === DEFAULT_LOCALE) return null;
  return REGISTRY[locale]?.[slug] ?? null;
}

/** Slugs that have a translation for the given locale (for generateStaticParams). */
export function translatedToolSlugs(locale: Locale): string[] {
  return Object.keys(REGISTRY[locale] ?? {});
}
