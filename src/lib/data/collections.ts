import type { Collection, Figure, Milestone } from "@/lib/types";
import { cartoonNetworkFigures } from "./figures/cartoon-network";

/**
 * Contenido de colecciones. Simula lo que en producción vendrá de CMS/API.
 * Solo Cartoon Network tiene figuras reales; el resto usa figuras
 * placeholder generadas (suficiente para validar flujos y layouts).
 */

function milestonesFor(collectionName: string): Milestone[] {
  return [
    { threshold: 25, reward: { id: `${collectionName}-25`, type: "wallpaper", name: "Wallpaper exclusivo", description: `Fondo de pantalla de ${collectionName}` } },
    { threshold: 50, reward: { id: `${collectionName}-50`, type: "badge", name: "Badge exclusivo", description: `Insignia de coleccionista de ${collectionName}` } },
    { threshold: 75, reward: { id: `${collectionName}-75`, type: "poster", name: "Póster digital", description: `Póster digital de ${collectionName}` } },
    { threshold: 100, reward: { id: `${collectionName}-100`, type: "arte", name: "Arte exclusivo animado", description: `Contenido especial por completar ${collectionName}` } },
  ];
}

export const collections: Collection[] = [
  {
    id: "cartoon-network",
    slug: "cartoon-network",
    name: "Cartoon Network",
    tagline: "25 figuras increíbles de tus personajes favoritos de las series más icónicas.",
    status: "al-aire",
    isNew: true,
    isFeatured: true,
    launchDate: "2026-06-15",
    totalFigures: 25,
    series: [
      "Hora de Aventura",
      "El Increíble Mundo de Gumball",
      "Las Chicas Superpoderosas",
      "Escandalosos",
      "Ben 10",
      "El Laboratorio de Dexter",
      "Steven Universe",
    ],
    milestones: milestonesFor("Cartoon Network"),
    image: null,
    heroImage: "/images/hero-cn-chars.png",
    heroBackground: "/images/hero-cn-bg.png",
  },
  {
    id: "monstruos-del-multiverso",
    slug: "monstruos-del-multiverso",
    name: "Monstruos del Multiverso",
    tagline: "20 criaturas de otras dimensiones listas para invadir tu vitrina.",
    status: "al-aire",
    isNew: false,
    isFeatured: false,
    launchDate: "2026-03-10",
    totalFigures: 20,
    series: ["Monstruos del Multiverso"],
    milestones: milestonesFor("Monstruos del Multiverso"),
    image: null,
  },
  {
    id: "heroes-en-accion",
    slug: "heroes-en-accion",
    name: "Héroes en Acción",
    tagline: "18 héroes con una misión: llegar completos a tu colección.",
    status: "al-aire",
    isNew: false,
    isFeatured: false,
    launchDate: "2026-01-20",
    totalFigures: 18,
    series: ["Héroes en Acción"],
    milestones: milestonesFor("Héroes en Acción"),
    image: null,
  },
  {
    id: "dulces-amigos",
    slug: "dulces-amigos",
    name: "Dulces Amigos",
    tagline: "12 amigos dulces que ya conquistaron a los coleccionistas.",
    status: "al-aire",
    isNew: false,
    isFeatured: false,
    launchDate: "2025-10-05",
    totalFigures: 12,
    series: ["Dulces Amigos"],
    milestones: milestonesFor("Dulces Amigos"),
    image: null,
  },
  {
    id: "guardianes-cosmicos",
    slug: "guardianes-cosmicos",
    name: "Guardianes Cósmicos",
    tagline: "Una nueva colección intergaláctica está por aterrizar.",
    status: "proximamente",
    isNew: false,
    isFeatured: false,
    launchDate: "2026-07-24",
    totalFigures: 22,
    series: ["Guardianes Cósmicos"],
    milestones: milestonesFor("Guardianes Cósmicos"),
    image: null,
  },
  {
    id: "aventuras-marinas",
    slug: "aventuras-marinas",
    name: "Aventuras Marinas",
    tagline: "Exploradores del océano en camino a la superficie.",
    status: "proximamente",
    isNew: false,
    isFeatured: false,
    launchDate: "2026-08-23",
    totalFigures: 18,
    series: ["Aventuras Marinas"],
    milestones: milestonesFor("Aventuras Marinas"),
    image: null,
  },
  {
    id: "escandalosos",
    slug: "escandalosos",
    name: "Escandalosos",
    tagline: "La colección que arrasó en 2024.",
    status: "historica",
    isNew: false,
    isFeatured: false,
    launchDate: "2024-03-01",
    totalFigures: 12,
    series: ["Escandalosos"],
    milestones: milestonesFor("Escandalosos"),
    image: null,
  },
  {
    id: "ben-10",
    slug: "ben-10",
    name: "Ben 10",
    tagline: "Los 10 alienígenas originales del Omnitrix.",
    status: "historica",
    isNew: false,
    isFeatured: false,
    launchDate: "2024-05-01",
    totalFigures: 10,
    series: ["Ben 10"],
    milestones: milestonesFor("Ben 10"),
    image: null,
  },
  {
    id: "laboratorio-de-dexter",
    slug: "laboratorio-de-dexter",
    name: "El Laboratorio de Dexter",
    tagline: "Ciencia, hermanas y caos coleccionable.",
    status: "historica",
    isNew: false,
    isFeatured: false,
    launchDate: "2024-07-01",
    totalFigures: 10,
    series: ["El Laboratorio de Dexter"],
    milestones: milestonesFor("El Laboratorio de Dexter"),
    image: null,
  },
  {
    id: "steven-universe",
    slug: "steven-universe",
    name: "Steven Universe",
    tagline: "Las Gemas de Cristal, completas por primera vez.",
    status: "historica",
    isNew: false,
    isFeatured: false,
    launchDate: "2024-09-01",
    totalFigures: 12,
    series: ["Steven Universe"],
    milestones: milestonesFor("Steven Universe"),
    image: null,
  },
];

/**
 * Figuras placeholder para colecciones sin contenido real todavía.
 * Se generan de forma determinista para que ids sean estables.
 */
function placeholderFigures(collection: Collection): Figure[] {
  return Array.from({ length: collection.totalFigures }, (_, i): Figure => {
    const rarity =
      i === collection.totalFigures - 1 ? "epica" : i % 5 === 4 ? "rara" : "comun";
    return {
      id: `${collection.id}-fig-${String(i + 1).padStart(2, "0")}`,
      collectionId: collection.id,
      number: i + 1,
      name: `Figura ${String(i + 1).padStart(2, "0")}`,
      series: collection.series[0] ?? collection.name,
      rarity,
      description: `Figura ${i + 1} de la colección ${collection.name}.`,
      image: null,
    };
  });
}

/** Todas las figuras, indexadas por colección. */
export const figuresByCollection: Record<string, Figure[]> = Object.fromEntries(
  collections.map((c): [string, Figure[]] => [
    c.id,
    c.id === "cartoon-network" ? cartoonNetworkFigures : placeholderFigures(c),
  ])
);
