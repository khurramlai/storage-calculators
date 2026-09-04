import { DEFAULT_LOCALE, LOCALE_META, type Locale } from "./config";
import en, { type UIStrings } from "./ui/en";
import fr from "./ui/fr";

/**
 * UI dictionaries. A locale with no dictionary yet falls back to English so
 * the site still builds; ENABLED_LOCALES in config.ts is what decides which
 * locales actually get pages, so untranslated locales are never linked.
 */
const DICTS: Record<Locale, UIStrings> = {
  en,
  fr,
  es: en,
  de: en,
  ar: en,
  ms: en,
  id: en,
  fil: en,
  cs: en,
};

/** Typed string bundle for a locale. Use it directly: `s.nav.about`. */
export function strings(locale: Locale): UIStrings {
  return DICTS[locale] ?? DICTS[DEFAULT_LOCALE];
}

export { fmt, plural } from "./format";
export { DEFAULT_LOCALE, LOCALE_META };
export type { Locale, UIStrings };
