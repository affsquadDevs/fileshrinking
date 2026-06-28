import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { en, type Messages } from "@/lib/i18n/messages/en";
import { es } from "@/lib/i18n/messages/es";
import { pt } from "@/lib/i18n/messages/pt";
import { it } from "@/lib/i18n/messages/it";
import { de } from "@/lib/i18n/messages/de";
import { fr } from "@/lib/i18n/messages/fr";
import { pl } from "@/lib/i18n/messages/pl";
import { uk } from "@/lib/i18n/messages/uk";

/** Locale → dictionary. Locales not yet translated fall back to English so the
 *  UI never shows blank strings. */
const DICTIONARIES: Partial<Record<Locale, Messages>> = {
  en,
  es,
  pt,
  it,
  de,
  fr,
  pl,
  uk,
};

export function getMessages(locale: Locale): Messages {
  return DICTIONARIES[locale] ?? DICTIONARIES[DEFAULT_LOCALE]!;
}

/** Dotted "section.key" keys, type-checked against the dictionary shape. */
export type MessageKey = {
  [S in keyof Messages]: `${S & string}.${keyof Messages[S] & string}`;
}[keyof Messages];

export type TParams = Record<string, string | number>;
export type TFunction = (key: MessageKey, params?: TParams) => string;

export function translate(
  messages: Messages,
  key: MessageKey,
  params?: TParams,
): string {
  const [section, k] = key.split(".") as [keyof Messages, string];
  const sec = messages[section] as Record<string, string> | undefined;
  let str = sec?.[k] ?? key;
  if (params) {
    for (const [p, v] of Object.entries(params)) {
      str = str.split(`{${p}}`).join(String(v));
    }
  }
  return str;
}

/** Bind a t() to a locale — for server components, which can't use context. */
export function getT(locale: Locale): TFunction {
  const messages = getMessages(locale);
  return (key, params) => translate(messages, key, params);
}

export { en };
export type { Messages };
