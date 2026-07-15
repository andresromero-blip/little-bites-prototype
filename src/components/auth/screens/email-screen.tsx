"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";

function Field({
  label,
  type = "text",
  value,
  onChange,
  autoFocus,
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  autoFocus?: boolean;
}) {
  return (
    <label className="grid items-center gap-2 sm:grid-cols-[140px_1fr] sm:gap-6">
      <span className="text-[15px] font-bold text-white">
        {label}
        <span className="text-amber-300">*</span>
      </span>
      <input
        type={type}
        required
        autoFocus={autoFocus}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg bg-white px-4 py-3 text-[15px] font-semibold text-[#17123a] outline-none focus:ring-2 focus:ring-white/60"
      />
    </label>
  );
}

/** Registro con correo — branding Little Bites (simulación de prototipo). */
export function EmailScreen({
  onBack,
  onDone,
}: {
  onBack: () => void;
  onDone: (nombre: string) => void;
}) {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="hero-rays fixed inset-0 z-50 overflow-y-auto text-white">
      <button
        type="button"
        onClick={onBack}
        aria-label="Volver"
        className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-bold text-white/85 hover:bg-white/10"
      >
        <ArrowLeft className="size-4" aria-hidden /> Volver
      </button>

      <div className="mx-auto flex min-h-full max-w-xl flex-col justify-center px-6 py-16">
        {/* Wordmark */}
        <p className="text-center leading-none">
          <span className="inline-block -rotate-3 text-4xl font-black italic tracking-tight">
            Little Bites<span className="align-super text-sm">®</span>
          </span>
        </p>

        <h1 className="mt-10 text-center text-3xl font-black">
          Inicia completando tu información
        </h1>
        <p className="mt-3 text-center text-[15px] font-semibold text-white/85">
          Ingresa tus datos y prepárate para completar tus colecciones
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onDone(nombre);
          }}
          className="mt-10 space-y-4"
        >
          <Field label="Nombre" value={nombre} onChange={setNombre} autoFocus />
          <Field label="Apellidos" value={apellidos} onChange={setApellidos} />
          <Field label="Email" type="email" value={email} onChange={setEmail} />

          <div className="flex justify-center pt-4 sm:pl-[164px] sm:justify-start">
            <button
              type="submit"
              className="rounded-full bg-amber-300 px-10 py-3.5 text-[16px] font-extrabold text-[#17123a] transition-transform hover:scale-[1.02]"
            >
              Ingresar
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-[12px] font-semibold text-white/70">
          Al usar esta plataforma, usted acepta los{" "}
          <span className="cursor-pointer underline">Términos y Condiciones</span> y la{" "}
          <span className="cursor-pointer underline">Política de Privacidad</span>.
        </p>
        <p className="mt-3 text-center text-[11px] font-semibold text-white/50">
          Simulación de prototipo — tus datos no se envían a ningún servidor.
        </p>
      </div>
    </div>
  );
}
