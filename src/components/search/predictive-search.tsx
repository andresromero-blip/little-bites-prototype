"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, LayoutGrid, CheckCircle2, CircleDashed } from "lucide-react";
import { searchAll } from "@/lib/search";
import { useUserCollection } from "@/lib/store/user-collection";
import { cn } from "@/lib/utils";

/**
 * Buscador predictivo global.
 * - variant "navbar": input compacto con dropdown flotante (desktop).
 * - variant "page": input grande con resultados en línea (/buscar, móvil).
 * Cada figura responde de inmediato: ¿la tienes o te falta?
 */
export function PredictiveSearch({
  variant = "navbar",
  autoFocus = false,
}: {
  variant?: "navbar" | "page";
  autoFocus?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const owned = useUserCollection((s) => s.owned);

  const results = useMemo(() => searchAll(query), [query]);
  const hasResults = results.collections.length > 0 || results.figures.length > 0;
  const showPanel = query.trim().length > 0 && (variant === "page" || open);

  const resultsList = (
    <div className={variant === "navbar" ? "max-h-[420px] overflow-y-auto p-2" : "mt-4 space-y-1"}>
      {!hasResults && (
        <p className="px-3 py-4 text-sm font-semibold text-muted">
          Sin resultados para “{query.trim()}”. Prueba con el nombre de una figura o colección.
        </p>
      )}

      {results.collections.length > 0 && (
        <>
          <p className="px-3 pt-2 pb-1 text-[11px] font-extrabold tracking-widest text-muted uppercase">
            Colecciones
          </p>
          {results.collections.map((c) => (
            <Link
              key={c.id}
              href={`/colecciones/${c.slug}`}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-background"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft">
                <LayoutGrid className="size-4 text-primary" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-extrabold">{c.name}</span>
                <span className="block text-xs font-semibold text-muted">
                  {c.totalFigures} figuras
                </span>
              </span>
            </Link>
          ))}
        </>
      )}

      {results.figures.length > 0 && (
        <>
          <p className="px-3 pt-2 pb-1 text-[11px] font-extrabold tracking-widest text-muted uppercase">
            Figuras
          </p>
          {results.figures.map(({ figure, collection }) => {
            const has = (owned[collection.id] ?? []).includes(figure.id);
            return (
              <Link
                key={figure.id}
                href={`/colecciones/${collection.slug}/figuras/${figure.id}`}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-background"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-background text-sm font-black text-muted">
                  {String(figure.number).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-extrabold">{figure.name}</span>
                  <span className="block truncate text-xs font-semibold text-muted">
                    {figure.series} · {collection.name}
                  </span>
                </span>
                {has ? (
                  <span className="flex shrink-0 items-center gap-1 rounded-full bg-success-soft px-2.5 py-1 text-[11px] font-extrabold text-success">
                    <CheckCircle2 className="size-3.5" aria-hidden /> La tienes
                  </span>
                ) : (
                  <span className="flex shrink-0 items-center gap-1 rounded-full bg-warning-soft px-2.5 py-1 text-[11px] font-extrabold text-warning-strong">
                    <CircleDashed className="size-3.5" aria-hidden /> Te falta
                  </span>
                )}
              </Link>
            );
          })}
        </>
      )}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={cn("relative", variant === "navbar" ? "w-full max-w-xs" : "w-full")}
      onBlur={(e) => {
        if (!containerRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <div
        className={cn(
          "flex items-center gap-2 rounded-xl border border-border-soft bg-background px-3",
          variant === "navbar" ? "h-10" : "h-12 bg-surface shadow-sm"
        )}
      >
        <Search className="size-4 shrink-0 text-muted" aria-hidden />
        <input
          type="search"
          role="searchbox"
          autoFocus={autoFocus}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setOpen(false);
          }}
          placeholder="Busca una figura o colección…"
          aria-label="Buscar figuras y colecciones"
          className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-muted"
        />
      </div>

      {showPanel &&
        (variant === "navbar" ? (
          <div className="absolute top-12 right-0 left-0 z-50 overflow-hidden rounded-2xl border border-border-soft bg-surface shadow-xl">
            {resultsList}
          </div>
        ) : (
          resultsList
        ))}
    </div>
  );
}
