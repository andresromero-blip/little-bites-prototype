"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarClock, ChevronRight, Sparkles } from "lucide-react";
import { CollectionArt } from "@/components/ui/collection-art";
import { ProgressBar } from "@/components/ui/progress-bar";
import { SectionHeader } from "@/components/ui/section-header";
import { Tabs } from "@/components/ui/tabs";
import { StatusBadge } from "@/components/collections/status-badge";
import { launchLabel, monthYearLabel } from "@/lib/format";
import { getCollections } from "@/lib/data";
import { getCollectionProgress } from "@/lib/progress";
import { useUserCollection } from "@/lib/store/user-collection";
import type { Collection, CollectionProgress, CollectionStatus } from "@/lib/types";

/**
 * Card unificada (mobile + desktop) estilo póster:
 * banner de arte protagonista + capa de completion (nuestro diferencial).
 * Cuando exista key art real, collection.image lo pinta sin refactor.
 */
function CollectionCard({
  collection,
  progress,
}: {
  collection: Collection;
  progress: CollectionProgress;
}) {
  const upcoming = collection.status === "proximamente";

  return (
    <Link
      href={`/colecciones/${collection.slug}`}
      className="group overflow-hidden rounded-card bg-surface shadow-sm transition-shadow hover:shadow-md"
    >
      {/* Banner de arte: el mini-póster de la colección */}
      <CollectionArt collection={collection} className="h-36">
        <span className="absolute top-3 left-3 z-10">
          <StatusBadge collection={collection} progress={progress} />
        </span>
      </CollectionArt>

      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-[15px] font-extrabold">{collection.name}</h3>
          <ChevronRight
            className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </div>

        <p className="mt-0.5 text-[13px] font-semibold text-muted">
          {upcoming
            ? `${collection.totalFigures} figuras`
            : `${progress.obtained} / ${progress.total} figuras · Desde ${monthYearLabel(collection.launchDate)}`}
        </p>

        {upcoming ? (
          <p className="mt-3 flex items-center gap-1.5 text-[13px] font-semibold text-muted">
            <CalendarClock className="size-4" aria-hidden />
            Lanza el {launchLabel(collection.launchDate)}
          </p>
        ) : (
          <div className="mt-3 flex items-center gap-3">
            <ProgressBar percent={progress.percent} className="flex-1" />
            <span className="text-[13px] font-extrabold">{progress.percent}%</span>
          </div>
        )}
      </div>
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
      <SectionHeader icon={Sparkles} title="Colecciones" />

      <div className="mt-4">
        <Tabs
          items={items}
          value={tab}
          onChange={(id) => setTab(id as CollectionStatus)}
          ariaLabel="Filtrar colecciones por estado"
        />
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {visible.map((c) => (
          <CollectionCard
            key={c.id}
            collection={c}
            progress={getCollectionProgress(c, owned[c.id] ?? [])}
          />
        ))}
      </div>
    </section>
  );
}
