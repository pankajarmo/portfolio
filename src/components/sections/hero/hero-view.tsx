import { SITE } from "@/lib/constants";
import HeroCta from "./hero-cta";

export default function HeroView() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, var(--accent-subtle) 0%, transparent 70%)",
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        <HeroCta
          name={SITE.name}
          title={SITE.title}
          location={SITE.location}
          email={SITE.email}
          github={SITE.github}
          linkedin={SITE.linkedin}
          resumeUrl={SITE.resumeUrl}
        />
      </div>
    </section>
  );
}
