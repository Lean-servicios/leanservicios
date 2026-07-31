/** Puente entre los CTA de cada servicio y el formulario de contacto. */

export const SERVICIO_EVENT = "lean:servicio-cta";

/** Marca el servicio elegido, avisa al formulario y lleva al cuestionario. */
export function irAlCuestionario(servicio: string) {
  if (typeof window === "undefined") return;

  const url = new URL(window.location.href);
  url.searchParams.set("servicio", servicio);
  url.hash = "contacto";
  window.history.replaceState(null, "", url.toString());

  window.dispatchEvent(new CustomEvent(SERVICIO_EVENT, { detail: servicio }));
  document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** Servicio precargado desde la URL (?servicio=…). */
export function servicioDesdeUrl(): string | null {
  if (typeof window === "undefined") return null;
  return new URLSearchParams(window.location.search).get("servicio");
}
