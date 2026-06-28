/**
 * Consent state model + client helpers for Google Consent Mode v2.
 *
 * We expose two user-facing categories — `analytics` and `ads` — and map them
 * onto Google's granular consent signals. Defaults are DENIED (set
 * synchronously in the <head> by ConsentModeScript, ahead of GTM). This module
 * runs on the client only; guard all access with `typeof window`.
 *
 * NOTE TO OWNER: This is a functional, self-hosted Consent Mode v2
 * implementation. To serve personalized ads to EEA/UK users, Google also
 * requires a *certified* CMP. You can either (a) keep this banner and register
 * it, or (b) replace <ConsentBanner /> with a certified CMP (Cookiebot,
 * CookieYes, Google's own) — the gtag('consent', …) plumbing below is what any
 * CMP ultimately drives, so the rest of the app does not need to change.
 */

export const CONSENT_STORAGE_KEY = "fs_consent_v1";
export const CONSENT_UPDATED_EVENT = "fileshrinking:consent-updated";
export const OPEN_CONSENT_EVENT = "fileshrinking:open-consent";

export interface ConsentChoice {
  /** analytics_storage */
  analytics: boolean;
  /** ad_storage + ad_user_data + ad_personalization */
  ads: boolean;
  /** epoch ms the choice was recorded */
  ts: number;
  /** schema/version of the consent record */
  v: 1;
}

export type ConsentSignal = "granted" | "denied";

/** Read the persisted choice, or null if the user has not chosen yet. */
export function readConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentChoice>;
    if (typeof parsed.analytics !== "boolean" || typeof parsed.ads !== "boolean")
      return null;
    return {
      analytics: parsed.analytics,
      ads: parsed.ads,
      ts: typeof parsed.ts === "number" ? parsed.ts : 0,
      v: 1,
    };
  } catch {
    return null;
  }
}

/** True once the user has made any explicit choice. */
export function hasConsentDecision(): boolean {
  return readConsent() !== null;
}

function toSignal(granted: boolean): ConsentSignal {
  return granted ? "granted" : "denied";
}

/**
 * Persist a choice, update Consent Mode signals via gtag, and broadcast so
 * consent-gated components (AdSense loader, AdUnit) react immediately.
 */
export function applyConsent(choice: { analytics: boolean; ads: boolean }): void {
  if (typeof window === "undefined") return;

  const record: ConsentChoice = {
    analytics: choice.analytics,
    ads: choice.ads,
    ts: Date.now(),
    v: 1,
  };

  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* storage may be unavailable (private mode / blocked) — proceed anyway */
  }

  const gtag = window.gtag;
  if (typeof gtag === "function") {
    gtag("consent", "update", {
      ad_storage: toSignal(choice.ads),
      ad_user_data: toSignal(choice.ads),
      ad_personalization: toSignal(choice.ads),
      analytics_storage: toSignal(choice.analytics),
    });
    // When ads are granted we no longer need to redact ad click identifiers.
    gtag("set", "ads_data_redaction", !choice.ads);
  }

  window.dispatchEvent(
    new CustomEvent<ConsentChoice>(CONSENT_UPDATED_EVENT, { detail: record }),
  );
}

/** Convenience presets used by the banner buttons. */
export const ACCEPT_ALL = { analytics: true, ads: true } as const;
export const REJECT_ALL = { analytics: false, ads: false } as const;
