import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { BottomNav } from "@/components/layout/bottom-nav";
import { PredictiveSearch } from "@/components/search/predictive-search";

export const metadata: Metadata = { title: "Buscar" };

/** Búsqueda — página dedicada (punto de entrada móvil). */
export default function BuscarPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-2xl px-4 py-6 pb-24 lg:px-8 lg:py-10">
        <h1 className="text-xl font-black">Buscar</h1>
        <p className="mt-1 text-sm font-semibold text-muted">
          Encuentra una figura o colección y descubre al instante si ya la tienes.
        </p>

        <div className="mt-5">
          <PredictiveSearch variant="page" autoFocus />
        </div>
      </main>

      <BottomNav />
    </>
  );
}
