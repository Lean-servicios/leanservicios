import { useState } from "react";
import { X } from "lucide-react";

import { trabajos, type Trabajo } from "@/config/content";
import { cn } from "@/lib/utils";

const filtros = ["Todos", "Limpieza", "Fumigación", "Espacios verdes", "Obras civiles"] as const;

export function Trabajos() {
  const [filtro, setFiltro] = useState<(typeof filtros)[number]>("Todos");
  const [activo, setActivo] = useState<Trabajo | null>(null);

  const visibles = filtro === "Todos" ? trabajos : trabajos.filter((t) => t.categoria === filtro);

  return (
    <section id="trabajos" className="bg-background py-14 sm:py-20">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow">Trabajos realizados</span>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">Trabajos realizados</h2>
          <p className="mt-4 text-muted-foreground">
            Operativos de limpieza, fumigación, espacios verdes y mantenimiento en instalaciones y
            eventos de gran convocatoria.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar trabajos">
          {filtros.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={filtro === f}
              onClick={() => setFiltro(f)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                filtro === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground/75 hover:border-primary hover:text-primary",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibles.map((t) => (
            <button
              key={t.titulo}
              type="button"
              onClick={() => setActivo(t)}
              className="card-surface group overflow-hidden text-left"
            >
              <img
                src={t.imagen}
                alt={t.titulo}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={1200}
                height={900}
              />
              <div className="p-5">
                <span className="text-xs font-bold tracking-widest uppercase text-accent">
                  {t.categoria}
                </span>
                <h3 className="mt-2 text-lg">{t.titulo}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{t.descripcion}</p>
                {t.ubicacion && <p className="mt-2 text-xs text-muted-foreground">{t.ubicacion}</p>}
              </div>
            </button>
          ))}
        </div>
      </div>

      {activo && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activo.titulo}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setActivo(null)}
        >
          <div
            className="max-h-full w-full max-w-3xl overflow-auto rounded-xl bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-border p-4">
              <div className="min-w-0">
                <span className="text-xs font-bold tracking-widest uppercase text-accent">
                  {activo.categoria}
                </span>
                <h3 className="truncate text-lg">{activo.titulo}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActivo(null)}
                aria-label="Cerrar galería"
                className="rounded-md p-2 hover:bg-secondary"
              >
                <X className="size-5" />
              </button>
            </div>
            <img src={activo.imagen} alt={activo.titulo} className="w-full object-cover" />
            <p className="p-5 text-sm text-muted-foreground">{activo.descripcion}</p>
          </div>
        </div>
      )}
    </section>
  );
}
