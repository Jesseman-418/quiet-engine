import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import WhatYouGet from "@/components/WhatYouGet";
import Packages from "@/components/Packages";
import Calculator from "@/components/Calculator";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Divider />
      <Problem />
      <Divider />
      <Process />
      <Divider />
      <WhatYouGet />
      <Divider />
      <Packages />
      <Divider />
      <Calculator />
      <Divider />
      <SocialProof />
      <Divider />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
