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

const features = [
  {
    icon: Brain,
    title: "Understands context",
    desc: "Our AI grasps the nuance behind your question, not just keywords. Ask in your own words — it gets it.",
    bg: "bg-blue-50",
    border: "border-blue-100",
    iconColor: "text-blue-600",
    glowHover: "hover:shadow-blue-200/50",
  },
  {
    icon: Shield,
    title: "100% confidential",
    desc: "Your questions and data are encrypted and never shared with anyone. Full privacy, always.",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    iconColor: "text-emerald-600",
    glowHover: "hover:shadow-emerald-200/50",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    desc: "Legal questions don't wait for office hours. Neither do we. Get answers anytime, anywhere.",
    bg: "bg-amber-50",
    border: "border-amber-100",
    iconColor: "text-amber-600",
    glowHover: "hover:shadow-amber-200/50",
  },
  {
    icon: BookOpen,
    title: "Always up to date",
    desc: "Constantly updated with the latest legislation and amendments. Never outdated advice.",
    bg: "bg-violet-50",
    border: "border-violet-100",
    iconColor: "text-violet-600",
    glowHover: "hover:shadow-violet-200/50",
  },
  {
    icon: Languages,
    title: "Simple language",
    desc: "No legal jargon — answers written so anyone can understand them. Clarity over complexity.",
    bg: "bg-rose-50",
    border: "border-rose-100",
    iconColor: "text-rose-600",
    glowHover: "hover:shadow-rose-200/50",
  },
  {
    icon: MessageSquare,
    title: "Follow-up support",
    desc: "Need clarification? Ask follow-up questions for deeper understanding. Like a real conversation.",
    bg: "bg-sky-50",
    border: "border-sky-100",
    iconColor: "text-sky-600",
    glowHover: "hover:shadow-sky-200/50",
  },
];

export default function WhyChooseUs() {
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
          <span className="section-label mb-4 justify-center">Features</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-4 text-navy-950">
            Why choose <span className="gradient-text">LawAI?</span>
          </h2>
          <p className="text-navy-600 text-lg max-w-lg mx-auto">
            Built for people who need real legal clarity, fast.
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
