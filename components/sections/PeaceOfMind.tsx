"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Headset, Lock, Star, CheckCircle2, Globe } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    description: "Built to last with tier-1 hardware and industry-leading 25-year warranties."
  },
  {
    icon: Headset,
    title: "Support",
    description: "Our dedicated team is here to help you every step of the way, from design to grid."
  },
  {
    icon: Lock,
    title: "Safety",
    description: "Certified installations that meet the highest safety standards for your home."
  },
  {
    icon: Star,
    title: "Expertise",
    description: "Leveraging years of experience to deliver the most efficient energy solutions."
  },
  {
    icon: CheckCircle2,
    title: "Choice",
    description: "Flexible financing and system options tailored to your specific needs."
  },
  {
    icon: Globe,
    title: "Impact",
    description: "Join thousands of homeowners making a real difference for the planet."
  }
];

export const PeaceOfMind = () => {
  return (
    <section className="bg-texture py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-8"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-white/80 text-sm font-semibold uppercase tracking-widest">Peace of Mind</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold tracking-tighter text-white leading-[1.05]"
          >
            True For The Long Term
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="group p-8 rounded-[14px] bg-black border border-white/10 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto">
                <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
