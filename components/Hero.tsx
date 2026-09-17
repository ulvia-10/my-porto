"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDownRight, Copy, Check, Sparkles, MessageSquare, User, Code2 } from "lucide-react";
import Image from "next/image";
import profilePic from "../public/ulvia-profile.jpg";

const easeOut = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const codeLines = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: "name: 'Ulvia Yulianti'," },
  { indent: 1, text: "role: 'Frontend Developer'," },
  { indent: 1, text: "core: ['React 19', 'Next.js 16', 'TypeScript']," },
  { indent: 1, text: "reach: ['Tailwind CSS', 'WordPress', 'REST API']," },
  { indent: 1, text: "status: 'Available for Hiring & Projects'," },
  { indent: 0, text: "};" },
];

const stats = [
  { value: "4+ Yrs", label: "Industry Experience", sub: "PT Global Service Indonesia" },
  { value: "3.78", label: "Binus University GPA", sub: "B.S. Information Systems" },
  { value: "98+", label: "Lighthouse Speed Index", sub: "Clean & Accessible Code" },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"photo" | "code">("photo");

  const handleCopyCode = () => {
    const rawText = codeLines.map((l) => " ".repeat(l.indent * 2) + l.text).join("\n");
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[500px] w-[800px] opacity-30 dark:opacity-20 blur-3xl bg-gradient-to-tr from-accent via-indigo-500 to-purple-500 rounded-full"
      />
      <div
        aria-hidden
        className="bg-grid-pattern pointer-events-none absolute inset-x-0 top-0 h-[600px] opacity-60"
        style={{
          maskImage: "linear-gradient(to bottom, black 30%, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent)",
        }}
      />

      <div className="mx-auto grid max-w-5xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative z-10">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.15em] text-accent font-semibold shadow-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Frontend Developer · Jakarta, Indonesia
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]"
          >
            Hi 👋, I&apos;m Ulvia — building
            <span className="text-accent"> thoughtfully engineered</span> web interfaces.
          </motion.h1>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-white transition-all hover:bg-accent/90 hover:scale-[1.02] shadow-md font-semibold"
            >
              Explore Portfolio
              <ArrowDownRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-paper-surface px-5 py-3.5 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-accent hover:text-accent font-medium shadow-xs"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid grid-cols-3 gap-4 border-t border-line/70 pt-8"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  {stat.value}
                </p>
                <p className="font-mono text-[11px] font-semibold leading-tight text-ink">
                  {stat.label}
                </p>
                <p className="text-[11px] text-ink-dim/70 truncate">{stat.sub}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -1 }}
          animate={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
          whileHover={{ rotate: 0, scale: 1.01 }}
          className="relative mx-auto w-full max-w-sm rounded-2xl border border-line bg-paper-surface p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)] transition-all"
        >
          <div className="mb-3 flex items-center justify-between border-b border-line/50 pb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
            </div>

            {/* Toggle Tabs */}
            <div className="flex items-center gap-1 rounded-lg bg-paper p-0.5 border border-line/60">
              <button
                onClick={() => setActiveTab("photo")}
                className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-mono transition-all ${activeTab === "photo"
                  ? "bg-accent text-white font-semibold shadow-xs"
                  : "text-ink-dim hover:text-ink"
                  }`}
              >
                <User className="h-3 w-3" />
                <span>Photo</span>
              </button>
              <button
                onClick={() => setActiveTab("code")}
                className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-mono transition-all ${activeTab === "code"
                  ? "bg-accent text-white font-semibold shadow-xs"
                  : "text-ink-dim hover:text-ink"
                  }`}
              >
                <Code2 className="h-3 w-3" />
                <span>Code</span>
              </button>
            </div>
          </div>

          {/* Photo Content */}
          {activeTab === "photo" ? (
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-accent/5 to-accent/20 p-1.5">
              <div className="relative h-96 w-full overflow-hidden rounded-lg border border-line/50 shadow-inner">
                <Image
                  src={profilePic}
                  alt="Ulvia Yulianti - Frontend Developer"
                  fill
                  quality={100}
                  unoptimized
                  priority
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                {/* Floating Overlay Info */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-base font-bold drop-shadow-md">
                        Ulvia Yulianti
                      </h3>
                      <p className="font-mono text-[10px] text-emerald-300 font-medium">
                        Web Developer
                      </p>
                    </div>
                    <span className="rounded-full bg-black/40 backdrop-blur-md border border-white/20 px-2 py-0.5 font-mono text-[9px] text-white/90">
                      Jakarta, ID
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Code Content */
            <div>
              <div className="mb-2 flex items-center justify-between">
                <span className="font-mono text-[10px] text-ink-dim/70">developer.ts</span>
                <button
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1 font-mono text-[10px] text-ink-dim hover:text-accent transition-colors cursor-pointer px-2 py-0.5 rounded-md hover:bg-paper"
                  title="Copy snippet"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="overflow-x-auto font-mono text-[12px] leading-relaxed text-ink-dim py-2">
                {codeLines.map((line, i) => (
                  <div key={i} style={{ paddingLeft: `${line.indent * 0.8}rem` }} className="py-0.5">
                    <span className="mr-3 select-none text-ink-dim/40">{i + 1}</span>
                    <span
                      className={
                        i === 0 || i === codeLines.length - 1
                          ? "text-ink font-semibold"
                          : line.text.includes("status")
                            ? "text-emerald-600 dark:text-emerald-400 font-medium"
                            : line.text.includes("role")
                              ? "text-accent font-medium"
                              : ""
                      }
                    >
                      {line.text}
                    </span>
                  </div>
                ))}
              </pre>
            </div>
          )}

          <div className="mt-4 border-t border-line/50 pt-3 flex items-center justify-between text-[11px] font-mono text-ink-dim">
            <span className="flex items-center gap-2 font-medium">
              <span className="relative flex h-2 w-2 items-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
              </span>
              Ready for collaboration
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

