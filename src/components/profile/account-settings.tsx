"use client";

import { useState } from "react";
import { Bell, ChevronRight, Globe, Mail, Moon, SunMedium } from "lucide-react";
import { useTheme } from "@/lib/hooks/use-theme";
import { useUserCollection } from "@/lib/store/user-collection";
import type { AuthMethod } from "@/lib/types";
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

const METHOD_LABEL: Record<AuthMethod, string> = {
  google: "Google",
  facebook: "Facebook",
  email: "Correo electrónico",
  guest: "Invitado",
};

function MethodIcon({ method }: { method: AuthMethod }) {
  if (method === "google") return <span className="text-sm font-black text-[#4285F4]">G</span>;
  if (method === "facebook") return <span className="text-sm font-black text-[#1877F2]">f</span>;
  return <Mail className="size-4 text-primary" aria-hidden />;
}

/** Cuenta y preferencias (soft login simulado, sin backend). */
export function AccountSettings() {
  const [notifications, setNotifications] = useState(true);
  const { theme, toggle } = useTheme();
  const dark = theme === "dark";
  const authMethod = useUserCollection((s) => s.authMethod);
  const signIn = useUserCollection((s) => s.signIn);

  return (
    <div className="space-y-6">
      <section aria-label="Métodos de acceso">
        <h2 className="text-sm font-extrabold tracking-wide uppercase">Método de acceso</h2>

        {authMethod && authMethod !== "guest" ? (
          <div className="mt-3 rounded-card bg-surface py-1 shadow-sm">
            <Row icon={<MethodIcon method={authMethod} />} label={METHOD_LABEL[authMethod]}>
              <span className="rounded-full bg-success-soft px-2.5 py-1 text-[11px] font-extrabold text-success">
                Conectado
              </span>
            </Row>
          </div>
        ) : (
          /* Invitado: re-oferta del login con contexto (guest-first) */
          <div className="mt-3 rounded-card bg-surface p-5 shadow-sm">
            <p className="text-[15px] font-extrabold">Guarda tu progreso</p>
            <p className="mt-1 text-[13px] font-semibold text-muted">
              Estás como invitado: tu avance vive solo en este dispositivo. Conecta una
              cuenta para no perderlo.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => signIn("google")}
                className="flex items-center gap-2 rounded-xl border border-border-soft px-4 py-2.5 text-sm font-extrabold transition-colors hover:bg-background"
              >
                <span className="font-black text-[#4285F4]">G</span> Google
              </button>
              <button
                type="button"
                onClick={() => signIn("facebook")}
                className="flex items-center gap-2 rounded-xl border border-border-soft px-4 py-2.5 text-sm font-extrabold transition-colors hover:bg-background"
              >
                <span className="font-black text-[#1877F2]">f</span> Facebook
              </button>
              <button
                type="button"
                onClick={() => signIn("email")}
                className="flex items-center gap-2 rounded-xl border border-border-soft px-4 py-2.5 text-sm font-extrabold transition-colors hover:bg-background"
              >
                <Mail className="size-4 text-primary" aria-hidden /> Correo
              </button>
            </div>
          </div>
        )}
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
                notifications ? "bg-primary" : "bg-line"
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
            icon={
              dark ? (
                <Moon className="size-4 text-primary" aria-hidden />
              ) : (
                <SunMedium className="size-4 text-primary" aria-hidden />
              )
            }
            label="Tema"
            value={dark ? "Oscuro" : "Claro"}
          >
            <button
              type="button"
              role="switch"
              aria-checked={dark}
              aria-label="Tema oscuro"
              onClick={toggle}
              className={cn(
                "relative h-7 w-12 rounded-full transition-colors",
                dark ? "bg-primary" : "bg-line"
              )}
            >
              <span
                className={cn(
                  "absolute top-1 size-5 rounded-full bg-white shadow transition-all",
                  dark ? "left-6" : "left-1"
                )}
              />
            </button>
          </Row>
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
