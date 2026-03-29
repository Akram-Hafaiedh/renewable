"use client";
import React from "react";
import { motion } from "framer-motion";

export const Marquee = ({ 
  children, 
  reverse = false, 
  className = "",
  speed = 40 
}: { 
  children: React.ReactNode, 
  reverse?: boolean, 
  className?: string,
  speed?: number
}) => {
  return (
    <div className={`flex w-full overflow-hidden ${className}`}>
      <motion.div
        className="flex shrink-0 items-center justify-around w-max"
        initial={{ x: reverse ? "-50%" : 0 }}
        animate={{ x: reverse ? 0 : "-50%" }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};
