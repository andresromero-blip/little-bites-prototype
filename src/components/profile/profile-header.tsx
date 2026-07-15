"use client";

import { useUserCollection } from "@/lib/store/user-collection";
import { profile } from "@/lib/data/profile";

/** Identidad del coleccionista según el método de acceso (soft login). */
export function ProfileHeader() {
  const userName = useUserCollection((s) => s.userName);
  const authMethod = useUserCollection((s) => s.authMethod);

  const subtitle =
    authMethod === "google" || authMethod === "email"
      ? profile.email
      : authMethod === "facebook"
        ? "Conectado con Facebook"
        : "Invitado · tu progreso vive en este dispositivo";

  return (
    <section aria-label="Identidad" className="flex flex-col items-center text-center">
      <span className="flex size-24 items-center justify-center rounded-full bg-linear-to-br from-amber-400 to-orange-600 text-4xl">
        🧑‍🚀
      </span>
      <h1 className="mt-4 text-2xl font-black">{userName}</h1>
      <p className="text-sm font-semibold text-muted">{subtitle}</p>
    </section>
  );
}
