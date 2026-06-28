/**
 * Localized tool labels (title / short name / description) used in navigation,
 * footer, cards, breadcrumbs and tool-page chrome. English is derived from
 * site-config (single source); other locales provide a map and fall back to
 * English for any missing entry, so the UI degrades gracefully while
 * translations are still being filled in.
 */
import { getTool } from "@/lib/site-config";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { labels as labelsPt } from "@/lib/i18n/content/tool-labels/pt";
import { labels as labelsIt } from "@/lib/i18n/content/tool-labels/it";
import { labels as labelsDe } from "@/lib/i18n/content/tool-labels/de";
import { labels as labelsFr } from "@/lib/i18n/content/tool-labels/fr";
import { labels as labelsPl } from "@/lib/i18n/content/tool-labels/pl";
import { labels as labelsUk } from "@/lib/i18n/content/tool-labels/uk";

export interface ToolLabel {
  title: string;
  shortName: string;
  description: string;
}

const ES: Record<string, ToolLabel> = {
  "image-compressor": {
    title: "Compresor de imágenes",
    shortName: "Compresor de imágenes",
    description:
      "Comprime imágenes JPEG, PNG, WebP, AVIF y GIF de forma privada en tu navegador.",
  },
  "compress-jpeg": {
    title: "Compresor de JPEG",
    shortName: "JPEG / JPG",
    description: "Reduce fotos JPG/JPEG con MozJPEG, con calidad ajustable.",
  },
  "compress-png": {
    title: "Compresor de PNG",
    shortName: "PNG",
    description:
      "Optimiza PNG sin pérdida con OxiPNG, o redúcelos más con pérdida.",
  },
  "compress-webp": {
    title: "Compresor y conversor WebP",
    shortName: "WebP",
    description: "Comprime WebP o convierte imágenes al moderno formato WebP.",
  },
  "compress-avif": {
    title: "Compresor y conversor AVIF",
    shortName: "AVIF",
    description: "Crea imágenes AVIF diminutas o recomprime las existentes.",
  },
  "compress-gif": {
    title: "Compresor de GIF",
    shortName: "GIF",
    description:
      "Reduce el tamaño de los GIF o conviértelos a WebP / MP4 mucho más pequeños.",
  },
  "compress-heic": {
    title: "Compresor y conversor HEIC",
    shortName: "HEIC",
    description:
      "Convierte fotos HEIC/HEIF de iPhone a JPEG, WebP o AVIF y redúcelas.",
  },
  "image-converter": {
    title: "Conversor de imágenes",
    shortName: "Conversor",
    description: "Convierte entre JPEG, PNG, WebP y AVIF en tu navegador.",
  },
  "image-resizer": {
    title: "Redimensionar imágenes",
    shortName: "Redimensionar",
    description:
      "Cambia el tamaño de las imágenes por píxeles o porcentaje, sin subir nada.",
  },
  "pdf-compressor": {
    title: "Compresor de PDF",
    shortName: "Compresor de PDF",
    description:
      "Reduce el tamaño de los PDF recomprimiendo las imágenes incrustadas.",
  },
  "video-compressor": {
    title: "Compresor de vídeo",
    shortName: "Compresor de vídeo",
    description:
      "Comprime MP4, MOV, WebM, MKV y AVI de forma privada, en el navegador.",
  },
  "compress-mp4": {
    title: "Compresor de MP4",
    shortName: "MP4",
    description:
      "Comprime vídeo MP4 con H.264, con ajustes de calidad y sin subidas.",
  },
  "compress-mov": {
    title: "Compresor de MOV / WebM / MKV / AVI",
    shortName: "MOV y más",
    description: "Comprime vídeo MOV, WebM, MKV y AVI en tu navegador.",
  },
  "audio-compressor": {
    title: "Compresor de audio",
    shortName: "Compresor de audio",
    description:
      "Comprime archivos de audio MP3, WAV y AAC localmente en tu navegador.",
  },
};

const TOOL_LABELS: Partial<Record<Locale, Record<string, ToolLabel>>> = {
  es: ES,
  pt: labelsPt,
  it: labelsIt,
  de: labelsDe,
  fr: labelsFr,
  pl: labelsPl,
  uk: labelsUk,
};

export function localizedTool(slug: string, locale: Locale): ToolLabel {
  const tool = getTool(slug);
  const fallback: ToolLabel = tool
    ? {
        title: tool.title,
        shortName: tool.shortName,
        description: tool.description,
      }
    : { title: slug, shortName: slug, description: "" };
  if (locale === DEFAULT_LOCALE) return fallback;
  return TOOL_LABELS[locale]?.[slug] ?? fallback;
}
