import type { Locale } from "./config";
import { isLocale } from "./config";
import type { CalculatorTranslation } from "./types";

/**
 * Auto-discovers translated calculator copy from src/i18n/content/<locale>/<english-slug>.ts.
 * Adding a language = drop in a folder of files named after the English slugs;
 * no wiring anywhere else.
 */
const modules = import.meta.glob<{ default: CalculatorTranslation }>(
  "./content/*/*.ts",
  { eager: true }
);

/** locale -> english slug -> translation */
const byLocale = new Map<Locale, Map<string, CalculatorTranslation>>();
/** locale -> localized slug -> english slug */
const slugIndex = new Map<Locale, Map<string, string>>();

for (const [path, mod] of Object.entries(modules)) {
  const match = path.match(/^\.\/content\/([^/]+)\/(.+)\.ts$/);
  if (!match) continue;
  const [, localeSegment, englishSlug] = match;
  if (!isLocale(localeSegment)) {
    throw new Error(
      `Unknown locale folder "src/i18n/content/${localeSegment}". Add it to LOCALES in src/i18n/config.ts.`
    );
  }
  const locale = localeSegment;
  const translation = mod.default;
  if (!translation?.slug) {
    throw new Error(`Translation ${path} is missing a "slug".`);
  }

  const translations = byLocale.get(locale) ?? new Map();
  translations.set(englishSlug, translation);
  byLocale.set(locale, translations);

  const slugs = slugIndex.get(locale) ?? new Map();
  if (slugs.has(translation.slug)) {
    throw new Error(
      `Duplicate ${locale} slug "${translation.slug}" (${englishSlug} and ${slugs.get(
        translation.slug
      )}).`
    );
  }
  slugs.set(translation.slug, englishSlug);
  slugIndex.set(locale, slugs);
}

export function getTranslation(
  locale: Locale,
  englishSlug: string
): CalculatorTranslation | undefined {
  return byLocale.get(locale)?.get(englishSlug);
}

export function hasTranslation(locale: Locale, englishSlug: string): boolean {
  return byLocale.get(locale)?.has(englishSlug) ?? false;
}

export function getTranslatedSlugs(locale: Locale): string[] {
  return [...(byLocale.get(locale)?.keys() ?? [])];
}

export function englishSlugFor(
  locale: Locale,
  localizedSlug: string
): string | undefined {
  return slugIndex.get(locale)?.get(localizedSlug);
}
