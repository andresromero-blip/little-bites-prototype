"use client";

import { ArrowLeft } from "lucide-react";

/** Pantalla "Log into Facebook" — simulación 1:1 (prototipo). */
export function FacebookScreen({
  onBack,
  onDone,
}: {
  onBack: () => void;
  onDone: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white font-[Helvetica,Arial,sans-serif] text-[#1c2b33]">
      <button
        type="button"
        onClick={onBack}
        aria-label="Volver"
        className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-[#0866FF] hover:bg-[#0866FF]/5"
      >
        <ArrowLeft className="size-4" aria-hidden /> Volver
      </button>

      <div className="mx-auto grid min-h-full max-w-5xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:gap-16">
        {/* Marca */}
        <div>
          <span className="flex size-14 items-center justify-center rounded-full bg-[#0866FF] text-4xl font-black text-white">
            f
          </span>
          <h1 className="mt-10 text-4xl leading-tight font-bold lg:text-5xl">
            Explora las cosas
            <br />
            que <span className="text-[#0866FF]">amas</span>.
          </h1>
        </div>

        {/* Formulario */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onDone();
          }}
          className="mx-auto w-full max-w-sm"
        >
          <h2 className="text-[17px] font-semibold">Inicia sesión en Facebook</h2>

          <input
            type="text"
            required
            autoFocus
            placeholder="Correo electrónico o número de celular"
            className="mt-4 w-full rounded-xl border border-[#dddfe2] px-4 py-3.5 text-[15px] outline-none placeholder:text-[#8a96a3] focus:border-[#0866FF]"
          />
          <input
            type="password"
            required
            placeholder="Contraseña"
            className="mt-3 w-full rounded-xl border border-[#dddfe2] px-4 py-3.5 text-[15px] outline-none placeholder:text-[#8a96a3] focus:border-[#0866FF]"
          />

          <button
            type="submit"
            className="mt-4 w-full rounded-full bg-[#0866FF] py-3 text-[16px] font-semibold text-white transition-colors hover:bg-[#0759d4]"
          >
            Iniciar sesión
          </button>

          <p className="mt-4 text-center">
            <span className="cursor-pointer text-[14px] font-medium text-[#1c2b33] hover:underline">
              ¿Olvidaste tu contraseña?
            </span>
          </p>

          <button
            type="button"
            className="mt-6 w-full rounded-full border border-[#0866FF] py-3 text-[15px] font-semibold text-[#0866FF] transition-colors hover:bg-[#0866FF]/5"
          >
            Crear cuenta nueva
          </button>

          <p className="mt-8 text-center text-[15px] font-semibold tracking-tight text-[#8a96a3]">
            ∞ Meta
          </p>
          <p className="mt-4 text-center text-[11px] text-[#8a96a3]">
            Simulación de prototipo — no se envían datos a Meta. Al continuar
            regresarás a littlebites.mx.
          </p>
        </form>
      </div>
    </div>
  );
}
