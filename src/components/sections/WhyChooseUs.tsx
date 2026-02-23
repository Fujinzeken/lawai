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
  },
  {
    icon: Shield,
    title: "100% confidential",
    desc: "Your questions and data are encrypted and never shared with anyone. Full privacy, always.",
  },
  {
    icon: Clock,
    title: "Available 24/7",
    desc: "Legal questions don't wait for office hours. Neither do we. Get answers anytime, anywhere.",
  },
  {
    icon: BookOpen,
    title: "Always up to date",
    desc: "Constantly updated with the latest legislation and amendments. Never outdated advice.",
  },
  {
    icon: Languages,
    title: "Simple language",
    desc: "No legal jargon — answers written so anyone can understand them. Clarity over complexity.",
  },
  {
    icon: MessageSquare,
    title: "Follow-up support",
    desc: "Need clarification? Ask follow-up questions for deeper understanding. Like a real conversation.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="features" className="py-28 relative bg-white overflow-hidden">
      <div className="section-divider mb-28" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="section-label mb-4 justify-center">Features</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-4 text-navy-950">
            Why choose <span className="gradient-text">LawAI?</span>
          </h2>
          <p className="text-navy-600 text-lg max-w-lg mx-auto">
            Built for people who need real legal clarity, fast.
          </p>
        </motion.div>

        {/* Feature rows — alternating layout */}
        <div className="max-w-4xl mx-auto space-y-0">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`flex items-start gap-6 py-8 ${
                i !== features.length - 1 ? "border-b border-warm-200" : ""
              } ${i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""}`}
            >
              <div className="w-14 h-14 rounded-2xl bg-warm-50 border border-warm-200 flex items-center justify-center shrink-0 text-amber-600">
                <f.icon className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-navy-950 text-xl mb-1.5">
                  {f.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed max-w-md">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
