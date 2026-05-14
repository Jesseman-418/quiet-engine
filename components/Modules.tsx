"use client";

import { motion } from "framer-motion";

const modules = [
  {
    n: "01",
    name: "Lead Resurrector",
    role: "Core engine",
    body: "Pulls every dormant lead from your CRM. Scores them HOT / WARM / COLD by recency, intent, and engagement signals. Drafts personalized re-engagement in your voice. You review. You hit send.",
    spec: "100 leads → 4 minutes → drafted in Gmail",
  },
  {
    n: "02",
    name: "Listing Auto-Writer",
    role: "Content engine",
    body: "MLS photos + property data in. Polished listing copy, 5 social posts, an email blast, and a 60-sec video script out. Same voice. Every time.",
    spec: "One listing → seven assets",
  },
  {
    n: "03",
    name: "CMA Generator",
    role: "Sales tool",
    body: "Three comps, a branded CMA PDF, ready in two minutes. Sent to your prospect before the appraisal even shows up.",
    spec: "3 comps → branded CMA → 120s",
  },
  {
    n: "04",
    name: "Showing Follow-Up Bot",
    role: "Lifecycle automation",
    body: "Every showing triggers a five-touch sequence in your voice. The buyer thinks you're personally invested. You haven't lifted a finger.",
    spec: "Showing → 5-touch sequence",
  },
  {
    n: "05",
    name: "Review Engine",
    role: "Reputation",
    body: "Post-close: an SMS, a personalized email, and a pre-drafted review your client just has to paste. Your Google rating compounds while you sleep.",
    spec: "Close → review → 5★",
  },
  {
    n: "06",
    name: "Open House Capture",
    role: "Acquisition",
    body: "QR code at the door triggers a 14-day drip that runs without you. Visitors who weren't ready in March become buyers in May.",
    spec: "QR → 14-day nurture",
  },
];

export default function Modules() {
  return (
    <section
      id="product"
      className="relative section-pad px-6 lg:px-10 border-t border-fg/[0.06] overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-10 mb-20 lg:mb-28">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-6">002 — The engine</div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="display text-[clamp(2.5rem,5.5vw,4.8rem)] leading-[0.92]"
            >
              Six modules.{" "}
              <span className="serif-italic text-gold">
                One installation.
              </span>
            </motion.h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 lg:pt-14">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-fg-muted text-[17px] leading-[1.6] tracking-[-0.012em]"
            >
              Same six modules for every client. No bespoke. No retainer
              creep. Installed in 7–14 days. You own the system. We hand over
              the keys.
            </motion.p>
          </div>
        </div>

        <div className="border-t border-fg/[0.08]">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.9,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group grid grid-cols-12 gap-4 lg:gap-10 items-baseline py-10 lg:py-14 border-b border-fg/[0.08] cursor-default hover:bg-fg/[0.015] transition-colors"
            >
              <div className="col-span-2 lg:col-span-1">
                <span className="font-mono text-[12px] tracking-[0.18em] text-gold">
                  {m.n}
                </span>
              </div>

              <div className="col-span-10 lg:col-span-4">
                <h3 className="display-tight text-[clamp(1.5rem,2.4vw,2.2rem)] leading-tight text-fg group-hover:text-gold transition-colors duration-500">
                  {m.name}
                </h3>
                <div className="eyebrow-muted mt-2">{m.role}</div>
              </div>

              <div className="col-span-12 lg:col-span-5 text-fg-muted text-[15.5px] leading-[1.65] tracking-[-0.01em]">
                {m.body}
              </div>

              <div className="col-span-12 lg:col-span-2 lg:text-right">
                <div className="font-mono text-[11.5px] text-fg/70 tracking-[0.04em] lg:max-w-[180px] lg:ml-auto">
                  {m.spec}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
