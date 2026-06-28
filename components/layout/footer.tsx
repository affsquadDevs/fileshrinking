import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { PrivacyBadge } from "@/components/privacy-badge";
import { ConsentSettingsButton } from "@/components/consent/consent-settings-button";
import {
  SITE,
  TOOL_CATEGORIES,
  toolsInCategory,
  COMPANY_LINKS,
  LEGAL_LINKS,
} from "@/lib/site-config";

const linkCls =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function Footer() {
  const year = SITE.foundingYear; // build-time constant; range rendered below
  return (
    <footer className="mt-auto border-t border-border/60 bg-muted/30">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              {SITE.tagline}. Compress images, PDFs, video and audio without
              ever uploading a file.
            </p>
            <PrivacyBadge variant="pill" />
          </div>

          {TOOL_CATEGORIES.map((cat) => (
            <nav key={cat.id} aria-label={cat.label}>
              <h2 className="mb-3 text-sm font-semibold">{cat.label}</h2>
              <ul className="space-y-2">
                <li>
                  <Link href={`/${cat.hub}`} className={linkCls}>
                    All {cat.label.toLowerCase()}
                  </Link>
                </li>
                {toolsInCategory(cat.id).map((tool) => (
                  <li key={tool.slug}>
                    <Link href={`/${tool.slug}`} className={linkCls}>
                      {tool.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 grid gap-8 border-t border-border/60 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Company">
            <h2 className="mb-3 text-sm font-semibold">Company</h2>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkCls}
                >
                  Open source ↗
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2 className="mb-3 text-sm font-semibold">Legal</h2>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={linkCls}>
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <ConsentSettingsButton className={linkCls}>
                  Consent settings
                </ConsentSettingsButton>
              </li>
            </ul>
          </nav>

          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="mb-3 text-sm font-semibold">How it works</h2>
            <p className="text-sm text-muted-foreground">
              Every tool runs entirely in your browser using WebAssembly and
              modern web APIs. Your files are read into memory on your device,
              compressed locally, and offered back to you for download. Nothing
              is sent to a server — which is faster, more private, and works
              even offline once loaded.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {year}–present {SITE.publisher}. All rights reserved.
          </p>
          <p>
            Made for people who value their privacy. No uploads, ever.
          </p>
        </div>
      </Container>
    </footer>
  );
}
