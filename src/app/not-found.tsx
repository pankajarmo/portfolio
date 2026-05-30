import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
        404
      </p>
      <h1 className="text-4xl font-bold text-foreground mb-3">
        Page not found
      </h1>
      <p className="text-foreground-muted mb-8 max-w-sm">
        Looks like this page doesn&apos;t exist. Let&apos;s get you back home.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-medium text-sm hover:bg-accent-hover transition-all duration-200"
      >
        Go home
      </Link>
    </div>
  );
}
