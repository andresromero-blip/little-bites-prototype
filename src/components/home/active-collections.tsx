"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarClock, ChevronRight, Sparkles } from "lucide-react";
import { CollectionArt } from "@/components/ui/collection-art";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SectionHeader } from "@/components/ui/section-header";
import { Tabs } from "@/components/ui/tabs";
import { getCollections } from "@/lib/data";
import { getCollectionProgress } from "@/lib/progress";
import { useUserCollection } from "@/lib/store/user-collection";
import type { Collection, CollectionProgress, CollectionStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

function launchLabel(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[(m ?? 1) - 1]} ${y}`;
}

function StatusBadge({
  collection,
  progress,
}: {
  collection: Collection;
  progress: CollectionProgress;
}) {
  const badge =
    collection.status === "proximamente"
      ? { label: "Próximamente", cls: "bg-primary-soft text-primary" }
      : progress.isComplete
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

/** Meta inferior de la tarjeta/fila: progreso o fecha de lanzamiento. */
function CollectionMeta({
  collection,
  progress,
  compact,
}: {
  collection: Collection;
  progress: CollectionProgress;
  compact?: boolean;
}) {
  if (collection.status === "proximamente") {
    return (
      <p
        className={cn(
          "flex items-center gap-1.5 font-semibold text-muted",
          compact ? "mt-2 text-xs" : "mt-3 text-[13px]"
        )}
      >
        <CalendarClock className={compact ? "size-3.5" : "size-4"} aria-hidden />
        Lanza el {launchLabel(collection.launchDate)}
      </p>
    );
  }

  return (
    <div className={cn("flex items-center gap-3", compact ? "mt-2" : "mt-3")}>
      <ProgressBar percent={progress.percent} className="flex-1" />
      <span className={cn("font-extrabold", compact ? "text-xs" : "text-[13px]")}>
        {progress.percent}%
      </span>
    </div>
  );
}

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
        <span className="absolute top-3 left-3 z-10">
          <StatusBadge collection={collection} progress={progress} />
        </span>
      </CollectionArt>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[15px] font-extrabold">{collection.name}</h3>
          <ChevronRight
            className="size-4 text-muted transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </div>
        <p className="mt-0.5 text-[13px] font-semibold text-muted">
          {collection.status === "proximamente"
            ? `${collection.totalFigures} figuras`
            : `${progress.obtained} / ${progress.total} figuras`}
        </p>
        <CollectionMeta collection={collection} progress={progress} />
      </div>
    </Link>
  );
}

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
          {collection.status === "proximamente"
            ? `${collection.totalFigures} figuras`
            : `${progress.obtained} / ${progress.total} figuras`}
        </p>
        <CollectionMeta collection={collection} progress={progress} compact />
      </div>
      <ChevronRight className="size-5 shrink-0 text-muted" aria-hidden />
    </Link>
  );
}

const TAB_LABELS: Record<CollectionStatus, string> = {
  "al-aire": "Activas",
  "proximamente": "Próximamente",
  "historica": "Históricas",
};

/** Módulo "Colecciones" del Home con filtro rápido por estado. */
export function ActiveCollections() {
  const owned = useUserCollection((s) => s.owned);
  const [tab, setTab] = useState<CollectionStatus>("al-aire");

  const items = (Object.keys(TAB_LABELS) as CollectionStatus[]).map((status) => ({
    id: status,
    label: TAB_LABELS[status],
    count: getCollections(status).length,
  }));

  const visible = getCollections(tab);

  return (
    <section aria-label="Colecciones">
      <SectionHeader
        icon={Sparkles}
        title="Colecciones"
        actionLabel="Ver todas"
        actionHref="/colecciones"
      />

      <div className="mt-4">
        <Tabs
          items={items}
          value={tab}
          onChange={(id) => setTab(id as CollectionStatus)}
          ariaLabel="Filtrar colecciones por estado"
        />
      </div>

      {/* Desktop: grid de tarjetas */}
      <div className="mt-4 hidden grid-cols-2 gap-4 lg:grid xl:grid-cols-4">
        {visible.map((c) => (
          <CollectionCard
            key={c.id}
            collection={c}
            progress={getCollectionProgress(c, owned[c.id] ?? [])}
          />
        ))}
      </div>

      {/* Mobile: lista de filas */}
      <div className="mt-4 space-y-3 lg:hidden">
        {visible.map((c) => (
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
