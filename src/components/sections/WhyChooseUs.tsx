"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  Clock,
  BookOpen,
  Languages,
  MessageSquare,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhyChooseUs() {
  const t = useTranslations("Features");

  const features = [
    {
      icon: Brain,
      title: t("items.f1.title"),
      desc: t("items.f1.desc"),
      bg: "bg-blue-50",
      border: "border-blue-100",
      iconColor: "text-blue-600",
      glowHover: "hover:shadow-blue-200/50",
    },
    {
      icon: Shield,
      title: t("items.f2.title"),
      desc: t("items.f2.desc"),
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      iconColor: "text-emerald-600",
      glowHover: "hover:shadow-emerald-200/50",
    },
    {
      icon: Clock,
      title: t("items.f3.title"),
      desc: t("items.f3.desc"),
      bg: "bg-amber-50",
      border: "border-amber-100",
      iconColor: "text-amber-600",
      glowHover: "hover:shadow-amber-200/50",
    },
    {
      icon: BookOpen,
      title: t("items.f4.title"),
      desc: t("items.f4.desc"),
      bg: "bg-violet-50",
      border: "border-violet-100",
      iconColor: "text-violet-600",
      glowHover: "hover:shadow-violet-200/50",
    },
    {
      icon: Languages,
      title: t("items.f5.title"),
      desc: t("items.f5.desc"),
      bg: "bg-rose-50",
      border: "border-rose-100",
      iconColor: "text-rose-600",
      glowHover: "hover:shadow-rose-200/50",
    },
    {
      icon: MessageSquare,
      title: t("items.f6.title"),
      desc: t("items.f6.desc"),
      bg: "bg-sky-50",
      border: "border-sky-100",
      iconColor: "text-sky-600",
      glowHover: "hover:shadow-sky-200/50",
    },
  ];

  return (
    <section id="features" className="py-28 relative bg-white overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-400/[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/[0.03] blur-[120px] rounded-full" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle, #eae6de 0.5px, transparent 0.5px)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 justify-center">
            {t("label")}
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-4 text-navy-950">
            {t("titlePrefix")}{" "}
            <span className="gradient-text">{t("titleSuffix")}</span>
          </h2>
          <p className="text-navy-600 text-lg max-w-lg mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`bento-card ${f.bg} ${f.border} border ${f.glowHover} hover:shadow-xl hover:-translate-y-2 group transition-all duration-400`}
            >
              <div
                className={`w-12 h-12 rounded-xl bg-white/80 flex items-center justify-center mb-5 shadow-sm ${f.iconColor} group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}
              >
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-navy-950 text-lg mb-2">
                {f.title}
              </h3>
              <p className="text-navy-600/70 text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow line */}
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
}
