import ScrollProgressLoader from "@/components/layout/scroll-progress-loader";
import HeroView from "@/components/sections/hero/hero-view";
import AboutView from "@/components/sections/about/about-view";
import ProjectsView from "@/components/sections/projects/projects-view";
import ExperienceView from "@/components/sections/experience/experience-view";
import EducationView from "@/components/sections/education/education-view";
import ContactView from "@/components/sections/contact/contact-view";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { skillCategories } from "@/data/skills";

export default function Home() {
  return (
    <>
      <ScrollProgressLoader />
      <HeroView />
      <AboutView skillCategories={skillCategories} />
      <ProjectsView projects={projects} />
      <ExperienceView jobs={experience} />
      <EducationView education={education} />
      <ContactView />
    </>
  );
}
