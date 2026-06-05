import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
    ...props,
  } as const;
}

export const skillIcons: Record<string, (props: IconProps) => React.JSX.Element> = {
  HTML: (p) => (
    <svg {...base(p)}>
      <path fill="#E34F26" d="M5 3l1.5 17 5.5 1.5L17.5 20 19 3z" />
      <path fill="#EF652A" d="M12 5v15l4.5-1.25L17.7 5z" />
      <path fill="#EBEBEB" d="M12 8.5H8.2l.3 3H12V8.5zm0 5H8.4l.2 2.3 3.4.9V13.7z" />
      <path fill="#FFF" d="M12 8.5v3h3.8l-.4-3zm0 5v3.1l3.5-.9.2-2.2z" />
    </svg>
  ),
  CSS: (p) => (
    <svg {...base(p)}>
      <path fill="#1572B6" d="M5 3l1.5 17 5.5 1.5L17.5 20 19 3z" />
      <path fill="#33A9DC" d="M12 5v15l4.5-1.25L17.7 5z" />
      <path fill="#EBEBEB" d="M12 8.5H8.2l.3 3H12V8.5zm0 5H8.4l.2 2.3 3.4.9V13.7z" />
      <path fill="#FFF" d="M12 8.5v3h3.8l-.4-3zm0 5v3.1l3.5-.9.2-2.2z" />
    </svg>
  ),
  JavaScript: (p) => (
    <svg {...base(p)}>
      <path fill="#F7DF1E" d="M3 3h18v18H3z" />
      <path
        fill="#000"
        d="M10 17.5c.5.8 1.2 1.3 2.3 1.3 1 0 1.5-.5 1.5-1.2 0-.8-.6-1.1-1.7-1.6l-.6-.3c-1.7-.7-2.8-1.6-2.8-3.5 0-1.7 1.3-3 3.3-3 1.5 0 2.5.5 3.3 1.9l-1.8 1.2c-.4-.7-.8-1-1.5-1s-1.1.4-1.1 1c0 .7.4 1 1.5 1.5l.6.3c2 1 3.2 1.7 3.2 3.6 0 2.1-1.6 3.2-3.8 3.2-2.1 0-3.5-1-4.2-2.3l1.8-1.1zM16.5 17l1.8 1c.2.4.5.8 1 .8.5 0 .8-.2.8-1V11h2.2v7c0 1.7-.8 2.4-2.2 2.4-1.2 0-1.9-.6-2.3-1.4l1.7-1z"
      />
    </svg>
  ),
  TypeScript: (p) => (
    <svg {...base(p)}>
      <path fill="#3178C6" d="M3 3h18v18H3z" />
      <path
        fill="#FFF"
        d="M13 16.5c.4.7 1 1.2 2 1.2.8 0 1.4-.4 1.4-1 0-.7-.6-1-1.7-1.4l-.6-.2c-1.7-.7-2.8-1.5-2.8-3.3 0-1.6 1.2-2.8 3.2-2.8 1.4 0 2.4.5 3.1 1.8l-1.7 1.1c-.4-.6-.7-.9-1.4-.9-.7 0-1 .4-1 .9 0 .6.4.9 1.5 1.3l.6.2c2 .8 3 1.6 3 3.4 0 1.9-1.5 3-3.6 3-2 0-3.3-1-3.9-2.2L13 16.5zM7 9.5h6.5v1.7h-2.2v6H9v-6H7V9.5z"
      />
    </svg>
  ),
  "React Native": (p) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="1.6" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="3.8" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="3.8"
          transform="rotate(60 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="3.8"
          transform="rotate(120 12 12)"
        />
      </g>
    </svg>
  ),
  Python: (p) => (
    <svg {...base(p)}>
      <path
        fill="#3776AB"
        d="M11.5 2.5c-3 0-2.8 1.3-2.8 1.3v1.5h2.9v.5H7.3S5.4 5.5 5.4 8.4c0 2.9 1.6 2.8 1.6 2.8h1V9.3s-.1-1.6 1.6-1.6h2.8s1.5 0 1.5-1.4V3.8s.1-1.3-2.4-1.3zm-1.6 1c.3 0 .5.2.5.5s-.2.5-.5.5-.5-.2-.5-.5.2-.5.5-.5z"
      />
      <path
        fill="#FFD43B"
        d="M12.5 21.5c3 0 2.8-1.3 2.8-1.3v-1.5h-2.9v-.5h4.3s1.9-.3 1.9-3.2c0-2.9-1.6-2.8-1.6-2.8h-1V14s.1 1.6-1.6 1.6h-2.8s-1.5 0-1.5 1.4v2.5s-.1 1.3 2.4 1.3zm1.6-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5.5.2.5.5-.2.5-.5.5z"
      />
    </svg>
  ),
  Flask: (p) => (
    <svg {...base(p)}>
      <path
        fill="#000"
        d="M9 2v6.3L4.2 18a2 2 0 0 0 1.8 3h12a2 2 0 0 0 1.8-3L15 8.3V2h-2v2h-2V2H9zm0 8.4l1.3 2.6H8L9 10.4zm3 0l1 2.6h-2L12 10.4zm3 0l1 2.6h-2.3L15 10.4z"
      />
    </svg>
  ),
  MongoDB: (p) => (
    <svg {...base(p)}>
      <path
        fill="#47A248"
        d="M12 2c.5 4 3 5 3 9 0 4-3 7-3 11 0 0-1 0-1-2 0-1 1-3-1-6-2-3 1-8 2-12z"
      />
      <path
        fill="#3F8E3F"
        d="M12 2c.5 4 3 5 3 9 0 4-3 7-3 11 0 0-1 0-1-2 0-1 1-3-1-6-2-3 1-8 2-12z"
        opacity=".5"
      />
    </svg>
  ),
  Git: (p) => (
    <svg {...base(p)}>
      <path
        fill="#F05032"
        d="M21.6 9.6L14.4 2.4a1.95 1.95 0 0 0-2.8 0L9.5 4.5l3 3a2.3 2.3 0 0 1 2.9 2.9l2.9 2.9a2.3 2.3 0 1 1-1.4 1.4L14 11.8v7.3a2.3 2.3 0 1 1-2 0v-7.5a2.3 2.3 0 0 1-1.3-2.8L7.8 6l-5.4 5.4a1.95 1.95 0 0 0 0 2.8l7.2 7.2a1.95 1.95 0 0 0 2.8 0l7.2-7.2a1.95 1.95 0 0 0 0-2.8z"
      />
    </svg>
  ),
  GitHub: (p) => (
    <svg {...base(p)} fill="currentColor">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  ),
  Cursor: (p) => (
    <svg {...base(p)}>
      <path
        fill="#000"
        d="M3 2l8 18 2.5-7.5L21 10 3 2zm2.5 2.7L17 9.7l-5 1.5-1.5 5L5.5 4.7z"
      />
    </svg>
  ),
  Expo: (p) => (
    <svg {...base(p)}>
      <path
        fill="#000020"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2.5c1 0 1.8.4 2.5 1.1L7.5 12.6c-.7-.7-1.1-1.5-1.1-2.5 0-2 1.7-3.6 3.6-3.6.8 0 1.4.2 2 .5L9.4 9.7l1.7 1.7 2.9-2.9c.4.4.7 1 .7 1.5 0 1.1-.9 2-2 2-.6 0-1.1-.2-1.5-.6L9.5 9.7 7.7 11.5 12 15.8l4.3-4.3c.7-.7 1.1-1.6 1.1-2.5 0-2.4-1.9-4.3-4.3-4.3-1 0-1.8.4-2.5 1.1L8.6 4.6c.9-.7 2.1-1.1 3.4-1.1z"
      />
    </svg>
  ),
  Next: (p) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="10" fill="#000" />
      <path
        fill="#fff"
        d="M16.5 17.5l-3.6-4.7-2.4 2.6h-1.3l3.1-3.4-3.4-4.5h1.7l2.6 3.4 2.1-2.3h1.3l-2.7 2.9 3.7 4.8zM9 8.5h-1v7H9v-7z"
      />
    </svg>
  ),
  Vercel: (p) => (
    <svg {...base(p)} fill="#fff">
      <path d="M12 2L22 20H2L12 2z" />
    </svg>
  ),
  IoT: (p) => (
    <svg {...base(p)}>
      <path
        fill="#06b6d4"
        d="M12 2a3 3 0 0 0-3 3v1.4A7 7 0 0 0 5 13v3.6l-1.7 1.7a1 1 0 0 0 1.4 1.4L6 18.4V14a5 5 0 0 1 10 0v4.4l1.3 1.3a1 1 0 0 0 1.4-1.4L17 16.6V13a7 7 0 0 0-4-6.6V5a3 3 0 0 0-3-3zm0 2a1 1 0 0 1 1 1v1.1A6 6 0 0 0 11 6.1V5a1 1 0 0 1 1-1z"
      />
    </svg>
  ),
  "API REST": (p) => (
    <svg {...base(p)}>
      <path
        fill="#94a3b8"
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"
      />
    </svg>
  ),
  CRUD: (p) => (
    <svg {...base(p)}>
      <path
        fill="#94a3b8"
        d="M4 4h16v4H4V4zm0 6h16v4H4v-4zm0 6h16v4H4v-4z"
      />
    </svg>
  ),
  APIs: (p) => (
    <svg {...base(p)}>
      <path
        fill="#94a3b8"
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 7V3.5L18.5 9H13z"
      />
    </svg>
  ),
  "Vercel Serverless": (p) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="10" fill="#000" />
      <path fill="#fff" d="M12 6l6 10H6l6-10z" />
    </svg>
  ),
  "React": (p) => (
    <svg {...base(p)}>
      <circle cx="12" cy="12" r="1.6" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse cx="12" cy="12" rx="10" ry="3.8" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
      </g>
    </svg>
  ),
};

export function getSkillIcon(label: string) {
  if (skillIcons[label]) return skillIcons[label];
  const lower = label.toLowerCase();
  if (lower.includes("next")) return skillIcons.Next;
  if (lower.includes("react native")) return skillIcons["React Native"];
  if (lower.includes("react")) return skillIcons.React;
  if (lower.includes("typescript")) return skillIcons.TypeScript;
  if (lower.includes("javascript")) return skillIcons.JavaScript;
  if (lower.includes("python")) return skillIcons.Python;
  if (lower.includes("flask")) return skillIcons.Flask;
  if (lower.includes("mongo")) return skillIcons.MongoDB;
  if (lower.includes("github")) return skillIcons.GitHub;
  if (lower.includes("git")) return skillIcons.Git;
  if (lower.includes("expo")) return skillIcons.Expo;
  if (lower.includes("cursor")) return skillIcons.Cursor;
  if (lower.includes("html")) return skillIcons.HTML;
  if (lower.includes("css")) return skillIcons.CSS;
  if (lower.includes("iot")) return skillIcons.IoT;
  if (lower.includes("vercel")) return skillIcons.Vercel;
  if (lower.includes("api rest")) return skillIcons["API REST"];
  if (lower === "apis" || lower.includes("api")) return skillIcons.APIs;
  if (lower.includes("crud")) return skillIcons.CRUD;
  return null;
}
