import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/SiteLayout";
import { LegalPage } from "@/components/LegalPage";

const titulo = "Términos y condiciones | Lean Service";
const descripcion =
  "Condiciones generales de uso del sitio web de Lean Service y alcance de la información publicada.";

export const Route = createFileRoute("/terminos-y-condiciones")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terminos-y-condiciones" }],
  }),
  component: Terminos,
});

function Terminos() {
  return (
    <SiteLayout solidHeader>
      <LegalPage
        titulo="Términos y condiciones"
        intro="Condiciones generales de uso del sitio web de Lean Service. Se trata de una estructura general y editable, que no constituye asesoramiento jurídico definitivo."
        secciones={[
          {
            titulo: "1. Alcance",
            parrafos: [
              "El uso de este sitio implica la aceptación de estos términos. La información publicada tiene carácter informativo sobre los servicios de Lean Service.",
            ],
          },
          {
            titulo: "2. Información de servicios",
            parrafos: [
              "Las descripciones de servicios son orientativas. El alcance definitivo de cada trabajo se establece en la propuesta o acuerdo particular con cada cliente.",
            ],
          },
          {
            titulo: "3. Consultas y presupuestos",
            parrafos: [
              "El envío de una consulta no constituye una contratación. Los presupuestos se emiten luego del relevamiento correspondiente y tienen la validez que se indique en cada caso.",
            ],
          },
          {
            titulo: "4. Postulaciones laborales",
            parrafos: [
              "El envío de una postulación no genera obligación de contratación ni de respuesta en un plazo determinado.",
            ],
          },
          {
            titulo: "5. Propiedad intelectual",
            parrafos: [
              "Los logotipos, marcas, textos e imágenes propias del sitio pertenecen a Lean Service y no pueden reproducirse sin autorización.",
            ],
          },
          {
            titulo: "6. Modificaciones",
            parrafos: [
              "Lean Service puede modificar el contenido del sitio y estos términos en cualquier momento. La versión vigente es la publicada en esta página.",
            ],
          },
        ]}
      />
    </SiteLayout>
  );
}
