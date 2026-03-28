"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "End-to-End Service",
  "Custom Systems for Every Home",
  "Trusted, Certified Installers"
];

export const WhyUs = () => {
  return (
    <section className="bg-texture py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="text-white/90 text-sm font-semibold">Why Renewable</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.05] mb-12">
              Why Homeowners Choose Renewable
            </h2>
            
            <div className="flex flex-col gap-6 mb-12">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-6 border-b border-white/10 pb-6 w-full lg:w-[90%]">
                  <CheckCircle2 className="text-primary w-8 h-8 shrink-0" />
                  <span className="text-2xl md:text-3xl text-white font-medium tracking-tight">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" variant="primary" className="px-10">Contact Us</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden border border-white/10 relative shadow-[0_0_80px_rgba(255,255,255,0.02)]">
              <img 
                src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2658&auto=format&fit=crop" 
                alt="Solar panels close up"
                className="w-full h-full object-cover grayscale opacity-90 transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
