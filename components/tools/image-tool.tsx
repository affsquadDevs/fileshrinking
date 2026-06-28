"use client";

import * as React from "react";
import { Lightbulb } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ToolShell } from "@/components/tools/tool-shell";
import type { ProcessFn } from "@/components/tools/types";
import { compressImage } from "@/lib/compress/image-client";
import {
  FORMAT_META,
  mimeToFormat,
  type ImageCompressOptions,
  type ImageEncodeFormat,
  type ImageTargetFormat,
  type ResizeOptions,
} from "@/lib/compress/image-types";
import { withExt } from "@/lib/format";

const QUALITY_PRESETS = [
  { label: "Smallest", value: 45 },
  { label: "Balanced", value: 72 },
  { label: "High quality", value: 88 },
];

const OXIPNG_LEVELS = [
  { label: "Fast", value: 1 },
  { label: "Balanced", value: 3 },
  { label: "Max", value: 6 },
];

function Segmented<T extends string | number>({
  options,
  value,
  onChange,
  ariaLabel,
}: {
  options: { label: string; value: T }[];
  value: T;
  onChange: (v: T) => void;
  ariaLabel: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className="inline-flex flex-wrap gap-1 rounded-lg bg-muted p-1"
    >
      {options.map((opt) => (
        <button
          key={String(opt.value)}
          type="button"
          role="radio"
          aria-checked={value === opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
            value === opt.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

export interface ImageToolProps {
  toolId: string;
  accept: string[];
  /** Selectable output formats. One entry = fixed output (no picker). */
  outputFormats: ImageEncodeFormat[];
  /** Initial output target; "keep" = same format as source. */
  defaultTarget: ImageTargetFormat;
  defaultQuality?: number;
  showResize?: boolean;
  /** Resizer tool: resize is the point; default it on. */
  resizeByDefault?: boolean;
  /** Add a "Same format" (keep) option to the format picker. */
  allowKeep?: boolean;
}

export function ImageTool({
  toolId,
  accept,
  outputFormats,
  defaultTarget,
  defaultQuality = 75,
  showResize = true,
  resizeByDefault = false,
  allowKeep = false,
}: ImageToolProps) {
  const [target, setTarget] = React.useState<ImageTargetFormat>(defaultTarget);
  const [quality, setQuality] = React.useState(defaultQuality);
  const [oxipngLevel, setOxipngLevel] = React.useState(3);

  const [resizeMode, setResizeMode] =
    React.useState<ResizeOptions["mode"]>(resizeByDefault ? "percentage" : "none");
  const [percentage, setPercentage] = React.useState(50);
  const [rwidth, setRwidth] = React.useState<string>("");
  const [rheight, setRheight] = React.useState<string>("");
  const [keepAspect, setKeepAspect] = React.useState(true);

  const isPngOutput = target === "png";
  const formatOptions: { label: string; value: string }[] = [
    ...(allowKeep ? [{ label: "Same format", value: "keep" }] : []),
    ...outputFormats.map((f) => ({ label: FORMAT_META[f].label, value: f })),
  ];
  const showFormatPicker = formatOptions.length > 1;

  const resize: ResizeOptions = {
    mode: resizeMode,
    percentage,
    width: rwidth ? Number(rwidth) : undefined,
    height: rheight ? Number(rheight) : undefined,
    maintainAspectRatio: keepAspect,
  };

  const process: ProcessFn = React.useCallback(
    async (file, onProgress) => {
      const opts: ImageCompressOptions = {
        target,
        quality,
        progressive: true,
        oxipngLevel,
        resize,
      };
      const res = await compressImage(file, opts, onProgress);
      let blob: Blob = new Blob([res.buffer], { type: res.mime });
      let name = withExt(file.name, res.ext);
      let note: string | undefined;

      const sourceFormat = mimeToFormat(file.type);
      const effFormat: ImageEncodeFormat =
        target === "keep" ? sourceFormat ?? "png" : target;
      const sameFormat = sourceFormat === effFormat;
      const noResize = resize.mode === "none";

      // Honesty rule: if we re-encoded to the same format and it didn't get
      // smaller (and we didn't resize), keep the original.
      if (sameFormat && noResize && blob.size >= file.size) {
        blob = file;
        name = file.name;
        note = "Already well-optimized — kept your original (it was smaller).";
      } else if (blob.size >= file.size && noResize) {
        note = `The ${FORMAT_META[effFormat].label} version is larger than your original.`;
      }

      return { blob, name, width: res.width, height: res.height, note };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [target, quality, oxipngLevel, resizeMode, percentage, rwidth, rheight, keepAspect],
  );

  const controls = (
    <div className="space-y-5 rounded-xl border border-border bg-card p-5">
      {showFormatPicker ? (
        <div className="space-y-2">
          <Label>Output format</Label>
          <Segmented
            ariaLabel="Output format"
            value={target as string}
            onChange={(v) => setTarget(v as ImageTargetFormat)}
            options={formatOptions}
          />
        </div>
      ) : null}

      {!isPngOutput ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label htmlFor={`${toolId}-quality`}>Quality</Label>
            <span className="font-mono text-sm tabular-nums text-muted-foreground">
              {quality}
            </span>
          </div>
          <Slider
            id={`${toolId}-quality`}
            min={1}
            max={100}
            step={1}
            value={[quality]}
            onValueChange={(v) =>
              setQuality(Array.isArray(v) ? v[0] : (v as number))
            }
            aria-label="Compression quality"
          />
          <div className="flex flex-wrap gap-2">
            {QUALITY_PRESETS.map((p) => (
              <Button
                key={p.value}
                type="button"
                size="sm"
                variant={quality === p.value ? "default" : "outline"}
                onClick={() => setQuality(p.value)}
              >
                {p.label}
              </Button>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            Lower quality = smaller file. 70–80 is usually indistinguishable from
            the original for photos.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <Label>Optimization level (lossless)</Label>
          <Segmented
            ariaLabel="OxiPNG optimization level"
            value={oxipngLevel}
            onChange={setOxipngLevel}
            options={OXIPNG_LEVELS}
          />
          <p className="flex items-start gap-1.5 text-xs text-muted-foreground">
            <Lightbulb
              className="mt-0.5 size-3.5 shrink-0 text-brand"
              aria-hidden="true"
            />
            PNG optimization is lossless, so savings are modest. For big cuts on
            photos, convert to WebP or AVIF instead.
          </p>
        </div>
      )}

      {showResize ? (
        <div className="space-y-3 border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <Label>Resize</Label>
            <Segmented
              ariaLabel="Resize mode"
              value={resizeMode}
              onChange={(v) => setResizeMode(v as ResizeOptions["mode"])}
              options={[
                { label: "Off", value: "none" },
                { label: "Percent", value: "percentage" },
                { label: "Pixels", value: "dimensions" },
              ]}
            />
          </div>

          {resizeMode === "percentage" ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Scale</span>
                <span className="font-mono text-sm tabular-nums text-muted-foreground">
                  {percentage}%
                </span>
              </div>
              <Slider
                min={5}
                max={100}
                step={5}
                value={[percentage]}
                onValueChange={(v) =>
                  setPercentage(Array.isArray(v) ? v[0] : (v as number))
                }
                aria-label="Resize percentage"
              />
            </div>
          ) : null}

          {resizeMode === "dimensions" ? (
            <div className="flex flex-wrap items-end gap-3">
              <div className="space-y-1">
                <Label htmlFor={`${toolId}-w`} className="text-xs">
                  Width (px)
                </Label>
                <Input
                  id={`${toolId}-w`}
                  type="number"
                  min={1}
                  inputMode="numeric"
                  value={rwidth}
                  onChange={(e) => setRwidth(e.target.value)}
                  className="w-28"
                  placeholder="auto"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor={`${toolId}-h`} className="text-xs">
                  Height (px)
                </Label>
                <Input
                  id={`${toolId}-h`}
                  type="number"
                  min={1}
                  inputMode="numeric"
                  value={rheight}
                  onChange={(e) => setRheight(e.target.value)}
                  className="w-28"
                  placeholder="auto"
                />
              </div>
              <label className="flex items-center gap-2 pb-2 text-sm text-muted-foreground">
                <input
                  type="checkbox"
                  checked={keepAspect}
                  onChange={(e) => setKeepAspect(e.target.checked)}
                  className="size-4 accent-[var(--brand)]"
                />
                Keep aspect ratio
              </label>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );

  return (
    <ToolShell
      toolId={toolId}
      formatLabel={target === "keep" ? "auto" : FORMAT_META[target].label}
      accept={accept}
      process={process}
      controls={controls}
      showDimensions
      imagePreviews
      dropHint="JPEG, PNG, WebP, AVIF and GIF supported."
    />
  );
}
