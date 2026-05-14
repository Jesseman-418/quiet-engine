"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    badge: "Launch pricing",
    name: "Pilot",
    price: "$1,500",
    cadence: "one-time",
    sub: "First 5 clients only. Then $2,500.",
    description:
      "The Lead Resurrector module. Installed in 7 days. Refund if it doesn't resurrect 5 conversations in 30 days.",
    bullets: [
      "Lead Resurrector module only",
      "7-day install",
      "30-day refund clause",
      "Slack support window",
    ],
    cta: "Reserve a pilot",
    href: "https://calendly.com/njessemandevamirtham/15-min-strategy-call",
    accent: false,
  },
  {
    badge: "Most chosen",
    name: "Full Engine",
    price: "$4,500",
    cadence: "+ $1,200/mo",
    sub: "All six modules.",
    description:
      "The complete installation. 14-day build. Monthly retune for prompt drift, new CRM fields, and seasonal patterns.",
    bullets: [
      "All 6 modules installed",
      "14-day install",
      "Monthly retune included",
      "Priority Slack",
      "You own the system",
    ],
    cta: "Book a demo",
    href: "https://calendly.com/njessemandevamirtham/15-min-strategy-call",
    accent: true,
  },
  {
    badge: "Save $2,400",
    name: "Annual",
    price: "$4,500",
    cadence: "+ $12,000/yr",
    sub: "Full engine, paid annually.",
    description:
      "Everything in Full Engine, plus quarterly deep-retune and a direct line for emergency tweaks.",
    bullets: [
      "All 6 modules",
      "Quarterly deep-retune",
      "Priority Slack",
      "Direct emergency line",
      "$2,400 saved vs monthly",
    ],
    cta: "Talk to Jesseman",
    href: "https://calendly.com/njessemandevamirtham/15-min-strategy-call",
    accent: false,
  },
];

export default function Packages() {
  return (
    <section
      id="pricing"
      className="relative section-pad px-6 lg:px-10 border-t border-fg/[0.06] overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] aurora pointer-events-none opacity-50" />

      <div className="relative max-w-[1280px] mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <div className="eyebrow mb-6">004 — Pricing</div>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="display text-[clamp(2.5rem,6vw,5.2rem)] leading-[0.92] max-w-[900px] mx-auto"
          >
            One closing pays for{" "}
            <span className="serif-italic text-gold">the whole year</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-8 text-fg-muted text-[16px] max-w-[520px] mx-auto leading-[1.6]"
          >
            $9K avg commission × 1 extra closing = 6× ROI on annual. The math
            doesn&apos;t need a spreadsheet.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {tiers.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.95,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative rounded-3xl p-9 lg:p-11 flex flex-col min-h-[600px] ${
                t.accent
                  ? "bg-bone text-ink gold-glow"
                  : "bg-ink-800/80 border border-fg/[0.08] text-fg"
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span
                  className={`font-mono text-[10px] tracking-[0.22em] uppercase ${
                    t.accent ? "text-ink/60" : "text-gold"
                  }`}
                >
                  {t.badge}
                </span>
                <span
                  className={`font-mono text-[10px] tracking-[0.18em] ${
                    t.accent ? "text-ink/40" : "text-fg/40"
                  }`}
                >
                  0{i + 1}/03
                </span>
              </div>

              <h3
                className={`display-tight text-[clamp(2rem,3vw,2.6rem)] leading-[1] mb-3 ${
                  t.accent ? "text-ink" : "text-fg"
                }`}
              >
                {t.name}
              </h3>
              <p
                className={`text-[14px] leading-[1.45] mb-10 ${
                  t.accent ? "text-ink/60" : "text-fg-muted"
                }`}
              >
                {t.sub}
              </p>

              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className={`display tnum text-[clamp(3rem,5vw,4.4rem)] leading-none ${
                    t.accent ? "text-ink" : "text-fg"
                  }`}
                >
                  {t.price}
                </span>
              </div>
              <div
                className={`font-mono text-[12px] tracking-[0.08em] mb-8 ${
                  t.accent ? "text-ink/50" : "text-fg-muted"
                }`}
              >
                {t.cadence}
              </div>

              <div
                className={`h-px w-full mb-7 ${
                  t.accent ? "bg-ink/10" : "bg-fg/10"
                }`}
              />

              <p
                className={`text-[14.5px] leading-[1.6] tracking-[-0.005em] mb-7 ${
                  t.accent ? "text-ink/75" : "text-fg-muted"
                }`}
              >
                {t.description}
              </p>

              <ul className="space-y-3 mb-10 flex-1">
                {t.bullets.map((b, j) => (
                  <li
                    key={j}
                    className={`flex items-start gap-3 text-[14px] leading-[1.5] ${
                      t.accent ? "text-ink/80" : "text-fg/85"
                    }`}
                  >
                    <span
                      className={`mt-[7px] w-1 h-1 rounded-full flex-shrink-0 ${
                        t.accent ? "bg-gold-500" : "bg-gold"
                      }`}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              <a
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                className={t.accent ? "btn-dark w-full justify-center" : "btn-primary w-full justify-center"}
              >
                {t.cta}
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M2.5 6.5h8M6.5 2.5l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-14 text-center text-fg-muted text-[13.5px] max-w-[640px] mx-auto leading-[1.6]"
        >
          Pricing in USD. Pay via card (US/UK/CA/AU agents) or international
          wire. 30-day refund clause applies to pilots. Unsupported CRM adds
          $500 to install.
        </motion.p>
      </div>
    </section>
  );
}
