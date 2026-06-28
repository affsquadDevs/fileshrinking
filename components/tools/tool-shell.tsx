"use client";

import * as React from "react";
import { Download, RotateCcw, Trash2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Dropzone } from "@/components/tools/dropzone";
import { ResultCard } from "@/components/tools/result-card";
import type {
  ProcessFn,
  ProcessOutput,
  QueuedFile,
} from "@/components/tools/types";
import { formatBytes, percentSaved } from "@/lib/format";
import { downloadBlob, downloadAllAsZip } from "@/lib/download";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

let idCounter = 0;
const nextId = () => `f${++idCounter}-${Date.now().toString(36)}`;

function accepts(file: File, accept: string[]): boolean {
  if (accept.length === 0) return true;
  return accept.some((a) => {
    if (a.endsWith("/*")) return file.type.startsWith(a.slice(0, -1));
    if (a.startsWith(".")) return file.name.toLowerCase().endsWith(a.toLowerCase());
    return file.type === a;
  });
}

export interface ToolShellProps {
  /** Tool id for analytics, e.g. "compress-jpeg". */
  toolId: string;
  /** Format label for analytics events. */
  formatLabel: string;
  accept: string[];
  multiple?: boolean;
  process: ProcessFn;
  /** Tool-specific controls (quality sliders, presets, etc.). */
  controls?: React.ReactNode;
  /** Show result dimensions (images). */
  showDimensions?: boolean;
  /** Make image thumbnails for queued files. */
  imagePreviews?: boolean;
  /** Warn (non-blocking) above this size, e.g. for ffmpeg. */
  softMaxBytes?: number;
  softMaxMessage?: React.ReactNode;
  dropHint?: React.ReactNode;
  className?: string;
}

export function ToolShell({
  toolId,
  formatLabel,
  accept,
  multiple = true,
  process,
  controls,
  showDimensions = false,
  imagePreviews = false,
  softMaxBytes,
  softMaxMessage,
  dropHint,
  className,
}: ToolShellProps) {
  const [items, setItems] = React.useState<QueuedFile[]>([]);
  const [rejected, setRejected] = React.useState<string[]>([]);
  const [running, setRunning] = React.useState(false);

  // Always call the latest process closure (captures current options).
  const processRef = React.useRef(process);
  React.useEffect(() => {
    processRef.current = process;
  });

  const itemsRef = React.useRef(items);
  itemsRef.current = items;

  // Clean up object URLs on unmount.
  React.useEffect(() => {
    return () => {
      itemsRef.current.forEach((it) => {
        if (it.previewUrl) URL.revokeObjectURL(it.previewUrl);
      });
    };
  }, []);

  const update = React.useCallback(
    (id: string, patch: Partial<QueuedFile>) => {
      setItems((prev) =>
        prev.map((it) => (it.id === id ? { ...it, ...patch } : it)),
      );
    },
    [],
  );

  const processOne = React.useCallback(
    async (item: QueuedFile) => {
      update(item.id, { status: "processing", progress: 0.02, error: undefined });
      trackEvent("compress_start", { tool: toolId, format: formatLabel });
      try {
        const out: ProcessOutput = await processRef.current(item.file, (p) =>
          update(item.id, { progress: Math.max(0.02, Math.min(1, p)) }),
        );
        update(item.id, {
          status: "done",
          progress: 1,
          resultBlob: out.blob,
          resultSize: out.blob.size,
          resultName: out.name,
          resultWidth: out.width,
          resultHeight: out.height,
          note: out.note,
        });
        trackEvent("compress_complete", {
          tool: toolId,
          format: formatLabel,
          original_bytes: item.originalSize,
          output_bytes: out.blob.size,
          saved_pct: percentSaved(item.originalSize, out.blob.size),
        });
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Compression failed.";
        update(item.id, { status: "error", error: message });
        trackEvent("compress_error", {
          tool: toolId,
          format: formatLabel,
          reason: message,
        });
      }
    },
    [toolId, formatLabel, update],
  );

  const runQueue = React.useCallback(
    async (queue: QueuedFile[]) => {
      if (queue.length === 0) return;
      setRunning(true);
      // Sequential — keeps peak memory low for large files.
      for (const item of queue) {
        await processOne(item);
      }
      setRunning(false);
    },
    [processOne],
  );

  const addFiles = React.useCallback(
    (files: File[]) => {
      const ok: QueuedFile[] = [];
      const bad: string[] = [];
      for (const file of files) {
        if (!accepts(file, accept)) {
          bad.push(file.name);
          continue;
        }
        ok.push({
          id: nextId(),
          file,
          status: "queued",
          progress: 0,
          originalSize: file.size,
          previewUrl:
            imagePreviews && file.type.startsWith("image/")
              ? URL.createObjectURL(file)
              : undefined,
        });
      }
      setRejected(bad);
      if (ok.length) {
        setItems((prev) => [...prev, ...ok]);
        void runQueue(ok);
      }
    },
    [accept, imagePreviews, runQueue],
  );

  const removeItem = React.useCallback((id: string) => {
    setItems((prev) => {
      const target = prev.find((it) => it.id === id);
      if (target?.previewUrl) URL.revokeObjectURL(target.previewUrl);
      return prev.filter((it) => it.id !== id);
    });
  }, []);

  const reset = React.useCallback(() => {
    setItems((prev) => {
      prev.forEach((it) => it.previewUrl && URL.revokeObjectURL(it.previewUrl));
      return [];
    });
    setRejected([]);
  }, []);

  const reRun = React.useCallback(() => {
    const all = itemsRef.current.filter((it) => it.status !== "processing");
    setItems((prev) =>
      prev.map((it) => ({ ...it, status: "queued", progress: 0 })),
    );
    void runQueue(all);
  }, [runQueue]);

  const onDownload = React.useCallback((item: QueuedFile) => {
    if (item.resultBlob && item.resultName) {
      downloadBlob(item.resultBlob, item.resultName);
    }
  }, []);

  const done = items.filter((it) => it.status === "done" && it.resultBlob);
  const onDownloadAll = React.useCallback(async () => {
    if (done.length === 0) return;
    await downloadAllAsZip(
      done.map((it) => ({ name: it.resultName!, blob: it.resultBlob! })),
      `${toolId}-fileshrinking.zip`,
    );
  }, [done, toolId]);

  // Aggregate savings summary.
  const totals = done.reduce(
    (acc, it) => {
      acc.original += it.originalSize;
      acc.output += it.resultSize ?? 0;
      return acc;
    },
    { original: 0, output: 0 },
  );
  const totalSaved = percentSaved(totals.original, totals.output);
  const oversize = softMaxBytes
    ? items.some((it) => it.originalSize > softMaxBytes)
    : false;

  return (
    <div className={cn("space-y-5", className)}>
      <Dropzone
        accept={accept}
        multiple={multiple}
        onFiles={addFiles}
        hint={dropHint}
      />

      {controls ? <div>{controls}</div> : null}

      {rejected.length > 0 ? (
        <Alert variant="destructive">
          <AlertDescription>
            Skipped {rejected.length} unsupported file
            {rejected.length > 1 ? "s" : ""}: {rejected.join(", ")}. This tool
            accepts {accept.join(", ")}.
          </AlertDescription>
        </Alert>
      ) : null}

      {oversize && softMaxMessage ? (
        <Alert>
          <AlertDescription>{softMaxMessage}</AlertDescription>
        </Alert>
      ) : null}

      {items.length > 0 ? (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="text-sm text-muted-foreground">
              {done.length > 0 ? (
                <span>
                  {done.length} of {items.length} done
                  {totals.output > 0 && totalSaved > 0 ? (
                    <>
                      {" · "}
                      <span className="font-medium text-foreground">
                        {formatBytes(totals.original)} →{" "}
                        {formatBytes(totals.output)}
                      </span>{" "}
                      <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                        (−{totalSaved}%)
                      </span>
                    </>
                  ) : null}
                </span>
              ) : (
                <span>{items.length} file(s) queued</span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={reRun}
                disabled={running}
              >
                <RotateCcw className="size-4" aria-hidden="true" />
                Re-compress
              </Button>
              {done.length > 1 ? (
                <Button size="sm" onClick={onDownloadAll} disabled={running}>
                  <Download className="size-4" aria-hidden="true" />
                  Download all (.zip)
                </Button>
              ) : null}
              <Button
                variant="ghost"
                size="sm"
                onClick={reset}
                disabled={running}
              >
                <Trash2 className="size-4" aria-hidden="true" />
                Clear
              </Button>
            </div>
          </div>

          <ul className="space-y-2">
            {items.map((item) => (
              <ResultCard
                key={item.id}
                item={item}
                onRemove={removeItem}
                onDownload={onDownload}
                showDimensions={showDimensions}
              />
            ))}
          </ul>
        </div>
      ) : (
        <p className="flex items-center justify-center gap-2 rounded-lg bg-muted/40 px-4 py-3 text-sm text-muted-foreground">
          <Sparkles className="size-4 text-brand" aria-hidden="true" />
          Add files above to start. Everything runs locally — your files never
          leave this device.
        </p>
      )}
    </div>
  );
}
