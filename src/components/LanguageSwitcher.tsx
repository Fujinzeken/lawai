"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageSwitcher() {
  const t = useTranslations("Navbar.languages");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: "en", name: t("en") },
    { code: "ru", name: t("ru") },
    { code: "uz", name: t("uz") },
  ];

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-navy-700 hover:bg-warm-100 transition-colors duration-300"
      >
        <Globe className="w-4 h-4 text-amber-500" />
        <span className="uppercase">{locale}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute right-0 mt-2 w-40 bg-white rounded-2xl shadow-elevated border border-warm-200 overflow-hidden z-[60]"
          >
            <div className="py-1.5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLocaleChange(lang.code)}
                  className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                    locale === lang.code
                      ? "text-amber-600 bg-amber-50 font-bold"
                      : "text-navy-700 hover:bg-warm-50"
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
