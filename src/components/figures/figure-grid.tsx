"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Lock } from "lucide-react";
import { Tabs } from "@/components/ui/tabs";
import { RarityChip } from "@/components/figures/rarity-chip";
import { FigureSilhouette } from "@/components/figures/silhouette";
import { getFigures } from "@/lib/data";
import { useUserCollection } from "@/lib/store/user-collection";
import type { Collection, Figure } from "@/lib/types";
import { cn } from "@/lib/utils";

type Filter = "todas" | "obtenidas" | "faltantes";

function FigureCard({
  figure,
  collection,
  owned,
}: {
  figure: Figure;
  collection: Collection;
  owned: boolean;
}) {
  return (
    <Link
      href={`/colecciones/${collection.slug}/figuras/${figure.id}`}
      className={cn(
        "relative flex flex-col items-center gap-2 rounded-card p-4 pt-5 text-center transition-shadow",
        owned
          ? "bg-surface shadow-md hover:shadow-lg"
          : "border border-line/70 bg-surface/50 hover:bg-surface"
      )}
    >
      {owned && (
        <CheckCircle2
          className="absolute top-2.5 right-2.5 size-4 text-success"
          aria-label="Obtenida"
        />
      )}
      <span
        className={cn(
          "flex size-16 items-center justify-center rounded-full",
          owned
            ? "bg-primary-soft text-base font-black text-primary ring-2 ring-primary/30"
            : "bg-line/60 text-muted/70"
        )}
      >
        {owned ? (
          String(figure.number).padStart(2, "0")
        ) : (
          <FigureSilhouette className="h-10 w-auto" />
        )}
      </span>
      <span
        className={cn("text-[13px] leading-tight font-extrabold", !owned && "text-muted")}
      >
        {figure.name}
      </span>
      <span
        className={cn(
          "line-clamp-1 text-[11px] font-semibold text-muted",
          !owned && "opacity-70"
        )}
      >
        {figure.series}
      </span>
      <span className={cn(!owned && "opacity-60")}>
        <RarityChip rarity={figure.rarity} />
      </span>
    </Link>
  );
}

/** Grid de figuras con filtro Todas · Obtenidas · Faltantes. */
export function FigureGrid({
  collection,
  initialFilter = "todas",
}: {
  collection: Collection;
  initialFilter?: Filter;
}) {
  const owned = useUserCollection((s) => s.owned);
  const [tab, setTab] = useState<Filter>(initialFilter);

  if (collection.status === "proximamente") {
    return (
      <section
        aria-label="Figuras"
        className="mt-10 flex flex-col items-center gap-3 rounded-card bg-surface p-10 text-center shadow-sm"
      >
        <span className="flex size-12 items-center justify-center rounded-full bg-primary-soft">
          <Lock className="size-5 text-primary" aria-hidden />
        </span>
        <p className="text-[15px] font-extrabold">Las figuras se revelan en el lanzamiento</p>
        <p className="max-w-sm text-sm font-semibold text-muted">
          {collection.totalFigures} figuras esperan a ser descubiertas. Vuelve el día del
          lanzamiento para verlas todas.
        </p>
      </section>
    );
  }

  const figures = getFigures(collection.id);
  const ownedSet = new Set(owned[collection.id] ?? []);
  const obtained = figures.filter((f) => ownedSet.has(f.id));
  const missing = figures.filter((f) => !ownedSet.has(f.id));

  const visible = tab === "obtenidas" ? obtained : tab === "faltantes" ? missing : figures;

  return (
    <section aria-label="Figuras" className="mt-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-sm font-extrabold tracking-wide uppercase">Figuras</h2>
        <Tabs
          items={[
            { id: "todas", label: "Todas", count: figures.length },
            { id: "obtenidas", label: "Obtenidas", count: obtained.length },
            { id: "faltantes", label: "Faltantes", count: missing.length },
          ]}
          value={tab}
          onChange={(id) => setTab(id as Filter)}
          ariaLabel="Filtrar figuras"
        />
      </div>

      {visible.length === 0 ? (
        <p className="mt-6 rounded-card bg-surface p-6 text-center text-sm font-semibold text-muted shadow-sm">
          {tab === "faltantes"
            ? "¡No te falta ninguna figura de esta colección!"
            : "Aún no has registrado figuras de esta colección."}
        </p>
      ) : (
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {visible.map((f) => (
            <FigureCard
              key={f.id}
              figure={f}
              collection={collection}
              owned={ownedSet.has(f.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
