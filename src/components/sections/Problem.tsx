"use client";

import { motion } from "framer-motion";
import {
  Search,
  Clock,
  Wallet,
  ArrowRight,
  Zap,
  Shield,
  CheckCircle2,
} from "lucide-react";

const painPoints = [
  { icon: Search, text: "Google gives you confusing, contradictory articles" },
  { icon: Clock, text: "Lawyers don't respond for days — or weeks" },
  { icon: Wallet, text: "A simple consultation can cost hundreds" },
];

export default function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden">
      <div className="section-divider" />

      {/* ─── Top: White editorial section ─── */}
      <div className="py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — big question */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label mb-4">The problem</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-[1.08] text-navy-950">
                What do you do
                <br />
                when you have a{" "}
                <span className="gradient-text">legal question?</span>
              </h2>
              <p className="text-navy-600 text-lg leading-relaxed max-w-md">
                Most people turn to Google, ask friends, or try to book a
                lawyer. None of these give you a fast, reliable answer.
              </p>
            </motion.div>

            {/* Right — pain points as a simple list */}
            <div className="space-y-0">
              {painPoints.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-5 py-6 ${
                    i !== painPoints.length - 1
                      ? "border-b border-warm-200"
                      : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-rose-400" />
                  </div>
                  <p className="text-navy-800 font-medium text-base">{text}</p>
                </motion.div>
              ))}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-6 text-sm text-rose-500 font-semibold italic"
              >
                Sometimes waiting makes things worse.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom: Dark navy contrast band ─── */}
      <div className="bg-navy-950 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 flex items-center justify-center">
                <Zap className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white text-xl font-heading font-bold mb-1">
                  With LawAI, you get answers in{" "}
                  <span className="text-amber-400">~30 seconds</span>
                </h3>
                <p className="text-white/50 text-sm">
                  Clear, structured, based on current legislation.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4">
                {[
                  { Icon: Shield, label: "Confidential" },
                  { Icon: CheckCircle2, label: "Accurate" },
                  { Icon: Clock, label: "Instant" },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-xs text-white/40 font-semibold uppercase tracking-wider"
                  >
                    <Icon className="w-3.5 h-3.5 text-amber-400/60" />
                    {label}
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="btn-amber px-8 py-3.5 rounded-full text-sm flex items-center gap-2 group shrink-0"
              >
                Try it now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
