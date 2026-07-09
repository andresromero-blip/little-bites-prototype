import type { UserOwnership } from "@/lib/types";
import { figuresByCollection } from "@/lib/data/collections";

/**
 * Estado demo inicial (coincide con los mockups):
 * - Cartoon Network: 18/25 — faltan las 7 del flujo "Faltantes".
 * - Monstruos del Multiverso: 9/20 · Héroes en Acción: 3/18.
 * - Dulces Amigos e históricas: completadas.
 * Permite demostrar en vivo el registro de "Jake (translúcido)" → 19/25.
 */

const CN_MISSING = new Set([
  "cn-jake-translucido",
  "cn-el",
  "cn-ben-10",
  "cn-cuatro-brazos",
  "cn-dexter",
  "cn-dee-dee",
  "cn-garnet",
]);

function allIds(collectionId: string): string[] {
  return (figuresByCollection[collectionId] ?? []).map((f) => f.id);
}

export const demoSeed: UserOwnership = {
  owned: {
    "cartoon-network": allIds("cartoon-network").filter((id) => !CN_MISSING.has(id)),
    "monstruos-del-multiverso": allIds("monstruos-del-multiverso").slice(0, 9),
    "heroes-en-accion": allIds("heroes-en-accion").slice(0, 3),
    "dulces-amigos": allIds("dulces-amigos"),
    "escandalosos": allIds("escandalosos"),
    "ben-10": allIds("ben-10"),
    "laboratorio-de-dexter": allIds("laboratorio-de-dexter"),
    "steven-universe": allIds("steven-universe"),
  },
};
