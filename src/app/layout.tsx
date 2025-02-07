import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bergaglio & Asociados - Estudio Jurídico",
  description: "Estudio jurídico especializado en derecho laboral, civil y comercial",
  keywords: ["abogados", "derecho laboral", "derecho civil", "derecho comercial", "Santa Fe", "Argentina"],
  icons: {
    icon: [
      { url: '/images/cropped-favicon-32x32.jpg', sizes: '32x32', type: 'image/jpeg' },
      { url: '/images/favicon-150x150.jpg', sizes: '150x150', type: 'image/jpeg' },
      { url: '/images/favicon-300x300.jpg', sizes: '300x300', type: 'image/jpeg' }
    ],
    shortcut: [{ url: '/images/favicon-32x32.jpg', type: 'image/jpeg' }],
    apple: [{ url: '/images/favicon-150x150.jpg', type: 'image/jpeg' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/favicon-32x32.jpg" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
