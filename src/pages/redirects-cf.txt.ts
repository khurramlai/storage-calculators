import type { APIRoute } from "astro";
import { renderRedirectsFile } from "~/lib/redirects";

/**
 * Build-time source for Cloudflare's `_redirects`.
 *
 * Astro excludes any route under src/pages whose name starts with "_", so the
 * file cannot be emitted at its final name directly. The `cloudflareRedirects`
 * integration in astro.config.mjs renames this output to `_redirects` once the
 * build finishes, and deletes this temporary file.
 */
export const GET: APIRoute = () =>
  new Response(renderRedirectsFile(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
