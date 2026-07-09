import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { StoreHydrator } from "@/components/layout/store-hydrator";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: {
    default: "Little Bites · Colecciones",
    template: "%s · Little Bites",
  },
  description:
    "La plataforma oficial para gestionar tus colecciones Little Bites: qué tienes, qué te falta y qué sigue.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6d28d9",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={nunito.variable}>
      <body className="min-h-dvh antialiased">
        <StoreHydrator />
        {children}
      </body>
    </html>
  );
}
