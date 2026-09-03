"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-ink-dim sm:flex-row">
        <p>© {new Date().getFullYear()} Ulvia Yulianti — Crafted with Next.js &amp; Tailwind</p>

        <div className="flex items-center gap-6">
          <span className="hidden sm:inline-block text-ink-dim/60">
            📍 Jakarta, ID (UTC+7)
          </span>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
