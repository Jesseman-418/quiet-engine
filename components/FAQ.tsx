"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Which service should I pick?",
    answer:
      "If you have audience and no product — Ghost Operating (zero cash risk, I take 35% of sales). If you have a product and weak email — Email Engine ($2K/mo, I write 12 emails). If you have neither dialed in — Full Stack ($1.5K/mo + 60/40 split). Most creators take Full Stack because the bundle solves the closed loop: product to sell + emails that sell it.",
  },
  {
    question: "What does Ghost Operating actually cost?",
    answer:
      "$0 upfront. No retainer. No setup fee. I take 35% of net product revenue (after payment processor + ad spend, before tax). My incentives are aligned with yours — I only make money when you make money. 12-month partnership term, 30-day pause clause either side.",
  },
  {
    question: "What kind of products do you build?",
    answer:
      "Whatever your audience will pay for. Most common: 4-8 week cohort programs ($300-$1,500), digital protocol PDFs ($29-$99), templates / toolkits ($49-$199), community memberships ($29-$99/mo). On the strategy call I run the audience math live and tell you which product type your numbers actually support.",
  },
  {
    question: "How long does Ghost Operating take?",
    answer:
      "2-3 weeks to build the product + launch assets. 2 weeks for the launch itself. Roughly 4-5 weeks from first call to first sale. I move fast because I use AI-powered workflows on the production side while you stay focused on the face/voice work.",
  },
  {
    question: "What do I actually do with Email Engine?",
    answer:
      "1 voice memo per week (15-20 min). You tell me what you want to push, who you spoke to recently, what's going on in your niche. I ship 12 emails a month from that — newsletter, sales sequences, launch emails, nurture flows. You approve before send. Voice-matched from your podcast / YouTube / IG so it sounds like you, not me.",
  },
  {
    question: "Why is the Full Stack split 60/40 instead of 65/35?",
    answer:
      "Because you're paying me a retainer to write your emails, which removes my cash risk. The retainer covers writing time. The 60/40 split is product upside on top. Net math: at moderate scale you make more under Full Stack than under Ghost Operating alone — and you get the email engine running between launches.",
  },
  {
    question: "What if a launch flops?",
    answer:
      "On Ghost Operating: I worked for free. On Email Engine: you still got 12 emails written that month, retainer paid as agreed. On Full Stack: same — retainer paid, rev share is $0 that launch. That's why I'm selective about who I partner with. If the audience + niche math doesn't pencil out on the strategy call, I'll tell you straight and we don't sign.",
  },
  {
    question: "How do I know you're legit?",
    answer:
      "I'm building this from the ground up — founding partners get the best terms. I take zero money upfront on Ghost Operating. On the retainer services there's a 3-month minimum then month-to-month. There's no scenario where you lose more than 3 months of retainer if the work isn't landing. I'll walk you through the entire plan + revenue math on the strategy call before we sign anything.",
  },
  {
    question: "What audience size do I need?",
    answer:
      "Ghost Operating: 10K+ engaged followers (any platform — IG, YouTube, LinkedIn, Newsletter). Below that, the math rarely pencils. Email Engine: any list size, but ROI compounds above 2K subscribers. Full Stack: 10K+ audience AND ~1K+ existing email list (or willingness to build one).",
  },
  {
    question: "How much of my time does this take?",
    answer:
      "Ghost Operating: 1-2 hours total during the build, then ~1 hour during launch week. Email Engine: 15-20 min/week voice memo. Full Stack: ~1 hour/week. You stay the face. I stay invisible.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-gray-200 group-hover:text-brand-400 transition-colors pr-8">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-brand-400" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px] pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Questions you probably
            <br />
            <span className="gradient-text">have</span>
          </h2>
        </div>

        <div className="glass rounded-2xl px-8">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
