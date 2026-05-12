"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How It Works", href: "#process" },
    { label: "Services", href: "#packages" },
    { label: "Math", href: "#calculator" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight flex items-center gap-2.5 group">
          <svg
            className="w-7 h-7 transition-transform duration-700 group-hover:rotate-180"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <circle cx="14" cy="14" r="11" stroke="url(#qeRing)" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="14" cy="14" r="5" fill="url(#qeCore)" />
            <circle cx="14" cy="14" r="3" fill="#030712" />
            <defs>
              <linearGradient id="qeRing" x1="3" y1="3" x2="25" y2="25" gradientUnits="userSpaceOnUse">
                <stop stopColor="#10b981" />
                <stop offset="1" stopColor="#6ee7b7" />
              </linearGradient>
              <radialGradient id="qeCore" cx="0.5" cy="0.5" r="0.5">
                <stop offset="0%" stopColor="#6ee7b7" />
                <stop offset="100%" stopColor="#10b981" />
              </radialGradient>
            </defs>
          </svg>
          <span className="flex items-baseline">
            <span className="gradient-text">Quiet</span>
            <span className="text-gray-100 ml-1.5">Engine</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 hover:text-brand-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-5 py-2.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white transition-colors"
          >
            Book a Call
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-400 hover:text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-b border-white/5 px-6 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-gray-400 hover:text-brand-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 text-center font-medium px-5 py-2.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white transition-colors"
          >
            Book a Call
          </a>
        </div>
      )}
    </nav>
  );
}
