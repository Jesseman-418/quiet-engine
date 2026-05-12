export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      {/* Ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[480px] h-[480px] bg-brand-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] bg-brand-600/8 rounded-full blur-[120px] pointer-events-none" />

      {/* Vertical fade — hides bg dots at top + bottom edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-brand-400 mb-10">
          <span className="w-2 h-2 rounded-full bg-brand-400 animate-pulse-slow" />
          Quiet Engine &mdash; founding partners, 3 spots open
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05] mb-8">
          <span className="block text-gray-100">I build the product.</span>
          <span className="block text-gray-100">I write the emails.</span>
          <span className="block gradient-text mt-2">You stay the face.</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Done-for-you product creation and email copy for creators with
          audience.{" "}
          <span className="text-gray-200 font-medium">
            Pure rev share, monthly retainer, or both bundled.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-lg transition-all hover:shadow-2xl hover:shadow-brand-500/30 hover:-translate-y-0.5"
          >
            Book a Strategy Call
          </a>
          <a
            href="#packages"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass glass-hover text-gray-200 font-medium text-lg transition-all"
          >
            See the 3 services
          </a>
        </div>

        {/* Stat strip */}
        <div className="grid grid-cols-3 gap-6 sm:gap-12 max-w-2xl mx-auto pt-10 border-t border-white/5">
          <div>
            <div className="text-3xl sm:text-4xl font-bold gradient-text">3</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 mt-2">
              Service Tiers
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold gradient-text">4w</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 mt-2">
              Build to Launch
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold gradient-text">1h/wk</div>
            <div className="text-xs uppercase tracking-wider text-gray-500 mt-2">
              Your Time
            </div>
          </div>
        </div>

        {/* Built-for note */}
        <p className="text-xs text-gray-600 mt-8 max-w-md mx-auto">
          Built for creators with 10K&ndash;100K audience on YouTube, Newsletter,
          or LinkedIn.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-gray-600">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-brand-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
