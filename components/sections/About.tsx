"use client";
import { motion } from "framer-motion";
import { Counter } from "../ui/Counter";

export const About = () => {
  return (
    <section id="about" className="bg-white text-black py-24 md:py-40 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 lg:gap-32 items-start">
          
          {/* Left Side: Illustration (30%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-[30%] shrink-0"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/[0.03] mb-8">
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-black/60 text-[10px] font-bold uppercase tracking-[0.2em]">About Elyssa Energy</span>
            </div>
            
            <div className="w-full max-w-[400px]">
              <svg viewBox="0 0 400 400" className="w-full h-auto text-black/10 fill-none" xmlns="http://www.w3.org/2000/svg">
                {/* Sun */}
                <circle cx="80" cy="80" r="30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M80 30 L80 10 M130 80 L150 80 M80 130 L80 150 M30 80 L10 80" stroke="currentColor" strokeWidth="1.5" />
                
                {/* Clouds */}
                <path d="M280 120 Q300 100 320 120 T360 120 Q380 140 360 160 H280 Q260 140 280 120" stroke="currentColor" strokeWidth="1.5" />
                <path d="M30 180 Q50 160 70 180 T110 180 Q130 200 110 220 H30 Q10 200 30 180" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
                
                {/* House & Station */}
                <rect x="120" y="180" width="160" height="120" stroke="currentColor" strokeWidth="2" />
                <path d="M120 180 L200 120 L280 180" stroke="currentColor" strokeWidth="2" />
                <rect x="180" y="240" width="40" height="60" stroke="currentColor" strokeWidth="1.5" />
                
                {/* Solar Panels on Roof */}
                <path d="M140 170 L200 125 L260 170" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <rect x="145" y="150" width="30" height="20" stroke="currentColor" strokeWidth="1" transform="rotate(-30 145 150)" />
                <rect x="225" y="150" width="30" height="20" stroke="currentColor" strokeWidth="1" transform="rotate(30 225 150)" />
                
                {/* Ground Lines */}
                <path d="M40 300 H360" stroke="currentColor" strokeWidth="2" />
                <path d="M40 320 H360" stroke="currentColor" strokeWidth="1" opacity="0.4" />
                
                {/* Utility Line */}
                <path d="M320 300 V200 M310 210 H330 M300 230 H340" stroke="currentColor" strokeWidth="1.5" />
                <path d="M280 200 L320 210" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              </svg>
            </div>
          </motion.div>

          {/* Right Side: Content & Stats (70%) */}
          <div className="flex flex-col gap-12 w-full md:w-[70%]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h2 className="font-display text-[44px] md:text-[56px] font-extrabold tracking-[-0.03em] leading-[1.05] mb-8">
                At Elyssa Energy, we make it easy for homeowners to own power through solar.
              </h2>
              <p className="text-black/60 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                Elyssa Energy is a clean energy company focused on helping homeowners take control of their power through premium solar solutions. By combining modern technology and reliable installation, we make it easier to lower energy costs and build energy independence with confidence.
              </p>
            </motion.div>

            {/* Stats List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap items-center gap-x-16 gap-y-10 pt-12 border-t border-black/5"
            >
              <div className="flex flex-col gap-2">
                <div className="text-6xl md:text-[68px] font-display font-extrabold tracking-tight">
                  <Counter value={21} />+
                </div>
                <p className="text-black/40 text-[10px] font-bold uppercase tracking-[0.2em]">Years Experience</p>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="text-6xl md:text-[68px] font-display font-extrabold tracking-tight">
                  <Counter value={60} />+
                </div>
                <p className="text-black/40 text-[10px] font-bold uppercase tracking-[0.2em]">Projects Done</p>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="text-6xl md:text-[68px] font-display font-extrabold tracking-tight">
                  <Counter value={99} />%
                </div>
                <p className="text-black/40 text-[10px] font-bold uppercase tracking-[0.2em]">Client Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
