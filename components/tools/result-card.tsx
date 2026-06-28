"use client";

import * as React from "react";
import {
  Download,
  X,
  FileIcon,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Info,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { formatBytes, percentSaved } from "@/lib/format";
import { useT } from "@/components/i18n/locale-provider";
import type { QueuedFile } from "@/components/tools/types";

export function ResultCard({
  item,
  onRemove,
  onDownload,
  showDimensions = false,
}: {
  item: QueuedFile;
  onRemove: (id: string) => void;
  onDownload: (item: QueuedFile) => void;
  showDimensions?: boolean;
}) {
  const t = useT();
  const saved =
    item.resultSize != null
      ? percentSaved(item.originalSize, item.resultSize)
      : null;
  const grew = saved != null && saved < 0;

  return (
    <li className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
      {/* thumbnail / icon */}
      <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted">
        {item.previewUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.previewUrl}
            alt=""
            className="size-full object-cover"
            loading="lazy"
          />
        ) : (
          <FileIcon className="size-6 text-muted-foreground" aria-hidden="true" />
        )}
      </div>

      {/* details */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium" title={item.file.name}>
          {item.resultName ?? item.file.name}
        </p>

        {item.status === "processing" ? (
          <div className="mt-1.5">
            <Progress
              value={Math.round(item.progress * 100)}
              aria-label={`${t("tool.compressing")} ${item.file.name}`}
            />
            <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <Loader2 className="size-3 animate-spin" aria-hidden="true" />
              {item.progress < 0.1 ? t("tool.preparing") : t("tool.compressing")}
            </p>
          </div>
        ) : item.status === "error" ? (
          <p className="mt-1 flex items-center gap-1 text-xs text-destructive">
            <AlertCircle className="size-3.5 shrink-0" aria-hidden="true" />
            {item.error ?? t("tool.failed")}
          </p>
        ) : item.status === "done" ? (
          <div className="mt-1 space-y-0.5">
            <p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted-foreground">
              <span>{formatBytes(item.originalSize)}</span>
              <span aria-hidden="true">→</span>
              <span className="font-medium text-foreground">
                {formatBytes(item.resultSize ?? 0)}
              </span>
              {saved != null ? (
                <span
                  className={cn(
                    "inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[11px] font-semibold",
                    grew
                      ? "bg-muted text-muted-foreground"
                      : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
                  )}
                >
                  {grew ? t("tool.noGain") : `−${saved}%`}
                </span>
              ) : null}
            </p>
            {showDimensions && item.resultWidth ? (
              <p className="text-xs text-muted-foreground">
                {item.resultWidth} × {item.resultHeight} px
              </p>
            ) : null}
            {item.note ? (
              <p className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
                <Info className="size-3 shrink-0" aria-hidden="true" />
                {item.note}
              </p>
            ) : null}
          </div>
        ) : (
          <p className="mt-1 text-xs text-muted-foreground">
            {formatBytes(item.originalSize)} · {t("tool.queued")}
          </p>
        )}
      </div>

      {/* actions */}
      <div className="flex shrink-0 items-center gap-1">
        {item.status === "done" && item.resultBlob ? (
          <Button
            size="sm"
            variant="secondary"
            onClick={() => onDownload(item)}
            aria-label={`${t("tool.download")} ${item.resultName ?? item.file.name}`}
          >
            <Download className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">{t("tool.download")}</span>
          </Button>
        ) : item.status === "done" ? (
          <CheckCircle2
            className="size-5 text-emerald-500"
            aria-hidden="true"
          />
        ) : null}
        <Button
          size="icon"
          variant="ghost"
          onClick={() => onRemove(item.id)}
          aria-label={`${t("tool.remove")} ${item.file.name}`}
        >
          <X className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </li>
  );
}
