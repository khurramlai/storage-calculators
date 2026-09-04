import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

/**
 * Locale prefixes that appear in URLs. English is un-prefixed and lives at the
 * site root. Keep in sync with LOCALES in src/i18n/config.ts.
 */
const LOCALE_PREFIXES = ["fr", "es", "de", "ar", "ms", "id", "fil", "cs"];

/**
 * Last path segment of every legal page, in every locale, plus the About page.
 * The sitemap integration only ever sees finished URLs, so the classification
 * has to recognise localized slugs by name. Keep in sync with the `slug` fields
 * in src/i18n/pages/*.ts (and the English page filenames in src/pages/).
 */
const LEGAL_SLUGS = new Set([
  // en
  "privacy-policy",
  "cookie-policy",
  "terms-of-service",
  "disclaimer",
  // fr
  "politique-de-confidentialite",
  "politique-cookies",
  "conditions-utilisation",
  "avertissement",
]);

const ABOUT_SLUGS = new Set([
  "about",
  "a-propos",
]);

export default defineConfig({
  site: "https://storagecalculators.com",
  trailingSlash: "ignore",
  integrations: [
    react(),
    mdx(),
    sitemap({
      // Per-page priority, changefreq, and lastmod.
      // Calculator pages are the primary indexable content, so they win priority.
      // Legal pages are required-but-low-priority; we don't want them outranking
      // calculators for branded queries.
      serialize(item) {
        // Compare on pathname, not the absolute URL, so these rules keep working
        // if the site domain ever changes.
        const { pathname } = new URL(item.url);
        const lastmod = new Date().toISOString();

        // Split off the locale prefix so the same rules apply in every language.
        const segments = pathname.split("/").filter(Boolean);
        if (LOCALE_PREFIXES.includes(segments[0])) segments.shift();
        const slug = segments[segments.length - 1] ?? "";

        // Homepage (any locale): highest priority
        if (segments.length === 0) {
          return {
            ...item,
            priority: 1.0,
            changefreq: "weekly",
            lastmod,
          };
        }

        // Legal pages: low priority, rarely change
        if (LEGAL_SLUGS.has(slug)) {
          return {
            ...item,
            priority: 0.3,
            changefreq: "yearly",
            lastmod,
          };
        }

        // About page: middle priority
        if (ABOUT_SLUGS.has(slug)) {
          return {
            ...item,
            priority: 0.6,
            changefreq: "monthly",
            lastmod,
          };
        }

        // Default: calculator pages — the money pages
        return {
          ...item,
          priority: 0.9,
          changefreq: "monthly",
          lastmod,
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    format: "directory",
  },
});
