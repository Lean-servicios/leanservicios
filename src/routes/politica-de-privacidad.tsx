import { createFileRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/SiteLayout";
import { LegalPage } from "@/components/LegalPage";

const titulo = "Política de privacidad | Lean Service";
const descripcion =
  "Cómo Lean Service trata los datos de consultas comerciales y de postulaciones laborales recibidas a través del sitio.";

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () => ({
    meta: [
      { title: titulo },
      { name: "description", content: descripcion },
      { property: "og:title", content: titulo },
      { property: "og:description", content: descripcion },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://leanservicios.lovable.app/politica-de-privacidad" }],
  }),
  component: Privacidad,
});

function Privacidad() {
  return (
    <SiteLayout solidHeader>
      <LegalPage
        titulo="Política de privacidad"
        intro="Este documento describe, de manera general y editable, cómo Lean Service trata la información que recibe a través de su sitio web. No constituye asesoramiento jurídico definitivo y debe ser revisado por un profesional antes de su publicación final."
        secciones={[
          {
            titulo: "1. Datos que recopilamos",
            parrafos: [
              "Recopilamos únicamente los datos que las personas nos envían de forma voluntaria: datos de contacto e información sobre la consulta comercial o la postulación laboral.",
            ],
          },
          {
            titulo: "2. Consultas comerciales",
            parrafos: [
              "Los datos enviados mediante el formulario de contacto se utilizan exclusivamente para responder consultas, coordinar visitas y elaborar propuestas de servicios.",
            ],
          },
          {
            titulo: "3. Postulaciones laborales",
            parrafos: [
              "Los datos ingresados en el formulario externo de empleo se utilizan exclusivamente para procesos de selección y oportunidades laborales de Lean Service.",
              "La información de postulantes puede ser gestionada mediante Airtable como plataforma externa de recepción y organización de postulaciones.",
            ],
          },
          {
            titulo: "4. Conservación y acceso",
            parrafos: [
              "Conservamos la información durante el tiempo necesario para cumplir con la finalidad para la que fue enviada. El acceso queda limitado al personal de Lean Service que interviene en la gestión de consultas o procesos de selección.",
            ],
          },
          {
            titulo: "5. Terceros",
            parrafos: [
              "No comercializamos ni cedemos los datos a terceros con fines publicitarios. Podemos utilizar proveedores tecnológicos (por ejemplo, servicios de correo o formularios externos) únicamente para operar los canales de contacto y postulación.",
            ],
          },
          {
            titulo: "6. Derechos de las personas",
            parrafos: [
              "Las personas pueden solicitar el acceso, la rectificación o la supresión de sus datos escribiendo a los canales de contacto publicados en este sitio.",
            ],
          },
          {
            titulo: "7. Cambios",
            parrafos: [
              "Esta política puede actualizarse. La versión vigente será siempre la publicada en esta página.",
            ],
          },
        ]}
      />
    </SiteLayout>
  );
}
