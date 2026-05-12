"use client";

import { useState } from "react";

export default function Calculator() {
  const [followers, setFollowers] = useState(50000);
  const [tier, setTier] = useState<"ghost" | "fullstack">("fullstack");
  const engagementRate = 0.03;
  const conversionRate = 0.03;
  const price = 497;
  const creatorCut = tier === "fullstack" ? 0.65 : 0.6;

  const engagedAudience = Math.round(followers * engagementRate);
  const buyers = Math.round(engagedAudience * conversionRate);
  const grossRevenue = buyers * price;
  const yourCut = Math.round(grossRevenue * creatorCut);

  const formatNumber = (n: number) =>
    new Intl.NumberFormat("en-US").format(n);

  const formatCurrency = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(n);

  const formatFollowers = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
    return n.toString();
  };

  return (
    <section id="calculator" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-4">
            Revenue Calculator
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            See what your audience
            <br />
            <span className="gradient-text">is worth</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Drag the slider to see a realistic revenue projection for a single
            product launch based on your follower count.
          </p>
        </div>

        {/* Calculator card */}
        <div className="glass rounded-3xl p-8 md:p-12">
          {/* Tier toggle */}
          <div className="mb-10">
            <label className="text-sm text-gray-400 block mb-3">Service Tier</label>
            <div className="grid grid-cols-2 gap-2 p-1 rounded-xl bg-white/[0.03] border border-white/5">
              <button
                onClick={() => setTier("ghost")}
                className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                  tier === "ghost"
                    ? "bg-brand-500/20 text-brand-300 border border-brand-500/30"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Ghost Operating (60%)
              </button>
              <button
                onClick={() => setTier("fullstack")}
                className={`py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                  tier === "fullstack"
                    ? "bg-brand-500/20 text-brand-300 border border-brand-500/30"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Full Stack (65%)
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <label className="text-sm text-gray-400">Your Followers</label>
              <span className="text-2xl font-bold text-brand-400">
                {formatFollowers(followers)}
              </span>
            </div>
            <input
              type="range"
              min={10000}
              max={100000}
              step={1000}
              value={followers}
              onChange={(e) => setFollowers(Number(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>10K</span>
              <span>25K</span>
              <span>50K</span>
              <span>75K</span>
              <span>100K</span>
            </div>
          </div>

          {/* Assumptions */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 rounded-xl bg-white/[0.02]">
              <div className="text-xs text-gray-500 mb-1">Engagement Rate</div>
              <div className="text-lg font-semibold text-gray-300">3%</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/[0.02]">
              <div className="text-xs text-gray-500 mb-1">Conversion Rate</div>
              <div className="text-lg font-semibold text-gray-300">3%</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/[0.02]">
              <div className="text-xs text-gray-500 mb-1">Product Price</div>
              <div className="text-lg font-semibold text-gray-300">$497</div>
            </div>
          </div>

          {/* Results funnel */}
          <div className="space-y-4 mb-10">
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <span className="text-gray-400">Followers</span>
              <span className="text-gray-200 font-medium">
                {formatNumber(followers)}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <span className="text-gray-400">
                Engaged Audience{" "}
                <span className="text-gray-600">(3%)</span>
              </span>
              <span className="text-gray-200 font-medium">
                {formatNumber(engagedAudience)}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <span className="text-gray-400">
                Buyers{" "}
                <span className="text-gray-600">(3% of engaged)</span>
              </span>
              <span className="text-gray-200 font-medium">
                {formatNumber(buyers)}
              </span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-white/5">
              <span className="text-gray-400">Gross Revenue</span>
              <span className="text-gray-200 font-semibold text-lg">
                {formatCurrency(grossRevenue)}
              </span>
            </div>
          </div>

          {/* Your cut highlight */}
          <div className="relative rounded-2xl bg-gradient-to-r from-brand-500/10 to-brand-600/5 border border-brand-500/20 p-8 text-center">
            <div className="text-sm text-brand-400 font-medium mb-2">
              Your Cut ({Math.round(creatorCut * 100)}%)
            </div>
            <div className="text-4xl md:text-5xl font-bold gradient-text">
              {formatCurrency(yourCut)}
            </div>
            <div className="text-sm text-gray-500 mt-2">
              From a single product launch
              {tier === "fullstack" && (
                <span className="block mt-1 text-xs text-brand-400/80">
                  + Email Engine running between launches ($1,500/mo retainer)
                </span>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-600 text-center mt-6">
            These are conservative estimates based on industry-standard engagement
            and conversion rates. Actual results vary based on audience quality,
            niche, and product-market fit.
          </p>
        </div>
      </div>
    </section>
  );
}
