/**
 * Structured-data (JSON-LD) builders. Pure functions returning schema.org
 * objects — no JSX — so they are importable anywhere. Validate output against
 * Google's Rich Results Test. All @id values use absolute URLs anchored to the
 * canonical domain for cross-referencing between entities.
 */
import { SITE } from "@/lib/site-config";

export function abs(path = "/"): string {
  if (path.startsWith("http")) return path;
  return new URL(path, SITE.url).toString();
}

const ORG_ID = `${SITE.url}/#organization`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: abs("/icons/icon-512.png"),
      width: 512,
      height: 512,
    },
    description: SITE.description,
    email: SITE.contactEmail,
    foundingDate: String(SITE.foundingYear),
    sameAs: Object.values(SITE.social),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export interface BreadcrumbEntry {
  name: string;
  /** path or absolute url; omit for the current (last) item */
  url?: string;
}

export function breadcrumbSchema(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: abs(item.url) } : {}),
    })),
  };
}

export function softwareApplicationSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: opts.name,
    description: opts.description,
    url: abs(opts.url),
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any (web browser)",
    browserRequirements: "Requires a modern browser with WebAssembly support",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    publisher: { "@id": ORG_ID },
    isAccessibleForFree: true,
    permissions: "No upload required — files are processed locally",
  };
}

export interface HowToStep {
  name: string;
  text: string;
}

export function howToSchema(opts: {
  name: string;
  description: string;
  steps: HowToStep[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: opts.name,
    description: opts.description,
    totalTime: "PT1M",
    step: opts.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export interface FaqEntry {
  q: string;
  /** plain-text answer for schema (strip markup) */
  a: string;
}

export function faqSchema(items: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.title,
    description: opts.description,
    url: abs(`/blog/${opts.slug}`),
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(`/blog/${opts.slug}`) },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    image: opts.image ? abs(opts.image) : abs("/og/default.png"),
    author: {
      "@type": "Person",
      name: opts.authorName,
      ...(opts.authorUrl ? { url: abs(opts.authorUrl) } : {}),
    },
    publisher: { "@id": ORG_ID },
  };
}

export function personSchema(opts: {
  name: string;
  description: string;
  url?: string;
  image?: string;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: opts.name,
    description: opts.description,
    ...(opts.url ? { url: abs(opts.url) } : {}),
    ...(opts.image ? { image: abs(opts.image) } : {}),
    worksFor: { "@id": ORG_ID },
    ...(opts.sameAs ? { sameAs: opts.sameAs } : {}),
  };
}
