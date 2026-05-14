export default function Footer() {
  return (
    <footer className="border-t border-fg/[0.06] px-6 lg:px-10 py-14 lg:py-20 bg-ink">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-8">
          <div className="md:col-span-5">
            <a href="#top" className="flex items-center gap-2.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-[15px] font-medium tracking-tight">
                The Listing Engine
              </span>
            </a>
            <p className="text-fg-muted text-[14.5px] leading-[1.65] tracking-[-0.01em] max-w-[400px]">
              AI engine for top-producing real estate agents. Resurrect
              dormant leads. Recover commissions. Installed in 7 days, owned
              by you.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow-muted mb-5">Product</div>
            <ul className="space-y-3 text-[14px] text-fg/85">
              <li>
                <a
                  href="#product"
                  className="hover:text-gold transition-colors"
                >
                  Modules
                </a>
              </li>
              <li>
                <a
                  href="#how"
                  className="hover:text-gold transition-colors"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-gold transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-gold transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow-muted mb-5">Get in touch</div>
            <ul className="space-y-3 text-[14px] text-fg/85">
              <li>
                <a
                  href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Book a 15-min demo →
                </a>
              </li>
              <li>
                <a
                  href="mailto:njessemandevamirtham@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  njessemandevamirtham@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-fg/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-[12.5px] text-fg/50 font-mono tracking-[0.04em]">
            © 2026 The Listing Engine — Built by Jesseman.
          </div>
          <div className="text-[12.5px] text-fg/50 font-mono tracking-[0.04em]">
            Solo operator · India → US/UK/CA/AU
          </div>
        </div>
      </div>
    </footer>
  );
}
