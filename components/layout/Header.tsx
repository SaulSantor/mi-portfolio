"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/components/providers/AppProvider";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { navItems } from "@/lib/i18n/translations";

function DownloadIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 opacity-80"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 3v12"
      />
    </svg>
  );
}

export function Header() {
  const { t, locale } = useApp();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // CV paths — place your files in /public/cv/
  const cvFile =
    locale === "es" ? "/cv/CV_SaulSanchez_ES.pdf" : "/cv/CV_SaulSanchez_EN.pdf";
  const cvLabel = locale === "es" ? "Descargar CV" : "Download CV";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(15,23,42,0.05)] supports-[backdrop-filter]:bg-white/70 dark:border-white/10 dark:bg-zinc-950/70 dark:supports-[backdrop-filter]:bg-zinc-950/60 dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6">
        <a
          href="#hero"
          aria-label="Inicio"
          className="group flex shrink-0 items-center gap-1 text-base font-bold tracking-tight"
        >
          <span className="gradient-text text-lg">SS</span>
          <span className="text-lg text-cyan-600 dark:text-cyan-400">.</span>
        </a>

        <ul className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-2 py-1 backdrop-blur-md shadow-sm lg:flex dark:border-white/10 dark:bg-white/[0.04]">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="whitespace-nowrap rounded-full px-3 py-1.5 text-sm text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-400 dark:hover:bg-white/5 dark:hover:text-zinc-50"
              >
                {t.nav[item.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />

          {/* CV download button — visible on sm+ */}
          <a
            href={cvFile}
            download
            className="hidden items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:border-cyan-500/50 hover:bg-cyan-50/50 hover:shadow-[0_12px_30px_-12px_rgba(6,182,212,0.3)] dark:border-white/15 dark:bg-white/[0.04] dark:text-zinc-100 dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.07] dark:hover:shadow-[0_12px_30px_-12px_rgba(6,182,212,0.4)] sm:inline-flex"
            aria-label={cvLabel}
          >
            <DownloadIcon />
            {cvLabel}
          </a>

          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-md shadow-[0_4px_20px_-6px_rgba(6,182,212,0.45)] transition-all duration-300 hover:scale-[1.03] hover:border-cyan-500/50 hover:bg-cyan-50/50 hover:shadow-[0_12px_30px_-12px_rgba(6,182,212,0.3)] dark:border-white/15 dark:bg-white/[0.04] dark:text-zinc-100 dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.07] dark:hover:shadow-[0_12px_30px_-12px_rgba(6,182,212,0.4)] sm:inline-flex"
          >
            {t.nav.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
