import SectionHeading from "@/components/ui/section-heading";
import AnimatedEntry from "@/components/ui/animated-entry";
import TimelineItem from "@/components/ui/timeline-item";
import Badge from "@/components/ui/badge";
import { Job } from "@/data/types";
import { formatDateRange } from "@/lib/utils";

interface ExperienceViewProps {
  jobs: Job[];
}

export default function ExperienceView({ jobs }: ExperienceViewProps) {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-background-subtle"
      aria-label="Work Experience"
    >
      <div className="max-w-5xl mx-auto">
        <AnimatedEntry>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've worked."
            subtitle="4+ years building products that scale — from early-stage features to revenue-driving systems."
          />
        </AnimatedEntry>

        <div className="space-y-12">
          {jobs.map((job, jobIndex) => (
            <AnimatedEntry
              key={job.id}
              delay={jobIndex * 0.1}
              direction="left"
            >
              <div className="bg-background-card rounded-xl border border-border p-6 sm:p-8 shadow-[var(--shadow-card)]">
                {/* Company header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {job.company}
                    </h3>
                    <p className="text-sm text-foreground-faint mt-0.5">
                      {job.location}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {job.techStack.map((tech) => (
                      <Badge key={tech} variant="subtle">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Roles timeline */}
                <div className="space-y-0">
                  {job.roles.map((role, roleIndex) => (
                    <TimelineItem
                      key={`${job.id}-${roleIndex}`}
                      title={role.title}
                      subtitle={job.company}
                      dateRange={formatDateRange(role.startDate, role.endDate)}
                      bullets={role.bullets}
                      isFirst={roleIndex === 0}
                      isLast={roleIndex === job.roles.length - 1}
                    />
                  ))}
                </div>
              </div>
            </AnimatedEntry>
          ))}
        </div>
      </div>
    </section>
  );
}
