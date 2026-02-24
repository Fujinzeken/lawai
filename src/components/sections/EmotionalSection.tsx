"use client";

import { motion } from "framer-motion";

export default function EmotionalSection() {
  return (
    <section className="py-32 bg-navy-950 text-white relative overflow-hidden">
      {/* Layered ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[50%] bg-amber-500/[0.08] blur-[120px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-0 left-[20%] w-[30%] h-[40%] bg-amber-400/[0.04] blur-[100px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[30%] bg-blue-500/[0.03] blur-[80px] rounded-full" />
      </div>

      {/* Glow line top */}
      <div className="absolute top-0 left-0 right-0 glow-line" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-8">
            The law should
            <br />
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              protect you,
            </span>{" "}
            not confuse you.
          </h2>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Everyone deserves to understand their rights. We translate legal
            complexity into clear, actionable guidance — instantly.
          </p>

          {/* Signature decorative element — amber gradient line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-32 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-12"
            style={{ boxShadow: "0 0 20px 2px rgba(224, 190, 122, 0.3)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
