import industriaImg from "@/assets/industria.jpg";

const capacidades = [
  "Equipos operativos y personal de oficio",
  "Organización por turnos y roster",
  "Higiene y Seguridad integrada",
  "Entrega de EPP y capacitaciones",
];

export function Industria() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <img
        src={industriaImg}
        alt="Personal con elementos de protección en un proyecto industrial"
        className="absolute inset-0 -z-20 size-full object-cover"
        loading="lazy"
        width={1600}
        height={1000}
      />
      <div className="hero-overlay absolute inset-0 -z-10" aria-hidden />

      <div className="section-shell grid gap-12 text-primary-foreground lg:grid-cols-2">
        <div>
          <span className="eyebrow text-accent">Industria y minería</span>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            Servicios preparados para entornos exigentes
          </h2>
          <div className="mt-6 space-y-4 text-primary-foreground/85">
            <p>
              Lean adapta sus equipos, recursos y modalidades de trabajo a las características de
              cada operación, instalación y proyecto.
            </p>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {capacidades.map((c) => (
            <li
              key={c}
              className="rounded-lg border border-primary-foreground/20 bg-primary-foreground/5 p-4 text-sm backdrop-blur-sm"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
