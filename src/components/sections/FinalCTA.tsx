"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-28 bg-warm-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-navy p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[60%] bg-amber-500/10 blur-[80px] rounded-full" />

          <div className="relative z-10">
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Ready to get
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                clear answers?
              </span>
            </h2>

            <p className="text-white/60 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Ask your first legal question for free. No registration, no
              obligations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="#"
                className="btn-amber px-10 py-4 rounded-full text-base flex items-center gap-2 group"
              >
                Ask Your Question
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="text-white/60 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                See how it works →
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                "No signup required",
                "Free first question",
                "Instant answer",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-xs text-white/40 font-medium"
                >
                  <Check className="w-3.5 h-3.5 text-amber-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
