import type { Metadata } from "next";
import { RegisterFlow } from "@/components/register/register-flow";

export const metadata: Metadata = { title: "Registrar figura" };

/** Registrar figura — la acción primaria del Completion Engine. */
export default function RegistrarPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-6 pb-24 lg:px-8 lg:py-10">
      <h1 className="text-2xl font-black">Registrar figura</h1>
      <p className="mt-1 text-sm font-semibold text-muted">
        Suma una figura a tu colección y mira tu avance crecer.
      </p>

      <div className="mt-6">
        <RegisterFlow />
      </div>
    </main>
  );
}
