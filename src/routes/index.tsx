import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { Institucional } from "@/components/sections/Institucional";
import { Servicios } from "@/components/sections/Servicios";
import { MiradaIntegral } from "@/components/sections/MiradaIntegral";
import { ComoTrabajamos } from "@/components/sections/ComoTrabajamos";
import { PorQueLean } from "@/components/sections/PorQueLean";
import { Industria } from "@/components/sections/Industria";
import { Trabajos } from "@/components/sections/Trabajos";
import { Empleo } from "@/components/sections/Empleo";
import { LlamadoComercial } from "@/components/sections/LlamadoComercial";
import { Contacto } from "@/components/sections/Contacto";

const titulo = "Lean Service | Limpieza, Fumigación, Espacios Verdes y Obras Civiles";
const descripcion =
  "Lean Service brinda soluciones integrales de limpieza, fumigación, mantenimiento de espacios verdes y obras civiles adaptadas a empresas, industrias e instituciones.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "LEAN Servicios Integrales S.A.S.",
          alternateName: "Lean Service",
          slogan: "Cuidamos el pulso de cada espacio.",
          description: descripcion,
          areaServed: "AR",
          makesOffer: [
            "Limpieza integral",
            "Fumigación y control de plagas",
            "Jardinería y espacios verdes",
            "Obras civiles y mantenimiento edilicio",
          ].map((nombre) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: nombre, serviceType: nombre },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <h1 className="sr-only">
        Lean Service — soluciones integrales de limpieza, fumigación, espacios verdes y obras civiles
      </h1>
      <Hero />
      <Institucional />
      <Servicios />
      <MiradaIntegral />
      <ComoTrabajamos />
      <PorQueLean />
      <Industria />
      <Trabajos />
      <Empleo />
      <LlamadoComercial />
      <Contacto />
    </SiteLayout>
  );
}
