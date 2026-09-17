"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Zap, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  gradient: string;
  badgeText: string;
}

const services: ServiceItem[] = [
  {
    icon: Code2,
    title: "Next.js & React Web Apps",
    subtitle: "Frontend Engineering",
    description:
      "Building fast, scalable, and responsive web applications with Next.js App Router, TypeScript, and React 19.",
    deliverables: [
      "Custom Web Applications",
      "Interactive Dashboards & Portals",
      "REST API & GraphQL Integration",
      "Type-safe Code Architecture",
    ],
    gradient: "from-blue-500/10 via-blue-500/5 to-transparent",
    badgeText: "Core Specialty",
  },
  {
    icon: Layout,
    title: "UI Systems & Visual Craft",
    subtitle: "Design & Interaction",
    description:
      "Crafting pixel-perfect design systems, reusable Tailwind component libraries, and smooth micro-animations.",
    deliverables: [
      "Accessible (a11y) UI Components",
      "Tailwind CSS & Framer Motion",
      "Responsive Layout Adaptation",
      "Dark & Light Mode Integration",
    ],
    gradient: "from-purple-500/10 via-purple-500/5 to-transparent",
    badgeText: "High Aesthetic",
  },
  {
    icon: Zap,
    title: "Performance & SEO Tuning",
    subtitle: "Web Speed Optimization",
    description:
      "Optimizing load speeds, Core Web Vitals, asset compression, and search engine visibility for maximal user retention.",
    deliverables: [
      "Lighthouse 95+ Audit & Fixes",
      "Next.js SSR & Caching",
      "Clean Semantic SEO Structure",
      "Smooth 60fps Animation Tuning",
    ],
    gradient: "from-amber-500/10 via-amber-500/5 to-transparent",
    badgeText: "Measurable Impact",
  },
  {
    icon: Globe,
    title: "WordPress & Custom CMS",
    subtitle: "Website & Landing Pages",
    description:
      "Designing conversion-focused business websites and WordPress solutions with custom CSS/JS enhancements.",
    deliverables: [
      "Elementor Pro & Theme Setup",
      "High-Converting Landing Pages",
      "Custom Styles & Script Tweaks",
      "Fast Turnaround Delivery",
    ],
    gradient: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    badgeText: "Flexibility",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t border-line/60 py-24 bg-paper-surface/30">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5" />
              Services &amp; Solutions
            </p>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              How we can work together.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink-dim">
            Flexible collaboration models for full-time frontend roles, freelance web projects, or technical consultations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-paper-surface p-7 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-md bg-gradient-to-b ${service.gradient}`}
              >
                <div>
                  <div className="mb-5 flex items-center justify-between">
                    <div className="rounded-xl border border-accent/20 bg-accent/10 p-3 text-accent transition-transform group-hover:scale-110">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="rounded-full border border-line bg-paper px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-dim">
                      {service.badgeText}
                    </span>
                  </div>

                  <p className="font-mono text-xs uppercase tracking-wider text-accent font-medium mb-1">
                    {service.subtitle}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-ink group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-ink-dim">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-line/60 pt-4">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 font-mono text-[11px] text-ink-dim">
                        <CheckCircle2 className="h-3.5 w-3.5 text-accent flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-ink font-semibold group-hover:text-accent transition-colors"
                  >
                    <span>Start a Project</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
