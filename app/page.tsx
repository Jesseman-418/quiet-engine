import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Packages from "@/components/Packages";
import Calculator from "@/components/Calculator";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink">
      <Navbar />
      <Hero />
      <Problem />
      <Process />
      <Packages />
      <Calculator />
      <SocialProof />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
