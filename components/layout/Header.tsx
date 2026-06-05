"use client";

import { useEffect, useState } from "react";
import { useApp } from "@/components/providers/AppProvider";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { navItems } from "@/lib/i18n/translations";
import { surface } from "@/lib/styles/theme";

export function Header() {
  const { t } = useApp();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? `border-b ${surface.headerScrolled}` : "bg-transparent"
      }`}>
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <a
          href="#hero"
          className="shrink-0 text-sm font-semibold tracking-tight text-zinc-900 transition-colors hover:text-cyan-600 dark:text-zinc-100 dark:hover:text-cyan-300">
          SS<span className="text-cyan-500 dark:text-cyan-400">.</span>
        </a>

        <ul className="hidden items-center gap-4 lg:flex xl:gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm transition-colors ${surface.navLink}`}>
                {t.nav[item.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />
          <LanguageToggle />
          <a
            href="#contact"
            className={`hidden rounded-full border px-3 py-1.5 text-sm font-medium transition-all sm:inline-flex ${surface.btnPrimary} hover:border-cyan-500/50 hover:text-cyan-700 dark:hover:text-cyan-200`}>
            {t.nav.contact}
          </a>
        </div>
      </nav>
    </header>
  );
}
