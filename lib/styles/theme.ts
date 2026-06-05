/** Clases reutilizables. Light como default, dark con variant `dark:`. */
export const surface = {
  /** Fondo de sección */
  section: "transition-colors duration-300",

  /** Tipografía */
  heading: "text-slate-900 dark:text-zinc-50",
  subheading: "text-slate-700 dark:text-zinc-200",
  muted: "text-slate-600 dark:text-zinc-400",
  faint: "text-slate-500 dark:text-zinc-500",

  /** Bordes */
  border: "border-slate-200 dark:border-white/10",
  borderSoft: "border-slate-200/70 dark:border-white/5",

  /** Cards */
  card: "bg-white border border-slate-200 shadow-[0_1px_3px_rgba(15,23,42,0.04),0_4px_12px_rgba(15,23,42,0.05)] dark:bg-white/[0.04] dark:border-white/10 dark:backdrop-blur-xl dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]",
  cardSolid:
    "bg-white border border-slate-200 dark:bg-white/[0.04] dark:border-white/10",
  cardInner:
    "bg-slate-50 border border-slate-200/80 dark:bg-white/[0.03] dark:border-white/5",
  cardHover:
    "hover:-translate-y-1 hover:shadow-[0_10px_30px_-12px_rgba(6,182,212,0.18)] hover:border-cyan-500/40 dark:hover:bg-white/[0.07] dark:hover:border-cyan-400/30 dark:hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.25)]",

  /** Header al hacer scroll */
  headerScrolled:
    "border-b border-slate-200 bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(15,23,42,0.05)] supports-[backdrop-filter]:bg-white/70 dark:border-white/10 dark:bg-zinc-950/70 dark:supports-[backdrop-filter]:bg-zinc-950/60 dark:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]",
  headerTop: "bg-transparent border-b border-transparent",

  /** Nav */
  navLink:
    "text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-zinc-50",

  /** Botones */
  btnPrimary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_8px_24px_-8px_rgba(6,182,212,0.45)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(34,211,238,0.55)] active:scale-[0.99]",
  btnGhost:
    "inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:bg-cyan-50/50 hover:shadow-[0_8px_24px_-8px_rgba(6,182,212,0.25)] dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 dark:hover:border-cyan-400/40 dark:hover:bg-white/10 dark:hover:shadow-[0_8px_24px_-8px_rgba(6,182,212,0.3)]",
  btnOutline:
    "inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-cyan-500/60 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-200 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-500/10 dark:hover:text-cyan-300",
  btnSolid:
    "inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-slate-800 hover:shadow-[0_8px_24px_-8px_rgba(15,23,42,0.2)] dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white",
  btnCta:
    "inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-900 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/50 hover:bg-cyan-50/30 hover:shadow-[0_12px_32px_-12px_rgba(6,182,212,0.25)] dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-100 dark:hover:border-cyan-400/40 dark:hover:bg-white/[0.07] dark:hover:shadow-[0_12px_32px_-12px_rgba(6,182,212,0.35)]",

  /** Tags / pills */
  tag: "inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 transition-colors hover:border-cyan-500/50 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:hover:border-cyan-400/30 dark:hover:text-cyan-200",
  pill: "inline-flex w-fit shrink-0 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300",

  /** Timeline */
  timeline: "border-l border-slate-200 dark:border-white/10",
  timelineDot:
    "absolute -left-[2.45rem] sm:-left-[2.95rem] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-slate-50 ring-2 ring-emerald-500/60 sm:left-[-2.95rem] dark:bg-zinc-950 dark:ring-emerald-400/60",
  timelineDotCyan:
    "absolute -left-[2.45rem] sm:-left-[2.95rem] top-2 flex h-4 w-4 items-center justify-center rounded-full bg-slate-50 ring-2 ring-cyan-500/60 dark:bg-zinc-950 dark:ring-cyan-400/60",
  timelineDotInner: "h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400",
  timelineDotInnerEmerald:
    "h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400",

  /** Badges / pills status */
  badgeInProgress:
    "border-amber-500/50 bg-amber-50 text-amber-800 dark:border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-200",
  badgeGraduated:
    "border-emerald-500/50 bg-emerald-50 text-emerald-800 dark:border-emerald-400/40 dark:bg-emerald-400/10 dark:text-emerald-200",
  badgeModality:
    "border-sky-500/50 bg-sky-50 text-sky-800 dark:border-sky-400/30 dark:bg-sky-400/10 dark:text-sky-200",

  /** Hero */
  heroBadge:
    "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300",
  heroAccentLine:
    "bg-gradient-to-r from-cyan-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-violet-300 dark:to-amber-200",
  heroScroll: "text-slate-400 dark:text-zinc-500",

  /** Contact card */
  contactCard:
    "rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.08)] sm:p-12 dark:border-white/10 dark:bg-gradient-to-br dark:from-white/[0.06] dark:to-white/[0.02] dark:backdrop-blur-xl dark:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]",
  emailBox:
    "rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors hover:border-cyan-500/40 hover:bg-cyan-50/50 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-cyan-400/30",

  /** Toggle (header) */
  toggle:
    "border border-slate-200 bg-white text-slate-500 transition-colors hover:border-cyan-500/50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-400 dark:hover:border-cyan-400/40 dark:hover:text-cyan-300",
  toggleActive:
    "border-cyan-500/60 bg-cyan-50 text-cyan-700 dark:border-cyan-400/50 dark:bg-cyan-500/15 dark:text-cyan-300",

  /** Footer */
  footer: "border-t border-slate-200 dark:border-white/5",
  footerLink:
    "text-slate-500 transition-colors hover:text-slate-900 dark:text-zinc-500 dark:hover:text-zinc-200",
} as const;
