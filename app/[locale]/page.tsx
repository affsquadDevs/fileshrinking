import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomeView } from "@/components/pages/home-view";
import { buildMetadata } from "@/lib/seo/metadata";
import { getHomeContent } from "@/lib/i18n/content/home";
import {
  PREFIXED_LOCALES,
  isLocale,
  DEFAULT_LOCALE,
  type Locale,
} from "@/lib/i18n/config";

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const c = getHomeContent(locale as Locale);
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: "/",
    locale: locale as Locale,
  });
}

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale) || locale === DEFAULT_LOCALE) notFound();
  return <HomeView locale={locale as Locale} />;
}
