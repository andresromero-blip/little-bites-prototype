import type { Collection, Figure } from "@/lib/types";
import { getCollections, getFigures } from "@/lib/data";

/**
 * Búsqueda predictiva global: colecciones + figuras.
 * Los resultados de figuras incluyen su colección para poder mostrar
 * el estado ("La tienes" / "Te falta") — la vía rápida al dolor #1.
 */

export interface FigureHit {
  figure: Figure;
  collection: Collection;
}

export interface SearchResults {
  collections: Collection[];
  figures: FigureHit[];
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/** startsWith pesa más que includes; empates se resuelven por orden natural. */
function score(text: string, q: string): number {
  const t = normalize(text);
  if (t.startsWith(q)) return 2;
  if (t.split(" ").some((w) => w.startsWith(q))) return 1.5;
  if (t.includes(q)) return 1;
  return 0;
}

export function searchAll(query: string, limit = 5): SearchResults {
  const q = normalize(query.trim());
  if (q.length === 0) return { collections: [], figures: [] };

  const collections = getCollections()
    .map((c) => ({ c, s: Math.max(score(c.name, q), ...c.series.map((sr) => score(sr, q) * 0.8)) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((x) => x.c);

  const figures = getCollections()
    .flatMap((c) => getFigures(c.id).map((f) => ({ figure: f, collection: c })))
    .map((hit) => ({ hit, s: Math.max(score(hit.figure.name, q), score(hit.figure.series, q) * 0.6) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((x) => x.hit);

  return { collections, figures };
}
