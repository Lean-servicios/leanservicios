import { Sparkles, Bug, Trees, HardHat } from "lucide-react";

const nodos = [
  { icon: Sparkles, label: "Limpieza" },
  { icon: Bug, label: "Fumigación" },
  { icon: Trees, label: "Espacios verdes" },
  { icon: HardHat, label: "Obras civiles" },
];

export function MiradaIntegral() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Mirada integral</span>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            Una mirada integral sobre cada instalación
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>Cada instalación funciona como un sistema.</p>
            <p>
              La limpieza, el mantenimiento, los espacios exteriores, el control de plagas y el
              estado de la infraestructura forman parte de una misma realidad.
            </p>
            <p>
              Por eso en Lean coordinamos personas, recursos y servicios para acompañar el
              funcionamiento cotidiano de nuestros clientes.
            </p>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-8 rounded-full border border-dashed border-border" aria-hidden />
          <div className="absolute inset-0 grid place-items-center">
            <div className="gradient-brand grid size-28 place-items-center rounded-full text-center text-xs font-bold tracking-widest uppercase text-primary-foreground shadow-lift">
              Lean
            </div>
          </div>

          {nodos.map((n, i) => {
            const angle = (i / nodos.length) * 2 * Math.PI - Math.PI / 2;
            const x = 50 + 41 * Math.cos(angle);
            const y = 50 + 41 * Math.sin(angle);
            return (
              <div
                key={n.label}
                className="absolute w-28 -translate-x-1/2 -translate-y-1/2 text-center"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="card-surface mx-auto grid size-14 place-items-center rounded-full">
                  <n.icon className="size-6 text-primary" aria-hidden />
                </div>
                <p className="mt-2 text-xs font-semibold">{n.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
