"use client";

import { useApp } from "@/components/providers/AppProvider";
import { skillCategories } from "@/lib/data/skills";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { surface } from "@/lib/styles/theme";

const labelAccent: Record<
  (typeof skillCategories)[number]["accent"],
  string
> = {
  cyan: "text-cyan-700 dark:text-cyan-300",
  violet: "text-violet-700 dark:text-violet-300",
  emerald: "text-emerald-700 dark:text-emerald-300",
  amber: "text-amber-700 dark:text-amber-300",
  rose: "text-rose-700 dark:text-rose-300",
};

const cardAccent: Record<
  (typeof skillCategories)[number]["accent"],
  string
> = {
  cyan: "before:bg-gradient-to-r before:from-cyan-500/0 before:via-cyan-500/40 before:to-cyan-500/0 dark:before:via-cyan-400/40",
  violet:
    "before:bg-gradient-to-r before:from-violet-500/0 before:via-violet-500/40 before:to-violet-500/0 dark:before:via-violet-400/40",
  emerald:
    "before:bg-gradient-to-r before:from-emerald-500/0 before:via-emerald-500/40 before:to-emerald-500/0 dark:before:via-emerald-400/40",
  amber:
    "before:bg-gradient-to-r before:from-amber-500/0 before:via-amber-500/40 before:to-amber-500/0 dark:before:via-amber-400/40",
  rose: "before:bg-gradient-to-r before:from-rose-500/0 before:via-rose-500/40 before:to-rose-500/0 dark:before:via-rose-400/40",
};

export function Skills() {
  const { t } = useApp();

  return (
    <section
      id="skills"
      className={`bg-slate-100 px-6 py-24 dark:bg-transparent sm:py-32 ${surface.section}`}
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-violet-700 dark:text-violet-300">
            {t.skills.label}
          </p>
          <h2
            className={`mb-4 text-3xl font-bold tracking-tight sm:text-4xl ${surface.heading}`}
          >
            {t.skills.title}
          </h2>
          <p className={`mb-12 max-w-2xl ${surface.muted}`}>
            {t.skills.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, index) => {
            const label =
              t.skills.categories[
                category.id as keyof typeof t.skills.categories
              ];

            return (
              <ScrollReveal key={category.id} delay={index * 60}>
                <div
                  className={`group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_12px_30px_-12px_rgba(6,182,212,0.25)] sm:p-7 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px dark:border-white/10 dark:bg-white/[0.04] dark:backdrop-blur-xl dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] dark:hover:border-cyan-400/30 dark:hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.25)] ${cardAccent[category.accent]}`}
                >
                  <h3
                    className={`mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${labelAccent[category.accent]}`}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-current"
                      aria-hidden
                    />
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <SkillBadge
                        key={skill}
                        label={skill}
                        accent={category.accent}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
