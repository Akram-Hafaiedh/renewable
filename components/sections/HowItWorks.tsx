"use client";
import React, { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Coins, Home, PenTool, HardHat, Zap } from "lucide-react";

const steps = [
  { num: "01", title: "Check Your Savings", desc: "Answer a few quick questions to see how much you can save with solar.", icon: Coins },
  { num: "02", title: "Home Energy Review", desc: "We review your home, roof, and energy usage to find the best setup.", icon: Home },
  { num: "03", title: "Custom Solar Design", desc: "Our team designs a solar system built specifically for your home.", icon: PenTool },
  { num: "04", title: "Professional Installation", desc: "Certified installers handle permits, installation, and final activation.", icon: HardHat },
  { num: "05", title: "Start Saving With Solar", desc: "Turn on your system, track performance, and enjoy lower energy bills.", icon: Zap },
];

interface Step { num: string; title: string; desc: string; icon: React.ElementType; }

const StepCard = ({ step, index }: { step: Step; index: number }) => {
  const Icon = step.icon;
  const stickyTop = 100 + index * 80;

  return (
    <div
      style={{ top: stickyTop, zIndex: index + 1 }}
      className="sticky mb-4"
    >
      <div
        className={`${index % 2 === 0 ? "bg-black" : "bg-[#1C1C1C]"} border border-white/[0.07] rounded-[14px] p-8 h-[260px] flex flex-col justify-between overflow-hidden`}
      >
        <div className="flex items-start justify-between">
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white max-w-[75%]">
            {step.title}
          </h3>
          <span className="text-primary text-lg font-bold tracking-tight font-display">
            {step.num}
          </span>
        </div>
        <div className="flex items-end justify-between gap-4">
          <p className="text-white/40 text-sm md:text-base leading-relaxed max-w-[75%]">
            {step.desc}
          </p>
          <Icon className="text-white/30 shrink-0 w-10 h-10" strokeWidth={1.2} />
        </div>
      </div>
    </div>
  );
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-[#F5F7FA] px-6">
      <div className="max-w-7xl mx-auto py-32">
        <div className="lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16">

          {/* Left — sticky */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-white mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-black/70 text-xs font-bold uppercase tracking-widest">How It Works</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-black mb-8 leading-none">
                Going Solar<br />Is Simple
              </h2>
              <Button variant="primary" className="px-6 py-2.5 rounded-full text-sm font-bold gap-2 inline-flex items-center">
                Get Started
              </Button>

              {/* Illustration */}
              <div className="mt-8 w-full">
                <svg viewBox="0 0 340 300" className="w-full h-auto fill-none text-black/[0.12]" xmlns="http://www.w3.org/2000/svg">

                  {/* ── Main house body ── */}
                  <rect x="80" y="155" width="140" height="110" stroke="currentColor" strokeWidth="2" />
                  {/* Roof */}
                  <path d="M68 155 L150 90 L232 155" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  {/* Garage door */}
                  <rect x="88" y="195" width="58" height="70" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="88" y1="210" x2="146" y2="210" stroke="currentColor" strokeWidth="1" />
                  <line x1="88" y1="224" x2="146" y2="224" stroke="currentColor" strokeWidth="1" />
                  <line x1="88" y1="238" x2="146" y2="238" stroke="currentColor" strokeWidth="1" />
                  <line x1="88" y1="252" x2="146" y2="252" stroke="currentColor" strokeWidth="1" />
                  {/* Right windows */}
                  <rect x="162" y="175" width="24" height="20" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="194" y="175" width="24" height="20" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="162" y="210" width="24" height="20" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="194" y="210" width="24" height="20" stroke="currentColor" strokeWidth="1.5" />
                  {/* Leaf circle on house */}
                  <circle cx="150" cy="188" r="18" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M150 172 Q164 180 160 194 Q152 202 142 196 Q134 184 150 172Z" stroke="currentColor" strokeWidth="1.2" />
                  <line x1="150" y1="172" x2="150" y2="206" stroke="currentColor" strokeWidth="1" />

                  {/* ── Solar panels on roof ── */}
                  {/* Left panel group */}
                  <rect x="95" y="118" width="36" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" transform="rotate(-32 95 118)" />
                  <line x1="95" y1="118" x2="113" y2="107" stroke="currentColor" strokeWidth="1" transform="rotate(-32 95 118)" />
                  <line x1="95" y1="129" x2="131" y2="129" stroke="currentColor" strokeWidth="1" transform="rotate(-32 95 118)" />
                  {/* Right panel group */}
                  <rect x="168" y="105" width="36" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" transform="rotate(32 168 105)" />
                  <line x1="168" y1="105" x2="186" y2="116" stroke="currentColor" strokeWidth="1" transform="rotate(32 168 105)" />
                  <line x1="168" y1="116" x2="204" y2="116" stroke="currentColor" strokeWidth="1" transform="rotate(32 168 105)" />

                  {/* ── Wind turbine right ── */}
                  <line x1="262" y1="265" x2="262" y2="120" stroke="currentColor" strokeWidth="2" />
                  <circle cx="262" cy="120" r="5" stroke="currentColor" strokeWidth="1.5" />
                  {/* blades */}
                  <path d="M262 120 Q256 98 244 84" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M262 120 Q282 116 294 106" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M262 120 Q256 142 258 156" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  {/* base spread */}
                  <path d="M254 265 L270 265" stroke="currentColor" strokeWidth="2" />

                  {/* ── Wind turbine far right (smaller) ── */}
                  <line x1="304" y1="265" x2="304" y2="160" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="304" cy="160" r="4" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M304 160 Q300 144 292 134" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M304 160 Q318 157 326 150" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M304 160 Q299 175 301 185" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M298 265 L310 265" stroke="currentColor" strokeWidth="1.5" />

                  {/* ── Trees left ── */}
                  {/* tall tree */}
                  <line x1="30" y1="265" x2="30" y2="195" stroke="currentColor" strokeWidth="2" />
                  <ellipse cx="30" cy="178" rx="20" ry="26" stroke="currentColor" strokeWidth="1.5" />
                  <ellipse cx="30" cy="165" rx="14" ry="18" stroke="currentColor" strokeWidth="1.2" />
                  {/* short tree */}
                  <line x1="58" y1="265" x2="58" y2="218" stroke="currentColor" strokeWidth="1.5" />
                  <ellipse cx="58" cy="204" rx="16" ry="20" stroke="currentColor" strokeWidth="1.5" />
                  <ellipse cx="58" cy="193" rx="11" ry="14" stroke="currentColor" strokeWidth="1.2" />

                  {/* ── Bushes bottom ── */}
                  <path d="M68 265 Q78 250 90 258 Q98 244 112 252 Q122 242 134 252 Q144 244 155 255 Q165 248 174 258 Q182 252 192 260 Q200 254 210 262 Q218 258 226 265" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />

                  {/* ── Ground line ── */}
                  <line x1="10" y1="265" x2="330" y2="265" stroke="currentColor" strokeWidth="1.5" />

                  {/* ── Sparkles ── */}
                  {/* top left sparkle */}
                  <path d="M52 108 L54 100 L56 108 L64 110 L56 112 L54 120 L52 112 L44 110Z" stroke="currentColor" strokeWidth="1.2" />
                  {/* right sparkle */}
                  <path d="M236 78 L237.5 72 L239 78 L245 79.5 L239 81 L237.5 87 L236 81 L230 79.5Z" stroke="currentColor" strokeWidth="1.2" />
                  {/* small dot sparkles */}
                  <circle cx="228" cy="108" r="2" fill="currentColor" />
                  <circle cx="70" cy="82" r="2" fill="currentColor" />
                  <circle cx="318" cy="130" r="1.5" fill="currentColor" />

                </svg>
              </div>
            </div>
          </div>

          {/* Mobile heading */}
          <div className="lg:hidden mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 bg-white mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-black/70 text-xs font-bold uppercase tracking-widest">How It Works</span>
            </div>
            <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] text-black mb-8 leading-none">
              Going Solar<br />Is Simple
            </h2>
            <Button variant="primary" className="px-6 py-2.5 rounded-full text-sm font-bold gap-2 inline-flex items-center">
              Get Started
            </Button>
          </div>

          {/* Right — stacking cards */}
          <div>
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};