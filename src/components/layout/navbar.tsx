"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Home, User } from "lucide-react";
import { NotificationBell } from "@/components/notifications/notification-bell";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { PredictiveSearch } from "@/components/search/predictive-search";
import { profile } from "@/lib/data/profile";
import { cn } from "@/lib/utils";

/**
 * Navegación MVP: Inicio · Colecciones · Perfil + búsqueda predictiva global.
 * Recompensas (Expansión) e Intercambio (Evolución) se añadirán aquí
 * cuando entren en fase — la estructura ya lo soporta.
 */
const NAV_ITEMS = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/perfil", label: "Perfil", icon: User },
];

function Logo() {
  return (
    <Link href="/" className="shrink-0 leading-none" aria-label="Little Bites — Inicio">
      <span className="block -rotate-3 text-2xl font-black italic tracking-tight text-primary-deep">
        Little
      </span>
      <span className="-mt-1.5 block -rotate-3 text-2xl font-black italic tracking-tight text-primary-deep">
        Bites<span className="align-super text-[10px]">®</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-surface">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4 lg:h-[72px] lg:px-8">
        <Logo />

        {/* Navegación principal — solo desktop */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Principal">
          {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative flex h-[72px] items-center gap-2 px-4 text-[15px] font-bold transition-colors",
                  active ? "text-primary" : "text-foreground/70 hover:text-foreground"
                )}
              >
                <Icon className="size-[18px]" aria-hidden />
                {label}
                {active && (
                  <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Búsqueda predictiva — solo desktop (en móvil vive en /buscar) */}
        <div className="hidden flex-1 justify-end lg:flex">
          <PredictiveSearch variant="navbar" />
        </div>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <ThemeToggle />
          <NotificationBell />

          <button type="button" className="flex items-center gap-2.5" aria-label="Perfil">
            <span className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-orange-600 text-lg">
              🧑‍🚀
            </span>
            <span className="hidden text-sm font-extrabold lg:block">{profile.name}</span>
            <ChevronDown className="hidden size-4 text-muted lg:block" aria-hidden />
          </button>
        </div>
      </div>
    </header>
  );
}
