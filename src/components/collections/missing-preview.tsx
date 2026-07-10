"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FigureToken } from "@/components/figures/figure-token";
import { getMissingFigures } from "@/lib/progress";
import { useUserCollection } from "@/lib/store/user-collection";
import type { Collection } from "@/lib/types";

const PREVIEW_LIMIT = 8;

/** Las figuras faltantes, visibles sin un tap extra (dolor #1). */
export function MissingPreview({ collection }: { collection: Collection }) {
  const owned = useUserCollection((s) => s.owned);

  if (collection.status === "proximamente") return null;

  const missing = getMissingFigures(collection, owned[collection.id] ?? []);
  if (missing.length === 0) return null;

  return (
    <section className="rounded-card bg-surface p-6 shadow-sm" aria-label="Figuras faltantes">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-extrabold tracking-wide uppercase">
          Te faltan ({missing.length})
        </h2>
        <Link
          href={`/colecciones/${collection.slug}?filtro=faltantes`}
          className="flex items-center gap-1 text-sm font-bold text-primary hover:underline"
        >
          Ver todas
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>

      <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1">
        {missing.slice(0, PREVIEW_LIMIT).map((f) => (
          <FigureToken key={f.id} figure={f} owned={false} />
        ))}
        {missing.length > PREVIEW_LIMIT && (
          <Link
            href={`/colecciones/${collection.slug}?filtro=faltantes`}
            className="flex w-20 shrink-0 flex-col items-center gap-1.5 text-center"
          >
            <span className="flex size-14 items-center justify-center rounded-full bg-primary-soft text-sm font-black text-primary">
              +{missing.length - PREVIEW_LIMIT}
            </span>
            <span className="text-[11px] leading-tight font-bold text-primary">Ver más</span>
          </Link>
        )}
      </div>
    </section>
  );
}
