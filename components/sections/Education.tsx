"use client";

import { useApp } from "@/components/providers/AppProvider";
import { educationEntries } from "@/lib/data/education";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { surface } from "@/lib/styles/theme";

const statusStyles = {
  inProgress:
    "border-amber-500/50 bg-amber-500/15 text-amber-800 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-200",
  graduated:
    "border-emerald-500/50 bg-emerald-500/15 text-emerald-800 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200",
} as const;

function getStatusStyle(status: string) {
  const inProgress = ["En curso", "In progress"];
  return inProgress.includes(status)
    ? statusStyles.inProgress
    : statusStyles.graduated;
}

export function Education() {
  const { t } = useApp();

  return (
    <section id="education" className={`px-6 py-24 ${surface.section}`}>
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400">
            {t.education.label}
          </p>
          <h2 className={`mb-4 text-3xl font-bold tracking-tight sm:text-4xl ${surface.heading}`}>
            {t.education.title}
          </h2>
          <p className={`mb-12 max-w-2xl ${surface.muted}`}>
            {t.education.subtitle}
          </p>
        </ScrollReveal>

        <div className="space-y-6">
          {educationEntries.map((entry, index) => {
            const entryCopy =
              t.education.entries[
                entry.id as keyof typeof t.education.entries
              ];

            return (
              <ScrollReveal key={entry.id} delay={index * 80}>
                <article className={`rounded-2xl border p-6 sm:p-8 ${surface.card}`}>
                  <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <h3 className={`text-xl font-semibold tracking-tight ${surface.heading}`}>
                      {entry.institution}
                    </h3>
                    <span className="inline-flex w-fit shrink-0 rounded-full border border-sky-500/40 bg-sky-500/15 px-3 py-1 text-xs font-medium text-sky-800 dark:border-sky-500/35 dark:bg-sky-500/10 dark:text-sky-200">
                      {entryCopy.modality}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {entry.degreeIds.map((degreeId) => {
                      const degree =
                        entryCopy.degrees[
                          degreeId as keyof typeof entryCopy.degrees
                        ];

                      return (
                        <li
                          key={degreeId}
                          className={`flex flex-col gap-2 rounded-xl border p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${surface.cardInner}`}
                        >
                          <p className={`font-medium ${surface.subheading}`}>
                            {degree.title}
                          </p>
                          <span
                            className={`inline-flex rounded-full border px-3 py-0.5 text-xs font-medium ${getStatusStyle(degree.status)}`}
                          >
                            {degree.status}
                            {"detail" in degree && degree.detail
                              ? ` · ${degree.detail}`
                              : ""}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
