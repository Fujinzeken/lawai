"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("Navbar");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t("links.problem"), href: "#problem" },
    { name: t("links.howItWorks"), href: "#how-it-works" },
    { name: t("links.features"), href: "#features" },
    { name: t("links.whoItFor"), href: "#who-it-for" },
    { name: t("links.faq"), href: "#faq" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_#eae6de] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-navy-950 flex items-center justify-center group-hover:scale-105 transition-transform">
            <Scale className="text-amber-400 w-5 h-5" />
          </div>
          <span className="text-xl font-heading font-bold tracking-tight text-navy-950">
            {t("logo.law")}
            <span className="text-amber-600">{t("logo.ai")}</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-8 mr-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-navy-700 hover:text-amber-600 transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href="https://t.me/aiqonun_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-2.5 rounded-full text-sm"
            >
              {t("cta")}
            </a>
          </div>
        </div>

        {/* Mobile Nav Trigger */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="text-navy-800 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-warm-200 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-navy-800 hover:text-amber-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://t.me/aiqonun_bot"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full py-3 rounded-xl text-center text-sm"
              >
                {t("cta")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
