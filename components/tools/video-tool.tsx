"use client";

import * as React from "react";
import { Clock } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ToolShell } from "@/components/tools/tool-shell";
import type { ProcessFn } from "@/components/tools/types";
import { compressVideo } from "@/lib/compress/ffmpeg-client";
import {
  VIDEO_PRESETS,
  VIDEO_SOFT_MAX_BYTES,
  type VideoPresetKey,
} from "@/lib/compress/media-types";

export function VideoTool({
  accept = ["video/*"],
}: {
  accept?: string[];
}) {
  const [preset, setPreset] = React.useState<VideoPresetKey>("balanced");
  const [crf, setCrf] = React.useState<number>(VIDEO_PRESETS.balanced.crf);
  const [maxHeight, setMaxHeight] = React.useState<number>(
    VIDEO_PRESETS.balanced.maxHeight,
  );

  function applyPreset(key: VideoPresetKey) {
    setPreset(key);
    setCrf(VIDEO_PRESETS[key].crf);
    setMaxHeight(VIDEO_PRESETS[key].maxHeight);
  }

  const process: ProcessFn = React.useCallback(
    async (file, onProgress) => {
      const out = await compressVideo(
        file,
        {
          codec: "h264",
          crf,
          maxHeight,
          audioBitrate: VIDEO_PRESETS[preset].audioBitrate,
        },
        onProgress,
      );
      let note: string | undefined;
      if (out.blob.size >= file.size) {
        note =
          "The compressed video isn't smaller — your file is already efficiently encoded. Try a lower quality or smaller resolution.";
      }
      return { blob: out.blob, name: out.name, note };
    },
    [crf, maxHeight, preset],
  );

  const controls = (
    <div className="space-y-5 rounded-xl border border-border bg-card p-5">
      <div className="space-y-2">
        <Label>Quality preset</Label>
        <div
          role="radiogroup"
          aria-label="Quality preset"
          className="inline-flex flex-wrap gap-1 rounded-lg bg-muted p-1"
        >
          {(Object.keys(VIDEO_PRESETS) as VideoPresetKey[]).map((key) => (
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
              {VIDEO_PRESETS[key].label}
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          Output is H.264 (MP4) for maximum compatibility. Lower presets shrink
          the resolution and bitrate for much smaller files.
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Label htmlFor="video-crf">Quality (CRF)</Label>
          <span className="font-mono text-sm tabular-nums text-muted-foreground">
            {crf}
          </span>
        </div>
        <Slider
          id="video-crf"
          min={18}
          max={36}
          step={1}
          value={[crf]}
          onValueChange={(v) => setCrf(Array.isArray(v) ? v[0] : (v as number))}
          aria-label="Video quality (CRF)"
        />
        <p className="text-xs text-muted-foreground">
          Lower CRF = higher quality and larger file. 23–28 is a good range.
        </p>
      </div>
    </div>
  );

  return (
    <ToolShell
      toolId="video-compressor"
      formatLabel="MP4"
      accept={accept}
      process={process}
      controls={controls}
      softMaxBytes={VIDEO_SOFT_MAX_BYTES}
      softMaxMessage={
        <span className="flex items-start gap-2">
          <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>
            One or more videos are large (over ~150&nbsp;MB). Compression runs
            entirely on your device with single-threaded ffmpeg, so big or long
            videos can be slow and may fail on low-memory devices. Smaller clips
            work best.
          </span>
        </span>
      }
      dropHint="MP4, MOV, WebM, MKV, AVI — processed locally, never uploaded."
    />
  );
}
