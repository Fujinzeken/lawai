"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Scale,
  Clock,
  Gavel,
  Sparkles,
  Bot,
  ChevronRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-warm-50">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 -z-10">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, #d5cfc3 0.8px, transparent 0.8px)`,
            backgroundSize: "32px 32px",
          }}
        />
        {/* Ambient warm wash */}
        <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-amber-400/[0.05] blur-[180px] rounded-full" />
        <div className="absolute bottom-0 left-[10%] w-[40%] h-[50%] bg-navy-800/[0.03] blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── LEFT: Copy ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="section-label mb-6"
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI-Powered Legal Assistant
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.05] text-navy-950"
            >
              Don&apos;t wait
              <br />
              for a lawyer.
              <br />
              <span className="gradient-text">Get answers</span>
              <br />
              instantly.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg text-navy-600 mb-10 max-w-md leading-relaxed"
            >
              24/7 AI-powered legal assistant that explains the law in simple
              language. Ask now, understand immediately.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col sm:flex-row items-start gap-4 mb-4"
            >
              <a
                href="#"
                className="btn-primary px-10 py-4 rounded-full text-base flex items-center gap-2 group"
              >
                Ask Your Question
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="btn-secondary px-10 py-4 rounded-full text-base flex items-center gap-2"
              >
                How It Works
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xs text-navy-600/60 font-medium"
            >
              No appointments · No waiting · No complicated legal language
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 flex gap-10"
            >
              {[
                { value: "~30s", label: "Avg response" },
                { value: "24/7", label: "Availability" },
                { value: "100%", label: "Confidential" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-heading font-bold text-navy-950">
                    {value}
                  </div>
                  <div className="text-[10px] text-navy-600/60 mt-1 font-semibold uppercase tracking-widest">
                    {label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Cinematic Chat Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            {/* ✦ Signature amber glow orb — the "moment" */}
            <div className="absolute -inset-8 -z-10 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] rounded-[40%] bg-gradient-to-br from-amber-400/20 via-amber-300/10 to-transparent blur-[60px] animate-pulse-glow" />
              <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-amber-500/15 blur-[40px] animate-float-slow" />
            </div>

            {/* Popular question pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-wrap gap-2 mb-4 justify-center"
            >
              {[
                "Can I contest this fine?",
                "What are my tenant rights?",
                "Is this contract valid?",
              ].map((q, i) => (
                <motion.div
                  key={q}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-warm-200/80 text-[11px] text-navy-700 hover:border-amber-400 hover:text-amber-700 hover:shadow-md hover:shadow-amber-100/40 transition-all duration-300 cursor-pointer shadow-sm"
                >
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  {q}
                </motion.div>
              ))}
            </motion.div>

            {/* Chat Card — with perspective and premium shadow */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="card-navy p-0 overflow-hidden shadow-glow-navy"
              style={{
                transform: "perspective(1200px) rotateY(-2deg) rotateX(1deg)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-md shadow-amber-500/30">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      LawAI Assistant
                    </div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Online
                    </div>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
              </div>

              {/* Messages */}
              <div className="px-5 py-4 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex justify-end"
                >
                  <div className="bg-amber-500/20 text-amber-200 px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%] leading-relaxed border border-amber-500/10">
                    I received a fine I don&apos;t agree with. What should I do?
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/[0.06] px-4 py-3.5 rounded-2xl rounded-tl-sm max-w-[90%] border border-white/[0.06]">
                    <p className="text-sm text-white/90 font-medium mb-2.5">
                      Here are the steps to contest your fine:
                    </p>
                    <div className="space-y-2">
                      {[
                        "Check the appeal deadline (14–28 days)",
                        "Gather supporting evidence",
                        "Submit a formal letter of representation",
                      ].map((step, i) => (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 1.4 + i * 0.15 }}
                          className="flex items-start gap-2.5 text-xs text-white/60"
                        >
                          <span className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 text-[10px] font-bold">
                            {i + 1}
                          </span>
                          {step}
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-3 pt-2.5 border-t border-white/[0.06] flex items-center gap-2">
                      <div className="flex -space-x-1">
                        {[Gavel, Shield, Clock].map((Icon, i) => (
                          <div
                            key={i}
                            className="w-5 h-5 rounded-full bg-navy-800 border border-white/10 flex items-center justify-center"
                          >
                            <Icon className="w-2.5 h-2.5 text-amber-400" />
                          </div>
                        ))}
                      </div>
                      <span className="text-[10px] text-white/40 italic">
                        Analyzed 3 relevant articles · 0.8s
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Input */}
              <div className="px-5 pb-4">
                <div className="flex gap-2.5">
                  <div className="flex-1 bg-white/[0.05] rounded-xl py-2.5 px-4 text-sm text-white/30 border border-white/[0.05]">
                    Ask a legal question...
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shrink-0 cursor-pointer hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="mt-6 flex items-center justify-center gap-6"
            >
              {[
                { Icon: Shield, text: "End-to-end encrypted" },
                { Icon: Scale, text: "Based on current law" },
              ].map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 text-[10px] text-navy-600/50 font-semibold uppercase tracking-wider"
                >
                  <Icon className="w-3 h-3 text-amber-500/60" />
                  {text}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Signature glow line at bottom of hero */}
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
}
