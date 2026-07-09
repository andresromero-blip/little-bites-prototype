import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { getCollections } from "@/lib/data";
import { historicalCompletion } from "@/lib/data/profile";

const AVATAR_THEMES: Record<string, string> = {
  "escandalosos": "from-zinc-100 to-zinc-300 text-zinc-700",
  "ben-10": "from-green-200 to-emerald-400 text-emerald-900",
  "laboratorio-de-dexter": "from-orange-200 to-amber-400 text-amber-900",
  "steven-universe": "from-rose-200 to-pink-400 text-rose-900",
};

/** Colecciones históricas — avatares circulares con fecha y 100%. */
export function HistoricalCollections() {
  const historical = getCollections("historica");

  return (
    <section aria-label="Colecciones históricas">
      <SectionHeader title="Colecciones históricas" actionLabel="Ver todas" actionHref="/colecciones" />

      <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1 lg:grid lg:grid-cols-4 lg:overflow-visible">
        {historical.map((c) => (
          <Link
            key={c.id}
            href={`/colecciones/${c.slug}`}
            className="w-28 shrink-0 rounded-card bg-surface p-3 text-center shadow-sm transition-shadow hover:shadow-md lg:w-auto"
          >
            <span
              className={`mx-auto flex size-16 items-center justify-center rounded-full bg-linear-to-br text-xl font-black ${AVATAR_THEMES[c.id] ?? "from-violet-200 to-purple-400 text-purple-900"}`}
            >
              {c.name
                .split(" ")
                .filter((w) => w.length > 2 || !isNaN(Number(w)))
                .map((w) => w[0])
                .slice(0, 2)
                .join("")}
            </span>
            <p className="mt-2 text-[13px] leading-tight font-extrabold">{c.name}</p>
            <p className="mt-0.5 text-[11px] font-semibold text-muted">
              Completada
              <br />
              {historicalCompletion[c.id] ?? "—"}
            </p>
            <span className="mt-2 inline-block rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-extrabold text-primary-foreground">
              100%
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
