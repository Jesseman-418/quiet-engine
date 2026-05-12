export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-brand-600/10 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative glass rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              3 founding-partner spots.
              <br />
              <span className="gradient-text">15 minutes to claim one.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free 15-min strategy call. I&apos;ll run the audience math
              live, tell you which of the 3 services fits your stack, and show
              you the revenue floor. No pitch deck. No follow-up sequence.
              Yes or no by the end of the call.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-lg transition-all hover:shadow-lg hover:shadow-brand-500/25"
              >
                Book a Free Strategy Call
              </a>
              <a
                href="https://instagram.com/direct/t/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass glass-hover text-gray-300 font-medium text-lg transition-all"
              >
                DM Me on Instagram
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
              <a
                href="mailto:njessemandevamirtham@gmail.com"
                className="flex items-center gap-2 hover:text-brand-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                njessemandevamirtham@gmail.com
              </a>
              <span className="hidden sm:block text-gray-700">|</span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Usually responds within 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
