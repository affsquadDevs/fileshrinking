"use client";

import * as React from "react";
import { UploadCloud } from "lucide-react";
import { cn } from "@/lib/utils";
import { PrivacyBadge } from "@/components/privacy-badge";
import { useT, useLocale } from "@/components/i18n/locale-provider";

/**
 * Accessible drag-and-drop + click-to-browse + paste dropzone. Calls onFiles
 * with the selected File list. Keyboard operable (Enter/Space) and announces
 * its drag state visually.
 */
export function Dropzone({
  accept,
  multiple = true,
  onFiles,
  disabled,
  hint,
  className,
}: {
  accept: string[];
  multiple?: boolean;
  onFiles: (files: File[]) => void;
  disabled?: boolean;
  hint?: React.ReactNode;
  className?: string;
}) {
  const t = useT();
  const locale = useLocale();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = React.useState(false);
  const acceptAttr = accept.join(",");

  const open = React.useCallback(() => {
    if (!disabled) inputRef.current?.click();
  }, [disabled]);

  function handleSelected(list: FileList | null) {
    if (!list || list.length === 0) return;
    onFiles(Array.from(list));
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    if (disabled) return;
    handleSelected(e.dataTransfer.files);
  }

  // Paste-from-clipboard support while the dropzone is on the page.
  React.useEffect(() => {
    function onPaste(e: ClipboardEvent) {
      if (disabled) return;
      const files = e.clipboardData?.files;
      if (files && files.length) {
        e.preventDefault();
        handleSelected(files);
      }
    }
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      aria-label={t("tool.dropAria")}
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
        if (!disabled) setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={onDrop}
      className={cn(
        "group relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-12 text-center transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        dragging
          ? "border-brand bg-brand/5"
          : "border-border hover:border-brand/50 hover:bg-muted/40",
        disabled && "cursor-not-allowed opacity-60",
        !disabled && "cursor-pointer",
        className,
      )}
    >
      <input
        ref={inputRef}
        type="file"
        accept={acceptAttr}
        multiple={multiple}
        className="sr-only"
        onChange={(e) => {
          handleSelected(e.target.files);
          e.target.value = "";
        }}
      />
      <span
        className={cn(
          "flex size-12 items-center justify-center rounded-full bg-brand/10 text-brand transition-transform",
          dragging && "scale-110",
        )}
      >
        <UploadCloud className="size-6" aria-hidden="true" />
      </span>
      <div>
        <p className="text-base font-medium">
          {dragging ? t("tool.dropActive") : t("tool.dropTitle")}
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          {hint ?? t("tool.dropHintDefault")}
        </p>
      </div>
      <PrivacyBadge variant="inline" className="mt-1" locale={locale} />
    </div>
  );
}
