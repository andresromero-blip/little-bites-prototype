import { cn } from "@/lib/utils";
import type { Collection } from "@/lib/types";

/**
 * Arte visual de una colección. Si `collection.image` existe la usa;
 * mientras no haya assets finales, renderiza un gradiente temático
 * con "cielo estrellado" (mismo lenguaje visual de los mockups).
 */

const THEMES: Record<string, string> = {
  "cartoon-network": "from-[#3b0d81] via-[#4c1d95] to-[#6d28d9]",
  "monstruos-del-multiverso": "from-[#2e1065] via-[#5b21b6] to-[#0d9488]",
  "heroes-en-accion": "from-[#450a0a] via-[#7f1d1d] to-[#ea580c]",
  "dulces-amigos": "from-[#7f1d1d] via-[#dc2626] to-[#f59e0b]",
  "guardianes-cosmicos": "from-[#1e1b4b] via-[#312e81] to-[#0ea5e9]",
  "aventuras-marinas": "from-[#082f49] via-[#0c4a6e] to-[#06b6d4]",
};

export function CollectionArt({
  collection,
  className,
  children,
}: {
  collection: Collection;
  className?: string;
  children?: React.ReactNode;
}) {
  const theme = THEMES[collection.id] ?? "from-[#3b0d81] via-[#4c1d95] to-[#6d28d9]";

  if (collection.image) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={collection.image}
          alt={collection.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "card-stars relative overflow-hidden bg-linear-to-br",
        theme,
        className
      )}
    >
      <span className="absolute inset-0 flex items-center justify-center text-2xl font-black tracking-tight text-white/25 select-none">
        {collection.name
          .split(" ")
          .map((w) => w[0])
          .join("")}
      </span>
      {children}
    </div>
  );
}
