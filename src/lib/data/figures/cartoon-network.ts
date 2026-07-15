import type { Figure } from "@/lib/types";

/**
 * Colección real de referencia: Cartoon Network (25 figuras).
 * Los datos curiosos se muestran solo cuando el usuario obtiene la figura
 * (recompensa intrínseca del Completion Engine).
 */

const CN = "cartoon-network";

export const cartoonNetworkFigures: Figure[] = [
  // ── Hora de Aventura (2010) ───────────────────────────────────────
  { id: "cn-finn", collectionId: CN, number: 1, name: "Finn", series: "Hora de Aventura", seriesYear: "2010", rarity: "comun", description: "El humano más valiente de la Tierra de Ooo.", facts: ["Su grito de batalla favorito es «¡Algebraico!».", "Debajo del gorro blanco esconde una melena rubia enorme."], image: null },
  { id: "cn-jake-translucido", collectionId: CN, number: 2, name: "Jake (translúcido)", series: "Hora de Aventura", seriesYear: "2010", rarity: "especial", description: "El mejor amigo de Finn. Siempre listo para la aventura.", facts: ["Sus poderes mágicos le permiten estirarse a casi cualquier forma.", "Esta versión translúcida es la única figura especial de toda la colección."], image: null },
  { id: "cn-princesa-chicle", collectionId: CN, number: 3, name: "Princesa Chicle", series: "Hora de Aventura", seriesYear: "2010", rarity: "comun", description: "La brillante gobernante del Dulce Reino.", facts: ["Gobierna el Dulce Reino desde hace más de 800 años.", "Es una científica brillante: creó a casi todos sus súbditos."], image: null },
  { id: "cn-princesa-grumosa", collectionId: CN, number: 4, name: "Princesa Grumosa", series: "Hora de Aventura", seriesYear: "2010", rarity: "comun", description: "La princesa más dramática del Espacio Grumoso.", facts: ["Viene del Espacio Grumoso, al que solo se entra por un portal secreto.", "Sus «grumos» son símbolo de realeza en su dimensión."], image: null },
  { id: "cn-rey-helado", collectionId: CN, number: 5, name: "Rey Helado", series: "Hora de Aventura", seriesYear: "2010", rarity: "rara", description: "El excéntrico monarca del Reino Helado.", facts: ["Su corona mágica es la fuente de sus poderes… y de su locura.", "Antes de ser Rey Helado era un anticuario llamado Simon."], image: null },
  { id: "cn-bmo", collectionId: CN, number: 6, name: "BMO", series: "Hora de Aventura", seriesYear: "2010", rarity: "rara", description: "La consola de videojuegos más adorable de Ooo.", facts: ["Es consola, cámara, despertador y mejor amigo, todo a la vez.", "Habla consigo mismo cuando cree que nadie lo está viendo."], image: null },

  // ── El Increíble Mundo de Gumball (2011) ─────────────────────────
  { id: "cn-gumball", collectionId: CN, number: 7, name: "Gumball", series: "El Increíble Mundo de Gumball", seriesYear: "2011", rarity: "comun", description: "Un gato azul con talento para meterse en problemas.", facts: ["Su nombre completo es Gumball Tristopher Watterson.", "En su ciudad, Elmore, hasta los objetos cobran vida."], image: null },
  { id: "cn-darwin", collectionId: CN, number: 8, name: "Darwin", series: "El Increíble Mundo de Gumball", seriesYear: "2011", rarity: "comun", description: "El pez dorado que se convirtió en hermano.", facts: ["Era el pez mascota de Gumball hasta que le crecieron piernas.", "Casi nunca se quita sus tenis… aunque no usa pantalones."], image: null },
  { id: "cn-anais", collectionId: CN, number: 9, name: "Anaís", series: "El Increíble Mundo de Gumball", seriesYear: "2011", rarity: "comun", description: "La genio de cuatro años de la familia Watterson.", facts: ["Con solo 4 años, es la más inteligente de toda la familia.", "Su juguete favorito es un burro de peluche llamado Daisy."], image: null },
  { id: "cn-richard", collectionId: CN, number: 10, name: "Richard", series: "El Increíble Mundo de Gumball", seriesYear: "2011", rarity: "rara", description: "El papá Watterson: experto en siestas y bocadillos.", facts: ["Es un conejo rosa gigante con un corazón aún más grande.", "Ostenta el récord familiar de siestas en un solo día."], image: null },

  // ── Las Chicas Superpoderosas (1998) ─────────────────────────────
  { id: "cn-bombon", collectionId: CN, number: 11, name: "Bombón", series: "Las Chicas Superpoderosas", seriesYear: "1998", rarity: "comun", description: "La líder inteligente y decidida del trío.", facts: ["Es la estratega del equipo: siempre tiene un plan.", "Su enorme moño rojo es su sello personal."], image: null },
  { id: "cn-burbuja", collectionId: CN, number: 12, name: "Burbuja", series: "Las Chicas Superpoderosas", seriesYear: "1998", rarity: "comun", description: "La más dulce… y sorprendentemente feroz.", facts: ["Puede hablar con los animales… literalmente.", "Es la más tierna del trío, pero su furia es legendaria."], image: null },
  { id: "cn-bellota", collectionId: CN, number: 13, name: "Bellota", series: "Las Chicas Superpoderosas", seriesYear: "1998", rarity: "comun", description: "La luchadora más ruda de Saltadilla.", facts: ["Es la peleadora del trío: prefiere los puños a los planes.", "Su cabello negro la distingue de sus hermanas."], image: null },
  { id: "cn-mojo-jojo", collectionId: CN, number: 14, name: "Mojo Jojo", series: "Las Chicas Superpoderosas", seriesYear: "1998", rarity: "rara", description: "El villano con el plan (y el casco) más grande.", facts: ["Fue el asistente de laboratorio del Profesor Utonio.", "Su casco cubre un cerebro súper desarrollado."], image: null },
  { id: "cn-el", collectionId: CN, number: 15, name: "Él", series: "Las Chicas Superpoderosas", seriesYear: "1998", rarity: "comun", description: "El enemigo más extraño y misterioso de las chicas.", facts: ["Es considerado el villano más misterioso de Saltadilla.", "Su voz pasa de dulce a temible en un instante."], image: null },

  // ── Escandalosos (2015) ──────────────────────────────────────────
  { id: "cn-polar", collectionId: CN, number: 16, name: "Polar", series: "Escandalosos", seriesYear: "2015", rarity: "comun", description: "El hermano silencioso con habilidades secretas.", facts: ["Es el menor de los tres osos y el más callado.", "Domina artes marciales y cocina como un profesional."], image: null },
  { id: "cn-panda", collectionId: CN, number: 17, name: "Panda", series: "Escandalosos", seriesYear: "2015", rarity: "comun", description: "El hermano sensible, artista y fan del celular.", facts: ["Nunca suelta su celular: es el rey de las selfies.", "Es vegetariano y tiene alergia al maní."], image: null },
  { id: "cn-pardo", collectionId: CN, number: 18, name: "Pardo", series: "Escandalosos", seriesYear: "2015", rarity: "comun", description: "El hermano mayor, entusiasta y sociable.", facts: ["Es el mayor del trío y el más entusiasta.", "Su gran sueño: volverse famoso en internet."], image: null },

  // ── Ben 10 (2005) ────────────────────────────────────────────────
  { id: "cn-ben-10", collectionId: CN, number: 19, name: "Ben 10", series: "Ben 10", seriesYear: "2005", rarity: "comun", description: "El niño con el Omnitrix y diez formas alienígenas.", facts: ["El Omnitrix le permite transformarse en 10 alienígenas.", "Lo encontró dentro de un meteorito cuando tenía 10 años."], image: null },
  { id: "cn-cuatro-brazos", collectionId: CN, number: 20, name: "Cuatro Brazos", series: "Ben 10", seriesYear: "2005", rarity: "rara", description: "Fuerza cuádruple para los problemas más grandes.", facts: ["Mide casi 4 metros y levanta camiones sin esfuerzo.", "Es la transformación favorita de Ben para pelear."], image: null },
  { id: "cn-fuego", collectionId: CN, number: 21, name: "Fuego", series: "Ben 10", seriesYear: "2005", rarity: "rara", description: "El alienígena ardiente del Omnitrix.", facts: ["Su cuerpo arde a más de mil grados.", "Puede absorber el calor de cualquier fuente."], image: null },

  // ── El Laboratorio de Dexter (1996) ──────────────────────────────
  { id: "cn-dexter", collectionId: CN, number: 22, name: "Dexter", series: "El Laboratorio de Dexter", seriesYear: "1996", rarity: "rara", description: "Niño genio, dueño del laboratorio secreto.", facts: ["Su laboratorio secreto se esconde detrás del librero.", "Habla con un acento que nadie sabe de dónde viene."], image: null },
  { id: "cn-dee-dee", collectionId: CN, number: 23, name: "Dee Dee", series: "El Laboratorio de Dexter", seriesYear: "1996", rarity: "rara", description: "¿Y este botón para qué sirve?", facts: ["Siempre encuentra la forma de entrar al laboratorio.", "Su frase inmortal: «¿Y este botón para qué sirve?»."], image: null },

  // ── Steven Universe (2013) ───────────────────────────────────────
  { id: "cn-steven", collectionId: CN, number: 24, name: "Steven", series: "Steven Universe", seriesYear: "2013", rarity: "comun", description: "Mitad humano, mitad gema, todo corazón.", facts: ["Es mitad humano y mitad Gema de Cristal.", "Heredó su gema de su madre, Rosa Cuarzo."], image: null },
  { id: "cn-garnet", collectionId: CN, number: 25, name: "Garnet", series: "Steven Universe", seriesYear: "2013", rarity: "epica", description: "La líder de las Gemas de Cristal. Hecha de amor.", facts: ["Es la fusión permanente de dos gemas: Rubí y Zafiro.", "Su visión futura le permite explorar futuros posibles."], image: null },
];
