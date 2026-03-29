"use client";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate, motion } from "framer-motion";

interface CounterProps {
  value: number;
  direction?: "up" | "down";
  duration?: number;
  delay?: number;
}

export const Counter = ({ value, direction = "up", duration = 2, delay = 0 }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        const animation = animate(motionValue, direction === "down" ? 0 : value, {
          duration,
          ease: "easeOut",
        });

        return () => animation.stop();
      }, delay * 1000);
      
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, direction, duration, delay, motionValue]);

  useEffect(() => {
    return motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest));
      }
    });
  }, [motionValue]);

  return <span ref={ref} className="font-display">0</span>;
};
