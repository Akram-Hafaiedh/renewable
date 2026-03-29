import { Hero } from "@/components/sections/Hero";
import { LogoBar } from "@/components/sections/LogoBar";
import { About } from "@/components/sections/About";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyUs } from "@/components/sections/WhyUs";
import { Savings } from "@/components/sections/Savings";
import { Testimonials } from "@/components/sections/Testimonials";
import { PeaceOfMind } from "@/components/sections/PeaceOfMind";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Testimonials />
      <HowItWorks />
      <WhyUs />
      <Savings />
      <PeaceOfMind />
      <FAQ
        variant="boxed"
        description="Find quick answer to common questions about Elyssa Energy"
      />
    </main>
  );
}
