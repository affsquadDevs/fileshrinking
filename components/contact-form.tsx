"use client";

import * as React from "react";
import { Mail, Send, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SITE } from "@/lib/site-config";

/**
 * Privacy-respecting contact form. There is no server endpoint — submitting
 * composes a pre-filled message in the visitor's own email client (mailto),
 * so no personal data is sent to or stored by us. The support address is also
 * shown directly with a copy button as a fallback.
 */
export function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [opened, setOpened] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Please enter a valid email address.";
    if (message.trim().length < 10)
      e.message = "Please enter a message of at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    const subject = encodeURIComponent(`Contact from ${name} — ${SITE.name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${SITE.contactEmail}?subject=${subject}&body=${body}`;
    setOpened(true);
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(SITE.contactEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  }

  return (
    <div className="space-y-6">
      <form onSubmit={onSubmit} noValidate className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="cf-name">Name</Label>
            <Input
              id="cf-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "cf-name-err" : undefined}
              autoComplete="name"
            />
            {errors.name ? (
              <p id="cf-name-err" className="text-xs text-destructive">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cf-email">Email</Label>
            <Input
              id="cf-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "cf-email-err" : undefined}
              autoComplete="email"
            />
            {errors.email ? (
              <p id="cf-email-err" className="text-xs text-destructive">
                {errors.email}
              </p>
            ) : null}
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="cf-message">Message</Label>
          <textarea
            id="cf-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={6}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "cf-message-err" : undefined}
            className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="How can we help?"
          />
          {errors.message ? (
            <p id="cf-message-err" className="text-xs text-destructive">
              {errors.message}
            </p>
          ) : null}
        </div>
        <Button type="submit">
          <Send className="size-4" aria-hidden="true" />
          Send message
        </Button>
      </form>

      {opened ? (
        <Alert>
          <AlertDescription>
            Your email app should have opened with the message ready to send. If
            it didn&rsquo;t, email us directly at the address below.
          </AlertDescription>
        </Alert>
      ) : null}

      <div className="flex flex-wrap items-center gap-3 rounded-lg border border-border bg-muted/40 p-4">
        <Mail className="size-5 shrink-0 text-brand" aria-hidden="true" />
        <a
          href={`mailto:${SITE.contactEmail}`}
          className="font-medium text-foreground hover:text-brand"
        >
          {SITE.contactEmail}
        </a>
        <Button
          type="button"
          size="sm"
          variant="outline"
          onClick={copyEmail}
          className="ml-auto"
        >
          {copied ? (
            <Check className="size-4" aria-hidden="true" />
          ) : (
            <Copy className="size-4" aria-hidden="true" />
          )}
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
    </div>
  );
}
