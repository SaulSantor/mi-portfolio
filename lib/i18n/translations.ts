import type { Locale } from "./types";

const es = {
  meta: {
    role: "Desarrollador Frontend & Mobile",
    tagline:
      "Interfaces limpias, apps que funcionan y código con propósito.",
  },
  nav: {
    home: "Inicio",
    about: "Sobre mí",
    experience: "Experiencia",
    education: "Educación",
    skills: "Skills",
    projects: "Proyectos",
    contact: "Contacto",
  },
  hero: {
    badge: "Disponible para nuevos proyectos",
    greeting: "Hola, soy",
    ctaProjects: "Ver proyectos",
    ctaContact: "Contactar",
  },
  about: {
    label: "Sobre mí",
    title: "Código con claridad y curiosidad",
    paragraphs: [
      "Soy desarrollador frontend y mobile con enfoque en experiencias digitales claras, accesibles y con buen rendimiento.",
      "Trabajo con React Native, Next.js y stacks fullstack — desde apps móviles hasta backends con Python y bases de datos en tiempo real.",
      "Me motiva transformar ideas en productos útiles, ya sea bienestar digital, herramientas profesionales o APIs que conectan datos en vivo.",
    ],
    highlights: [
      { label: "Frontend", value: "React · Next.js" },
      { label: "Mobile", value: "React Native" },
      { label: "Backend", value: "Python · Flask" },
      { label: "Datos", value: "MongoDB · Real-time" },
    ],
  },
  experience: {
    label: "Experiencia",
    title: "Dónde he trabajado",
    subtitle:
      "Experiencia profesional en desarrollo web y entornos reales de producto.",
    items: {
      changeandcode: {
        role: "Desarrollador Web",
        duration: "4 meses · estadías profesionales",
        description:
          "Desarrollo de aplicaciones web con paneles de administración y gestión de contenido mediante CMS. Código propietario de la empresa.",
      },
    },
  },
  education: {
    label: "Educación",
    title: "Formación académica",
    subtitle:
      "Trayectoria universitaria en ingeniería y tecnologías de la información.",
    entries: {
      utch: {
        modality: "Modalidad Bilingüe",
        degrees: {
          isc: {
            title: "Ingeniería en Sistemas Computacionales",
            status: "En curso",
            detail: "7mo cuatrimestre",
          },
          tsu: {
            title: "TSU en Tecnologías de la Información",
            status: "Titulado",
          },
        },
      },
    },
  },
  skills: {
    label: "Skills",
    title: "Stack y herramientas",
    subtitle:
      "Tecnologías que uso en desarrollo web, mobile y backends.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Base de datos",
      tools: "Herramientas",
      cms: "CMS",
    },
    items: {
      cms: "Gestión de contenido",
    },
  },
  projects: {
    label: "Proyectos",
    title: "Lo que he construido",
    subtitle:
      "Una selección de apps móviles, webs y backends — desde bienestar digital hasta APIs deportivas.",
    viewRepo: "Ver repositorio",
    private: "Proyecto privado / en desarrollo",
    items: {
      serenity: {
        description:
          "App de bienestar mental: móvil React Native, web, backend Flask/Python, MongoDB e IoT con sensores de ritmo cardíaco y respiración.",
      },
      bitacora: {
        description:
          "Sistema de gestión para psicólogos con registro de pacientes y sesiones.",
      },
      mytime: {
        description:
          "App móvil para organización y seguimiento del tiempo personal.",
      },
      portfolio: {
        description:
          "App web fullstack con autenticación, base de datos en tiempo real y emails automáticos.",
        tags: ["Autenticación", "Real-time DB", "Email"],
      },
      apideportes: {
        description:
          "App web que consume y presenta datos deportivos mediante APIs.",
      },
    },
  },
  contact: {
    label: "Contacto",
    title: "¿Hablamos?",
    subtitle:
      "Si tienes una idea, un proyecto o simplemente quieres conectar, escríbeme o revisa mi trabajo en GitHub.",
    githubCta: "GitHub — SaulSantor",
  },
  footer: {
    builtWith: "Hecho con Next.js y Tailwind.",
  },
  a11y: {
    themeToLight: "Cambiar a modo claro",
    themeToDark: "Cambiar a modo oscuro",
    languageEs: "Cambiar idioma a español",
    languageEn: "Cambiar idioma a inglés",
  },
} as const;

const en = {
  meta: {
    role: "Frontend & Mobile Developer",
    tagline: "Clean interfaces, apps that work, and code with purpose.",
  },
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    badge: "Open to new projects",
    greeting: "Hi, I'm",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
  },
  about: {
    label: "About",
    title: "Clear code, genuine curiosity",
    paragraphs: [
      "I'm a frontend and mobile developer focused on clear, accessible digital experiences with solid performance.",
      "I work with React Native, Next.js, and full-stack setups — from mobile apps to Python backends and real-time databases.",
      "I'm driven by turning ideas into useful products, whether that's digital wellness, professional tools, or APIs that surface live data.",
    ],
    highlights: [
      { label: "Frontend", value: "React · Next.js" },
      { label: "Mobile", value: "React Native" },
      { label: "Backend", value: "Python · Flask" },
      { label: "Data", value: "MongoDB · Real-time" },
    ],
  },
  experience: {
    label: "Experience",
    title: "Where I've worked",
    subtitle:
      "Professional experience in web development and real-world product environments.",
    items: {
      changeandcode: {
        role: "Web Developer",
        duration: "4 months · professional internship",
        description:
          "Built web applications with admin dashboards and CMS-driven content management. Proprietary company codebase.",
      },
    },
  },
  education: {
    label: "Education",
    title: "Academic background",
    subtitle:
      "University path in engineering and information technology.",
    entries: {
      utch: {
        modality: "Bilingual Program",
        degrees: {
          isc: {
            title: "Computer Systems Engineering",
            status: "In progress",
            detail: "7th semester",
          },
          tsu: {
            title: "Associate Degree in Information Technology",
            status: "Graduated",
          },
        },
      },
    },
  },
  skills: {
    label: "Skills",
    title: "Stack & tools",
    subtitle:
      "Technologies I use across web, mobile, and backend development.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools",
      cms: "CMS",
    },
    items: {
      cms: "Content management",
    },
  },
  projects: {
    label: "Projects",
    title: "What I've built",
    subtitle:
      "A selection of mobile apps, websites, and backends — from digital wellness to sports APIs.",
    viewRepo: "View repository",
    private: "Private / work in progress",
    items: {
      serenity: {
        description:
          "Mental wellness app: React Native mobile, web client, Flask/Python backend, MongoDB, and IoT with heart rate and breathing sensors.",
      },
      bitacora: {
        description:
          "Management system for psychologists with patient and session records.",
      },
      mytime: {
        description:
          "Mobile app for organizing and tracking personal time.",
      },
      portfolio: {
        description:
          "Full-stack web app with authentication, real-time database, and automated emails.",
        tags: ["Authentication", "Real-time DB", "Email"],
      },
      apideportes: {
        description:
          "Web app that fetches and displays sports data through APIs.",
      },
    },
  },
  contact: {
    label: "Contact",
    title: "Let's talk",
    subtitle:
      "Whether you have an idea, a project, or just want to connect — reach out or check my work on GitHub.",
    githubCta: "GitHub — SaulSantor",
  },
  footer: {
    builtWith: "Built with Next.js and Tailwind.",
  },
  a11y: {
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
    languageEs: "Switch language to Spanish",
    languageEn: "Switch language to English",
  },
} as const;

export const translations = { es, en } as const;

export type TranslationKeys = typeof es | typeof en;

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}

export const navItems = [
  { key: "home" as const, href: "#hero" },
  { key: "about" as const, href: "#about" },
  { key: "experience" as const, href: "#experience" },
  { key: "education" as const, href: "#education" },
  { key: "skills" as const, href: "#skills" },
  { key: "projects" as const, href: "#projects" },
  { key: "contact" as const, href: "#contact" },
];
