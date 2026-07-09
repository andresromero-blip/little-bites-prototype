"use client";

import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  count?: number;
}

/**
 * Tabs tipo chip (segmented control). Reutilizable:
 * Home y /colecciones (Activas · Próximamente · Históricas),
 * grid de figuras (Todas · Obtenidas · Faltantes).
 */
export function Tabs({
  items,
  value,
  onChange,
  ariaLabel,
}: {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
  ariaLabel: string;
}) {
  return (
    <div role="tablist" aria-label={ariaLabel} className="no-scrollbar flex gap-2 overflow-x-auto">
      {items.map((t) => {
        const active = t.id === value;
        return (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(t.id)}
            className={cn(
              "flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-extrabold transition-colors",
              active
                ? "bg-primary text-primary-foreground"
                : "bg-surface text-muted shadow-sm hover:text-foreground"
            )}
          >
            {t.label}
            {t.count !== undefined && (
              <span
                className={cn(
                  "rounded-full px-1.5 text-[11px] font-extrabold",
                  active ? "bg-white/20" : "bg-background"
                )}
              >
                {t.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
