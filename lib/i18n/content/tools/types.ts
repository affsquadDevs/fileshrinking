import type { ReactNode } from "react";

export interface LocalizedHowToStep {
  name: string;
  text: string;
}

export interface LocalizedFaq {
  /** Question. */
  q: string;
  /** Rendered answer (may contain JSX such as links). */
  a: ReactNode;
  /** Plain-text answer for FAQPage structured data. */
  text: string;
}

/** Translated content for one tool page. Mirrors the props ToolPageLayout
 *  consumes; the interactive tool component itself comes from toolRenderer(). */
export interface LocalizedToolContent {
  /** ≤60 chars. */
  metaTitle: string;
  /** ≤155 chars. */
  metaDescription: string;
  heading: string;
  intro: ReactNode;
  /** ISO date, e.g. "2026-06-28". */
  lastUpdated: string;
  howTo: {
    name: string;
    description: string;
    steps: LocalizedHowToStep[];
  };
  faqs: LocalizedFaq[];
  /** Long-form body (JSX): h2[id]/p/ul/strong, external <a>, localized <Link>. */
  content: ReactNode;
}
