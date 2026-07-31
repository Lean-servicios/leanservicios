import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import heroImg from "@/assets/hero-lean.jpg";
import logoBlanco from "@/assets/lean-logo-horizontal-blanco.png.asset.json";

const pilares = ["Limpieza", "Fumigación", "Espacios verdes", "Obras civiles"];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Equipo de Lean Service trabajando en una instalación industrial"
        className="absolute inset-0 -z-20 size-full object-cover"
        width={1920}
        height={1088}
        fetchPriority="high"
      />
      <div className="hero-overlay absolute inset-0 -z-10" aria-hidden />

      <div className="section-shell py-28 text-primary-foreground sm:py-32">
        <div className="max-w-3xl animate-rise">
          <img
            src={logoBlanco.url}
            alt="LEAN Servicios Integrales S.A.S."
            className="h-14 w-auto sm:h-16"
            width={560}
            height={160}
          />

          <h1 className="mt-8 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Cuidamos el pulso de cada espacio.
          </h1>

          <p className="mt-6 max-w-2xl text-base text-primary-foreground/85 sm:text-lg">
            Soluciones integrales de limpieza, fumigación, espacios verdes y obras civiles para
            acompañar el funcionamiento, mantenimiento y evolución de tus instalaciones.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="lg">
              <a href="#contacto">Solicitar presupuesto</a>
            </Button>
            <Button asChild variant="onDark" size="lg">
              <a href="#servicios">Conocer nuestros servicios</a>
            </Button>
          </div>

          <p className="mt-10 text-xs font-semibold tracking-[0.14em] uppercase text-primary-foreground/70">
            {siteConfig.fraseComercial}
          </p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 border-t border-primary-foreground/15 bg-primary-dark/60 backdrop-blur-sm">
        <ul className="section-shell flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-4 text-xs font-semibold tracking-[0.14em] uppercase text-primary-foreground/85 sm:text-sm">
          {pilares.map((p, i) => (
            <li key={p} className="flex items-center gap-6">
              {i > 0 && <span className="hidden text-primary-foreground/30 sm:inline">|</span>}
              {p}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
