import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Empleo({ compacto = false }: { compacto?: boolean }) {
  const formUrl = siteConfig.airtablePostulantesFormUrl;

  return (
    <section id="empleo" className="bg-surface py-14 sm:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow">Trabajá con nosotros</span>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            Sumate a nuestra base de talento
          </h2>
          <p className="mt-4 text-muted-foreground">
            Siempre estamos conociendo gente para sumar a nuestros equipos. Dejanos tus datos y tu
            CV: cuando surja algo que encaje con tu perfil, te escribimos.
          </p>
        </div>

        <div className="card-surface mt-10 border-l-4 border-l-brand-lime p-6 sm:p-8">
          <p className="max-w-3xl text-muted-foreground">
            Es un formulario corto: te toma menos de cinco minutos.
          </p>


          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            {formUrl ? (
              <Button asChild variant="accent" size="lg">
                <a href={formUrl} target="_blank" rel="noopener noreferrer">
                  Completar mi postulación
                  <ExternalLink className="size-4" aria-hidden />
                </a>
              </Button>
            ) : (
              <Button variant="accent" size="lg" disabled title="Configurar VITE_AIRTABLE_POSTULANTES_FORM_URL">
                Completar mi postulación
              </Button>
            )}

            {!compacto && (
              <Button asChild variant="outline" size="lg">
                <Link to="/trabaja-con-nosotros">Ver más información</Link>
              </Button>
            )}
          </div>

          {!formUrl && (
            <p className="mt-4 rounded-md bg-secondary p-3 text-xs text-muted-foreground">
              <strong>Nota de configuración:</strong> el botón se activa al cargar la URL pública del
              formulario de Airtable en <code>VITE_AIRTABLE_POSTULANTES_FORM_URL</code> (o
              directamente en <code>src/config/site.ts</code>).
            </p>
          )}

          <p className="mt-5 text-xs text-muted-foreground">
            Los datos ingresados serán utilizados exclusivamente para gestionar procesos de selección
            y oportunidades laborales de Lean Service.{" "}
            <Link to="/politica-de-privacidad" className="text-primary underline underline-offset-4">
              Ver política de privacidad
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
