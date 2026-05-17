"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "What CRMs do you support?",
    a: "Follow Up Boss, Lofty, Chime, kvCORE, Sierra Interactive, and BoldTrail out of the box. Anything with an API can be wired in (+$500 to install).",
  },
  {
    q: "How is this different from Real Geeks AI, Lead Wrangler, or FUB's built-in nurture?",
    a: "Those are SaaS tools — generic logic, generic voice, owned by them. The Listing Engine is installed on your stack: your CRM, your Claude API key, your Google Workspace, your voice trained on your closed conversations. They sell access. We hand you the keys. Cancel us and the engine keeps running.",
  },
  {
    q: "Do you use my data to train your AI?",
    a: "No. Your data stays in your Google Workspace, your CRM, and your Claude API account. We run on n8n self-hosted infrastructure. Nothing routes through us.",
  },
  {
    q: "How does the refund clause work?",
    a: "If the Lead Resurrector module doesn't generate 5 active conversations from your dormant leads in 30 days, you get every dollar back. No questions, no clauses, no friction.",
  },
  {
    q: "Will the emails sound like me?",
    a: "We train the voice model on whatever you've got — 5 emails minimum, 50 closed conversations ideal. Most clients hand over 12–15. The output sounds more like them than their own drafts do.",
  },
  {
    q: "Do I own the system after install?",
    a: "Completely. The n8n flows, the prompts, the integrations — all in your accounts. The monthly retainer covers tune-ups and API monitoring. Cancel and the engine keeps running.",
  },
  {
    q: "Will my MLS or brokerage flag this?",
    a: "No. We don't scrape MLS or violate any data agreements. Re-engagement of existing leads in your own CRM is something every agent already does manually — we just make it scale.",
  },
  {
    q: "How fast until I see results?",
    a: "First conversations resurface within 7 days of go-live. First closing usually lands inside 60 days. The exact number depends on how cold your dormant pipeline actually is.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative section-pad px-6 lg:px-10 border-t border-fg/[0.06]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="eyebrow mb-6">005 — Common questions</div>
              <h2 className="display text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[0.95] mb-8">
                Skeptical?{" "}
                <span className="serif-italic text-gold">Good.</span>
              </h2>
              <p className="text-fg-muted text-[15.5px] leading-[1.65] tracking-[-0.01em] max-w-[340px]">
                The agents who close best on this also push back hardest.
                Here&apos;s what they ask before the call.
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-fg/[0.1]">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.04,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b border-fg/[0.1] group"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between py-7 lg:py-8 text-left"
                    >
                      <span
                        className={`text-[18px] lg:text-[20px] tracking-[-0.02em] leading-[1.3] transition-colors ${
                          isOpen ? "text-fg" : "text-fg/90 group-hover:text-fg"
                        }`}
                      >
                        {f.q}
                      </span>
                      <span
                        className={`flex-shrink-0 ml-6 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-500 ${
                          isOpen
                            ? "bg-gold border-gold rotate-45"
                            : "border-fg/20 group-hover:border-gold"
                        }`}
                      >
                        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                          <path
                            d="M5.5 1v9M1 5.5h9"
                            stroke={isOpen ? "#08070a" : "currentColor"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>
                    <div
                      className="grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{
                        gridTemplateRows: isOpen ? "1fr" : "0fr",
                      }}
                    >
                      <div className="overflow-hidden">
                        <p className="text-fg-muted text-[15.5px] leading-[1.7] tracking-[-0.01em] pb-8 pr-12 max-w-[680px]">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
