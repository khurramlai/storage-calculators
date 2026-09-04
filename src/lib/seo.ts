import type { CalculatorConfig } from "./types";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "./site";
import { DEFAULT_LOCALE, type Locale } from "~/i18n/config";
import { strings } from "~/i18n";
import { canonical, homeHref, calculatorHref } from "~/i18n/routing";
import type { StaticPageKey } from "~/i18n/types";

export { SITE_NAME, SITE_TAGLINE, SITE_URL };

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
}

export function siteSeo(locale: Locale = DEFAULT_LOCALE): SeoMeta {
  const s = strings(locale);
  return {
    title: `${s.site.name}: ${s.site.tagline}`,
    description: s.site.tagline,
    canonical: canonical(locale, { kind: "home" }),
  };
}

/**
 * `calc` carries the ENGLISH slug as its identity; the localized URL is
 * resolved through the routing helpers so the canonical always matches the
 * page that actually gets built.
 */
export function calculatorSeo(
  calc: CalculatorConfig,
  locale: Locale = DEFAULT_LOCALE
): SeoMeta {
  const s = strings(locale);
  return {
    title: `${calc.title} | ${s.site.name}`,
    description: calc.description,
    canonical: canonical(locale, { kind: "calculator", slug: calc.slug }),
    keywords: calc.keywords,
  };
}

export function staticPageSeo(
  key: StaticPageKey,
  title: string,
  description: string,
  locale: Locale = DEFAULT_LOCALE
): SeoMeta {
  const s = strings(locale);
  return {
    title: `${title} | ${s.site.name}`,
    description,
    canonical: canonical(locale, { kind: "static", key }),
  };
}

/**
 * JSON-LD WebApplication schema, tells search engines this page is an
 * interactive calculator tool, not just an article. Combined with FAQPage
 * schema, this is the foundation for rich results.
 */
export function webAppSchema(
  calc: CalculatorConfig,
  locale: Locale = DEFAULT_LOCALE
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: calc.title,
    description: calc.description,
    url: new URL(calculatorHref(locale, calc.slug), SITE_URL).toString(),
    inLanguage: locale,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function faqSchema(calc: CalculatorConfig) {
  if (!calc.faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: calc.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  calc: CalculatorConfig,
  locale: Locale = DEFAULT_LOCALE
) {
  const s = strings(locale);
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: s.common.home,
        item: new URL(homeHref(locale), SITE_URL).toString(),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: calc.title,
        item: new URL(calculatorHref(locale, calc.slug), SITE_URL).toString(),
      },
    ],
  };
}
