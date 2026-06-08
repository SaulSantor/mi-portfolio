"use client";

import { useApp } from "@/components/providers/AppProvider";
import { siteConfig } from "@/lib/data/site";
import { Typewriter } from "@/components/ui/Typewriter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

function ChevronDown() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 14l-7 7m0 0l-7-7m7 7V3"
      />
    </svg>
  );
}

/* function initialsOf(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
} */

export function Hero() {
  const { t, mounted } = useApp();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-50 px-6 pt-28 pb-20 dark:bg-transparent"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="hero-grid absolute inset-0" />
        <div className="absolute left-1/2 top-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-300/25 blur-3xl animate-blob dark:bg-cyan-500/20" />
        <div className="absolute right-1/4 top-1/3 h-80 w-80 rounded-full bg-violet-300/25 blur-3xl animate-blob-slow dark:bg-violet-500/20" />
        <div className="absolute -left-20 bottom-1/4 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl animate-blob dark:bg-cyan-400/15" />
        <div
          className="absolute inset-0 opacity-50 dark:opacity-40"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(34,211,238,0.10), transparent 25%, rgba(165,180,252,0.10) 50%, transparent 75%, rgba(34,211,238,0.10))",
            animation: "conic-spin 60s linear infinite",
            maskImage:
              "radial-gradient(ellipse 50% 40% at center, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 40% at center, black 30%, transparent 80%)",
          }}
        />
        {/* <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background: "linear-gradient(to bottom, transparent, #f8fafc)",
          }}
        /> */}
        <div
          className="absolute inset-x-0 bottom-0 hidden h-40 dark:block"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--color-canvas))",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* <ScrollReveal>
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-2 rounded-full opacity-70 blur-2xl animate-pulse-glow"
                style={{
                  background:
                    "conic-gradient(from 0deg, #22d3ee, #818cf8, #22d3ee)",
                }}
                aria-hidden
              />
              <div
                className="relative flex h-28 w-28 items-center justify-center rounded-full ring-2 ring-white/60 shadow-lg sm:h-32 sm:w-32 dark:ring-white/20 dark:shadow-none"
                style={{
                  background:
                    "conic-gradient(from 140deg, #06b6d4 0%, #22d3ee 30%, #818cf8 60%, #06b6d4 100%)",
                }}
              >
                <div className="flex h-[6.4rem] w-[6.4rem] items-center justify-center rounded-full bg-white text-slate-900 sm:h-28 sm:w-28 dark:bg-zinc-950 dark:text-zinc-50">
                  <span className="text-3xl font-bold tracking-tight sm:text-4xl">
                    {initialsOf(siteConfig.name)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal> */}

        <ScrollReveal delay={80}>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75 dark:bg-emerald-400" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            </span>
            {t.hero.badge}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={140}>
          <h1 className="mb-3 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
            <span className="block text-slate-900 dark:text-zinc-100">
              {t.hero.greeting}
            </span>
            <span className="gradient-text mt-1 block">
              {siteConfig.name}
            </span>
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={220}>
          <p
            className="mb-2 mt-2 text-xl font-semibold text-slate-700 sm:text-2xl dark:text-zinc-200"
            style={{ minHeight: "2.2em" }}
          >
            {mounted ? (
              <Typewriter
                text={t.meta.role}
                speed={55}
                deleteSpeed={35}
                pauseAfterWrite={2500}
                pauseAfterDelete={500}
              />
            ) : (
              <span aria-hidden>&nbsp;</span>
            )}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-zinc-400">
            {t.meta.tagline}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={380}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-medium text-slate-900 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.04] hover:border-cyan-600/50 hover:bg-cyan-600 hover:text-white hover:shadow-[0_12px_30px_-12px_rgba(6,182,212,0.3)] dark:border-white/15 dark:bg-white/[0.04] dark:text-zinc-100 dark:hover:border-cyan-600/40 dark:hover:bg-cyan-600 dark:hover:shadow-[0_12px_30px_-12px_rgba(6,182,212,0.4)]"
            >
              {t.hero.ctaProjects}
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-medium text-slate-900 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:bg-cyan-50/50 hover:shadow-[0_12px_30px_-12px_rgba(6,182,212,0.3)] dark:border-white/15 dark:bg-white/[0.04] dark:text-zinc-100 dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.07] dark:hover:shadow-[0_12px_30px_-12px_rgba(6,182,212,0.4)]"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </ScrollReveal>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-slate-400 dark:text-zinc-500">
        <ChevronDown />
      </div>
    </section>
  );
}
