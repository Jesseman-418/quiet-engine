const perks = [
  {
    n: "01",
    title: "Best splits, locked",
    body: "60/40 on Ghost Operating, 65/35 on Full Stack. These get tighter once we have public case studies — founding partners keep them for the full 12-month term.",
  },
  {
    n: "02",
    title: "Direct access",
    body: "Working with three partners max while building. You get me on WhatsApp / Slack — not a project manager. Replies inside 24 hours.",
  },
  {
    n: "03",
    title: "First in line",
    body: "Re-launches, new product tiers, evergreen funnels — you skip the queue. Founding partners get priority capacity ahead of new signups.",
  },
  {
    n: "04",
    title: "Co-published case study",
    body: "We document the win together when your launch lands. You get backlinks + authority signal. We get social proof. Both win.",
  },
];

export default function SocialProof() {
  return (
    <section className="py-32 lg:py-40 border-t border-white/[0.08] px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-2">
            <span className="marker">06 — Transparency</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-4xl md:text-6xl leading-[0.95] mb-6">
              No case studies yet.{" "}
              <span className="italic text-fg-muted">Founding partners get the best terms.</span>
            </h2>
            <p className="text-lg text-fg-muted max-w-2xl leading-snug">
              Quiet Engine is new. The first three creator partnerships are in
              the build phase. I&apos;m not going to pretend otherwise — that&apos;s
              why founding partners get advantages I won&apos;t offer once we have
              public wins.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08]">
          {perks.map((p) => (
            <div key={p.n} className="bg-ink p-10 md:p-12">
              <div className="marker mb-5">{p.n}</div>
              <h3 className="display text-2xl mb-4">{p.title}</h3>
              <p className="text-fg-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
