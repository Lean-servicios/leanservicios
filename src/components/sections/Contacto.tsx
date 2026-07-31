import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export function Contacto() {
  const datos = [
    { icon: Phone, label: "Teléfono", valor: siteConfig.telefono },
    { icon: Mail, label: "Email", valor: siteConfig.email },
    { icon: MapPin, label: "Dirección", valor: siteConfig.direccion ?? siteConfig.localidad },
    { icon: Clock, label: "Horario de atención", valor: siteConfig.horarioAtencion },
  ].filter((d) => Boolean(d.valor));

  return (
    <section id="contacto" className="bg-background py-20 sm:py-28">
      <div className="section-shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div>
          <span className="eyebrow">Contacto</span>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
            Solicitá una visita o un presupuesto
          </h2>
          <p className="mt-4 text-muted-foreground">
            Completá el formulario y nos comunicamos para conocer tu instalación, relevar necesidades
            y preparar una propuesta.
          </p>

          {datos.length > 0 && (
            <ul className="mt-8 space-y-4">
              {datos.map((d) => (
                <li key={d.label} className="flex items-start gap-3">
                  <d.icon className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">
                      {d.label}
                    </p>
                    <p className="font-medium">{d.valor}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {siteConfig.zonaCobertura && (
            <p className="mt-6 text-sm text-muted-foreground">{siteConfig.zonaCobertura}</p>
          )}
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
