import { FocusHero } from "@/components/home/focus-hero";
import { ActiveCollections } from "@/components/home/active-collections";

/**
 * Home — 2 bloques, una sola acción primaria:
 * 1. FOCO: destacada + tu progreso + "Registrar figura".
 * 2. Colecciones con filtro rápido (Activas · Próximamente · Históricas).
 * Navbar, Footer y BottomNav viven en el layout raíz.
 */
export default function Home() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-6 pb-24 lg:px-8 lg:py-8 lg:pb-12">
      <FocusHero />
      <ActiveCollections />
      {/* /colecciones se elimina de la nav en MVP: el Home es el navegador
          de colecciones. El índice dedicado se reactiva en Expansión. */}
    </main>
  );
}
