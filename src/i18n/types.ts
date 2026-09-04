import type { FAQItem } from "~/lib/types";

/**
 * A translated calculator. Everything a visitor reads on a calculator page
 * lives here; the English config in src/calculators/ still owns the behaviour
 * (widget, widgetProps, category, related) so translations can never change
 * the math or the layout, only the words.
 */
export interface CalculatorTranslation {
  /** Localized URL slug, e.g. "calculateur-raid-5". Must be unique per locale. */
  slug: string;
  title: string;
  description: string;
  tagline?: string;
  /** Locale-native search terms, not a literal translation of the English set. */
  keywords: string[];
  content?: {
    intro?: string;
    formula?: string;
    useCases?: string[];
  };
  faqs?: FAQItem[];
}

/** Static (non-calculator) pages that exist in every locale. */
export const STATIC_PAGE_KEYS = [
  "about",
  "disclaimer",
  "privacy-policy",
  "cookie-policy",
  "terms-of-service",
] as const;

export type StaticPageKey = (typeof STATIC_PAGE_KEYS)[number];

export interface StaticPageTranslation {
  /** Localized URL slug, e.g. "politique-de-confidentialite". */
  slug: string;
  title: string;
  description: string;
  /** H1 shown in the page hero. Defaults to `title` when omitted. */
  heading?: string;
  subtitle?: string;
  updated?: string;
  /** Body HTML, rendered inside the prose container. */
  body: string;
}

export type StaticPages = Record<StaticPageKey, StaticPageTranslation>;
