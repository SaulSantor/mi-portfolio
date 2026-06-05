import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppProvider } from "@/components/providers/AppProvider";
import { ThemeScript } from "@/components/providers/ThemeScript";
import { siteConfig } from "@/lib/data/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — Frontend & Mobile Developer`,
  description:
    "Portfolio de Saul Sanchez — desarrollador frontend y mobile.",
  openGraph: {
    title: `${siteConfig.name} — Portfolio`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} dark h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-full font-sans text-zinc-50 antialiased">
        <AppProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
