import type { Locale } from "./types";

const es = {
  meta: {
    role: "Desarrollador Frontend & Mobile",
    tagline: "Interfaces limpias, apps que funcionan y código con propósito.",
  },
  nav: {
    home: "Inicio",
    projects: "Proyectos",
    about: "Sobre mí",
    skills: "Skills",
    experience: "Experiencia",
    education: "Educación",
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
      "Soy desarrollador frontend y mobile originario de Chihuahua, egresado de la Universidad Tecnológica de Chihuahua en modalidad bilingüe.",
      "Trabajo con React Native, Next.js y stacks fullstack — desde apps móviles hasta backends con Python, bases de datos en tiempo real e IoT.",
      "Me motiva transformar ideas en productos útiles. He trabajado en startups, construido sistemas para psicólogos, apps de bienestar con sensores físicos y más.",
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
    subtitle: "Tecnologías que uso en desarrollo web, mobile y backends.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Base de datos",
      tools: "Herramientas",
    },
  },
  projects: {
    label: "Proyectos",
    title: "Lo que he construido",
    subtitle:
      "Una selección de apps móviles, webs y backends — desde bienestar digital hasta APIs deportivas.",
    viewRepo: "Ver repositorio",
    viewDemo: "Ver demo",
    private: "Proyecto privado / en desarrollo",
    items: {
      serenity: {
        description:
          "App de bienestar mental: móvil React Native, web, backend Flask/Python, MongoDB e IoT con sensores de ritmo cardíaco y respiración.",
      },
      psychcalendar: {
        description:
          "Sistema de gestión para psicólogos con registro de pacientes y sesiones.",
      },
      mytime: {
        description:
          "App móvil para organización y seguimiento del tiempo personal.",
      },
      taskmanager: {
        description:
          "App de gestión de tareas migrada de arquitectura monolítica a serverless. Login, CRUD, comentarios, historial, notificaciones, búsqueda y exportación CSV.",
      },
      api: {
        description:
          "API REST con operaciones CRUD completas para gestión de usuarios.",
        tags: ["JavaScript", "API REST", "CRUD"],
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
    githubCta: "GitHub",
    linkedinCta: "LinkedIn",
    emailCta: "Email",
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
    projects: "Projects",
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
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
      "I'm a frontend and mobile developer from Chihuahua, Mexico, graduated from Universidad Tecnológica de Chihuahua in the bilingual program.",
      "I work with React Native, Next.js, and full-stack setups — from mobile apps to Python backends, real-time databases, and IoT devices.",
      "I enjoy turning ideas into real products. I've worked at startups, built management systems, wellness apps with physical sensors, and more.",
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
    subtitle: "University path in engineering and information technology.",
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
    subtitle: "Technologies I use across web, mobile, and backend development.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      database: "Database",
      tools: "Tools",
    },
  },
  projects: {
    label: "Projects",
    title: "What I've built",
    subtitle:
      "A selection of mobile apps, websites, and backends — from digital wellness to sports APIs.",
    viewRepo: "View repository",
    viewDemo: "View demo",
    private: "Private / work in progress",
    items: {
      serenity: {
        description:
          "Mental wellness app: React Native mobile, web client, Flask/Python backend, MongoDB, and IoT with heart rate and breathing sensors.",
      },
      psychcalendar: {
        description:
          "Management system for psychologists with patient and session records.",
      },
      mytime: {
        description: "Mobile app for organizing and tracking personal time.",
      },
      taskmanager: {
        description:
          "Task management app migrated from monolithic to serverless architecture. Login, CRUD, comments, history, notifications, search and CSV export.",
      },
      api: {
        description: "REST API with full CRUD operations for user management.",
        tags: ["JavaScript", "API REST", "CRUD"],
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
    githubCta: "GitHub",
    linkedinCta: "LinkedIn",
    emailCta: "Email",
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
  { key: "projects" as const, href: "#projects" },
  { key: "about" as const, href: "#about" },
  { key: "skills" as const, href: "#skills" },
  { key: "experience" as const, href: "#experience" },
  { key: "education" as const, href: "#education" },
  { key: "contact" as const, href: "#contact" },
];
