"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "How", href: "#how" },
    { label: "Services", href: "#services" },
    { label: "Math", href: "#math" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <a href="#" className="text-base font-medium tracking-tight">
          Quiet Engine<span className="text-brand">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-10 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-fg-muted hover:text-fg transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm border border-fg/15 hover:border-brand hover:text-brand px-4 py-2 transition-all"
        >
          Book a call
          <span aria-hidden>→</span>
        </a>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden text-fg"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeWidth={1.5} d="M4 7h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-ink border-b border-white/[0.06] px-6 py-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block text-fg-muted hover:text-fg text-base"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center border border-fg/15 px-4 py-2.5 text-sm hover:border-brand hover:text-brand"
          >
            Book a call →
          </a>
        </div>
      )}
    </nav>
  );
}
