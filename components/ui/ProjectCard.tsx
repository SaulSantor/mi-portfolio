"use client";

import { useApp } from "@/components/providers/AppProvider";
import type { Project } from "@/lib/data/projects";
import { getSkillIcon } from "@/lib/data/skillIcons";

function ExternalLinkIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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

function PlayIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 opacity-80 transition-transform group-hover:scale-110"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.752 11.168l-5.197-3.03A1 1 0 008 9v6a1 1 0 001.555.832l5.197-3.03a1 1 0 000-1.664z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

const accentGlow: Record<Project["accent"], string> = {
  cyan: "group-hover:shadow-[0_12px_30px_-12px_rgba(6,182,212,0.25)] group-hover:border-cyan-500/50 dark:group-hover:shadow-[0_20px_60px_-20px_rgba(34,211,238,0.45)] dark:group-hover:border-cyan-400/40",
  violet:
    "group-hover:shadow-[0_12px_30px_-12px_rgba(139,92,246,0.22)] group-hover:border-violet-500/50 dark:group-hover:shadow-[0_20px_60px_-20px_rgba(165,180,252,0.4)] dark:group-hover:border-violet-400/40",
  amber:
    "group-hover:shadow-[0_12px_30px_-12px_rgba(245,158,11,0.22)] group-hover:border-amber-500/50 dark:group-hover:shadow-[0_20px_60px_-20px_rgba(251,191,36,0.35)] dark:group-hover:border-amber-400/40",
  rose: "group-hover:shadow-[0_12px_30px_-12px_rgba(244,63,94,0.22)] group-hover:border-rose-500/50 dark:group-hover:shadow-[0_20px_60px_-20px_rgba(251,113,133,0.35)] dark:group-hover:border-rose-400/40",
  emerald:
    "group-hover:shadow-[0_12px_30px_-12px_rgba(16,185,129,0.25)] group-hover:border-emerald-500/50 dark:group-hover:shadow-[0_20px_60px_-20px_rgba(52,211,153,0.4)] dark:group-hover:border-emerald-400/40",
};

const accentDot: Record<Project["accent"], string> = {
  cyan: "bg-cyan-500 dark:bg-cyan-400",
  violet: "bg-violet-500 dark:bg-violet-400",
  amber: "bg-amber-500 dark:bg-amber-400",
  rose: "bg-rose-500 dark:bg-rose-400",
  emerald: "bg-emerald-500 dark:bg-emerald-400",
};

const accentButton: Record<Project["accent"], string> = {
  cyan: "border-cyan-500/30 hover:bg-cyan-50 hover:border-cyan-500/60 hover:text-cyan-700 dark:border-cyan-400/30 dark:text-cyan-200 dark:hover:bg-cyan-500/10 dark:hover:border-cyan-400/60",
  violet:
    "border-violet-500/30 hover:bg-violet-50 hover:border-violet-500/60 hover:text-violet-700 dark:border-violet-400/30 dark:text-violet-200 dark:hover:bg-violet-500/10 dark:hover:border-violet-400/60",
  amber:
    "border-amber-500/30 hover:bg-amber-50 hover:border-amber-500/60 hover:text-amber-700 dark:border-amber-400/30 dark:text-amber-200 dark:hover:bg-amber-500/10 dark:hover:border-amber-400/60",
  rose: "border-rose-500/30 hover:bg-rose-50 hover:border-rose-500/60 hover:text-rose-700 dark:border-rose-400/30 dark:text-rose-200 dark:hover:bg-rose-500/10 dark:hover:border-rose-400/60",
  emerald:
    "border-emerald-500/30 hover:bg-emerald-50 hover:border-emerald-500/60 hover:text-emerald-700 dark:border-emerald-400/30 dark:text-emerald-200 dark:hover:bg-emerald-500/10 dark:hover:border-emerald-400/60",
};

type ProjectCardProps = {
  project: Project;
  onClick?: () => void;
};

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { t } = useApp();
  const copy = t.projects.items[project.id as keyof typeof t.projects.items];
  const tags = "tags" in copy && copy.tags ? copy.tags : project.tags;
  const description = copy.description;

  return (
    <article
      className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-1 sm:p-7 dark:border-white/10 dark:bg-white/[0.04] dark:backdrop-blur-xl dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] ${accentGlow[project.accent]}`}
      onClick={onClick}>
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <span
            className={`h-2.5 w-2.5 shrink-0 rounded-full ${accentDot[project.accent]}`}
            aria-hidden
          />
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-zinc-50">
            {project.title}
          </h3>
        </div>
      </div>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
        {description}
      </p>

      <div className="mb-5 flex flex-wrap gap-1.5">
        {tags.map((tag) => {
          const Icon = getSkillIcon(tag);
          return (
            <span
              key={tag}
              className={`inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700 transition-colors dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:text-white ${accentButton[project.accent]}`}>
              {Icon ? <Icon className="h-3 w-3" /> : null}
              {tag}
            </span>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn inline-flex items-center gap-1.5 rounded-lg border bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-sm transition-all duration-200 dark:bg-white/[0.02] ${accentButton[project.accent]}`}>
            <ExternalLinkIcon />
            {t.projects.viewRepo}
          </a>
        ) : null}
        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/btn inline-flex items-center gap-1.5 rounded-lg border bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-sm transition-all duration-200 dark:bg-white/[0.02] ${accentButton[project.accent]}`}>
            <PlayIcon />
            {t.projects.viewDemo}
          </a>
        ) : !project.repoUrl ? (
          <span className="text-xs text-slate-500 dark:text-zinc-500">
            {t.projects.private}
          </span>
        ) : null}
      </div>
    </article>
  );
}
