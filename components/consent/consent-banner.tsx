"use client";

import * as React from "react";
import Link from "next/link";
import { ShieldCheck, Settings2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ACCEPT_ALL,
  REJECT_ALL,
  applyConsent,
  hasConsentDecision,
  readConsent,
  OPEN_CONSENT_EVENT,
} from "@/lib/consent";

function Toggle({
  checked,
  onChange,
  disabled,
  label,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  disabled?: boolean;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        disabled
          ? "cursor-not-allowed bg-brand/40"
          : checked
            ? "bg-brand"
            : "bg-input",
      )}
    >
      <span
        className={cn(
          "inline-block size-5 transform rounded-full bg-background shadow transition-transform",
          checked ? "translate-x-[22px]" : "translate-x-0.5",
        )}
      />
    </button>
  );
}

function Category({
  title,
  description,
  checked,
  onChange,
  disabled,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange?: (v: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-3">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      {disabled ? (
        <span className="inline-flex items-center gap-1 text-xs font-medium text-brand">
          <Check className="size-3.5" aria-hidden="true" /> Always on
        </span>
      ) : (
        <Toggle
          checked={checked}
          onChange={onChange ?? (() => {})}
          label={title}
        />
      )}
    </div>
  );
}

export function ConsentBanner() {
  const [mounted, setMounted] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [showPrefs, setShowPrefs] = React.useState(false);
  const [analytics, setAnalytics] = React.useState(false);
  const [ads, setAds] = React.useState(false);
  const headingRef = React.useRef<HTMLHeadingElement | null>(null);

  React.useEffect(() => {
    setMounted(true);
    if (!hasConsentDecision()) setOpen(true);

    function reopen() {
      const existing = readConsent();
      setAnalytics(Boolean(existing?.analytics));
      setAds(Boolean(existing?.ads));
      setShowPrefs(true);
      setOpen(true);
    }
    window.addEventListener(OPEN_CONSENT_EVENT, reopen);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
  }, []);

  React.useEffect(() => {
    if (open && showPrefs) headingRef.current?.focus();
  }, [open, showPrefs]);

  if (!mounted || !open) return null;

  function choose(choice: { analytics: boolean; ads: boolean }) {
    applyConsent(choice);
    setOpen(false);
    setShowPrefs(false);
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="consent-title"
      className="fixed inset-x-0 bottom-0 z-[90] p-3 sm:p-4"
    >
      <div className="mx-auto max-w-3xl rounded-xl border border-border bg-background/95 p-5 shadow-2xl backdrop-blur supports-[backdrop-filter]:bg-background/85">
        <div className="flex items-start gap-3">
          <ShieldCheck
            className="mt-0.5 size-5 shrink-0 text-brand"
            aria-hidden="true"
          />
          <div className="flex-1">
            <h2
              id="consent-title"
              ref={headingRef}
              tabIndex={-1}
              className="text-base font-semibold outline-none"
            >
              We value your privacy
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Your files are always processed locally and never uploaded. We use
              cookies only for anonymous analytics and, with your consent,
              advertising that keeps these tools free. You can change your choice
              anytime.{" "}
              <Link
                href="/cookie-policy"
                className="font-medium text-brand underline-offset-2 hover:underline"
              >
                Cookie Policy
              </Link>
              .
            </p>

            {showPrefs ? (
              <div className="mt-4 divide-y divide-border rounded-lg border border-border px-4">
                <Category
                  title="Strictly necessary"
                  description="Required for the site and tools to function. Cannot be turned off."
                  checked
                  disabled
                />
                <Category
                  title="Analytics"
                  description="Anonymous usage statistics (Google Analytics via Tag Manager) to help us improve."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <Category
                  title="Advertising"
                  description="Personalised ads (Google AdSense) that fund free, unlimited tools."
                  checked={ads}
                  onChange={setAds}
                />
              </div>
            ) : null}

            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {showPrefs ? (
                <Button
                  onClick={() => choose({ analytics, ads })}
                  className="sm:order-3"
                >
                  Save preferences
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={() => setShowPrefs(true)}
                  className="sm:order-1"
                >
                  <Settings2 className="size-4" aria-hidden="true" />
                  Manage
                </Button>
              )}
              <Button
                variant="outline"
                onClick={() => choose(REJECT_ALL)}
                className="sm:order-2"
              >
                Reject all
              </Button>
              <Button onClick={() => choose(ACCEPT_ALL)} className="sm:order-4">
                Accept all
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
