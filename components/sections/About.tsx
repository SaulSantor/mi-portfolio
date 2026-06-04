"use client";

import { useApp } from "@/components/providers/AppProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { surface } from "@/lib/styles/theme";

export function About() {
  const { t } = useApp();

  return (
    <section id="about" className={`px-6 py-24 ${surface.section}`}>
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
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
            <ul className="grid grid-cols-2 gap-4">
              {t.about.highlights.map((item) => (
                <li
                  key={item.label}
                  className={`rounded-xl border p-4 transition-colors hover:border-zinc-400 dark:hover:border-zinc-700 ${surface.cardSolid}`}
                >
                  <p className={`mb-1 text-xs font-medium uppercase tracking-wider ${surface.faint}`}>
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
