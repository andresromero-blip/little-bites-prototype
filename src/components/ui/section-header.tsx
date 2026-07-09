import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

/** Encabezado de sección: título en mayúsculas + enlace "Ver todas →". */
export function SectionHeader({
  icon: Icon,
  title,
  actionLabel,
  actionHref = "#",
}: {
  icon?: LucideIcon;
  title: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide">
        {Icon && <Icon className="size-4 text-primary" aria-hidden />}
        {title}
      </h2>
      {actionLabel && (
        <Link
          href={actionHref}
          className="flex items-center gap-1 text-sm font-bold text-primary hover:underline"
        >
          {actionLabel}
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      )}
    </div>
  );
}
