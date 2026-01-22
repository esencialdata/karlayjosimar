import type { Metadata } from "next";
import { Space_Grotesk, Inter, Playfair_Display, Pinyon_Script } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Boda Karla & Josimar",
  description: "Estás invitado a celebrar con nosotros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${playfair.variable} ${pinyon.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
