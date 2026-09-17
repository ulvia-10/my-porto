"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  level: string;
  iconSvg: React.ReactNode;
}

const techStack: TechItem[] = [
  {
    name: "React 19",
    category: "Core Frontend",
    level: "Expert",
    iconSvg: (
      <svg className="h-7 w-7 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "Next.js 16",
    category: "Framework",
    level: "Advanced",
    iconSvg: (
      <svg className="h-7 w-7 text-ink" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.5 13.8L9.7 7.5h1.8l4.4 7.2h.6v.6zm-1.8-8.3h1.8v8.6h-1.8V7.5z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Language",
    level: "Advanced",
    iconSvg: (
      <svg className="h-7 w-7 text-[#3178C6]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-1.187-.53 5.43 5.43 0 0 0-1.424-.183c-.612 0-1.077.135-1.393.404-.316.27-.475.643-.475 1.12 0 .363.097.66.29.89.194.23.486.425.877.587.39.16.897.332 1.52.515.753.224 1.36.46 1.82.71.46.25.815.58 1.066.99.25.41.376.937.376 1.58 0 .664-.176 1.25-.528 1.76a3.86 3.86 0 0 1-1.503 1.24c-.65.317-1.442.475-2.378.475-.823 0-1.597-.107-2.32-.32a7.35 7.35 0 0 1-1.782-.78v-2.61c.642.428 1.344.757 2.106.987.763.23 1.488.345 2.176.345.623 0 1.1-.12 1.432-.36.332-.24.498-.58.498-1.02 0-.34-.09-.62-.27-.84a3.3 3.3 0 0 0-.82-.58c-.37-.18-.86-.36-1.47-.54-.74-.21-1.34-.44-1.8-.69a2.9 2.9 0 0 1-1.07-1.01c-.26-.42-.39-.94-.39-1.57 0-.67.18-1.26.54-1.77a3.8 3.8 0 0 1 1.51-1.25c.65-.32 1.43-.48 2.34-.48zm-8.868.21v2.448H7.3v9.642H4.256V12.408H1.97v-2.448h7.65z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    level: "Expert",
    iconSvg: (
      <svg className="h-7 w-7 text-[#06B6D4]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    category: "Animation",
    level: "Advanced",
    iconSvg: (
      <svg className="h-7 w-7 text-[#0055FF]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    ),
  },
  {
    name: "WordPress",
    category: "CMS & Craft",
    level: "Advanced",
    iconSvg: (
      <svg className="h-7 w-7 text-[#21759B]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm.8 15.6l-2.4-7h1.6l1.6 5 1.5-5h1.5l-2.4 7h-1.4z" />
      </svg>
    ),
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    level: "Advanced",
    iconSvg: (
      <svg className="h-7 w-7 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.216 1.38-.071 1.887.436.5.502.647 1.23.44 1.87l2.67 2.67c.64-.207 1.37-.06 1.87.44.69.69.69 1.8 0 2.49-.69.69-1.8.69-2.49 0-.53-.53-.66-1.3-.41-1.92L12.8 8.28v6.62c.16.08.31.18.45.32.69.69.69 1.8 0 2.49-.69.69-1.8.69-2.49 0-.69-.69-.69-1.8 0-2.49.18-.18.39-.31.61-.4V8.12c-.22-.09-.43-.22-.61-.4-.53-.53-.66-1.3-.41-1.92L7.6 3.04.452 10.19c-.603.605-.603 1.582 0 2.188l10.48 10.478c.604.604 1.582.604 2.186 0l10.428-10.43c.604-.603.604-1.58 0-2.187z" />
      </svg>
    ),
  },
  {
    name: "REST API & JSON",
    category: "Integration",
    level: "Advanced",
    iconSvg: (
      <svg className="h-7 w-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    name: "Vitest",
    category: "Testing & QA",
    level: "Intermediate",
    iconSvg: (
      <svg className="h-7 w-7 text-[#729B1B]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.5 12c0 5.8-4.7 10.5-10.5 10.5S1.5 17.8 1.5 12 6.2 1.5 12 1.5 22.5 6.2 22.5 12zm-9.3-5.2l-4.5 9h2.3l.9-1.9h4.4l.9 1.9h2.3l-4.5-9h-1.8zm.9 2.2l1.4 3.1h-2.8l1.4-3.1z" />
      </svg>
    ),
  },
  {
    name: "Docker",
    category: "DevOps",
    level: "Intermediate",
    iconSvg: (
      <svg className="h-7 w-7 text-[#2496ED]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.185zm-2.954-5.43h2.118a.185.185 0 00.186-.186V3.574a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185zm0 2.716h2.118a.185.185 0 00.186-.186V6.29a.185.185 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.186.185.186zm-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm-2.956 0h2.12a.185.185 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.143a.185.185 0 00-.185.185v1.887c0 .102.083.186.185.186zm5.886 2.714h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185zm-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.956 0h2.12a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186H5.143a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185zm-2.955 0h2.119a.186.186 0 00.185-.185V9.006a.185.185 0 00-.185-.186H2.188a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185z" />
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-20 border-t border-line/60">
      <div className="mb-10 text-center sm:text-left">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent flex items-center gap-1.5 justify-center sm:justify-start font-semibold">
          <Cpu className="h-3.5 w-3.5" />
          Technologies &amp; Tools
        </p>
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Core Tech Stack
        </h2>
        <p className="mt-3 max-w-lg text-sm text-ink-dim leading-relaxed">
          The web frameworks, design systems, and developer tools I use daily to engineer modern products.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative flex flex-col items-center rounded-2xl border border-line bg-paper-surface p-5 text-center transition-all hover:border-accent hover:shadow-md"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-paper p-2 shadow-inner group-hover:scale-110 transition-transform">
              {tech.iconSvg}
            </div>

            <h3 className="font-display text-sm font-semibold text-ink group-hover:text-accent transition-colors">
              {tech.name}
            </h3>

            <p className="mt-1 font-mono text-[10px] text-ink-dim">
              {tech.category}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
