"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-[100] transition-all duration-700 px-4 sm:px-12",
      scrolled ? "py-4" : "py-6"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-2.5 rounded-full sm:rounded-[1.5rem] transition-all duration-700 border shadow-xl backdrop-blur-2xl",
        scrolled 
          ? "bg-white/90 border-border shadow-2xl" 
          : "bg-white/40 border-border/40 shadow-lg"
      )}>
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="p-2 rounded-xl bg-primary text-primary-foreground shadow-xl flex items-center justify-center"
          >
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-headline font-black tracking-tight uppercase leading-none shimmer-text">
              SRI HARSHA
            </span>
            <span className="text-[7px] sm:text-[9px] font-mono font-black uppercase tracking-[0.2em] text-primary/60 mt-0.5 sm:mt-1">
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Interface */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[12px] font-black text-foreground/70 hover:text-primary transition-all uppercase tracking-[0.3em] relative group"
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-1.5 left-0 h-[2px] bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            ))}
          </div>
          
          <div className="h-5 w-px bg-border/60" />
          
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.3em] shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-2"
          >
            <Terminal className="w-3.5 h-3.5" />
            Sync
          </motion.a>
        </div>

        {/* Mobile Controller Interface */}
        <div className="flex items-center gap-3 lg:hidden">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-lg bg-primary text-primary-foreground shadow-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="absolute top-full left-4 right-4 mt-4 bg-white/95 backdrop-blur-3xl border border-border rounded-[1.5rem] p-6 flex flex-col gap-3 lg:hidden shadow-4xl overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-[13px] font-black uppercase tracking-[0.3em] text-foreground/70 hover:text-primary py-3 border-b border-border/10 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full py-4 rounded-lg bg-primary text-primary-foreground text-center font-black uppercase tracking-[0.3em] text-[12px] shadow-xl mt-2"
              onClick={() => setIsOpen(false)}
            >
              Initialize Node
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
