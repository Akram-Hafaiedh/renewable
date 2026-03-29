"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";
import { BackgroundTexture } from '../ui/BackgroundTexture';

const logos = [
  {
    name: "Snowflake",
    svg: (
      <svg viewBox="0 0 160 40" className="h-9 fill-white/30" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 8 L12 32 M6 14 L18 14 M6 26 L18 26 M7 18 L17 22 M17 18 L7 22" stroke="white" strokeWidth="2.5" fill="none" opacity="0.6" />
        <text x="32" y="26" fontFamily="inherit" fontSize="18" fontWeight="800" letterSpacing="-0.2" fill="white" fillOpacity="0.5">snowflake</text>
      </svg>
    )
  },
  {
    name: "Hues",
    svg: (
      <svg viewBox="0 0 100 40" className="h-9 fill-white/30" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10 L8 30 M8 20 L18 20 M18 10 L18 30" stroke="white" strokeWidth="3" fill="none" opacity="0.6" />
        <text x="28" y="26" fontFamily="inherit" fontSize="18" fontWeight="800" letterSpacing="-0.2" fill="white" fillOpacity="0.5">hues</text>
      </svg>
    )
  },
  {
    name: "Cactus",
    svg: (
      <svg viewBox="0 0 130 40" className="h-9 fill-white/30" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="20" r="9" stroke="white" strokeWidth="2.5" fill="none" opacity="0.6" />
        <circle cx="12" cy="20" r="4" fill="white" opacity="0.5" />
        <text x="32" y="26" fontFamily="inherit" fontSize="18" fontWeight="800" letterSpacing="-0.2" fill="white" fillOpacity="0.5">cactus</text>
      </svg>
    )
  },
  {
    name: "Flash",
    svg: (
      <svg viewBox="0 0 100 40" className="h-9 fill-white/30" xmlns="http://www.w3.org/2000/svg">
        <polygon points="12,8 6,20 11,20 7,32 18,17 13,17 18,8" fill="white" opacity="0.6" />
        <text x="30" y="26" fontFamily="inherit" fontSize="18" fontWeight="800" letterSpacing="-0.2" fill="white" fillOpacity="0.5">flash</text>
      </svg>
    )
  },
  {
    name: "Vision",
    svg: (
      <svg viewBox="0 0 115 40" className="h-9 fill-white/30" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="20" rx="10" ry="8" stroke="white" strokeWidth="2.5" fill="none" opacity="0.6" />
        <circle cx="12" cy="20" r="3" fill="white" opacity="0.6" />
        <text x="32" y="26" fontFamily="inherit" fontSize="18" fontWeight="800" letterSpacing="-0.2" fill="white" fillOpacity="0.5">vision</text>
      </svg>
    )
  },
];

const allLogos = [...logos, ...logos];

export const Hero = () => {
  return (
    <section className="relative pt-20 md:pt-24 pb-12 md:pb-24 px-6 overflow-hidden bg-texture">
      {/* <BackgroundTexture /> */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-extralight tracking-[-0.03em] leading-[1.12] mb-7"
          style={{ fontSize: 'clamp(44px, 6vw, 76px)' }}
        >
          Stop Renting Your Power.<br />
          <span className="text-primary">Start Owning It.</span>
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
          className="flex flex-row items-center gap-3 mb-9"
        >
          <Button
            variant="primary"
            className="px-5 py-2.5 rounded-full text-sm font-bold gap-1.5 group inline-flex items-center"
          >
            Get Started <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Button>
          <Button
            variant="outline"
            className="px-5 py-2.5 rounded-full text-sm font-bold bg-transparent border-white/20 hover:bg-white/5 gap-1.5 group text-white inline-flex items-center"
          >
            Learn More <Sparkles className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
          </Button>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="bg-black border border-white/[0.06] rounded-[24px] overflow-hidden flex flex-col lg:flex-row p-7">

            {/* Left panel */}
            <div className="lg:w-[42%] py-7 px-3 flex flex-col justify-between gap-10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-white/50 text-[9px] font-bold uppercase tracking-[0.22em]">Solar for Homes</span>
                </div>
                <p className="text-[18px] md:text-[20px] font-semibold text-white leading-[1.35] tracking-tight max-w-xs">
                  We help homeowners go solar with clean energy and long-term savings.
                </p>
              </div>

              <div className="border-t border-white/[0.05] pt-6">
                <div className="flex items-center gap-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-white/30 text-[9px] font-bold uppercase tracking-[0.28em]">Trusted by</span>
                </div>
                <div className="overflow-hidden w-full h-10 mask-x">
                  <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
                    className="flex items-center gap-12 w-max"
                  >
                    {allLogos.map((logo, i) => (
                      <div key={i} className="flex-shrink-0 cursor-default opacity-80 hover:opacity-100 transition-opacity">
                        {logo.svg}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="lg:w-[58%] p-2.5 h-[260px] lg:h-[340px]">
              <div className="w-full h-full rounded-[18px] overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop"
                  alt="Solar panel installation"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};