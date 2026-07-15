/**
 * Silueta genérica de figura coleccionable (para faltantes sin arte).
 * Cuando exista arte por figura, se sustituye por la imagen real con
 * `filter: brightness(0)` — mismo efecto, cero refactor.
 */
export function FigureSilhouette({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 56" fill="currentColor" aria-hidden className={className}>
      {/* cabeza */}
      <circle cx="24" cy="13" r="10" />
      {/* cuerpo */}
      <path d="M14 25 Q14 22 17 22 H31 Q34 22 34 25 L33 41 Q33 44 30 44 H18 Q15 44 15 41 Z" />
      {/* brazos */}
      <path d="M12 24 Q9 26 9.5 31 L10.5 36 Q11 38.5 13.5 38 L15 37.5 Z" />
      <path d="M36 24 Q39 26 38.5 31 L37.5 36 Q37 38.5 34.5 38 L33 37.5 Z" />
      {/* pies */}
      <rect x="15.5" y="45" width="7.5" height="7" rx="3" />
      <rect x="25" y="45" width="7.5" height="7" rx="3" />
    </svg>
  );
}
