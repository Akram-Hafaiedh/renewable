"use client";
import React from "react";
import { motion } from "framer-motion";

export const Marquee = ({ items, reverse = false, className }: { items: string[], reverse?: boolean, className?: string }) => {
  return (
    <div className={`flex w-full overflow-hidden py-4 ${className}`}>
      <motion.div
        className="flex shrink-0 w-max"
        initial={{ x: reverse ? "-50%" : 0 }}
        animate={{ x: reverse ? 0 : "-50%" }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center space-x-6 md:space-x-12 px-6 md:px-12 whitespace-nowrap">
            <span className="text-2xl md:text-5xl lg:text-7xl font-semibold tracking-tighter text-white">
              {item}
            </span>
            <span className="text-primary md:text-3xl text-xl">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
