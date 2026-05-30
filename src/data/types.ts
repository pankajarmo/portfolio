export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export interface Job {
  id: string;
  company: string;
  location: string;
  roles: {
    title: string;
    startDate: string;
    endDate: string | null;
    bullets: string[];
  }[];
  techStack: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | null;
  highlights?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
