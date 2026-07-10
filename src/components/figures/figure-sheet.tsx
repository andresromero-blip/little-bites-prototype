"use client";

import Link from "next/link";
import { CheckCircle2, CircleDashed, Hash, Plus, Undo2 } from "lucide-react";
import { RarityChip } from "@/components/figures/rarity-chip";
import { useUserCollection } from "@/lib/store/user-collection";
import type { Collection, Figure } from "@/lib/types";
import { cn } from "@/lib/utils";

const THEMES: Record<string, string> = {
  "cartoon-network": "from-[#3b0d81] via-[#4c1d95] to-[#6d28d9]",
};

/** Ficha de figura: arte, datos y marcado "La tengo / Me falta". */
export function FigureSheet({
  figure,
  collection,
}: {
  figure: Figure;
  collection: Collection;
}) {
  const owned = useUserCollection((s) =>
    (s.owned[collection.id] ?? []).includes(figure.id)
  );
  const addFigure = useUserCollection((s) => s.addFigure);
  const removeFigure = useUserCollection((s) => s.removeFigure);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Arte (placeholder hasta tener assets por figura) */}
      <div
        className={cn(
          "card-stars flex min-h-56 items-center justify-center rounded-card bg-linear-to-br lg:min-h-80",
          THEMES[collection.id] ?? "from-[#3b0d81] via-[#4c1d95] to-[#6d28d9]"
        )}
      >
        {figure.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={figure.image} alt={figure.name} className="max-h-full object-contain" />
        ) : (
          <span className="flex size-28 items-center justify-center rounded-full bg-white/15 text-3xl font-black text-white">
            {String(figure.number).padStart(2, "0")}
          </span>
        )}
      </div>

      <div>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-black sm:text-3xl">{figure.name}</h1>
          <RarityChip rarity={figure.rarity} />
        </div>
        <p className="mt-1 text-sm font-bold text-muted">
          {figure.series} ·{" "}
          <Link href={`/colecciones/${collection.slug}`} className="text-primary hover:underline">
            {collection.name}
          </Link>
        </p>

        <p className="mt-4 text-[15px] font-semibold text-muted">{figure.description}</p>

        {/* Estado */}
        <div className="mt-6 rounded-card bg-surface p-5 shadow-sm">
          <h2 className="text-[11px] font-extrabold tracking-widest text-muted uppercase">
            Estado
          </h2>
          {owned ? (
            <p className="mt-2 flex items-center gap-2 text-[15px] font-extrabold text-success">
              <CheckCircle2 className="size-5" aria-hidden />
              La tienes en tu colección
            </p>
          ) : (
            <p className="mt-2 flex items-center gap-2 text-[15px] font-extrabold text-warning-strong">
              <CircleDashed className="size-5" aria-hidden />
              Te falta
            </p>
          )}

          <div className="mt-3 flex items-center gap-2 text-sm font-bold text-muted">
            <Hash className="size-4" aria-hidden />
            Figura {String(figure.number).padStart(2, "0")} de {collection.totalFigures}
          </div>

          {owned ? (
            <button
              type="button"
              onClick={() => removeFigure(collection.id, figure.id)}
              className="mt-5 flex items-center gap-2 rounded-xl border border-border-soft px-5 py-3 text-[15px] font-extrabold text-muted transition-colors hover:text-foreground"
            >
              <Undo2 className="size-4" aria-hidden />
              Marcar como faltante
            </button>
          ) : (
            <button
              type="button"
              onClick={() => addFigure(collection.id, figure.id)}
              className="mt-5 flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-[15px] font-extrabold text-primary-foreground transition-colors hover:bg-primary-strong"
            >
              <Plus className="size-4" aria-hidden />
              ¡La tengo!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
