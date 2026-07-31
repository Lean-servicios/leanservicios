import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { proceso } from "@/config/content";

export function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="gradient-brand py-12 text-primary-foreground sm:py-14">
      <div className="section-shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <ol className="grid gap-6 sm:grid-cols-3">
          {proceso.map((paso) => (
            <li key={paso.n} className="flex items-start gap-3">
              <span className="text-2xl font-bold text-accent">{paso.n}</span>
              <div>
                <h3 className="text-base leading-tight">{paso.titulo}</h3>
                <p className="mt-1 text-sm text-primary-foreground/75">{paso.texto}</p>
              </div>
            </li>
          ))}
        </ol>

        <Button asChild variant="hero" size="lg" className="justify-self-start">
          <a href="#contacto">
            Pedir una visita
            <ArrowRight className="size-4" aria-hidden />
          </a>
        </Button>
      </div>
    </section>
  );
}
