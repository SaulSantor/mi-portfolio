/** Clases reutilizables para light/dark consistente en todo el portfolio */
export const surface = {
  /** Fondo de sección (el body ya define el fondo base en layout.tsx) */
  section: "transition-colors duration-300",
  heading: "text-zinc-900 dark:text-zinc-50",
  subheading: "text-zinc-700 dark:text-zinc-300",
  muted: "text-zinc-600 dark:text-zinc-400",
  faint: "text-zinc-500 dark:text-zinc-500",
  border: "border-zinc-200 dark:border-zinc-800",
  borderSoft: "border-zinc-200/80 dark:border-zinc-800/80",
  card: "border-zinc-200 bg-gradient-to-br from-zinc-100/90 to-zinc-50 dark:border-zinc-800 dark:from-zinc-900/80 dark:to-zinc-950",
  cardSolid:
    "border-zinc-200 bg-zinc-100/60 dark:border-zinc-800 dark:bg-zinc-900/40",
  cardInner:
    "border-zinc-200/80 bg-white/70 dark:border-zinc-800/80 dark:bg-zinc-900/40",
  headerScrolled:
    "border-zinc-200/80 bg-zinc-50/85 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80",
  pill: "border-zinc-300 bg-zinc-200/80 text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300",
  pillHover:
    "hover:border-zinc-400 hover:bg-zinc-300/80 dark:hover:border-zinc-500 dark:hover:bg-zinc-800",
  navLink:
    "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100",
  btnGhost:
    "border-zinc-300 text-zinc-800 hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-zinc-500 dark:hover:bg-zinc-900",
  btnPrimary:
    "border-zinc-300 bg-zinc-100 text-zinc-900 hover:border-zinc-400 hover:bg-white dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-zinc-800",
  tag: "border-zinc-300/80 bg-zinc-200/70 text-zinc-700 dark:border-zinc-700/80 dark:bg-zinc-800/60 dark:text-zinc-300",
  timeline: "border-zinc-300 dark:border-zinc-800",
  timelineDot: "border-zinc-50 dark:border-zinc-950",
  heroBadge:
    "border-zinc-200 bg-white/80 text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-400",
  contactCard:
    "border-zinc-200 bg-gradient-to-br from-zinc-100/90 to-zinc-50 dark:border-zinc-800 dark:from-zinc-900/80 dark:to-zinc-950",
  emailBtn:
    "bg-zinc-900 text-zinc-50 hover:bg-zinc-800 hover:shadow-zinc-900/10 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white dark:hover:shadow-white/10",
  toggle:
    "border-zinc-300 bg-zinc-100/80 text-zinc-600 hover:border-cyan-500/40 hover:text-cyan-700 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-400 dark:hover:border-cyan-500/50 dark:hover:text-cyan-300",
  toggleActive:
    "border-cyan-500/50 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
} as const;
