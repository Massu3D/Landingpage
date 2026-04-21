import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Massu3D | Impressão 3D",
  description:
    "Encomende peças 3D personalizadas, protótipos e soluções sob medida com atendimento rápido pelo WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
