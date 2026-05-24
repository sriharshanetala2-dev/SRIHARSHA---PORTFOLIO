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
      scrolled ? "py-4 sm:py-6" : "py-8 sm:py-10"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-8 sm:px-12 py-4 rounded-[2.5rem] transition-all duration-1000 border",
        scrolled 
          ? "bg-white/80 backdrop-blur-3xl border-border/80 shadow-2xl" 
          : "bg-transparent border-transparent"
      )}>
        <Link href="/" className="flex items-center gap-4 group">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="p-3 rounded-[1rem] bg-primary text-primary-foreground shadow-xl flex items-center justify-center"
          >
            <Code2 className="w-6 h-6" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-headline font-black tracking-tight uppercase leading-none shimmer-text">
              SRI HARSHA
            </span>
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.3em] text-primary/60 mt-1">
              Systems Architect
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Interface */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-black text-muted-foreground hover:text-primary transition-all uppercase tracking-[0.3em] relative group"
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-2 left-0 h-[2px] bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            ))}
          </div>
          
          <div className="h-8 w-px bg-border/60" />
          
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-[1.25rem] bg-primary text-primary-foreground text-sm font-black uppercase tracking-[0.3em] shadow-xl hover:shadow-primary/30 transition-all flex items-center gap-2"
          >
            <Terminal className="w-4 h-4" />
            Sync
          </motion.a>
        </div>

        {/* Mobile Controller Interface */}
        <div className="flex items-center gap-4 lg:hidden">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="p-4 rounded-[1.25rem] bg-primary text-primary-foreground shadow-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -20 }}
            className="absolute top-full left-6 right-6 mt-6 bg-white/95 backdrop-blur-3xl border border-border rounded-[3rem] p-12 flex flex-col gap-8 lg:hidden shadow-4xl overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-base font-black uppercase tracking-[0.4em] text-muted-foreground hover:text-primary py-4 border-b border-border/20 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#contact"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full py-6 rounded-[2rem] bg-primary text-primary-foreground text-center font-black uppercase tracking-[0.4em] text-base shadow-xl"
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
