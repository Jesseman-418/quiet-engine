const points = [
  {
    n: "01",
    title: "Audience, no product",
    body: "10K+ engaged followers, no productized offer. Every month without one = revenue compounding for someone else.",
  },
  {
    n: "02",
    title: "Product, no email engine",
    body: "You have the course or cohort. Launch emails get 12% open. Sales calendar is a graveyard between launches.",
  },
  {
    n: "03",
    title: "Doing both is impossible solo",
    body: "Build OR sell — not both, not weekly, not at the cadence the algorithm rewards. Hiring two specialists costs $8K/mo.",
  },
];

export default function Problem() {
  return (
    <section id="how" className="py-32 lg:py-40 border-t border-white/[0.08] px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-28">
          <div className="md:col-span-2">
            <span className="marker">02 — Problem</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-4xl md:text-6xl leading-[0.95] mb-6">
              The audience is the easy part.
            </h2>
            <p className="text-lg md:text-xl text-fg-muted max-w-2xl leading-snug">
              The product + the engine that sells it is where creators get
              stuck. Most 10K–100K creators are leaving six figures on the
              table because they&apos;re missing one half of the loop.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08]">
          {points.map((p) => (
            <div key={p.n} className="bg-ink p-10 md:p-12">
              <div className="marker mb-6">{p.n}</div>
              <h3 className="display text-2xl md:text-3xl mb-4">{p.title}</h3>
              <p className="text-fg-muted leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
