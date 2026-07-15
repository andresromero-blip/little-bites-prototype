/**
 * Modelo de dominio — Little Bites Completion Engine
 *
 * Principio central: el CONTENIDO (colecciones, figuras, recompensas) es
 * inmutable y vive en `lib/data`. El ESTADO DEL USUARIO (qué figuras tiene)
 * vive en el store. El progreso NUNCA se guarda: siempre se deriva.
 */

export type CollectionStatus = "al-aire" | "proximamente" | "historica";

export type Rarity = "comun" | "rara" | "epica" | "especial";

export type RewardType = "wallpaper" | "badge" | "poster" | "arte";

export interface Reward {
  id: string;
  type: RewardType;
  name: string;
  description: string;
}

/** Hito de recompensa por porcentaje de avance de una colección. */
export interface Milestone {
  /** Porcentaje requerido: 25 | 50 | 75 | 100 */
  threshold: number;
  reward: Reward;
}

export interface Figure {
  id: string;
  collectionId: string;
  /** Número dentro de la colección (1..total) */
  number: number;
  name: string;
  /** Serie / franquicia a la que pertenece (p. ej. "Hora de Aventura") */
  series: string;
  rarity: Rarity;
  description: string;
  /** Año de estreno de la serie del personaje */
  seriesYear?: string;
  /** Datos curiosos — se desbloquean al obtener la figura */
  facts?: string[];
  /** Ruta a asset visual; null mientras no haya arte final */
  image: string | null;
}

/** Método de acceso del soft login (simulado en prototipo). */
export type AuthMethod = "google" | "facebook" | "email" | "guest";

export interface Collection {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  status: CollectionStatus;
  /** Marca la colección como reciente (badge "Nueva") */
  isNew: boolean;
  /** Colección destacada en el hero del Home */
  isFeatured: boolean;
  /** ISO date */
  launchDate: string;
  totalFigures: number;
  series: string[];
  milestones: Milestone[];
  image: string | null;
  /** PNG sin fondo (personajes) que convive con el texto del hero */
  heroImage?: string | null;
  /**
   * Art direction responsiva (opcional): variante vertical del arte para
   * mobile. Si no existe, se reutiliza heroImage (object-contain: nunca
   * se recorta ni deforma, solo cambia de escala y ancla).
   */
  heroImageMobile?: string | null;
  /** Foto/arte de fondo del hero; se aplica con opacidad + máscara de color */
  heroBackground?: string | null;
  /** Variante vertical del fondo para mobile (opcional). */
  heroBackgroundMobile?: string | null;
}

/** Estado persistido del usuario: la ÚNICA fuente de verdad del avance. */
export interface UserOwnership {
  /** collectionId -> ids de figuras obtenidas */
  owned: Record<string, string[]>;
}

/** Progreso derivado de una colección (nunca se persiste). */
export interface CollectionProgress {
  collectionId: string;
  obtained: number;
  total: number;
  missing: number;
  /** 0..100, redondeado */
  percent: number;
  isComplete: boolean;
  /** Siguiente hito no alcanzado, si existe */
  nextMilestone: Milestone | null;
  /** Hitos ya alcanzados */
  reachedMilestones: Milestone[];
}
