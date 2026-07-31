import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Formulario de contacto / presupuesto — envío seguro desde el servidor.
 *
 * Variables de entorno necesarias (agregarlas como secretos del proyecto):
 *  - CONTACT_NOTIFICATION_EMAIL → casilla que recibe las consultas
 *  - EMAIL_SERVICE_API_KEY      → API key del servicio de correo (Resend)
 *  - CONTACT_FROM_EMAIL         → remitente verificado (opcional)
 *
 * Mientras no existan credenciales, la consulta se valida y se registra en el
 * log del servidor, y el sitio informa el estado real al visitante.
 */

export const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresá tu nombre y apellido").max(120),
  empresa: z.string().trim().min(2, "Ingresá el nombre de la empresa").max(120),
  cargo: z.string().trim().max(120).optional().or(z.literal("")),
  telefono: z.string().trim().min(6, "Ingresá un teléfono válido").max(40),
  email: z.string().trim().email("Ingresá un email válido").max(180),
  localidad: z.string().trim().min(2, "Ingresá la localidad").max(120),
  servicio: z.enum([
    "Limpieza",
    "Fumigación",
    "Espacios verdes",
    "Obras civiles",
    "Varios servicios",
    "Otro",
  ]),
  ubicacionServicio: z.string().trim().min(2, "Indicá dónde se realizaría el servicio").max(180),
  mensaje: z.string().trim().min(10, "Contanos brevemente qué necesitás").max(2000),
  privacidad: z.literal(true, { errorMap: () => ({ message: "Debés aceptar la política de privacidad" }) }),
  /** Campo trampa anti-spam: debe llegar vacío. */
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactResult = { estado: "enviado" | "pendiente_configuracion" };

export const enviarConsulta = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }): Promise<ContactResult> => {
    const destino = process.env['CONTACT_NOTIFICATION_EMAIL'];
    const apiKey = process.env['EMAIL_SERVICE_API_KEY'];
    const remitente = process.env['CONTACT_FROM_EMAIL'] ?? "onboarding@resend.dev";

    const cuerpo = [
      `Nombre: ${data.nombre}`,
      `Empresa: ${data.empresa}`,
      data.cargo ? `Cargo: ${data.cargo}` : null,
      `Teléfono: ${data.telefono}`,
      `Email: ${data.email}`,
      `Localidad: ${data.localidad}`,
      `Servicio de interés: ${data.servicio}`,
      `Ubicación del servicio: ${data.ubicacionServicio}`,
      "",
      data.mensaje,
    ]
      .filter(Boolean)
      .join("\n");

    if (!destino || !apiKey) {
      console.warn(
        "[contacto] Falta configurar CONTACT_NOTIFICATION_EMAIL y/o EMAIL_SERVICE_API_KEY. Consulta recibida:\n" +
          cuerpo,
      );
      return { estado: "pendiente_configuracion" };
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Lean Service <${remitente}>`,
        to: [destino],
        reply_to: data.email,
        subject: `Nueva consulta web — ${data.empresa} (${data.servicio})`,
        text: cuerpo,
      }),
    });

    if (!response.ok) {
      const detalle = await response.text();
      console.error(`[contacto] Error del servicio de correo [${response.status}]: ${detalle}`);
      throw new Error("No pudimos enviar tu consulta en este momento. Intentá nuevamente.");
    }

    return { estado: "enviado" };
  });
