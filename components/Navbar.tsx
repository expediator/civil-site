"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/data/content";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className={`text-base font-bold tracking-tight transition-colors ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            {siteConfig.business.name}
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-500 ${
                  scrolled ? "text-slate-600" : "text-white/85"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Free Consultation
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="text-slate-700 text-sm font-medium py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={close}
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-4 py-3 rounded-xl mt-2 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Get Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
