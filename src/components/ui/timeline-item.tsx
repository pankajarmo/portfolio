import { cn } from "@/lib/cn";

interface TimelineItemProps {
  title: string;
  subtitle: string;
  dateRange: string;
  location?: string;
  bullets?: string[];
  isFirst?: boolean;
  isLast?: boolean;
  className?: string;
}

export default function TimelineItem({
  title,
  subtitle,
  dateRange,
  location,
  bullets,
  isFirst,
  isLast,
  className,
}: TimelineItemProps) {
  return (
    <div className={cn("relative flex gap-5", className)}>
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center flex-shrink-0 w-5">
        <div
          className={cn(
            "w-px flex-1 bg-border",
            isFirst ? "mt-2" : "mt-0"
          )}
        />
        <div className="w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-accent-subtle flex-shrink-0 my-1" />
        <div
          className={cn(
            "w-px flex-1 bg-border",
            isLast ? "mb-0 opacity-0" : "mb-0"
          )}
        />
      </div>

      {/* Content */}
      <div className="pb-8 flex-1 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="text-base font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-accent font-medium">{subtitle}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-xs font-medium text-foreground-muted whitespace-nowrap">
              {dateRange}
            </p>
            {location && (
              <p className="text-xs text-foreground-faint mt-0.5">{location}</p>
            )}
          </div>
        </div>

        {bullets && bullets.length > 0 && (
          <ul className="mt-3 space-y-1.5" role="list">
            {bullets.map((bullet, i) => (
              <li key={i} className="flex gap-2 text-sm text-foreground-muted">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/50 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
