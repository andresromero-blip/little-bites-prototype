"use client";

import { RotateCcw } from "lucide-react";
import { useUserCollection } from "@/lib/store/user-collection";

/** Herramienta de prototipo: restaura el estado demo (18/25 en CN). */
export function DemoReset() {
  const resetDemo = useUserCollection((s) => s.resetDemo);

  return (
    <section
      aria-label="Herramientas de prototipo"
      className="rounded-card border border-dashed border-line p-4"
    >
      <p className="text-[11px] font-extrabold tracking-widest text-muted uppercase">
        Prototipo
      </p>
      <p className="mt-1 text-[13px] font-semibold text-muted">
        Tu progreso vive en este navegador. Puedes volver al estado inicial de demostración.
      </p>
      <button
        type="button"
        onClick={() => {
          if (window.confirm("¿Restaurar el estado demo? Se perderán los cambios de esta sesión.")) {
            resetDemo();
          }
        }}
        className="mt-3 flex items-center gap-2 rounded-xl border border-border-soft bg-surface px-4 py-2.5 text-sm font-extrabold text-muted transition-colors hover:text-foreground"
      >
        <RotateCcw className="size-4" aria-hidden />
        Restaurar estado demo
      </button>
    </section>
  );
}
