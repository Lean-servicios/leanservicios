import { createFileRoute } from "@tanstack/react-router";

/** Sitemap dinámico. Al conectar el dominio definitivo, reemplazar BASE_URL. */
const BASE_URL = ""; // TODO: p. ej. "https://www.leanservice.com.ar"

const rutas = ["/", "/trabaja-con-nosotros", "/politica-de-privacidad", "/terminos-y-condiciones"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const hoy = new Date().toISOString().slice(0, 10);
        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${rutas
  .map(
    (r) =>
      `  <url>\n    <loc>${BASE_URL}${r}</loc>\n    <lastmod>${hoy}</lastmod>\n    <changefreq>monthly</changefreq>\n  </url>`,
  )
  .join("\n")}
</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml" } });
      },
    },
  },
});
