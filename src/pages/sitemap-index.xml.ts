import type { APIRoute } from "astro";
import { SITE_URL } from "~/lib/site";
import { renderSitemapIndex, sitemapLocales, sitemapPath } from "~/lib/sitemap";

/**
 * Index of the per-language sitemaps. Keeps its historical filename because
 * robots.txt, the footer link, and the Search Console submission all point
 * here.
 */
export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString();
  const body = renderSitemapIndex(
    sitemapLocales().map((locale) => ({
      loc: new URL(sitemapPath(locale), SITE_URL).toString(),
      lastmod,
    }))
  );

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
