import { Navbar } from "@/components/layout/navbar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { FocusHero } from "@/components/home/focus-hero";
import { ActiveCollections } from "@/components/home/active-collections";

/**
 * Home — 2 bloques, una sola acción primaria:
 * 1. FOCO: destacada + tu progreso + "Registrar figura".
 * 2. Colecciones con filtro rápido (Activas · Próximamente · Históricas).
 * Progreso global → /perfil · Recompensas: fase Expansión.
 */
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl space-y-8 px-4 py-6 pb-24 lg:px-8 lg:py-8 lg:pb-10">
        <FocusHero />
        <ActiveCollections />
      </main>

      <BottomNav />
    </>
  );
}
