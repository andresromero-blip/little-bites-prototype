import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { FigureSheet } from "@/components/figures/figure-sheet";
import { getCollectionBySlug, getFigure } from "@/lib/data";

interface Props {
  params: Promise<{ slug: string; figureId: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, figureId } = await params;
  const collection = getCollectionBySlug(slug);
  const figure = collection ? getFigure(collection.id, figureId) : null;
  return { title: figure ? figure.name : "Figura" };
}

/** Ficha de figura. */
export default async function FigurePage({ params }: Props) {
  const { slug, figureId } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();
  const figure = getFigure(collection.id, figureId);
  if (!figure) notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-6 pb-24 lg:px-8 lg:py-8 lg:pb-12">
      <Link
        href={`/colecciones/${collection.slug}`}
        className="flex w-fit items-center gap-1.5 text-sm font-bold text-muted hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden />
        {collection.name}
      </Link>

      <div className="mt-6">
        <FigureSheet figure={figure} collection={collection} />
      </div>
    </main>
  );
}
