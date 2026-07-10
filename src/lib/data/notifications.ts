/**
 * Notificaciones (contenido mock del prototipo).
 * Tipos alineados al MVP: lanzamientos, progreso y completadas.
 * Las de recompensas llegarán con la fase Expansión.
 */

export type NotificationType = "lanzamiento" | "progreso" | "proximamente" | "completada";

export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  body: string;
  timeAgo: string;
  href: string;
}

export const notifications: AppNotification[] = [
  {
    id: "nt-1",
    type: "proximamente",
    title: "Guardianes Cósmicos llega el 24 de julio",
    body: "Una nueva colección intergaláctica está por aterrizar. Activa el recordatorio.",
    timeAgo: "Hace 1 día",
    href: "/colecciones/guardianes-cosmicos",
  },
  {
    id: "nt-2",
    type: "progreso",
    title: "¡Vas al 72% de Cartoon Network!",
    body: "Te faltan 7 figuras para completar la colección.",
    timeAgo: "Hace 2 días",
    href: "/colecciones/cartoon-network?filtro=faltantes",
  },
  {
    id: "nt-3",
    type: "lanzamiento",
    title: "¡Cartoon Network ya está al aire!",
    body: "25 figuras de tus series favoritas te esperan.",
    timeAgo: "Hace 3 semanas",
    href: "/colecciones/cartoon-network",
  },
  {
    id: "nt-4",
    type: "completada",
    title: "¡Completaste Dulces Amigos!",
    body: "La colección pasó a tu historial de coleccionista.",
    timeAgo: "Hace 3 meses",
    href: "/colecciones/dulces-amigos",
  },
];
