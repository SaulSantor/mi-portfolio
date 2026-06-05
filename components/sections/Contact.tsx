"use client";

import { useApp } from "@/components/providers/AppProvider";
import { siteConfig } from "@/lib/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { surface } from "@/lib/styles/theme";

function GitHubIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden>
      <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.34 10.86H5.67v8.47h2.67v-8.47zM7 9.73a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1zm12.33 10.6v-4.62c0-2.47-1.32-3.62-3.08-3.62-1.42 0-2.06.78-2.42 1.33v-1.14h-2.66c.03.75 0 8.05 0 8.05h2.66v-4.5c0-.24.02-.48.09-.66.19-.48.63-.98 1.36-.98.96 0 1.34.73 1.34 1.8v4.34h2.71z" />
    </svg>
  );
}

export function Contact() {
  const { t } = useApp();

  return (
    <section id="contact" className={`px-6 py-24 ${surface.section}`}>
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div
            className={`rounded-3xl border p-8 sm:p-12 ${surface.contactCard}`}>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-amber-600 dark:text-amber-400">
              {t.contact.label}
            </p>
            <h2
              className={`mb-4 text-3xl font-bold tracking-tight sm:text-4xl ${surface.heading}`}>
              {t.contact.title}
            </h2>
            <p className={`mb-10 max-w-lg ${surface.muted}`}>
              {t.contact.subtitle}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 rounded-xl border px-6 py-4 font-medium transition-all ${surface.btnPrimary}`}>
                <GitHubIcon />
                {t.contact.githubCta}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-3 rounded-xl border px-6 py-4 font-medium transition-all ${surface.btnPrimary}`}>
                <LinkedInIcon />
                LinkedIn
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className={`inline-flex items-center justify-center gap-3 rounded-xl px-6 py-4 font-medium transition-all hover:shadow-lg ${surface.emailBtn}`}>
                <MailIcon />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
