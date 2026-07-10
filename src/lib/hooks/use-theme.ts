"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const EVENT = "lb-theme-change";

/**
 * Estado del tema sincronizado entre todos los consumidores (navbar, perfil).
 * La clase .dark en <html> es la fuente de verdad; localStorage la persiste.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    const sync = () =>
      setThemeState(document.documentElement.classList.contains("dark") ? "dark" : "light");
    sync();
    window.addEventListener(EVENT, sync);
    return () => window.removeEventListener(EVENT, sync);
  }, []);

  const setTheme = (t: Theme) => {
    document.documentElement.classList.toggle("dark", t === "dark");
    try {
      localStorage.setItem("lb-theme", t);
    } catch {}
    window.dispatchEvent(new Event(EVENT));
  };

  return {
    theme,
    setTheme,
    toggle: () => setTheme(theme === "dark" ? "light" : "dark"),
  };
}
