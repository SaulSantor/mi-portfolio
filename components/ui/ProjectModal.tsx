"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "@/lib/data/projects";
import { getSkillIcon } from "@/lib/data/skillIcons";
import { getProjectImageSrc } from "@/lib/data/projectImages";
import { useApp } from "@/components/providers/AppProvider";

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
  const { t } = useApp();
  const copy = t.projects.items[project.id as keyof typeof t.projects.items];
  const description = copy.longDescription;
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Trigger entrance animation on mount
  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  // Animated close: run exit animation then call onClose
  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 200);
  };

  useEffect(() => {
    previouslyFocused.current = document.activeElement as HTMLElement;
    modalRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused.current?.focus();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-200 ${
        visible ? "bg-black/75" : "bg-black/0"
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`project-title-${project.id}`}>
      <div
        ref={modalRef}
        className={`relative max-h-full w-full max-w-lg overflow-y-auto rounded-lg bg-white/[0.75] p-6 shadow-lg outline-none dark:bg-white/[0.1] dark:backdrop-blur-xl transition-all duration-200 ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}>
        <button
          onClick={handleClose}
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
          {imgError ? (
            // Fallback cuando la imagen no existe
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate-400 dark:text-zinc-600">
              <svg
                className="h-10 w-10 opacity-40"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
                aria-hidden>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 19.5h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              <span className="text-xs font-medium opacity-50">
                {t.projects.noImage}
              </span>
            </div>
          ) : (
            <Image
              src={getProjectImageSrc(project.id)}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-center transition-opacity duration-200"
              sizes="(max-width: 640px) 100vw, 640px"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
          {description}
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
              {t.projects.viewRepo}
            </a>
          ) : null}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-lg border bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700 backdrop-blur-sm transition-all duration-200 dark:bg-white/[0.02] ${accentButton[project.accent]}`}>
              <PlayIcon />
              {t.projects.viewDemo}
            </a>
          ) : !project.repoUrl ? (
            <span className="text-xs text-slate-500 dark:text-zinc-500">
              {t.projects.private}
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
