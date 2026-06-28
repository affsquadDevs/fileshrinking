/** Shared types for the reusable tool shell (queue, processing, results). */

export type FileStatus =
  | "queued"
  | "processing"
  | "done"
  | "error"
  | "skipped";

export interface QueuedFile {
  id: string;
  file: File;
  status: FileStatus;
  /** 0–1 while processing. */
  progress: number;
  originalSize: number;
  previewUrl?: string;
  // result fields
  resultBlob?: Blob;
  resultSize?: number;
  resultName?: string;
  resultWidth?: number;
  resultHeight?: number;
  /** Honest note, e.g. "Already optimized — original kept". */
  note?: string;
  error?: string;
}

/** What a tool's per-file processor returns. */
export interface ProcessOutput {
  blob: Blob;
  name: string;
  width?: number;
  height?: number;
  /** Optional human note surfaced on the result card. */
  note?: string;
}

/** Process a single file, reporting progress 0–1. */
export type ProcessFn = (
  file: File,
  onProgress: (value: number) => void,
) => Promise<ProcessOutput>;
