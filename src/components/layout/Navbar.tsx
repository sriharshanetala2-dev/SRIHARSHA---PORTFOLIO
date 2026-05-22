"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Cpu, Fingerprint, Activity } from "lucide-react";
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
        "max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 border relative",
        scrolled ? "bg-background/80 backdrop-blur-3xl border-white/10 shadow-2xl" : "bg-transparent border-transparent"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2.5 rounded-lg bg-primary text-primary-foreground shadow-xl group-hover:rotate-12 transition-transform">
            <Activity className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-headline font-black tracking-tighter uppercase leading-none italic">SRI HARSHA</span>
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary opacity-60">Neural Architect</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black text-muted-foreground hover:text-primary transition-all uppercase tracking-[0.2em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <a 
            href="#contact"
            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
          >
            Execute Sync
          </a>
        </div>

        <button 
          className="lg:hidden p-2 rounded-lg bg-secondary/50 text-foreground border border-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-6 right-6 mt-4 bg-background/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 flex flex-col gap-6 lg:hidden shadow-3xl overflow-hidden"
          >
            <div className="absolute inset-0 neural-grid opacity-5 pointer-events-none" />
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-headline font-black uppercase tracking-tighter hover:text-primary transition-colors flex items-center justify-between group"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                <ArrowRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
            <a 
              href="#contact"
              className="w-full py-5 rounded-2xl bg-primary text-primary-foreground text-center font-black uppercase tracking-widest text-xs mt-4"
              onClick={() => setIsOpen(false)}
            >
              Execute Sync
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}