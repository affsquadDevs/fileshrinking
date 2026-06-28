/* Global ambient types for analytics / consent / ads runtime APIs. */

export {};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    /** Set by the inline consent script when stored consent already grants ads. */
    __fsAdsConsent?: boolean;
    /** AdSense queue. */
    adsbygoogle?: unknown[];
  }
}
