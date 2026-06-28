import * as React from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getT } from "@/lib/i18n/messages";

/**
 * The site's core trust signal: files never leave the device. Used near every
 * dropzone and across content pages. `variant` controls visual weight.
 * Pure function (no hooks), so it renders in both server and client contexts;
 * pass `locale` to localize the default text.
 */
export function PrivacyBadge({
  className,
  variant = "soft",
  locale = DEFAULT_LOCALE,
  children,
}: {
  className?: string;
  variant?: "soft" | "inline" | "pill";
  locale?: Locale;
  children?: React.ReactNode;
}) {
  const content = children ?? getT(locale)("common.privacyBadge");
  if (variant === "pill") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-medium text-brand",
          className,
        )}
      >
        <ShieldCheck className="size-3.5" aria-hidden="true" />
        {content}
      </span>
    );
  }

  if (variant === "inline") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 text-sm text-muted-foreground",
          className,
        )}
      >
        <ShieldCheck className="size-4 text-brand" aria-hidden="true" />
        {content}
      </span>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg border border-brand/20 bg-brand/5 px-4 py-2.5 text-sm font-medium text-foreground",
        className,
      )}
    >
      <ShieldCheck className="size-5 shrink-0 text-brand" aria-hidden="true" />
      <span>{content}</span>
    </div>
  );
}
