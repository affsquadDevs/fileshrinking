/** Human-readable byte sizes and savings math. Pure, dependency-free. */

export function formatBytes(bytes: number, decimals = 1): string {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
  const k = 1024;
  const units = ["B", "KB", "MB", "GB", "TB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(k)), units.length - 1);
  const value = bytes / Math.pow(k, i);
  const dp = i === 0 ? 0 : decimals;
  return `${value.toFixed(dp)} ${units[i]}`;
}

/** Percentage reduction from original → output. Negative means it grew. */
export function percentSaved(original: number, output: number): number {
  if (original <= 0) return 0;
  return Math.round(((original - output) / original) * 100);
}

export function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/** Strip the extension from a filename. */
export function stripExt(name: string): string {
  const i = name.lastIndexOf(".");
  return i > 0 ? name.slice(0, i) : name;
}

/** Replace (or add) a filename extension. */
export function withExt(name: string, ext: string): string {
  return `${stripExt(name)}.${ext.replace(/^\./, "")}`;
}
