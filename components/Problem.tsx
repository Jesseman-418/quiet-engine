"use client";

import { motion } from "framer-motion";

export default function Problem() {
  return (
    <section className="relative section-pad px-6 lg:px-10 border-t border-fg/[0.06] overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-12 lg:mb-16"
        >
          <span className="eyebrow">001 — The graveyard</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-12">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="display text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[0.92]"
            >
              Your CRM is a{" "}
              <span className="serif-italic text-gold">graveyard</span>.
              <br />
              <span className="text-fg-muted">You just don&apos;t see it.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5 lg:pl-10 lg:border-l lg:border-fg/[0.08]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-fg-muted text-[16.5px] leading-[1.65] tracking-[-0.01em]"
            >
              Every showing. Every open house. Every Zillow inquiry. Every
              &ldquo;we&rsquo;re thinking about it.&rdquo; They stack up for
              years and almost nobody touches them again.
              <br />
              <br />
              <span className="text-fg">
                A top producer at $5M+ GCI sits on 300–1,000+ dormant leads at
                any time. Most never get a second message.
              </span>
            </motion.p>
          </div>
        </div>

        <div className="mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-3 gap-px bg-fg/[0.06] border border-fg/[0.06] rounded-2xl overflow-hidden">
          {[
            {
              k: "92%",
              l: "of leads never get re-contacted after 90 days",
            },
            {
              k: "4–10",
              l: "extra closings/yr possible at 1% re-engagement",
            },
            {
              k: "$36K–$90K",
              l: "avg commission trapped in dormant pipeline",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.9,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-ink p-10 lg:p-12 flex flex-col gap-6 group hover:bg-ink-800 transition-colors"
            >
              <div className="display-tight tnum text-[3rem] lg:text-[4rem] text-fg leading-none">
                {s.k}
              </div>
              <div className="rule-gold w-12 group-hover:w-24 transition-all duration-500" />
              <div className="text-fg-muted text-[14.5px] leading-[1.55] tracking-[-0.01em]">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
