import type { Metadata } from "next";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = { title: "Preguntas frecuentes" };

const FAQS: { id?: string; q: string; a: string }[] = [
  {
    q: "¿Cómo registro una figura que conseguí?",
    a: "Toca el botón “+ Registrar figura” (en el inicio o en la barra inferior), escanea el código QR de tu empaque o selecciona la figura manualmente, y tu avance se actualiza al instante.",
  },
  {
    q: "¿Cómo sé cuáles figuras me faltan?",
    a: "Cada colección tiene un filtro de “Faltantes” que te muestra exactamente qué figuras necesitas para completarla. También puedes buscar cualquier figura por su nombre y ver de inmediato si la tienes o te falta.",
  },
  {
    id: "donde-conseguir",
    q: "¿Dónde consigo las figuras?",
    a: "Las figuras vienen de sorpresa dentro de los productos Little Bites® Sorpresa participantes, disponibles en tiendas y autoservicios de todo México.",
  },
  {
    q: "¿Qué pasa cuando completo una colección?",
    a: "La colección se marca como completada y pasa a tu historial de coleccionista, donde queda el registro de todas las colecciones que has terminado.",
  },
  {
    q: "¿Puedo registrar una figura repetida?",
    a: "El registro funciona por figura única: si ya la tienes, la plataforma te lo indicará. Las repetidas no afectan tu porcentaje de avance.",
  },
  {
    q: "¿Dónde se guarda mi progreso?",
    a: "En esta versión, tu progreso se guarda en el navegador de tu dispositivo. Si cambias de dispositivo o borras los datos de navegación, tu avance no te seguirá — la sincronización con cuenta llegará en una fase posterior.",
  },
];

/** FAQs — accordion nativo (details/summary): accesible y sin JavaScript. */
export default function FaqsPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-6 pb-24 lg:px-8 lg:py-10">
      <h1 className="text-2xl font-black">Preguntas frecuentes</h1>
      <p className="mt-1 text-sm font-semibold text-muted">
        Todo lo que necesitas saber para completar tus colecciones.
      </p>

      <div className="mt-6 space-y-3">
        {FAQS.map((f) => (
          <details
            key={f.q}
            id={f.id}
            className="group rounded-card bg-surface shadow-sm open:shadow-md"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-[15px] font-extrabold [&::-webkit-details-marker]:hidden">
              {f.q}
              <ChevronDown
                className="size-5 shrink-0 text-muted transition-transform group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="px-4 pb-4 text-sm leading-relaxed font-semibold text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
