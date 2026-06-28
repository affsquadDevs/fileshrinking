"use client";

import { OPEN_CONSENT_EVENT } from "@/lib/consent";

/**
 * Re-opens the consent preferences dialog. The ConsentBanner listens for the
 * `fileshrinking:open-consent` event and shows itself. Kept as a tiny
 * standalone client component so the Footer can stay a server component.
 */
export { OPEN_CONSENT_EVENT };

export function ConsentSettingsButton({
  className,
  children = "Consent settings",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new CustomEvent(OPEN_CONSENT_EVENT))}
    >
      {children}
    </button>
  );
}
