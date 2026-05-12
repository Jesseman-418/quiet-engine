export default function SocialProof() {
  const perks = [
    {
      title: "Best splits, locked",
      description:
        "60/40 on Ghost Operating, 65/35 on Full Stack. These get tighter once I have public case studies — founding partners keep them for the full 12-month term.",
    },
    {
      title: "Direct access",
      description:
        "Working with 3 partners max while building. You get me on Slack/WhatsApp, not a project manager. Replies inside 24 hours.",
    },
    {
      title: "First in line",
      description:
        "Re-launches, new product tiers, evergreen funnels — you skip the queue. Founding partners get priority capacity ahead of new sign-ups.",
    },
    {
      title: "Document the win together",
      description:
        "We co-publish the case study when your launch lands. You get backlinks + authority signal. I get social proof. Both win.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-3xl p-12 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-500/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 text-sm text-brand-400 border border-brand-500/20 mb-6">
              Transparency
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              No case studies yet. Founding partners get the best terms.
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-4 leading-relaxed">
              Quiet Engine is new. The first 3 creator partnerships are
              currently in the build phase. I&apos;m not going to pretend
              otherwise &mdash; that&apos;s why founding partners get advantages
              I won&apos;t offer once we have public wins.
            </p>
            <p className="text-gray-500 text-sm max-w-lg mx-auto mb-10">
              What that means for you, right now:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {perks.map((perk) => (
                <div
                  key={perk.title}
                  className="glass glass-hover rounded-xl p-6 transition-all duration-300"
                >
                  <h3 className="font-semibold text-gray-100 mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {perk.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
