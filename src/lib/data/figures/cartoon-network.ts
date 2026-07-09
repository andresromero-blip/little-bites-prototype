import type { Figure } from "@/lib/types";

/**
 * Colección real de referencia: Cartoon Network (25 figuras).
 * Fuente: mockups y brief del proyecto.
 */

const CN = "cartoon-network";

export const cartoonNetworkFigures: Figure[] = [
  // ── Hora de Aventura ──────────────────────────────────────────────
  { id: "cn-finn", collectionId: CN, number: 1, name: "Finn", series: "Hora de Aventura", rarity: "comun", description: "El humano más valiente de la Tierra de Ooo.", image: null },
  { id: "cn-jake-translucido", collectionId: CN, number: 2, name: "Jake (translúcido)", series: "Hora de Aventura", rarity: "especial", description: "El mejor amigo de Finn. Siempre listo para la aventura.", image: null },
  { id: "cn-princesa-chicle", collectionId: CN, number: 3, name: "Princesa Chicle", series: "Hora de Aventura", rarity: "comun", description: "La brillante gobernante del Dulce Reino.", image: null },
  { id: "cn-princesa-grumosa", collectionId: CN, number: 4, name: "Princesa Grumosa", series: "Hora de Aventura", rarity: "comun", description: "La princesa más dramática del Espacio Grumoso.", image: null },
  { id: "cn-rey-helado", collectionId: CN, number: 5, name: "Rey Helado", series: "Hora de Aventura", rarity: "rara", description: "El excéntrico monarca del Reino Helado.", image: null },
  { id: "cn-bmo", collectionId: CN, number: 6, name: "BMO", series: "Hora de Aventura", rarity: "rara", description: "La consola de videojuegos más adorable de Ooo.", image: null },

  // ── El Increíble Mundo de Gumball ────────────────────────────────
  { id: "cn-gumball", collectionId: CN, number: 7, name: "Gumball", series: "El Increíble Mundo de Gumball", rarity: "comun", description: "Un gato azul con talento para meterse en problemas.", image: null },
  { id: "cn-darwin", collectionId: CN, number: 8, name: "Darwin", series: "El Increíble Mundo de Gumball", rarity: "comun", description: "El pez dorado que se convirtió en hermano.", image: null },
  { id: "cn-anais", collectionId: CN, number: 9, name: "Anaís", series: "El Increíble Mundo de Gumball", rarity: "comun", description: "La genio de cuatro años de la familia Watterson.", image: null },
  { id: "cn-richard", collectionId: CN, number: 10, name: "Richard", series: "El Increíble Mundo de Gumball", rarity: "rara", description: "El papá Watterson: experto en siestas y bocadillos.", image: null },

  // ── Las Chicas Superpoderosas ────────────────────────────────────
  { id: "cn-bombon", collectionId: CN, number: 11, name: "Bombón", series: "Las Chicas Superpoderosas", rarity: "comun", description: "La líder inteligente y decidida del trío.", image: null },
  { id: "cn-burbuja", collectionId: CN, number: 12, name: "Burbuja", series: "Las Chicas Superpoderosas", rarity: "comun", description: "La más dulce… y sorprendentemente feroz.", image: null },
  { id: "cn-bellota", collectionId: CN, number: 13, name: "Bellota", series: "Las Chicas Superpoderosas", rarity: "comun", description: "La luchadora más ruda de Saltadilla.", image: null },
  { id: "cn-mojo-jojo", collectionId: CN, number: 14, name: "Mojo Jojo", series: "Las Chicas Superpoderosas", rarity: "rara", description: "El villano con el plan (y el casco) más grande.", image: null },
  { id: "cn-el", collectionId: CN, number: 15, name: "Él", series: "Las Chicas Superpoderosas", rarity: "comun", description: "El enemigo más extraño y misterioso de las chicas.", image: null },

  // ── Escandalosos ─────────────────────────────────────────────────
  { id: "cn-polar", collectionId: CN, number: 16, name: "Polar", series: "Escandalosos", rarity: "comun", description: "El hermano silencioso con habilidades secretas.", image: null },
  { id: "cn-panda", collectionId: CN, number: 17, name: "Panda", series: "Escandalosos", rarity: "comun", description: "El hermano sensible, artista y fan del celular.", image: null },
  { id: "cn-pardo", collectionId: CN, number: 18, name: "Pardo", series: "Escandalosos", rarity: "comun", description: "El hermano mayor, entusiasta y sociable.", image: null },

  // ── Ben 10 ───────────────────────────────────────────────────────
  { id: "cn-ben-10", collectionId: CN, number: 19, name: "Ben 10", series: "Ben 10", rarity: "comun", description: "El niño con el Omnitrix y diez formas alienígenas.", image: null },
  { id: "cn-cuatro-brazos", collectionId: CN, number: 20, name: "Cuatro Brazos", series: "Ben 10", rarity: "rara", description: "Fuerza cuádruple para los problemas más grandes.", image: null },
  { id: "cn-fuego", collectionId: CN, number: 21, name: "Fuego", series: "Ben 10", rarity: "rara", description: "El alienígena ardiente del Omnitrix.", image: null },

  // ── El Laboratorio de Dexter ─────────────────────────────────────
  { id: "cn-dexter", collectionId: CN, number: 22, name: "Dexter", series: "El Laboratorio de Dexter", rarity: "rara", description: "Niño genio, dueño del laboratorio secreto.", image: null },
  { id: "cn-dee-dee", collectionId: CN, number: 23, name: "Dee Dee", series: "El Laboratorio de Dexter", rarity: "rara", description: "¿Y este botón para qué sirve?", image: null },

  // ── Steven Universe ──────────────────────────────────────────────
  { id: "cn-steven", collectionId: CN, number: 24, name: "Steven", series: "Steven Universe", rarity: "comun", description: "Mitad humano, mitad gema, todo corazón.", image: null },
  { id: "cn-garnet", collectionId: CN, number: 25, name: "Garnet", series: "Steven Universe", rarity: "epica", description: "La líder de las Gemas de Cristal. Hecha de amor.", image: null },
];
