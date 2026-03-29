"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";


const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#testimonials", label: "Testimonials" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#savings", label: "Savings" },
];

const FlipLink = ({ href, label }: { href: string; label: string }) => {
  return (
    <Link
      href={href}
      className="relative overflow-hidden group flex flex-col items-center"
      style={{ height: "1.2em" }}
    >
      {/* Original text */}
      <span
        className="block text-white/60 text-sm font-semibold transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-0"
      >
        {label}
      </span>
      {/* Flipped green text */}
      <span
        className="block text-primary text-sm font-semibold absolute top-full transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:opacity-100 opacity-0"
      >
        {label}
      </span>
    </Link>
  );
};

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
        <Link href="/" className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-full" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hover:text-primary transition-colors">
            Renewable
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10 bg-[#0A0A0A]/80 backdrop-blur-md px-10 py-3.5 rounded-full border border-white/10 shadow-xl">
          {navLinks.map((link) => (
            <FlipLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="hidden md:flex">
          <Link href="/contact">
            <Button variant="primary" className="rounded-full px-6 py-5 font-bold flex items-center gap-2 group">
              Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-6">
          <Link href="/#about" onClick={() => setIsOpen(false)} className="text-white font-medium text-lg">About</Link>
          <Link href="/#how-it-works" onClick={() => setIsOpen(false)} className="text-white font-medium text-lg">How It Works</Link>
          <Link href="/#savings" onClick={() => setIsOpen(false)} className="text-white font-medium text-lg">Savings</Link>
          <Link href="/#testimonials" onClick={() => setIsOpen(false)} className="text-white font-medium text-lg">Testimonials</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button variant="primary" className="w-full">Get Started</Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
