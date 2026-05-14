"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative section-pad px-6 lg:px-10 border-t border-fg/[0.06] overflow-hidden"
    >
      <div className="absolute inset-0 aurora pointer-events-none" />
      <div className="absolute inset-0 dotgrid opacity-60 pointer-events-none" />

      <div className="relative max-w-[1100px] mx-auto text-center grain">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span className="w-10 h-px bg-gold/40" />
          <span className="eyebrow">006 — Final word</span>
          <span className="w-10 h-px bg-gold/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="display text-[clamp(2.8rem,8vw,7rem)] leading-[0.9]"
        >
          Your dormant leads
          <br />
          <span className="serif-italic text-gold">are still warm.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 max-w-[580px] mx-auto text-fg-muted text-[17px] leading-[1.6] tracking-[-0.01em]"
        >
          15-min Zoom. Run the engine live on your CRM. Decide on the call.
          Pay only if you say yes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-[16px] py-4 px-7"
          >
            Book the 15-min demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M3 7h8M7 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="mailto:njessemandevamirtham@gmail.com"
            className="btn-ghost text-[16px] py-4 px-7"
          >
            Or reply by email
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-16 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-fg/[0.04] border border-fg/[0.08]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-shimmer" />
          <span className="text-[12.5px] text-fg-muted tracking-[-0.01em]">
            Currently taking 5 launch-priced pilots. $1,500 then $2,500.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
