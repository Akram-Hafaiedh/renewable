"use client";
import React from 'react';
import { Accordion } from '@/components/ui/Accordion';

const items = [
  {
    title: "Lower Monthly Bills",
    content: "Reduce or eliminate your electricity bill from day one and gain predictable energy costs."
  },
  {
    title: "Long-Term Savings",
    content: "Lock in lower energy rates and protect your home from rising utility prices for years to come."
  },
  {
    title: "Clean Energy Impact",
    content: "Power your home with renewable solar energy while reducing emissions and environmental impact."
  },
  {
    title: "Increased Home Value",
    content: "Solar systems can increase property value and make your home more attractive to buyers."
  },
  {
    title: "Energy Independence",
    content: "Generate your own power and rely less on the grid for everyday energy needs."
  }
];

export const Savings = () => {
  return (
    <section id="savings" className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-[55%]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-[#F5F7FA] mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="text-black/80 text-sm font-semibold">Savings & Impact</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-[1.05] mb-12">
              Real Value of Going Solar
            </h2>
            
            <Accordion items={items} />
          </div>

          <div className="lg:w-[45%] grid grid-cols-2 gap-4">
            <div className="bg-black text-white p-8 md:p-10 rounded-[40px] flex flex-col justify-end aspect-square">
              <p className="text-black bg-primary px-4 py-1.5 rounded-full text-xs font-bold self-start mb-auto">Lifespan</p>
              <h4 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">25 Yrs</h4>
              <p className="text-white/60 font-medium">System Life</p>
            </div>
            <div className="bg-[#F5F7FA] text-black p-8 md:p-10 rounded-[40px] flex flex-col justify-end aspect-square">
              <p className="text-black bg-primary px-4 py-1.5 rounded-full text-xs font-bold self-start mb-auto">Savings</p>
              <h4 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">$1.2k+</h4>
              <p className="text-black/50 font-bold">Yearly savings</p>
            </div>
            <div className="bg-[#F5F7FA] text-black p-8 md:p-10 rounded-[40px] flex flex-col justify-end aspect-square">
              <p className="text-black bg-primary px-4 py-1.5 rounded-full text-xs font-bold self-start mb-auto">Impact</p>
              <h4 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">100%</h4>
              <p className="text-black/50 font-bold">Clean Energy</p>
            </div>
            <div className="bg-primary text-black p-8 md:p-10 rounded-[40px] flex flex-col justify-end aspect-square">
              <p className="text-white bg-black px-4 py-1.5 rounded-full text-xs font-bold self-start mb-auto">Reach</p>
              <h4 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-2">500+</h4>
              <p className="text-black/70 font-bold">Homes powered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
