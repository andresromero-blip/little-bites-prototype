# Little Bites · Prototipo de plataforma de coleccionismo

Prototipo navegable de alta fidelidad del **Completion Engine** de Little Bites.
No es el producto final: valida experiencia, arquitectura de información y
flujos antes de la implementación en Nubity.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Zustand · Framer Motion · Lucide

## Deploy (GitHub web → Vercel)

1. Sube el contenido de esta carpeta al repo `andresromero-blip/little-bites-prototype` (GitHub web → *Add file → Upload files*). No subas `node_modules` (no existe en esta entrega).
2. En Vercel: *Import Project* → selecciona el repo. Framework: Next.js (autodetectado). Sin variables de entorno.
3. Cada commit a `main` redeploya automáticamente.

## Arquitectura

Principio central: **contenido ≠ estado del usuario, y el progreso siempre se deriva**.

| Capa | Dónde | Qué es | Futuro en Nubity |
|---|---|---|---|
| Contenido | `src/lib/data/` | Colecciones, figuras, recompensas (tipado, inmutable) | CMS / API |
| Estado del usuario | `src/lib/store/` | Ids de figuras obtenidas (Zustand + localStorage) | Backend / cuenta |
| Progreso | `src/lib/progress.ts` | Funciones puras que derivan %, faltantes e hitos | Igual (lógica compartible) |

Los componentes **nunca** importan los arrays de datos directamente: siempre a
través del repositorio (`src/lib/data/index.ts`). Migrar a API = cambiar un archivo.

### Estructura

```
src/
  app/                    # Rutas (App Router)
    page.tsx              # Home (Fase 1: página de verificación)
    globals.css           # Tokens de diseño (Tailwind v4 @theme)
  components/             # (Fase 3+) ui/ · layout/ · collections/ · figures/ · rewards/ · progress/
  lib/
    types.ts              # Modelo de dominio
    data/                 # Contenido + repositorio
    store/                # Zustand persist + seed demo
    progress.ts           # Motor de progreso (funciones puras)
    utils.ts              # cn()
```

### Rutas planificadas

```
/                                     Home
/colecciones                          Índice (activas · próximamente · históricas)
/colecciones/[slug]                   Detalle de colección
/colecciones/[slug]/figuras           Grid (todas · obtenidas · faltantes)
/colecciones/[slug]/figuras/[id]      Detalle de figura
/registrar                            Registro de figura (QR simulado)
/recompensas                          Recompensas
/perfil                               Perfil de coleccionista
```

### Estado demo (seed)

Coincide con los mockups: Cartoon Network 18/25 (faltan Jake translúcido, Él,
Ben 10, Cuatro Brazos, Dexter, Dee Dee, Garnet), Monstruos del Multiverso 9/20,
Héroes en Acción 3/18, Dulces Amigos e históricas completas. `resetDemo()`
restaura este estado para demos con stakeholders.

### Reglas de producto codificadas

- Orden de colecciones por relevancia (destacada → nueva → fecha), nunca alfabético.
- Toda pantalla responde: ¿dónde estoy? · ¿qué me falta? · ¿qué hago ahora? · ¿qué gané?
- Recompensas = activos digitales (wallpaper, badge, póster, arte) por hitos 25/50/75/100%.

## Desarrollo local (opcional)

```bash
npm install
npm run dev
```
