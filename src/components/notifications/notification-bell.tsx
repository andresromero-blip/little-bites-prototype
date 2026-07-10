"use client";

import Link from "next/link";
import { Bell } from "lucide-react";
import { notifications } from "@/lib/data/notifications";
import { useUserCollection } from "@/lib/store/user-collection";

/** Campana del navbar con badge derivado de no leídas. */
export function NotificationBell() {
  const read = useUserCollection((s) => s.readNotificationIds);
  const unread = notifications.filter((n) => !read.includes(n.id)).length;

  return (
    <Link
      href="/notificaciones"
      className="relative rounded-full p-2 hover:bg-background"
      aria-label={unread > 0 ? `Notificaciones (${unread} sin leer)` : "Notificaciones"}
    >
      <Bell className="size-5" aria-hidden />
      {unread > 0 && (
        <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-red-500 ring-2 ring-surface" />
      )}
    </Link>
  );
}
