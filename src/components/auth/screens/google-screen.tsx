"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";

function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

/** Pantalla "Acceder con Google" — simulación 1:1 (prototipo). */
export function GoogleScreen({
  onBack,
  onDone,
}: {
  onBack: () => void;
  onDone: () => void;
}) {
  const [value, setValue] = useState("");

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#202124] font-[Roboto,Arial,sans-serif] text-[#e3e3e3]">
      <button
        type="button"
        onClick={onBack}
        aria-label="Volver"
        className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-[#a8c7fa] hover:bg-white/5"
      >
        <ArrowLeft className="size-4" aria-hidden /> Volver
      </button>

      <div className="mx-auto flex min-h-full max-w-4xl flex-col justify-center px-4 py-16">
        <div className="overflow-hidden rounded-[28px] bg-[#131314]">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-[#444746] px-8 py-5">
            <GoogleG className="size-6" />
            <span className="text-[15px] text-[#e3e3e3]">Acceder con Google</span>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onDone();
            }}
            className="grid gap-10 px-8 py-10 md:grid-cols-2 md:gap-16"
          >
            <div>
              <h1 className="text-[32px] leading-tight font-normal text-[#e3e3e3]">
                Accede a tu cuenta
              </h1>
              <p className="mt-4 text-[15px]">
                Ir a{" "}
                <span className="cursor-pointer font-medium text-[#a8c7fa] hover:underline">
                  littlebites.mx
                </span>
              </p>
            </div>

            <div className="flex flex-col">
              <label className="relative block">
                <span className="absolute -top-2 left-3 bg-[#131314] px-1 text-[12px] text-[#a8c7fa]">
                  Correo electrónico o teléfono
                </span>
                <input
                  type="text"
                  required
                  autoFocus
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  className="w-full rounded-[4px] border border-[#a8c7fa] bg-transparent px-4 py-3.5 text-[15px] text-[#e3e3e3] outline-none focus:border-2"
                />
              </label>
              <button
                type="button"
                className="mt-3 w-fit text-[14px] font-medium text-[#a8c7fa] hover:underline"
              >
                ¿Olvidaste el correo electrónico?
              </button>

              <p className="mt-10 text-[13px] leading-relaxed text-[#c4c7c5]">
                Antes de usar littlebites.mx, revisa su{" "}
                <span className="cursor-pointer font-medium text-[#a8c7fa]">
                  Política de Privacidad
                </span>{" "}
                y{" "}
                <span className="cursor-pointer font-medium text-[#a8c7fa]">
                  Condiciones del Servicio
                </span>
                .
              </p>

              <div className="mt-8 flex items-center justify-end gap-2">
                <button
                  type="button"
                  className="rounded-full px-4 py-2.5 text-[14px] font-medium text-[#a8c7fa] hover:bg-white/5"
                >
                  Crear cuenta
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-[#a8c7fa] px-6 py-2.5 text-[14px] font-medium text-[#062e6f] hover:brightness-105"
                >
                  Siguiente
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between px-2 text-[12px] text-[#c4c7c5]">
          <span>Español (Latinoamérica) ▾</span>
          <span className="flex gap-6">
            <span className="cursor-pointer hover:text-white">Ayuda</span>
            <span className="cursor-pointer hover:text-white">Privacidad</span>
            <span className="cursor-pointer hover:text-white">Condiciones</span>
          </span>
        </div>

        <p className="mt-6 text-center text-[11px] text-[#8e918f]">
          Simulación de prototipo — no se envían datos a Google.
        </p>
      </div>
    </div>
  );
}
