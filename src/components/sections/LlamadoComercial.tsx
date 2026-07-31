import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";

export function LlamadoComercial() {
  return (
    <section className="bg-primary-dark py-16 text-primary-foreground sm:py-20">
      <div className="section-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div>
          <h2 className="text-3xl leading-tight sm:text-4xl">
            ¿Necesitás una solución para tus instalaciones?
          </h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">
            Contanos qué necesitás y prepararemos una propuesta adaptada a tu empresa, instalación o
            proyecto.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="hero" size="lg">
            <a href="#contacto">Solicitar presupuesto</a>
          </Button>
          {whatsappLink ? (
            <Button asChild variant="onDark" size="lg">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" aria-hidden />
                Hablar por WhatsApp
              </a>
            </Button>
          ) : (
            <Button
              variant="onDark"
              size="lg"
              disabled
              title="Configurar VITE_LEAN_WHATSAPP_NUMBER"
            >
              <MessageCircle className="size-4" aria-hidden />
              Hablar por WhatsApp
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
