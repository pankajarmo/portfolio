import { SkillCategory } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "Go"],
  },
  {
    name: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "LiveKit SDK",
    ],
  },
  {
    name: "State & Data",
    skills: ["Zustand", "TanStack Query", "Yup"],
  },
  {
    name: "Tools & Infra",
    skills: ["Git", "Nx (Monorepo)", "Webpack", "Vite", "Jira"],
  },
  {
    name: "AI & Analytics",
    skills: ["OpenAI API", "RAG Pipelines", "ChromaDB", "Mixpanel"],
  },
];
