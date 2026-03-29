"use client";
import { FAQ } from "@/components/sections/FAQ";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Leaf, LayoutGrid, ArrowLeftRight } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Contact() {
  return (
    <main>
      <section className="relative min-h-screen pt-40 pb-32 px-6 bg-texture overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Badge */}
          <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 mb-8">
            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
            <span className="text-white/80 text-sm font-semibold">Contact Us</span>
          </motion.div>

          {/* Heading */}
          <motion.h1 {...fadeUp(0.08)} className="text-5xl md:text-6xl font-bold tracking-tighter text-white leading-[1.02] mb-5">
            Let's Talk About{" "}
            <span className="text-primary">Solar</span>
          </motion.h1>

          <motion.p {...fadeUp(0.15)} className="text-white/40 text-lg mb-14">
            Have questions about solar or want to see if your home qualifies?
          </motion.p>

          {/* Card — same structure as WhyUs card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#141414] border border-white/[0.07] rounded-[14px] overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left: form */}
              <div className="flex flex-col justify-between p-8 md:p-10 bg-black">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Contact Us</span>
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl font-extrabold tracking-[-0.03em] text-white leading-[1.1] mb-8">
                    Let's Talk About<br />
                    <span className="text-primary">Solar</span>
                  </h2>

                  {/* Form fields */}
                  <div className="flex flex-col gap-5 mb-8">
                    <div className="flex flex-col gap-2">
                      <label className="text-white/50 text-xs font-bold uppercase tracking-widest">Full name</label>
                      <input
                        type="text"
                        placeholder="Jane Smith"
                        className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/20 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-white/50 text-xs font-bold uppercase tracking-widest">Email</label>
                      <input
                        type="email"
                        placeholder="info@example.com"
                        className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/20 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-white/50 text-xs font-bold uppercase tracking-widest">Subject</label>
                      <textarea
                        placeholder="Solar installation..."
                        rows={3}
                        className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/20 text-sm font-medium focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                      />
                    </div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-fit"
                  >
                    <Button variant="primary" className="px-6 py-2.5 rounded-full text-sm font-bold gap-2 inline-flex items-center">
                      Send message <ArrowRight className="w-4 h-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>

              {/* Right: image flush */}
              <div className="hidden lg:block relative min-h-[560px]">
                <Image
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop"
                  alt="Solar panel installation"
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      <FAQ
        variant="boxed"
        description="Find quick answers to common questions about Renewable."
      />
    </main>
  );
}