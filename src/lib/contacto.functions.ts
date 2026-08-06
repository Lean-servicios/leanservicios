import { createServerFn } from "@tanstack/react-start";

import { contactSchema, type ContactInput } from "./contacto.schema";

export { contactSchema };
export type { ContactInput };

export type ContactResult = { estado: "enviado" };

/**
 * Formulario de contacto / presupuesto.
 * Cada consulta queda guardada en la base (Lovable Cloud) y, cuando el envío de
 * correo está habilitado, se avisa además por email al equipo comercial.
 */
export const enviarConsulta = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }): Promise<ContactResult> => {
    const { guardarConsulta, avisarPorEmail } = await import("./contacto.server");

    let emailEnviado = false;
    try {
      emailEnviado = await avisarPorEmail(data);
    } catch (error) {
      console.error("[contacto] Falló el aviso por email:", error);
    }

    await guardarConsulta(data, emailEnviado);

    return { estado: "enviado" };
  });
