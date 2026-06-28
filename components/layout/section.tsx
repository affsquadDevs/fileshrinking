import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

export function Section({
  className,
  containerClassName,
  children,
  ...props
}: React.ComponentProps<"section"> & { containerClassName?: string }) {
  return (
    <section className={cn("py-12 sm:py-16", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
