import { cn } from "@/lib/cn";

type Variant = "default" | "accent" | "subtle";

const variantClasses: Record<Variant, string> = {
  default:
    "bg-background-subtle text-foreground-muted border border-border",
  accent:
    "bg-accent-subtle text-accent border border-accent/20",
  subtle:
    "bg-background-card text-foreground-faint border border-border",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}

export default function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium",
        "transition-colors duration-150",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
