/**
 * AdSense configuration. Publisher id is pre-supplied and wired. Ad-unit slot
 * IDs are created in the AdSense dashboard AFTER approval — until then every
 * <AdUnit /> renders a correctly-sized, labelled placeholder so the layout is
 * final and CLS stays at zero. Flip ADS_ENABLED to true and fill the slot map
 * once you have real unit IDs.
 *
 * Do NOT apply for AdSense until the site is fully populated with real content
 * and the legal pages are live — a half-built site fails review.
 */

export const ADSENSE_PUBLISHER_ID = "ca-pub-2980943706375055";
export const ADSENSE_CLIENT = `ca-pub-2980943706375055`;

/**
 * Loads adsbygoogle.js (consent-gated). Keep false during development so the
 * console stays clean for Lighthouse; flip to true when you are ready to APPLY
 * for AdSense (the script must be present on the live site for review). The
 * script still only fires after the visitor grants ads consent.
 */
export const ADSENSE_LOADER_ENABLED = false;

/**
 * Master switch for rendering real ad units. Keep false until you have
 * approved ad-unit slot IDs; placeholders render in their place so spacing is
 * identical when you switch it on.
 */
export const ADS_ENABLED = false;

/** Named ad placements → real slot IDs. [FILL IN after AdSense approval] */
export const AD_SLOTS = {
  /** Leaderboard below the top nav on content pages */
  contentTop: "",
  /** In-article unit between content sections */
  inArticle: "",
  /** Desktop sidebar rectangle */
  sidebar: "",
  /** Footer leaderboard */
  contentBottom: "",
} as const;

export type AdSlotName = keyof typeof AD_SLOTS;

/** Reserved dimensions per placement — used for placeholders and CLS reservation. */
export const AD_FORMATS: Record<
  AdSlotName,
  { minHeight: number; label: string }
> = {
  contentTop: { minHeight: 90, label: "Advertisement" },
  inArticle: { minHeight: 250, label: "Advertisement" },
  sidebar: { minHeight: 600, label: "Advertisement" },
  contentBottom: { minHeight: 90, label: "Advertisement" },
};
