"use client";

import { useApp } from "@/components/providers/AppProvider";
import { siteConfig } from "@/lib/data/site";
import { surface } from "@/lib/styles/theme";

export function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();

  return (
    <footer className={`border-t py-8 ${surface.borderSoft}`}>
      <div
        className={`mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 text-sm sm:flex-row ${surface.faint}`}>
        <p>
          © {year} {siteConfig.name}. {t.footer.builtWith}
        </p>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-zinc-700 dark:hover:text-zinc-300">
          GitHub
        </a>
      </div>
    </footer>
  );
}
