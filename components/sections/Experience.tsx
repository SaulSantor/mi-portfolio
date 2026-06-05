"use client";

import { useApp } from "@/components/providers/AppProvider";
import { experienceEntries } from "@/lib/data/experience";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { surface } from "@/lib/styles/theme";

export function Experience() {
  const { t } = useApp();

  return (
    <section
      id="experience"
      className={`bg-white px-6 py-24 dark:bg-transparent sm:py-32 ${surface.section}`}
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
            {t.experience.label}
          </p>
          <h2
            className={`mb-4 text-3xl font-bold tracking-tight sm:text-4xl ${surface.heading}`}
          >
            {t.experience.title}
          </h2>
          <p className={`mb-12 max-w-2xl ${surface.muted}`}>
            {t.experience.subtitle}
          </p>
        </ScrollReveal>

        <ol className={`relative space-y-8 pl-8 sm:pl-12 ${surface.timeline}`}>
          {experienceEntries.map((item, index) => {
            const copy =
              t.experience.items[
                item.id as keyof typeof t.experience.items
              ];

            return (
              <li key={item.id} className="relative">
                <span
                  className="absolute -left-[2.45rem] top-3 flex h-4 w-4 items-center justify-center sm:-left-[3.45rem]"
                  aria-hidden
                >
                  <span className="absolute inset-0 rounded-full bg-emerald-500/20 blur-md dark:bg-emerald-400/30" />
                  <span className="relative h-3 w-3 rounded-full bg-white ring-2 ring-emerald-500/70 dark:bg-zinc-950 dark:ring-emerald-400/70">
                    <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)] dark:bg-emerald-400 dark:shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                  </span>
                </span>

                <ScrollReveal delay={index * 80}>
                  <article className="rounded-2xl border border-slate-200 border-l-2 border-l-emerald-500 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_12px_30px_-12px_rgba(15,23,42,0.08)] sm:p-7 dark:border-white/10 dark:border-l-emerald-400/70 dark:bg-white/[0.04] dark:backdrop-blur-xl dark:hover:border-emerald-400/40 dark:hover:shadow-[0_20px_60px_-20px_rgba(52,211,153,0.25)]">
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-zinc-50">
                          {item.company}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                          {copy.role}
                        </p>
                      </div>
                      <span className="inline-flex w-fit shrink-0 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                        {copy.duration}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-slate-600 sm:text-base dark:text-zinc-400">
                      {copy.description}
                    </p>
                  </article>
                </ScrollReveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
