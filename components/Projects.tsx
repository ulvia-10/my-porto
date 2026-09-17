"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Award, Layers, Eye, X, Check, ExternalLink, Code2 } from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.61-3.37-1.21-3.37-1.21-.45-1.17-1.11-1.48-1.11-1.48-.91-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.36-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.04a9.4 9.4 0 0 1 5 0c1.9-1.31 2.75-1.04 2.75-1.04.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.02.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export interface Project {
  id: string;
  title: string;
  category: "nextjs" | "wordpress" | "react";
  categoryLabel: string;
  description: string;
  longDescription: string;
  impact: string;
  highlights: string[];
  stack: string[];
  gradient: string;
  highlightBadge: string;
  live: string;
  code: string;
}

const projects: Project[] = [
  {
    id: "dashboard",
    title: "Enterprise Sales & Analytics Dashboard",
    category: "nextjs",
    categoryLabel: "Next.js & App Router",
    description:
      "Real-time transaction data visualization platform featuring interactive chart filters, server components, and REST API integration.",
    longDescription:
      "Built for internal data analysis, this web dashboard processes complex transactional datasets with seamless dynamic filtering and low latency. Engineered with Next.js Server Components for fast initial page load speeds and client-side caching.",
    impact: "Boosted chart rendering and data processing speeds by 40% using Next.js Server Components.",
    highlights: [
      "Real-time interactive data charts with dynamic time range filters",
      "Server-side data fetching with optimized caching mechanisms",
      "Responsive data tables with CSV download & pagination",
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Recharts", "REST API"],
    gradient: "from-blue-600 via-indigo-600 to-sky-500",
    highlightBadge: "⚡ Performance: 98/100",
    live: "https://github.com/ulviayulianti",
    code: "https://github.com/ulviayulianti",
  },
  {
    id: "umkm-landing",
    title: "High-Converting E-Commerce Platform",
    category: "wordpress",
    categoryLabel: "WordPress & Craft",
    description:
      "SEO-optimized landing page and product catalog system for a local brand, pairing Elementor design flexibility with crisp custom CSS tuning.",
    longDescription:
      "Designed to elevate brand authority and lead generation. Includes custom product catalog layouts, fast asset loading strategies, mobile responsive design, and seamless WhatsApp sales channel integration.",
    impact: "Increased visitor sales conversions and quote requests by 35%.",
    highlights: [
      "Custom responsive section layouts with Elementor Pro & custom CSS",
      "Integrated WhatsApp quick-order link for instant customer conversion",
      "Optimized images and lazy loading achieving under 1.2s load time",
    ],
    stack: ["WordPress", "Elementor Pro", "Custom CSS", "SEO Suite", "WooCommerce"],
    gradient: "from-amber-600 via-orange-500 to-yellow-500",
    highlightBadge: "🚀 Conversion: +35%",
    live: "https://github.com/ulviayulianti",
    code: "https://github.com/ulviayulianti",
  },
  {
    id: "design-system",
    title: "UI Component Library & Design Tokens",
    category: "react",
    categoryLabel: "React & UI System",
    description:
      "A collection of 20+ accessibility-tested (a11y) UI components built with modular architecture, dynamic dark/light theme support, and visual documentation.",
    longDescription:
      "Created to standardize UI components across web products. Includes customizable design tokens, keyboard navigation support, dark mode color contrasts, and interactive Storybook-style previews.",
    impact: "Accelerated new webpage development velocity by 2x.",
    highlights: [
      "20+ WCAG AAA compliant UI components (Buttons, Modals, Inputs, Cards)",
      "Dynamic dark/light mode token switching with zero layout shift",
      "Framer Motion fluid micro-interactions for enhanced UX",
    ],
    stack: ["React 19", "TypeScript", "Framer Motion", "Tailwind CSS", "Storybook"],
    gradient: "from-teal-600 via-emerald-500 to-cyan-500",
    highlightBadge: "♿ Accessibility: 100%",
    live: "https://github.com/ulviayulianti",
    code: "https://github.com/ulviayulianti",
  },
];

const categories = [
  { key: "all", label: "All Projects" },
  { key: "nextjs", label: "Next.js & TypeScript" },
  { key: "wordpress", label: "WordPress & Elementor" },
  { key: "react", label: "UI System & React" },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5" />
            Featured Work &amp; Case Studies
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            From mockup to real-world impact.
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-ink-dim">
          Every project is engineered with high performance standards, clean code architecture, and measurable user experience.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="mb-10 flex flex-wrap gap-2 border-b border-line pb-4">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`rounded-full px-4 py-1.5 font-mono text-xs transition-all cursor-pointer ${
                isActive
                  ? "bg-accent text-white font-medium shadow-sm"
                  : "bg-paper-surface text-ink-dim hover:text-ink hover:bg-line/40 border border-line/60"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Project Cards Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-surface transition-all duration-300 hover:border-accent hover:shadow-[0_16px_36px_-16px_rgba(0,0,0,0.18)]"
            >
              {/* Header Decorative Banner */}
              <div
                className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden p-5 flex flex-col justify-between text-white`}
              >
                <div className="bg-grid-pattern absolute inset-0 opacity-20" />
                <div className="relative z-10 flex justify-between items-start">
                  <span className="rounded-full bg-black/40 backdrop-blur-md px-3 py-1 font-mono text-[10px] font-semibold tracking-wider text-white border border-white/20">
                    {project.categoryLabel}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="rounded-full bg-white/20 backdrop-blur-md p-1.5 text-white hover:bg-white hover:text-ink transition-colors cursor-pointer"
                    title="Quick View Case Study"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-1 rounded-md bg-white/95 backdrop-blur-md px-2.5 py-1 font-mono text-[11px] font-semibold text-slate-900 shadow-sm">
                    {project.highlightBadge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6">
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="font-display text-lg font-semibold text-ink group-hover:text-accent transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="mt-2.5 text-xs leading-relaxed text-ink-dim">
                  {project.description}
                </p>

                {/* Impact Highlight */}
                <div className="mt-4 rounded-xl bg-accent-soft/60 border border-accent/15 p-3 text-[11px] leading-snug text-ink">
                  <span className="font-semibold text-accent flex items-center gap-1 mb-0.5">
                    <Award className="h-3.5 w-3.5" /> Key Metric:
                  </span>
                  {project.impact}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-paper border border-line px-2 py-0.5 font-mono text-[10px] text-ink-dim"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="rounded-md bg-paper border border-line px-1.5 py-0.5 font-mono text-[10px] text-ink-dim">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                {/* Links Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-accent font-semibold hover:underline cursor-pointer"
                  >
                    Details
                    <Eye className="h-3.5 w-3.5" />
                  </button>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-ink-dim hover:text-accent transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs uppercase text-ink font-medium hover:text-accent transition-colors"
                    >
                      Live <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Project Modal Quick View */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-paper-surface shadow-2xl"
            >
              {/* Header Gradient */}
              <div
                className={`h-36 bg-gradient-to-br ${selectedProject.gradient} p-6 flex flex-col justify-between relative text-white`}
              >
                <div className="flex justify-between items-start">
                  <span className="rounded-full bg-black/40 backdrop-blur-md px-3 py-1 font-mono text-xs font-semibold border border-white/20">
                    {selectedProject.categoryLabel}
                  </span>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="rounded-full bg-black/40 p-2 text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div>
                  <span className="rounded-md bg-white/95 text-slate-900 font-mono text-xs font-semibold px-2.5 py-1">
                    {selectedProject.highlightBadge}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink">
                    {selectedProject.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Impact */}
                <div className="rounded-xl border border-accent/20 bg-accent/10 p-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold flex items-center gap-1.5">
                    <Award className="h-4 w-4" /> Measurable Outcome &amp; Impact
                  </p>
                  <p className="mt-1 text-xs text-ink font-medium leading-relaxed">
                    {selectedProject.impact}
                  </p>
                </div>

                {/* Highlights list */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-ink-dim mb-3 flex items-center gap-1.5">
                    <Code2 className="h-4 w-4 text-accent" /> Key Features &amp; Implementation Details
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-ink">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Stack */}
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-ink-dim mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-paper border border-line px-3 py-1 font-mono text-xs text-ink font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line/60 pt-6">
                  <div className="flex gap-3">
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 font-mono text-xs uppercase text-white font-semibold hover:bg-accent/90 transition-colors shadow-sm"
                    >
                      <ExternalLink className="h-4 w-4" /> Live Demo
                    </a>
                    <a
                      href={selectedProject.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-line bg-paper px-4 py-2.5 font-mono text-xs uppercase text-ink hover:border-accent transition-colors"
                    >
                      <GithubIcon className="h-4 w-4" /> Source Code
                    </a>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="font-mono text-xs uppercase text-ink-dim hover:text-ink cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
