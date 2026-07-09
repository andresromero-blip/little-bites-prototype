"use client";

import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";
import { CollectionArt } from "@/components/ui/collection-art";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SectionHeader } from "@/components/ui/section-header";
import { getCollections } from "@/lib/data";
import { getCollectionProgress } from "@/lib/progress";
import { useUserCollection } from "@/lib/store/user-collection";
import type { Collection, CollectionProgress } from "@/lib/types";
import { cn } from "@/lib/utils";

function StatusBadge({
  collection,
  progress,
}: {
  collection: Collection;
  progress: CollectionProgress;
}) {
  const badge = progress.isComplete
    ? { label: "Completada", cls: "bg-success-soft text-success" }
    : collection.isNew
      ? { label: "Nueva", cls: "bg-primary-soft text-primary" }
      : { label: "Al aire", cls: "bg-warning-soft text-warning-strong" };

  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-1 text-[10px] font-extrabold tracking-wider uppercase",
        badge.cls
      )}
    >
      {badge.label}
    </span>
  );
}

/** Tarjeta desktop (grid) — imagen arriba, info abajo. */
function CollectionCard({
  collection,
  progress,
}: {
  collection: Collection;
  progress: CollectionProgress;
}) {
  return (
    <Link
      href={`/colecciones/${collection.slug}`}
      className="group overflow-hidden rounded-card bg-surface shadow-sm transition-shadow hover:shadow-md"
    >
      <CollectionArt collection={collection} className="h-28">
        <span className="absolute top-3 left-3">
          <StatusBadge collection={collection} progress={progress} />
        </span>
      </CollectionArt>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-extrabold">{collection.name}</h3>
          <ChevronRight className="size-4 text-muted transition-transform group-hover:translate-x-0.5" aria-hidden />
        </div>
        <p className="mt-0.5 text-[13px] font-semibold text-muted">
          {progress.obtained} / {progress.total} figuras
        </p>
        <div className="mt-3 flex items-center gap-3">
          <ProgressBar percent={progress.percent} className="flex-1" />
          <span className="text-[13px] font-extrabold">{progress.percent}%</span>
        </div>
      </div>
    </Link>
  );
}

/** Fila móvil — thumbnail, info y barra en línea. */
function CollectionRow({
  collection,
  progress,
}: {
  collection: Collection;
  progress: CollectionProgress;
}) {
  return (
    <Link
      href={`/colecciones/${collection.slug}`}
      className="flex items-center gap-3 rounded-card bg-surface p-3 shadow-sm"
    >
      <CollectionArt collection={collection} className="size-14 shrink-0 rounded-xl" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-sm font-extrabold">{collection.name}</h3>
          <StatusBadge collection={collection} progress={progress} />
        </div>
        <p className="mt-0.5 text-xs font-semibold text-muted">
          {progress.obtained} / {progress.total} figuras
        </p>
        <div className="mt-2 flex items-center gap-2">
          <ProgressBar percent={progress.percent} className="flex-1" />
          <span className="text-xs font-extrabold">{progress.percent}%</span>
        </div>
      </div>
      <ChevronRight className="size-5 shrink-0 text-muted" aria-hidden />
    </Link>
  );
}

export function ActiveCollections() {
  const owned = useUserCollection((s) => s.owned);
  const active = getCollections("al-aire");

  return (
    <section aria-label="Colecciones activas">
      <SectionHeader
        icon={Sparkles}
        title="Colecciones activas"
        actionLabel={`Ver todas (${active.length})`}
        actionHref="/colecciones"
      />

      {/* Desktop: grid de tarjetas */}
      <div className="mt-4 hidden grid-cols-2 gap-4 lg:grid xl:grid-cols-4">
        {active.map((c) => (
          <CollectionCard
            key={c.id}
            collection={c}
            progress={getCollectionProgress(c, owned[c.id] ?? [])}
          />
        ))}
      </div>

      {/* Mobile: lista de filas */}
      <div className="mt-4 space-y-3 lg:hidden">
        {active.map((c) => (
          <CollectionRow
            key={c.id}
            collection={c}
            progress={getCollectionProgress(c, owned[c.id] ?? [])}
          />
        ))}
      </div>
    </section>
  );
}
