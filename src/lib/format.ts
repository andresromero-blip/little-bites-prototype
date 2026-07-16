const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

/** "2026-07-24" → "24 jul 2026" (determinista: sin Intl, sin mismatch SSR/cliente). */
export function launchLabel(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[(m ?? 1) - 1]} ${y}`;
}

/** "2026-06-15" → "jun 2026" */
export function monthYearLabel(iso: string): string {
  const [y, m] = iso.split("-").map(Number);
  return `${MONTHS[(m ?? 1) - 1]} ${y}`;
}
