import { Scale, Github, Twitter, Linkedin } from "lucide-react";

const productLinks = ["Features", "How It Works", "Pricing", "FAQ"];
const legalLinks = ["Terms of Service", "Privacy Policy", "Cookie Policy"];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white pt-20 pb-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center">
                <Scale className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-heading font-bold tracking-tight">
                Law<span className="text-amber-400">AI</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              AI-powered legal assistant that explains the law in simple
              language. Available 24/7, confidential, and always up to date.
            </p>
            <div className="flex gap-3">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-amber-500/20 flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-white/50 hover:text-amber-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/50 hover:text-amber-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-white/50 hover:text-amber-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} LawAI. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            LawAI provides legal information, not legal advice. Always consult a
            qualified attorney for binding legal matters.
          </p>
        </div>
      </div>
    </footer>
  );
}
