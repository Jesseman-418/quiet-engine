export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Quiet Engine. The work compounds.
        </div>
        <div className="flex items-center gap-6">
          <a
            href="mailto:njessemandevamirtham@gmail.com"
            className="text-sm text-gray-500 hover:text-brand-400 transition-colors"
          >
            Email
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-brand-400 transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://calendly.com/njessemandevamirtham/15-min-strategy-call"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-brand-400 transition-colors"
          >
            Book a Call
          </a>
        </div>
      </div>
    </footer>
  );
}
