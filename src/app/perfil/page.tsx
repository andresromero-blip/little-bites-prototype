import type { Metadata } from "next";
import { ProgressPanel } from "@/components/home/progress-panel";
import { CollectionHistory } from "@/components/profile/collection-history";
import { AccountSettings } from "@/components/profile/account-settings";
import { DemoReset } from "@/components/profile/demo-reset";
import { profile } from "@/lib/data/profile";

export const metadata: Metadata = { title: "Perfil" };

/**
 * Perfil del coleccionista: identidad + progreso global (MVP) +
 * historial de colecciones (MVP) + cuenta/preferencias (mock).
 */
export default function PerfilPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-6 pb-24 lg:px-8 lg:py-10">
      {/* Identidad */}
      <section aria-label="Identidad" className="flex flex-col items-center text-center">
        <span className="flex size-24 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-orange-600 text-4xl">
          🧑‍🚀
        </span>
        <h1 className="mt-4 text-2xl font-black">{profile.name}</h1>
        <p className="text-sm font-semibold text-muted">{profile.email}</p>
      </section>

      <div className="mt-8 space-y-8">
        <ProgressPanel showDetailLink={false} />
        <CollectionHistory />
        <AccountSettings />
        <DemoReset />
      </div>
    </main>
  );
}
