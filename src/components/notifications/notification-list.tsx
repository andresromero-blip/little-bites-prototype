"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarClock,
  CheckCheck,
  CheckCircle2,
  Rocket,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { Tabs } from "@/components/ui/tabs";
import { notifications, type NotificationType } from "@/lib/data/notifications";
import { useUserCollection } from "@/lib/store/user-collection";
import { cn } from "@/lib/utils";

const TYPE_ICON: Record<NotificationType, { icon: LucideIcon; cls: string }> = {
  lanzamiento: { icon: Rocket, cls: "bg-primary-soft text-primary" },
  progreso: { icon: TrendingUp, cls: "bg-warning-soft text-warning-strong" },
  proximamente: { icon: CalendarClock, cls: "bg-primary-soft text-primary" },
  completada: { icon: CheckCircle2, cls: "bg-success-soft text-success" },
};

export function NotificationList() {
  const read = useUserCollection((s) => s.readNotificationIds);
  const markRead = useUserCollection((s) => s.markNotificationRead);
  const markAllRead = useUserCollection((s) => s.markAllNotificationsRead);
  const [tab, setTab] = useState<"todas" | "no-leidas">("todas");

  const unread = notifications.filter((n) => !read.includes(n.id));
  const visible = tab === "no-leidas" ? unread : notifications;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Tabs
          items={[
            { id: "todas", label: "Todas", count: notifications.length },
            { id: "no-leidas", label: "No leídas", count: unread.length },
          ]}
          value={tab}
          onChange={(id) => setTab(id as "todas" | "no-leidas")}
          ariaLabel="Filtrar notificaciones"
        />
        {unread.length > 0 && (
          <button
            type="button"
            onClick={() => markAllRead(notifications.map((n) => n.id))}
            className="flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
          >
            <CheckCheck className="size-4" aria-hidden />
            Marcar todas como leídas
          </button>
        )}
      </div>

      {visible.length === 0 ? (
        <p className="mt-6 rounded-card bg-surface p-6 text-center text-sm font-semibold text-muted shadow-sm">
          Estás al día. No tienes notificaciones sin leer.
        </p>
      ) : (
        <ul className="mt-5 space-y-3">
          {visible.map((n) => {
            const { icon: Icon, cls } = TYPE_ICON[n.type];
            const isUnread = !read.includes(n.id);
            return (
              <li key={n.id}>
                <Link
                  href={n.href}
                  onClick={() => markRead(n.id)}
                  className={cn(
                    "flex items-start gap-3 rounded-card p-4 shadow-sm transition-shadow hover:shadow-md",
                    isUnread ? "bg-surface" : "bg-surface/60"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-xl",
                      cls
                    )}
                  >
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={cn(
                        "block text-[15px] leading-snug",
                        isUnread ? "font-extrabold" : "font-bold text-muted"
                      )}
                    >
                      {n.title}
                    </span>
                    <span className="mt-0.5 block text-[13px] font-semibold text-muted">
                      {n.body}
                    </span>
                    <span className="mt-1 block text-[11px] font-semibold text-muted/80">
                      {n.timeAgo}
                    </span>
                  </span>
                  {isUnread && (
                    <span
                      className="mt-1.5 size-2 shrink-0 rounded-full bg-primary"
                      aria-label="Sin leer"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
