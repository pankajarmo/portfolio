"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/cn";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Intersection Observer for active section
  useEffect(() => {
    const ids = SITE.navLinks.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-nav"
          : "bg-transparent"
      )}
    >
      <nav
        className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-foreground hover:text-accent transition-colors"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="w-8 h-8 rounded-lg bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold">
            {SITE.initials}
          </span>
          <span className="hidden sm:inline">{SITE.name}</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {SITE.navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    isActive
                      ? "text-accent bg-accent-subtle"
                      : "text-foreground-muted hover:text-foreground hover:bg-background-subtle"
                  )}
                >
                  {label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Resume CTA — desktop */}
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium",
              "bg-accent text-accent-foreground hover:bg-accent-hover",
              "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            )}
          >
            Resume
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-background-subtle transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-background/95 backdrop-blur-md border-b border-border px-6 pb-4 flex flex-col gap-1">
          {SITE.navLinks.map(({ label, href }) => (
            <button
              key={href}
              onClick={() => handleNavClick(href)}
              className="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-foreground-muted hover:text-foreground hover:bg-background-subtle transition-colors"
            >
              {label}
            </button>
          ))}
          <a
            href={SITE.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium bg-accent text-accent-foreground hover:bg-accent-hover transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            View Resume
          </a>
        </div>
      </div>
    </header>
  );
}
