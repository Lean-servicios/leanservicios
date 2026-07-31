import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { servicios } from "@/config/content";
import { irAlCuestionario } from "@/lib/servicio-cta";

export function Servicios() {
  return (
    <section id="servicios" className="bg-surface py-14 sm:py-20">
      <div className="section-shell">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <span className="eyebrow">Servicios</span>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              Cuatro servicios, un solo proveedor
            </h2>
          </div>
          <Button
            variant="outline"
            className="hidden sm:inline-flex"
            onClick={() => irAlCuestionario("Varios servicios")}
          >
            Necesito varios servicios
            <ArrowRight className="size-4" aria-hidden />
          </Button>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {servicios.map((s) => (
            <article
              key={s.id}
              id={`servicio-${s.id}`}
              className="card-surface flex flex-col overflow-hidden"
            >
              <img
                src={s.imagen}
                alt={s.titulo}
                className="h-40 w-full object-cover"
                loading="lazy"
                width={1200}
                height={900}
              />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl">{s.titulo}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.texto}</p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="accent"
                  className="mt-6 self-start"
                  onClick={() => irAlCuestionario(s.servicioFormulario)}
                >
                  {s.cta}
                  <ArrowRight className="size-4" aria-hidden />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
