"use client";

import * as React from "react";
import { Lightbulb } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ToolShell } from "@/components/tools/tool-shell";
import type { ProcessFn } from "@/components/tools/types";
import { compressPdf } from "@/lib/compress/pdf-client";
import { PDF_PRESETS, type PdfPresetKey } from "@/lib/compress/pdf-types";
import { withExt } from "@/lib/format";

export function PdfTool() {
  const [preset, setPreset] = React.useState<PdfPresetKey>("balanced");
  const [quality, setQuality] = React.useState<number>(
    PDF_PRESETS.balanced.quality,
  );
  const [maxDim, setMaxDim] = React.useState<number>(
    PDF_PRESETS.balanced.maxImageDimension,
  );

  function applyPreset(key: PdfPresetKey) {
    setPreset(key);
    setQuality(PDF_PRESETS[key].quality);
    setMaxDim(PDF_PRESETS[key].maxImageDimension);
  }

  const process: ProcessFn = React.useCallback(
    async (file, onProgress) => {
      const res = await compressPdf(
        file,
        { quality, maxImageDimension: maxDim },
        onProgress,
      );
      const blob = new Blob([res.buffer], { type: "application/pdf" });
      const name = file.name.toLowerCase().endsWith(".pdf")
        ? file.name
        : withExt(file.name, "pdf");
      return { blob, name, note: res.note };
    },
    [quality, maxDim],
  );

  const controls = (
    <div className="space-y-5 rounded-xl border border-border bg-card p-5">
      <div className="space-y-2">
        <Label>Compression level</Label>
        <div
          role="radiogroup"
          aria-label="Compression level"
          className="inline-flex flex-wrap gap-1 rounded-lg bg-muted p-1"
        >
          {(Object.keys(PDF_PRESETS) as PdfPresetKey[]).map((key) => (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={preset === key}
              onClick={() => applyPreset(key)}
              className={cn(
                "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                preset === key
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {PDF_PRESETS[key].label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="pdf-quality">Image quality</Label>
          <span className="font-mono text-sm tabular-nums text-muted-foreground">
            {quality}
          </span>
        </div>
        <Slider
          id="pdf-quality"
          min={20}
          max={95}
          step={1}
          value={[quality]}
          onValueChange={(v) => {
            setQuality(Array.isArray(v) ? v[0] : (v as number));
          }}
          aria-label="PDF image quality"
        />
      </div>

      <p className="flex items-start gap-1.5 text-xs text-muted-foreground">
        <Lightbulb
          className="mt-0.5 size-3.5 shrink-0 text-brand"
          aria-hidden="true"
        />
        Works best on image-heavy or scanned PDFs. Text- and vector-only PDFs
        have little to compress — we&rsquo;ll keep your original if it&rsquo;s
        already smaller.
      </p>
    </div>
  );

  return (
    <ToolShell
      toolId="pdf-compressor"
      formatLabel="PDF"
      accept={["application/pdf"]}
      process={process}
      controls={controls}
      dropHint="PDF files only. Processed entirely on your device."
    />
  );
}
