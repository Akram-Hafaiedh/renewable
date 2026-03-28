"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative pt-40 md:pt-48 pb-20 px-6 font-sans bg-texture overflow-hidden flex flex-col items-center min-h-screen">
      <div className="absolute inset-0 bg-black/60 pointer-events-none" /> {/* Overlay to fade the texture slightly */}
      
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
          <span className="text-white/90 text-sm font-medium">Solar for Homes</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[90px] font-bold tracking-tighter text-white leading-[1.05] mb-6"
        >
          Power Your Home <br />
          <span className="text-white/50">With Smarter Energy</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-white/60 max-w-2xl text-center mb-10 font-light"
        >
          We help homeowners go solar with clean energy and long-term savings. Switch to clean, affordable solar solutions and start saving today.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button size="lg" variant="primary" className="w-full sm:w-auto px-10 gap-2">
            Get Started <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto px-10">
            Learn More
          </Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-6xl mx-auto mt-20"
      >
        <div className="relative aspect-[4/3] md:aspect-[21/9] w-full rounded-[32px] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(154,240,102,0.1)]">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop" 
            alt="Solar Panels on modern home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};
