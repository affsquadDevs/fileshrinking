import { SITE } from "@/lib/site-config";

const GTM_ID = SITE.gtmContainerId;

/**
 * GTM container loader. Rendered as a raw inline <script> in <head>, AFTER
 * ConsentModeScript so the consent defaults are already in the dataLayer when
 * the container initialises. Consent Mode then governs which tags may fire.
 * (Kept as a raw <script> rather than next/script so React 19 places it in
 * <head> in a guaranteed order alongside the consent defaults.)
 */
export function GtmScript() {
  if (!GTM_ID) return null;
  const inline = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;
  return <script id="gtm-loader" dangerouslySetInnerHTML={{ __html: inline }} />;
}

/**
 * The <noscript> fallback iframe. MUST be the first child of <body>.
 */
export function GtmNoScript() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
