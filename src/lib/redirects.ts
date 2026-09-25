import { DEFAULT_LOCALE, LOCALES, type Locale } from "~/i18n/config";
import { getTranslatedSlugs, getTranslation } from "~/i18n/content";
import { getStaticPages } from "~/i18n/static-pages";
import { STATIC_PAGE_KEYS } from "~/i18n/types";
import { getCalculatorBySlug } from "./registry";

/**
 * The translated locales were retired: their pages are no longer built, and
 * every URL they ever had now 301s to the English page that replaced it.
 *
 * The map is derived from the translation data still in src/i18n/, so a slug
 * can never drift out of sync with the redirect that points at it. Keep those
 * files: deleting them would silently empty this map and turn ~130 live URLs
 * into 404s.
 */

export interface RedirectRule {
  from: string;
  to: string;
  status: 301;
}

/** Percent-encode a path so non-ASCII slugs (Arabic) are matched literally. */
function encodePath(path: string): string {
  return encodeURI(path);
}

/** Locales that once shipped pages, i.e. the ones needing redirects. */
function retiredLocales(): Locale[] {
  return LOCALES.filter(
    (locale) =>
      locale !== DEFAULT_LOCALE &&
      (getTranslatedSlugs(locale).length > 0 || Boolean(getStaticPages(locale)))
  );
}

/**
 * Every retired URL, most specific first. Cloudflare applies the first match,
 * so the per-page rules must precede each locale's catch-all.
 */
export function redirectRules(): RedirectRule[] {
  const exact: RedirectRule[] = [];
  const catchAll: RedirectRule[] = [];

  for (const locale of retiredLocales()) {
    // Calculators: localized slug -> the English slug for the same calculator.
    for (const englishSlug of getTranslatedSlugs(locale)) {
      const translation = getTranslation(locale, englishSlug);
      if (!translation) continue;
      // Only redirect to a calculator that still exists.
      if (!getCalculatorBySlug(englishSlug)) continue;
      exact.push({
        from: `/${locale}/${translation.slug}/`,
        to: `/${englishSlug}/`,
        status: 301,
      });
    }

    // About + legal pages: localized slug -> the English page key.
    const pages = getStaticPages(locale);
    if (pages) {
      for (const key of STATIC_PAGE_KEYS) {
        const page = pages[key];
        if (!page) continue;
        exact.push({ from: `/${locale}/${page.slug}/`, to: `/${key}/`, status: 301 });
      }
    }

    // Locale home page, then anything else that ever lived under the prefix.
    exact.push({ from: `/${locale}/`, to: "/", status: 301 });
    catchAll.push({ from: `/${locale}/*`, to: "/", status: 301 });
  }

  return [...exact, ...catchAll];
}

/**
 * Cloudflare Pages `_redirects` format: "<from> <to> <status>", one per line,
 * static rules before dynamic (splat) ones.
 *
 * Each exact rule is emitted with and without its trailing slash. Matching is
 * literal, so without the bare form a slashless request would skip its own
 * rule and be swept up by the locale catch-all onto the home page instead of
 * the page that replaced it.
 */
export function renderRedirectsFile(): string {
  const rules = redirectRules();
  const lines: string[] = [
    "# Generated at build time by src/lib/redirects.ts - do not edit by hand.",
    "# Retired translated locales; every old URL 301s to its English page.",
    "",
  ];

  for (const rule of rules) {
    const isSplat = rule.from.endsWith("*");
    const froms = isSplat
      ? [rule.from]
      : [rule.from, rule.from.replace(/\/$/, "")].filter(
          (from, index, all) => from !== "" && all.indexOf(from) === index
        );
    for (const from of froms) {
      lines.push(`${encodePath(from)} ${encodePath(rule.to)} ${rule.status}`);
    }
  }

  lines.push("");
  return lines.join("\n");
}
