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

const BASE_URL = "https://saulsanchez.dev"; // ← cambia a tu dominio real

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${siteConfig.name} — Frontend & Mobile Developer`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Desarrollador frontend y mobile. Especializado en React, Next.js y React Native. Creando interfaces limpias y apps que funcionan.",
  keywords: [
    "frontend developer",
    "mobile developer",
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "Chihuahua",
    "México",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.github }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: BASE_URL,
    siteName: `${siteConfig.name} — Portfolio`,
    title: `${siteConfig.name} — Frontend & Mobile Developer`,
    description:
      "Interfaces limpias, apps que funcionan y código con propósito.",
    images: [
      {
        url: "/og-image.png", // coloca tu imagen en /public/og-image.png (1200×630)
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Frontend & Mobile Developer`,
    description:
      "Interfaces limpias, apps que funcionan y código con propósito.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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
