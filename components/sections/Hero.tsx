"use client";

import { useApp } from "@/components/providers/AppProvider";
import { siteConfig } from "@/lib/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { surface } from "@/lib/styles/theme";

export function Hero() {
  const { t } = useApp();

  return (
    <section
      id="hero"
      className={`relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-20 ${surface.section}`}>
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl dark:bg-cyan-500/10" />
        <div className="absolute right-1/4 top-1/4 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl dark:bg-violet-500/10" />
        <div className="absolute bottom-1/4 left-1/4 h-48 w-48 rounded-full bg-amber-500/12 blur-3xl dark:bg-amber-500/8" />
      </div>

      <ScrollReveal className="mx-auto max-w-3xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="relative grid h-20 w-20 place-items-center rounded-full bg-zinc-950 shadow-lg shadow-zinc-500/20 ring-1 ring-white/10 dark:bg-zinc-900">
            <div
              className="absolute inset-[3px] rounded-full bg-gradient-to-br from-cyan-400 via-cyan-500 to-violet-500 opacity-90"
              aria-hidden
            />
            <span className="relative text-xl font-extrabold tracking-wide text-zinc-950">
              SS
            </span>
          </div>
        </div>

        <p
          className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm ${surface.heroBadge}`}>
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-emerald-400" />
          {t.hero.badge}
        </p>

        <h1
          className={`mb-6 text-4xl font-bold tracking-tight sm:text-6xl sm:leading-[1.1] ${surface.heading}`}>
          {t.hero.greeting}{" "}
          <span className="bg-gradient-to-r from-cyan-600 via-violet-600 to-amber-600 bg-clip-text text-transparent dark:from-cyan-300 dark:via-violet-300 dark:to-amber-200">
            {siteConfig.name}
          </span>
        </h1>

        <p
          className={`mb-3 text-xl font-medium sm:text-2xl ${surface.subheading}`}>
          {t.meta.role}
        </p>

        <p
          className={`mx-auto mb-10 max-w-xl text-base leading-relaxed sm:text-lg ${surface.muted}`}>
          {t.meta.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/25 dark:bg-cyan-500 dark:text-zinc-950 dark:hover:bg-cyan-400">
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contact"
            className={`rounded-full border px-6 py-3 text-sm font-medium transition-all ${surface.btnGhost}`}>
            {t.hero.ctaContact}
          </a>
        </div>
      </ScrollReveal>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-400 dark:text-zinc-600">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
