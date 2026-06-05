"use client";

import { useApp } from "@/components/providers/AppProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { surface } from "@/lib/styles/theme";

export function About() {
  const { t } = useApp();

  return (
    <section
      id="about"
      className={`bg-white px-6 py-24 dark:bg-transparent sm:py-32 ${surface.section}`}
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
            {t.about.label}
          </p>
          <h2 className={`mb-8 text-3xl font-bold tracking-tight sm:text-4xl ${surface.heading}`}>
            {t.about.title}
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <ScrollReveal delay={80}>
            <div className={`space-y-4 text-base leading-relaxed ${surface.muted}`}>
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <ul className="grid grid-cols-2 gap-3">
              {t.about.highlights.map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/40 hover:shadow-[0_8px_20px_-8px_rgba(6,182,212,0.2)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-cyan-400/30"
                >
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-zinc-500">
                    {item.label}
                  </p>
                  <p className={`text-sm font-medium ${surface.subheading}`}>
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
