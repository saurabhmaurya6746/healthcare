import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { TESTS } from "@/lib/site-data";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/about", "/tests", "/book", "/faq", "/contact", "/privacy", "/terms"];
        const testPaths = TESTS.map((t) => `/tests/${t.slug}`);
        const urls = [...staticPaths, ...testPaths].map(
          (p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`
        );
        const xml =
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
