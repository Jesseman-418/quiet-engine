"use client";

import { motion, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 lg:px-10 overflow-hidden aurora dotgrid"
    >
      <div className="absolute top-[64px] inset-x-6 lg:inset-x-10 rule-strong" />

      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1100px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-gold/[0.12] via-transparent to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-[1280px] w-full mx-auto pt-28 pb-24 lg:pt-32 lg:pb-32 grain">
        <motion.div
          initial="hidden"
          animate={mounted ? "show" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="flex items-center justify-center gap-3 mb-12 lg:mb-14"
        >
          <span className="w-8 h-px bg-gold/40" />
          <span className="eyebrow">For top-producing real estate agents</span>
          <span className="w-8 h-px bg-gold/40" />
        </motion.div>

        <motion.h1
          initial="hidden"
          animate={mounted ? "show" : "hidden"}
          variants={fadeUp}
          custom={1}
          className="display text-center text-[clamp(3.8rem,12vw,10.5rem)] leading-[0.88]"
        >
          Resurrect
          <br />
          <span className="serif-italic text-gold">dormant</span>{" "}
          <span className="text-fg/95">leads.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate={mounted ? "show" : "hidden"}
          variants={fadeUp}
          custom={3}
          className="mt-12 lg:mt-14 max-w-[560px] mx-auto text-center text-fg-muted text-[17.5px] lg:text-[19px] leading-[1.55] tracking-[-0.012em]"
        >
          When a buyer tours your listing, asks 8 questions, then ghosts for 6 months — what happens to them?{" "}
          <span className="text-fg">15 min on Zoom. No pitch. Just a real conversation about the back-half of your funnel.</span>
        </motion.p>

        <motion.div
          initial="hidden"
          animate={mounted ? "show" : "hidden"}
          variants={fadeUp}
          custom={4}
          className="mt-12 lg:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="https://calendly.com/njessemandevamirtham/listing-engine"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book the 15-min call
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
        </motion.div>

        <motion.div
          initial="hidden"
          animate={mounted ? "show" : "hidden"}
          variants={fadeUp}
          custom={5}
          className="mt-10 lg:mt-12 flex flex-col items-center gap-3"
        >
          <span className="eyebrow-muted text-[10px]">Works with</span>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 max-w-[640px]">
            {[
              "Follow Up Boss",
              "Lofty",
              "Chime",
              "kvCORE",
              "Sierra",
              "BoldTrail",
            ].map((crm, i, arr) => (
              <span
                key={crm}
                className="flex items-center gap-5 text-[13.5px] text-fg/75 tracking-[-0.01em]"
              >
                {crm}
                {i < arr.length - 1 && (
                  <span className="text-fg/25 hidden sm:inline">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={mounted ? "show" : "hidden"}
          variants={fadeUp}
          custom={6}
          className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-fg/[0.06] border border-fg/[0.06] rounded-2xl overflow-hidden backdrop-blur-md"
        >
          {[
            { v: "15", l: "min on Zoom" },
            { v: "live", l: "demo on your data" },
            { v: "0", l: "pitch · 0 pressure" },
            { v: "1:1", l: "with the founder" },
          ].map((m, i) => (
            <div
              key={i}
              className="bg-ink/60 p-7 lg:p-9 flex flex-col gap-2 text-left"
            >
              <span className="display-tight tnum text-[2.4rem] lg:text-[3.2rem] tracking-tightest text-fg">
                {m.v}
              </span>
              <span className="eyebrow-muted text-[10px]">{m.l}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={mounted ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="eyebrow-muted text-[9px]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-fg/30 to-transparent" />
      </motion.div>
    </section>
  );
}
