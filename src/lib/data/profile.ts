import type { RewardType } from "@/lib/types";

/**
 * Perfil mock del coleccionista (contenido demo, coincide con mockups).
 * En producción vendrá de la cuenta del usuario.
 */

export const profile = {
  name: "Explorador",
  level: 4,
  coins: 1250,
  xp: 1250,
  xpNext: 2000,
};

export interface RecentReward {
  id: string;
  type: RewardType | "coleccion";
  title: string;
  subtitle: string;
  timeAgo: string;
}

export const recentRewards: RecentReward[] = [
  { id: "rw-1", type: "badge", title: "Badge", subtitle: "Explorador Estelar", timeAgo: "Hace 2 días" },
  { id: "rw-2", type: "wallpaper", title: "Wallpaper", subtitle: "Capitán Muffin", timeAgo: "Hace 3 días" },
  { id: "rw-3", type: "poster", title: "Póster Digital", subtitle: "Exclusivo", timeAgo: "Hace 5 días" },
  { id: "rw-4", type: "coleccion", title: "Colección Iniciada", subtitle: "Cartoon Network", timeAgo: "Hace 1 semana" },
];

/** Fecha de completado (demo) para colecciones históricas. */
export const historicalCompletion: Record<string, string> = {
  "escandalosos": "Mar 2024",
  "ben-10": "May 2024",
  "laboratorio-de-dexter": "Jul 2024",
  "steven-universe": "Sep 2024",
};
