import SectionHeading from "@/components/ui/section-heading";
import AnimatedEntry from "@/components/ui/animated-entry";
import TimelineItem from "@/components/ui/timeline-item";
import { Education } from "@/data/types";

interface EducationViewProps {
  education: Education[];
}

export default function EducationView({ education }: EducationViewProps) {
  return (
    <section id="education" className="py-24 px-6" aria-label="Education">
      <div className="max-w-5xl mx-auto">
        <AnimatedEntry>
          <SectionHeading eyebrow="Education" title="Academic background." />
        </AnimatedEntry>

        <div className="max-w-2xl">
          {education.map((edu, i) => (
            <AnimatedEntry key={edu.id} delay={i * 0.1}>
              <div className="bg-background-card rounded-xl border border-border p-6 sm:p-8 shadow-[var(--shadow-card)]">
                <TimelineItem
                  title={`${edu.degree}`}
                  subtitle={edu.institution}
                  dateRange={
                    edu.startDate + " — " + (edu.endDate ?? "Present")
                  }
                  bullets={[
                    edu.field,
                    ...(edu.highlights ?? []),
                  ]}
                  isFirst
                  isLast
                />
              </div>
            </AnimatedEntry>
          ))}
        </div>
      </div>
    </section>
  );
}
