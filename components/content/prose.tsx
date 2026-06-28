import * as React from "react";
import { cn } from "@/lib/utils";

/** Long-form article typography. Styling lives in the `.prose` class
 *  (app/globals.css) so it stays in sync with the theme tokens. */
export function Prose({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("prose", className)} {...props}>
      {children}
    </div>
  );
}
