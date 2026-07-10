"use client";

import Link from "next/link";
import { ArrowRight, Star, Search, FolderOpen, CheckCircle2 } from "lucide-react";
import { ProgressRing } from "@/components/ui/progress-ring";
import { getCollections, getFeaturedCollection } from "@/lib/data";
import { getCollectionProgress, getGlobalProgress } from "@/lib/progress";
import { useUserCollection } from "@/lib/store/user-collection";

/** Panel "Mi Progreso": anillo global + stats clave. */
export function ProgressPanel({ showDetailLink = true }: { showDetailLink?: boolean }) {
  const owned = useUserCollection((s) => s.owned);
  const global = getGlobalProgress(owned);

  const featured = getFeaturedCollection();
  const featuredProgress = featured
    ? getCollectionProgress(featured, owned[featured.id] ?? [])
    : null;

  const activeCount = getCollections("al-aire").length;

  const stats = [
    {
      icon: Star,
      value: featuredProgress ? `${featuredProgress.obtained} / ${featuredProgress.total}` : "—",
      label: "Figuras obtenidas",
    },
    {
      icon: Search,
      value: featuredProgress ? `${featuredProgress.missing}` : "—",
      label: "Figuras faltantes",
    },
    { icon: FolderOpen, value: `${activeCount}`, label: "Colecciones activas" },
    {
      icon: CheckCircle2,
      value: `${global.completedCollections}`,
      label: "Colecciones completadas",
    },
  ];

  return (
    <section className="rounded-card bg-surface p-6 shadow-sm" aria-label="Mi progreso">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-extrabold tracking-wide uppercase">Mi progreso</h2>
        {showDetailLink && (
          <Link
            href="/perfil"
            className="flex items-center gap-1 text-sm font-bold text-primary hover:underline"
          >
            Ver detalle <ArrowRight className="size-4" aria-hidden />
          </Link>
        )}
      </div>

      {/* Desktop: anillo + lista · Mobile: anillo + fila de stats */}
      <div className="mt-4 flex flex-col items-center gap-5 sm:flex-row sm:items-center">
        <ProgressRing percent={global.percent} />

        <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-1 sm:gap-y-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary-soft">
                <Icon className="size-4 text-primary" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[15px] font-extrabold">{value}</span>
                <span className="block text-xs font-semibold text-muted">{label}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
