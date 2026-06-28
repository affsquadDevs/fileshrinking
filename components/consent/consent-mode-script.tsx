import { CONSENT_STORAGE_KEY } from "@/lib/consent";

/**
 * Google Consent Mode v2 defaults. Rendered as a raw, synchronous inline
 * <script> inside <head> (React 19 requires sync scripts to live in <head>),
 * placed BEFORE the GTM loader so defaults are in the dataLayer first.
 * Everything starts DENIED; for returning visitors we immediately replay their
 * stored choice so they are not re-gated. ads_data_redaction stays on until
 * ads are granted.
 */
export function ConsentModeScript() {
  const inline = `
(function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });
  gtag('set', 'ads_data_redaction', true);
  gtag('set', 'url_passthrough', true);
  try {
    var raw = localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)});
    if (raw) {
      var c = JSON.parse(raw);
      var ads = c && c.ads === true;
      var analytics = c && c.analytics === true;
      gtag('consent', 'update', {
        ad_storage: ads ? 'granted' : 'denied',
        ad_user_data: ads ? 'granted' : 'denied',
        ad_personalization: ads ? 'granted' : 'denied',
        analytics_storage: analytics ? 'granted' : 'denied'
      });
      gtag('set', 'ads_data_redaction', !ads);
      if (ads) { window.__fsAdsConsent = true; }
    }
  } catch (e) {}
})();
`;
  return (
    <script
      id="consent-mode-default"
      dangerouslySetInnerHTML={{ __html: inline }}
    />
  );
}
