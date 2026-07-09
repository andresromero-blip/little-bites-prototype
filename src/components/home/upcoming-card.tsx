"use client";

import { useEffect, useState } from "react";
import { Bell, CalendarClock } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { getCollections } from "@/lib/data";

function useCountdown(targetIso: string) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  if (now === null) return null; // pre-hidratación

  const diff = Math.max(0, new Date(targetIso).getTime() - now);
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

const pad = (n: number) => String(n).padStart(2, "0");

/** Panel "Próximamente" con countdown en vivo. */
export function UpcomingCard() {
  const next = getCollections("proximamente")[0];
  const countdown = useCountdown(next ? `${next.launchDate}T00:00:00-06:00` : "");

  if (!next) return null;

  return (
    <section aria-label="Próximamente">
      <SectionHeader title="Próximamente" actionLabel="Ver todas" actionHref="/colecciones" />

      <div className="mt-4 rounded-card bg-surface p-4 shadow-sm">
        <div className="flex items-center gap-4">
          {/* Silueta misteriosa */}
          <div className="flex size-24 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
            <span className="text-4xl font-black text-primary/40">?</span>
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-extrabold tracking-widest text-primary uppercase">
              Nueva colección
            </p>
            <h3 className="text-lg font-extrabold">Muy pronto</h3>
            <p className="text-[13px] font-semibold text-muted">
              Prepárate para descubrir nuevas figuras increíbles.
            </p>

            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                className="rounded-lg bg-primary px-3.5 py-2 text-[13px] font-extrabold text-primary-foreground transition-colors hover:bg-primary-strong"
              >
                Quiero saber más
              </button>
              <button
                type="button"
                aria-label="Avisarme del lanzamiento"
                className="rounded-lg border border-border-soft p-2 text-muted hover:bg-background"
              >
                <Bell className="size-4" aria-hidden />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between rounded-xl bg-background px-4 py-3">
          <span className="flex items-center gap-2 text-[13px] font-bold text-muted">
            <CalendarClock className="size-4" aria-hidden />
            Lanzamiento en:
          </span>
          <span className="font-extrabold tabular-nums" suppressHydrationWarning>
            {countdown ? (
              <>
                {countdown.days} d&nbsp;&nbsp;{pad(countdown.hours)} h&nbsp;&nbsp;
                {pad(countdown.minutes)} m&nbsp;&nbsp;{pad(countdown.seconds)} s
              </>
            ) : (
              "— d — h — m — s"
            )}
          </span>
        </div>
      </div>
    </section>
  );
}
