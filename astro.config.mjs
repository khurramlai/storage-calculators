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
        // Compare on pathname, not the absolute URL, so these rules keep working
        // if the site domain ever changes.
        const { pathname } = new URL(item.url);
        const lastmod = new Date().toISOString();

        // Homepage: highest priority
        if (pathname === "/") {
          return {
            ...item,
            priority: 1.0,
            changefreq: "weekly",
            lastmod,
          };
        }

        // Legal pages: low priority, rarely change
        if (
          pathname.includes("/privacy-policy") ||
          pathname.includes("/cookie-policy") ||
          pathname.includes("/terms-of-service") ||
          pathname.includes("/disclaimer")
        ) {
          return {
            ...item,
            priority: 0.3,
            changefreq: "yearly",
            lastmod,
          };
        }

        // About page: middle priority
        if (pathname.includes("/about")) {
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
