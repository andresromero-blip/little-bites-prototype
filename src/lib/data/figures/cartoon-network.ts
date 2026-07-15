import type { Figure } from "@/lib/types";

/**
 * Colección real de referencia: Cartoon Network (25 figuras).
 * Descripción estándar (~4 líneas) + 5 datos "¿Sabías qué?" por figura,
 * que se desbloquean al obtenerla (recompensa intrínseca).
 */

const CN = "cartoon-network";

export const cartoonNetworkFigures: Figure[] = [
  // ── Hora de Aventura (2010) ───────────────────────────────────────
  {
    id: "cn-finn", collectionId: CN, number: 1, name: "Finn", series: "Hora de Aventura", seriesYear: "2010", rarity: "comun",
    description: "El último humano conocido de la Tierra de Ooo y el héroe más valiente del reino. Junto a su mejor amigo Jake dedica sus días a rescatar princesas, explorar mazmorras y proteger a los indefensos. Su espada y su gorro blanco son tan legendarios como su corazón.",
    facts: [
      "Su grito de batalla favorito es «¡Algebraico!».",
      "Debajo del gorro blanco esconde una melena rubia enorme.",
      "Su nombre completo de héroe es Finn el Humano.",
      "Toca la flauta y compone canciones con autotune.",
      "Ha empuñado más de cinco espadas legendarias distintas.",
    ],
    image: null,
  },
  {
    id: "cn-jake-translucido", collectionId: CN, number: 2, name: "Jake (translúcido)", series: "Hora de Aventura", seriesYear: "2010", rarity: "especial",
    description: "El mejor amigo y hermano adoptivo de Finn: un perro mágico capaz de estirarse hasta el infinito. Sabio a su manera, relajado hasta el exceso y fiel sin condiciones. Esta edición translúcida celebra al compañero de aventuras más querido de Ooo con un acabado único.",
    facts: [
      "Sus poderes mágicos le permiten tomar casi cualquier forma.",
      "Esta versión translúcida es la única figura especial de toda la colección.",
      "Es papá orgulloso de cinco hijos con Lady Arcoíris.",
      "Presume cocinar el mejor sándwich de todos los tiempos.",
      "Su instrumento favorito es la viola.",
    ],
    image: null,
  },
  {
    id: "cn-princesa-chicle", collectionId: CN, number: 3, name: "Princesa Chicle", series: "Hora de Aventura", seriesYear: "2010", rarity: "comun",
    description: "La brillante y milenaria gobernante del Dulce Reino, científica de vocación y estratega por necesidad. Creó a la mayoría de sus súbditos en su propio laboratorio y protege su reino con inteligencia implacable. Bajo su dulzura rosa habita una de las mentes más poderosas de Ooo.",
    facts: [
      "Gobierna el Dulce Reino desde hace más de 800 años.",
      "Creó a casi todos sus súbditos en su laboratorio.",
      "Su mayordomo y súbdito más fiel es Mentita.",
      "Construyó guardianes gigantes que protegen las murallas del reino.",
      "Su ciencia favorita es la química… de caramelo.",
    ],
    image: null,
  },
  {
    id: "cn-princesa-grumosa", collectionId: CN, number: 4, name: "Princesa Grumosa", series: "Hora de Aventura", seriesYear: "2010", rarity: "comun",
    description: "La princesa más dramática del multiverso viene del Espacio Grumoso, un reino flotante al que solo se llega por un portal secreto. Sarcástica, ruidosa y absolutamente inolvidable, abandona la realeza cada vez que puede para vivir aventuras — o siestas — con Finn y Jake.",
    facts: [
      "Al Espacio Grumoso solo se entra por un portal secreto.",
      "Sus «grumos» son símbolo de realeza en su dimensión.",
      "Vivió «independizada» en el bosque… dentro de una olla.",
      "Su manjar favorito son los frijoles enlatados.",
      "Sus papás gobiernan juntos el Espacio Grumoso.",
    ],
    image: null,
  },
  {
    id: "cn-rey-helado", collectionId: CN, number: 5, name: "Rey Helado", series: "Hora de Aventura", seriesYear: "2010", rarity: "rara",
    description: "El excéntrico monarca del Reino Helado, obsesionado con secuestrar princesas y encontrar compañía. Su corona mágica le dio poderes de hielo a cambio de su memoria y su cordura. Detrás del villano torpe se esconde Simon, una de las historias más humanas de Ooo.",
    facts: [
      "Su corona mágica es la fuente de sus poderes… y de su locura.",
      "Antes de ser Rey Helado era un anticuario llamado Simon.",
      "Su mejor amigo es Gunter, un pingüino con muchos secretos.",
      "Escribe fan fiction sobre Fionna y Cake.",
      "Lejos de la corona, su memoria empieza a regresar.",
    ],
    image: null,
  },
  {
    id: "cn-bmo", collectionId: CN, number: 6, name: "BMO", series: "Hora de Aventura", seriesYear: "2010", rarity: "rara",
    description: "La pequeña consola viviente que comparte casa con Finn y Jake. Es videojuego, cámara, reproductor de música, despertador y confidente, todo en un mismo cuerpecito turquesa. Cuando nadie lo ve, BMO inventa mundos imaginarios donde es el héroe de su propia película.",
    facts: [
      "Es consola, cámara, despertador y mejor amigo, todo a la vez.",
      "Habla consigo mismo cuando cree que nadie lo está viendo.",
      "Fue creado por Moseph «Moe» Mastro Giovanni.",
      "Tiene un «hermano» perdido llamado AMO.",
      "Se autoproclama protector de la casa del árbol.",
    ],
    image: null,
  },

  // ── El Increíble Mundo de Gumball (2011) ─────────────────────────
  {
    id: "cn-gumball", collectionId: CN, number: 7, name: "Gumball", series: "El Increíble Mundo de Gumball", seriesYear: "2011", rarity: "comun",
    description: "Un gato azul de doce años con un talento sobrenatural para convertir cualquier situación simple en un desastre épico. Vive en Elmore con su peculiar familia, en una ciudad donde lo imposible es rutina diaria. Ingenioso, sarcástico y entrañable: el caos nunca tuvo tanta gracia.",
    facts: [
      "Su nombre completo es Gumball Tristopher Watterson.",
      "En Elmore hasta los objetos cotidianos cobran vida.",
      "Su primer amor y novia es Penny Fitzgerald.",
      "Comparte cuarto y litera con su hermano Darwin.",
      "Odia perder, pero pierde con un estilo inigualable.",
    ],
    image: null,
  },
  {
    id: "cn-darwin", collectionId: CN, number: 8, name: "Darwin", series: "El Increíble Mundo de Gumball", seriesYear: "2011", rarity: "comun",
    description: "Era el pez mascota de la familia Watterson hasta que le crecieron piernas y una conciencia. Hoy es el hermano inseparable de Gumball, la brújula moral del dúo y el alma más pura de todo Elmore. Canta como un ángel y llora con exactamente la misma facilidad.",
    facts: [
      "Era el pez mascota de Gumball hasta que le crecieron piernas.",
      "Casi nunca se quita sus tenis… aunque no usa pantalones.",
      "Duerme en una pecera junto a la litera de Gumball.",
      "Sus pulmones aparecieron por puro poder de la amistad.",
      "Es el más popular de la escuela sin proponérselo.",
    ],
    image: null,
  },
  {
    id: "cn-anais", collectionId: CN, number: 9, name: "Anaís", series: "El Increíble Mundo de Gumball", seriesYear: "2011", rarity: "comun",
    description: "La menor de los Watterson y, con diferencia, la más inteligente. Con solo cuatro años domina la ciencia, la lógica y el delicado arte de sobrevivir a sus hermanos. Su tierna apariencia de conejita rosa esconde al genio estratégico que resuelve lo que Gumball y Darwin arruinan.",
    facts: [
      "Con solo 4 años, es la más inteligente de toda la familia.",
      "Su juguete favorito es un burro de peluche llamado Daisy.",
      "Es fan número uno del programa «Daisy la Burra».",
      "Salta grados escolares como quien salta la cuerda.",
      "Su paciencia con sus hermanos tiene límites medibles científicamente.",
    ],
    image: null,
  },
  {
    id: "cn-richard", collectionId: CN, number: 10, name: "Richard", series: "El Increíble Mundo de Gumball", seriesYear: "2011", rarity: "rara",
    description: "El padre de la familia Watterson: un conejo rosa gigante, experto mundial en siestas, botanas y amor incondicional. No ha trabajado un solo día de su vida — el universo literalmente colapsa cuando lo intenta — pero mantiene unida a su familia con puro corazón.",
    facts: [
      "Es un conejo rosa gigante con un corazón aún más grande.",
      "Ostenta el récord familiar de siestas en un solo día.",
      "El universo colapsó el día que consiguió empleo.",
      "Su platillo estrella: el sándwich de todo-lo-que-haya.",
      "Se casó con Nicole, el verdadero pilar de la familia.",
    ],
    image: null,
  },

  // ── Las Chicas Superpoderosas (1998) ─────────────────────────────
  {
    id: "cn-bombon", collectionId: CN, number: 11, name: "Bombón", series: "Las Chicas Superpoderosas", seriesYear: "1998", rarity: "comun",
    description: "La líder de las Chicas Superpoderosas y la estratega del trío. Nacida en el laboratorio del Profesor Utonio, combina superfuerza y vuelo con una mente analítica imparable. Su enorme moño rojo es el estandarte bajo el que Saltadilla duerme tranquila cada noche.",
    facts: [
      "Es la estratega del equipo: siempre tiene un plan.",
      "Su enorme moño rojo es su sello personal.",
      "Su superpoder exclusivo es el aliento de hielo.",
      "Es la alumna estrella del jardín de niños de la Srta. Keane.",
      "Nació de azúcar, flores y muchos colores… más la Sustancia X.",
    ],
    image: null,
  },
  {
    id: "cn-burbuja", collectionId: CN, number: 12, name: "Burbuja", series: "Las Chicas Superpoderosas", seriesYear: "1998", rarity: "comun",
    description: "La más dulce de las Chicas Superpoderosas, capaz de hablar con los animales y de derretir corazones con una sola sonrisa. Pero nadie debería confundir ternura con debilidad: cuando sus seres queridos están en peligro, Burbuja se convierte en la más feroz de las tres.",
    facts: [
      "Puede hablar con los animales… literalmente.",
      "Es la más tierna del trío, pero su furia es legendaria.",
      "Duerme abrazada a Octi, su pulpo de peluche.",
      "Su color característico es el azul cielo.",
      "Habla varios idiomas, incluido el español… y el ardilla.",
    ],
    image: null,
  },
  {
    id: "cn-bellota", collectionId: CN, number: 13, name: "Bellota", series: "Las Chicas Superpoderosas", seriesYear: "1998", rarity: "comun",
    description: "La luchadora del trío de Saltadilla. Directa, competitiva y alérgica a los rodeos, prefiere resolver los problemas a golpes y hacer las preguntas después. Su cabello negro y su actitud desafiante la distinguen; su lealtad absoluta a sus hermanas la define.",
    facts: [
      "Es la peleadora del trío: prefiere los puños a los planes.",
      "Su cabello negro la distingue de sus hermanas.",
      "Es la más rápida en el combate cuerpo a cuerpo.",
      "Su color característico es el verde, como su carácter.",
      "Detesta los vestidos, aunque pelee mejor que nadie con uno puesto.",
    ],
    image: null,
  },
  {
    id: "cn-mojo-jojo", collectionId: CN, number: 14, name: "Mojo Jojo", series: "Las Chicas Superpoderosas", seriesYear: "1998", rarity: "rara",
    description: "El archienemigo número uno de las Chicas Superpoderosas fue, irónicamente, el asistente de laboratorio del Profesor Utonio. Su cerebro hiperdesarrollado — protegido por su inconfundible casco — maquina planes de dominación mundial que fallan con precisión matemática.",
    facts: [
      "Fue el asistente de laboratorio del Profesor Utonio.",
      "Su casco cubre un cerebro súper desarrollado.",
      "Vive en un observatorio-volcán en medio del parque.",
      "Repite todo lo que dice, lo repite, para que quede claro.",
      "Su accidente con la Sustancia X dio origen a las chicas.",
    ],
    image: null,
  },
  {
    id: "cn-el", collectionId: CN, number: 15, name: "Él", series: "Las Chicas Superpoderosas", seriesYear: "1998", rarity: "comun",
    description: "El villano más extraño y perturbador de Saltadilla. No pelea con fuerza bruta sino con la mente: manipula sueños, emociones y realidades enteras. Su voz cambia de un susurro dulce a un rugido temible en un instante, y ni siquiera las chicas saben de dónde vino.",
    facts: [
      "Es considerado el villano más misterioso de Saltadilla.",
      "Su voz pasa de dulce a temible en un instante.",
      "Su hogar es una dimensión que desafía la física.",
      "Puede poseer juguetes, sueños y hasta ciudades enteras.",
      "Las chicas lo vencen con lo único que no entiende: el cariño.",
    ],
    image: null,
  },

  // ── Escandalosos (2015) ──────────────────────────────────────────
  {
    id: "cn-polar", collectionId: CN, number: 16, name: "Polar", series: "Escandalosos", seriesYear: "2015", rarity: "comun",
    description: "El menor de los tres osos y el más enigmático. Casi nunca habla, pero no le hace falta: domina las artes marciales, cocina como un chef profesional y resuelve en silencio los problemas que sus hermanos provocan a gritos. Sus cejas lo dicen absolutamente todo.",
    facts: [
      "Es el menor de los tres osos y el más callado.",
      "Domina artes marciales y cocina como un profesional.",
      "De cachorro sobrevivió solo en el Ártico.",
      "Cuida a Miki-chan, su muñeca de la infancia.",
      "Es el único capaz de asustar a los villanos sin decir palabra.",
    ],
    image: null,
  },
  {
    id: "cn-panda", collectionId: CN, number: 17, name: "Panda", series: "Escandalosos", seriesYear: "2015", rarity: "comun",
    description: "El hermano de en medio: sensible, artístico y dramáticamente enamoradizo. Su celular es una extensión de su cuerpo y las redes sociales son su hábitat natural. Vegetariano, alérgico al maní y dueño indiscutible del corazón más blando de los tres osos.",
    facts: [
      "Nunca suelta su celular: es el rey de las selfies.",
      "Es vegetariano y tiene alergia al maní.",
      "Es el artista oficial del trío: dibuja y anima.",
      "Sueña con encontrar el amor en una app de citas.",
      "Sin sus lentes de contacto no ve absolutamente nada.",
    ],
    image: null,
  },
  {
    id: "cn-pardo", collectionId: CN, number: 18, name: "Pardo", series: "Escandalosos", seriesYear: "2015", rarity: "comun",
    description: "El hermano mayor y líder autoproclamado de los tres osos. Entusiasta incorregible, sociable hasta la imprudencia y convencido de que la fama en internet está siempre a un solo video de distancia. Su optimismo mete a los tres en problemas — y también los saca.",
    facts: [
      "Es el mayor del trío y el más entusiasta.",
      "Su gran sueño: volverse famoso en internet.",
      "Duerme en la litera de arriba, por jerarquía de hermano mayor.",
      "Su comida favorita es todo lo que lleve queso.",
      "Conoció a sus hermanos cuando los tres eran cachorros perdidos.",
    ],
    image: null,
  },

  // ── Ben 10 (2005) ────────────────────────────────────────────────
  {
    id: "cn-ben-10", collectionId: CN, number: 19, name: "Ben 10", series: "Ben 10", seriesYear: "2005", rarity: "comun",
    description: "Ben Tennyson tenía diez años cuando un meteorito le trajo el Omnitrix, el reloj alienígena que se fusionó con su muñeca para siempre. Desde entonces puede transformarse en diez criaturas extraordinarias para enfrentar amenazas de toda la galaxia. Con gran poder… llegaron grandes travesuras.",
    facts: [
      "El Omnitrix le permite transformarse en 10 alienígenas.",
      "Lo encontró dentro de un meteorito cuando tenía 10 años.",
      "Su prima Gwen es su rival eterna y su mejor aliada.",
      "Pasa los veranos en la casa rodante del abuelo Max.",
      "El Omnitrix se bloquea siempre en el peor momento.",
    ],
    image: null,
  },
  {
    id: "cn-cuatro-brazos", collectionId: CN, number: 20, name: "Cuatro Brazos", series: "Ben 10", seriesYear: "2005", rarity: "rara",
    description: "La transformación favorita de Ben para los problemas que se resuelven a puño limpio. Cuatro metros de músculo alienígena, cuatro brazos capaces de levantar camiones enteros y un rugido que hace temblar a cualquier villano. Sutileza: cero. Efectividad: absoluta.",
    facts: [
      "Mide casi 4 metros y levanta camiones sin esfuerzo.",
      "Es la transformación favorita de Ben para pelear.",
      "Pertenece a la especie tetramand del planeta Khoros.",
      "Puede saltar cuadras enteras de un solo impulso.",
      "Sus cuatro ojos detectan a los rivales antes de que ataquen.",
    ],
    image: null,
  },
  {
    id: "cn-fuego", collectionId: CN, number: 21, name: "Fuego", series: "Ben 10", seriesYear: "2005", rarity: "rara",
    description: "Un alienígena del planeta Pyros cuyo cuerpo arde a más de mil grados. Lanza bolas de fuego, absorbe el calor de cualquier fuente y vuela impulsado por sus propias llamas. Fue la primera transformación que Ben activó — y casi incendia el bosque al estrenarla.",
    facts: [
      "Su cuerpo arde a más de mil grados.",
      "Puede absorber el calor de cualquier fuente.",
      "Fue la primera transformación que Ben activó.",
      "Puede fundir el metal con solo tocarlo.",
      "Su punto débil es el agua… y los extintores.",
    ],
    image: null,
  },

  // ── El Laboratorio de Dexter (1996) ──────────────────────────────
  {
    id: "cn-dexter", collectionId: CN, number: 22, name: "Dexter", series: "El Laboratorio de Dexter", seriesYear: "1996", rarity: "rara",
    description: "Niño genio, científico autoproclamado y dueño del laboratorio secreto más avanzado del planeta, convenientemente oculto detrás del librero de su habitación. Ha conquistado la ciencia, la robótica y los viajes en el tiempo; su único experimento fallido es mantener fuera a Dee Dee.",
    facts: [
      "Su laboratorio secreto se esconde detrás del librero.",
      "Habla con un acento que nadie sabe de dónde viene.",
      "Su computadora central lo conoce mejor que su familia.",
      "Su rival científico eterno es su vecino Mandark.",
      "Sus papás jamás han descubierto el laboratorio.",
    ],
    image: null,
  },
  {
    id: "cn-dee-dee", collectionId: CN, number: 23, name: "Dee Dee", series: "El Laboratorio de Dexter", seriesYear: "1996", rarity: "rara",
    description: "La hermana mayor de Dexter y la fuerza más destructiva conocida por la ciencia moderna. Bailarina eterna, entra al laboratorio secreto sin esfuerzo — nadie sabe cómo lo hace — y su curiosidad cabe en una sola frase inmortal. Es, sencillamente, el caos con tutú rosa.",
    facts: [
      "Siempre encuentra la forma de entrar al laboratorio.",
      "Su frase inmortal: «¿Y este botón para qué sirve?».",
      "Estudia ballet y practica en el peor lugar posible: el laboratorio.",
      "Sus mejores amigas son Lee Lee y Mee Mee.",
      "A veces, solo a veces, salva a Dexter de sus propios inventos.",
    ],
    image: null,
  },

  // ── Steven Universe (2013) ───────────────────────────────────────
  {
    id: "cn-steven", collectionId: CN, number: 24, name: "Steven", series: "Steven Universe", seriesYear: "2013", rarity: "comun",
    description: "Mitad humano, mitad Gema de Cristal: Steven heredó la gema de su madre, Rosa Cuarzo, y con ella el destino de proteger la Tierra. Su verdadero superpoder no es el escudo ni la curación, sino un corazón capaz de encontrar lo bueno incluso en sus enemigos.",
    facts: [
      "Es mitad humano y mitad Gema de Cristal.",
      "Heredó su gema de su madre, Rosa Cuarzo.",
      "Su papá, Greg, fue estrella de rock con un solo éxito.",
      "Vive en Ciudad Playa con las Gemas de Cristal.",
      "Su arma es un escudo rosa heredado de su madre.",
    ],
    image: null,
  },
  {
    id: "cn-garnet", collectionId: CN, number: 25, name: "Garnet", series: "Steven Universe", seriesYear: "2013", rarity: "epica",
    description: "La líder de las Gemas de Cristal es, literalmente, amor hecho materia: la fusión permanente de Rubí y Zafiro. Serena, imponente y dueña de la visión futura, guía a su equipo con pocas palabras y una certeza absoluta. Sus lentes esconden tres ojos y mil respuestas.",
    facts: [
      "Es la fusión permanente de dos gemas: Rubí y Zafiro.",
      "Su visión futura le permite explorar futuros posibles.",
      "Casi nunca se quita los lentes: esconden su tercer ojo.",
      "Es la gema más fuerte físicamente del equipo.",
      "Su existencia misma es una declaración: es amor viviente.",
    ],
    image: null,
  },
];
