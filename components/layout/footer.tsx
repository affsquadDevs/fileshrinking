import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { PrivacyBadge } from "@/components/privacy-badge";
import { GithubMark } from "@/components/icons/github";
import { ConsentSettingsButton } from "@/components/consent/consent-settings-button";
import {
  SITE,
  TOOL_CATEGORIES,
  toolsInCategory,
  COMPANY_LINKS,
  LEGAL_LINKS,
} from "@/lib/site-config";
import { DEFAULT_LOCALE, localizePath, type Locale } from "@/lib/i18n/config";
import { getT, type MessageKey } from "@/lib/i18n/messages";
import { localizedTool } from "@/lib/i18n/content";

const linkCls =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

export function Footer({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = getT(locale);
  const lp = (href: string) => localizePath(href, locale);
  const pageLabel = (href: string) =>
    t(`pages.${href.replace(/^\//, "")}` as MessageKey);

  return (
    <footer className="mt-auto border-t border-border/60 bg-muted/30">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="space-y-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted-foreground">
              {t("footer.tagline")}
            </p>
            <PrivacyBadge variant="pill" locale={locale} />
          </div>

          {TOOL_CATEGORIES.map((cat) => {
            const catLabel = t(`categories.${cat.id}` as const);
            return (
              <nav key={cat.id} aria-label={catLabel}>
                <h2 className="mb-3 text-sm font-semibold">{catLabel}</h2>
                <ul className="space-y-2">
                  <li>
                    <Link href={lp(`/${cat.hub}`)} className={linkCls}>
                      {t("nav.allIn", { category: catLabel.toLowerCase() })}
                    </Link>
                  </li>
                  {toolsInCategory(cat.id).map((tool) => (
                    <li key={tool.slug}>
                      <Link href={lp(`/${tool.slug}`)} className={linkCls}>
                        {localizedTool(tool.slug, locale).shortName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 border-t border-border/60 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label={t("footer.company")}>
            <h2 className="mb-3 text-sm font-semibold">{t("footer.company")}</h2>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={lp(l.href)} className={linkCls}>
                    {pageLabel(l.href)}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkCls} inline-flex items-center gap-1.5`}
                >
                  <GithubMark className="size-3.5" />
                  {t("common.openSource")}
                </a>
              </li>
            </ul>
          </nav>

          <nav aria-label={t("footer.legal")}>
            <h2 className="mb-3 text-sm font-semibold">{t("footer.legal")}</h2>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={lp(l.href)} className={linkCls}>
                    {pageLabel(l.href)}
                  </Link>
                </li>
              ))}
              <li>
                <ConsentSettingsButton className={linkCls}>
                  {t("footer.consentSettings")}
                </ConsentSettingsButton>
              </li>
            </ul>
          </nav>

          <div className="sm:col-span-2 lg:col-span-2">
            <h2 className="mb-3 text-sm font-semibold">
              {t("footer.howItWorks")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("footer.howItWorksBody")}
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            {t("footer.rightsReserved", {
              year: SITE.foundingYear,
              publisher: SITE.publisher,
            })}
          </p>
          <p>{t("footer.madeFor")}</p>
        </div>
      </Container>
    </footer>
  );
}
