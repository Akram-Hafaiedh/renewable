import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { LogoBar } from "@/components/sections/LogoBar";
import { About } from "@/components/sections/About";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { Savings } from "@/components/sections/Savings";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <LogoBar />
      <About />
      <HowItWorks />
      <WhyUs />
      <Savings />
      <Testimonials />
      <Footer />
    </main>
  );
}
