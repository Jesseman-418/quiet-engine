const packages = [
  {
    name: "Ghost Operating",
    price: "Rev Share",
    period: "",
    description:
      "I build a digital product on your existing content and audience. You stay the face. We split sales.",
    features: [
      "Full product build (course, cohort, membership, or template pack)",
      "Sales page copywriting + design",
      "Checkout + delivery tech setup",
      "14-day launch sequence scripted for IG stories",
      "DM + FAQ handling during launch",
      "Post-launch optimization",
      "$0 upfront — 60/40 revenue split (you / me)",
    ],
    highlight: false,
    cta: "Zero Cash Risk",
  },
  {
    name: "Full Stack",
    price: "$1,500",
    period: "/mo + 60/40",
    description:
      "Both services bundled. I build the product. I write every email that sells it. You compound monthly cash + product upside.",
    features: [
      "Everything in Ghost Operating",
      "Everything in Email Engine",
      "Discounted retainer ($1,500/mo vs $2,000 standalone)",
      "65/35 product revenue split (you keep 65% — better than Ghost Operating)",
      "Launch emails included in retainer — no extra fee",
      "Priority queue: your product + emails ship first",
      "12-month term, 30-day pause clause either side",
    ],
    highlight: true,
    cta: "Recommended",
  },
  {
    name: "Email Engine",
    price: "$2,000",
    period: "/mo",
    description:
      "I write your sales emails, launch sequences, and newsletter on a monthly retainer. You give voice memos. I ship.",
    features: [
      "12 emails / month (newsletter, sales, launch, nurture)",
      "Hook + subject line testing per send",
      "Voice-matched from your podcast / YouTube / Instagram",
      "Audience segmentation strategy",
      "Monthly performance review (open rates, CTR, revenue)",
      "ESP setup if you don't have one (Beehiiv, ConvertKit, etc.)",
      "3-month minimum, then month-to-month",
    ],
    highlight: false,
    cta: "Predictable Cash",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-4">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Three ways to
            <br />
            <span className="gradient-text">monetize your audience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pick the model that fits your cash flow + risk tolerance. Full
            Stack creators keep a higher rev split AND get the email engine
            running between launches — that&apos;s why it&apos;s the default.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`glass rounded-2xl p-8 transition-all duration-300 relative ${
                pkg.highlight
                  ? "border-brand-500/40 hover:border-brand-500/60 md:scale-105"
                  : "glass-hover"
              }`}
            >
              {pkg.cta && (
                <span
                  className={`absolute -top-3 left-8 px-3 py-1 text-xs font-medium rounded-full ${
                    pkg.highlight
                      ? "bg-brand-500 text-white"
                      : "bg-white/5 text-gray-400 border border-white/10"
                  }`}
                >
                  {pkg.cta}
                </span>
              )}

              <h3 className="text-xl font-semibold text-gray-100 mb-2">
                {pkg.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl font-bold gradient-text">
                  {pkg.price}
                </span>
                {pkg.period && (
                  <span className="text-gray-500 text-sm">{pkg.period}</span>
                )}
              </div>
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <svg
                      className="w-5 h-5 text-brand-400 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center px-6 py-3.5 rounded-xl font-medium transition-all ${
                  pkg.highlight
                    ? "bg-brand-500 hover:bg-brand-600 text-white hover:shadow-lg hover:shadow-brand-500/25"
                    : "glass glass-hover text-gray-300"
                }`}
              >
                Book a Call
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-12 max-w-2xl mx-auto">
          Not sure which? Book a call. I&apos;ll do the math on your audience
          + content stack and tell you straight which model fits.
        </p>
      </div>
    </section>
  );
}
