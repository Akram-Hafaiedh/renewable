"use client";
import React from 'react';
import { Marquee } from '@/components/ui/Marquee';

const marqueeItems = [
  "Net-Zero Future", "Low-Carbon Solutions", "Sustainable Energy", "Renewable Power", "Clean Energy", "Save Energy"
];

const testimonials = [
  {
    quote: '"From the first call to installation, everything was smooth and transparent. Solar finally feels like a smart and reliable decision."',
    name: "Emily T.",
    role: "Homeowner, USA"
  },
  {
    quote: '"Great experience from start to finish. The system performs reliably every day without any hiccups."',
    name: "James W.",
    role: "Homeowner, USA"
  },
  {
    quote: '“Renewable handled design, permits, and installation smoothly. We just enjoy our new monthly savings.”',
    name: "David K.",
    role: "Homeowner, USA"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-texture pt-32 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-white/90 text-sm font-semibold">Testimonials</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[1.05] mb-16 text-center max-w-[15ch]">
            Powered by Homeowners
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[#0A0A0A] border border-white/10 p-10 md:p-12 rounded-[40px] flex flex-col justify-between shadow-2xl transition-transform hover:-translate-y-2 duration-500">
              <p className="text-white/80 text-xl font-medium leading-relaxed mb-12">
                {t.quote}
              </p>
              <div>
                <p className="text-white font-bold text-lg">{t.name}</p>
                <p className="text-white/50">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="pb-10 pt-10">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  );
};
