import type { SkillCategory } from "@/lib/data/skills";

const accentStyles: Record<SkillCategory["accent"], string> = {
  cyan: "border-cyan-500/40 bg-cyan-500/15 text-cyan-800 hover:border-cyan-500/55 hover:bg-cyan-500/20 dark:border-cyan-500/35 dark:bg-cyan-500/10 dark:text-cyan-200 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-500/15",
  violet:
    "border-violet-500/40 bg-violet-500/15 text-violet-800 hover:border-violet-500/55 hover:bg-violet-500/20 dark:border-violet-500/35 dark:bg-violet-500/10 dark:text-violet-200 dark:hover:border-violet-400/50 dark:hover:bg-violet-500/15",
  emerald:
    "border-emerald-500/40 bg-emerald-500/15 text-emerald-800 hover:border-emerald-500/55 hover:bg-emerald-500/20 dark:border-emerald-500/35 dark:bg-emerald-500/10 dark:text-emerald-200 dark:hover:border-emerald-400/50 dark:hover:bg-emerald-500/15",
  amber:
    "border-amber-500/40 bg-amber-500/15 text-amber-800 hover:border-amber-500/55 hover:bg-amber-500/20 dark:border-amber-500/35 dark:bg-amber-500/10 dark:text-amber-200 dark:hover:border-amber-400/50 dark:hover:bg-amber-500/15",
  rose: "border-rose-500/40 bg-rose-500/15 text-rose-800 hover:border-rose-500/55 hover:bg-rose-500/20 dark:border-rose-500/35 dark:bg-rose-500/10 dark:text-rose-200 dark:hover:border-rose-400/50 dark:hover:bg-rose-500/15",
};

const dotStyles: Record<SkillCategory["accent"], string> = {
  cyan: "bg-cyan-500 dark:bg-cyan-400",
  violet: "bg-violet-500 dark:bg-violet-400",
  emerald: "bg-emerald-500 dark:bg-emerald-400",
  amber: "bg-amber-500 dark:bg-amber-400",
  rose: "bg-rose-500 dark:bg-rose-400",
};

type SkillBadgeProps = {
  label: string;
  accent: SkillCategory["accent"];
};

export function SkillBadge({ label, accent }: SkillBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${accentStyles[accent]}`}
    >
      <span
        className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotStyles[accent]}`}
        aria-hidden
      />
      {label}
    </span>
  );
}
