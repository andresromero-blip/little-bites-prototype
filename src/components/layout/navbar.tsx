"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ChevronDown,
  Coins,
  Home,
  LayoutGrid,
  Gift,
  Search,
  ShoppingBag,
} from "lucide-react";
import { profile } from "@/lib/data/profile";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", label: "Inicio", icon: Home },
  { href: "/colecciones", label: "Colecciones", icon: LayoutGrid },
  { href: "/recompensas", label: "Recompensas", icon: Gift },
  { href: "/descubrir", label: "Descubrir", icon: Search },
  { href: "/tienda", label: "Tienda", icon: ShoppingBag },
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
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Principal">
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

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          {/* Monedas — solo desktop */}
          <div className="hidden items-center gap-1.5 rounded-full bg-coin-soft px-3 py-1.5 lg:flex">
            <Coins className="size-4 text-coin" aria-hidden />
            <span className="text-sm font-extrabold">
              {profile.coins.toLocaleString("en-US")}
            </span>
          </div>

          <button
            type="button"
            className="relative rounded-full p-2 hover:bg-background"
            aria-label="Notificaciones"
          >
            <Bell className="size-5" aria-hidden />
            <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-red-500 ring-2 ring-surface" />
          </button>

          <button type="button" className="flex items-center gap-2.5" aria-label="Perfil">
            <span className="flex size-10 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-orange-600 text-lg">
              🧑‍🚀
            </span>
            <span className="hidden text-left leading-tight lg:block">
              <span className="block text-sm font-extrabold">{profile.name}</span>
              <span className="block text-xs font-semibold text-muted">
                Nivel {profile.level}
              </span>
            </span>
            <ChevronDown className="hidden size-4 text-muted lg:block" aria-hidden />
          </button>
        </div>
      </div>
    </header>
  );
}
