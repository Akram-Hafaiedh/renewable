"use client";
import React from 'react';
import { Accordion } from '@/components/ui/Accordion';
import { Mountain, DollarSign, Zap, Home } from 'lucide-react';

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

const badges = [
  { icon: Mountain, label: "25 Yrs System Life" },
  { icon: DollarSign, label: "$1.2k+ yearly savings" },
  { icon: Zap, label: "100% Clean Energy" },
  { icon: Home, label: "500+ homes powered" },
];

export const Savings = () => {
  return (
    <section id="savings" className="bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top heading — centered */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-[#F5F7FA] mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-black/80 text-sm font-semibold">Savings & Impact</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-[1.05]">
            Real Value of Going Solar
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left — accordion */}
          <div className="lg:w-[55%]">
            <Accordion items={items} />
          </div>

          {/* Right — badges + illustration */}
          <div className="lg:w-[45%] flex flex-col gap-6">
            {/* 2x2 pill badges */}
            <div className="grid grid-cols-2 gap-3">
              {badges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="bg-primary flex items-center gap-2.5 px-4 py-3 rounded-full"
                >
                  <Icon className="w-4 h-4 text-black shrink-0" strokeWidth={2} />
                  <span className="text-black text-sm font-bold">{label}</span>
                </div>
              ))}
            </div>

            {/* Replace the illustration div in Savings with this */}
            <div className="w-full flex-1 min-h-[320px] flex items-center justify-center">
              <svg
                viewBox="0 0 600 340"
                className="w-full h-auto text-black/10 fill-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* ── SUN left ── */}
                <circle cx="60" cy="50" r="22" stroke="currentColor" strokeWidth="1.5" />
                <path d="M60 18 V8 M60 82 V92 M28 50 H18 M92 50 H102 M38 28 L31 21 M82 28 L89 21 M38 72 L31 79 M82 72 L89 79" stroke="currentColor" strokeWidth="1.5" />

                {/* ── Cloud left ── */}
                <path d="M110 70 Q118 58 130 65 Q136 50 152 55 Q168 48 172 65 Q184 64 186 76 Q186 88 172 88 H118 Q106 88 110 70Z" stroke="currentColor" strokeWidth="1.5" />

                {/* ── Left house ── */}
                <rect x="30" y="160" width="110" height="90" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 160 L85 110 L150 160" stroke="currentColor" strokeWidth="1.5" />
                {/* door */}
                <rect x="70" y="210" width="28" height="40" stroke="currentColor" strokeWidth="1.5" />
                {/* windows */}
                <rect x="38" y="175" width="22" height="18" stroke="currentColor" strokeWidth="1.2" />
                <rect x="112" y="175" width="22" height="18" stroke="currentColor" strokeWidth="1.2" />
                {/* solar panels on roof */}
                <rect x="52" y="128" width="24" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" transform="rotate(-38 52 128)" />
                <rect x="82" y="115" width="24" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" transform="rotate(-38 82 115)" />
                {/* leaf circle on house */}
                <circle cx="85" cy="195" r="14" stroke="currentColor" strokeWidth="1.2" />
                <path d="M85 181 Q98 188 92 202 Q85 208 78 202 Q72 188 85 181Z" stroke="currentColor" strokeWidth="1" />

                {/* ── Wind turbine center-left ── */}
                <line x1="200" y1="250" x2="200" y2="100" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="200" cy="100" r="5" stroke="currentColor" strokeWidth="1.2" />
                {/* blades */}
                <path d="M200 100 Q195 80 185 70" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M200 100 Q218 98 228 90" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M200 100 Q192 118 194 130" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                {/* base */}
                <path d="M193 250 L207 250" stroke="currentColor" strokeWidth="1.5" />

                {/* ── Solar panel array center ── */}
                <rect x="240" y="190" width="38" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <line x1="259" y1="190" x2="259" y2="214" stroke="currentColor" strokeWidth="1" />
                <line x1="240" y1="202" x2="278" y2="202" stroke="currentColor" strokeWidth="1" />
                <rect x="284" y="190" width="38" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <line x1="303" y1="190" x2="303" y2="214" stroke="currentColor" strokeWidth="1" />
                <line x1="284" y1="202" x2="322" y2="202" stroke="currentColor" strokeWidth="1" />
                {/* panel legs */}
                <line x1="252" y1="214" x2="248" y2="240" stroke="currentColor" strokeWidth="1.2" />
                <line x1="266" y1="214" x2="270" y2="240" stroke="currentColor" strokeWidth="1.2" />
                <line x1="296" y1="214" x2="292" y2="240" stroke="currentColor" strokeWidth="1.2" />
                <line x1="310" y1="214" x2="314" y2="240" stroke="currentColor" strokeWidth="1.2" />

                {/* ── EV Car center ── */}
                <rect x="230" y="255" width="110" height="38" rx="10" stroke="currentColor" strokeWidth="1.5" />
                <path d="M248 255 Q258 238 282 238 H308 Q322 238 332 255" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="258" cy="296" r="10" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="314" cy="296" r="10" stroke="currentColor" strokeWidth="1.5" />
                {/* charging bolt */}
                <path d="M282 250 L276 262 H283 L277 274" stroke="currentColor" strokeWidth="1.2" />

                {/* ── Recycle arrows right-center ── */}
                <path d="M420 130 Q440 110 460 130" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" markerEnd="url(#arr)" />
                <path d="M460 130 Q480 160 460 185" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M460 185 Q440 205 420 185" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M420 185 Q400 160 420 130" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                {/* recycle leaf */}
                <circle cx="440" cy="158" r="16" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />

                {/* ── SUN right ── */}
                <circle cx="530" cy="55" r="20" stroke="currentColor" strokeWidth="1.5" />
                <path d="M530 25 V15 M530 85 V95 M500 55 H490 M560 55 H570 M510 35 L503 28 M550 35 L557 28 M510 75 L503 82 M550 75 L557 82" stroke="currentColor" strokeWidth="1.5" />

                {/* ── Right house ── */}
                <rect x="420" y="200" width="120" height="90" stroke="currentColor" strokeWidth="1.5" />
                <path d="M408 200 L480 148 L552 200" stroke="currentColor" strokeWidth="1.5" />
                {/* door */}
                <rect x="466" y="248" width="28" height="42" stroke="currentColor" strokeWidth="1.5" />
                {/* windows */}
                <rect x="428" y="215" width="22" height="18" stroke="currentColor" strokeWidth="1.2" />
                <rect x="510" y="215" width="22" height="18" stroke="currentColor" strokeWidth="1.2" />
                {/* solar panels on roof */}
                <rect x="444" y="170" width="24" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" transform="rotate(-35 444 170)" />
                <rect x="474" y="157" width="24" height="14" rx="1" stroke="currentColor" strokeWidth="1.2" transform="rotate(-35 474 157)" />

                {/* ── Right wind turbine ── */}
                <line x1="560" y1="250" x2="560" y2="120" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="560" cy="120" r="5" stroke="currentColor" strokeWidth="1.2" />
                <path d="M560 120 Q555 100 545 90" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M560 120 Q578 118 588 110" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M560 120 Q552 138 554 150" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M553 250 L567 250" stroke="currentColor" strokeWidth="1.5" />

                {/* ── Trees ── */}
                {/* left trees */}
                <line x1="155" y1="290" x2="155" y2="240" stroke="currentColor" strokeWidth="1.5" />
                <ellipse cx="155" cy="225" rx="18" ry="22" stroke="currentColor" strokeWidth="1.2" />
                <line x1="178" y1="290" x2="178" y2="252" stroke="currentColor" strokeWidth="1.5" />
                <ellipse cx="178" cy="238" rx="14" ry="18" stroke="currentColor" strokeWidth="1.2" />

                {/* right trees */}
                <line x1="390" y1="290" x2="390" y2="248" stroke="currentColor" strokeWidth="1.5" />
                <ellipse cx="390" cy="234" rx="16" ry="20" stroke="currentColor" strokeWidth="1.2" />
                <line x1="412" y1="290" x2="412" y2="255" stroke="currentColor" strokeWidth="1.5" />
                <ellipse cx="412" cy="242" rx="13" ry="17" stroke="currentColor" strokeWidth="1.2" />

                {/* ── Sparkles ── */}
                <path d="M355 60 L357 52 L359 60 L367 62 L359 64 L357 72 L355 64 L347 62Z" stroke="currentColor" strokeWidth="1" />
                <path d="M170 100 L171 95 L172 100 L177 101 L172 102 L171 107 L170 102 L165 101Z" stroke="currentColor" strokeWidth="1" />
                <path d="M395 90 L396 85 L397 90 L402 91 L397 92 L396 97 L395 92 L390 91Z" stroke="currentColor" strokeWidth="1" />

                {/* ── Ground line ── */}
                <line x1="20" y1="290" x2="580" y2="290" stroke="currentColor" strokeWidth="1.5" />
                <line x1="20" y1="308" x2="580" y2="308" stroke="currentColor" strokeWidth="1" opacity="0.4" />

                {/* ── Dashed arc connecting elements ── */}
                <path d="M200 100 Q300 60 420 130" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
                <path d="M85 160 Q160 80 200 100" stroke="currentColor" strokeWidth="1" strokeDasharray="5 5" opacity="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};