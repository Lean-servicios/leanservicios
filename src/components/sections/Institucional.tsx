import { Check } from "lucide-react";

import institucionalImg from "@/assets/institucional.jpg";
import { diferenciales } from "@/config/content";
import { siteConfig } from "@/config/site";

export function Institucional() {
  const { institucional } = siteConfig;

  return (
    <section id="nosotros" className="bg-background py-14 sm:py-20">
      <div className="section-shell grid items-center gap-12 lg:grid-cols-2">
        <div>
          <span className="eyebrow">Nosotros</span>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
            Un solo proveedor para el cuidado de tus instalaciones
          </h2>
          <p className="mt-4 text-muted-foreground">
            Limpieza, fumigación, espacios verdes y obras civiles con una misma coordinación: menos
            proveedores y una operación que no se detiene.
          </p>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {diferenciales.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span>{d}</span>
              </li>
            ))}
          </ul>


          {/* Datos institucionales: se muestran únicamente cuando están cargados
              en src/config/site.ts con información real. */}
          {(institucional.historia ||
            institucional.anioInicio ||
            institucional.equipoDirectivo ||
            institucional.cantidadColaboradores ||
            siteConfig.zonaCobertura) && (
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              {institucional.anioInicio && (
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    Inicio de actividades
                  </dt>
                  <dd className="text-lg font-semibold">{institucional.anioInicio}</dd>
                </div>
              )}
              {siteConfig.zonaCobertura && (
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    Zona de cobertura
                  </dt>
                  <dd className="text-lg font-semibold">{siteConfig.zonaCobertura}</dd>
                </div>
              )}
              {institucional.cantidadColaboradores && (
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    Equipo
                  </dt>
                  <dd className="text-lg font-semibold">{institucional.cantidadColaboradores}</dd>
                </div>
              )}
              {institucional.equipoDirectivo && (
                <div>
                  <dt className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    Dirección
                  </dt>
                  <dd className="text-lg font-semibold">{institucional.equipoDirectivo}</dd>
                </div>
              )}
              {institucional.historia && (
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                    Nuestra historia
                  </dt>
                  <dd className="mt-1 text-muted-foreground">{institucional.historia}</dd>
                </div>
              )}
            </dl>
          )}
        </div>

        <figure className="relative">
          <img
            src={institucionalImg}
            alt="Supervisor coordinando tareas con personal operativo en una instalación"
            className="w-full rounded-xl object-cover shadow-lift"
            loading="lazy"
            width={1280}
            height={960}
          />
        </figure>
      </div>
    </section>
  );
}
