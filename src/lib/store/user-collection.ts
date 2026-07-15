"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AuthMethod } from "@/lib/types";
import { demoSeed } from "./seed";

/**
 * Estado del usuario (Zustand + persist en localStorage).
 * Guarda SOLO hechos (ids de figuras, notificaciones leídas, sesión).
 * Todo lo derivado (%, faltantes, hitos) se calcula con `lib/progress`.
 */

const METHOD_NAME: Record<AuthMethod, string> = {
  google: "Andrés",
  facebook: "Andrés",
  email: "Andrés",
  guest: "Coleccionista",
};

interface UserCollectionStore {
  owned: Record<string, string[]>;
  /** Ids de notificaciones ya leídas. */
  readNotificationIds: string[];
  /** Soft login simulado; null = aún no elige (muestra bienvenida). */
  authMethod: AuthMethod | null;
  userName: string;
  /** true cuando el estado real ya se leyó de localStorage (no se persiste). */
  hasHydrated: boolean;
  addFigure: (collectionId: string, figureId: string) => void;
  removeFigure: (collectionId: string, figureId: string) => void;
  hasFigure: (collectionId: string, figureId: string) => boolean;
  markNotificationRead: (id: string) => void;
  markAllNotificationsRead: (ids: string[]) => void;
  signIn: (method: AuthMethod) => void;
  /** Restaura el estado demo (18/25 en Cartoon Network). */
  resetDemo: () => void;
}

export const useUserCollection = create<UserCollectionStore>()(
  persist(
    (set, get) => ({
      owned: demoSeed.owned,
      readNotificationIds: [],
      authMethod: null,
      userName: "Coleccionista",
      hasHydrated: false,

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

      signIn: (method) => set({ authMethod: method, userName: METHOD_NAME[method] }),

      resetDemo: () =>
        set({
          owned: demoSeed.owned,
          readNotificationIds: [],
          authMethod: null,
          userName: "Coleccionista",
        }),
    }),
    {
      name: "lb-user-collection-v1",
      skipHydration: true,
      partialize: (s) => ({
        owned: s.owned,
        readNotificationIds: s.readNotificationIds,
        authMethod: s.authMethod,
        userName: s.userName,
      }),
    }
  )
);
