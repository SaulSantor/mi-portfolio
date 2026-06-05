"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  getTranslations,
  type TranslationKeys,
} from "@/lib/i18n/translations";
import {
  LOCALE_STORAGE_KEY,
  THEME_STORAGE_KEY,
  type Locale,
  type Theme,
} from "@/lib/i18n/types";

type AppContextValue = {
  locale: Locale;
  theme: Theme;
  t: TranslationKeys;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  mounted: boolean;
};

const AppContext = createContext<AppContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "es";
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored === "en" ? "en" : "es";
}

function readStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === "light" ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
  root.style.colorScheme = theme;
}

function applyLocale(locale: Locale) {
  document.documentElement.lang = locale;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialLocale = readStoredLocale();
    const initialTheme = readStoredTheme();
    /* eslint-disable react-hooks/set-state-in-effect */
    setLocaleState(initialLocale);
    setThemeState(initialTheme);
    /* eslint-enable react-hooks/set-state-in-effect */
    applyTheme(initialTheme);
    applyLocale(initialLocale);
    setMounted(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
    applyLocale(next);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
    applyTheme(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === "es" ? "en" : "es");
  }, [locale, setLocale]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const t = useMemo(() => getTranslations(locale), [locale]);

  const value = useMemo(
    () => ({
      locale,
      theme,
      t,
      setLocale,
      toggleLocale,
      setTheme,
      toggleTheme,
      mounted,
    }),
    [
      locale,
      theme,
      t,
      setLocale,
      toggleLocale,
      setTheme,
      toggleTheme,
      mounted,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within AppProvider");
  }
  return context;
}
