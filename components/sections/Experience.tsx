"use client";

import { useApp } from "@/components/providers/AppProvider";
import { experienceEntries } from "@/lib/data/experience";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { surface } from "@/lib/styles/theme";

export function Experience() {
  const { t } = useApp();

  return (
    <section id="experience" className={`px-6 py-24 ${surface.section}`}>
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            {t.experience.label}
          </p>
          <h2 className={`mb-4 text-3xl font-bold tracking-tight sm:text-4xl ${surface.heading}`}>
            {t.experience.title}
          </h2>
          <p className={`mb-12 max-w-2xl ${surface.muted}`}>
            {t.experience.subtitle}
          </p>
        </ScrollReveal>

        <ol className={`relative space-y-8 border-l pl-8 sm:pl-10 ${surface.timeline}`}>
          {experienceEntries.map((item, index) => {
            const copy =
              t.experience.items[
                item.id as keyof typeof t.experience.items
              ];

            return (
              <li key={item.id} className="relative">
                <span
                  className={`absolute -left-[calc(2rem+5px)] top-2 h-2.5 w-2.5 rounded-full border-2 bg-emerald-500 sm:-left-[calc(2.5rem+5px)] dark:bg-emerald-400 ${surface.timelineDot}`}
                  aria-hidden
                />

                <ScrollReveal delay={index * 80}>
                  <article
                    className={`rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-300/30 sm:p-8 dark:hover:shadow-black/20 ${surface.card}`}
                  >
                    <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <div>
                        <h3 className={`text-xl font-semibold tracking-tight ${surface.heading}`}>
                          {item.company}
                        </h3>
                        <p className="mt-1 text-base font-medium text-emerald-700 dark:text-emerald-300/90">
                          {copy.role}
                        </p>
                      </div>
                      <span
                        className={`inline-flex w-fit shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${surface.pill}`}
                      >
                        {copy.duration}
                      </span>
                    </div>

                    <p className={`text-sm leading-relaxed sm:text-base ${surface.muted}`}>
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
