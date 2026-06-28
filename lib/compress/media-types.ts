/** Shared types + presets for video/audio compression (ffmpeg.wasm). */

export type VideoCodec = "h264" | "vp9";

export interface VideoCompressOptions {
  codec: VideoCodec;
  /** Constant Rate Factor — lower is higher quality / bigger. */
  crf: number;
  /** Downscale so height <= this (px). 0 = keep original size. */
  maxHeight: number;
  /** Audio bitrate, e.g. "128k". */
  audioBitrate: string;
}

export type AudioFormat = "mp3" | "aac";

export interface AudioCompressOptions {
  format: AudioFormat;
  /** e.g. "128k", "192k". */
  bitrate: string;
}

export const VIDEO_PRESETS = {
  high: { label: "High quality", crf: 23, maxHeight: 1080, audioBitrate: "160k" },
  balanced: { label: "Balanced", crf: 28, maxHeight: 720, audioBitrate: "128k" },
  small: { label: "Smallest", crf: 32, maxHeight: 480, audioBitrate: "96k" },
} as const;

export type VideoPresetKey = keyof typeof VIDEO_PRESETS;

export const AUDIO_BITRATES = ["96k", "128k", "160k", "192k", "256k"] as const;

/** Soft size ceiling above which we warn the user (single-threaded ffmpeg). */
export const VIDEO_SOFT_MAX_BYTES = 150 * 1024 * 1024; // ~150 MB
