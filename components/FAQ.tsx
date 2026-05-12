"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Which service should I pick?",
    a: "If you have audience and no product — Ghost Operating (zero cash risk, 60/40 split). If you have a product and weak email — Email Engine ($2K/mo, 12 emails). If you have neither dialed in — Full Stack ($1.5K/mo + 65/35 split — you keep more than Ghost Operating). Most creators take Full Stack: better rev share, email engine running between launches, single point of contact.",
  },
  {
    q: "What does Ghost Operating actually cost?",
    a: "$0 upfront. No retainer. No setup fee. I take 40% of net product revenue (after payment processor + ad spend, before tax). You keep 60%. My incentives are aligned with yours — I only make money when you make money. 12-month partnership term, 30-day pause clause either side.",
  },
  {
    q: "What kind of products do you build?",
    a: "Whatever your audience will pay for. Most common: 4-8 week cohort programs ($300-$1,500), digital protocol PDFs ($29-$99), templates / toolkits ($49-$199), community memberships ($29-$99/mo). On the strategy call I run the audience math live and tell you which product type your numbers actually support.",
  },
  {
    q: "How long does Ghost Operating take?",
    a: "2-3 weeks to build the product + launch assets. 2 weeks for the launch itself. Roughly 4-5 weeks from first call to first sale. I move fast because I use AI-powered workflows on the production side while you stay focused on the face/voice work.",
  },
  {
    q: "What do I actually do with Email Engine?",
    a: "One voice memo per week (15–20 min). You tell me what you want to push, who you spoke to recently, what's going on in your niche. I ship 12 emails a month from that — newsletter, sales sequences, launch emails, nurture flows. You approve before send. Voice-matched from your podcast / YouTube / IG so it sounds like you, not me.",
  },
  {
    q: "Why is the Full Stack split better than Ghost Operating?",
    a: "Because you're paying me a $1,500/mo retainer to write your emails, which covers my time and removes my cash risk. That lets me give you a better rev share (65/35 vs 60/40 on Ghost Operating). The math: at moderate scale you make significantly more under Full Stack — better split + the email engine running between launches. The retainer pays for itself inside one solid email send.",
  },
  {
    q: "What if a launch flops?",
    a: "On Ghost Operating: I worked for free. On Email Engine: you still got 12 emails written that month, retainer paid as agreed. On Full Stack: same — retainer paid, rev share is $0 that launch. That's why I'm selective about who I partner with. If the audience + niche math doesn't pencil out on the strategy call, I'll tell you straight and we don't sign.",
  },
  {
    q: "How do I know you're legit?",
    a: "I'm building this from the ground up — founding partners get the best terms. I take zero money upfront on Ghost Operating. On the retainer services there's a 3-month minimum then month-to-month. There's no scenario where you lose more than 3 months of retainer if the work isn't landing. I'll walk you through the entire plan + revenue math on the strategy call before we sign anything.",
  },
  {
    q: "What audience size do I need?",
    a: "Ghost Operating: 10K+ engaged followers (any platform — IG, YouTube, LinkedIn, Newsletter). Below that, the math rarely pencils. Email Engine: any list size, but ROI compounds above 2K subscribers. Full Stack: 10K+ audience AND ~1K+ existing email list (or willingness to build one).",
  },
  {
    q: "How much of my time does this take?",
    a: "Ghost Operating: 1-2 hours total during the build, then ~1 hour during launch week. Email Engine: 15-20 min/week voice memo. Full Stack: ~1 hour/week. You stay the face. I stay invisible.",
  },
];

function Item({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <li className="border-b border-white/[0.08] last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-7 flex items-center justify-between text-left group"
      >
        <span className="display text-xl md:text-2xl text-fg group-hover:text-brand transition-colors pr-8">
          {q}
        </span>
        <span
          className={`text-fg-muted shrink-0 transition-transform ${open ? "rotate-45 text-brand" : ""}`}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1V17M1 9H17" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[500px] pb-7" : "max-h-0"
        }`}
      >
        <p className="text-fg-muted leading-relaxed max-w-3xl">{a}</p>
      </div>
    </li>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-32 lg:py-40 border-t border-white/[0.08] px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20">
          <div className="md:col-span-2">
            <span className="marker">07 — Questions</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-4xl md:text-6xl leading-[0.95]">
              Things you probably{" "}
              <span className="italic text-fg-muted">want to know</span>.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-2"></div>
          <ul className="md:col-span-10 border-t border-white/[0.08]">
            {faqs.map((f, i) => (
              <Item
                key={i}
                q={f.q}
                a={f.a}
                open={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
