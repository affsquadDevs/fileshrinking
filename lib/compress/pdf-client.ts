/**
 * Main-thread client for the PDF worker. Lazily creates a single module worker
 * and talks to it over Comlink.
 */
import * as Comlink from "comlink";
import type {
  PdfCompressOptions,
  PdfCompressResult,
} from "@/lib/compress/pdf-types";
import type { PdfWorkerApi } from "@/lib/workers/pdf.worker";

let worker: Worker | null = null;
let proxy: Comlink.Remote<PdfWorkerApi> | null = null;

function getProxy(): Comlink.Remote<PdfWorkerApi> {
  if (!proxy) {
    worker = new Worker(new URL("../workers/pdf.worker.ts", import.meta.url), {
      type: "module",
      name: "pdf-compressor",
    });
    proxy = Comlink.wrap<PdfWorkerApi>(worker);
  }
  return proxy;
}

export async function compressPdf(
  file: File,
  opts: PdfCompressOptions,
  onProgress?: (value: number) => void,
): Promise<PdfCompressResult> {
  const api = getProxy();
  const buffer = await file.arrayBuffer();
  return api.compress(
    Comlink.transfer(buffer, [buffer]),
    opts,
    onProgress ? Comlink.proxy(onProgress) : undefined,
  );
}

export function terminatePdfWorker(): void {
  worker?.terminate();
  worker = null;
  proxy = null;
}
