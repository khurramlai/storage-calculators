/**
 * Locale registry. English is the default and stays un-prefixed at the site
 * root so existing URLs (and their rankings) never move. Every other locale
 * lives under /<code>/ with its own localized slugs.
 */

export const DEFAULT_LOCALE = "en" as const;

export const LOCALES = [
  "en",
  "fr",
  "es",
  "de",
  "ar",
  "ms",
  "id",
  "fil",
  "cs",
] as const;

export type Locale = (typeof LOCALES)[number];

/** Locales that actually ship translated content (built + linked + in sitemap). */
export const ENABLED_LOCALES: readonly Locale[] = ["en", "fr", "es", "de", "ar", "ms"];

export interface LocaleMeta {
  code: Locale;
  /** BCP-47 tag for <html lang> and hreflang */
  hreflang: string;
  /** Endonym, shown in the language switcher */
  label: string;
  /** English name, used for aria-labels and internal reference */
  englishLabel: string;
  dir: "ltr" | "rtl";
}

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { code: "en", hreflang: "en", label: "English", englishLabel: "English", dir: "ltr" },
  fr: { code: "fr", hreflang: "fr", label: "Français", englishLabel: "French", dir: "ltr" },
  es: { code: "es", hreflang: "es", label: "Español", englishLabel: "Spanish", dir: "ltr" },
  de: { code: "de", hreflang: "de", label: "Deutsch", englishLabel: "German", dir: "ltr" },
  ar: { code: "ar", hreflang: "ar", label: "العربية", englishLabel: "Arabic", dir: "rtl" },
  ms: { code: "ms", hreflang: "ms", label: "Bahasa Melayu", englishLabel: "Malay", dir: "ltr" },
  id: { code: "id", hreflang: "id", label: "Bahasa Indonesia", englishLabel: "Indonesian", dir: "ltr" },
  fil: { code: "fil", hreflang: "fil", label: "Filipino", englishLabel: "Filipino", dir: "ltr" },
  cs: { code: "cs", hreflang: "cs", label: "Čeština", englishLabel: "Czech", dir: "ltr" },
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function localeDir(locale: Locale): "ltr" | "rtl" {
  return LOCALE_META[locale].dir;
}

/** Locales other than the default, i.e. the ones that carry a URL prefix. */
export const PREFIXED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);
