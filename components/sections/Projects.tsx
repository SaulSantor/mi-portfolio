"use client";

import { useApp } from "@/components/providers/AppProvider";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { surface } from "@/lib/styles/theme";

export function Projects() {
  const { t } = useApp();

  return (
    <section
      id="projects"
      className={`bg-white px-6 py-24 dark:bg-transparent sm:py-32 ${surface.section}`}
    >
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <p className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
            {t.projects.label}
          </p>
          <h2 className={`mb-4 text-3xl font-bold tracking-tight sm:text-4xl ${surface.heading}`}>
            {t.projects.title}
          </h2>
          <p className={`mb-12 max-w-2xl ${surface.muted}`}>
            {t.projects.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 60}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
