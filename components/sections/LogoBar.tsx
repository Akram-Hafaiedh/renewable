"use client";
import React from "react";
import { Marquee } from "@/components/ui/Marquee";

const logos = ["Horizon Energy", "Global Solar", "Horizon Clean", "Renew Corp", "Vision Eco", "Horizon Energy", "Global Solar", "Horizon Clean", "Renew Corp", "Vision Eco"];

export const LogoBar = () => {
  return (
    <section className="bg-black py-12 md:py-20 border-b border-white/5 relative z-10 overflow-hidden">
      <div className="w-full">
        <Marquee speed={35}>
          <div className="flex items-center w-max shrink-0 px-12">
            {logos.map((logo, i) => (
              <div key={i} className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white/50 hover:text-white transition-all duration-300 cursor-default mx-12 md:mx-20 uppercase">
                {logo}
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};
