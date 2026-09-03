"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, MessageSquare, Copy, Check, ExternalLink } from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.03-.01-1.87-2.78.61-3.37-1.21-3.37-1.21-.45-1.17-1.11-1.48-1.11-1.48-.91-.63.07-.62.07-.62 1 .07 1.53 1.04 1.53 1.04.9 1.55 2.36 1.1 2.94.84.09-.66.35-1.1.64-1.36-2.22-.26-4.56-1.13-4.56-5.03 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.04a9.4 9.4 0 0 1 5 0c1.9-1.31 2.75-1.04 2.75-1.04.55 1.42.2 2.47.1 2.73.64.71 1.03 1.62 1.03 2.73 0 3.91-2.34 4.77-4.57 5.02.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Project Collaboration Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ulvia.yulianti@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "Project Collaboration Inquiry", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 900);
  };

  return (
    <section id="kontak" className="mx-auto max-w-5xl px-6 py-28 border-t border-line/60">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        {/* Left Column: Social & Email */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent flex items-center gap-1.5 font-semibold"
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Let&apos;s Connect &amp; Collaborate
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl"
          >
            Open for Frontend Developer roles &amp; project inquiries.
          </motion.h2>

          <p className="mt-4 text-sm leading-relaxed text-ink-dim sm:text-base">
            Have a project in mind, an open frontend engineering position, or want to discuss web development? I&apos;d love to hear from you.
          </p>

          {/* Email Quick Action Card */}
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-center justify-between rounded-xl border border-line bg-paper-surface p-4 shadow-xs">
              <div className="flex items-center gap-3.5">
                <div className="rounded-lg bg-accent/10 p-3 text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase text-ink-dim tracking-wider font-semibold">Primary Email</p>
                  <p className="font-medium text-sm sm:text-base text-ink">ulvia.yulianti@gmail.com</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1 font-mono text-xs text-ink-dim hover:text-accent p-2 rounded-lg border border-line hover:border-accent transition-colors cursor-pointer"
                title="Copy Email"
              >
                {emailCopied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>

            {/* Direct Mailto */}
            <a
              href="mailto:ulvia.yulianti@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-paper-surface p-3.5 font-mono text-xs uppercase tracking-wider text-ink font-semibold hover:border-accent hover:text-accent transition-all"
            >
              <ExternalLink className="h-4 w-4" /> Open Mail Client
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <p className="font-mono text-xs uppercase tracking-wider text-ink-dim mb-3">Connect on Platforms</p>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com/in/ulviayulianti"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 rounded-xl border border-line bg-paper-surface px-4 py-2.5 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <LinkedinIcon className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/ulviayulianti"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 rounded-xl border border-line bg-paper-surface px-4 py-2.5 font-mono text-xs text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl border border-line bg-paper-surface p-6 sm:p-8 shadow-sm"
        >
          <h3 className="font-display text-xl font-bold text-ink mb-1">
            Send a Direct Message
          </h3>
          <p className="text-xs text-ink-dim mb-6">
            Fill out the form below to send an instant inquiry.
          </p>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center text-emerald-700 dark:text-emerald-300"
            >
              <CheckCircle2 className="mx-auto h-10 w-10 mb-3 text-emerald-500" />
              <p className="font-display font-bold text-lg">Message Delivered!</p>
              <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
                Thank you for reaching out. I will respond to your message promptly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-ink-dim mb-1.5 font-semibold">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full rounded-xl border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-ink-dim mb-1.5 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full rounded-xl border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-ink-dim mb-1.5 font-semibold">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  required
                  placeholder="Frontend Role / Website Project"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full rounded-xl border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent"
                />
              </div>

              <div>
                <label className="block font-mono text-[11px] uppercase tracking-wider text-ink-dim mb-1.5 font-semibold">
                  Message Details
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project scope, timeline, or hiring position..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full rounded-xl border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none transition-colors focus:border-accent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-mono text-xs uppercase tracking-widest text-white transition-all hover:bg-accent/90 disabled:opacity-50 font-semibold cursor-pointer shadow-sm"
              >
                {status === "submitting" ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
