import type { Metadata } from "next";
import { ProgressPanel } from "@/components/home/progress-panel";
import { ProfileHeader } from "@/components/profile/profile-header";
import { CollectionHistory } from "@/components/profile/collection-history";
import { AccountSettings } from "@/components/profile/account-settings";
import { DemoReset } from "@/components/profile/demo-reset";

export const metadata: Metadata = { title: "Perfil" };

/**
 * Perfil del coleccionista: identidad + progreso global (MVP) +
 * historial de colecciones (MVP) + cuenta/preferencias (soft login).
 */
export default function PerfilPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-6 pb-24 lg:px-8 lg:py-10">
      <ProfileHeader />

      <div className="mt-8 space-y-8">
        <ProgressPanel showDetailLink={false} />
        <CollectionHistory />
        <AccountSettings />
        <DemoReset />
      </div>
    </main>
  );
}
