import { z } from "zod";

export const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Ingresá tu nombre y apellido").max(120),
  email: z.string().trim().email("Ingresá un email válido").max(180),
  telefono: z.string().trim().max(40).optional().or(z.literal("")),
  empresa: z.string().trim().max(120).optional().or(z.literal("")),
  cargo: z.string().trim().max(120).optional().or(z.literal("")),
  localidad: z.string().trim().max(120).optional().or(z.literal("")),
  servicio: z.enum([
    "Limpieza",
    "Fumigación",
    "Espacios verdes",
    "Obras civiles",
    "Varios servicios",
    "Otro",
  ]),
  ubicacionServicio: z.string().trim().max(180).optional().or(z.literal("")),
  mensaje: z.string().trim().min(5, "Contanos brevemente qué necesitás").max(2000),
  privacidad: z.literal(true, {
    errorMap: () => ({ message: "Debés aceptar la política de privacidad" }),
  }),
  /** Campo trampa anti-spam: debe llegar vacío. */
  honeypot: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
