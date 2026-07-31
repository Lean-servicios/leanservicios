import { ShieldCheck } from "lucide-react";

import { diferenciales } from "@/config/content";

export function PorQueLean() {
  return (
    <section id="por-que-lean" className="bg-surface py-20 sm:py-28">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow">Por qué Lean</span>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            Por qué conviene un proveedor integral
          </h2>
          <p className="mt-4 text-muted-foreground">
            Un único punto de contacto, una misma coordinación y servicios que se adaptan al ritmo de
            cada instalación.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciales.map((d) => (
            <li key={d} className="card-surface flex items-start gap-3 p-5">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
              <span className="text-sm font-medium">{d}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
