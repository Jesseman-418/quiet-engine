"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "Day 1–2",
    title: "Discovery + voice training",
    body: "60-min call. We map your CRM, your pipeline, your tone. AI trains on your last 50 closed conversations so the drafts sound like you, not us.",
  },
  {
    n: "Day 3–6",
    title: "Build + connect",
    body: "We wire your CRM (Follow Up Boss, Lofty, Chime, kvCORE, Sierra, BoldTrail) into the engine. n8n self-hosted on free infrastructure. Your Claude API key. Your data never leaves your account.",
  },
  {
    n: "Day 7",
    title: "Live install + handoff",
    body: "First batch runs on your real dormant leads. You review the drafts. You hit send. You own the system. We&rsquo;re on Slack for 30 days of tune-ups.",
  },
];

export default function Process() {
  return (
    <section
      id="how"
      className="relative section-pad px-6 lg:px-10 border-t border-fg/[0.06] bg-ink-800/40 overflow-hidden"
    >
      <div className="absolute inset-0 dotgrid opacity-50 pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto">
        <div className="mb-20 lg:mb-28">
          <div className="eyebrow mb-6">003 — How it ships</div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="display text-[clamp(2.5rem,6vw,5.2rem)] leading-[0.9] max-w-[900px]"
          >
            Seven days.{" "}
            <span className="serif-italic text-gold">From cold</span> to
            cash-flowing.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-fg/[0.08] border border-fg/[0.08] rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.95,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative bg-ink p-10 lg:p-14 flex flex-col gap-7 min-h-[400px]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-[0.22em] text-gold uppercase">
                  {s.n}
                </span>
                <span className="font-mono text-[10px] text-fg/30 tracking-[0.18em]">
                  0{i + 1} / 03
                </span>
              </div>

              <h3
                className="display-tight text-[clamp(1.5rem,2.1vw,2rem)] leading-[1.05] text-fg"
                dangerouslySetInnerHTML={{ __html: s.title }}
              />

              <div className="rule-strong w-full" />

              <p
                className="text-fg-muted text-[15px] leading-[1.65] tracking-[-0.01em] flex-1"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-16 lg:mt-20 flex items-center justify-center gap-4 text-fg-muted text-[14px]"
        >
          <span className="w-16 h-px bg-gold/40" />
          <span className="eyebrow-muted">
            Day 30: 30-day refund window closes
          </span>
          <span className="w-16 h-px bg-gold/40" />
        </motion.div>
      </div>
    </section>
  );
}
