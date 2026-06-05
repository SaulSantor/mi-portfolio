import { useMemo } from "react";
import type { SkillCategory } from "@/lib/data/skills";
import { getSkillIcon } from "@/lib/data/skillIcons";

const accentBorderStyles: Record<SkillCategory["accent"], string> = {
  cyan: "border-cyan-500/40 bg-cyan-50/60 text-cyan-800 hover:border-cyan-500/60 hover:bg-cyan-50 dark:border-cyan-400/30 dark:bg-cyan-500/10 dark:text-cyan-200 dark:hover:border-cyan-400/50 dark:hover:bg-cyan-500/15",
  violet:
    "border-violet-500/40 bg-violet-50/60 text-violet-800 hover:border-violet-500/60 hover:bg-violet-50 dark:border-violet-400/30 dark:bg-violet-500/10 dark:text-violet-200 dark:hover:border-violet-400/50 dark:hover:bg-violet-500/15",
  emerald:
    "border-emerald-500/40 bg-emerald-50/60 text-emerald-800 hover:border-emerald-500/60 hover:bg-emerald-50 dark:border-emerald-400/30 dark:bg-emerald-500/10 dark:text-emerald-200 dark:hover:border-emerald-400/50 dark:hover:bg-emerald-500/15",
  amber:
    "border-amber-500/40 bg-amber-50/60 text-amber-800 hover:border-amber-500/60 hover:bg-amber-50 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-200 dark:hover:border-amber-400/50 dark:hover:bg-amber-500/15",
  rose: "border-rose-500/40 bg-rose-50/60 text-rose-800 hover:border-rose-500/60 hover:bg-rose-50 dark:border-rose-400/30 dark:bg-rose-500/10 dark:text-rose-200 dark:hover:border-rose-400/50 dark:hover:bg-rose-500/15",
};

const accentTextStyles: Record<SkillCategory["accent"], string> = {
  cyan: "text-cyan-700 dark:text-cyan-300",
  violet: "text-violet-700 dark:text-violet-300",
  emerald: "text-emerald-700 dark:text-emerald-300",
  amber: "text-amber-700 dark:text-amber-300",
  rose: "text-rose-700 dark:text-rose-300",
};

type SkillBadgeProps = {
  label: string;
  accent: SkillCategory["accent"];
};

export function SkillBadge({ label, accent }: SkillBadgeProps) {
  const iconJsx = useMemo(() => {
    const Icon = getSkillIcon(label);
    return Icon ? Icon({ className: "h-4 w-4" }) : null;
  }, [label]);

  return (
    <span
      className={`group inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${accentBorderStyles[accent]}`}
    >
      {iconJsx ? (
        <span className="flex h-4 w-4 shrink-0 items-center justify-center">
          {iconJsx}
        </span>
      ) : (
        <span
          className={`h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-70 ${accentTextStyles[accent]}`}
          aria-hidden
        />
      )}
      {label}
    </span>
  );
}
