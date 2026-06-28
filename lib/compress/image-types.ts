/** Shared types for the image compression worker + client. No DOM/worker
 *  globals here so it can be imported from both sides and from server code. */

export type ImageEncodeFormat = "jpeg" | "png" | "webp" | "avif";
/** "keep" = re-encode to the same format as the source. */
export type ImageTargetFormat = ImageEncodeFormat | "keep";

export interface ResizeOptions {
  mode: "none" | "dimensions" | "percentage";
  width?: number;
  height?: number;
  percentage?: number;
  maintainAspectRatio?: boolean;
}

export interface ImageCompressOptions {
  /** Output format. "keep" recompresses to the source format. */
  target: ImageTargetFormat;
  /** Lossy quality 1–100 (ignored for PNG, which is lossless). */
  quality: number;
  /** JPEG: encode as progressive. */
  progressive?: boolean;
  /** PNG: OxiPNG optimization level 1–6 (higher = smaller, slower). */
  oxipngLevel?: number;
  /** Optional resize applied before encoding. */
  resize?: ResizeOptions;
}

export interface ImageCompressResult {
  /** Encoded file bytes. */
  buffer: ArrayBuffer;
  width: number;
  height: number;
  mime: string;
  ext: string;
}

export const FORMAT_META: Record<
  ImageEncodeFormat,
  { mime: string; ext: string; label: string; lossless: boolean }
> = {
  jpeg: { mime: "image/jpeg", ext: "jpg", label: "JPEG", lossless: false },
  png: { mime: "image/png", ext: "png", label: "PNG", lossless: true },
  webp: { mime: "image/webp", ext: "webp", label: "WebP", lossless: false },
  avif: { mime: "image/avif", ext: "avif", label: "AVIF", lossless: false },
};

/** Map a source MIME type to an encode format (for "keep"). */
export function mimeToFormat(mime: string): ImageEncodeFormat | null {
  switch (mime) {
    case "image/jpeg":
      return "jpeg";
    case "image/png":
      return "png";
    case "image/webp":
      return "webp";
    case "image/avif":
      return "avif";
    // GIF and others have no lossless re-encoder; default handled by caller.
    default:
      return null;
  }
}
