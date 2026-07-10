import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ filtro?: string }>;
}

/** El grid de figuras vive en el detalle de la colección. */
export default async function FigurasRedirect({ params, searchParams }: Props) {
  const { slug } = await params;
  const { filtro } = await searchParams;
  redirect(`/colecciones/${slug}${filtro ? `?filtro=${filtro}` : ""}`);
}
