import { cn } from "@/lib/cn";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium",
        "bg-background-subtle text-foreground-faint border border-border",
        className
      )}
    >
      {children}
    </span>
  );
}
