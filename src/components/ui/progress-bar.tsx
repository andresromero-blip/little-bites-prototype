import { cn } from "@/lib/utils";

/** Barra de progreso con color semántico: <25% rojo, <50% ámbar, ≥50% morado. */
export function ProgressBar({
  percent,
  className,
}: {
  percent: number;
  className?: string;
}) {
  const color =
    percent < 25
      ? "bg-progress-low"
      : percent < 50
        ? "bg-progress-mid"
        : "bg-progress-high";

  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-track", className)}>
      <div
        className={cn("h-full rounded-full transition-all duration-500", color)}
        style={{ width: `${Math.min(100, Math.max(0, percent))}%` }}
      />
    </div>
  );
}
