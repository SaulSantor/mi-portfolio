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
  cyan: "text-cyan-600 dark:text-cyan-400",
  violet: "text-violet-600 dark:text-violet-400",
  emerald: "text-emerald-600 dark:text-emerald-400",
  amber: "text-amber-600 dark:text-amber-400",
  rose: "text-rose-600 dark:text-rose-400",
};

export function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className={`px-6 py-24 ${surface.section}`}>
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-600 dark:text-violet-400">
            {t.skills.label}
          </p>
          <h2 className={`mb-4 text-3xl font-bold tracking-tight sm:text-4xl ${surface.heading}`}>
            {t.skills.title}
          </h2>
          <p className={`mb-12 max-w-2xl ${surface.muted}`}>
            {t.skills.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category, index) => {
            const label =
              t.skills.categories[
                category.id as keyof typeof t.skills.categories
              ];
            const skills =
              category.id === "cms"
                ? [t.skills.items.cms]
                : category.skills;

            return (
              <ScrollReveal
                key={category.id}
                delay={index * 60}
                className={category.id === "cms" ? "sm:col-span-2" : ""}
              >
                <div
                  className={`h-full rounded-2xl border p-5 transition-colors hover:border-zinc-400 sm:p-6 dark:hover:border-zinc-700 ${surface.cardSolid}`}
                >
                  <h3
                    className={`mb-4 text-sm font-semibold uppercase tracking-wider ${labelAccent[category.accent]}`}
                  >
                    {label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
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
