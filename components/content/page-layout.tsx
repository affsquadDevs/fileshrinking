import * as React from "react";
import { CalendarClock } from "lucide-react";
import { Container } from "@/components/layout/container";
import { Breadcrumbs, type Crumb } from "@/components/layout/breadcrumbs";
import { Prose } from "@/components/content/prose";

/**
 * Generic scaffold for static content pages (legal, about, etc.): breadcrumbs,
 * a page header, optional "last updated" line, and Prose-wrapped body.
 */
export function ContentPageLayout({
  title,
  intro,
  lastUpdated,
  crumbs,
  children,
  wide = false,
}: {
  title: string;
  intro?: React.ReactNode;
  lastUpdated?: string;
  crumbs?: Crumb[];
  children: React.ReactNode;
  wide?: boolean;
}) {
  const formatted = lastUpdated
    ? new Date(lastUpdated + "T00:00:00Z").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      })
    : null;

  return (
    <Container className={wide ? "py-8 lg:py-10" : "max-w-3xl py-8 lg:py-10"}>
      <Breadcrumbs
        items={crumbs ?? [{ label: "Home", href: "/" }, { label: title }]}
        className="mb-6"
      />
      <header className="mb-8">
        <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            {intro}
          </p>
        ) : null}
        {formatted ? (
          <p className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
            <CalendarClock className="size-3.5" aria-hidden="true" />
            Last updated {formatted}
          </p>
        ) : null}
      </header>
      <Prose>{children}</Prose>
    </Container>
  );
}
