import SectionHeading from "@/components/ui/section-heading";
import AnimatedEntry from "@/components/ui/animated-entry";
import ProjectCard from "./project-card";
import { Project } from "@/data/types";

interface ProjectsViewProps {
  projects: Project[];
}

export default function ProjectsView({ projects }: ProjectsViewProps) {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6" aria-label="Projects">
      <div className="max-w-5xl mx-auto">
        <AnimatedEntry>
          <SectionHeading
            eyebrow="Projects"
            title="Things I've built."
            subtitle="A selection of projects — from AI-powered tools to high-scale production systems."
          />
        </AnimatedEntry>

        {/* Featured projects */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            {featured.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                featured={featured.length === 1}
              />
            ))}
          </div>
        )}

        {/* Other projects */}
        {others.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={featured.length + i}
              />
            ))}
          </div>
        )}

        {projects.length === 0 && (
          <p className="text-foreground-muted text-sm">
            More projects coming soon.
          </p>
        )}
      </div>
    </section>
  );
}
