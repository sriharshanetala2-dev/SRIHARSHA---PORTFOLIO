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
      "fixed top-0 w-full z-50 transition-all duration-700 px-4 sm:px-8",
      scrolled ? "py-4" : "py-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-8 py-4 rounded-3xl transition-all duration-700 border",
        scrolled 
          ? "bg-background/80 backdrop-blur-2xl border-border shadow-2xl" 
          : "bg-transparent border-transparent"
      )}>
        <Link href="/" className="flex items-center gap-4 group">
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "anticipate" }}
            className="p-3 rounded-2xl bg-primary text-primary-foreground shadow-[0_0_25px_rgba(var(--primary),0.3)]"
          >
            <Code2 className="w-6 h-6" />
          </motion.div>
          <div className="flex flex-col">
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="text-lg sm:text-2xl font-headline font-black tracking-[0.1em] uppercase leading-none bg-clip-text text-transparent bg-gradient-to-r from-foreground via-primary to-foreground shimmer-text"
              style={{ backgroundSize: '200% auto' }}
            >
              SRI HARSHA
            </motion.span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/80 mt-1">Full Stack Architect</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-black text-foreground/70 hover:text-primary transition-all uppercase tracking-[0.3em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <div className="h-6 w-px bg-border/40" />
          
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-2xl bg-secondary/80 border border-border hover:border-primary/50 transition-all shadow-sm"
              aria-label="Toggle Theme"
            >
              {mounted && (resolvedTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
            </button>
            
            <a 
              href="#contact"
              className="px-8 py-3.5 rounded-2xl bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-xl shadow-primary/20"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={toggleTheme}
            className="p-3 rounded-2xl bg-secondary border border-border"
          >
            {mounted && (resolvedTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
          </button>
          <button 
            className="p-3 rounded-2xl bg-primary text-primary-foreground shadow-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-4 right-4 mt-4 bg-background border border-border rounded-3xl p-8 flex flex-col gap-6 lg:hidden shadow-3xl backdrop-blur-3xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-black uppercase tracking-[0.3em] text-foreground/70 hover:text-primary transition-colors py-4 border-b border-border/50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="w-full py-5 rounded-2xl bg-primary text-primary-foreground text-center font-black uppercase tracking-[0.3em] text-[11px]"
              onClick={() => setIsOpen(false)}
            >
              Contact Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}