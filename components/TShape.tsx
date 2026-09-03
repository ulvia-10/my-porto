"use client";

import { motion, type Variants } from "framer-motion";

const drawEase = [0.65, 0, 0.35, 1] as const;

const breadth = [
  "WordPress & Elementor",
  "UI/UX & Visual Craft",
  "REST API Integration",
  "Docker & Git Workflow",
];

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.1, ease: drawEase },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.5 + i * 0.1 },
  }),
};

export default function TShape() {
  return (
    <section id="keahlian" className="mx-auto max-w-5xl px-6 py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
            How I Work
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Deep in one area.
            <br />
            Broad around it.
          </h2>
          <p className="mt-5 max-w-md text-ink-dim leading-relaxed">
            I adopt a{" "}
            <span className="font-medium text-ink">T-shaped model</span>: deep technical mastery in
            front-end engineering, complemented by working knowledge across adjacent disciplines for smooth cross-functional collaboration.
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
          <svg
            viewBox="0 0 320 260"
            className="w-full max-w-xs"
            fill="none"
            aria-hidden
          >
            <motion.path
              d="M 20 40 H 300"
              stroke="var(--accent)"
              strokeWidth="10"
              strokeLinecap="round"
              variants={draw}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
            />
            <motion.path
              d="M 160 40 V 240"
              stroke="var(--ink)"
              strokeWidth="10"
              strokeLinecap="round"
              variants={draw}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: 0.25 }}
            />
          </svg>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.4 }}
            className="-mt-6 rounded-lg border border-line bg-paper-surface px-3 py-1.5 font-mono text-[11px] text-ink"
          >
            React · Next.js · TypeScript
          </motion.div>

          <ul className="mt-8 grid w-full grid-cols-2 gap-3">
            {breadth.map((skill, i) => (
              <motion.li
                key={skill}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="rounded-lg border border-line bg-paper-surface px-3 py-2.5 font-mono text-[11px] leading-snug text-ink-dim"
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
