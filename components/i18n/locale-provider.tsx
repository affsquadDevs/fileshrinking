"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { splitLocale, type Locale } from "@/lib/i18n/config";
import { getT, type TFunction } from "@/lib/i18n/messages";

/**
 * Locale for client components is derived from the URL pathname. This means
 * chrome rendered in the (single) root layout — Header, Footer, consent banner —
 * localizes correctly on /es/* without needing a context provider above them.
 * Server components receive their locale as a prop and use getT() directly.
 */
export function useLocale(): Locale {
  const pathname = usePathname() || "/";
  return splitLocale(pathname).locale;
}

export function useT(): TFunction {
  const locale = useLocale();
  return React.useMemo(() => getT(locale), [locale]);
}

/** Kept as a passthrough for API stability; locale now comes from the URL. */
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
