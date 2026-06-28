import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

/**
 * Content-Security-Policy.
 *
 * Applied in production only — the dev server uses eval for HMR/source maps, so
 * a strict CSP would break `next dev`. Tuned to allow:
 *  - GTM, AdSense, Google Analytics, DoubleClick (ads + analytics)
 *  - 'wasm-unsafe-eval' + blob: + worker-src blob: (jSquash & ffmpeg WASM workers)
 *  - inline scripts (GTM bootstrap + Consent Mode defaults)
 * We deliberately do NOT enable Cross-Origin-Isolation (COEP/COOP); that would
 * break AdSense/GTM and is unnecessary with single-threaded ffmpeg.
 */
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' blob: https://www.googletagmanager.com https://*.googletagmanager.com https://pagead2.googlesyndication.com https://*.googlesyndication.com https://*.google.com https://*.gstatic.com https://*.doubleclick.net https://www.google-analytics.com https://*.google-analytics.com https://adservice.google.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' blob: data: https://*.googletagmanager.com https://*.google-analytics.com https://www.google-analytics.com https://pagead2.googlesyndication.com https://*.googlesyndication.com https://*.google.com https://*.doubleclick.net",
  "worker-src 'self' blob:",
  "frame-src 'self' https://*.googletagmanager.com https://*.doubleclick.net https://*.google.com https://googleads.g.doubleclick.net https://*.googlesyndication.com https://tpc.googlesyndication.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  ...(isProd ? [{ key: "Content-Security-Policy", value: csp }] : []),
];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonical alias: /compress-pdf -> /pdf-compressor
      { source: "/compress-pdf", destination: "/pdf-compressor", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Long-cache the immutable ffmpeg core assets.
        source: "/ffmpeg/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
