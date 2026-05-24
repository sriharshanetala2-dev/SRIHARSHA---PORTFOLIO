"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

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
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 px-4 sm:px-6",
      scrolled ? "py-3 sm:py-5" : "py-6 sm:py-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 border",
        scrolled 
          ? "bg-background/80 backdrop-blur-2xl border-border shadow-2xl scale-[0.98] sm:scale-100" 
          : "bg-transparent border-transparent"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6, ease: "anticipate" }}
            className="p-2 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20"
          >
            <Code2 className="w-5 h-5" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-lg font-headline font-black tracking-tight uppercase leading-none shimmer-text">SRI HARSHA</span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/80">Full Stack Architect</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-black text-foreground/60 hover:text-primary transition-all uppercase tracking-[0.3em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <div className="h-6 w-px bg-border/50" />
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all"
              aria-label="Toggle Theme"
            >
              {mounted && (resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
            </button>
            
            <a 
              href="#contact"
              className="magnetic-button px-8 py-3 rounded-xl bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-[0.2em] hover:shadow-[0_0_30px_rgba(var(--primary),0.3)]"
            >
              Initialize Sync
            </a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-secondary/50 border border-border"
          >
            {mounted && (resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
          </button>
          <button 
            className="p-2 rounded-xl bg-primary text-primary-foreground shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-4 right-4 mt-4 bg-background/95 backdrop-blur-3xl border border-border rounded-[2rem] p-8 flex flex-col gap-6 lg:hidden shadow-3xl"
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-sm font-black uppercase tracking-[0.4em] text-foreground/70 hover:text-primary transition-colors py-4 border-b border-border/50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="w-full py-5 rounded-2xl bg-primary text-primary-foreground text-center font-black uppercase tracking-[0.3em] text-xs shadow-xl"
              onClick={() => setIsOpen(false)}
            >
              Initialize Sync
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}