"use client";

import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { ProgressRing } from "@/components/ui/progress-ring";
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
        {/* Capa 1 — Fondo: foto de la colección con opacidad + máscara de color.
            El lado del texto queda siempre sobre morado casi sólido (contraste AA/AAA). */}
        {collection.heroBackground && (
          <div className="absolute inset-0" aria-hidden>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={collection.heroBackground}
              alt=""
              className="h-full w-full object-cover opacity-15"
            />
            {/* Máscara mobile: clara arriba (personajes), oscura abajo (texto) */}
            <div className="absolute inset-0 bg-linear-to-b from-[#4c1d95]/35 via-[#3b0d81]/70 to-[#3b0d81] md:hidden" />
            {/* Máscara desktop: oscura a la izquierda (texto), clara a la derecha (personajes) */}
            <div className="absolute inset-0 hidden bg-linear-to-r from-[#3b0d81] from-15% via-[#3b0d81]/70 to-[#4c1d95]/35 md:block" />
          </div>
        )}

        {/* Capa 2 — Personajes: PNG sin fondo que convive con el texto */}
        {collection.heroImage ? (
          <>
            {/* Desktop: anclado abajo-derecha */}
            <div
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] items-end justify-center pt-6 pr-4 md:flex"
              aria-hidden
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={collection.heroImage}
                alt=""
                className="max-h-full w-auto object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
              />
            </div>

            {/* Mobile: protagonista arriba, sobre el mismo fondo */}
            <div className="relative flex h-44 w-full items-end justify-center pt-5 md:hidden" aria-hidden>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={collection.heroImage}
                alt=""
                className="h-full w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.35)]"
              />
            </div>
          </>
        ) : (
          /* Fallback: chip CN mientras no hay arte */
          <div className="absolute top-5 right-5 hidden grid-cols-2 overflow-hidden rounded-md text-[13px] leading-none font-black sm:grid">
            <span className="bg-black px-1.5 py-1 text-white">C</span>
            <span className="bg-white px-1.5 py-1 text-black">N</span>
            <span className="bg-white px-1.5 py-1 text-black">✓</span>
            <span className="bg-black px-1.5 py-1 text-white">✓</span>
          </div>
        )}

        <div className="relative p-6 sm:p-10 md:max-w-[58%]">
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

      {/* Progreso total — franja compacta con jerarquía (el detalle vive en Perfil) */}
      <div className="mt-4 flex items-center gap-4 rounded-card bg-surface p-4 shadow-sm sm:px-5">
        <ProgressRing percent={global.percent} size={56} strokeWidth={6} />
        <div className="min-w-0 flex-1 leading-tight">
          <p className="text-[11px] font-extrabold tracking-widest text-muted uppercase">
            Progreso total
          </p>
          <p className="truncate text-[15px] font-extrabold">
            {global.totalObtained} figuras obtenidas
            <span className="font-semibold text-muted"> · {global.totalMissing} faltantes</span>
          </p>
        </div>
        <Link
          href="/perfil"
          className="flex shrink-0 items-center gap-1 rounded-xl bg-primary-soft px-4 py-2.5 text-sm font-extrabold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Ver mi progreso
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
