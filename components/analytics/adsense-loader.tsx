"use client";

import * as React from "react";
import {
  CONSENT_UPDATED_EVENT,
  readConsent,
  type ConsentChoice,
} from "@/lib/consent";
import { ADSENSE_CLIENT, ADSENSE_LOADER_ENABLED } from "@/lib/ads-config";

const SCRIPT_ID = "adsbygoogle-js";

/**
 * Injects the AdSense library only AFTER the visitor has granted ads consent,
 * and only once. Returning visitors who already consented load it on mount.
 * Renders nothing. Disabled entirely until ADSENSE_LOADER_ENABLED is true.
 */
export function AdSenseLoader() {
  React.useEffect(() => {
    if (!ADSENSE_LOADER_ENABLED) return;

    function inject() {
      if (document.getElementById(SCRIPT_ID)) return;
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.async = true;
      s.crossOrigin = "anonymous";
      s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
      document.head.appendChild(s);
    }

    if (readConsent()?.ads) {
      inject();
      return;
    }

    function onConsent(e: Event) {
      const detail = (e as CustomEvent<ConsentChoice>).detail;
      if (detail?.ads) inject();
    }
    window.addEventListener(CONSENT_UPDATED_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, onConsent);
  }, []);

  return null;
}
