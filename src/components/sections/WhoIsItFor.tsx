"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  Briefcase,
  Users,
  Building2,
  UserCheck,
  GraduationCap,
} from "lucide-react";

export default function WhoIsItFor() {
  const t = useTranslations("WhoIsItFor");

  const personas = [
    {
      icon: Briefcase,
      title: t("items.p1.title"),
      desc: t("items.p1.desc"),
      accentBorder: "border-t-amber-400",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      icon: Users,
      title: t("items.p2.title"),
      desc: t("items.p2.desc"),
      accentBorder: "border-t-blue-400",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Building2,
      title: t("items.p3.title"),
      desc: t("items.p3.desc"),
      accentBorder: "border-t-emerald-400",
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      icon: UserCheck,
      title: t("items.p4.title"),
      desc: t("items.p4.desc"),
      accentBorder: "border-t-violet-400",
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
    },
    {
      icon: GraduationCap,
      title: t("items.p5.title"),
      desc: t("items.p5.desc"),
      accentBorder: "border-t-rose-400",
      iconBg: "bg-rose-50",
      iconColor: "text-rose-600",
    },
  ];

  return (
    <section
      id="who-it-for"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #faf9f7 0%, #f5efe6 50%, #faf9f7 100%)",
      }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, #d5cfc3 0.8px, transparent 0.8px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-amber-400/[0.05] blur-[100px] rounded-full" />
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

        {/* Cards — 3 on top, 2 centered below */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {personas.slice(0, 3).map((p, i) => (
              <PersonaCard key={p.title} persona={p} delay={i * 0.1} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[calc(66.666%+0.625rem)] mx-auto">
            {personas.slice(3).map((p, i) => (
              <PersonaCard key={p.title} persona={p} delay={(i + 3) * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonaCard({ persona: p, delay }: { persona: any; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, ease: [0.22, 1, 0.36, 1] }}
      className={`bg-white rounded-2xl border border-warm-200/80 ${p.accentBorder} border-t-4 p-6 text-center shadow-elevated hover:shadow-elevated-lg hover:-translate-y-2 transition-all duration-400 group`}
    >
      <div
        className={`w-14 h-14 rounded-2xl ${p.iconBg} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <p.icon className={`w-7 h-7 ${p.iconColor}`} />
      </div>
      <h3 className="font-heading font-bold text-navy-950 text-base mb-1.5">
        {p.title}
      </h3>
      <p className="text-navy-600/60 text-sm leading-relaxed">{p.desc}</p>
    </motion.div>
  );
}
