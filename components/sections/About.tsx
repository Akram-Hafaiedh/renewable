"use client";
import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="bg-white text-black py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-black/5 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              <span className="text-black/80 text-sm font-semibold">About Renewable</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.1]">
              At Renewable, we make it easy for homeowners to own power through solar.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center"
          >
            <p className="text-black/60 text-lg md:text-xl leading-relaxed font-medium">
              Renewable is a clean energy company focused on helping homeowners take control of their power through premium solar solutions. By combining modern technology and reliable installation, we make it easier to lower energy costs and build energy independence with confidence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-10 md:p-14 bg-[#F5F7FA] rounded-[40px] flex flex-col"
          >
            <h3 className="text-7xl font-bold tracking-tighter mb-4 text-black">10+</h3>
            <p className="text-black/50 font-bold text-lg">Years Experience</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-10 md:p-14 bg-[#F5F7FA] rounded-[40px] flex flex-col"
          >
            <h3 className="text-7xl font-bold tracking-tighter mb-4 text-black">500+</h3>
            <p className="text-black/50 font-bold text-lg">Projects Done</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-10 md:p-14 bg-primary rounded-[40px] flex flex-col"
          >
            <h3 className="text-7xl font-bold tracking-tighter mb-4 text-black">99%</h3>
            <p className="text-black/70 font-bold text-lg">Client Satisfaction</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
