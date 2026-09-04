import {
  DEFAULT_LOCALE,
  ENABLED_LOCALES,
  LOCALE_META,
  isLocale,
  type Locale,
} from "./config";
import { getTranslation, hasTranslation } from "./content";
import { hasStaticPages, staticPageSlug } from "./static-pages";
import type { StaticPageKey } from "./types";
import { SITE_URL } from "~/lib/site";

/** Every URL on the site is one of these three shapes. */
export type PageRef =
  | { kind: "home" }
  | { kind: "calculator"; slug: string } // slug is always the ENGLISH slug
  | { kind: "static"; key: StaticPageKey };

/** "/fr" for prefixed locales, "" for the default locale. */
function prefix(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "" : `/${locale}`;
}

/** Path for any page in any locale, always with a trailing slash. */
export function href(locale: Locale, ref: PageRef): string {
  switch (ref.kind) {
    case "home":
      return `${prefix(locale)}/`;
    case "calculator": {
      const slug =
        locale === DEFAULT_LOCALE
          ? ref.slug
          : getTranslation(locale, ref.slug)?.slug ?? ref.slug;
      return `${prefix(locale)}/${slug}/`;
    }
    case "static":
      return `${prefix(locale)}/${staticPageSlug(locale, ref.key)}/`;
  }
}

export function homeHref(locale: Locale): string {
  return href(locale, { kind: "home" });
}

export function calculatorHref(locale: Locale, englishSlug: string): string {
  return href(locale, { kind: "calculator", slug: englishSlug });
}

export function staticHref(locale: Locale, key: StaticPageKey): string {
  return href(locale, { kind: "static", key });
}

/** Home page anchor for a category section, e.g. "/fr/#raid". */
export function categoryHref(locale: Locale, category: string): string {
  return `${homeHref(locale)}#${category}`;
}

/** Does this locale have everything needed to serve the given page? */
function localeHasPage(locale: Locale, ref: PageRef): boolean {
  if (locale === DEFAULT_LOCALE) return true;
  switch (ref.kind) {
    case "home":
      return hasStaticPages(locale);
    case "calculator":
      return hasTranslation(locale, ref.slug);
    case "static":
      return hasStaticPages(locale);
  }
}

/** Locales that can actually serve this page, in LOCALES order. */
export function availableLocales(ref: PageRef): Locale[] {
  return ENABLED_LOCALES.filter((locale) => localeHasPage(locale, ref));
}

export interface Alternate {
  locale: Locale;
  hreflang: string;
  href: string;
  label: string;
}

/**
 * hreflang alternates for <head>. Every returned URL is absolute, reciprocal
 * (each locale lists all the others plus itself), and only includes locales
 * that really have the page. x-default points at English.
 */
export function alternates(ref: PageRef): Alternate[] {
  const list = availableLocales(ref).map((locale) => ({
    locale,
    hreflang: LOCALE_META[locale].hreflang,
    href: new URL(href(locale, ref), SITE_URL).toString(),
    label: LOCALE_META[locale].label,
  }));

  if (list.some((a) => a.locale === DEFAULT_LOCALE)) {
    list.push({
      locale: DEFAULT_LOCALE,
      hreflang: "x-default",
      href: new URL(href(DEFAULT_LOCALE, ref), SITE_URL).toString(),
      label: LOCALE_META[DEFAULT_LOCALE].label,
    });
  }
  return list;
}

/** Absolute canonical URL for a page in one locale. */
export function canonical(locale: Locale, ref: PageRef): string {
  return new URL(href(locale, ref), SITE_URL).toString();
}

/**
 * Reads the locale out of a URL pathname. Used by the 404 page and any
 * component that only has Astro.url to work with.
 */
export function localeFromPath(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : DEFAULT_LOCALE;
}
