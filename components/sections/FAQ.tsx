"use client";
import React from 'react';
import { Accordion } from '@/components/ui/Accordion';

const faqItems = [
  {
    title: "What does Renewable do?",
    content: "Renewable is a clean energy company that provides premium solar panel installation and energy solutions for homeowners looking to reduce their energy costs."
  },
  {
    title: "How can I get started?",
    content: "You can start by filling out our contact form for a free consultation. Our team will review your energy usage and roof setup to provide a custom estimate."
  },
  {
    title: "Who is Renewable built for?",
    content: "We currently serve residential homeowners who own their property and are looking for sustainable, cost-effective energy alternatives."
  },
  {
    title: "How long does implementation take?",
    content: "From consultation to final grid connection, a typical solar installation takes between 4 to 8 weeks depending on local permitting and utility approvals."
  },
  {
    title: "Is Renewable secure and reliable?",
    content: "Yes, we use tier-1 solar equipment backed by 25-year warranties, and all our installations are performed by certified professionals."
  }
];

export const FAQ = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-[#F5F7FA] mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-black/80 text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-black/60 text-lg">Find quick answers to common questions about Renewable.</p>
        </div>
        
        <Accordion items={faqItems} />
      </div>
    </section>
  );
};
