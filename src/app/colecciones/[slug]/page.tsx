import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { CollectionHero } from "@/components/collections/collection-hero";
import { ProgressCard } from "@/components/collections/progress-card";
import { FigureGrid } from "@/components/figures/figure-grid";
import { getCollectionBySlug, getCollections } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ filtro?: string }>;
}

export function generateStaticParams() {
  return getCollections().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  return { title: collection ? collection.name : "Colección" };
}

/**
 * Detalle de colección: cabecera + progreso + grid completo de figuras
 * con estado (obtenida/faltante) y acceso a la ficha de cada una.
 */
export default async function CollectionDetailPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { filtro } = await searchParams;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const initialFilter =
    filtro === "faltantes" || filtro === "obtenidas" ? filtro : "todas";

  return (
    <main className="mx-auto max-w-5xl px-4 py-6 pb-24 lg:px-8 lg:py-8 lg:pb-12">
      <Link
        href="/colecciones"
        className="flex w-fit items-center gap-1.5 text-sm font-bold text-muted hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Colecciones
      </Link>

      <div className="mt-5 grid gap-8 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-3">
          <CollectionHero collection={collection} />
        </div>
        <div className="lg:col-span-2">
          <ProgressCard collection={collection} />
        </div>
      </div>

      <FigureGrid collection={collection} initialFilter={initialFilter} />
    </main>
  );
}
