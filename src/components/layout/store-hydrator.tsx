"use client";

import { useEffect } from "react";
import { useUserCollection } from "@/lib/store/user-collection";

/**
 * Rehidrata el store desde localStorage DESPUÉS del primer render.
 * Evita mismatch de hidratación: SSR y primer render cliente usan el seed;
 * el estado real del usuario entra en un efecto.
 */
export function StoreHydrator() {
  useEffect(() => {
    void useUserCollection.persist.rehydrate();
  }, []);
  return null;
}
