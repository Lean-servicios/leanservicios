import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/SiteLayout";
import { Empleo } from "@/components/sections/Empleo";

const titulo = "Trabajá con nosotros | Lean Service";
const descripcion =
  "Sumate al equipo de Lean Service: búsquedas en limpieza, espacios verdes, fumigación y obras civiles. Cargá tu CV en el formulario.";

export const Route = createFileRoute("/trabaja-con-nosotros")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/trabaja-con-nosotros" }],
  }),
  component: TrabajaConNosotros,
});

function TrabajaConNosotros() {
  return (
    <SiteLayout solidHeader>
      <div className="gradient-brand pt-28 pb-16 text-primary-foreground">
        <div className="section-shell">
          <h1 className="text-3xl leading-tight sm:text-5xl">Sumate a nuestra base de talento</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Dejanos tus datos y tu CV. Cuando surja una búsqueda que encaje con tu perfil, te
            contactamos.
          </p>
        </div>
      </div>
      <Empleo compacto />
    </SiteLayout>
  );
}
