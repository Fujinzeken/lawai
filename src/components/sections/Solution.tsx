"use client";

import { motion } from "framer-motion";
import { Send, Cpu, CheckCircle, ArrowRight, Zap } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Ask your question",
    desc: "Just type what you need in plain language — no legal terms, no forms. Like texting a smart friend who happens to know the law.",
    icon: Send,
    color: "bg-blue-50 text-blue-500",
  },
  {
    num: "02",
    title: "AI analyzes legislation",
    desc: "Our engine scans thousands of laws, articles, and precedents in real time to find exactly what applies to your situation.",
    icon: Cpu,
    color: "bg-violet-50 text-violet-500",
  },
  {
    num: "03",
    title: "Get clear guidance",
    desc: "You receive a structured, step-by-step answer in plain language with references to the relevant laws — ready to act on.",
    icon: CheckCircle,
    color: "bg-emerald-50 text-emerald-500",
  },
];

export default function Solution() {
  return (
    <section
      id="how-it-works"
      className="py-28 relative overflow-hidden bg-warm-50"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-label mb-4 justify-center">
            How it works
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-4 text-navy-950">
            Simple. Fast. <span className="gradient-text">Clear.</span>
          </h2>
          <p className="text-navy-600 text-lg max-w-lg mx-auto">
            From question to clarity in three steps.
          </p>
        </motion.div>

        {/* Vertical timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-warm-200" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex items-start gap-6 md:gap-8 ${
                  i !== steps.length - 1 ? "pb-14" : ""
                }`}
              >
                {/* Number circle */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-navy-950 text-white flex items-center justify-center font-heading font-bold text-sm md:text-base shrink-0 z-10 shadow-lg shadow-navy-950/15">
                  {step.num}
                </div>

                {/* Content */}
                <div className="pt-1 md:pt-3">
                  <div
                    className={`w-11 h-11 rounded-xl ${step.color} flex items-center justify-center mb-4`}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-navy-950 text-xl md:text-2xl mb-2">
                    {step.title}
                  </h3>
                  <p className="text-navy-600 text-sm md:text-base leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            "No complicated terms",
            "No unnecessary meetings",
            "Just clarity",
          ].map((benefit) => (
            <div
              key={benefit}
              className="inline-flex items-center gap-2 rounded-full bg-white border border-warm-200 px-5 py-2.5 text-xs font-semibold text-navy-700 shadow-sm"
            >
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              {benefit}
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="#"
            className="btn-primary inline-flex items-center gap-2 px-10 py-4 rounded-full text-base group"
          >
            Try It Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
