import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { StoreHydrator } from "@/components/layout/store-hydrator";
import { ThemeScript } from "@/components/layout/theme-script";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BottomNav } from "@/components/layout/bottom-nav";
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
    <html lang="es-MX" className={nunito.variable} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col antialiased">
        <ThemeScript />
        <StoreHydrator />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
