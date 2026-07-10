/**
 * Aplica el tema ANTES del primer paint (anti-FOUC).
 * Prioridad: preferencia guardada → preferencia del sistema.
 */
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem("lb-theme");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}if(t==="dark"){document.documentElement.classList.add("dark");}}catch(e){}})();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
