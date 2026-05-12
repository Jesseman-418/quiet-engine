const steps = [
  {
    n: "01",
    title: "Strategy call",
    body: "30 min. We map your audience, your expertise, and the best product opportunity. You get the math live — what we&apos;d build, how we&apos;d launch, the revenue floor.",
  },
  {
    n: "02",
    title: "We build it",
    body: "Two to three weeks. Product + sales page + checkout + email sequences + tech setup. You give one hour a week of voice memos. We ship.",
  },
  {
    n: "03",
    title: "We launch together",
    body: "Fourteen-day Instagram story launch + email sequence. You post what we script. We handle DMs, FAQs, optimization. Then we re-launch.",
  },
];

export default function Process() {
  return (
    <section className="py-32 lg:py-40 border-t border-white/[0.08] px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-28">
          <div className="md:col-span-2">
            <span className="marker">03 — Process</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-4xl md:text-6xl leading-[0.95] mb-6">
              Three steps from audience{" "}
              <span className="italic text-fg-muted">to income</span>.
            </h2>
            <p className="text-lg text-fg-muted max-w-xl">
              You focus on what you do best. We handle the rest.
            </p>
          </div>
        </div>

        <ol className="space-y-0">
          {steps.map((s) => (
            <li
              key={s.n}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-14 border-t border-white/[0.08] last:border-b last:border-white/[0.08]"
            >
              <div className="md:col-span-2">
                <span className="marker">{s.n}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="display text-2xl md:text-3xl">{s.title}</h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-fg-muted leading-relaxed max-w-prose">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
