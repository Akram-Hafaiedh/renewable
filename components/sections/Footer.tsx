"use client";
import React from 'react';
import { Button } from "@/components/ui/Button";

export const Footer = () => {
  return (
    <footer className="bg-black pt-32 pb-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.05] mb-8 max-w-[15ch]">
            Power Your Home With Smarter Energy
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-medium mb-10 max-w-sm">
            Switch to clean, affordable solar solutions and start saving today.
          </p>
          <Button size="lg" variant="primary" className="px-10">Contact Us</Button>
        </div>
        
        <div className="lg:w-1/2 flex flex-col sm:flex-row gap-16 lg:justify-end">
          <div className="flex flex-col gap-4">
            <p className="text-white/40 font-bold mb-4 tracking-widest uppercase text-sm">Navigation</p>
            <a href="#about" className="text-white/80 hover:text-white font-medium transition-colors text-lg">About</a>
            <a href="#how-it-works" className="text-white/80 hover:text-white font-medium transition-colors text-lg">How It Works</a>
            <a href="#savings" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Savings</a>
            <a href="#testimonials" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Testimonials</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/40 font-bold mb-4 tracking-widest uppercase text-sm">Legal</p>
            <a href="#" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Privacy Policy</a>
            <a href="#" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm font-medium">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full" />
          </div>
          <span className="text-base font-bold tracking-tight text-white">
            Renewable
          </span>
        </div>
        <p>© 2026 Renewable. All rights reserved.</p>
        <p>Built with Next.js & Tailwind</p>
      </div>
    </footer>
  );
};
