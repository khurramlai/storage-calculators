import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

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
        const url = item.url;
        const lastmod = new Date().toISOString();

        if (url.endsWith("/")) {
          // Strip trailing slash for comparison
        }

        // Homepage: highest priority
        if (url === "https://storage-calculators.pages.dev/") {
          return {
            ...item,
            priority: 1.0,
            changefreq: "weekly",
            lastmod,
          };
        }

        // Legal pages: low priority, rarely change
        if (
          url.includes("/privacy-policy") ||
          url.includes("/cookie-policy") ||
          url.includes("/terms-of-service") ||
          url.includes("/disclaimer")
        ) {
          return {
            ...item,
            priority: 0.3,
            changefreq: "yearly",
            lastmod,
          };
        }

        // About page: middle priority
        if (url.includes("/about")) {
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
