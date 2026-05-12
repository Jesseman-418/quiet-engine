const packages = [
  {
    name: "Ghost Operating",
    price: "Rev share",
    sub: "60/40 you / me",
    upfront: "$0 upfront",
    description:
      "I build a digital product on your existing audience. You stay the face. We split sales.",
    features: [
      "Full product build (course, cohort, membership, or template pack)",
      "Sales page copywriting + design",
      "Checkout + delivery tech setup",
      "14-day launch sequence scripted for IG stories",
      "DM + FAQ handling during launch",
      "Post-launch optimization",
      "12-month term · 30-day pause clause",
    ],
    highlight: false,
    label: "Zero cash risk",
  },
  {
    name: "Full Stack",
    price: "$1,500",
    sub: "/mo + 65/35 rev share",
    upfront: "Discounted retainer",
    description:
      "Both services bundled. I build the product. I write every email that sells it.",
    features: [
      "Everything in Ghost Operating",
      "Everything in Email Engine",
      "65/35 product split — better than Ghost Operating",
      "Discounted retainer ($1,500/mo vs $2,000 standalone)",
      "Launch emails included — no extra fee",
      "Priority queue: your product + emails ship first",
      "12-month term · 30-day pause clause",
    ],
    highlight: true,
    label: "Recommended",
  },
  {
    name: "Email Engine",
    price: "$2,000",
    sub: "/mo retainer",
    upfront: "3-month minimum",
    description:
      "I write your sales emails, launch sequences, and newsletter. You give voice memos. I ship.",
    features: [
      "12 emails / month (newsletter, sales, launch, nurture)",
      "Hook + subject line testing per send",
      "Voice-matched from your podcast / YouTube / IG",
      "Audience segmentation strategy",
      "Monthly performance review (open rate, CTR, revenue)",
      "ESP setup (Beehiiv, ConvertKit, etc.)",
      "3-month minimum, then month-to-month",
    ],
    highlight: false,
    label: "Predictable cash",
  },
];

export default function Packages() {
  return (
    <section id="services" className="py-32 lg:py-40 border-t border-white/[0.08] px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-28">
          <div className="md:col-span-2">
            <span className="marker">04 — Services</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-4xl md:text-6xl leading-[0.95] mb-6">
              Three ways to{" "}
              <span className="italic text-fg-muted">monetize</span>.
            </h2>
            <p className="text-lg text-fg-muted max-w-xl">
              Pick the model that fits your cash flow and risk tolerance. Most
              creators choose Full Stack — the bundle solves the closed loop of
              product + engine.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08]">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`bg-ink p-8 md:p-10 flex flex-col ${
                pkg.highlight ? "md:-mt-4 md:-mb-4 bg-ink-800 ring-1 ring-brand/30" : ""
              }`}
            >
              <div className="mb-8">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="display text-2xl">{pkg.name}</h3>
                  {pkg.label && (
                    <span
                      className={`text-[10px] uppercase tracking-[0.18em] font-medium ${
                        pkg.highlight ? "text-brand" : "text-fg-subtle"
                      }`}
                    >
                      {pkg.label}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="display text-4xl md:text-5xl">{pkg.price}</span>
                  <span className="text-fg-muted text-sm">{pkg.sub}</span>
                </div>
                <div className="text-xs text-fg-subtle font-mono uppercase tracking-wider">
                  {pkg.upfront}
                </div>
              </div>

              <p className="text-fg-muted mb-8 leading-relaxed">{pkg.description}</p>

              <ul className="space-y-3 mb-10 flex-grow">
                {pkg.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-fg/85 leading-snug">
                    <span className="text-brand mt-1 shrink-0">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3.5 text-sm tracking-wide transition-colors ${
                  pkg.highlight
                    ? "bg-brand text-ink hover:bg-brand-400"
                    : "border border-fg/15 text-fg hover:border-brand hover:text-brand"
                }`}
              >
                Book a strategy call →
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-fg-muted mt-12 max-w-2xl mx-auto">
          Not sure which? Book a call. I&apos;ll run the math on your audience
          live and tell you which fits — even if it&apos;s &quot;not yet.&quot;
        </p>
      </div>
    </section>
  );
}
