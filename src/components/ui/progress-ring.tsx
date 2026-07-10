/** Anillo de progreso SVG (Mi Progreso). */
export function ProgressRing({
  percent,
  size = 148,
  strokeWidth = 12,
  label = "Completado",
}: {
  percent: number;
  size?: number;
  strokeWidth?: number;
  label?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(100, Math.max(0, percent)) / 100);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-track)"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-700"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {size < 100 ? (
          <span className="text-sm font-extrabold">{percent}%</span>
        ) : (
          <>
            <span className="text-3xl font-extrabold">{percent}%</span>
            <span className="text-xs font-semibold text-muted">{label}</span>
          </>
        )}
      </div>
    </div>
  );
}
