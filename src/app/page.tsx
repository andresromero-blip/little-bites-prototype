import { getCollections } from "@/lib/data";
import { getCollectionProgress, getGlobalProgress } from "@/lib/progress";
import { demoSeed } from "@/lib/store/seed";

/**
 * Página temporal de verificación (Fase 1).
 * Comprueba que la capa de contenido, el motor de progreso y el seed
 * funcionan de extremo a extremo. Se reemplaza por el Home real en Fase 6.
 */
export default function Home() {
  const global = getGlobalProgress(demoSeed.owned);
  const active = getCollections("al-aire");
  const upcoming = getCollections("proximamente");
  const historical = getCollections("historica");

  return (
    <main className="mx-auto max-w-md px-4 py-10">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">
        Little Bites · Prototipo
      </p>
      <h1 className="mt-1 text-2xl font-bold">
        Fase 1 — Arquitectura verificada
      </h1>
      <p className="mt-2 text-sm text-muted">
        Contenido tipado + motor de progreso + seed demo funcionando. Esta
        página se reemplaza por el Home real en Fase 6.
      </p>

      <section className="mt-8 rounded-2xl bg-surface p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-muted">Progreso global (derivado)</h2>
        <p className="mt-2 text-4xl font-bold text-primary">{global.percent}%</p>
        <p className="mt-1 text-sm text-muted">
          {global.totalObtained} obtenidas · {global.totalMissing} faltantes ·{" "}
          {global.activeCollections} activas · {global.completedCollections} completadas
        </p>
      </section>

      <section className="mt-6 space-y-3">
        <h2 className="text-sm font-semibold text-muted">Colecciones al aire</h2>
        {active.map((c) => {
          const p = getCollectionProgress(c, demoSeed.owned[c.id] ?? []);
          return (
            <div key={c.id} className="rounded-2xl bg-surface p-4 shadow-sm">
              <div className="flex items-baseline justify-between">
                <p className="font-semibold">
                  {c.name}
                  {c.isNew && (
                    <span className="ml-2 rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-primary-foreground">
                      Nueva
                    </span>
                  )}
                </p>
                <p className="text-sm font-semibold text-primary">{p.percent}%</p>
              </div>
              <p className="mt-1 text-sm text-muted">
                {p.obtained} / {p.total} figuras · faltan {p.missing}
                {p.nextMilestone
                  ? ` · siguiente recompensa: ${p.nextMilestone.threshold}%`
                  : " · colección completada"}
              </p>
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-background">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${p.percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </section>

      <section className="mt-6 rounded-2xl bg-surface p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-muted">Próximamente</h2>
        <p className="mt-1 text-sm">
          {upcoming.map((c) => c.name).join(" · ")}
        </p>
      </section>

      <section className="mt-3 rounded-2xl bg-surface p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-muted">Históricas</h2>
        <p className="mt-1 text-sm">
          {historical.map((c) => c.name).join(" · ")}
        </p>
      </section>
    </main>
  );
}
