"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-black/70 border-b border-white/10 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-full" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hover:text-primary transition-colors">
            Renewable
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 bg-white/5 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
          <a href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
          <a href="#how-it-works" className="text-white/80 hover:text-white text-sm font-medium transition-colors">How It Works</a>
          <a href="#savings" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Savings</a>
          <a href="#testimonials" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Testimonials</a>
        </div>

        <div className="hidden md:flex">
          <Button variant="primary">Get Started</Button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6">
          <a href="#about" onClick={() => setIsOpen(false)} className="text-white font-medium text-lg">About</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className="text-white font-medium text-lg">How It Works</a>
          <a href="#savings" onClick={() => setIsOpen(false)} className="text-white font-medium text-lg">Savings</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-white font-medium text-lg">Testimonials</a>
          <Button variant="primary" className="w-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
};
