"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Building2,
  UserCheck,
  GraduationCap,
} from "lucide-react";

const personas = [
  { icon: Briefcase, title: "Entrepreneurs" },
  { icon: Users, title: "Employees" },
  { icon: Building2, title: "Small businesses" },
  { icon: UserCheck, title: "Tenants & landlords" },
  { icon: GraduationCap, title: "Students" },
];

export default function WhoIsItFor() {
  return (
    <section
      id="who-it-for"
      className="py-28 relative bg-warm-50 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 justify-center">
            Who it&apos;s for
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-4 mb-4 text-navy-950">
            Made for <span className="gradient-text">everyone</span>
          </h2>
          <p className="text-navy-600 text-lg max-w-lg mx-auto">
            Whether you&apos;re an employee or a business owner, LawAI gives you
            clarity.
          </p>
        </motion.div>

        {/* Horizontal icon strip — no cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16"
        >
          {personas.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center gap-3 group cursor-default"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-2 border-warm-200 flex items-center justify-center shadow-sm group-hover:border-amber-400 group-hover:shadow-md group-hover:shadow-amber-100 transition-all duration-300">
                <p.icon className="w-7 h-7 md:w-8 md:h-8 text-navy-700 group-hover:text-amber-600 transition-colors" />
              </div>
              <span className="text-sm font-heading font-bold text-navy-800">
                {p.title}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
