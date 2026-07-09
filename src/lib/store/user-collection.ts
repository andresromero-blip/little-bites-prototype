"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { demoSeed } from "./seed";

/**
 * Estado del usuario (Zustand + persist en localStorage).
 * Guarda SOLO hechos (ids de figuras obtenidas). Todo lo derivado
 * (%, faltantes, hitos) se calcula con `lib/progress`.
 */

interface UserCollectionStore {
  owned: Record<string, string[]>;
  addFigure: (collectionId: string, figureId: string) => void;
  removeFigure: (collectionId: string, figureId: string) => void;
  hasFigure: (collectionId: string, figureId: string) => boolean;
  /** Restaura el estado demo (18/25 en Cartoon Network). */
  resetDemo: () => void;
}

export const useUserCollection = create<UserCollectionStore>()(
  persist(
    (set, get) => ({
      owned: demoSeed.owned,

      addFigure: (collectionId, figureId) =>
        set((state) => {
          const current = state.owned[collectionId] ?? [];
          if (current.includes(figureId)) return state;
          return { owned: { ...state.owned, [collectionId]: [...current, figureId] } };
        }),

      removeFigure: (collectionId, figureId) =>
        set((state) => {
          const current = state.owned[collectionId] ?? [];
          return {
            owned: {
              ...state.owned,
              [collectionId]: current.filter((id) => id !== figureId),
            },
          };
        }),

      hasFigure: (collectionId, figureId) =>
        (get().owned[collectionId] ?? []).includes(figureId),

      resetDemo: () => set({ owned: demoSeed.owned }),
    }),
    { name: "lb-user-collection-v1", skipHydration: true }
  )
);
