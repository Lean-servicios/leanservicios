import { createFileRoute } from "@tanstack/react-router";

/** Sitemap dinámico. Al conectar un dominio propio, reemplazar BASE_URL. */
const BASE_URL = "https://leanservicios.lovable.app";

type Entrada = {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
};

const rutas: Entrada[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/postulate", changefreq: "monthly", priority: "0.8" },
  { path: "/politica-de-privacidad", changefreq: "yearly", priority: "0.3" },
  { path: "/terminos-y-condiciones", changefreq: "yearly", priority: "0.3" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = rutas.map((r) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${r.path}</loc>`,
            r.changefreq ? `    <changefreq>${r.changefreq}</changefreq>` : null,
            r.priority ? `    <priority>${r.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
