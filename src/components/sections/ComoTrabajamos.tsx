import { proceso } from "@/config/content";

export function ComoTrabajamos() {
  return (
    <section id="como-trabajamos" className="gradient-brand py-12 text-primary-foreground sm:py-14">
      <div className="section-shell">
        <div className="max-w-2xl">
          <span className="eyebrow text-primary-foreground/70">Cómo trabajamos</span>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            Un método simple, ordenado y verificable
          </h2>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {proceso.map((paso) => (
            <li
              key={paso.n}
              className="relative rounded-xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 transition-colors hover:bg-primary-foreground/10"
            >
              <span className="text-3xl font-bold text-accent">{paso.n}</span>
              <h3 className="mt-3 text-lg">{paso.titulo}</h3>
              <p className="mt-2 text-sm text-primary-foreground/75">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
