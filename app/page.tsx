import { Hero } from "@/components/sections/Hero";
import { LogoBar } from "@/components/sections/LogoBar";
import { About } from "@/components/sections/About";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { Savings } from "@/components/sections/Savings";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <About />
      <Testimonials />
      <HowItWorks />
      <WhyUs />
      <Savings />
    </main>
  );
}
