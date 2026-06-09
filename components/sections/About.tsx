"use client";

import { useApp } from "@/components/providers/AppProvider";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { surface } from "@/lib/styles/theme";
import { siteConfig } from "@/lib/data/site";
import Image from "next/image";

export function About() {
  const { t } = useApp();

  return (
    <section
      id="about"
      className={`bg-slate-50 px-6 py-24 dark:bg-transparent sm:py-32 ${surface.section}`}
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
          {/* Text + highlights */}
          <div>
            <ScrollReveal delay={80}>
              <div className={`space-y-4 text-base leading-relaxed ${surface.muted}`}>
                {t.about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>

            {/* Highlights grid */}
            <ScrollReveal delay={160}>
              <dl className="mt-8 grid grid-cols-2 gap-3">
                {t.about.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
                  >
                    <dt className="mb-0.5 text-[10px] font-semibold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
                      {h.label}
                    </dt>
                    <dd className="text-sm font-medium text-slate-800 dark:text-zinc-200">
                      {h.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>

          {/* Photo */}
          <ScrollReveal delay={220}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-2xl opacity-40 blur-2xl dark:opacity-30"
                  style={{ background: "linear-gradient(135deg, #22d3ee, #818cf8)" }}
                  aria-hidden
                />
                <div className="relative h-80 w-64 overflow-hidden rounded-2xl border border-slate-200 shadow-lg sm:h-96 sm:w-72 dark:border-white/10">
                  <Image
                    src={siteConfig.avatar}
                    alt={`Foto de ${siteConfig.name}`}
                    fill
                    sizes="(max-width: 640px) 256px, 288px"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
