/**
 * ffmpeg.wasm client (main thread). @ffmpeg/ffmpeg already runs ffmpeg inside
 * its own internal worker, so the heavy work is off the main thread without us
 * nesting another worker.
 *
 * We use the SINGLE-THREADED core (@ffmpeg/core, not core-mt). This is slower
 * but requires no Cross-Origin-Isolation (COEP/COOP) headers — which would
 * break AdSense and GTM. The core .js/.wasm are self-hosted under /public/ffmpeg
 * and loaded as same-origin blob URLs (no CDN, CSP-friendly).
 */
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";
import type {
  AudioCompressOptions,
  VideoCompressOptions,
} from "@/lib/compress/media-types";
import { withExt } from "@/lib/format";

let instance: FFmpeg | null = null;
let loadPromise: Promise<FFmpeg> | null = null;

export function isFFmpegLoaded(): boolean {
  return instance !== null;
}

async function getFFmpeg(): Promise<FFmpeg> {
  if (instance) return instance;
  if (!loadPromise) {
    loadPromise = (async () => {
      const ff = new FFmpeg();
      const [coreURL, wasmURL] = await Promise.all([
        toBlobURL("/ffmpeg/ffmpeg-core.js", "text/javascript"),
        toBlobURL("/ffmpeg/ffmpeg-core.wasm", "application/wasm"),
      ]);
      // Self-hosted ESM worker. Passing classWorkerURL (a runtime string) stops
      // the bundler from trying to bundle @ffmpeg/ffmpeg's worker.js — its
      // dynamic `import(coreURL)` otherwise breaks both Turbopack ("expression
      // too dynamic") and webpack. The browser runs the worker + dynamic import
      // natively from /public.
      await ff.load({
        classWorkerURL: new URL("/ffmpeg/esm/worker.js", window.location.origin)
          .href,
        coreURL,
        wasmURL,
      });
      instance = ff;
      return ff;
    })();
  }
  return loadPromise;
}

/** Pre-warm the wasm so the first compression isn't delayed by the 32 MB load. */
export async function preloadFFmpeg(): Promise<void> {
  await getFFmpeg();
}

function inputName(file: File): string {
  const ext = file.name.includes(".")
    ? file.name.slice(file.name.lastIndexOf(".") + 1).toLowerCase()
    : "bin";
  return `input.${ext.replace(/[^a-z0-9]/g, "") || "bin"}`;
}

async function run(
  args: string[],
  file: File,
  inName: string,
  outName: string,
  onProgress?: (v: number) => void,
): Promise<Uint8Array> {
  let ff: FFmpeg;
  try {
    ff = await getFFmpeg();
  } catch (e) {
    (globalThis as Record<string, unknown>).__ffmpegDebug = {
      phase: "load",
      message: e instanceof Error ? e.message : String(e),
      value: e,
    };
    throw new Error(
      "The video engine failed to load. Please reload and try again.",
    );
  }
  const logs: string[] = [];
  const progressHandler = ({ progress }: { progress: number }) => {
    if (onProgress && Number.isFinite(progress)) {
      onProgress(Math.max(0.02, Math.min(0.99, progress)));
    }
  };
  const logHandler = ({ message }: { message: string }) => {
    logs.push(message);
    if (logs.length > 12) logs.shift();
  };
  ff.on("progress", progressHandler);
  ff.on("log", logHandler);
  try {
    await ff.writeFile(inName, await fetchFile(file));
    const code = await ff.exec(args);
    if (code !== 0) {
      throw new Error(
        `ffmpeg exited with code ${code}. ${logs.slice(-3).join(" ")}`.trim(),
      );
    }
    const data = (await ff.readFile(outName)) as Uint8Array;
    if (!data || data.length === 0) {
      throw new Error("Compression produced an empty file.");
    }
    return data;
  } catch (err) {
    (globalThis as Record<string, unknown>).__ffmpegDebug = {
      phase: "exec",
      message: err instanceof Error ? err.message : String(err),
      value: err,
      logs: logs.slice(),
      args,
    };
    if (err instanceof Error && err.message.includes("ffmpeg exited")) throw err;
    const tail = logs.slice(-3).join(" ");
    throw new Error(
      `Video/audio compression failed.${tail ? " " + tail : ""}`,
    );
  } finally {
    ff.off("progress", progressHandler);
    ff.off("log", logHandler);
    try {
      await ff.deleteFile(inName);
    } catch {}
    try {
      await ff.deleteFile(outName);
    } catch {}
  }
}

export async function compressVideo(
  file: File,
  opts: VideoCompressOptions,
  onProgress?: (v: number) => void,
): Promise<{ blob: Blob; name: string }> {
  const inName = inputName(file);
  const outName = "output.mp4";

  const vfilter =
    opts.maxHeight > 0
      ? ["-vf", `scale=-2:min(${opts.maxHeight}\\,ih)`]
      : [];

  const videoArgs =
    opts.codec === "vp9"
      ? ["-c:v", "libvpx-vp9", "-b:v", "0", "-crf", String(opts.crf)]
      : ["-c:v", "libx264", "-preset", "veryfast", "-crf", String(opts.crf)];

  const args = [
    "-i",
    inName,
    ...videoArgs,
    ...vfilter,
    "-c:a",
    "aac",
    "-b:a",
    opts.audioBitrate,
    "-movflags",
    "+faststart",
    outName,
  ];

  const data = await run(args, file, inName, outName, onProgress);
  const ab = data.slice().buffer;
  return { blob: new Blob([ab], { type: "video/mp4" }), name: withExt(file.name, "mp4") };
}

export async function compressAudio(
  file: File,
  opts: AudioCompressOptions,
  onProgress?: (v: number) => void,
): Promise<{ blob: Blob; name: string }> {
  const inName = inputName(file);
  const isMp3 = opts.format === "mp3";
  const outName = isMp3 ? "output.mp3" : "output.m4a";

  const args = [
    "-i",
    inName,
    "-vn",
    "-c:a",
    isMp3 ? "libmp3lame" : "aac",
    "-b:a",
    opts.bitrate,
    outName,
  ];

  const data = await run(args, file, inName, outName, onProgress);
  const ab = data.slice().buffer;
  return {
    blob: new Blob([ab], { type: isMp3 ? "audio/mpeg" : "audio/mp4" }),
    name: withExt(file.name, isMp3 ? "mp3" : "m4a"),
  };
}
