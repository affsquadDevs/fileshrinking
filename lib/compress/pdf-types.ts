/** Shared types for the PDF compression worker + client. */

export interface PdfCompressOptions {
  /** JPEG quality (1–100) for recompressing embedded images. */
  quality: number;
  /** Downscale embedded images whose longest side exceeds this (px). 0 = off. */
  maxImageDimension: number;
}

export interface PdfCompressResult {
  buffer: ArrayBuffer;
  /** How many embedded images were recompressed. */
  recompressedImages: number;
  /** Number of image XObjects found in the document. */
  totalImages: number;
  /** Honest note, e.g. "already optimized" or "mostly text, little to compress". */
  note?: string;
  /** True when we returned the original because it was already smaller. */
  keptOriginal: boolean;
}

export const PDF_PRESETS = {
  high: { label: "High quality", quality: 82, maxImageDimension: 2400 },
  balanced: { label: "Balanced", quality: 65, maxImageDimension: 1600 },
  small: { label: "Smallest", quality: 45, maxImageDimension: 1200 },
} as const;

export type PdfPresetKey = keyof typeof PDF_PRESETS;
