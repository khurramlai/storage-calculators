import { ENABLED_LOCALES, LOCALE_META, type Locale } from "~/i18n/config";
import { alternates, canonical, type PageRef } from "~/i18n/routing";
import { getLocalizedCalculators } from "./localized";
import { getStaticPages } from "~/i18n/static-pages";
import { STATIC_PAGE_KEYS } from "~/i18n/types";

/**
 * One sitemap per language, listed by sitemap-index.xml. Splitting them keeps
 * each file small enough to read by hand, lets Search Console report indexing
 * per language, and means adding a locale adds a file instead of growing one.
 *
 * The priority/changefreq rules match what the site had when every URL lived
 * in a single generated sitemap, but they are now derived from the page's
 * actual identity rather than from pattern-matching its slug, so localized
 * slugs classify correctly without a per-language lookup table.
 */

export interface Alternate {
  hreflang: string;
  href: string;
}

export interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  alternates: Alternate[];
}

const LEGAL_PAGES = new Set([
  "privacy-policy",
  "cookie-policy",
  "terms-of-service",
  "disclaimer",
]);

function rules(ref: PageRef): { priority: string; changefreq: string } {
  switch (ref.kind) {
    case "home":
      return { priority: "1.0", changefreq: "weekly" };
    case "static":
      return LEGAL_PAGES.has(ref.key)
        ? { priority: "0.3", changefreq: "yearly" }
        : { priority: "0.6", changefreq: "monthly" };
    case "calculator":
      // The money pages.
      return { priority: "0.9", changefreq: "monthly" };
  }
}

/** Every page that exists in this locale, in a sensible crawl order. */
export function pageRefs(locale: Locale): PageRef[] {
  const refs: PageRef[] = [{ kind: "home" }];

  for (const calc of getLocalizedCalculators(locale)) {
    refs.push({ kind: "calculator", slug: calc.slug });
  }

  if (getStaticPages(locale) || locale === "en") {
    for (const key of STATIC_PAGE_KEYS) {
      refs.push({ kind: "static", key });
    }
  }

  return refs;
}

export function sitemapEntries(locale: Locale, lastmod: string): SitemapEntry[] {
  return pageRefs(locale).map((ref) => {
    const { priority, changefreq } = rules(ref);
    return {
      loc: canonical(locale, ref),
      lastmod,
      changefreq,
      priority,
      // Google wants every language version of a page to list all the others
      // (including itself) so the set is unambiguous.
      alternates: alternates(ref).map((alt) => ({
        hreflang: alt.hreflang,
        href: alt.href,
      })),
    };
  });
}

/** Locales that have at least one page, i.e. that get their own sitemap. */
export function sitemapLocales(): Locale[] {
  return ENABLED_LOCALES.filter((locale) => pageRefs(locale).length > 0);
}

export function sitemapPath(locale: Locale): string {
  return `/sitemap-${locale}.xml`;
}

const XML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

export function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (char) => XML_ESCAPES[char]);
}

export function renderUrlset(entries: SitemapEntry[]): string {
  const urls = entries
    .map((entry) => {
      const links = entry.alternates
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${escapeXml(
              alt.hreflang
            )}" href="${escapeXml(alt.href)}" />`
        )
        .join("\n");
      return [
        "  <url>",
        `    <loc>${escapeXml(entry.loc)}</loc>`,
        links,
        `    <lastmod>${entry.lastmod}</lastmod>`,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority}</priority>`,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
}

export function renderSitemapIndex(
  sitemaps: { loc: string; lastmod: string }[]
): string {
  const body = sitemaps
    .map(
      (entry) =>
        `  <sitemap>\n    <loc>${escapeXml(entry.loc)}</loc>\n    <lastmod>${
          entry.lastmod
        }</lastmod>\n  </sitemap>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</sitemapindex>
`;
}

export { LOCALE_META };
