import type { Metadata } from "next";
import { Space_Grotesk, Inter, Playfair_Display, Pinyon_Script, Great_Vibes } from "next/font/google";
import "./globals.css";
import { MusicPlayer } from "@/components/MusicPlayer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Boda Karla & Josimar | 04.04.2026",
  description: "Acompáñanos a celebrar nuestro gran día. Detalles, ubicación y confirmación de asistencia.",
  keywords: ["Boda", "Karla y Josimar", "Invitación de Boda", "Eventos Monterrey"],
  authors: [{ name: "Karla y Josimar" }],
  openGraph: {
    title: "Boda Karla & Josimar",
    description: "Estás invitado a celebrar con nosotros.",
    url: "https://karlayjosimar.com",
    siteName: "Boda Karla & Josimar",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${playfair.variable} ${pinyon.variable} ${greatVibes.variable} antialiased bg-[#F0F0F0] text-black overflow-x-hidden`}
      >
        <div className="mx-auto w-full max-w-5xl bg-white min-h-screen shadow-2xl relative">
          {children}
        </div>
        <MusicPlayer />
      </body>
    </html>
  );
}
