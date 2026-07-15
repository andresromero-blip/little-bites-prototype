"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { useUserCollection } from "@/lib/store/user-collection";

/**
 * Bienvenida guest-first (primera visita).
 * Soft login simulado: Google / Facebook / correo, o continuar como invitado.
 * Nunca es un muro: el valor del producto se prueba antes de pedir compromiso.
 */
export function WelcomeGate() {
  const hasHydrated = useUserCollection((s) => s.hasHydrated);
  const authMethod = useUserCollection((s) => s.authMethod);
  const signIn = useUserCollection((s) => s.signIn);
  const [emailMode, setEmailMode] = useState(false);
  const [email, setEmail] = useState("");

  if (!hasHydrated || authMethod !== null) return null;

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
            onClick={() => signIn("google")}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 text-[15px] font-extrabold text-[#17123a] transition-transform hover:scale-[1.01]"
          >
            <span className="text-base font-black text-[#4285F4]">G</span>
            Continuar con Google
          </button>
          <button
            type="button"
            onClick={() => signIn("facebook")}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#1877F2] px-5 py-3.5 text-[15px] font-extrabold text-white transition-transform hover:scale-[1.01]"
          >
            <span className="text-base font-black">f</span>
            Continuar con Facebook
          </button>

          {emailMode ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) signIn("email");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@correo.com"
                aria-label="Correo electrónico"
                className="min-w-0 flex-1 rounded-xl bg-white/15 px-4 py-3.5 text-[15px] font-semibold text-white outline-none backdrop-blur-sm placeholder:text-white/50 focus:bg-white/25"
              />
              <button
                type="submit"
                className="shrink-0 rounded-xl bg-white/20 px-4 py-3.5 text-[15px] font-extrabold transition-colors hover:bg-white/30"
              >
                Enviar enlace
              </button>
            </form>
          ) : (
            <button
              type="button"
              onClick={() => setEmailMode(true)}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-white/15 px-5 py-3.5 text-[15px] font-extrabold backdrop-blur-sm transition-colors hover:bg-white/25"
            >
              <Mail className="size-4" aria-hidden />
              Continuar con correo
            </button>
          )}
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
