import { SITE, TOOLS, TOOL_CATEGORIES, type ToolCategoryId } from "@/lib/site-config";
import { POSTS } from "@/lib/blog/registry";
import { LOCALE_META, localizePath } from "@/lib/i18n/config";
import { localesForPath } from "@/lib/i18n/availability";

/**
 * /llms.txt — a structured, machine-readable site summary for LLMs, following
 * the llmstxt.org convention. Generated from site-config + the blog registry so
 * it always reflects the live set of tools and articles. Served as static text.
 */
export const dynamic = "force-static";

function abs(path: string): string {
  return new URL(path, SITE.url).toString();
}

export function GET(): Response {
  const L: string[] = [];

  L.push(`# ${SITE.name}`);
  L.push("");
  L.push(`> ${SITE.description}`);
  L.push("");
  L.push(
    `${SITE.name} (${SITE.url}) is a free, privacy-first file compressor for images, PDFs, video and audio. Every tool runs 100% in the browser using WebAssembly and Web Workers — files are read into memory on the user's own device, compressed locally, and never uploaded to any server. There is no sign-up, no watermark, and no file-count limit.`,
  );
  L.push("");
  L.push(
    `${SITE.name} is fully open source under the ${SITE.license} license. The complete source code is public at ${SITE.repoUrl}, so anyone can audit the "no upload" privacy claim, fork the project, or self-host their own private instance.`,
  );
  L.push("");

  L.push("## Open source");
  L.push(
    `- [${SITE.name} source code on GitHub](${SITE.repoUrl}): The entire codebase is public and ${SITE.license}-licensed. It verifies that all compression happens client-side and that no files are uploaded.`,
  );
  L.push("");

  // Tools grouped by category.
  L.push("## Tools");
  for (const cat of TOOL_CATEGORIES) {
    const tools = TOOLS.filter((t) => t.category === (cat.id as ToolCategoryId));
    for (const t of tools) {
      L.push(`- [${t.title}](${abs(`/${t.slug}`)}): ${t.description}`);
    }
  }
  L.push("");

  // Blog / guides.
  L.push("## Guides and articles");
  for (const p of POSTS) {
    L.push(`- [${p.title}](${abs(`/blog/${p.slug}`)}): ${p.description}`);
  }
  L.push("");

  L.push("## About and policies");
  L.push(`- [About ${SITE.name}](${abs("/about")}): Mission, the team, and why a 100% local-processing model is more trustworthy.`);
  L.push(`- [Contact](${abs("/contact")}): Get in touch with the team.`);
  L.push(`- [Privacy Policy](${abs("/privacy-policy")}): How data is handled — and why your files are never collected.`);
  L.push(`- [Cookie Policy](${abs("/cookie-policy")}): Cookies and storage, all consent-gated.`);
  L.push(`- [Terms of Service](${abs("/terms-of-service")}): Terms for using the free tools.`);
  L.push(`- [Disclaimer](${abs("/disclaimer")}): Honest notes on compression limits.`);
  L.push("");

  L.push("## Languages");
  L.push(
    "The site is fully localized. English is canonical at the root; other languages are path-prefixed.",
  );
  for (const loc of localesForPath("/")) {
    L.push(
      `- ${LOCALE_META[loc].english} (${LOCALE_META[loc].bcp47}): ${abs(localizePath("/", loc))}`,
    );
  }
  L.push("");

  L.push("## Key facts");
  L.push("- All processing is client-side (in-browser WebAssembly); files are never uploaded.");
  L.push("- Free, no account, no watermark, works offline after the page loads.");
  L.push(`- Open source (${SITE.license}): ${SITE.repoUrl}`);
  L.push("- Image codecs: MozJPEG, OxiPNG, libwebp, AVIF (via jSquash). PDF: pdf-lib. Video/audio: ffmpeg.wasm (single-threaded).");
  L.push("");

  return new Response(L.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
