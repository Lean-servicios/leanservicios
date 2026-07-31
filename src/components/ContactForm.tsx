import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactSchema, enviarConsulta, type ContactInput } from "@/lib/contacto.functions";

const servicios = [
  "Limpieza",
  "Fumigación",
  "Espacios verdes",
  "Obras civiles",
  "Varios servicios",
  "Otro",
] as const;

const fieldClass =
  "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus-visible:border-ring focus-visible:outline-none";

export function ContactForm() {
  const enviar = useServerFn(enviarConsulta);
  const [estado, setEstado] = useState<"idle" | "enviado" | "pendiente" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { servicio: "Limpieza" },
  });

  const onSubmit = async (values: ContactInput) => {
    setErrorMsg(null);
    try {
      const res = await enviar({ data: values });
      setEstado(res.estado === "enviado" ? "enviado" : "pendiente");
      reset({ servicio: "Limpieza" });
    } catch (e) {
      setEstado("error");
      setErrorMsg(
        e instanceof Error && e.message
          ? e.message
          : "No pudimos enviar tu consulta. Intentá nuevamente en unos minutos.",
      );
    }
  };

  const Error_ = ({ name }: { name: keyof ContactInput }) =>
    errors[name] ? (
      <p role="alert" className="mt-1 text-xs text-destructive">
        {errors[name]?.message as string}
      </p>
    ) : null;

  if (estado === "enviado" || estado === "pendiente") {
    return (
      <div className="card-surface p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-primary" aria-hidden />
        <h3 className="mt-4 text-xl">¡Gracias por tu consulta!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Recibimos tus datos y nuestro equipo se pondrá en contacto para coordinar una visita o
          preparar una propuesta.
        </p>
        {estado === "pendiente" && (
          <p className="mt-4 rounded-md bg-secondary p-3 text-left text-xs text-muted-foreground">
            <strong>Nota interna (visible sólo hasta finalizar la configuración):</strong> el envío
            de correo todavía no está configurado. Agregar los secretos{" "}
            <code>CONTACT_NOTIFICATION_EMAIL</code> y <code>EMAIL_SERVICE_API_KEY</code> para
            recibir las consultas por email.
          </p>
        )}
        <Button variant="outline" className="mt-6" onClick={() => setEstado("idle")}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card-surface p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="nombre" className="text-sm font-medium">
            Nombre y apellido *
          </label>
          <input id="nombre" className={fieldClass} autoComplete="name" {...register("nombre")} />
          <Error_ name="nombre" />
        </div>

        <div>
          <label htmlFor="empresa" className="text-sm font-medium">
            Empresa *
          </label>
          <input id="empresa" className={fieldClass} autoComplete="organization" {...register("empresa")} />
          <Error_ name="empresa" />
        </div>

        <div>
          <label htmlFor="cargo" className="text-sm font-medium">
            Cargo <span className="text-muted-foreground">(opcional)</span>
          </label>
          <input id="cargo" className={fieldClass} {...register("cargo")} />
        </div>

        <div>
          <label htmlFor="telefono" className="text-sm font-medium">
            Teléfono *
          </label>
          <input id="telefono" className={fieldClass} inputMode="tel" autoComplete="tel" {...register("telefono")} />
          <Error_ name="telefono" />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email *
          </label>
          <input id="email" className={fieldClass} inputMode="email" autoComplete="email" {...register("email")} />
          <Error_ name="email" />
        </div>

        <div>
          <label htmlFor="localidad" className="text-sm font-medium">
            Localidad *
          </label>
          <input id="localidad" className={fieldClass} {...register("localidad")} />
          <Error_ name="localidad" />
        </div>

        <div>
          <label htmlFor="servicio" className="text-sm font-medium">
            Servicio de interés *
          </label>
          <select id="servicio" className={fieldClass} {...register("servicio")}>
            {servicios.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          <Error_ name="servicio" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="ubicacionServicio" className="text-sm font-medium">
            Ubicación del servicio *
          </label>
          <input id="ubicacionServicio" className={fieldClass} {...register("ubicacionServicio")} />
          <Error_ name="ubicacionServicio" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="mensaje" className="text-sm font-medium">
            Mensaje *
          </label>
          <textarea id="mensaje" rows={5} className={fieldClass} {...register("mensaje")} />
          <Error_ name="mensaje" />
        </div>

        {/* Campo anti-spam: oculto para personas, visible para bots */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          {...register("honeypot")}
        />

        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm">
            <input
              type="checkbox"
              className="mt-0.5 size-4 shrink-0 rounded border-input accent-primary"
              {...register("privacidad")}
            />
            <span className="text-muted-foreground">
              Acepto la{" "}
              <Link to="/politica-de-privacidad" className="text-primary underline underline-offset-4">
                política de privacidad
              </Link>{" "}
              y el tratamiento de mis datos para responder esta consulta. *
            </span>
          </label>
          <Error_ name="privacidad" />
        </div>
      </div>

      {estado === "error" && (
        <p role="alert" className="mt-5 flex items-start gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
          {errorMsg}
        </p>
      )}

      <Button type="submit" variant="accent" size="lg" className="mt-6 w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden /> Enviando…
          </>
        ) : (
          "Enviar consulta"
        )}
      </Button>
    </form>
  );
}
