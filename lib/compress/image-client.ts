/**
 * Main-thread client for the image worker. Lazily spins up a single module
 * worker (created only in the browser, on first use) and talks to it via
 * Comlink. Files are transferred zero-copy; progress is reported through a
 * Comlink-proxied callback.
 */
import * as Comlink from "comlink";
import type {
  ImageCompressOptions,
  ImageCompressResult,
} from "@/lib/compress/image-types";
import type { ImageWorkerApi } from "@/lib/workers/image.worker";

let worker: Worker | null = null;
let proxy: Comlink.Remote<ImageWorkerApi> | null = null;

function getProxy(): Comlink.Remote<ImageWorkerApi> {
  if (!proxy) {
    worker = new Worker(
      new URL("../workers/image.worker.ts", import.meta.url),
      { type: "module", name: "image-compressor" },
    );
    proxy = Comlink.wrap<ImageWorkerApi>(worker);
  }
  return proxy;
}

export async function compressImage(
  file: File,
  opts: ImageCompressOptions,
  onProgress?: (value: number) => void,
): Promise<ImageCompressResult> {
  const api = getProxy();
  const buffer = await file.arrayBuffer();
  return api.compress(
    Comlink.transfer(buffer, [buffer]),
    file.type,
    opts,
    onProgress ? Comlink.proxy(onProgress) : undefined,
  );
}

/** Release the worker (e.g. on tool unmount) to free WASM memory. */
export function terminateImageWorker(): void {
  worker?.terminate();
  worker = null;
  proxy = null;
}
