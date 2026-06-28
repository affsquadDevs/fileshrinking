/**
 * Thin dataLayer event helper for tool-usage analytics. Events are only pushed
 * when the visitor has granted analytics consent — GTM/Consent Mode would gate
 * tag firing anyway, but we avoid queuing PII-free events pre-consent too.
 *
 * Configure tags/triggers in GTM against these event names later:
 *   - compress_start    { tool, format, file_count }
 *   - compress_complete { tool, format, saved_pct, original_bytes, output_bytes }
 *   - compress_error    { tool, format, reason }
 */
import { readConsent } from "@/lib/consent";

type EventName = "compress_start" | "compress_complete" | "compress_error";

export function trackEvent(
  event: EventName,
  params: Record<string, string | number | boolean | undefined> = {},
): void {
  if (typeof window === "undefined") return;
  if (!readConsent()?.analytics) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}
