"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/providers/theme-provider";
import { cn } from "@/lib/cn";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={cn(
        "relative p-2 rounded-lg transition-all duration-200",
        "text-foreground-muted hover:text-accent hover:bg-accent-subtle",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      )}
    >
      <span className="relative block w-5 h-5">
        <Sun
          size={20}
          className={cn(
            "absolute inset-0 transition-all duration-300",
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-50"
          )}
        />
        <Moon
          size={20}
          className={cn(
            "absolute inset-0 transition-all duration-300",
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-50"
          )}
        />
      </span>
    </button>
  );
}
