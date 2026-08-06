import type { ContactInput } from "./contacto.schema";

/**
 * Guarda la consulta del formulario en la base de datos (Lovable Cloud).
 * Se usa el cliente con service role porque el visitante no está autenticado.
 */
export async function guardarConsulta(data: ContactInput, emailEnviado: boolean) {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

  const { error } = await supabaseAdmin.from("consultas_contacto").insert({
    nombre: data.nombre,
    email: data.email,
    telefono: data.telefono || null,
    empresa: data.empresa || null,
    cargo: data.cargo || null,
    localidad: data.localidad || null,
    servicio: data.servicio,
    ubicacion_servicio: data.ubicacionServicio || null,
    mensaje: data.mensaje,
    email_enviado: emailEnviado,
  });

  if (error) {
    console.error("[contacto] No se pudo guardar la consulta:", error.message);
    throw new Error("No pudimos registrar tu consulta. Intentá nuevamente en unos minutos.");
  }
}

export function cuerpoConsulta(data: ContactInput): string {
  return [
    `Nombre: ${data.nombre}`,
    `Email: ${data.email}`,
    data.telefono ? `Teléfono: ${data.telefono}` : null,
    data.empresa ? `Empresa: ${data.empresa}` : null,
    data.cargo ? `Cargo: ${data.cargo}` : null,
    data.localidad ? `Localidad: ${data.localidad}` : null,
    `Servicio de interés: ${data.servicio}`,
    data.ubicacionServicio ? `Ubicación del servicio: ${data.ubicacionServicio}` : null,
    "",
    data.mensaje,
  ]
    .filter(Boolean)
    .join("\n");
}

/**
 * Envía el aviso por email al equipo comercial.
 * Devuelve true si el correo salió; false si el envío todavía no está habilitado.
 */
export async function avisarPorEmail(data: ContactInput): Promise<boolean> {
  const destino = process.env["CONTACT_NOTIFICATION_EMAIL"];
  const apiKey = process.env["EMAIL_SERVICE_API_KEY"];
  const remitente = process.env["CONTACT_FROM_EMAIL"];
  const cuerpo = cuerpoConsulta(data);

  if (!destino || !apiKey || !remitente) {
    console.warn(`[contacto] Envío de email no configurado. Consulta guardada en la base:\n${cuerpo}`);
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `LEAN Servicios <${remitente}>`,
      to: [destino],
      reply_to: data.email,
      subject: `Nueva consulta web — ${data.nombre} (${data.servicio})`,
      text: cuerpo,
    }),
  });

  if (!response.ok) {
    console.error(`[contacto] Error del servicio de correo [${response.status}]: ${await response.text()}`);
    return false;
  }

  return true;
}
