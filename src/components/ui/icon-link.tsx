import { cn } from "@/lib/cn";
import { type LucideIcon } from "lucide-react";

interface IconLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
  className?: string;
  size?: number;
  external?: boolean;
}

export default function IconLink({
  href,
  icon: Icon,
  label,
  className,
  size = 18,
  external = true,
}: IconLinkProps) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center p-2 rounded-lg",
        "text-foreground-muted hover:text-accent hover:bg-accent-subtle",
        "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        className
      )}
    >
      <Icon size={size} />
    </a>
  );
}
