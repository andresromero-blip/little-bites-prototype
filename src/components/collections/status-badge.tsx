import type { Collection, CollectionProgress } from "@/lib/types";
import { cn } from "@/lib/utils";

/** Badge de estado de colección: Próximamente · Completada · Nueva · Al aire. */
export function StatusBadge({
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
