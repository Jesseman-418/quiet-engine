export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto w-full">
        {/* Top marker */}
        <div className="flex items-center justify-between mb-24 md:mb-32">
          <span className="marker">A creator agency · 2026</span>
          <span className="marker hidden md:inline">3 founding spots</span>
        </div>

        {/* Headline */}
        <h1 className="display text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7.5vw] leading-[0.95]">
          <span className="block">We build the product.</span>
          <span className="block">We write the emails.</span>
          <span className="block italic text-fg-muted">
            You stay the face<span className="not-italic text-brand">.</span>
          </span>
        </h1>

        {/* Subhead + CTA */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mt-16 md:mt-20">
          <div className="md:col-span-7">
            <p className="text-xl md:text-2xl text-fg-muted font-light leading-snug max-w-2xl">
              A done-for-you product build + email engine for creators with
              10K–100K audience. Three service tiers — pure rev share, monthly
              retainer, or both bundled.
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9 flex items-end">
            <a
              href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-baseline gap-3 text-lg hover:text-brand transition-colors"
            >
              <span className="display text-2xl">Book a strategy call</span>
              <span aria-hidden className="text-brand group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Bottom stat row */}
        <div className="grid grid-cols-3 gap-8 md:gap-16 mt-24 pt-8 border-t border-white/[0.08] text-sm">
          <div>
            <div className="display text-3xl md:text-4xl">3</div>
            <div className="text-fg-muted mt-1">Service tiers</div>
          </div>
          <div>
            <div className="display text-3xl md:text-4xl">4 wks</div>
            <div className="text-fg-muted mt-1">Build to launch</div>
          </div>
          <div>
            <div className="display text-3xl md:text-4xl">1 hr/wk</div>
            <div className="text-fg-muted mt-1">Your time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
