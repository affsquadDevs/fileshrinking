import type { ReactNode } from "react";

/** Translated content for a static content page (legal, about, …). */
export interface LocalizedContentPage {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro?: ReactNode;
  /** ISO date, e.g. "2026-06-27". */
  lastUpdated?: string;
  /** Prose body (JSX): h2[id]/h3/p/ul/strong, external <a>, localized <Link>. */
  body: ReactNode;
}
