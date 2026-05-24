"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2, Moon, Sun, Activity } from "lucide-react";
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
      "fixed top-0 w-full z-50 transition-all duration-500 px-4 sm:px-8",
      scrolled ? "py-4" : "py-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 border",
        scrolled 
          ? "bg-background/90 backdrop-blur-xl border-border shadow-2xl" 
          : "bg-transparent border-transparent"
      )}>
        <Link href="/" className="flex items-center gap-4 group">
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }}
            className="p-2.5 rounded-xl bg-primary text-primary-foreground shadow-lg"
          >
            <Code2 className="w-5 h-5" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-headline font-black tracking-normal uppercase leading-none text-foreground flex items-center gap-2">
              SRI HARSHA
              <Activity className="w-3.5 h-3.5 text-primary animate-pulse opacity-50" />
            </span>
            <span className="text-[9px] font-mono font-bold uppercase tracking-[0.3em] text-primary mt-1">
              Full Stack Architect // V4.0
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-body font-bold text-muted-foreground hover:text-foreground transition-all uppercase tracking-[0.15em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <div className="h-5 w-px bg-border/60" />
          
          <div className="flex items-center gap-5">
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-secondary/50 border border-border hover:border-primary/40 transition-all"
              aria-label="Toggle Theme"
            >
              {mounted && (resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
            </button>
            
            <a 
              href="#contact"
              className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-[0.2em] hover:brightness-110 hover:scale-105 transition-all shadow-md"
            >
              Sync Node
            </a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-secondary/50 border border-border"
          >
            {mounted && (resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
          </button>
          <button 
            className="p-2.5 rounded-xl bg-primary text-primary-foreground shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="absolute top-full left-4 right-4 mt-3 bg-background/95 backdrop-blur-2xl border border-border rounded-2xl p-6 flex flex-col gap-4 lg:hidden shadow-3xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors py-3 border-b border-border/40 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground text-center font-bold uppercase tracking-[0.2em] text-[10px]"
              onClick={() => setIsOpen(false)}
            >
              Initialize Sync
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}