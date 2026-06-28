import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";
import type { ToolDef } from "@/lib/site-config";
import { DEFAULT_LOCALE, localizePath, type Locale } from "@/lib/i18n/config";
import { localizedTool } from "@/lib/i18n/content";
import { getT } from "@/lib/i18n/messages";

export function ToolCard({
  tool,
  locale = DEFAULT_LOCALE,
  className,
}: {
  tool: ToolDef;
  locale?: Locale;
  className?: string;
}) {
  const Icon = getIcon(tool.icon);
  const label = localizedTool(tool.slug, locale);
  return (
    <Link
      href={localizePath(`/${tool.slug}`, locale)}
      className={cn(
        "group relative flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-all",
        "hover:border-brand/40 hover:shadow-md hover:shadow-brand/5",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className,
      )}
    >
      <span className="flex size-10 items-center justify-center rounded-lg bg-brand/10 text-brand">
        <Icon className="size-5" aria-hidden="true" />
      </span>
      <div className="flex-1">
        <h3 className="font-semibold tracking-tight">{label.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{label.description}</p>
      </div>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-brand">
        {getT(locale)("common.openTool")}
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
