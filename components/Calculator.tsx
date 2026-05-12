"use client";

import { useState } from "react";

export default function Calculator() {
  const [followers, setFollowers] = useState(50000);
  const [tier, setTier] = useState<"ghost" | "fullstack">("fullstack");
  const engagementRate = 0.03;
  const conversionRate = 0.03;
  const price = 497;
  const creatorCut = tier === "fullstack" ? 0.65 : 0.6;

  const engaged = Math.round(followers * engagementRate);
  const buyers = Math.round(engaged * conversionRate);
  const gross = buyers * price;
  const yourCut = Math.round(gross * creatorCut);

  const fmtN = (n: number) => new Intl.NumberFormat("en-US").format(n);
  const fmtUSD = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);
  const fmtK = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(0)}K` : String(n));

  return (
    <section id="math" className="py-32 lg:py-40 border-t border-white/[0.08] px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-2">
            <span className="marker">05 — Math</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-4xl md:text-6xl leading-[0.95] mb-6">
              What your audience{" "}
              <span className="italic text-fg-muted">is worth</span>.
            </h2>
            <p className="text-lg text-fg-muted max-w-xl">
              Realistic revenue projection from a single product launch.
              Conservative defaults — 3% engagement, 3% conversion, $497 price.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <label className="marker block mb-3">Service tier</label>
              <div className="grid grid-cols-2 border border-white/[0.08]">
                <button
                  onClick={() => setTier("ghost")}
                  className={`py-3 text-sm transition-colors ${
                    tier === "ghost"
                      ? "bg-fg/[0.05] text-fg"
                      : "text-fg-muted hover:text-fg"
                  }`}
                >
                  Ghost (60%)
                </button>
                <button
                  onClick={() => setTier("fullstack")}
                  className={`py-3 text-sm transition-colors border-l border-white/[0.08] ${
                    tier === "fullstack"
                      ? "bg-fg/[0.05] text-fg"
                      : "text-fg-muted hover:text-fg"
                  }`}
                >
                  Full Stack (65%)
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="marker">Your followers</label>
                <span className="display text-3xl text-brand">{fmtK(followers)}</span>
              </div>
              <input
                type="range"
                min={10000}
                max={100000}
                step={1000}
                value={followers}
                onChange={(e) => setFollowers(Number(e.target.value))}
              />
              <div className="flex justify-between text-xs text-fg-subtle mt-2 font-mono">
                <span>10K</span>
                <span>50K</span>
                <span>100K</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08]">
              {[
                { label: "Engagement", value: "3%" },
                { label: "Conversion", value: "3%" },
                { label: "Price", value: "$497" },
              ].map((s) => (
                <div key={s.label} className="bg-ink p-4 text-center">
                  <div className="text-xs text-fg-subtle uppercase tracking-wider mb-1">
                    {s.label}
                  </div>
                  <div className="display text-xl">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Funnel + result */}
          <div className="lg:col-span-7">
            <div className="border border-white/[0.08]">
              <Row label="Followers" value={fmtN(followers)} />
              <Row label="Engaged (3%)" value={fmtN(engaged)} />
              <Row label="Buyers (3% of engaged)" value={fmtN(buyers)} />
              <Row label="Gross revenue" value={fmtUSD(gross)} bold />

              <div className="px-6 md:px-8 py-10 bg-fg/[0.02] border-t border-white/[0.08]">
                <div className="marker mb-3">Your cut ({Math.round(creatorCut * 100)}%)</div>
                <div className="display text-5xl md:text-6xl text-brand mb-2">
                  {fmtUSD(yourCut)}
                </div>
                <div className="text-sm text-fg-muted">
                  From a single product launch
                  {tier === "fullstack" && (
                    <>
                      <br />
                      <span className="text-xs text-fg-subtle">
                        + Email Engine running between launches ($1,500/mo retainer)
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <p className="text-xs text-fg-subtle mt-4 max-w-md">
              Conservative estimates based on industry-standard rates.
              Actual results vary with audience quality, niche, and
              product-market fit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex items-baseline justify-between px-6 md:px-8 py-4 border-b border-white/[0.08] last:border-b-0">
      <span className="text-fg-muted text-sm">{label}</span>
      <span className={`font-mono ${bold ? "text-fg text-lg" : "text-fg/85"}`}>{value}</span>
    </div>
  );
}
