import { Award, Smartphone, Image as ImageIcon, FolderCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { recentRewards, type RecentReward } from "@/lib/data/profile";
import { cn } from "@/lib/utils";

const ART: Record<
  RecentReward["type"],
  { icon: typeof Award; cls: string }
> = {
  badge: { icon: Award, cls: "from-amber-500 to-orange-700" },
  wallpaper: { icon: Smartphone, cls: "from-indigo-600 to-violet-900" },
  poster: { icon: ImageIcon, cls: "from-fuchsia-600 to-purple-900" },
  arte: { icon: ImageIcon, cls: "from-sky-500 to-indigo-800" },
  coleccion: { icon: FolderCheck, cls: "from-zinc-700 to-zinc-900" },
};

/** Recompensas recientes — grid en desktop, carrusel horizontal en móvil. */
export function RecentRewards() {
  return (
    <section aria-label="Recompensas recientes">
      <SectionHeader title="Recompensas recientes" actionLabel="Ver todas" actionHref="/recompensas" />

      <div className="no-scrollbar mt-4 flex gap-3 overflow-x-auto pb-1 lg:grid lg:grid-cols-4 lg:overflow-visible">
        {recentRewards.map((r) => {
          const { icon: Icon, cls } = ART[r.type];
          return (
            <div
              key={r.id}
              className="w-32 shrink-0 rounded-card bg-surface p-3 text-center shadow-sm lg:w-auto"
            >
              <div
                className={cn(
                  "card-stars mx-auto flex size-16 items-center justify-center rounded-xl bg-linear-to-br",
                  cls
                )}
              >
                <Icon className="size-7 text-white/90" aria-hidden />
              </div>
              <p className="mt-2 text-[13px] leading-tight font-extrabold">{r.title}</p>
              <p className="text-[12px] leading-tight font-bold">{r.subtitle}</p>
              <p className="mt-1.5 text-[11px] font-semibold text-muted">{r.timeAgo}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
