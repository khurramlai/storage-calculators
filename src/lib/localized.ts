import type { CalculatorConfig } from "./types";
import {
  getAllCalculators,
  getCalculatorBySlug,
  getCalculatorsByCategory,
} from "./registry";
import { DEFAULT_LOCALE, type Locale } from "~/i18n/config";
import { getTranslation, englishSlugFor } from "~/i18n/content";

/**
 * A calculator resolved for one locale. `slug` stays the ENGLISH slug so it
 * remains the stable identity used by `related`, by routing helpers, and by
 * the widget registry; `localizedSlug` is what goes in the URL.
 */
export interface LocalizedCalculator extends CalculatorConfig {
  locale: Locale;
  localizedSlug: string;
}

/**
 * Merges the English config (behaviour: widget, widgetProps, category,
 * related) with the locale's translated copy. Anything the translation omits
 * falls back to English rather than rendering empty.
 */
export function localizeCalculator(
  calc: CalculatorConfig,
  locale: Locale
): LocalizedCalculator {
  if (locale === DEFAULT_LOCALE) {
    return { ...calc, locale, localizedSlug: calc.slug };
  }

  const tr = getTranslation(locale, calc.slug);
  if (!tr) return { ...calc, locale, localizedSlug: calc.slug };

  return {
    ...calc,
    locale,
    localizedSlug: tr.slug,
    title: tr.title,
    description: tr.description,
    tagline: tr.tagline ?? calc.tagline,
    keywords: tr.keywords?.length ? tr.keywords : calc.keywords,
    content: tr.content
      ? {
          intro: tr.content.intro ?? calc.content?.intro,
          formula: tr.content.formula ?? calc.content?.formula,
          useCases: tr.content.useCases ?? calc.content?.useCases,
        }
      : calc.content,
    faqs: tr.faqs?.length ? tr.faqs : calc.faqs,
  };
}

/** Every calculator that has copy in this locale, sorted by localized title. */
export function getLocalizedCalculators(locale: Locale): LocalizedCalculator[] {
  const list = getAllCalculators()
    .filter((c) => locale === DEFAULT_LOCALE || getTranslation(locale, c.slug))
    .map((c) => localizeCalculator(c, locale));
  return list.sort((a, b) => a.title.localeCompare(b.title, locale));
}

export function getLocalizedCalculator(
  locale: Locale,
  englishSlug: string
): LocalizedCalculator | undefined {
  const calc = getCalculatorBySlug(englishSlug);
  if (!calc) return undefined;
  if (locale !== DEFAULT_LOCALE && !getTranslation(locale, englishSlug)) {
    return undefined;
  }
  return localizeCalculator(calc, locale);
}

/** Resolve a localized URL slug back to its calculator. */
export function getLocalizedCalculatorByLocalizedSlug(
  locale: Locale,
  localizedSlug: string
): LocalizedCalculator | undefined {
  const englishSlug =
    locale === DEFAULT_LOCALE
      ? localizedSlug
      : englishSlugFor(locale, localizedSlug);
  return englishSlug ? getLocalizedCalculator(locale, englishSlug) : undefined;
}

export function getLocalizedByCategory(
  locale: Locale,
  category: CalculatorConfig["category"]
): LocalizedCalculator[] {
  return getCalculatorsByCategory(category)
    .filter((c) => locale === DEFAULT_LOCALE || getTranslation(locale, c.slug))
    .map((c) => localizeCalculator(c, locale))
    .sort((a, b) => a.title.localeCompare(b.title, locale));
}

/** Related calculators, dropping any that aren't translated in this locale. */
export function getLocalizedRelated(
  locale: Locale,
  englishSlug: string
): LocalizedCalculator[] {
  const calc = getCalculatorBySlug(englishSlug);
  if (!calc?.related?.length) return [];
  return calc.related
    .map((slug) => getLocalizedCalculator(locale, slug))
    .filter((c): c is LocalizedCalculator => Boolean(c));
}
