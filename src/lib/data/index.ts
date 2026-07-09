import type { Collection, CollectionStatus, Figure } from "@/lib/types";
import { collections, figuresByCollection } from "./collections";

/**
 * Repositorio de contenido.
 *
 * ÚNICO punto de acceso al contenido. Los componentes nunca importan los
 * arrays de datos directamente: cuando el contenido migre a la API/CMS de
 * Nubity, solo cambia este archivo.
 *
 * Orden por defecto: relevancia (destacada → nueva → fecha de lanzamiento).
 * Nunca alfabético (regla de producto).
 */

function byRelevance(a: Collection, b: Collection): number {
  if (a.isFeatured !== b.isFeatured) return a.isFeatured ? -1 : 1;
  if (a.isNew !== b.isNew) return a.isNew ? -1 : 1;
  return b.launchDate.localeCompare(a.launchDate);
}

export function getCollections(status?: CollectionStatus): Collection[] {
  const list = status ? collections.filter((c) => c.status === status) : collections;
  return [...list].sort(byRelevance);
}

export function getCollectionBySlug(slug: string): Collection | null {
  return collections.find((c) => c.slug === slug) ?? null;
}

export function getFeaturedCollection(): Collection | null {
  return collections.find((c) => c.isFeatured) ?? null;
}

export function getFigures(collectionId: string): Figure[] {
  return figuresByCollection[collectionId] ?? [];
}

export function getFigure(collectionId: string, figureId: string): Figure | null {
  return getFigures(collectionId).find((f) => f.id === figureId) ?? null;
}
