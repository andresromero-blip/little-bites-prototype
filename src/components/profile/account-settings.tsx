"use client";

import { useState } from "react";
import { Bell, ChevronRight, Globe, SunMedium } from "lucide-react";
import { cn } from "@/lib/utils";

function Row({
  icon,
  label,
  value,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  value?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex min-h-14 items-center gap-3 px-4">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-background">
        {icon}
      </span>
      <span className="flex-1 text-sm font-extrabold">{label}</span>
      {value && <span className="text-[13px] font-semibold text-muted">{value}</span>}
      {children ?? <ChevronRight className="size-4 text-muted" aria-hidden />}
    </div>
  );
}

/** Cuenta y preferencias (mock de prototipo, sin backend). */
export function AccountSettings() {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="space-y-6">
      <section aria-label="Métodos de acceso">
        <h2 className="text-sm font-extrabold tracking-wide uppercase">Método de acceso</h2>
        <div className="mt-3 rounded-card bg-surface py-1 shadow-sm">
          <Row
            icon={<span className="text-sm font-black text-[#4285F4]">G</span>}
            label="Google"
            value="Conectado"
          >
            <span className="rounded-full bg-success-soft px-2.5 py-1 text-[11px] font-extrabold text-success">
              Conectado
            </span>
          </Row>
        </div>
      </section>

      <section aria-label="Preferencias">
        <h2 className="text-sm font-extrabold tracking-wide uppercase">Preferencias</h2>
        <div className="mt-3 divide-y divide-border-soft rounded-card bg-surface py-1 shadow-sm">
          <Row icon={<Bell className="size-4 text-primary" aria-hidden />} label="Notificaciones">
            <button
              type="button"
              role="switch"
              aria-checked={notifications}
              aria-label="Notificaciones"
              onClick={() => setNotifications((v) => !v)}
              className={cn(
                "relative h-7 w-12 rounded-full transition-colors",
                notifications ? "bg-primary" : "bg-[#d9d4e6]"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 size-5 rounded-full bg-white shadow transition-all",
                  notifications ? "left-6" : "left-1"
                )}
              />
            </button>
          </Row>
          <Row
            icon={<SunMedium className="size-4 text-primary" aria-hidden />}
            label="Tema"
            value="Claro"
          />
          <Row
            icon={<Globe className="size-4 text-primary" aria-hidden />}
            label="Idioma"
            value="Español (MX)"
          />
        </div>
      </section>
    </div>
  );
}
