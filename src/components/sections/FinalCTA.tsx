"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FinalCTA() {
  const t = useTranslations("FinalCTA");

  const checkItems = [t("checks.c1"), t("checks.c2"), t("checks.c3")];

  return (
    <section className="py-28 bg-warm-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1] }}
          className="card-navy p-12 md:p-16 text-center relative overflow-hidden shadow-glow-navy"
        >
          {/* Ambient glows */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[60%] bg-amber-500/[0.08] blur-[80px] rounded-full animate-pulse-glow" />
            <div className="absolute bottom-0 right-[20%] w-[30%] h-[40%] bg-blue-500/[0.04] blur-[60px] rounded-full" />
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-1.5 mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                {t("badge")}
              </span>
            </motion.div>

            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1]">
              {t("titlePrefix")}
              <br />
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                {t("titleSuffix")}
              </span>
            </h2>

            <p className="text-white/50 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://t.me/aiqonun_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber px-10 py-4 rounded-full text-base flex items-center gap-2 group"
              >
                {t("ctaAsk")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="text-white/50 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                {t("ctaHow")}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-5">
              {checkItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-xs text-white/35 font-medium"
                >
                  <Check className="w-3.5 h-3.5 text-amber-400/80" />
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
