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
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-[100] transition-all duration-1000 px-6 sm:px-12",
      scrolled ? "py-6 sm:py-8" : "py-10 sm:py-14"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-10 sm:px-14 py-6 rounded-[3rem] transition-all duration-1000 border",
        scrolled 
          ? "bg-white/80 backdrop-blur-3xl border-border/80 shadow-2xl" 
          : "bg-transparent border-transparent"
      )}>
        <Link href="/" className="flex items-center gap-6 group">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="p-4 rounded-[1.25rem] bg-primary text-primary-foreground shadow-2xl flex items-center justify-center"
          >
            <Code2 className="w-8 h-8" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-3xl font-headline font-black tracking-tight uppercase leading-none shimmer-text">
              SRI HARSHA
            </span>
            <span className="text-[11px] font-mono font-black uppercase tracking-[0.4em] text-primary/60 mt-2">
              Systems Architect
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Interface */}
        <div className="hidden lg:flex items-center gap-16">
          <div className="flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] font-black text-muted-foreground hover:text-primary transition-all uppercase tracking-[0.4em] relative group"
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-3 left-0 h-[3px] bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </a>
            ))}
          </div>
          
          <div className="h-10 w-px bg-border/60" />
          
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-14 py-5 rounded-[1.5rem] bg-primary text-primary-foreground text-[14px] font-black uppercase tracking-[0.4em] shadow-2xl hover:shadow-primary/40 transition-all flex items-center gap-3"
          >
            <Terminal className="w-4 h-4" />
            Sync
          </motion.a>
        </div>

        {/* Mobile Controller Interface */}
        <div className="flex items-center gap-6 lg:hidden">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="p-5 rounded-[1.5rem] bg-primary text-primary-foreground shadow-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -30 }}
            className="absolute top-full left-6 right-6 mt-10 bg-white/95 backdrop-blur-3xl border border-border rounded-[4rem] p-16 flex flex-col gap-10 lg:hidden shadow-4xl overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[18px] font-black uppercase tracking-[0.5em] text-muted-foreground hover:text-primary py-6 border-b border-border/20 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full py-8 rounded-[2.5rem] bg-primary text-primary-foreground text-center font-black uppercase tracking-[0.5em] text-[16px] shadow-2xl"
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
