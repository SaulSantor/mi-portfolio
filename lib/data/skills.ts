export type SkillCategory = {
  id: string;
  accent: "cyan" | "violet" | "emerald" | "amber" | "rose";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    accent: "cyan",
    skills: ["HTML", "CSS", "JavaScript", "React Native", "TypeScript"],
  },
  {
    id: "backend",
    accent: "violet",
    skills: ["Python", "Flask"],
  },
  {
    id: "database",
    accent: "emerald",
    skills: ["MongoDB"],
  },
  {
    id: "tools",
    accent: "amber",
    skills: ["Git", "GitHub", "Cursor", "Expo"],
  },
];
