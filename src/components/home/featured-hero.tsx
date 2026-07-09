import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Collection } from "@/lib/types";

/** Hero de colección destacada (carrusel de 1 en el MVP). */
export function FeaturedHero({ collection }: { collection: Collection }) {
  return (
    <section
      aria-label="Colección destacada"
      className="hero-rays relative overflow-hidden rounded-card text-white"
    >
      {/* Logo CN */}
      <div className="absolute top-5 right-5 grid grid-cols-2 overflow-hidden rounded-md text-[13px] leading-none font-black">
        <span className="bg-black px-1.5 py-1 text-white">C</span>
        <span className="bg-white px-1.5 py-1 text-black">N</span>
        <span className="bg-white px-1.5 py-1 text-black">✓</span>
        <span className="bg-black px-1.5 py-1 text-white">✓</span>
      </div>

      <div className="relative flex min-h-[280px] flex-col justify-center p-6 sm:p-10 lg:min-h-[340px] lg:max-w-[55%]">
        <span className="w-fit rounded-full bg-white/15 px-3.5 py-1.5 text-[11px] font-extrabold tracking-widest uppercase backdrop-blur-sm">
          Colección destacada
        </span>

        <h1 className="mt-4 text-4xl leading-[0.95] font-black uppercase sm:text-5xl">
          {collection.name}
        </h1>

        <p className="mt-3 max-w-xs text-[15px] font-semibold text-white/90">
          {collection.totalFigures} figuras increíbles de tus series favoritas.
        </p>

        <Link
          href={`/colecciones/${collection.slug}`}
          className="mt-6 flex w-fit items-center gap-2 rounded-xl bg-white px-5 py-3 text-[15px] font-extrabold text-primary shadow-sm transition-transform hover:scale-[1.02]"
        >
          Explorar colección
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>

      {/* Dots del carrusel */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        <span className="h-1.5 w-4 rounded-full bg-white" />
        <span className="size-1.5 rounded-full bg-white/40" />
        <span className="size-1.5 rounded-full bg-white/40" />
        <span className="size-1.5 rounded-full bg-white/40" />
      </div>
    </section>
  );
}
