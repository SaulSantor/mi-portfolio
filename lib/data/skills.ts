export type SkillCategory = {
  id: string;
  accent: "cyan" | "violet" | "emerald" | "amber" | "rose";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    accent: "cyan",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "React Native"],
  },
  {
    id: "backend",
    accent: "violet",
    skills: ["Python", "Flask", "REST APIs"],
  },
  {
    id: "database",
    accent: "emerald",
    skills: ["MongoDB", "SQL Server"],
  },
  {
    id: "tools",
    accent: "amber",
    skills: ["Git", "GitHub", "Expo", "CMS", "IoT", "Cursor", "VS Code"],
  },
];