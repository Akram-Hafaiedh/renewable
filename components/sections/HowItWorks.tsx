"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const steps = [
  { num: "01", title: "Check Your Savings", desc: "Answer a few quick questions to see how much you can save with solar." },
  { num: "02", title: "Home Energy Review", desc: "We review your home, roof, and energy usage to find the best setup." },
  { num: "03", title: "Custom Solar Design", desc: "Our team designs a solar system built specifically for your home." },
  { num: "04", title: "Professional Installation", desc: "Certified installers handle permits, installation, and final activation." },
  { num: "05", title: "Start Saving With Solar", desc: "Turn on your system, track performance, and enjoy lower energy bills." },
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#F5F7FA] py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-1/3">
          <div className="sticky top-32 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="text-black/80 text-sm font-semibold">How It Works</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black mb-8 leading-[1.0] max-w-[10ch]">
              Going Solar Is Simple
            </h2>
            <Button size="lg" className="w-full sm:w-auto px-10">Get Started</Button>
          </div>
        </div>

        <div className="lg:w-2/3">
          <motion.div 
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                }
              }
            }}
          >
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
                className="bg-black text-white p-10 md:p-14 rounded-[40px] flex flex-col md:flex-row md:items-start gap-8 shadow-xl"
              >
                <div className="text-primary text-4xl md:text-5xl font-bold tracking-tighter shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">{step.title}</h3>
                  <p className="text-white/60 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
