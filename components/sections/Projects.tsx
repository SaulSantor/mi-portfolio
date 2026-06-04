"use client";

import { useApp } from "@/components/providers/AppProvider";
import { projects } from "@/lib/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { surface } from "@/lib/styles/theme";

export function Projects() {
  const { t } = useApp();

  return (
    <section id="projects" className={`px-6 py-24 ${surface.section}`}>
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-600 dark:text-violet-400">
            {t.projects.label}
          </p>
          <h2 className={`mb-4 text-3xl font-bold tracking-tight sm:text-4xl ${surface.heading}`}>
            {t.projects.title}
          </h2>
          <p className={`mb-12 max-w-2xl ${surface.muted}`}>
            {t.projects.subtitle}
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={index * 60}
              className={index === 0 ? "sm:col-span-2" : ""}
            >
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
