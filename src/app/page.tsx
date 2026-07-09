import { Star } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { SectionHeader } from "@/components/ui/section-header";
import { FeaturedHero } from "@/components/home/featured-hero";
import { ProgressPanel } from "@/components/home/progress-panel";
import { ActiveCollections } from "@/components/home/active-collections";
import { UpcomingCard } from "@/components/home/upcoming-card";
import { RecentRewards } from "@/components/home/recent-rewards";
import { HistoricalCollections } from "@/components/home/historical-collections";
import { CtaBanner } from "@/components/home/cta-banner";
import { getFeaturedCollection } from "@/lib/data";

export default function Home() {
  const featured = getFeaturedCollection();

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl space-y-8 px-4 py-6 pb-24 lg:px-8 lg:py-8 lg:pb-10">
        {/* Fila 1 — Hero destacado + Mi progreso */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-3 lg:col-span-2">
            {/* Encabezado "Destacada" — solo móvil */}
            <div className="lg:hidden">
              <SectionHeader icon={Star} title="Destacada" actionLabel="Ver todas" actionHref="/colecciones" />
            </div>
            {featured && <FeaturedHero collection={featured} />}
          </div>
          <ProgressPanel />
        </div>

        {/* Fila 2 — Colecciones activas */}
        <ActiveCollections />

        {/* Fila 3 — Próximamente · Recompensas · Históricas */}
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
          <UpcomingCard />
          <RecentRewards />
          <HistoricalCollections />
        </div>

        {/* Fila 4 — CTA */}
        <CtaBanner />
      </main>

      <BottomNav />
    </>
  );
}
