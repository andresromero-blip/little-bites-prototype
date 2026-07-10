"use client";

import { CalendarClock, Layers } from "lucide-react";
import { CollectionArt } from "@/components/ui/collection-art";
import { StatusBadge } from "@/components/collections/status-badge";
import { launchLabel } from "@/lib/format";
import { getCollectionProgress } from "@/lib/progress";
import { useUserCollection } from "@/lib/store/user-collection";
import type { Collection } from "@/lib/types";

/** Cabecera del detalle: arte, estado, nombre, descripción y series. */
export function CollectionHero({ collection }: { collection: Collection }) {
  const owned = useUserCollection((s) => s.owned);
  const progress = getCollectionProgress(collection, owned[collection.id] ?? []);

  return (
    <section aria-label={collection.name}>
      <CollectionArt collection={collection} className="h-40 rounded-card sm:h-56">
        <span className="absolute top-4 left-4 z-10">
          <StatusBadge collection={collection} progress={progress} />
        </span>
      </CollectionArt>

      <h1 className="mt-5 text-2xl font-black sm:text-3xl">{collection.name}</h1>
      <p className="mt-2 text-[15px] font-semibold text-muted">{collection.tagline}</p>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-bold text-muted">
        <span className="flex items-center gap-1.5">
          <Layers className="size-4" aria-hidden />
          {collection.totalFigures} figuras
        </span>
        <span className="flex items-center gap-1.5">
          <CalendarClock className="size-4" aria-hidden />
          {collection.status === "proximamente" ? "Lanza el " : "Desde el "}
          {launchLabel(collection.launchDate)}
        </span>
      </div>

      {collection.series.length > 1 && (
        <div className="mt-4">
          <h2 className="text-[11px] font-extrabold tracking-widest text-muted uppercase">
            Series incluidas
          </h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {collection.series.map((s) => (
              <li
                key={s}
                className="rounded-full border border-border-soft bg-surface px-3 py-1.5 text-[12px] font-bold"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
