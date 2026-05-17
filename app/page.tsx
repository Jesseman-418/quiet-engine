import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Modules from "@/components/Modules";
import Process from "@/components/Process";
import Founder from "@/components/Founder";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

// Pricing intentionally not on the page — discussed on the 15-min call.
// Selling the CALL, not the product. (See email-sequence-v3-sell-the-call.md)
export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink">
      <Navbar />
      <Hero />
      <Problem />
      <Modules />
      <Process />
      <Founder />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
