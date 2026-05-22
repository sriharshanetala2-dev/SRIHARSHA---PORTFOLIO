
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 px-6",
      scrolled ? "py-4" : "py-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-8 py-4 rounded-3xl transition-all duration-500",
        scrolled ? "bg-background/80 backdrop-blur-3xl border border-white/10 shadow-2xl" : "bg-transparent"
      )}>
        <Link href="/" className="flex items-center gap-4 group">
          <div className="p-3 rounded-xl bg-primary text-primary-foreground shadow-xl group-hover:scale-110 transition-transform">
            <Fingerprint className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tighter uppercase leading-none">SRI HARSHA</span>
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-primary opacity-60">System Architect</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-black text-muted-foreground hover:text-primary transition-all uppercase tracking-[0.3em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <a 
            href="#contact"
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl hover:shadow-primary/30"
          >
            Access Portal
          </a>
        </div>

        <button 
          className="lg:hidden p-3 rounded-xl bg-secondary/50 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-3xl border-b border-white/10 p-10 flex flex-col gap-8 lg:hidden shadow-3xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="w-full py-6 rounded-2xl bg-primary text-primary-foreground text-center font-black uppercase tracking-widest"
              onClick={() => setIsOpen(false)}
            >
              Access Portal
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
