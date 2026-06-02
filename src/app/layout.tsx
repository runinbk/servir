import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400"],
  style: ["italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SERVIR | Transformando Vidas, Construyendo Futuros",
  description: "Organización civil sin fines de lucro que promueve principios y valores para la prevención del delito y la violencia a través de una red de organizaciones en Bolivia. Cursos 100% gratuitos.",
  keywords: ["SERVIR", "prevención violencia", "cursos gratuitos", "valores", "juventud", "Bolivia", "Santa Cruz de la Sierra"],
  icons: {
    icon: "/assets/logo-icono-servir.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakarta.variable} ${instrumentSerif.variable} ${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
