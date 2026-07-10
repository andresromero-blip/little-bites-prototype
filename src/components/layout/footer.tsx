import Link from "next/link";

const EXPLORE = [
  { href: "/", label: "Inicio" },
  { href: "/buscar", label: "Buscar" },
  { href: "/perfil", label: "Mi perfil" },
];

const HELP = [
  { href: "/faqs", label: "Preguntas frecuentes" },
  { href: "/faqs#donde-conseguir", label: "¿Dónde consigo las figuras?" },
  { href: "/registrar", label: "Registrar una figura" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-surface pb-28 lg:pb-0">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-10 sm:grid-cols-3 lg:px-8">
        <div>
          <p className="leading-none">
            <span className="block -rotate-3 text-xl font-black italic tracking-tight text-logo">
              Little
            </span>
            <span className="-mt-1 block -rotate-3 text-xl font-black italic tracking-tight text-logo">
              Bites<span className="align-super text-[9px]">®</span>
            </span>
          </p>
          <p className="mt-3 max-w-xs text-[13px] font-semibold text-muted">
            La plataforma oficial para gestionar tus colecciones: qué tienes, qué te falta y qué
            sigue.
          </p>
        </div>

        <nav aria-label="Explorar">
          <h2 className="text-[11px] font-extrabold tracking-widest text-muted uppercase">
            Explorar
          </h2>
          <ul className="mt-3 space-y-2">
            {EXPLORE.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm font-bold hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Ayuda">
          <h2 className="text-[11px] font-extrabold tracking-widest text-muted uppercase">
            Ayuda
          </h2>
          <ul className="mt-3 space-y-2">
            {HELP.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm font-bold hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border-soft">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-4 text-[12px] font-semibold text-muted sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 Grupo Bimbo · Little Bites® · ™ &amp; © Cartoon Network</p>
          <p className="flex gap-4">
            <Link href="#" className="hover:text-primary">
              Aviso de privacidad
            </Link>
            <Link href="#" className="hover:text-primary">
              Términos y condiciones
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
