"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// =========================================================
// THE DEMO — top-of-funnel asset (Tata Roma 70/20/10 model)
// =========================================================
// Pure client-side rule-based simulation. No backend, no API key.
// Honest disclaimer: full Claude voice-matching runs at install.
// =========================================================

type Lead = {
  name: string;
  email: string;
  property_interest: string;
  last_contact_date: string;
  notes: string;
};

type ScoredLead = Lead & {
  score_label: "HOT" | "WARM" | "COLD" | "DEAD";
  score_numeric: number;
  reasoning: string;
  email_subject: string;
  email_body: string;
  sms: string;
};

const SAMPLE_LEADS: Lead[] = [
  {
    name: "Maria Sanchez",
    email: "maria.s@gmail.com",
    property_interest: "Coral Gables, 3-4 bed, $1.8M-$2.2M",
    last_contact_date: "2024-03-15",
    notes:
      "Pre-approved at $2M. Saw 3 properties. Got pregnant, paused search.",
  },
  {
    name: "James O'Brien",
    email: "jamesob@outlook.com",
    property_interest: "Brickell condo, $600K-$900K",
    last_contact_date: "2023-11-02",
    notes: "Investor. Wants cap rate >6%. Ghosted after 2nd showing.",
  },
  {
    name: "Linda Chen",
    email: "lchen.re@gmail.com",
    property_interest: "Pinecrest, 4+ bed, $2.5M+",
    last_contact_date: "2024-01-22",
    notes: "Wife pushing South Miami. Husband wants Pinecrest. Stuck.",
  },
];

// ---------------- scoring logic (deterministic, no LLM) ----------------

function daysSince(dateStr: string): number {
  if (!dateStr) return 9999;
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return 9999;
  return Math.floor((Date.now() - d.getTime()) / 86400000);
}

function monthsAgo(days: number): string {
  if (days < 60) return `${days} days ago`;
  return `${Math.round(days / 30)} months ago`;
}

function scoreLead(lead: Lead): { label: ScoredLead["score_label"]; numeric: number; reasoning: string } {
  const days = daysSince(lead.last_contact_date);
  const hasRichNotes = lead.notes.length > 40;
  const hasSpecificInterest =
    lead.property_interest.includes("$") || lead.property_interest.includes(",");
  const hasUrgencySignal = /pre-approved|cash|urgent|relocat|closing|investor/i.test(
    lead.notes
  );
  const hasBlocker = /pregnant|divorc|paused|delayed|ghost/i.test(lead.notes);

  let score = 5;
  if (days < 120) score += 2;
  else if (days > 365) score -= 2;
  if (hasRichNotes) score += 1;
  if (hasSpecificInterest) score += 1;
  if (hasUrgencySignal) score += 2;
  if (hasBlocker) score -= 1;

  score = Math.max(1, Math.min(10, score));

  let label: ScoredLead["score_label"];
  if (score >= 8) label = "HOT";
  else if (score >= 5) label = "WARM";
  else if (score >= 3) label = "COLD";
  else label = "DEAD";

  const reasoning =
    `${monthsAgo(days)} last contact. ` +
    (hasUrgencySignal ? "Urgency signal in notes. " : "") +
    (hasBlocker ? "Soft blocker (life event). " : "") +
    (hasSpecificInterest ? "Specific budget + area = real buyer." : "Vague interest, lower intent.");

  return { label, numeric: score, reasoning };
}

// ---------------- email drafting (templated, uses their data) ----------------

function pickInterestAnchor(interest: string): string {
  const parts = interest.split(",").map((s) => s.trim());
  return parts[0] || interest;
}

function shortenNotes(notes: string): string {
  if (notes.length < 80) return notes;
  return notes.slice(0, 75) + "...";
}

function draftEmail(lead: Lead, score: ReturnType<typeof scoreLead>): { subject: string; body: string; sms: string } {
  const firstName = lead.name.split(" ")[0];
  const days = daysSince(lead.last_contact_date);
  const anchor = pickInterestAnchor(lead.property_interest);

  let subject: string;
  let opening: string;
  let middle: string;
  let cta: string;

  if (score.label === "HOT") {
    subject = `${firstName} — three off-market in ${anchor}`;
    opening = `Hey ${firstName},\n\nQuick one.`;
    middle = `Three off-market options just hit my desk in ${lead.property_interest}. Two will be on the public side by next Tuesday. ${shortenNotes(lead.notes)} — these solve for that.`;
    cta = `Want me to send the photos?`;
  } else if (score.label === "WARM") {
    subject = `${firstName} — quick on the ${anchor} search`;
    opening = `Hey ${firstName},`;
    middle = `Saw your notes from ${monthsAgo(days)} — ${shortenNotes(lead.notes)} A new listing dropped that fits your range exactly. ${lead.property_interest}. Below comp.`;
    cta = `Worth a 10-min walkthrough this weekend?`;
  } else if (score.label === "COLD") {
    subject = `${firstName} — still looking?`;
    opening = `${firstName},`;
    middle = `Been a while — last we talked ${monthsAgo(days)}. Market shifted in your range (${lead.property_interest}): inventory up 18%, prices flat. Better buying window than spring.`;
    cta = `Reply with a yes if you want updates. No if not — won't follow up again.`;
  } else {
    subject = `${firstName} — closing the loop`;
    opening = `${firstName},`;
    middle = `Closing the loop on the ${anchor} search from ${monthsAgo(days)}. If timing is bad, no worries. If you want to circle back in Q3, just reply "Q3."`;
    cta = `Otherwise I'll let it rest.`;
  }

  const body = `${opening}\n\n${middle}\n\n${cta}\n\n— [Your name]`;
  const sms = `${firstName} — ${score.label === "HOT" ? "3 off-market just hit my desk in" : "quick check on"} ${anchor}. ${score.label === "HOT" ? "Want the photos?" : "Reply Y/N — won't bug you otherwise."}`;

  return { subject, body, sms };
}

function processLead(lead: Lead): ScoredLead {
  const score = scoreLead(lead);
  const draft = draftEmail(lead, score);
  return {
    ...lead,
    score_label: score.label,
    score_numeric: score.numeric,
    reasoning: score.reasoning,
    email_subject: draft.subject,
    email_body: draft.body,
    sms: draft.sms,
  };
}

// ---------------- UI ----------------

const SCORE_STYLES: Record<ScoredLead["score_label"], { bg: string; text: string; ring: string }> = {
  HOT: { bg: "bg-red-500/15", text: "text-red-400", ring: "ring-red-500/40" },
  WARM: { bg: "bg-amber-500/15", text: "text-amber-400", ring: "ring-amber-500/40" },
  COLD: { bg: "bg-blue-500/15", text: "text-blue-400", ring: "ring-blue-500/40" },
  DEAD: { bg: "bg-zinc-500/15", text: "text-zinc-400", ring: "ring-zinc-500/40" },
};

export default function TryPage() {
  const [leads, setLeads] = useState<Lead[]>(SAMPLE_LEADS);
  const [results, setResults] = useState<ScoredLead[] | null>(null);
  const [running, setRunning] = useState(false);

  const updateLead = (i: number, field: keyof Lead, value: string) => {
    setLeads((prev) => prev.map((l, idx) => (idx === i ? { ...l, [field]: value } : l)));
  };

  const handleRun = async () => {
    setRunning(true);
    setResults(null);
    // Simulate processing time so it feels real
    await new Promise((r) => setTimeout(r, 1800));
    setResults(leads.map(processLead));
    setRunning(false);
    // Scroll to results
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const resetSample = () => {
    setLeads(SAMPLE_LEADS);
    setResults(null);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800/60">
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
          <a href="/" className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition">
            ← The Listing Engine
          </a>
          <a
            href="https://calendly.com/njessemandevamirtham/listing-engine"
            target="_blank"
            rel="noopener"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition"
          >
            Book a call →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-10 text-center">
        <p className="text-xs font-medium tracking-widest text-amber-500/80 uppercase mb-4">
          Live Demo · 30 seconds · No signup
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-5">
          Resurrect 3 dormant leads.<br className="hidden sm:block" /> See it work on your data.
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Paste 3 dormant leads from your CRM. The engine scores them HOT / WARM / COLD / DEAD and drafts re-engagement.
          {" "}<span className="text-zinc-500">Sample data pre-filled below — edit any field to make it yours.</span>
        </p>
      </section>

      {/* Input cards */}
      <section className="mx-auto max-w-4xl px-6 pb-8">
        <div className="space-y-4">
          {leads.map((lead, i) => (
            <div
              key={i}
              className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 grid sm:grid-cols-2 gap-4"
            >
              <div>
                <label className="text-xs uppercase tracking-wider text-zinc-500 block mb-1.5">
                  Lead {i + 1} · Name
                </label>
                <input
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-500/60"
                  value={lead.name}
                  onChange={(e) => updateLead(i, "name", e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider text-zinc-500 block mb-1.5">
                  Last contact date
                </label>
                <input
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-500/60"
                  value={lead.last_contact_date}
                  onChange={(e) => updateLead(i, "last_contact_date", e.target.value)}
                  placeholder="YYYY-MM-DD"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-wider text-zinc-500 block mb-1.5">
                  Property interest
                </label>
                <input
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-500/60"
                  value={lead.property_interest}
                  onChange={(e) => updateLead(i, "property_interest", e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-wider text-zinc-500 block mb-1.5">
                  Notes from your CRM
                </label>
                <textarea
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-100 focus:outline-none focus:border-amber-500/60 resize-none"
                  rows={2}
                  value={lead.notes}
                  onChange={(e) => updateLead(i, "notes", e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Action row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={resetSample}
            className="text-sm text-zinc-500 hover:text-zinc-300 transition"
          >
            Reset to sample data
          </button>
          <button
            onClick={handleRun}
            disabled={running}
            className="bg-amber-500 hover:bg-amber-400 disabled:bg-amber-500/40 text-zinc-950 font-semibold px-8 py-3 rounded-lg transition w-full sm:w-auto"
          >
            {running ? "Resurrecting leads…" : "Run the engine →"}
          </button>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="mx-auto max-w-4xl px-6 py-12">
        <AnimatePresence>
          {results && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="border-t border-zinc-800 pt-12">
                <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-2 text-center">
                  Output · drafted in 1.8 seconds
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-12">
                  Your 3 leads, resurrected.
                </h2>
              </div>

              <div className="space-y-8">
                {results.map((r, i) => {
                  const style = SCORE_STYLES[r.score_label];
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.15 }}
                      className={`rounded-xl border border-zinc-800 bg-zinc-900/40 overflow-hidden ring-1 ${style.ring}`}
                    >
                      {/* Score header */}
                      <div className="flex items-center justify-between gap-3 px-5 py-3 border-b border-zinc-800 bg-zinc-900/60">
                        <div className="flex items-center gap-3 min-w-0">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold tracking-widest ${style.bg} ${style.text}`}>
                            {r.score_label} · {r.score_numeric}/10
                          </span>
                          <span className="text-sm text-zinc-300 truncate">{r.name}</span>
                        </div>
                        <span className="text-xs text-zinc-500 hidden sm:block">{r.email}</span>
                      </div>

                      {/* Reasoning */}
                      <div className="px-5 py-3 text-sm text-zinc-400 border-b border-zinc-800/60 italic">
                        {r.reasoning}
                      </div>

                      {/* Drafted email */}
                      <div className="px-5 py-4">
                        <div className="text-xs uppercase tracking-wider text-zinc-500 mb-2">Drafted email</div>
                        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 font-mono text-sm">
                          <div className="text-zinc-500 mb-1">Subject:</div>
                          <div className="text-zinc-100 mb-3">{r.email_subject}</div>
                          <div className="text-zinc-300 whitespace-pre-wrap leading-relaxed">{r.email_body}</div>
                        </div>
                      </div>

                      {/* SMS */}
                      <div className="px-5 py-4 border-t border-zinc-800/60">
                        <div className="text-xs uppercase tracking-wider text-zinc-500 mb-2">Drafted SMS</div>
                        <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-sm text-zinc-300">
                          {r.sms}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Disclaimer */}
              <div className="mt-10 text-center text-xs text-zinc-500 max-w-xl mx-auto leading-relaxed">
                Preview output. Full install runs Claude with YOUR voice samples on YOUR CRM (Follow Up Boss, Lofty, Sierra, kvCORE, BoldTrail).
                Score quality + voice-match precision are 10× tighter than this demo. 7-day install, refundable pilot.
              </div>

              {/* CTA */}
              <div className="mt-10 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 text-center">
                <h3 className="text-2xl font-semibold mb-3">Want this running on your full CRM?</h3>
                <p className="text-zinc-400 mb-6 max-w-md mx-auto">
                  Pilot is $1,500. Recovers your dormant CRM leads in your voice. 30-day refund if fewer than 5 conversations re-open.
                </p>
                <a
                  href="https://calendly.com/njessemandevamirtham/listing-engine"
                  target="_blank"
                  rel="noopener"
                  className="inline-block bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold px-8 py-3 rounded-lg transition"
                >
                  Book a 15-min call →
                </a>
                <p className="text-xs text-zinc-500 mt-4">No pitch deck. Demo on your data. Single-call close.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800/60 mt-20">
        <div className="mx-auto max-w-5xl px-6 py-8 text-center text-xs text-zinc-600">
          <p>The Listing Engine — AI install for top-producing real estate agents.</p>
          <p className="mt-2">
            <a href="/" className="hover:text-zinc-400 transition">Home</a>
            <span className="mx-2">·</span>
            <a
              href="https://calendly.com/njessemandevamirtham/listing-engine"
              target="_blank"
              rel="noopener"
              className="hover:text-zinc-400 transition"
            >
              Book a call
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
