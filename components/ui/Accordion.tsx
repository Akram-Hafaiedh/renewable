"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-black/10">
      <button
        className="w-full flex items-center justify-between py-6 text-left text-black focus:outline-none"
        onClick={onClick}
      >
        <span className="text-xl md:text-2xl font-semibold tracking-tight">{title}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 opacity-60" />
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
              open: { opacity: 1, height: "auto", marginBottom: 24 },
              collapsed: { opacity: 0, height: 0, marginBottom: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden text-black/70 pr-8 text-base md:text-lg"
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Accordion = ({ items }: { items: {title: string, content: string}[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  return (
    <div className="flex flex-col w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(index === openIndex ? null : index)}
        />
      ))}
    </div>
  );
};
