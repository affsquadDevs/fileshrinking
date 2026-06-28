"use client";

import * as React from "react";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getMessages, translate, type TFunction } from "@/lib/i18n/messages";

interface LocaleContextValue {
  locale: Locale;
  t: TFunction;
}

function makeValue(locale: Locale): LocaleContextValue {
  const messages = getMessages(locale);
  return { locale, t: (key, params) => translate(messages, key, params) };
}

// Default to English so any client component works even without a provider
// (the English site at the root relies on this).
const LocaleContext = React.createContext<LocaleContextValue>(
  makeValue(DEFAULT_LOCALE),
);

export function LocaleProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const value = React.useMemo(() => makeValue(locale), [locale]);
  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): Locale {
  return React.useContext(LocaleContext).locale;
}

export function useT(): TFunction {
  return React.useContext(LocaleContext).t;
}
