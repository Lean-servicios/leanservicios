import { MessageCircle } from "lucide-react";

import { siteConfig, whatsappLink } from "@/config/site";

/** Botón flotante de WhatsApp.
 *  Requiere configurar VITE_LEAN_WHATSAPP_NUMBER en src/config/site.ts.
 *  Mientras no exista número real, deriva al formulario de contacto. */
export function WhatsAppFloat() {
  const configurado = Boolean(whatsappLink);

  return (
    <a
      href={whatsappLink ?? "/#contacto"}
      {...(configurado ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      aria-label={
        configurado
          ? "Escribinos por WhatsApp"
          : "WhatsApp no configurado — ir al formulario de contacto"
      }
      title={configurado ? siteConfig.whatsappMensaje : "Configurar VITE_LEAN_WHATSAPP_NUMBER"}
      className="fixed right-4 bottom-4 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-105 focus-visible:scale-105 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-5" aria-hidden />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
