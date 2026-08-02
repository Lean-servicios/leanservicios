import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, MapPin, Phone, Clock } from "lucide-react";

import { siteConfig, whatsappLink } from "@/config/site";
import { servicios } from "@/config/content";
import isotipoBlanco from "@/assets/lean-isotipo-blanco.png.asset.json";

export function Footer() {
  const year = new Date().getFullYear();

  const datos = [
    { icon: Phone, valor: siteConfig.telefono, label: "Teléfono" },
    { icon: Mail, valor: siteConfig.email, label: "Email" },
    { icon: MapPin, valor: siteConfig.direccion ?? siteConfig.localidad, label: "Dirección" },
    { icon: Clock, valor: siteConfig.horarioAtencion, label: "Horario de atención" },
  ].filter((d) => Boolean(d.valor));

  return (
    <footer className="gradient-brand text-primary-foreground">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <img
            src={logoBlanco.url}
            alt="LEAN - Servicios Integrales"
            className="h-12 w-auto"
            loading="lazy"
            width={480}
            height={140}
          />
          <p className="mt-5 text-lg font-semibold">{siteConfig.nombre}</p>
          <p className="text-primary-foreground/75">{siteConfig.slogan}</p>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Limpieza | Fumigación | Espacios verdes | Obras civiles
          </p>

          {(siteConfig.instagram || siteConfig.linkedin || whatsappLink) && (
            <div className="mt-5 flex gap-3">
              {siteConfig.instagram && (
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de Lean Service"
                  className="rounded-md border border-primary-foreground/30 p-2 transition-colors hover:bg-primary-foreground/10"
                >
                  <Instagram className="size-4" />
                </a>
              )}
              {siteConfig.linkedin && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Lean Service"
                  className="rounded-md border border-primary-foreground/30 p-2 transition-colors hover:bg-primary-foreground/10"
                >
                  <Linkedin className="size-4" />
                </a>
              )}
            </div>
          )}
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] uppercase text-primary-foreground/70">
            Servicios
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {servicios.map((s) => (
              <li key={s.id}>
                <a
                  href={`/#servicio-${s.id}`}
                  className="text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                >
                  {s.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] uppercase text-primary-foreground/70">
            Enlaces rápidos
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/#nosotros" className="text-primary-foreground/85 hover:text-primary-foreground">
                Nosotros
              </a>
            </li>
            <li>
              <a href="/#como-trabajamos" className="text-primary-foreground/85 hover:text-primary-foreground">
                Cómo trabajamos
              </a>
            </li>
            <li>
              <a href="/#trabajos" className="text-primary-foreground/85 hover:text-primary-foreground">
                Trabajos realizados
              </a>
            </li>
            <li>
              <Link to="/trabaja-con-nosotros" className="text-primary-foreground/85 hover:text-primary-foreground">
                Trabajá con nosotros
              </Link>
            </li>
            <li>
              <Link to="/politica-de-privacidad" className="text-primary-foreground/85 hover:text-primary-foreground">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link to="/terminos-y-condiciones" className="text-primary-foreground/85 hover:text-primary-foreground">
                Términos y condiciones
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] uppercase text-primary-foreground/70">
            Contacto
          </h3>
          {datos.length > 0 ? (
            <ul className="mt-4 space-y-3 text-sm">
              {datos.map((d) => (
                <li key={d.label} className="flex items-start gap-2 text-primary-foreground/85">
                  <d.icon className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <span>{d.valor}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 text-sm text-primary-foreground/70">
              Escribinos desde el{" "}
              <a href="/#contacto" className="underline underline-offset-4">
                formulario de contacto
              </a>
              .
            </p>
          )}
          {siteConfig.zonaCobertura && (
            <p className="mt-4 text-sm text-primary-foreground/70">{siteConfig.zonaCobertura}</p>
          )}
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="section-shell flex flex-col gap-2 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.razonSocial}. Todos los derechos reservados.
          </p>
          <p>{siteConfig.fraseComercial}</p>
        </div>
      </div>
    </footer>
  );
}
