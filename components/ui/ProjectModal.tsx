"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data/projects";
import { getSkillIcon } from "@/lib/data/skillIcons";
import { getProjectImageSrc } from "@/lib/data/projectImages";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
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

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement;
    modalRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-title-${project.id}`}>
      <div
        ref={modalRef}
        className="relative max-h-full w-full max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-lg outline-none dark:bg-white/[0.04] dark:backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 rounded-full p-1.5 text-slate-500 hover:bg-slate-100 dark:text-zinc-400 dark:hover:bg-white/10"
          aria-label="Close modal">
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="mb-4 flex items-start gap-3">
          <span
            className={`h-2.5 w-2.5 shrink-0 rounded-full ${accentDot[project.accent]}`}
            aria-hidden
          />
          <h3
            id={`project-title-${project.id}`}
            className="text-xl font-semibold tracking-tight text-slate-900 dark:text-zinc-50">
            {project.title}
          </h3>
        </div>

        <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-md bg-slate-100 dark:bg-white/5">
          <Image
            src={getProjectImageSrc(project.id)}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </div>

        <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => {
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
              className={`inline-flex items-center gap-1.5 rounded-lg border bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-sm transition-all duration-200 dark:bg-white/[0.02] ${accentButton[project.accent]}`}>
              <ExternalLinkIcon />
              View Repo
            </a>
          ) : null}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-lg border bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-sm transition-all duration-200 dark:bg-white/[0.02] ${accentButton[project.accent]}`}>
              <PlayIcon />
              View Demo
            </a>
          ) : !project.repoUrl ? (
            <span className="text-xs text-slate-500 dark:text-zinc-500">
              Private
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 opacity-80"
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
      className="h-3.5 w-3.5 opacity-80"
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
