import { notFound } from "next/navigation";
import {
  PREFIXED_LOCALES,
  LOCALE_META,
  isLocale,
  DEFAULT_LOCALE,
  type Locale,
} from "@/lib/i18n/config";

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Only prefixed (non-default) locales are valid here; English lives at root.
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) {
    notFound();
  }
  return <div lang={LOCALE_META[locale as Locale].bcp47}>{children}</div>;
}
