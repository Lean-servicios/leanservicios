import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Loader2, AlertCircle, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactSchema, enviarConsulta, type ContactInput } from "@/lib/contacto.functions";
import { SERVICIO_EVENT, servicioDesdeUrl } from "@/lib/servicio-cta";

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

const optionalLabel = " (opcional)";

export function ContactForm() {
  const enviar = useServerFn(enviarConsulta);
  const [estado, setEstado] = useState<"idle" | "enviado" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [mostrarExtras, setMostrarExtras] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { servicio: "Limpieza" },
  });

  // Precarga el servicio elegido desde los CTA de cada servicio (o desde ?servicio=).
  useEffect(() => {
    const esValido = (v: string | null): v is ContactInput["servicio"] =>
      Boolean(v) && (servicios as readonly string[]).includes(v as string);

    const inicial = servicioDesdeUrl();
    if (esValido(inicial)) setValue("servicio", inicial);

    const onCta = (e: Event) => {
      const v = (e as CustomEvent<string>).detail;
      if (esValido(v)) {
        setValue("servicio", v);
        setEstado("idle");
      }
    };
    window.addEventListener(SERVICIO_EVENT, onCta);
    return () => window.removeEventListener(SERVICIO_EVENT, onCta);
  }, [setValue]);

  const onSubmit = async (values: ContactInput) => {
    setErrorMsg(null);
    try {
      await enviar({ data: values });
      setEstado("enviado");
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

  if (estado === "enviado") {
    return (
      <div className="card-surface p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-primary" aria-hidden />
        <h3 className="mt-4 text-xl">¡Gracias por tu consulta!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Recibimos tus datos y nuestro equipo se pondrá en contacto para coordinar una visita o
          preparar una propuesta.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setEstado("idle")}>
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="card-surface p-6 sm:p-8">
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="nombre" className="text-sm font-medium">
              Nombre y apellido *
            </label>
            <input id="nombre" className={fieldClass} autoComplete="name" {...register("nombre")} />
            <Error_ name="nombre" />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email *
            </label>
            <input id="email" className={fieldClass} inputMode="email" autoComplete="email" {...register("email")} />
            <Error_ name="email" />
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

          <div>
            <label htmlFor="telefono" className="text-sm font-medium">
              Teléfono<span className="text-muted-foreground">{optionalLabel}</span>
            </label>
            <input id="telefono" className={fieldClass} inputMode="tel" autoComplete="tel" {...register("telefono")} />
            <Error_ name="telefono" />
          </div>
        </div>

        <div>
          <label htmlFor="mensaje" className="text-sm font-medium">
            Contanos qué necesitás *
          </label>
          <textarea id="mensaje" rows={4} className={fieldClass} {...register("mensaje")} placeholder="Breve descripción del servicio o instalación." />
          <Error_ name="mensaje" />
        </div>

        {/* Campos opcionales colapsables */}
        <button
          type="button"
          onClick={() => setMostrarExtras((v) => !v)}
          className="flex items-center gap-1.5 self-start text-sm font-medium text-primary hover:underline underline-offset-4"
          aria-expanded={mostrarExtras}
        >
          <ChevronDown
            className={`size-4 transition-transform ${mostrarExtras ? "rotate-180" : ""}`}
            aria-hidden
          />
          Agregar más datos {mostrarExtras ? "" : "(opcional)"}
        </button>

        {mostrarExtras && (
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="empresa" className="text-sm font-medium">
                Empresa<span className="text-muted-foreground">{optionalLabel}</span>
              </label>
              <input id="empresa" className={fieldClass} autoComplete="organization" {...register("empresa")} />
              <Error_ name="empresa" />
            </div>

            <div>
              <label htmlFor="cargo" className="text-sm font-medium">
                Cargo<span className="text-muted-foreground">{optionalLabel}</span>
              </label>
              <input id="cargo" className={fieldClass} {...register("cargo")} />
              <Error_ name="cargo" />
            </div>

            <div>
              <label htmlFor="localidad" className="text-sm font-medium">
                Localidad<span className="text-muted-foreground">{optionalLabel}</span>
              </label>
              <input id="localidad" className={fieldClass} {...register("localidad")} />
              <Error_ name="localidad" />
            </div>

            <div>
              <label htmlFor="ubicacionServicio" className="text-sm font-medium">
                Ubicación del servicio<span className="text-muted-foreground">{optionalLabel}</span>
              </label>
              <input id="ubicacionServicio" className={fieldClass} {...register("ubicacionServicio")} />
              <Error_ name="ubicacionServicio" />
            </div>
          </div>
        )}

        {/* Campo anti-spam: oculto para personas, visible para bots */}
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
          {...register("honeypot")}
        />

        <div>
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
