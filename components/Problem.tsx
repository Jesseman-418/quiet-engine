export default function Problem() {
  const painPoints = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Audience, no product",
      description:
        "10K+ engaged followers. No way for them to pay you past a brand deal. Every month without a productized offer = revenue compounding for someone else.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      title: "Product, no email engine",
      description:
        "You have a course or cohort. Open rates on launch emails are 12%. Sales calendar looks like a graveyard between launches. Email is the highest-margin channel you're not running.",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
        </svg>
      ),
      title: "Doing both is impossible solo",
      description:
        "You can build OR you can sell — not both, not weekly, not at the cadence the algorithm rewards. Hiring two specialists costs $8K/mo retainer. There's a third option.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-brand-400 text-sm font-medium tracking-wider uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            The audience is the easy part.
            <br />
            <span className="text-gray-400">
              The product + engine that sells it is where creators get stuck.
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Most 10K-100K creators are leaving 6 figures on the table because
            they&apos;re missing one half of the loop. Build vs. sell. Product
            vs. distribution. The fix isn&apos;t hustle &mdash; it&apos;s
            outsourcing the right two functions.
          </p>
        </div>

        {/* Pain point cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="glass glass-hover rounded-2xl p-8 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-5">
                {point.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-3">
                {point.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
