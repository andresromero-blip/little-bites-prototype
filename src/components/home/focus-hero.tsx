"use client";

import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { getFeaturedCollection } from "@/lib/data";
import { getCollectionProgress, getGlobalProgress } from "@/lib/progress";
import { useUserCollection } from "@/lib/store/user-collection";

/**
 * Bloque de FOCO del Home: colección destacada + progreso del usuario +
 * una única acción primaria. Responde "¿dónde estoy?" y "¿qué hago ahora?"
 * en un solo vistazo.
 */
export function FocusHero() {
  const owned = useUserCollection((s) => s.owned);
  const collection = getFeaturedCollection();
  if (!collection) return null;

  const p = getCollectionProgress(collection, owned[collection.id] ?? []);
  const global = getGlobalProgress(owned);

  return (
    <section aria-label="Tu colección ahora">
      <div className="hero-rays relative overflow-hidden rounded-card text-white">
        {/* Logo CN */}
        <div className="absolute top-5 right-5 hidden grid-cols-2 overflow-hidden rounded-md text-[13px] leading-none font-black sm:grid">
          <span className="bg-black px-1.5 py-1 text-white">C</span>
          <span className="bg-white px-1.5 py-1 text-black">N</span>
          <span className="bg-white px-1.5 py-1 text-black">✓</span>
          <span className="bg-black px-1.5 py-1 text-white">✓</span>
        </div>

        <div className="relative p-6 sm:p-10">
          <span className="w-fit rounded-full bg-white/15 px-3.5 py-1.5 text-[11px] font-extrabold tracking-widest uppercase backdrop-blur-sm">
            Colección destacada
          </span>

          <h1 className="mt-4 text-4xl leading-[0.95] font-black uppercase sm:text-5xl">
            {collection.name}
          </h1>

          {/* Progreso del usuario dentro del hero */}
          <div className="mt-6 max-w-md">
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black">
                {p.obtained}
                <span className="text-base font-bold text-white/70"> / {p.total} figuras</span>
              </span>
              <span className="text-lg font-extrabold">{p.percent}%</span>
            </div>
            <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-white/20">
              <div
                className="h-full rounded-full bg-white transition-all duration-700"
                style={{ width: `${p.percent}%` }}
              />
            </div>
            <p className="mt-2 text-sm font-semibold text-white/85">
              {p.isComplete ? "¡Colección completada!" : `Te faltan ${p.missing} figuras`}
            </p>
          </div>

          {/* Una acción primaria + una secundaria silenciosa */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/registrar"
              className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-[15px] font-extrabold text-primary shadow-sm transition-transform hover:scale-[1.02]"
            >
              <Plus className="size-4" aria-hidden />
              Registrar figura
            </Link>
            {!p.isComplete && (
              <Link
                href={`/colecciones/${collection.slug}/figuras?filtro=faltantes`}
                className="flex items-center gap-1 text-sm font-bold text-white/85 underline-offset-4 hover:underline"
              >
                Ver faltantes ({p.missing})
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Resumen global en una línea (el detalle vive en Perfil) */}
      <p className="mt-3 px-1 text-[13px] font-semibold text-muted">
        En total llevas {global.totalObtained} figuras · {global.totalMissing} faltantes ·{" "}
        <Link href="/perfil" className="font-bold text-primary hover:underline">
          Ver mi progreso
        </Link>
      </p>
    </section>
  );
}
