"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";
import { Marquee } from "@/components/ui/Marquee";
import { Settings, Home, BadgeCheck, Leaf, Factory, LayoutGrid, Wind, Sun, Zap, ArrowRight } from "lucide-react";

const marqueeData = [
  { text: "Net-Zero Future", icon: Leaf },
  { text: "Low-Carbon Solutions", icon: Factory },
  { text: "Sustainable Energy", icon: LayoutGrid },
  { text: "Renewable Power", icon: Wind },
  { text: "Clean Energy", icon: Sun },
  { text: "Save Energy", icon: Zap },
];

const MarqueeStrip = ({ reverse = false }) => (
  <div className="relative border-t border-white/[0.06] pt-4 overflow-hidden">
    <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
    <Marquee speed={35} reverse={reverse}>
      <div className="flex items-center gap-2.5 pr-2.5 w-max">
        {[...marqueeData, ...marqueeData].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.03] whitespace-nowrap">
              <Icon className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
              <span className="text-white/50 text-xs font-medium">{item.text}</span>
            </div>
          );
        })}
      </div>
    </Marquee>
  </div>
);

const benefits = [
  { label: "End-to-End Service", icon: Settings },
  { label: "Custom Systems for Every Home", icon: Home },
  { label: "Trusted, Certified Installers", icon: BadgeCheck },
];

export const WhyUs = () => {
  return (
    <section id="why-renewable" className="bg-texture py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">

        {/* Card 1 — Why Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-[#141414] border border-white/[0.07] rounded-[14px] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: text + marquee */}
            <div className="flex flex-col justify-between p-8 md:p-10 bg-black">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Why Renewable</span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-white leading-[1.1] mb-8">
                  Why Homeowners<br />Choose Renewable
                </h2>

                <div className="flex flex-col mb-8">
                  {benefits.map((benefit, i) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={i} className="flex items-center gap-3 py-3.5 border-b border-white/[0.07]">
                        <Icon className="w-4 h-4 text-primary flex-shrink-0" strokeWidth={1.5} />
                        <span className="text-white/70 text-sm font-medium">{benefit.label}</span>
                      </div>
                    );
                  })}
                </div>

                <Button variant="primary" className="px-6 py-2.5 rounded-full text-sm font-bold gap-2 inline-flex items-center w-fit">
                  Contact Us <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Marquee at bottom of text column */}
              <div className="mt-10">
                <MarqueeStrip reverse={false} />
              </div>
            </div>

            {/* Right: image — no padding, flush to card edges */}
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop"
                alt="Solar panels aerial"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </motion.div>

        {/* Card 2 — Next Step */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-[#141414] border border-white/[0.07] rounded-[14px] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: image — flush */}
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?q=80&w=2676&auto=format&fit=crop"
                alt="Solar neighborhood"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right: text + marquee */}
            <div className="flex flex-col justify-between p-8 md:p-10 bg-black">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 w-fit">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Your Next Step</span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-white leading-[1.1] mb-5">
                  See If Solar Fits<br />Your Home
                </h2>

                <p className="text-white/40 text-sm leading-relaxed mb-8">
                  A quick check can show how solar fits your home, energy usage, and long-term savings goals.
                </p>

                <Button variant="primary" className="px-6 py-2.5 rounded-full text-sm font-bold gap-2 inline-flex items-center w-fit">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Marquee at bottom of text column — reversed */}
              <div className="mt-10">
                <MarqueeStrip reverse={true} />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};