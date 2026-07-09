import { Navbar } from "@/components/layout/navbar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { FocusHero } from "@/components/home/focus-hero";
import { ActiveCollections } from "@/components/home/active-collections";
import { UpcomingCard } from "@/components/home/upcoming-card";

/**
 * Home — 3 bloques, una sola acción primaria:
 * 1. FOCO: destacada + tu progreso + "Registrar figura".
 * 2. Tus colecciones activas.
 * 3. Próximamente (teaser compacto).
 * Recompensas → /recompensas · Históricas → /colecciones · Progreso global → /perfil
 */
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl space-y-8 px-4 py-6 pb-24 lg:px-8 lg:py-8 lg:pb-10">
        <FocusHero />
        <ActiveCollections />
        <UpcomingCard />
      </main>

      <BottomNav />
    </>
  );
}
