"use client";
import React from 'react';
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Sun } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-texture pt-32 pb-10 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.05] mb-8 max-w-[15ch]">
            Power Your Home With Smarter Energy
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-medium mb-10 max-w-sm">
            Switch to clean, affordable solar solutions and start saving today.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="primary" className="px-10">Contact Us</Button>
          </Link>
        </div>

        <div className="lg:w-1/2 flex flex-col sm:flex-row gap-16 lg:justify-end">
          <div className="flex flex-col gap-4">
            <p className="text-white/40 font-bold mb-4 tracking-widest uppercase text-sm">Navigation</p>
            <Link href="/#about" className="text-white/80 hover:text-white font-medium transition-colors text-lg">About</Link>
            <Link href="/#how-it-works" className="text-white/80 hover:text-white font-medium transition-colors text-lg">How It Works</Link>
            <Link href="/#savings" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Savings</Link>
            <Link href="/#testimonials" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Testimonials</Link>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white/40 font-bold mb-4 tracking-widest uppercase text-sm">Legal</p>
            <Link href="/privacy-policy" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Privacy Policy</Link>
            <Link href="/terms-of-use" className="text-white/80 hover:text-white font-medium transition-colors text-lg">Terms of Use</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm font-medium">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
            <Sun className="w-3.5 h-3.5 text-primary" strokeWidth={2.5} />
          </div>
          <span className="text-base font-bold tracking-tight text-white">
            Elyssa Energy
          </span>
        </div>
        <p>© 2026 Elyssa Energy. All rights reserved.</p>
        <div className="flex items-center gap-1.5 flex-wrap justify-center md:justify-end">
          <p>Built by</p>
          <a
            href="https://portfolio-six-mu-c3zpt9l3gd.vercel.app/fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary transition-colors font-semibold underline underline-offset-4 decoration-white/20 hover:decoration-primary"
          >
            Akram Hafaiedh
          </a>
        </div>
      </div>
    </footer>
  );
};
