import { redirect } from "next/navigation";

/**
 * En el MVP, el Home es el navegador de colecciones.
 * Esta ruta queda reservada para el índice dedicado de la fase Expansión.
 */
export default function ColeccionesRedirect() {
  redirect("/");
}
