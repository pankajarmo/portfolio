"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/cn";

interface ContactFormProps {
  email: string;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm({ email }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Pankaj,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = cn(
    "w-full px-4 py-3 rounded-lg text-sm",
    "bg-background-card border border-border",
    "text-foreground placeholder:text-foreground-faint",
    "focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent",
    "transition-all duration-200"
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-background-card rounded-xl border border-border p-6 sm:p-8 shadow-[var(--shadow-card)] space-y-4"
      aria-label="Contact form"
    >
      <div>
        <label
          htmlFor="contact-name"
          className="block text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-1.5"
        >
          Name
        </label>
        <input
          id="contact-name"
          type="text"
          required
          placeholder="Your name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="contact-email"
          className="block text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-1.5"
        >
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          placeholder="your@email.com"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className={inputClass}
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-1.5"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          placeholder="What would you like to discuss?"
          value={form.message}
          onChange={(e) =>
            setForm((f) => ({ ...f, message: e.target.value }))
          }
          className={cn(inputClass, "resize-none")}
        />
      </div>

      <button
        type="submit"
        className={cn(
          "w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg",
          "text-sm font-medium transition-all duration-200",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
          submitted
            ? "bg-green-500 text-white"
            : "bg-accent text-accent-foreground hover:bg-accent-hover"
        )}
      >
        {submitted ? (
          <>
            <CheckCircle size={16} />
            Email client opened!
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>

      <p className="text-xs text-foreground-faint text-center">
        This will open your email client with the message pre-filled.
      </p>
    </form>
  );
}
