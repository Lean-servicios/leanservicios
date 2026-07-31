export type SeccionLegal = { titulo: string; parrafos: string[] };

/** Layout reutilizable y editable para páginas legales. */
export function LegalPage({
  titulo,
  intro,
  secciones,
}: {
  titulo: string;
  intro: string;
  secciones: SeccionLegal[];
}) {
  return (
    <article className="bg-background pt-28 pb-20">
      <div className="section-shell max-w-3xl">
        <h1 className="text-3xl leading-tight sm:text-4xl">{titulo}</h1>
        <p className="mt-5 text-muted-foreground">{intro}</p>

        <div className="mt-10 space-y-8">
          {secciones.map((s) => (
            <section key={s.titulo}>
              <h2 className="text-xl">{s.titulo}</h2>
              {s.parrafos.map((p) => (
                <p key={p} className="mt-3 text-muted-foreground">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
