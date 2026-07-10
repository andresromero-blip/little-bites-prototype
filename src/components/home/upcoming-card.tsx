"use client";

import { Bell } from "lucide-react";
import { useCountdown, pad2 } from "@/lib/hooks/use-countdown";
import { getCollections } from "@/lib/data";

/**
 * Teaser compacto "Próximamente": una sola línea con countdown.
 * (Actualmente fuera del Home; disponible para /colecciones.)
 */
export function UpcomingCard() {
  const next = getCollections("proximamente")[0];
  const countdown = useCountdown(next ? `${next.launchDate}T00:00:00-06:00` : "");

  if (!next) return null;

  return (
    <section
      aria-label="Próximamente"
      className="flex items-center gap-4 rounded-card bg-primary-deep p-4 text-white sm:px-6"
    >
      <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
        <span className="text-xl font-black text-white/60">?</span>
      </div>

      <div className="min-w-0 flex-1 leading-tight">
        <p className="text-[10px] font-extrabold tracking-widest text-white/60 uppercase">
          Próximamente
        </p>
        <p className="truncate text-[15px] font-extrabold">{next.name}</p>
      </div>

      <p className="shrink-0 text-sm font-extrabold tabular-nums" suppressHydrationWarning>
        {countdown
          ? `${countdown.days} d ${pad2(countdown.hours)} h ${pad2(countdown.minutes)} m`
          : "— d — h — m"}
      </p>

      <button
        type="button"
        aria-label="Avisarme del lanzamiento"
        className="shrink-0 rounded-lg bg-white/10 p-2 transition-colors hover:bg-white/20"
      >
        <Bell className="size-4" aria-hidden />
      </button>
    </section>
  );
}
