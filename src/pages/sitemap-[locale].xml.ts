import type { APIRoute } from "astro";
import type { Locale } from "~/i18n/config";
import { renderUrlset, sitemapEntries, sitemapLocales } from "~/lib/sitemap";

/**
 * One sitemap per language: /sitemap-en.xml, /sitemap-fr.xml, ...
 * All of them are listed in /sitemap-index.xml, which is the URL in robots.txt
 * and the one submitted to Search Console.
 */
export function getStaticPaths() {
  return sitemapLocales().map((locale) => ({
    params: { locale },
    props: { locale },
  }));
}

export const GET: APIRoute = ({ props }) => {
  const { locale } = props as { locale: Locale };
  const body = renderUrlset(sitemapEntries(locale, new Date().toISOString()));

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
