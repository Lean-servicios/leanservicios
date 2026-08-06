CREATE TABLE public.consultas_contacto (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  nombre text NOT NULL,
  email text NOT NULL,
  telefono text,
  empresa text,
  cargo text,
  localidad text,
  servicio text NOT NULL,
  ubicacion_servicio text,
  mensaje text NOT NULL,
  email_enviado boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.consultas_contacto TO anon;
GRANT INSERT ON public.consultas_contacto TO authenticated;
GRANT ALL ON public.consultas_contacto TO service_role;

ALTER TABLE public.consultas_contacto ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Cualquiera puede enviar una consulta"
ON public.consultas_contacto
FOR INSERT
TO anon, authenticated
WITH CHECK (true);