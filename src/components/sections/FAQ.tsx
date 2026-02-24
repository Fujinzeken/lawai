"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function FAQ() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: t("items.q1.q"),
      a: t("items.q1.a"),
    },
    {
      q: t("items.q2.q"),
      a: t("items.q2.a"),
    },
    {
      q: t("items.q3.q"),
      a: t("items.q3.a"),
    },
    {
      q: t("items.q4.q"),
      a: t("items.q4.a"),
    },
    {
      q: t("items.q5.q"),
      a: t("items.q5.a"),
    },
  ];

  return (
    <section
      id="faq"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #fdf9f3 40%, #faf5ec 100%)",
      }}
    >
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] rounded-full border border-amber-300/10" />
        <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] bg-amber-400/[0.04] blur-[80px] rounded-full" />
      </div>

      <div className="section-divider mb-28" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <div className="lg:sticky lg:top-32">
              <span className="section-label mb-4">{t("label")}</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-4 text-navy-950">
                {t("titlePrefix")}{" "}
                <span className="gradient-text">{t("titleSuffix")}</span>
              </h2>
              <p className="text-navy-600 text-lg leading-relaxed mb-8">
                {t("description")}
              </p>

              {/* Navy card */}
              <div className="card-navy p-6 hidden lg:block shadow-glow-navy">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-600/20 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-white font-heading font-bold text-sm">
                    {t("card.title")}
                  </span>
                </div>
                <p className="text-white/40 text-xs mb-5 leading-relaxed">
                  {t("card.description")}
                </p>
                <a
                  href="https://t.me/aiqonun_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-amber px-5 py-2.5 rounded-full text-xs inline-flex items-center gap-1.5 group"
                >
                  {t("card.cta")}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`rounded-2xl border transition-all duration-400 ${
                  openIndex === i
                    ? "bg-white border-amber-200/50 shadow-elevated shadow-glow-amber"
                    : "bg-white/60 border-warm-200 hover:border-warm-300 hover:bg-white hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between"
                >
                  <span className="font-heading font-bold text-navy-950 text-[15px] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-amber-500 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-navy-600 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
