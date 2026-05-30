import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "yt-rag",
    title: "YouTube Channel RAG",
    description:
      "A RAG-based semantic search engine over YouTube channels enabling natural-language video discovery. Built an automated transcript ingestion pipeline indexing 500+ videos into a 10M+ token searchable corpus.",
    techStack: ["Python", "OpenAI", "ChromaDB", "YouTube API"],
    liveUrl: "#",
    featured: true,
    year: 2024,
  },
  {
    id: "apna-contests",
    title: "Apna Contests",
    description:
      "Recruiter-driven hiring campaigns platform that achieved 30,000+ registrations on launch day. Built with Next.js and integrated with Apna's employer ecosystem.",
    techStack: ["Next.js", "TypeScript", "Zustand", "TanStack Query"],
    featured: false,
    year: 2023,
  },
  {
    id: "ai-job-posting",
    title: "AI-Powered Job Posting",
    description:
      "Integrated LiveKit's real-time voice SDK to enable AI-driven job posting system. Generated an additional ₹10L in monthly revenue for Apna.",
    techStack: ["Next.js", "LiveKit SDK", "OpenAI API", "TypeScript"],
    featured: false,
    year: 2024,
  },
];
