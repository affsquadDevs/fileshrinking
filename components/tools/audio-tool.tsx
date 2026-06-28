"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ToolShell } from "@/components/tools/tool-shell";
import type { ProcessFn } from "@/components/tools/types";
import { compressAudio } from "@/lib/compress/ffmpeg-client";
import { AUDIO_BITRATES, type AudioFormat } from "@/lib/compress/media-types";

function Segmented<T extends string>({
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
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={value === o.value}
          onClick={() => onChange(o.value)}
          className={cn(
            "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
            value === o.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function AudioTool() {
  const [format, setFormat] = React.useState<AudioFormat>("mp3");
  const [bitrate, setBitrate] = React.useState<string>("128k");

  const process: ProcessFn = React.useCallback(
    async (file, onProgress) => {
      const out = await compressAudio(file, { format, bitrate }, onProgress);
      let note: string | undefined;
      if (out.blob.size >= file.size) {
        note =
          "The result isn't smaller — try a lower bitrate. Your file may already be at or below this bitrate.";
      }
      return { blob: out.blob, name: out.name, note };
    },
    [format, bitrate],
  );

  const controls = (
    <div className="space-y-5 rounded-xl border border-border bg-card p-5">
      <div className="space-y-2">
        <Label>Output format</Label>
        <Segmented
          ariaLabel="Audio output format"
          value={format}
          onChange={setFormat}
          options={[
            { label: "MP3", value: "mp3" },
            { label: "AAC (.m4a)", value: "aac" },
          ]}
        />
      </div>

      <div className="space-y-2">
        <Label>Bitrate</Label>
        <Segmented
          ariaLabel="Audio bitrate"
          value={bitrate}
          onChange={setBitrate}
          options={AUDIO_BITRATES.map((b) => ({ label: b, value: b }))}
        />
        <p className="text-xs text-muted-foreground">
          Lower bitrate = smaller file. 128&nbsp;kbps is a good balance for music;
          96&nbsp;kbps is fine for speech.
        </p>
      </div>
    </div>
  );

  return (
    <ToolShell
      toolId="audio-compressor"
      formatLabel={format.toUpperCase()}
      accept={["audio/*"]}
      process={process}
      controls={controls}
      dropHint="MP3, WAV, AAC, M4A, OGG, FLAC — processed locally."
    />
  );
}
