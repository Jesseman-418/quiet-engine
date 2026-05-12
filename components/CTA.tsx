export default function CTA() {
  return (
    <section id="contact" className="py-32 lg:py-48 border-t border-white/[0.08] px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-2">
            <span className="marker">08 — Apply</span>
          </div>
          <div className="md:col-span-8">
            <h2 className="display text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-12">
              Three founding-partner spots<span className="text-brand">.</span>
              <br />
              <span className="italic text-fg-muted">
                Fifteen minutes to claim one.
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-fg-muted max-w-2xl mb-16 font-light leading-snug">
              Book a free 15-min strategy call. I&apos;ll run the audience math
              live, tell you which of the three services fits, and show you
              the revenue floor. No pitch deck. No follow-up sequence. Yes or
              no by the end.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand text-ink font-medium hover:bg-brand-400 transition-colors"
              >
                Book a strategy call
                <span aria-hidden>→</span>
              </a>
              <a
                href="mailto:njessemandevamirtham@gmail.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-fg/15 text-fg hover:border-brand hover:text-brand transition-colors"
              >
                Email instead
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm text-fg-muted">
              <a
                href="mailto:njessemandevamirtham@gmail.com"
                className="link-quiet"
              >
                njessemandevamirtham@gmail.com
              </a>
              <span className="hidden sm:inline text-fg-subtle">·</span>
              <span>Usually replies within 24 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
