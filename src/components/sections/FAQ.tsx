"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is the advice legally valid?",
    a: "LawAI provides informational guidance based on current legislation. While it helps you understand the law, it does not replace formal legal counsel for court proceedings.",
  },
  {
    q: "What type of questions can I ask?",
    a: "Any legal question — from employment disputes and tenant rights to contract reviews, fines, and business compliance.",
  },
  {
    q: "How fast do I get an answer?",
    a: "Most questions are answered within 30 seconds. Complex questions may take slightly longer as the AI analyzes multiple legal sources.",
  },
  {
    q: "Is my data safe?",
    a: "Absolutely. All conversations are encrypted end-to-end. We do not share, sell, or store your personal data beyond what's needed for the session.",
  },
  {
    q: "Does it work in my country?",
    a: "LawAI currently covers legislation for select jurisdictions. We're expanding rapidly — check our supported regions for the latest coverage.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-28 bg-white relative overflow-hidden">
      <div className="section-divider mb-28" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="section-label mb-4">FAQ</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-4 text-navy-950">
              Got <span className="gradient-text">questions?</span>
            </h2>
            <p className="text-navy-600 text-lg leading-relaxed">
              Here are some common questions about LawAI. Can&apos;t find what
              you need? Just ask us directly.
            </p>
          </motion.div>

          {/* Accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`rounded-2xl border transition-colors ${
                  openIndex === i
                    ? "bg-warm-50 border-amber-200/60"
                    : "bg-white border-warm-200 hover:border-warm-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between"
                >
                  <span className="font-heading font-bold text-navy-950 text-[15px] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-amber-500 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-navy-600 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
