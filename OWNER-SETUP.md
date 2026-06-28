# FileShrinking — Owner setup checklist

The site is built, content-complete, and production-ready. Before applying for
AdSense and launching publicly, replace the items below with **real, truthful**
information. Everything here is intentionally generic or marked in code; nothing
fabricated is presented to users.

## 1. Identity & E-E-A-T (required for AdSense + trust)
- `lib/site-config.ts` → `SITE.publisher`, `SITE.authorName`, `SITE.contactEmail`,
  `SITE.social` (real Twitter/GitHub/etc. URLs for `Organization.sameAs`).
- `lib/blog/authors.ts` → replace the author names/bios with **real named people**
  (the blog and About page reference these). Genuine authorship is a core E-E-A-T
  signal.
- `app/about/page.tsx` → add real maintainer details if you want named bios.

## 2. Legal (required)
- `app/privacy-policy/page.tsx`, `app/terms-of-service/page.tsx`,
  `app/cookie-policy/page.tsx`, `app/disclaimer/page.tsx` — have a lawyer confirm
  the policies match your real legal entity, registered address, and governing
  jurisdiction. The copy currently uses neutral phrasing ("the FileShrinking
  team", "the laws applicable where the operator is established"); insert your
  registered entity and jurisdiction where your counsel advises.

## 3. Consent management platform (required for EEA ads)
- We ship a working, self-hosted Consent Mode v2 banner
  (`components/consent/consent-banner.tsx`). Google requires a **certified CMP**
  to serve personalised ads in the EEA/UK. Either register this banner or swap in
  a certified CMP (Cookiebot / CookieYes / Google's own). The `gtag('consent',…)`
  plumbing in `lib/consent.ts` is what any CMP drives, so the rest of the app
  needs no changes.

## 4. AdSense (after approval)
- `lib/ads-config.ts`:
  - Set `ADSENSE_LOADER_ENABLED = true` when you're ready to apply (loads
    `adsbygoogle.js`, still consent-gated).
  - After approval, fill `AD_SLOTS` with real ad-unit IDs and set
    `ADS_ENABLED = true`. Until then, correctly-sized labelled placeholders render
    so the layout is final (zero CLS).
- Publisher id (`ca-pub-2980943706375055`) and `public/ads.txt` are already wired.

## 5. Already wired (no action needed)
- GTM container `GTM-MNLGFCTM`, Consent Mode v2 defaults (denied before GTM).
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, canonical URLs,
  JSON-LD (Organization, WebSite+SearchAction, WebApplication, BreadcrumbList,
  HowTo, FAQPage, BlogPosting, Person).
- `/compress-pdf` → `/pdf-compressor` 301-style permanent redirect.
- Security headers + production CSP (tuned for GTM/AdSense/WASM).
- OG image + PWA icons in `/public` (replace with your own branding if desired).

## 6. Build & deploy notes
- **Use pnpm**, not npm (`pnpm install`, `pnpm add`).
- **Production build uses webpack**: `pnpm build` runs `next build --webpack`.
  Turbopack's production build currently deadlocks bundling the WASM workers —
  do not switch `build` back to plain `next build`. Dev (`pnpm dev`) uses
  Turbopack and is fine.
- `@ffmpeg/core` (single-threaded) is self-hosted under `public/ffmpeg/`. Do not
  switch to `core-mt` — it requires cross-origin isolation that breaks ads/GTM.
- Deploy target: Vercel (or any Node host running `next start`).
