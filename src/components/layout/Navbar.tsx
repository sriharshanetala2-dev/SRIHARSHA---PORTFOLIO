
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#portfolio" },
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
      "fixed top-0 w-full z-[100] transition-all duration-700 px-4 lg:px-6 xl:px-12",
      scrolled ? "py-4" : "py-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 xl:px-10 py-3 rounded-2xl sm:rounded-full transition-all duration-700 shadow-2xl backdrop-blur-xl border border-white/5",
        scrolled 
          ? "bg-card/40 border-white/10 shadow-primary/5" 
          : "bg-white/5 shadow-lg"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="p-2 rounded-xl bg-primary text-primary-foreground shadow-[0_0_20px_rgba(var(--primary),0.3)] flex items-center justify-center"
          >
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-headline font-black tracking-tight uppercase leading-none shimmer-text">
              SRI HARSHA
            </span>
            <div className="flex flex-col">
              <span className="text-[7px] sm:text-[9px] font-mono font-black uppercase tracking-[0.2em] text-primary mt-0.5 leading-tight">
                Full Stack &
              </span>
              <span className="text-[7px] sm:text-[9px] font-mono font-black uppercase tracking-[0.2em] text-primary leading-tight">
                App Developer
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Interface */}
        <div className="hidden lg:flex items-center lg:gap-6 xl:gap-10">
          <div className="flex items-center lg:gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-black text-foreground hover:text-primary transition-all uppercase tracking-[0.3em] relative group"
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-1.5 left-0 h-[1px] bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </a>
            ))}
          </div>
          
          <div className="h-4 w-px bg-border/40" />
          
          <motion.a 
            href="#contact"
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 30px rgba(var(--primary), 0.4)",
              backgroundColor: "hsl(var(--primary))",
              color: "hsl(var(--primary-foreground))"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2.5 rounded-lg bg-primary/10 text-primary text-[12px] font-black uppercase tracking-[0.3em] transition-all flex items-center gap-2 border-none"
          >
            <Terminal className="w-3.5 h-3.5" />
            Initialize
          </motion.a>
        </div>

        {/* Mobile Controller */}
        <div className="flex lg:hidden items-center gap-3">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-xl bg-primary text-primary-foreground shadow-lg hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all border-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-4 right-4 mt-4 bg-card/95 backdrop-blur-3xl border-none rounded-3xl p-8 flex flex-col gap-4 lg:hidden shadow-4xl overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-black uppercase tracking-[0.4em] text-foreground hover:text-primary py-4 border-b border-border/10 last:border-0 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full py-5 rounded-2xl bg-primary text-primary-foreground text-center font-black uppercase tracking-[0.4em] text-[12px] shadow-2xl mt-4 hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all border-none"
              onClick={() => setIsOpen(false)}
            >
              Start Handshake
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
