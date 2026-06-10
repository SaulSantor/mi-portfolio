import type { Locale } from "./types";

const es = {
  meta: {
    role: "Desarrollador Frontend y Mobile",
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
    stats: [
      { value: "6+", label: "Proyectos" },
      { value: "2+", label: "Años aprendiendo" },
      { value: "3", label: "Tecnologías mobile" },
      { value: "B1", label: "Nivel inglés" },
    ],
  },
  about: {
    label: "Sobre mí",
    title: "Código con claridad y curiosidad",
    paragraphs: [
      "Soy desarrollador frontend y mobile originario de Chihuahua, enfocado en la creación de páginas web, aplicaciones web y apps móviles con React, Next.js y React Native. Cuento con experiencia práctica construyendo interfaces modernas con HTML, CSS, JavaScript y TypeScript, aplicando buenas prácticas de rendimiento, accesibilidad y experiencia de usuario.",
      "Mi perfil se complementa con el desarrollo de aplicaciones web con paneles de administración, gestión de contenido mediante CMS, sistemas especializados como plataformas de gestión para psicólogos y apps de bienestar mental con integración de sensores físicos de ritmo cardíaco y respiración mediante IoT.",
      "Aunque mi especialidad es el frontend y mobile, cuento con experiencia complementaria en backends con Python y Flask, bases de datos relacionales con SQL Server y NoSQL con MongoDB, manejo de datos en tiempo real y control de versiones con Git y GitHub.",
      "Me formé en la Universidad Tecnológica de Chihuahua en modalidad bilingüe, con un nivel de inglés B1 que me permite leer documentación técnica, colaborar en equipos y comunicarme en entornos de trabajo internacionales.",
    ],
    highlights: [
      { label: "Frontend", value: "React · Next.js · TypeScript" },
      { label: "Mobile", value: "React Native · Expo" },
      { label: "Backend", value: "Python · Flask · REST APIs" },
      { label: "Database", value: "MongoDB · SQL Server" },
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
    noImage: "Sin vista previa",
    items: {
      serenity: {
        description:
          "App de bienestar mental: móvil React Native, web, backend Flask/Python, MongoDB e IoT con sensores de ritmo cardíaco y respiración.",
        longDescription:
          "Serenity es una aplicación integral de bienestar mental diseñada para ayudar a los usuarios a manejar el estrés y mejorar su bienestar. La app móvil, construida con React Native, ofrece sesiones de meditación guiada, ejercicios de respiración y seguimiento del estado de ánimo. El cliente web proporciona acceso a recursos adicionales y contenido personalizado. El backend, desarrollado con Flask y Python, maneja la autenticación de usuarios, gestión de sesiones y almacenamiento de datos en MongoDB. Además, Serenity se integra con sensores IoT para monitorear en tiempo real el ritmo cardíaco y los patrones de respiración, brindando a los usuarios información sobre sus respuestas fisiológicas durante las prácticas de mindfulness.",
      },
      psychcalendar: {
        description:
          "Sistema de gestión para psicólogos con registro de pacientes y sesiones.",
        longDescription:
          "PsychCalendar es una plataforma de gestión diseñada específicamente para psicólogos, que facilita la organización y seguimiento de pacientes y sesiones. La aplicación permite a los profesionales de la salud mental registrar información detallada sobre cada paciente, programar citas, llevar un historial de sesiones y gestionar notas clínicas. Con una interfaz intuitiva, PsychCalendar ayuda a los psicólogos a mantener toda la información relevante en un solo lugar, mejorando la eficiencia administrativa y permitiéndoles centrarse en brindar atención de calidad a sus pacientes.",
      },
      mytime: {
        description:
          "App móvil para organización y seguimiento del tiempo personal.",
        longDescription:
          "MyTime es una aplicación móvil diseñada para ayudar a los usuarios a organizar su tiempo y seguir su progreso. Con una interfaz sencilla y funcional, MyTime permite crear tareas, establecer recordatorios y visualizar su agenda de manera intuitiva.",
      },
      taskmanager: {
        description:
          "App de gestión de tareas migrada de arquitectura monolítica a serverless. Login, CRUD, comentarios, historial, notificaciones, búsqueda y exportación CSV.",
        longDescription:
          "TaskManager es una aplicación de gestión de tareas que ha sido migrada de una arquitectura monolítica a una arquitectura serverless. Incluye funcionalidades como inicio de sesión, operaciones CRUD, comentarios, historial, notificaciones, búsqueda y exportación de datos en formato CSV.",
      },
      api: {
        description:
          "API REST con operaciones CRUD completas para gestión de usuarios.",
        longDescription:
          "La API REST proporciona operaciones CRUD completas para la gestión de usuarios, permitiendo crear, leer, actualizar y eliminar información de los usuarios en el sistema.",
        tags: ["JavaScript", "API REST", "CRUD"],
      },
      apideportes: {
        description:
          "App web que consume y presenta datos deportivos mediante APIs.",
        longDescription:
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
    emailSend: "Enviar mensaje",
    emailCopy: "Copiar correo electrónico",
    emailCopied: "¡Copiado!",
    emailCopyBtn: "Copiar",
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
    stats: [
      { value: "6+", label: "Projects" },
      { value: "2+", label: "Years learning" },
      { value: "3", label: "Mobile techs" },
      { value: "B1", label: "English level" },
    ],
  },
  about: {
    label: "About",
    title: "Clear code, genuine curiosity",
    paragraphs: [
      "I am a frontend and mobile developer from Chihuahua, focused on building websites, web applications and mobile apps using React, Next.js and React Native. I have hands-on experience creating modern interfaces with HTML, CSS, JavaScript and TypeScript, following good practices for performance, accessibility and user experience.",
      "My profile includes experience building web applications with admin panels, content management through CMS, specialized systems such as platforms for psychologists and a mental wellness app with physical sensor integration for heart rate and breathing using IoT.",
      "Although my main focus is frontend and mobile development, I also have complementary experience with backends using Python and Flask, relational databases with SQL Server, NoSQL with MongoDB, real-time data handling and version control with Git and GitHub.",
      "I studied at the Universidad Tecnológica de Chihuahua in a bilingual program, with a B1 English level that allows me to read technical documentation, collaborate in teams and communicate in international work environments.",
    ],
    highlights: [
      { label: "Frontend", value: "React · Next.js · TypeScript" },
      { label: "Mobile", value: "React Native · Expo" },
      { label: "Backend", value: "Python · Flask · REST APIs" },
      { label: "Database", value: "MongoDB · SQL Server" },
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
    noImage: "No preview available",
    items: {
      serenity: {
        description:
          "Mental wellness app: React Native mobile, web client, Flask/Python backend, MongoDB, and IoT with heart rate and breathing sensors.",
        longDescription:
          "Serenity is a comprehensive mental wellness application designed to help users manage stress and improve their well-being. The mobile app, built with React Native, offers guided meditation sessions, breathing exercises, and mood tracking features. The web client provides access to additional resources and personalized content. The backend, developed with Flask and Python, handles user authentication, session management, and data storage in MongoDB. Additionally, Serenity integrates with IoT sensors to monitor heart rate and breathing patterns in real-time, providing users with insights into their physiological responses during mindfulness practices.",
      },
      psychcalendar: {
        description:
          "Management system for psychologists with patient and session records.",
        longDescription:
          "PsychCalendar is a management platform specifically designed for psychologists, facilitating the organization and tracking of patients and sessions. The application allows mental health professionals to record detailed information about each patient, schedule appointments, maintain a session history, and manage clinical notes. With an intuitive interface, PsychCalendar helps psychologists keep all relevant information in one place, improving administrative efficiency and allowing them to focus on providing quality care to their patients.",
      },
      mytime: {
        description: "Mobile app for organizing and tracking personal time.",
        longDescription:
          "MyTime is a mobile application designed to help users organize their time and track their progress. With a simple and functional interface, MyTime allows users to create tasks, set reminders, and visualize their schedule in an intuitive way.",
      },
      taskmanager: {
        description:
          "Task management app migrated from monolithic to serverless architecture. Login, CRUD, comments, history, notifications, search and CSV export.",
        longDescription:
          "TaskManager is a task management application that has been migrated from a monolithic to a serverless architecture. It includes functionalities such as user authentication, CRUD operations, comments, history, notifications, search, and CSV export.",
      },
      api: {
        description: "REST API with full CRUD operations for user management.",
        longDescription:
          "The REST API provides full CRUD operations for user management, allowing developers to create, read, update, and delete user information in the system.",
        tags: ["JavaScript", "REST API", "CRUD"],
      },
      apideportes: {
        description:
          "Web app that fetches and displays sports data through APIs.",
        longDescription:
          "App web que consume y presenta datos deportivos mediante APIs.",
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
    emailSend: "Send message",
    emailCopy: "Copy email address",
    emailCopied: "Copied!",
    emailCopyBtn: "Copy",
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
