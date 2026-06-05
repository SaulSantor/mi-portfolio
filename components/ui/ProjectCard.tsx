"use client";

import { useApp } from "@/components/providers/AppProvider";
import type { Project } from "@/lib/data/projects";
import { Tag } from "./Tag";
import { surface } from "@/lib/styles/theme";

function ExternalLinkIcon() {
  return (
    <svg
      className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

const accentStyles: Record<Project["accent"], string> = {
  cyan: "from-cyan-500/25 to-cyan-500/5 border-cyan-500/40 group-hover:border-cyan-500/60 dark:from-cyan-500/20 dark:to-cyan-500/5 dark:border-cyan-500/30 dark:group-hover:border-cyan-400/50",
  violet:
    "from-violet-500/25 to-violet-500/5 border-violet-500/40 group-hover:border-violet-500/60 dark:from-violet-500/20 dark:to-violet-500/5 dark:border-violet-500/30 dark:group-hover:border-violet-400/50",
  amber:
    "from-amber-500/25 to-amber-500/5 border-amber-500/40 group-hover:border-amber-500/60 dark:from-amber-500/20 dark:to-amber-500/5 dark:border-amber-500/30 dark:group-hover:border-amber-400/50",
  rose: "from-rose-500/25 to-rose-500/5 border-rose-500/40 group-hover:border-rose-500/60 dark:from-rose-500/20 dark:to-rose-500/5 dark:border-rose-500/30 dark:group-hover:border-rose-400/50",
  emerald:
    "from-emerald-500/25 to-emerald-500/5 border-emerald-500/40 group-hover:border-emerald-500/60 dark:from-emerald-500/20 dark:to-emerald-500/5 dark:border-emerald-500/30 dark:group-hover:border-emerald-400/50",
};

const dotStyles: Record<Project["accent"], string> = {
  cyan: "bg-cyan-500 dark:bg-cyan-400",
  violet: "bg-violet-500 dark:bg-violet-400",
  amber: "bg-amber-500 dark:bg-amber-400",
  rose: "bg-rose-500 dark:bg-rose-400",
  emerald: "bg-emerald-500 dark:bg-emerald-400",
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useApp();
  const copy = t.projects.items[project.id as keyof typeof t.projects.items];
  const tags = copy && "tags" in copy && copy.tags ? copy.tags : project.tags;
  const description = copy?.description ?? project.description;

  return (
    <article
      className={`group relative flex h-full flex-col rounded-2xl border bg-gradient-to-br p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-300/40 dark:hover:shadow-black/20 ${accentStyles[project.accent]}`}>
      <div className="mb-4 flex items-start justify-between gap-3">
        <span
          className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${dotStyles[project.accent]}`}
          aria-hidden
        />
        <h3
          className={`flex-1 text-xl font-semibold tracking-tight ${surface.heading}`}>
          {project.title}
        </h3>
      </div>

      <p className={`mb-6 flex-1 text-sm leading-relaxed ${surface.muted}`}>
        {description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-cyan-700 dark:hover:text-white ${surface.subheading}`}>
            {t.projects.viewRepo}
            <ExternalLinkIcon />
          </a>
        ) : (
          <span className={`text-sm ${surface.faint}`}>
            {t.projects.private}
          </span>
        )}

        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-cyan-700 dark:hover:text-white ${surface.subheading}`}>
            Demo
            <ExternalLinkIcon />
          </a>
        ) : null}
      </div>
    </article>
  );
}
