"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Navegación inferior — solo móvil.
 * Sin botón "+": el registro se accede desde los CTAs contextuales
 * (hero del Home, detalle de colección, ficha) para no duplicar rutas.
 */
const ITEMS = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/buscar", label: "Buscar", icon: Search },
  { href: "/perfil", label: "Perfil", icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegación móvil"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border-soft bg-surface pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <div className="mx-auto flex h-16 max-w-md items-center justify-around px-2">
        {ITEMS.map(({ href, label, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex flex-col items-center gap-0.5 px-3 py-1 text-[11px] font-bold",
                active ? "text-primary" : "text-muted"
              )}
            >
              <Icon className="size-5" aria-hidden />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
