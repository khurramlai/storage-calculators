import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";
import type { StaticPageKey, StaticPages } from "./types";

/**
 * Translated copy for the non-calculator pages (about + the four legal pages),
 * one file per locale in src/i18n/pages/.
 */
const modules = import.meta.glob<{ default: StaticPages }>("./pages/*.ts", {
  eager: true,
});

const byLocale = new Map<Locale, StaticPages>();

for (const [path, mod] of Object.entries(modules)) {
  const match = path.match(/^\.\/pages\/([^/]+)\.ts$/);
  if (!match) continue;
  const [, localeSegment] = match;
  if (!isLocale(localeSegment)) {
    throw new Error(
      `Unknown locale file "src/i18n/pages/${localeSegment}.ts". Add it to LOCALES in src/i18n/config.ts.`
    );
  }
  byLocale.set(localeSegment, mod.default);
}

export function getStaticPages(locale: Locale): StaticPages | undefined {
  return byLocale.get(locale);
}

export function getStaticPage(locale: Locale, key: StaticPageKey) {
  return byLocale.get(locale)?.[key];
}

export function hasStaticPages(locale: Locale): boolean {
  return byLocale.has(locale);
}

/**
 * Localized slug for a static page. English keeps its historical slugs, which
 * happen to equal the page keys.
 */
export function staticPageSlug(locale: Locale, key: StaticPageKey): string {
  if (locale === DEFAULT_LOCALE) return key;
  return byLocale.get(locale)?.[key]?.slug ?? key;
}

export function staticPageKeyForSlug(
  locale: Locale,
  slug: string
): StaticPageKey | undefined {
  const pages = byLocale.get(locale);
  if (!pages) return undefined;
  for (const [key, page] of Object.entries(pages)) {
    if (page.slug === slug) return key as StaticPageKey;
  }
  return undefined;
}
