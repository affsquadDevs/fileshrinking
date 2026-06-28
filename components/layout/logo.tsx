"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site-config";
import { localizePath } from "@/lib/i18n/config";
import { useLocale } from "@/components/i18n/locale-provider";

/**
 * Inline SVG wordmark + glyph. The glyph is a stylised "shrink" — two arrows
 * compressing toward a centre square. Self-contained (no image request) so it
 * never causes layout shift and inherits currentColor for theming.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn("size-7", className)}
    >
      <rect
        x="3"
        y="3"
        width="26"
        height="26"
        rx="7"
        className="fill-brand"
      />
      {/* compressing arrows */}
      <path
        d="M10 10l4 4m0 0v-3m0 3h-3"
        stroke="var(--brand-foreground)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 22l-4-4m0 0v3m0-3h3"
        stroke="var(--brand-foreground)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  const locale = useLocale();
  return (
    <Link
      href={localizePath("/", locale)}
      className={cn(
        "flex items-center gap-2 font-semibold tracking-tight",
        "rounded-md focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-2",
        className,
      )}
      aria-label={`${SITE.name} — home`}
    >
      <LogoMark />
      <span className="text-lg">
        File<span className="text-brand">Shrinking</span>
      </span>
    </Link>
  );
}
