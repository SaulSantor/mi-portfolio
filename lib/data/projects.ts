export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
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
    id: "bitacora",
    title: "Psycalendar",
    description:
      "Sistema de gestión para psicólogos con registro de pacientes y sesiones.",
    tags: ["HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/SaulSantor/bitacora-psicologos",
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
    id: "portfolio",
    title: "mi-portfolio",
    description:
      "App web fullstack con autenticación, base de datos en tiempo real y emails automáticos.",
    tags: ["Autenticación", "Real-time DB", "Email"],
    repoUrl: "https://github.com/SaulSantor/mi-portfolio",
    accent: "rose",
  },
  {
    id: "apideportes",
    title: "APIDeportes",
    description:
      "App web que consume y presenta datos deportivos mediante APIs.",
    tags: ["HTML", "JavaScript", "APIs"],
    repoUrl: "https://github.com/SaulSantor/APIDeportes",
    accent: "emerald",
  },
];
