"use client";

import { motion } from "framer-motion";
import { Code2, Gauge, Compass } from "lucide-react";

const timeline = [
  {
    year: "2022 — Present",
    title: "Front-End Web Developer",
    place: "PT Global Service Indonesia",
    details: [
      "Engineering & maintaining React / Next.js frontend modules for internal and enterprise client web products.",
      "Optimizing UI components for peak performance, accessibility (a11y), and code readability.",
      "Collaborating cross-functionally with backend engineers and UI/UX designers.",
    ],
  },
  {
    year: "2022 — 2025",
    title: "B.S. in Information Systems",
    place: "BINUS University · GPA 3.78 (Cum Laude)",
    details: [
      "Specialized in Software Engineering, Information Systems Architecture, & UI/UX Design.",
      "Graduated with highest academic honors.",
    ],
  },
  {
    year: "2018 — 2021",
    title: "Associate Degree in Info Management",
    place: "State Polytechnic of Malang (Polinema)",
    details: [
      "Studied web development fundamentals, relational database management, & algorithmic logic.",
    ],
  },
];

const principles = [
  {
    icon: Code2,
    title: "Clean & Modular Architecture",
    description: "UI components written with clear structure, testability, and long-term maintainability in mind.",
  },
  {
    icon: Gauge,
    title: "Performance First",
    description: "Minimizing bundle sizes, optimizing assets, and keeping Core Web Vitals strictly in the green.",
  },
  {
    icon: Compass,
    title: "User-Centered Detail",
    description: "Every pixel spacing, micro-animation, and color contrast engineered for user delight.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-paper-surface/40 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              About Me
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Small details, big impact.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-ink-dim sm:text-base">
              I believe intuitive interfaces are born from a fusion of clean code architecture,
              visual design sensitivity, and genuine empathy for user experience. Building real-world products
              has taught me to be meticulous from initial wireframe to final deployment.
            </p>

            <div className="mt-8 space-y-4">
              {principles.map((p, idx) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-line/60 bg-paper-surface p-3.5"
                  >
                    <div className="rounded-lg bg-accent/10 p-2 text-accent">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-ink">
                        {p.title}
                      </h4>
                      <p className="mt-0.5 text-xs text-ink-dim">{p.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-ink-dim">
              Career &amp; Education Journey
            </h3>
            <ol className="space-y-8 border-l border-line/80 pl-6">
              {timeline.map((entry, i) => (
                <motion.li
                  key={entry.title}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[1.88rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-paper bg-accent shadow-sm" />
                  <p className="font-mono text-[11px] uppercase tracking-widest text-accent font-medium">
                    {entry.year}
                  </p>
                  <p className="mt-1 font-display text-lg font-semibold text-ink">
                    {entry.title}
                  </p>
                  <p className="text-xs font-mono text-ink-dim">{entry.place}</p>

                  <ul className="mt-2.5 space-y-1">
                    {entry.details.map((detail, idx) => (
                      <li key={idx} className="text-xs leading-relaxed text-ink-dim/90 flex items-start gap-2">
                        <span className="text-accent text-[10px] mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
