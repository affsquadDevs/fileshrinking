// Map changed source files → the public URLs they affect, so CI can ping
// IndexNow with ONLY the affected pages (never a full batch). Reads file paths
// from argv, or one-per-line on stdin. Prints affected absolute URLs.
//
// Only content files map to URLs. Shared changes (components, config, styles,
// registries) intentionally map to nothing — the page content didn't change,
// so there's nothing to re-announce.
import fs from "node:fs";

const BASE = "https://fileshrinking.com";
const LOCALES = ["es", "pt", "it", "de", "fr", "pl", "uk"];
const PAGE_SLUGS = [
  "about",
  "contact",
  "privacy-policy",
  "terms-of-service",
  "cookie-policy",
  "disclaimer",
];

/** Read meta.slug from a blog post module (filename ≠ slug for some posts). */
function blogSlug(file) {
  try {
    const m = fs.readFileSync(file, "utf8").match(/slug:\s*["']([^"']+)["']/);
    return m ? m[1] : null;
  } catch {
    return null;
  }
}

function urlsFor(file) {
  let m;
  // English + localized home
  if (file === "app/page.tsx" || file === "lib/i18n/content/home.ts") return ["/"];
  if ((m = file.match(/^lib\/i18n\/content\/home\/([a-z]{2})\.ts$/)) && LOCALES.includes(m[1]))
    return [`/${m[1]}`];
  // English tool page
  if ((m = file.match(/^app\/\(tools\)\/([a-z0-9-]+)\/page\.tsx$/))) return [`/${m[1]}`];
  // localized tool content
  if ((m = file.match(/^lib\/i18n\/content\/tools\/([a-z0-9-]+)\.([a-z]{2})\.tsx$/)) && LOCALES.includes(m[2]))
    return [`/${m[2]}/${m[1]}`];
  // English content page (about/contact/legal) or blog index
  if ((m = file.match(/^app\/([a-z0-9-]+)\/page\.tsx$/)) && (PAGE_SLUGS.includes(m[1]) || m[1] === "blog"))
    return [`/${m[1]}`];
  // localized content page
  if ((m = file.match(/^lib\/i18n\/content\/pages\/([a-z0-9-]+)\.([a-z]{2})\.tsx$/)) && LOCALES.includes(m[2]))
    return [`/${m[2]}/${m[1]}`];
  // localized blog post (check before English so `.es.tsx` matches here)
  if ((m = file.match(/^components\/blog\/posts\/([a-z0-9-]+)\.([a-z]{2})\.tsx$/)) && LOCALES.includes(m[2])) {
    const s = blogSlug(file);
    return s ? [`/${m[2]}/blog/${s}`] : [];
  }
  // English blog post
  if ((m = file.match(/^components\/blog\/posts\/([a-z0-9-]+)\.tsx$/))) {
    const s = blogSlug(file);
    return s ? [`/blog/${s}`] : [];
  }
  return [];
}

function readStdin() {
  try {
    return fs.readFileSync(0, "utf8");
  } catch {
    return "";
  }
}

const files =
  process.argv.length > 2
    ? process.argv.slice(2)
    : readStdin().split("\n").map((s) => s.trim()).filter(Boolean);

const urls = new Set();
for (const f of files) for (const u of urlsFor(f)) urls.add(BASE + u);
for (const u of urls) console.log(u);
