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
import { useTranslations } from "next-intl";

export default function Problem() {
  const t = useTranslations("Problem");

  const painPoints = [
    {
      icon: Search,
      text: t("painPoints.p1.text"),
      detail: t("painPoints.p1.detail"),
      iconBg: "bg-rose-50",
      iconColor: "text-rose-500",
    },
    {
      icon: Clock,
      text: t("painPoints.p2.text"),
      detail: t("painPoints.p2.detail"),
      iconBg: "bg-orange-50",
      iconColor: "text-orange-500",
    },
    {
      icon: Wallet,
      text: t("painPoints.p3.text"),
      detail: t("painPoints.p3.detail"),
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
    },
  ];

  return (
    <section id="problem" className="relative overflow-hidden">
      {/* ─── Main content area with long gradual white → amber gradient ─── */}
      <div
        className="py-28 relative"
        style={{
          background:
            "linear-gradient(180deg, #ffffff 0%, #ffffff 15%, #fffcf8 30%, #fff8f0 50%, #fff3e6 70%, #fcebd4 100%)",
        }}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border border-rose-200/20" />
          <div className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full border border-rose-200/15" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-amber-400/5 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left — big question */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="section-label mb-4">{t("label")}</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-[1.08] text-navy-950">
                {t.rich("title", {
                  legalQuestion: (chunks) => (
                    <span className="gradient-text">{chunks}</span>
                  ),
                })}
              </h2>
              <p className="text-navy-600 text-lg leading-relaxed max-w-md mb-10">
                {t("description")}
              </p>

              {/* Amber accent stat */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-5 bg-navy-950 rounded-2xl px-7 py-5 shadow-glow-navy"
              >
                <div className="text-4xl font-heading font-bold text-amber-400">
                  {t("stat.value")}
                </div>
                <div className="text-sm text-white/50 leading-snug max-w-[180px]">
                  {t("stat.label")}
                </div>
              </motion.div>
            </motion.div>

            {/* Right — pain point cards */}
            <div className="space-y-4">
              {painPoints.map(
                ({ icon: Icon, text, detail, iconBg, iconColor }, i) => (
                  <motion.div
                    key={text}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="bg-white rounded-2xl p-6 shadow-elevated border border-warm-200/60 hover:shadow-elevated-lg hover:-translate-y-1 transition-all duration-400 group"
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-6 h-6 ${iconColor}`} />
                      </div>
                      <div>
                        <p className="text-navy-800 font-semibold text-base mb-1">
                          {text}
                        </p>
                        <p className="text-navy-500/60 text-sm italic">
                          {detail}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ),
              )}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="pt-3 pl-1 text-sm text-rose-500 font-semibold italic"
              >
                {t("worseText")}
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Signature glow line */}
      <div className="glow-line" />

      {/* ─── Bottom: Dark navy contrast band ─── */}
      <div className="bg-navy-950 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-amber-500/5 via-transparent to-amber-500/5" />
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 flex items-center justify-center">
                <Zap className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h3 className="text-white text-xl font-heading font-bold mb-1">
                  {t.rich("footer.title", {
                    time: t("footer.time"),
                    span: (chunks) => (
                      <span className="text-amber-400">{chunks}</span>
                    ),
                  })}
                </h3>
                <p className="text-white/40 text-sm">
                  {t("footer.description")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4">
                {[
                  { Icon: Shield, label: t("footer.badges.confidential") },
                  { Icon: CheckCircle2, label: t("footer.badges.accurate") },
                  { Icon: Clock, label: t("footer.badges.instant") },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-xs text-white/30 font-semibold uppercase tracking-wider"
                  >
                    <Icon className="w-3.5 h-3.5 text-amber-400/50" />
                    {label}
                  </div>
                ))}
              </div>
              <a
                href="https://t.me/aiqonun_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-amber px-8 py-3.5 rounded-full text-sm flex items-center gap-2 group shrink-0"
              >
                {t("cta")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
