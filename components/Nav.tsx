"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md transition-colors">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
        <div className="flex items-center gap-3">
          <a
            href="#top"
            className="font-mono text-sm tracking-tight text-ink font-bold flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <span className="rounded-lg bg-accent/10 px-2 py-0.5 text-accent font-mono text-xs">UY</span>
            <span>ulviay<span className="text-accent">.</span>dev</span>
          </a>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 transition-all duration-300 hover:border-emerald-500/60 hover:bg-emerald-500/20 hover:scale-105 group"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
            </span>
            <span className="font-medium group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
              Open for work
            </span>
          </a>
        </div>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-ink-dim transition-colors hover:text-accent font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions & Mobile Button */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex md:hidden p-2 text-ink hover:text-accent focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-line bg-paper-surface/95 backdrop-blur-lg px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4">
          <ul className="flex flex-col gap-4 font-mono text-xs uppercase tracking-widest text-ink">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1 text-ink-dim hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-end">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 font-mono text-xs uppercase text-white shadow-sm"
            >
              <Sparkles className="h-3 w-3" />
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

