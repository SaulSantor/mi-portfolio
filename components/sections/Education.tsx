"use client";

import { useApp } from "@/components/providers/AppProvider";
import { educationEntries } from "@/lib/data/education";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { surface } from "@/lib/styles/theme";

const statusStyles = {
  inProgress:
    "border-amber-500/50 bg-amber-50 text-amber-800 dark:border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-200",
  graduated:
    "border-emerald-500/50 bg-emerald-50 text-emerald-800 dark:border-emerald-400/40 dark:bg-emerald-400/10 dark:text-emerald-200",
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
    <section
      id="education"
      className={`bg-slate-100 px-6 py-24 dark:bg-transparent sm:py-32 ${surface.section}`}
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-300">
            {t.education.label}
          </p>
          <h2
            className={`mb-4 text-3xl font-bold tracking-tight sm:text-4xl ${surface.heading}`}
          >
            {t.education.title}
          </h2>
          <p className={`mb-12 max-w-2xl ${surface.muted}`}>
            {t.education.subtitle}
          </p>
        </ScrollReveal>

        <ol className={`relative space-y-8 pl-8 sm:pl-12 ${surface.timeline}`}>
          {educationEntries.map((entry, index) => {
            const entryCopy =
              t.education.entries[
                entry.id as keyof typeof t.education.entries
              ];

            return (
              <li key={entry.id} className="relative">
                <span
                  className="absolute -left-[2.45rem] top-3 flex h-4 w-4 items-center justify-center sm:-left-[3.45rem]"
                  aria-hidden
                >
                  <span className="absolute inset-0 rounded-full bg-sky-500/20 blur-md dark:bg-sky-400/30" />
                  <span className="relative h-3 w-3 rounded-full bg-white ring-2 ring-sky-500/70 dark:bg-zinc-950 dark:ring-sky-400/70">
                    <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500 shadow-[0_0_6px_rgba(14,165,233,0.5)] dark:bg-sky-400 dark:shadow-[0_0_10px_rgba(56,189,248,0.9)]" />
                  </span>
                </span>

                <ScrollReveal delay={index * 80}>
                  <article className="rounded-2xl border border-slate-200 border-l-2 border-l-sky-500 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_12px_30px_-12px_rgba(15,23,42,0.08)] sm:p-7 dark:border-white/10 dark:border-l-sky-400/70 dark:bg-white/[0.04] dark:backdrop-blur-xl dark:hover:border-sky-400/40 dark:hover:shadow-[0_20px_60px_-20px_rgba(56,189,248,0.25)]">
                    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                      <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-zinc-50">
                        {entry.institution}
                      </h3>
                      <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-sky-500/40 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-200">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                          />
                        </svg>
                        {entryCopy.modality}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {entry.degreeIds.map((degreeId) => {
                        const degree =
                          entryCopy.degrees[
                            degreeId as keyof typeof entryCopy.degrees
                          ];

                        return (
                          <li
                            key={degreeId}
                            className="flex flex-col gap-2 rounded-xl border border-slate-300 bg-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 dark:border-white/5 dark:bg-white/[0.02]"
                          >
                            <p className="font-medium text-slate-700 dark:text-zinc-200">
                              {degree.title}
                            </p>
                            <span
                              className={`inline-flex w-fit rounded-full border px-3 py-0.5 text-xs font-medium ${getStatusStyle(degree.status)}`}
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
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
