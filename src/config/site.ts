/**
 * ─────────────────────────────────────────────────────────────
 *  CONFIGURACIÓN EDITABLE DEL SITIO — LEAN SERVICE
 * ─────────────────────────────────────────────────────────────
 *  Todos los datos de contacto, enlaces e información institucional
 *  se editan ÚNICAMENTE en este archivo.
 *
 *  Regla importante: si un dato todavía NO es real, dejarlo en null.
 *  El sitio oculta automáticamente todo lo que esté en null
 *  (no se muestran placeholders como si fueran datos verdaderos).
 * ─────────────────────────────────────────────────────────────
 */

const env = import.meta.env as Record<string, string | undefined>;

export const siteConfig = {
  nombre: "LEAN SERVICE",
  razonSocial: "LEAN Servicios Integrales S.A.S.",
  slogan: "Cuidamos el pulso de cada espacio.",
  fraseComercial: "Un solo proveedor. Múltiples soluciones.",

  /** Número de WhatsApp en formato internacional sin signos: ej. "5491112345678".
   *  Variable de entorno: VITE_LEAN_WHATSAPP_NUMBER */
  whatsapp: env['VITE_LEAN_WHATSAPP_NUMBER'] ?? null,
  whatsappMensaje:
    "Hola Lean Service, me contacto desde su página web y quisiera realizar una consulta.",

  /** Datos de contacto — completar cuando estén confirmados. */
  telefono: null as string | null,
  email: null as string | null,
  direccion: null as string | null,
  localidad: null as string | null,
  horarioAtencion: null as string | null,
  zonaCobertura: null as string | null,

  /** Redes sociales */
  instagram: null as string | null,
  linkedin: null as string | null,

  /** Información institucional — completar con datos reales. */
  institucional: {
    anioInicio: null as string | null,
    historia: null as string | null,
    equipoDirectivo: null as string | null,
    cantidadColaboradores: null as string | null,
  },

  /** Formulario público de Airtable para postulaciones laborales.
   *  Variable de entorno: VITE_AIRTABLE_POSTULANTES_FORM_URL
   *  Se usa exclusivamente para recibir postulaciones. */
  airtablePostulantesFormUrl: env['VITE_AIRTABLE_POSTULANTES_FORM_URL'] ?? null,
};

/** Enlace de WhatsApp listo para usar (null si el número no está configurado). */
export const whatsappLink = siteConfig.whatsapp
  ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMensaje)}`
  : null;
