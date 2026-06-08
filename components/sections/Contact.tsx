"use client";

import { useApp } from "@/components/providers/AppProvider";
import { siteConfig } from "@/lib/data/site";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { surface } from "@/lib/styles/theme";
import { useState } from "react";

function GitHubIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
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
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.268 2.37 4.268 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      className="h-4 w-4 opacity-70 transition-transform duration-300 group-hover:translate-x-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}

export function Contact() {
  const { t } = useApp();
  const [copied, setCopied] = useState(false);

  const email = `${siteConfig.emailUser}@${siteConfig.emailDomain}`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className={`bg-slate-50 px-6 py-24 dark:bg-transparent sm:py-32 ${surface.section}`}
    >
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-3xl p-8 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.08)] sm:p-12">
            {/* <div
              className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-500/20"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-500/20"
              aria-hidden
            /> */}

            <div className="relative">
              <p className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-300">
                {t.contact.label}
              </p>
              <h2
                className={`mb-4 text-3xl font-bold tracking-tight sm:text-4xl ${surface.heading}`}
              >
                {t.contact.title}
              </h2>
              <p className={`mb-10 max-w-lg ${surface.muted}`}>
                {t.contact.subtitle}
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900/30 hover:shadow-[0_12px_30px_-12px_rgba(15,23,42,0.15)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-zinc-50/30 dark:hover:bg-white/[0.08] dark:hover:shadow-[0_12px_30px_-12px_rgba(255,255,255,0.2)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-900 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50">
                    <GitHubIcon />
                  </span>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900 dark:text-zinc-100">
                      {t.contact.githubCta}
                    </span>
                    <ArrowRightIcon />
                  </div>
                  <span className="font-mono text-xs text-slate-500 dark:text-zinc-500">
                    SaulSantor
                  </span>
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-500/60 hover:bg-cyan-50/30 hover:shadow-[0_12px_30px_-12px_rgba(6,182,212,0.25)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-cyan-400/40 dark:hover:bg-cyan-500/[0.08] dark:hover:shadow-[0_12px_30px_-12px_rgba(34,211,238,0.35)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-cyan-700 dark:border-white/10 dark:bg-zinc-950 dark:text-cyan-300">
                    <LinkedInIcon />
                  </span>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900 dark:text-zinc-100">
                      {t.contact.linkedinCta}
                    </span>
                    <ArrowRightIcon />
                  </div>
                  <span className="font-mono text-xs text-slate-500 dark:text-zinc-500">
                    in/santor080602
                  </span>
                </a>

                <a
                  href={`mailto:${email}`}
                  className="group flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/60 hover:bg-violet-50/30 hover:shadow-[0_12px_30px_-12px_rgba(139,92,246,0.25)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-violet-400/40 dark:hover:bg-violet-500/[0.08] dark:hover:shadow-[0_12px_30px_-12px_rgba(165,180,252,0.35)]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-violet-700 dark:border-white/10 dark:bg-zinc-950 dark:text-violet-300">
                    <MailIcon />
                  </span>
                  <div className="flex w-full items-center justify-between">
                    <span className="text-sm font-semibold text-slate-900 dark:text-zinc-100">
                      {t.contact.emailCta}
                    </span>
                    <ArrowRightIcon />
                  </div>
                  <span className="break-all font-mono text-xs text-slate-500 dark:text-zinc-500">
                    {t.contact.emailSend}
                  </span>
                </a>
              </div>

              <div
                onClick={handleCopy}
                className="mt-8 cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-all duration-200 hover:border-cyan-500/40 hover:bg-cyan-50/50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-cyan-400/30 dark:hover:bg-white/[0.06]"
              >
                <p className="flex items-center gap-2 font-mono text-sm text-slate-700 dark:text-zinc-300">
                  <MailIcon className="h-4 w-4 text-cyan-700 dark:text-cyan-300" />
                  <span className="transition-colors hover:text-cyan-700 dark:hover:text-cyan-200">
                    {t.contact.emailCopy}
                  </span>
                  <span className="ml-auto text-xs text-slate-400 dark:text-zinc-500">
                    {copied ? t.contact.emailCopied : t.contact.emailCopyBtn}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
