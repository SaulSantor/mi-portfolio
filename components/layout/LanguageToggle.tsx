"use client";

import { useApp } from "@/components/providers/AppProvider";
import { surface } from "@/lib/styles/theme";

export function LanguageToggle() {
  const { locale, setLocale, t, mounted } = useApp();

  return (
    <div
      className={`flex rounded-full border p-0.5 text-xs font-medium transition-all duration-300 ${surface.toggle} ${
        mounted ? "opacity-100" : "opacity-0"
      }`}
      role="group"
      aria-label={locale === "es" ? t.a11y.languageEn : t.a11y.languageEs}
    >
      {(["es", "en"] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLocale(lang)}
          className={`rounded-full px-2 py-1 uppercase tracking-wide transition-all duration-300 ${
            locale === lang
              ? surface.toggleActive
              : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
          }`}
          aria-pressed={locale === lang}
        >
          {lang}
        </button>
      ))}
    </div>
  );
}
