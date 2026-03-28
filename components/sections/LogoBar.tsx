"use client";
import React from "react";

const logos = ["Acme Corp", "Vision Eco", "Horizon Energy", "Global Solar", "Nexus Clean"];

export const LogoBar = () => {
  return (
    <section className="bg-black py-16 border-b border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <p className="text-white/40 text-sm font-medium tracking-widest uppercase mb-8">Trusted by</p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-50 transition-all w-full">
          {logos.map((logo, i) => (
            <div key={i} className="text-xl md:text-3xl font-extrabold tracking-tighter text-white/50 hover:text-white transition-colors cursor-default">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
