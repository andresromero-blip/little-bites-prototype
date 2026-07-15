"use client";

import { useEffect } from "react";
import { useUserCollection } from "@/lib/store/user-collection";

/**
 * Rehidrata el store desde localStorage DESPUÉS del primer render
 * (evita mismatch SSR/cliente) y marca hasHydrated para los
 * componentes que dependen del estado real (p. ej. WelcomeGate).
 */
export function StoreHydrator() {
  useEffect(() => {
    void Promise.resolve(useUserCollection.persist.rehydrate()).then(() => {
      useUserCollection.setState({ hasHydrated: true });
    });
  }, []);
  return null;
}
