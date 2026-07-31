import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logoColor from "@/assets/lean-logo-horizontal-color.png.asset.json";
import logoBlanco from "@/assets/lean-logo-horizontal-blanco.png.asset.json";

const nav = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Cómo trabajamos", href: "/#como-trabajamos" },
  { label: "Trabajos realizados", href: "/#trabajos" },
  { label: "Por qué Lean", href: "/#por-que-lean" },
  { label: "Trabajá con nosotros", href: "/#empleo" },
  { label: "Contacto", href: "/#contacto" },
];

export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const isSolid = solid || scrolled;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        isSolid ? "border-b border-border bg-background/95 backdrop-blur" : "bg-transparent",
      )}
    >
      <div className="section-shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
        <a href="/#inicio" className="flex min-w-0 items-center" aria-label="LEAN SERVICE — Inicio">
          <img
            src={isSolid ? logoColor.url : logoBlanco.url}
            alt="LEAN Servicios Integrales S.A.S."
            className="h-10 w-auto sm:h-12"
            width={480}
            height={140}
          />
        </a>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 xl:flex" aria-label="Navegación principal">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-2.5 py-2 text-sm font-medium transition-colors",
                  isSolid
                    ? "text-foreground/80 hover:text-primary"
                    : "text-primary-foreground/85 hover:text-primary-foreground",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
            <a href="/#contacto">Solicitar presupuesto</a>
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className={cn(
              "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition-colors xl:hidden",
              isSolid
                ? "border-border text-foreground hover:bg-secondary"
                : "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="section-shell flex flex-col py-3" aria-label="Navegación móvil">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <Button asChild variant="accent" className="mt-3">
              <a href="/#contacto" onClick={() => setOpen(false)}>
                Solicitar presupuesto
              </a>
            </Button>
            <Link
              to="/politica-de-privacidad"
              onClick={() => setOpen(false)}
              className="mt-3 px-2 text-sm text-muted-foreground underline-offset-4 hover:underline"
            >
              Política de privacidad
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
