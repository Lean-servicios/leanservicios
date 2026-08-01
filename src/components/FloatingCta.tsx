import { ArrowRight, MessageCircle } from "lucide-react";

import { siteConfig, whatsappLink } from "@/config/site";

/** CTA flotante siempre visible: presupuesto + WhatsApp. */
export function FloatingCta() {
  const configurado = Boolean(whatsappLink);

  return (
    <div className="fixed right-3 bottom-3 z-50 flex items-center gap-2 sm:right-6 sm:bottom-6">
      <a
        href={whatsappLink ?? "/#contacto"}
        {...(configurado ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        aria-label={
          configurado
            ? "Escribinos por WhatsApp"
            : "WhatsApp no configurado — ir al formulario de contacto"
        }
        title={configurado ? siteConfig.whatsappMensaje : "Configurar VITE_LEAN_WHATSAPP_NUMBER"}
        className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform hover:scale-105 focus-visible:scale-105 sm:size-12"
      >
        <MessageCircle className="size-4 sm:size-5" aria-hidden />
      </a>

      <a
        href="/#contacto"
        className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-2 text-xs font-semibold text-accent-foreground shadow-lift transition-transform hover:scale-105 focus-visible:scale-105 sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
      >
        Solicitar presupuesto
        <ArrowRight className="size-3.5 sm:size-4" aria-hidden />
      </a>
    </div>
  );
}
