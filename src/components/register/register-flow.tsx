"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, QrCode, ScanLine, Sparkles } from "lucide-react";
import { ProgressBar } from "@/components/ui/progress-bar";
import { PredictiveSearch } from "@/components/search/predictive-search";
import { getCollections, getFigures } from "@/lib/data";
import { getCollectionProgress } from "@/lib/progress";
import { useUserCollection } from "@/lib/store/user-collection";
import type { Collection, Figure } from "@/lib/types";

interface RegisterResult {
  figure: Figure;
  collection: Collection;
}

/**
 * Flujo de registro (QR simulado en el prototipo):
 * escaneo → figura aleatoria faltante → confirmación con avance actualizado.
 * Registro manual: búsqueda → ficha → "¡La tengo!".
 */
export function RegisterFlow() {
  const owned = useUserCollection((s) => s.owned);
  const addFigure = useUserCollection((s) => s.addFigure);
  const [result, setResult] = useState<RegisterResult | null>(null);

  const simulateScan = () => {
    // Prioriza colecciones al aire por relevancia; toma una faltante al azar.
    for (const collection of getCollections("al-aire")) {
      const ownedIds = new Set(owned[collection.id] ?? []);
      const missing = getFigures(collection.id).filter((f) => !ownedIds.has(f.id));
      if (missing.length > 0) {
        const figure = missing[Math.floor(Math.random() * missing.length)]!;
        addFigure(collection.id, figure.id);
        setResult({ figure, collection });
        return;
      }
    }
    setResult(null);
  };

  // ── Confirmación ──────────────────────────────────────────────────
  if (result) {
    const p = getCollectionProgress(result.collection, owned[result.collection.id] ?? []);
    return (
      <motion.section
        initial={{ opacity: 0, scale: 0.92, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        aria-label="Figura registrada"
        className="rounded-card bg-surface p-8 text-center shadow-sm"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.15, duration: 0.6 }}
          className="mx-auto flex size-16 items-center justify-center rounded-full bg-success-soft"
        >
          <CheckCircle2 className="size-8 text-success" aria-hidden />
        </motion.span>

        <h2 className="mt-4 text-2xl font-black">¡Figura registrada!</h2>
        <p className="mt-1 text-[15px] font-extrabold text-primary">{result.figure.name}</p>
        <p className="text-sm font-semibold text-muted">
          {result.figure.series} · {result.collection.name}
        </p>

        <div className="mx-auto mt-6 max-w-xs">
          <p className="text-sm font-bold">
            Ahora tienes {p.obtained} / {p.total} figuras
          </p>
          <ProgressBar percent={p.percent} className="mt-2" />
          {!p.isComplete && (
            <p className="mt-2 text-[13px] font-semibold text-muted">
              Te faltan {p.missing} para completarla
            </p>
          )}
          {p.isComplete && (
            <p className="mt-2 flex items-center justify-center gap-1.5 text-[13px] font-extrabold text-success">
              <Sparkles className="size-4" aria-hidden />
              ¡Colección completada!
            </p>
          )}
        </div>

        <div className="mt-7 flex flex-col items-center gap-3">
          <Link
            href={`/colecciones/${result.collection.slug}`}
            className="flex w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-[15px] font-extrabold text-primary-foreground transition-colors hover:bg-primary-strong"
          >
            Ver colección
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={() => setResult(null)}
            className="text-sm font-bold text-primary hover:underline"
          >
            Registrar otra figura
          </button>
        </div>
      </motion.section>
    );
  }

  // ── Escaneo ───────────────────────────────────────────────────────
  const hasMissing = getCollections("al-aire").some((c) => {
    const ownedIds = new Set(owned[c.id] ?? []);
    return getFigures(c.id).some((f) => !ownedIds.has(f.id));
  });

  return (
    <div className="space-y-8">
      <section
        aria-label="Escanear código"
        className="flex flex-col items-center rounded-card bg-surface p-8 text-center shadow-sm"
      >
        <div className="flex size-40 items-center justify-center rounded-card border-2 border-dashed border-line bg-background">
          <QrCode className="size-16 text-muted" aria-hidden />
        </div>
        <p className="mt-4 max-w-sm text-sm font-semibold text-muted">
          Escanea el código QR de tu empaque para registrar tu figura.
        </p>

        {hasMissing ? (
          <button
            type="button"
            onClick={simulateScan}
            className="mt-5 flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-[15px] font-extrabold text-primary-foreground transition-colors hover:bg-primary-strong"
          >
            <ScanLine className="size-5" aria-hidden />
            Escanear código
          </button>
        ) : (
          <p className="mt-5 text-sm font-extrabold text-success">
            ¡Tienes todas las figuras de las colecciones activas!
          </p>
        )}

        <p className="mt-3 text-[11px] font-semibold text-muted/80">
          Prototipo: el escaneo se simula registrando una figura faltante.
        </p>
      </section>

      <section aria-label="Registro manual">
        <h2 className="text-sm font-extrabold tracking-wide uppercase">
          ¿No puedes escanear? Regístrala manualmente
        </h2>
        <p className="mt-1 text-[13px] font-semibold text-muted">
          Busca la figura y márcala como tuya desde su ficha.
        </p>
        <div className="mt-4">
          <PredictiveSearch variant="page" />
        </div>
      </section>
    </div>
  );
}
