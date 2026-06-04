import { LOCALE_STORAGE_KEY, THEME_STORAGE_KEY } from "@/lib/i18n/types";

/** Evita flash de tema/idioma incorrecto antes de hidratar React */
export function ThemeScript() {
  const script = `
(function () {
  try {
    var theme = localStorage.getItem("${THEME_STORAGE_KEY}");
    var locale = localStorage.getItem("${LOCALE_STORAGE_KEY}");
    var root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    } else {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    }
    root.lang = locale === "en" ? "en" : "es";
  } catch (e) {}
})();
`;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
      suppressHydrationWarning
    />
  );
}
