"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  ADS_ENABLED,
  ADSENSE_CLIENT,
  AD_SLOTS,
  AD_FORMATS,
  type AdSlotName,
} from "@/lib/ads-config";
import {
  CONSENT_UPDATED_EVENT,
  readConsent,
  type ConsentChoice,
} from "@/lib/consent";

/**
 * Policy-compliant, CLS-safe ad slot.
 *
 * - Always reserves its placement height, so nothing shifts when an ad loads.
 * - Renders NOTHING billable until ads consent is granted.
 * - Until real slot IDs exist (ADS_ENABLED=false), shows a clearly-labelled
 *   placeholder of the exact final size so layouts are finished pre-launch.
 * - Never throws if AdSense is blocked or unavailable.
 *
 * Never place this inside or directly adjacent to interactive tool controls,
 * dropzones, or download buttons (AdSense accidental-click policy). Use it
 * between content sections, in the sidebar, or in the footer region only.
 */
export function AdUnit({
  name,
  className,
  responsive = true,
}: {
  name: AdSlotName;
  className?: string;
  responsive?: boolean;
}) {
  const fmt = AD_FORMATS[name];
  const slot = AD_SLOTS[name];
  const realAds = ADS_ENABLED && Boolean(slot);

  const [adsConsent, setAdsConsent] = React.useState(false);
  const insRef = React.useRef<HTMLModElement | null>(null);
  const pushed = React.useRef(false);

  React.useEffect(() => {
    setAdsConsent(Boolean(readConsent()?.ads));
    function onConsent(e: Event) {
      const detail = (e as CustomEvent<ConsentChoice>).detail;
      setAdsConsent(Boolean(detail?.ads));
    }
    window.addEventListener(CONSENT_UPDATED_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onConsent);
  }, []);

  React.useEffect(() => {
    if (!realAds || !adsConsent || pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* blocked or not ready — placeholder/empty space remains, no error */
    }
  }, [realAds, adsConsent]);

  const reserve: React.CSSProperties = { minHeight: fmt.minHeight };

  // Pre-approval: show a labelled placeholder so the final layout is visible.
  if (!realAds) {
    return (
      <div
        className={cn("mx-auto w-full max-w-3xl", className)}
        role="complementary"
        aria-label="Advertisement placeholder"
      >
        <div
          style={reserve}
          className="flex w-full items-center justify-center rounded-lg border border-dashed border-border bg-muted/40 text-xs font-medium uppercase tracking-wide text-muted-foreground"
        >
          {fmt.label} · reserved {fmt.minHeight}px
        </div>
      </div>
    );
  }

  // Live ads, but consent not yet granted: reserve space, render nothing.
  if (!adsConsent) {
    return (
      <div
        className={cn("mx-auto w-full max-w-3xl", className)}
        style={reserve}
        aria-hidden="true"
      />
    );
  }

  // Live ads + consent granted.
  return (
    <div
      className={cn("mx-auto w-full max-w-3xl", className)}
      role="complementary"
      aria-label={fmt.label}
    >
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", ...reserve }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format={responsive ? "auto" : undefined}
        data-full-width-responsive={responsive ? "true" : undefined}
      />
    </div>
  );
}
