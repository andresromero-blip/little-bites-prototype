"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { GoogleScreen } from "@/components/auth/screens/google-screen";
import { FacebookScreen } from "@/components/auth/screens/facebook-screen";
import { EmailScreen } from "@/components/auth/screens/email-screen";
import { useUserCollection } from "@/lib/store/user-collection";

type Screen = "google" | "facebook" | "email";

/**
 * Soft login guest-first.
 * Primera visita: bienvenida → pantalla del proveedor (simulada 1:1) → dentro.
 * Re-oferta (Perfil): abre directamente la pantalla del proveedor elegido.
 */
export function WelcomeGate() {
  const hasHydrated = useUserCollection((s) => s.hasHydrated);
  const authMethod = useUserCollection((s) => s.authMethod);
  const authScreen = useUserCollection((s) => s.authScreen);
  const signIn = useUserCollection((s) => s.signIn);
  const openAuthScreen = useUserCollection((s) => s.openAuthScreen);
  const [step, setStep] = useState<"welcome" | Screen>("welcome");

  if (!hasHydrated) return null;

  const isFirstVisit = authMethod === null;
  const screen: Screen | null = isFirstVisit
    ? step === "welcome"
      ? null
      : step
    : authScreen;

  if (!isFirstVisit && !screen) return null;

  const back = () => (isFirstVisit ? setStep("welcome") : openAuthScreen(null));

  if (screen === "google")
    return <GoogleScreen onBack={back} onDone={() => signIn("google")} />;
  if (screen === "facebook")
    return <FacebookScreen onBack={back} onDone={() => signIn("facebook")} />;
  if (screen === "email")
    return <EmailScreen onBack={back} onDone={(nombre) => signIn("email", nombre)} />;

  return (
    <div className="hero-rays fixed inset-0 z-50 overflow-y-auto text-white">
      <div className="mx-auto flex min-h-full max-w-md flex-col justify-center px-6 py-10">
        <p className="leading-none">
          <span className="block -rotate-3 text-4xl font-black italic tracking-tight">
            Little
          </span>
          <span className="-mt-2 block -rotate-3 text-4xl font-black italic tracking-tight">
            Bites<span className="align-super text-sm">®</span>
          </span>
        </p>

        <h1 className="mt-8 text-3xl leading-tight font-black">
          Tu colección,
          <br />
          siempre contigo.
        </h1>
        <p className="mt-3 text-[15px] font-semibold text-white/85">
          Registra tus figuras, descubre cuáles te faltan y completa todas tus colecciones.
        </p>

        <div className="mt-8 space-y-3">
          <button
            type="button"
            onClick={() => setStep("google")}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 text-[15px] font-extrabold text-[#17123a] transition-transform hover:scale-[1.01]"
          >
            <span className="text-base font-black text-[#4285F4]">G</span>
            Continuar con Google
          </button>
          <button
            type="button"
            onClick={() => setStep("facebook")}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#1877F2] px-5 py-3.5 text-[15px] font-extrabold text-white transition-transform hover:scale-[1.01]"
          >
            <span className="text-base font-black">f</span>
            Continuar con Facebook
          </button>
          <button
            type="button"
            onClick={() => setStep("email")}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-white/15 px-5 py-3.5 text-[15px] font-extrabold backdrop-blur-sm transition-colors hover:bg-white/25"
          >
            <Mail className="size-4" aria-hidden />
            Continuar con correo
          </button>
        </div>

        <button
          type="button"
          onClick={() => signIn("guest")}
          className="mx-auto mt-6 text-sm font-bold text-white/75 underline-offset-4 hover:underline"
        >
          Continuar como invitado
        </button>

        <p className="mt-8 text-center text-[11px] font-semibold text-white/50">
          Tu progreso se guarda en este dispositivo. Crear una cuenta te permitirá
          conservarlo. Prototipo: el acceso es simulado.
        </p>
      </div>
    </div>
  );
}
