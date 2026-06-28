/**
 * Client-side download helpers. Single-file downloads use an object URL;
 * batch downloads are zipped in-browser with client-zip (streaming, no extra
 * memory blowup).
 */
import { downloadZip } from "client-zip";

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  // Revoke after a tick so the download has started.
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export interface ZipEntry {
  name: string;
  blob: Blob;
}

/** Zip the given files entirely in the browser and trigger a download. */
export async function downloadAllAsZip(
  entries: ZipEntry[],
  zipName = "fileshrinking.zip",
): Promise<void> {
  // Deduplicate filenames (a.jpg, a (2).jpg, …) so the archive is valid.
  const seen = new Map<string, number>();
  const input = entries.map(({ name, blob }) => {
    const count = seen.get(name) ?? 0;
    seen.set(name, count + 1);
    const finalName = count === 0 ? name : dedupeName(name, count);
    return { name: finalName, input: blob };
  });

  const blob = await downloadZip(input).blob();
  downloadBlob(blob, zipName);
}

function dedupeName(name: string, n: number): string {
  const dot = name.lastIndexOf(".");
  if (dot <= 0) return `${name} (${n})`;
  return `${name.slice(0, dot)} (${n})${name.slice(dot)}`;
}
