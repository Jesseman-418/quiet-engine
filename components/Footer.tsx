export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-10 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-fg-subtle font-mono">
        <span>
          © {new Date().getFullYear()} Quiet Engine · The work compounds.
        </span>
        <div className="flex items-center gap-6">
          <a
            href="mailto:njessemandevamirtham@gmail.com"
            className="hover:text-fg transition-colors"
          >
            Email
          </a>
          <a
            href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fg transition-colors"
          >
            Book a call
          </a>
        </div>
      </div>
    </footer>
  );
}
