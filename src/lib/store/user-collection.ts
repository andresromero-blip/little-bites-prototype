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
  /** Ids de notificaciones ya leídas. */
  readNotificationIds: string[];
  addFigure: (collectionId: string, figureId: string) => void;
  removeFigure: (collectionId: string, figureId: string) => void;
  hasFigure: (collectionId: string, figureId: string) => boolean;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: (ids: string[]) => void;
  /** Restaura el estado demo (18/25 en Cartoon Network). */
  resetDemo: () => void;
}

export const useUserCollection = create<UserCollectionStore>()(
  persist(
    (set, get) => ({
      owned: demoSeed.owned,
      readNotificationIds: [],

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

      markNotificationRead: (id) =>
        set((state) =>
          state.readNotificationIds.includes(id)
            ? state
            : { readNotificationIds: [...state.readNotificationIds, id] }
        ),

      markAllNotificationsRead: (ids) => set({ readNotificationIds: ids }),

      resetDemo: () => set({ owned: demoSeed.owned, readNotificationIds: [] }),
    }),
    { name: "lb-user-collection-v1", skipHydration: true }
  )
);
