"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
  variant?: "standard" | "boxed";
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick, variant = "standard" }) => {
  const isBoxed = variant === "boxed";

  return (
    <div className={cn(
      isBoxed ? "mb-4 border-2 border-black/5 rounded-[5px] bg-white overflow-hidden shadow-sm" : "border-b border-black/10"
    )}>
      <button
        className={cn(
          "w-full flex items-center justify-between text-left text-black focus:outline-none transition-all",
          isBoxed ? "p-6 md:p-8" : "py-6"
        )}
        onClick={onClick}
      >
        <span className={cn(
          "font-bold tracking-tight",
          isBoxed ? "text-lg md:text-xl" : "text-xl md:text-2xl"
        )}>{title}</span>

        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? (isBoxed ? 405 : 180) : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={cn(
            "flex items-center justify-center shrink-0 transition-colors",
            isBoxed ? "w-10 h-10 rounded-full bg-primary" : ""
          )}
        >
          {isBoxed ? (
            <Plus className="w-5 h-5 text-black" />
          ) : (
            <ChevronDown className="w-5 h-5 opacity-60" />
          )}
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginBottom: isBoxed ? 32 : 24 },
              collapsed: { opacity: 0, height: 0, marginBottom: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className={cn(
              "overflow-hidden text-black/70 text-base md:text-lg",
              isBoxed ? "px-6 md:px-8 pr-12 md:pr-24" : "pr-8"
            )}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Accordion = ({ items, variant = "standard" }: { items: { title: string, content: string }[], variant?: "standard" | "boxed" }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <div className="flex flex-col w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          variant={variant}
          onClick={() => setOpenIndex(index === openIndex ? null : index)}
        />
      ))}
    </div>
  );
};
