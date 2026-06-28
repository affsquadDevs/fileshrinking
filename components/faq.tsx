import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FaqItem {
  q: string;
  a: React.ReactNode;
}

/**
 * Reusable FAQ accordion. Pair with FAQPage JSON-LD (lib/seo/schema.ts) on
 * pages that use it. Encapsulates the Base UI accordion API so callers only
 * pass data.
 */
export function FAQ({
  items,
  className,
  defaultOpenFirst = false,
}: {
  items: FaqItem[];
  className?: string;
  defaultOpenFirst?: boolean;
}) {
  return (
    <Accordion
      multiple
      defaultValue={defaultOpenFirst ? ["faq-0"] : []}
      className={className}
    >
      {items.map((item, i) => (
        <AccordionItem value={`faq-${i}`} key={i}>
          <AccordionTrigger className="text-left text-base">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
