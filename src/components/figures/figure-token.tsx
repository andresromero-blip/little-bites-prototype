import type { Figure } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Representación compacta de una figura (sin arte final): número + nombre.
 * Obtenida = ficha sólida · Faltante = ficha punteada apagada.
 */
export function FigureToken({ figure, owned }: { figure: Figure; owned: boolean }) {
  return (
    <div className="flex w-20 shrink-0 flex-col items-center gap-1.5 text-center">
      <span
        className={cn(
          "flex size-14 items-center justify-center rounded-full text-sm font-black",
          owned
            ? "bg-primary-soft text-primary ring-2 ring-primary/30"
            : "border-2 border-dashed border-[#d9d4e6] bg-background text-muted"
        )}
      >
        {String(figure.number).padStart(2, "0")}
      </span>
      <span className="line-clamp-2 text-[11px] leading-tight font-bold">{figure.name}</span>
    </div>
  );
}
