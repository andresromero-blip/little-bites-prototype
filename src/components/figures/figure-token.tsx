import { FigureSilhouette } from "@/components/figures/silhouette";
import type { Figure } from "@/lib/types";
import { cn } from "@/lib/utils";

/**
 * Representación compacta de una figura.
 * Obtenida = ficha sólida con número · Faltante = silueta gris.
 */
export function FigureToken({ figure, owned }: { figure: Figure; owned: boolean }) {
  return (
    <div className="flex w-20 shrink-0 flex-col items-center gap-1.5 text-center">
      <span
        className={cn(
          "flex size-14 items-center justify-center rounded-full",
          owned
            ? "bg-primary-soft text-sm font-black text-primary ring-2 ring-primary/30"
            : "bg-line/60 text-muted/70"
        )}
      >
        {owned ? (
          String(figure.number).padStart(2, "0")
        ) : (
          <FigureSilhouette className="h-9 w-auto" />
        )}
      </span>
      <span
        className={cn(
          "line-clamp-2 text-[11px] leading-tight font-bold",
          !owned && "text-muted"
        )}
      >
        {figure.name}
      </span>
    </div>
  );
}
