import type { CalculatorConfig } from "./types";

export const SITE_NAME = "Storage Calculators";
export const SITE_URL = "https://storage-calculators.pages.dev";
export const SITE_TAGLINE =
  "Free calculators for RAID, NAS, CCTV, cloud storage, and self-storage needs.";

export interface SeoMeta {
  title: string;
  description: string;
  canonical: string;
  keywords?: string[];
}

export function siteSeo(): SeoMeta {
  return {
    title: `${SITE_NAME}: ${SITE_TAGLINE}`,
    description: SITE_TAGLINE,
    canonical: SITE_URL,
  };
}

export function calculatorSeo(calc: CalculatorConfig): SeoMeta {
  return {
    title: `${calc.title} | ${SITE_NAME}`,
    description: calc.description,
    canonical: `${SITE_URL}/${calc.slug}/`,
    keywords: calc.keywords,
  };
}

/**
 * JSON-LD WebApplication schema, tells search engines this page is an
 * interactive calculator tool, not just an article. Combined with FAQPage
 * schema, this is the foundation for rich results.
 */
export function webAppSchema(calc: CalculatorConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: calc.title,
    description: calc.description,
    url: `${SITE_URL}/${calc.slug}/`,
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

export function breadcrumbSchema(calc: CalculatorConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: calc.title,
        item: `${SITE_URL}/${calc.slug}/`,
      },
    ],
  };
}
