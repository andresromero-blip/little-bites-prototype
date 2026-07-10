import type { Rarity } from "@/lib/types";
import { cn } from "@/lib/utils";

const RARITY: Record<Rarity, { label: string; cls: string }> = {
  comun: { label: "Común", cls: "bg-zinc-100 text-zinc-600" },
  rara: { label: "Rara", cls: "bg-sky-100 text-sky-700" },
  epica: { label: "Épica", cls: "bg-primary-soft text-primary" },
  especial: { label: "Especial", cls: "bg-amber-100 text-amber-700" },
};

export function RarityChip({ rarity, className }: { rarity: Rarity; className?: string }) {
  const r = RARITY[rarity];
  return (
    <span
      className={cn(
        "rounded-full px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider uppercase",
        r.cls,
        className
      )}
    >
      {r.label}
    </span>
  );
}
