"use client";
import React from 'react';
import { Marquee } from '@/components/ui/Marquee';
import { Leaf, Factory, LayoutGrid, Wind, Sun, Zap, Star } from 'lucide-react';

const marqueeData = [
  { text: "Net-Zero Future", icon: Leaf },
  { text: "Low-Carbon Solutions", icon: Factory },
  { text: "Sustainable Energy", icon: LayoutGrid },
  { text: "Renewable Power", icon: Wind },
  { text: "Clean Energy", icon: Sun },
  { text: "Save Energy", icon: Zap },
];

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-texture py-24 overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Testimonials</span>
        </div>
        <h2 className="font-display text-[44px] md:text-[56px] font-extrabold tracking-[-0.03em] text-white leading-[1.0]">
          Powered by Homeowners
        </h2>
      </div>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto px-6 mb-0">
        <div className="grid grid-cols-1 lg:grid-cols-[35fr_65fr] gap-4">

          {/* Left: two stacked text cards */}
          <div className="flex flex-col gap-4">

            {/* Card 1 — Emily */}
            <div className="bg-[#141414] border border-white/10 rounded-[10px] p-7 flex flex-col justify-between">
              <div>
                <Stars />
                <p className="text-white/80 text-sm font-medium leading-[1.7]">
                  "From the first call to installation, everything was smooth and transparent. Solar finally feels like a smart and reliable."
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/[0.06]">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
                  alt="Emily T."
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-white font-semibold text-sm">Emily T.</p>
                  <p className="text-white/40 text-xs">Homeowner, USA</p>
                </div>
              </div>
            </div>

            {/* Card 2 — David */}
            <div className="bg-[#141414] border border-white/10 rounded-[10px] p-7 flex flex-col justify-between">
              <div>
                <Stars />
                <p className="text-white/80 text-sm font-medium leading-[1.7]">
                  "Renewable handled design, permits, and installation smoothly. We just enjoy monthly savings."
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/[0.06]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                  alt="David K."
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-white font-semibold text-sm">David K.</p>
                  <p className="text-white/40 text-xs">Homeowner, USA</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right: big image card */}
          <div className="relative rounded-[20px] overflow-hidden min-h-[400px] lg:min-h-auto">
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2787&auto=format&fit=crop"
              alt="James W. - Solar homeowner"
              className="w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-white text-xl font-semibold leading-[1.5] mb-3 italic">
                "Great experience from start to finish. The system performs reliably every day."
              </p>
              <div className="flex items-center gap-2">
                <p className="text-white font-bold text-sm">James W.</p>
                <span className="w-1 h-1 rounded-full bg-white/50" />
                <p className="text-white/60 text-sm">Homeowner, USA</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto relative py-5">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <Marquee speed={40}>
          <div className="flex items-center gap-3 pr-3 w-max">
            {[...marqueeData, ...marqueeData].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] whitespace-nowrap"
                >
                  <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <span className="text-white/60 text-sm font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>

    </section>
  );
};