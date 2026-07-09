import type { Collection, CollectionProgress, Figure } from "@/lib/types";
import { getCollections, getFigures } from "@/lib/data";

/**
 * Motor de progreso: funciones PURAS que derivan el avance a partir de
 * (contenido, figuras obtenidas). Nada de esto se persiste.
 * Responde las 4 preguntas del producto: ¿dónde estoy? ¿qué me falta?
 * ¿qué hago ahora? ¿qué gané?
 */

export function getCollectionProgress(
  collection: Collection,
  ownedIds: string[]
): CollectionProgress {
  const total = collection.totalFigures;
  const obtained = Math.min(ownedIds.length, total);
  const percent = total === 0 ? 0 : Math.round((obtained / total) * 100);
  const reachedMilestones = collection.milestones.filter((m) => percent >= m.threshold);
  const nextMilestone = collection.milestones.find((m) => percent < m.threshold) ?? null;

  return {
    collectionId: collection.id,
    obtained,
    total,
    missing: total - obtained,
    percent,
    isComplete: obtained === total,
    nextMilestone,
    reachedMilestones,
  };
}

export function getMissingFigures(collection: Collection, ownedIds: string[]): Figure[] {
  const owned = new Set(ownedIds);
  return getFigures(collection.id).filter((f) => !owned.has(f.id));
}

export interface GlobalProgress {
  activeCollections: number;
  completedCollections: number;
  totalObtained: number;
  totalMissing: number;
  /** % global sobre colecciones al aire e históricas */
  percent: number;
}

export function getGlobalProgress(owned: Record<string, string[]>): GlobalProgress {
  const launched = getCollections().filter((c) => c.status !== "proximamente");
  let obtained = 0;
  let total = 0;
  let completed = 0;
  let active = 0;

  for (const c of launched) {
    const p = getCollectionProgress(c, owned[c.id] ?? []);
    obtained += p.obtained;
    total += p.total;
    if (p.isComplete) completed += 1;
    else if (c.status === "al-aire") active += 1;
  }

  return {
    activeCollections: active,
    completedCollections: completed,
    totalObtained: obtained,
    totalMissing: total - obtained,
    percent: total === 0 ? 0 : Math.round((obtained / total) * 100),
  };
}
