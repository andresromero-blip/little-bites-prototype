"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CollectionArt } from "@/components/ui/collection-art";
import { historicalCompletion } from "@/lib/data/profile";
import { getCollections } from "@/lib/data";
import { getCollectionProgress } from "@/lib/progress";
import { useUserCollection } from "@/lib/store/user-collection";

/** Historial: colecciones que el usuario ha completado (derivado, no fijo). */
export function CollectionHistory() {
  const owned = useUserCollection((s) => s.owned);

  const completed = getCollections()
    .filter((c) => c.status !== "proximamente")
    .filter((c) => getCollectionProgress(c, owned[c.id] ?? []).isComplete);

  return (
    <section aria-label="Historial de colecciones">
      <h2 className="text-sm font-extrabold tracking-wide uppercase">
        Historial de colecciones
      </h2>

      {completed.length === 0 ? (
        <p className="mt-3 rounded-card bg-surface p-5 text-sm font-semibold text-muted shadow-sm">
          Aún no completas ninguna colección. Cuando lo hagas, quedará registrada aquí.
        </p>
      ) : (
        <ul className="mt-3 space-y-3">
          {completed.map((c) => (
            <li key={c.id}>
              <Link
                href={`/colecciones/${c.slug}`}
                className="flex items-center gap-3 rounded-card bg-surface p-3 shadow-sm transition-shadow hover:shadow-md"
              >
                <CollectionArt collection={c} className="size-12 shrink-0 rounded-xl" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-extrabold">{c.name}</span>
                  <span className="block text-xs font-semibold text-muted">
                    Completada{historicalCompletion[c.id] ? ` · ${historicalCompletion[c.id]}` : ""}
                  </span>
                </span>
                <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-extrabold text-primary-foreground">
                  100%
                </span>
                <ChevronRight className="size-4 shrink-0 text-muted" aria-hidden />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
