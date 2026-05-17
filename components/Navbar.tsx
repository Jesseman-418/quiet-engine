"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-ink/70 border-b border-fg/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10 h-[64px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-2 h-2 rounded-full bg-gold transition-transform group-hover:scale-150" />
          <span className="text-[15px] font-medium tracking-tight">
            The Listing Engine
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-[13.5px] text-fg-muted">
          <a href="#product" className="hover:text-fg transition-colors">
            Product
          </a>
          <a href="#how" className="hover:text-fg transition-colors">
            How it works
          </a>
          <a href="#faq" className="hover:text-fg transition-colors">
            FAQ
          </a>
        </nav>

        <a
          href="https://calendly.com/njessemandevamirtham/listing-engine"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-[13px] py-2.5 px-4"
        >
          Book the call
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.5 6h7M6 2.5L9.5 6 6 9.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
