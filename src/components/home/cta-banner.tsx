import Link from "next/link";
import { Gift } from "lucide-react";

/** Banner CTA de cierre del Home. */
export function CtaBanner() {
  return (
    <section
      aria-label="Completa tus colecciones"
      className="flex flex-col items-start gap-4 rounded-card bg-surface p-5 shadow-sm sm:flex-row sm:items-center"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
        <Gift className="size-5 text-primary" aria-hidden />
      </span>
      <p className="flex-1 leading-snug">
        <span className="block text-[15px] font-extrabold">
          Completa tus colecciones y desbloquea recompensas exclusivas.
        </span>
        <span className="block text-sm font-semibold text-muted">¡Cada figura cuenta!</span>
      </p>
      <Link
        href="/recompensas"
        className="rounded-xl bg-primary px-5 py-3 text-[15px] font-extrabold text-primary-foreground transition-colors hover:bg-primary-strong"
      >
        Ver mis recompensas
      </Link>
    </section>
  );
}
