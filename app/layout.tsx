import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { ConsentModeScript } from "@/components/consent/consent-mode-script";
import { GtmScript, GtmNoScript } from "@/components/analytics/gtm";
import { AdSenseLoader } from "@/components/analytics/adsense-loader";
import { ConsentBanner } from "@/components/consent/consent-banner";
import { SiteJsonLd } from "@/components/seo/site-json-ld";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s ${SITE.titleSeparator} ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  referrer: "strict-origin-when-cross-origin",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    locale: SITE.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    site: SITE.twitterHandle,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <head>
        {/* 1. Consent Mode v2 defaults (all denied) — MUST come before GTM. */}
        <ConsentModeScript />
        {/* 2. Google Tag Manager loader. */}
        <GtmScript />
      </head>
      <body className="flex min-h-full flex-col">
        {/* GTM noscript fallback — first child of <body> per Google spec. */}
        <GtmNoScript />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:shadow focus:ring-2 focus:ring-ring"
          >
            Skip to content
          </a>
          <Header />
          <main id="main" className="flex-1">
            {children}
          </main>
          <Footer />
          <Toaster richColors closeButton position="bottom-right" />
          <ConsentBanner />
          {/* AdSense library — injected only after ads consent is granted. */}
          <AdSenseLoader />
        </ThemeProvider>
        {/* Site-wide Organization + WebSite (SearchAction) structured data. */}
        <SiteJsonLd />
      </body>
    </html>
  );
}
