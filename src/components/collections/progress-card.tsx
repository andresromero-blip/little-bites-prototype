"use client";

import Link from "next/link";
import { Bell, CheckCircle2, Plus } from "lucide-react";
import { ProgressRing } from "@/components/ui/progress-ring";
import { useCountdown, pad2 } from "@/lib/hooks/use-countdown";
import { getCollectionProgress } from "@/lib/progress";
import { useUserCollection } from "@/lib/store/user-collection";
import type { Collection } from "@/lib/types";

/**
 * Tarjeta de progreso del detalle. Responde: ¿dónde estoy?, ¿qué me falta?,
 * ¿qué hago ahora? — con variantes para próximamente y completada.
 */
export function ProgressCard({ collection }: { collection: Collection }) {
  const owned = useUserCollection((s) => s.owned);
  const p = getCollectionProgress(collection, owned[collection.id] ?? []);
  const countdown = useCountdown(`${collection.launchDate}T00:00:00-06:00`);

  if (collection.status === "proximamente") {
    return (
      <section className="rounded-card bg-primary-deep p-6 text-white" aria-label="Lanzamiento">
        <h2 className="text-[11px] font-extrabold tracking-widest text-white/60 uppercase">
          Lanzamiento en
        </h2>
        <p className="mt-2 text-3xl font-black tabular-nums" suppressHydrationWarning>
          {countdown
            ? `${countdown.days} d ${pad2(countdown.hours)} h ${pad2(countdown.minutes)} m ${pad2(countdown.seconds)} s`
            : "— d — h — m — s"}
        </p>
        <p className="mt-2 text-sm font-semibold text-white/80">
          {collection.totalFigures} figuras te esperan.
        </p>
        <button
          type="button"
          className="mt-5 flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[15px] font-extrabold text-primary transition-transform hover:scale-[1.02]"
        >
          <Bell className="size-4" aria-hidden />
          Avísame del lanzamiento
        </button>
      </section>
    );
  }

  return (
    <section className="rounded-card bg-surface p-6 shadow-sm" aria-label="Tu progreso">
      <h2 className="text-sm font-extrabold tracking-wide uppercase">Tu progreso</h2>

      <div className="mt-4 flex items-center gap-6">
        <ProgressRing percent={p.percent} size={96} strokeWidth={9} />
        <dl className="flex-1 space-y-2">
          <div className="flex items-baseline justify-between">
            <dt className="text-[13px] font-semibold text-muted">Obtenidas</dt>
            <dd className="text-[15px] font-extrabold">
              {p.obtained} / {p.total}
            </dd>
          </div>
          <div className="flex items-baseline justify-between">
            <dt className="text-[13px] font-semibold text-muted">Faltantes</dt>
            <dd className="text-[15px] font-extrabold">{p.missing}</dd>
          </div>
        </dl>
      </div>

      {p.isComplete ? (
        <p className="mt-4 flex items-center gap-2 rounded-xl bg-success-soft px-4 py-3 text-sm font-extrabold text-success">
          <CheckCircle2 className="size-5" aria-hidden />
          ¡Colección completada!
        </p>
      ) : (
        <p className="mt-4 text-sm font-semibold text-muted">
          Te faltan {p.missing} figuras para completarla.
        </p>
      )}

      {!p.isComplete && (
        <div className="mt-5">
          <Link
            href="/registrar"
            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-[15px] font-extrabold text-primary-foreground transition-colors hover:bg-primary-strong"
          >
            <Plus className="size-4" aria-hidden />
            Registrar figura
          </Link>
        </div>
      )}
    </section>
  );
}
