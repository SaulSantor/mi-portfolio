export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  accent: "cyan" | "violet" | "amber" | "rose" | "emerald";
};

export const projects: Project[] = [
  {
    id: "serenity",
    title: "Serenity",
    description:
      "App de bienestar mental: móvil React Native, web, backend Flask/Python, MongoDB e IoT con sensores de ritmo cardíaco y respiración.",
    tags: ["React Native", "Python", "Flask", "MongoDB", "IoT"],
    repoUrl: "https://github.com/SaulSantor/serenity-app",
    accent: "cyan",
  },
  {
    id: "psychcalendar",
    title: "PsychCalendar",
    description:
      "Sistema de gestión para psicólogos con registro de pacientes y sesiones.",
    tags: ["HTML", "CSS", "JavaScript"],
    repoUrl: "",
    accent: "violet",
  },
  {
    id: "mytime",
    title: "MyTimeAppNew",
    description:
      "App móvil para organización y seguimiento del tiempo personal.",
    tags: ["React Native", "TypeScript"],
    repoUrl: "https://github.com/SaulSantor/MyTimeAppNew",
    accent: "amber",
  },
  {
    id: "taskmanager",
    title: "Task Manager Simple",
    description:
      "App de gestión de tareas migrada de arquitectura monolítica a serverless. Login, CRUD, comentarios, historial, notificaciones, búsqueda y exportación CSV.",
    tags: ["HTML", "CSS", "JavaScript", "Vercel Serverless"],
    repoUrl: "https://github.com/SaulSantor/TaskManagerSimple",
    demoUrl: "https://task-manager-simple.vercel.app/",
    accent: "emerald",
  },
  {
    id: "api",
    title: "User CRUD API",
    description:
      "API REST con operaciones CRUD completas para gestión de usuarios.",
    tags: ["JavaScript", "API REST", "CRUD"],
    repoUrl: "https://github.com/SaulSantor/API",
    accent: "rose",
  },
  {
    id: "apideportes",
    title: "APIDeportes",
    description:
      "App web que consume y presenta datos deportivos mediante APIs.",
    tags: ["HTML", "JavaScript", "APIs"],
    repoUrl: "https://github.com/SaulSantor/APIDeportes",
    accent: "cyan",
  },
];
