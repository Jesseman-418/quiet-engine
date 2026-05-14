import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Modules from "@/components/Modules";
import Process from "@/components/Process";
import Packages from "@/components/Packages";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ink">
      <Navbar />
      <Hero />
      <Problem />
      <Modules />
      <Process />
      <Packages />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
