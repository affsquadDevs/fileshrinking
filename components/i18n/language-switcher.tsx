"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, Check } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useT, useLocale } from "@/components/i18n/locale-provider";
import { LIVE_LOCALES, LOCALE_META, localizePath, splitLocale } from "@/lib/i18n/config";

export function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const current = useLocale();
  const t = useT();
  const { path } = splitLocale(pathname);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("langSwitcher.label")}
        className={cn(buttonVariants({ variant: "ghost", size: "icon" }))}
      >
        <Languages className="size-5" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-44">
        {LIVE_LOCALES.map((loc) => (
          <DropdownMenuItem
            key={loc}
            render={
              <Link href={localizePath(path, loc)} hrefLang={LOCALE_META[loc].bcp47} />
            }
            className="flex items-center justify-between gap-3"
          >
            <span>{LOCALE_META[loc].name}</span>
            {loc === current ? (
              <Check className="size-4 text-brand" aria-hidden="true" />
            ) : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
