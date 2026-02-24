"use client";

import { motion } from "framer-motion";
import { Send, Cpu, CheckCircle, ArrowRight, Zap } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Ask your question",
    desc: "Just type what you need in plain language — no legal terms, no forms. Like texting a smart friend who happens to know the law.",
    icon: Send,
    color: "bg-blue-50 text-blue-600",
    borderColor: "border-t-blue-400",
    glowHover: "hover:shadow-blue-200/40",
  },
  {
    num: "02",
    title: "AI analyzes legislation",
    desc: "Our engine scans thousands of laws, articles, and precedents in real time to find exactly what applies to your situation.",
    icon: Cpu,
    color: "bg-violet-50 text-violet-600",
    borderColor: "border-t-violet-400",
    glowHover: "hover:shadow-violet-200/40",
  },
  {
    num: "03",
    title: "Get clear guidance",
    desc: "You receive a structured, step-by-step answer in plain language with references to the relevant laws — ready to act on.",
    icon: CheckCircle,
    color: "bg-emerald-50 text-emerald-600",
    borderColor: "border-t-emerald-400",
    glowHover: "hover:shadow-emerald-200/40",
  },
];

export default function Solution() {
  return (
    <section
      id="how-it-works"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #eef2f7 0%, #f0f4f8 40%, #e8edf3 100%)",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage: `radial-gradient(circle, #94a3b8 0.5px, transparent 0.5px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Floating circles */}
        <div className="absolute -top-24 -right-24 w-[350px] h-[350px] rounded-full border border-navy-800/[0.04] animate-float-slow" />
        <div className="absolute -top-12 -right-12 w-[280px] h-[280px] rounded-full border border-navy-800/[0.06]" />
        <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] bg-blue-400/[0.04] blur-[80px] rounded-full" />
        {/* Small floating accents */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] right-[18%] w-3 h-3 rounded-full bg-amber-400/30"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-[60%] left-[8%] w-2 h-2 rounded-full bg-violet-400/30"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1] }}
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

        {/* Step cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative bg-white rounded-2xl p-8 border-t-4 ${step.borderColor} shadow-elevated hover:shadow-elevated-lg ${step.glowHover} hover:-translate-y-2 transition-all duration-400`}
            >
              {/* Watermark number */}
              <div className="text-7xl font-heading font-black text-navy-950/[0.04] absolute top-3 right-5 leading-none select-none">
                {step.num}
              </div>

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <step.icon className="w-7 h-7" />
              </div>

              <h3 className="font-heading font-bold text-navy-950 text-xl mb-3">
                {step.title}
              </h3>
              <p className="text-navy-600/80 text-sm leading-relaxed">
                {step.desc}
              </p>

              {/* Connector arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 bg-white rounded-full shadow-elevated items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          {[
            "No complicated terms",
            "No unnecessary meetings",
            "Just clarity",
          ].map((benefit) => (
            <div
              key={benefit}
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-navy-700"
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

      {/* Signature glow line */}
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
}
