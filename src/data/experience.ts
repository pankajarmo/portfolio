import { Job } from "./types";

export const experience: Job[] = [
  {
    id: "apna",
    company: "Apna (Apnatime Tech)",
    location: "Bangalore / Remote",
    roles: [
      {
        title: "Senior Software Engineer",
        startDate: "2026-05",
        endDate: null,
        bullets: [
          "Frontend Lead for Apna Advantage, driving new application from concept to launch.",
          "Coordinating across design, product, and engineering to deliver a high-impact product.",
        ],
      },
      {
        title: "Software Development Engineer 2",
        startDate: "2024-04",
        endDate: "2026-05",
        bullets: [
          "Owned frontend development of Apna Advantage with Next.js, scaling monthly revenue to ₹2 Cr.",
          "Led migration from React.js to Next.js, resulting in a 30% increase in page impressions.",
          "Delivered 10,000+ dynamic SSR and SSG pages while improving performance by 15%.",
          "Architected and shipped an AI-powered job posting system integrating LiveKit's real-time voice SDK — generated ₹10L additional monthly revenue.",
          "Introduced Job Templates feature, reducing average posting time by 50% and improving employer retention by 15%.",
          "Rewrote job post form with Yup and Zustand, eliminating 40,000+ lines of legacy code.",
          "Launched Apna Contests for recruiter-driven campaigns, achieving 30,000+ registrations on launch day.",
        ],
      },
      {
        title: "Software Development Engineer 1",
        startDate: "2022-06",
        endDate: "2024-03",
        bullets: [
          "Built employer–candidate communication platform, reducing employer response time by 50%.",
          "Led frontend ownership of the job posting system — Apna's primary monetization flow.",
          "Migrated employer dashboard to a micro-frontend architecture, improving team scalability.",
          "Designed and shipped a reusable design system, reducing component build time from 25 min to 5 min.",
          "Integrated Android/iOS WebViews into native apps, accelerating feature time-to-market.",
        ],
      },
    ],
    techStack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Nx",
      "LiveKit SDK",
    ],
  },
  {
    id: "aryaki",
    company: "Aryaki Labs",
    location: "Bangalore",
    roles: [
      {
        title: "Software Development Intern",
        startDate: "2021-06",
        endDate: "2022-05",
        bullets: [
          "Handled operations and delivered projects on Caspio for US and Canada-based clients.",
        ],
      },
    ],
    techStack: ["Caspio", "JavaScript"],
  },
  {
    id: "equifax",
    company: "Equifax Analytics",
    location: "Bangalore",
    roles: [
      {
        title: "Analytics Intern",
        startDate: "2019-05",
        endDate: "2019-07",
        bullets: [
          "Built campaign performance reports using SQL and SAS.",
          "Supported A/B testing initiatives to improve campaign outcomes.",
        ],
      },
    ],
    techStack: ["SQL", "SAS"],
  },
];
