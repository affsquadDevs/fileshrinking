import * as React from "react";
import Link from "next/link";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * A Next.js <Link> styled as a button. Use this anywhere you want a
 * button-looking navigation control — it avoids the Base UI `render` prop
 * dance and keeps the component a server component.
 */
export function LinkButton({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Link> &
  VariantProps<typeof buttonVariants>) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </Link>
  );
}
