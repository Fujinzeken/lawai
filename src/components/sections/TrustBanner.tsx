"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { MessageSquare, Clock, ThumbsUp, TrendingUp } from "lucide-react";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(
    count,
    (v) => `${prefix}${Math.round(v).toLocaleString()}${suffix}`,
  );

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2.5,
      ease: [0.22, 1, 0.36, 1],
    });
    return controls.stop;
  }, [count, target]);

  return <motion.span>{rounded}</motion.span>;
}

const stats = [
  {
    icon: MessageSquare,
    value: 50000,
    suffix: "+",
    label: "Questions answered",
    color: "text-blue-400",
    bg: "bg-blue-400/15",
    glow: "shadow-blue-500/10",
  },
  {
    icon: Clock,
    value: 30,
    prefix: "~",
    suffix: "s",
    label: "Avg response time",
    color: "text-emerald-400",
    bg: "bg-emerald-400/15",
    glow: "shadow-emerald-500/10",
  },
  {
    icon: ThumbsUp,
    value: 98,
    suffix: "%",
    label: "User satisfaction",
    color: "text-amber-400",
    bg: "bg-amber-400/15",
    glow: "shadow-amber-500/10",
  },
  {
    icon: TrendingUp,
    value: 15000,
    suffix: "+",
    label: "Active users",
    color: "text-violet-400",
    bg: "bg-violet-400/15",
    glow: "shadow-violet-500/10",
  },
];

export default function TrustBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20">
      {/* Layered background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/50 to-navy-950" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[200px] bg-amber-500/[0.04] blur-[100px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[200px] bg-blue-500/[0.04] blur-[100px] rounded-full" />
      </div>

      {/* Glow line at top */}
      <div className="absolute top-0 left-0 right-0 glow-line" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center group"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${stat.bg} flex items-center justify-center mx-auto mb-5 shadow-lg ${stat.glow} group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2 tracking-tight">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix || ""}
                />
              </div>
              <div className="text-[11px] text-white/35 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
}
