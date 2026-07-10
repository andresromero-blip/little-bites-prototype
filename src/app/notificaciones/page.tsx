import type { Metadata } from "next";
import { NotificationList } from "@/components/notifications/notification-list";

export const metadata: Metadata = { title: "Notificaciones" };

/** Notificaciones: lanzamientos, progreso y colecciones completadas. */
export default function NotificacionesPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-6 pb-24 lg:px-8 lg:py-10">
      <h1 className="text-2xl font-black">Notificaciones</h1>
      <p className="mt-1 text-sm font-semibold text-muted">
        Lanzamientos, avances y colecciones completadas.
      </p>

      <div className="mt-6">
        <NotificationList />
      </div>
    </main>
  );
}
