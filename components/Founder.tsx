"use client";

import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative section-pad px-6 lg:px-10 border-t border-fg/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="eyebrow mb-6">004 — Who built it</div>
              <h2 className="display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[0.95] mb-8">
                One operator.{" "}
                <span className="serif-italic text-gold">Not an agency.</span>
              </h2>
              <p className="text-fg-muted text-[15.5px] leading-[1.65] tracking-[-0.01em] max-w-[340px]">
                The person who writes the code is the person on your call,
                your install, and your Slack at week six.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="border border-fg/[0.08] rounded-2xl p-8 lg:p-12 bg-fg/[0.015]"
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-[22px] tracking-[-0.02em] text-fg font-medium">
                  Jesseman
                </span>
                <span className="text-fg-muted text-[14px]">
                  · solo operator · India
                </span>
              </div>

              <div className="space-y-5 text-fg-muted text-[15.5px] leading-[1.7] tracking-[-0.01em] max-w-[640px]">
                <p>
                  I build automation systems — Python, agents, MCP, CRMs. The
                  Listing Engine is one of them. Same person designs the
                  workflow, writes the prompts, wires your CRM, and answers
                  your Slack when something breaks at 11pm.
                </p>
                <p className="text-fg">
                  No SDR. No account manager. No 4-person discovery handoff.
                  If you book the call, you talk to the builder.
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-fg/[0.08] flex flex-wrap items-center gap-x-8 gap-y-4">
                <a
                  href="https://github.com/Jesseman-418"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[14px] text-fg/80 hover:text-gold transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  github.com/Jesseman-418
                </a>
                <a
                  href="mailto:njessemandevamirtham@gmail.com"
                  className="text-[14px] text-fg/80 hover:text-gold transition-colors"
                >
                  njessemandevamirtham@gmail.com
                </a>
                <span className="text-[14px] text-fg-muted">
                  Currently working: 5 launch pilots only
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
