import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { servicios } from "@/config/content";

export function Servicios() {
  return (
    <section id="servicios" className="bg-surface py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow">Servicios</span>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            Cuatro servicios, un solo proveedor
          </h2>
          <p className="mt-4 text-muted-foreground">
            Coordinamos personas, recursos y tareas para cubrir las necesidades operativas de cada
            instalación.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {servicios.map((s) => (
            <article
              key={s.id}
              id={`servicio-${s.id}`}
              className="card-surface flex flex-col overflow-hidden"
            >
              <img
                src={s.imagen}
                alt={s.titulo}
                className="h-56 w-full object-cover"
                loading="lazy"
                width={1200}
                height={900}
              />
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl">{s.titulo}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.texto}</p>

                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild variant="default" className="mt-8 self-start">
                  <a href="#contacto">
                    {s.cta}
                    <ArrowRight className="size-4" aria-hidden />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
