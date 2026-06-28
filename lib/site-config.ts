/**
 * Central site configuration — the single source of truth for navigation,
 * tool definitions, SEO defaults, sitemap generation, and structured data.
 *
 * Keep this file free of React/JSX so it can be imported by server-only
 * modules (sitemap.ts, robots.ts, metadata helpers) without pulling in the
 * client runtime. Icons are referenced by lucide name (string) and resolved
 * in UI components via lib/icons.ts.
 *
 * NOTE TO OWNER: items marked `[FILL IN]` must be replaced with real,
 * truthful information before applying for AdSense or launching publicly.
 */

export const SITE = {
  name: "FileShrinking",
  shortName: "FileShrinking",
  domain: "fileshrinking.com",
  url: "https://fileshrinking.com",
  /** Used in titles: "Page Title | FileShrinking" */
  titleSeparator: "|",
  tagline: "Free, private file compression in your browser",
  description:
    "Compress images, PDFs, video and audio for free — entirely in your browser. Your files never leave your device. No uploads, no sign-up, no limits.",
  locale: "en_US",
  themeColor: "#2563eb",
  // E-E-A-T / publisher details
  publisher: "FileShrinking", // [FILL IN] legal entity name
  authorName: "The FileShrinking Team", // [FILL IN] real maintainer
  contactEmail: "hello@fileshrinking.com", // [FILL IN] real support inbox
  foundingYear: 2025,
  // Pre-supplied, already-wired identifiers
  adsensePublisherId: "ca-pub-2980943706375055",
  gtmContainerId: "GTM-MNLGFCTM",
  // Public, open-source repository (MIT licensed).
  repoUrl: "https://github.com/affsquadDevs/fileshrinking",
  license: "MIT",
  // Social profiles for Organization.sameAs — [FILL IN] real URLs
  social: {
    twitter: "https://twitter.com/fileshrinking",
    github: "https://github.com/affsquadDevs/fileshrinking",
  },
  twitterHandle: "@fileshrinking",
} as const;

export type ToolCategoryId = "image" | "pdf" | "video" | "audio";

export interface ToolDef {
  /** Canonical slug (no leading slash) */
  slug: string;
  /** Full <h1>/title-ready name */
  title: string;
  /** Short label for menus/cards */
  shortName: string;
  /** One-line, used in cards and meta descriptions */
  description: string;
  /** lucide-react icon name, resolved in lib/icons.ts */
  icon: string;
  /** Accepted input mime types / extensions for the dropzone */
  accept: string[];
  category: ToolCategoryId;
  /** Is this the category hub page? */
  isHub?: boolean;
  /** Primary keyword target for SEO */
  keyword: string;
}

export interface ToolCategory {
  id: ToolCategoryId;
  label: string;
  /** Hub slug */
  hub: string;
  icon: string;
  blurb: string;
}

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: "image",
    label: "Image tools",
    hub: "image-compressor",
    icon: "Image",
    blurb: "Shrink JPEG, PNG, WebP, AVIF & GIF. Convert and resize too.",
  },
  {
    id: "pdf",
    label: "PDF tools",
    hub: "pdf-compressor",
    icon: "FileText",
    blurb: "Reduce PDF size by recompressing embedded images.",
  },
  {
    id: "video",
    label: "Video tools",
    hub: "video-compressor",
    icon: "Video",
    blurb: "Compress MP4, MOV, WebM, MKV and AVI in your browser.",
  },
  {
    id: "audio",
    label: "Audio tools",
    hub: "audio-compressor",
    icon: "Music",
    blurb: "Make MP3, WAV and AAC files smaller, locally.",
  },
];

const IMG = ["image/jpeg", "image/png", "image/webp", "image/avif", "image/gif"];

export const TOOLS: ToolDef[] = [
  // ----- Image -----
  {
    slug: "image-compressor",
    title: "Image Compressor",
    shortName: "Image Compressor",
    description:
      "Compress JPEG, PNG, WebP, AVIF and GIF images privately in your browser.",
    icon: "Image",
    accept: IMG,
    category: "image",
    isHub: true,
    keyword: "image compressor",
  },
  {
    slug: "compress-jpeg",
    title: "JPEG Compressor",
    shortName: "JPEG / JPG",
    description: "Shrink JPG/JPEG photos with MozJPEG — adjustable quality.",
    icon: "Image",
    accept: ["image/jpeg"],
    category: "image",
    keyword: "compress jpeg",
  },
  {
    slug: "compress-png",
    title: "PNG Compressor",
    shortName: "PNG",
    description: "Optimize PNGs losslessly with OxiPNG, or go smaller lossy.",
    icon: "Image",
    accept: ["image/png"],
    category: "image",
    keyword: "compress png",
  },
  {
    slug: "compress-webp",
    title: "WebP Compressor & Converter",
    shortName: "WebP",
    description: "Compress WebP or convert images to modern WebP format.",
    icon: "Image",
    accept: IMG,
    category: "image",
    keyword: "compress webp",
  },
  {
    slug: "compress-avif",
    title: "AVIF Compressor & Converter",
    shortName: "AVIF",
    description: "Create tiny AVIF images or recompress existing ones.",
    icon: "Image",
    accept: IMG,
    category: "image",
    keyword: "compress avif",
  },
  {
    slug: "compress-gif",
    title: "GIF Compressor",
    shortName: "GIF",
    description: "Reduce GIF size, or convert to far smaller WebP / MP4.",
    icon: "Image",
    accept: ["image/gif"],
    category: "image",
    keyword: "compress gif",
  },
  {
    slug: "compress-heic",
    title: "HEIC Compressor & Converter",
    shortName: "HEIC",
    description:
      "Convert iPhone HEIC/HEIF photos to JPEG, WebP or AVIF and shrink them.",
    icon: "Image",
    accept: ["image/heic", "image/heif", ".heic", ".heif"],
    category: "image",
    keyword: "compress heic",
  },
  {
    slug: "image-converter",
    title: "Image Converter",
    shortName: "Converter",
    description: "Convert between JPEG, PNG, WebP and AVIF in your browser.",
    icon: "Repeat",
    accept: IMG,
    category: "image",
    keyword: "image converter",
  },
  {
    slug: "image-resizer",
    title: "Image Resizer",
    shortName: "Resizer",
    description: "Resize images by pixels or percentage with no upload.",
    icon: "Scaling",
    accept: IMG,
    category: "image",
    keyword: "image resizer",
  },
  // ----- PDF -----
  {
    slug: "pdf-compressor",
    title: "PDF Compressor",
    shortName: "PDF Compressor",
    description: "Reduce PDF file size by recompressing embedded images.",
    icon: "FileText",
    accept: ["application/pdf"],
    category: "pdf",
    isHub: true,
    keyword: "pdf compressor",
  },
  // ----- Video -----
  {
    slug: "video-compressor",
    title: "Video Compressor",
    shortName: "Video Compressor",
    description: "Compress MP4, MOV, WebM, MKV and AVI privately, in-browser.",
    icon: "Video",
    accept: ["video/*"],
    category: "video",
    isHub: true,
    keyword: "video compressor",
  },
  {
    slug: "compress-mp4",
    title: "MP4 Compressor",
    shortName: "MP4",
    description: "Compress MP4 video with H.264 — quality presets, no upload.",
    icon: "Video",
    accept: ["video/mp4"],
    category: "video",
    keyword: "compress mp4",
  },
  {
    slug: "compress-mov",
    title: "MOV / WebM / MKV / AVI Compressor",
    shortName: "MOV & more",
    description: "Compress MOV, WebM, MKV and AVI video in your browser.",
    icon: "Video",
    accept: ["video/quicktime", "video/webm", "video/x-matroska", "video/x-msvideo"],
    category: "video",
    keyword: "compress mov",
  },
  // ----- Audio -----
  {
    slug: "audio-compressor",
    title: "Audio Compressor",
    shortName: "Audio Compressor",
    description: "Compress MP3, WAV and AAC audio files locally in your browser.",
    icon: "Music",
    accept: ["audio/*"],
    category: "audio",
    isHub: true,
    keyword: "audio compressor",
  },
];

/** All non-hub tool slugs under a given category, in display order. */
export function toolsInCategory(category: ToolCategoryId): ToolDef[] {
  return TOOLS.filter((t) => t.category === category && !t.isHub);
}

export function getTool(slug: string): ToolDef | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getCategory(id: ToolCategoryId): ToolCategory {
  return TOOL_CATEGORIES.find((c) => c.id === id)!;
}

/** Canonical 301 alias map: alias slug -> canonical slug. */
export const ROUTE_ALIASES: Record<string, string> = {
  "compress-pdf": "pdf-compressor",
};

/** Footer / sitemap static pages. */
export const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/disclaimer", label: "Disclaimer" },
];
