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
          ? "bg-background/90 backdrop-blur-xl border-border shadow-lg" 
          : "bg-transparent border-transparent"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.6, ease: "anticipate" }}
            className="p-2 rounded-xl bg-primary text-primary-foreground shadow-md"
          >
            <Code2 className="w-5 h-5" />
          </motion.div>
          <div className="flex flex-col">
            <motion.span 
              whileHover={{ scale: 1.02 }}
              className="text-sm sm:text-lg font-headline font-black tracking-tight uppercase leading-none text-gradient shimmer-text"
            >
              SRI HARSHA
            </motion.span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground">Full Stack Architect</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-bold text-foreground/70 hover:text-primary transition-all uppercase tracking-[0.2em] relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <div className="h-4 w-px bg-border/50" />
          
          <div className="flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all"
              aria-label="Toggle Theme"
            >
              {mounted && (resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
            </button>
            
            <a 
              href="#contact"
              className="px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-[0.1em] hover:brightness-110 transition-all shadow-sm"
            >
              Contact
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
            className="p-2 rounded-xl bg-primary text-primary-foreground shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 bg-background border border-border rounded-2xl p-6 flex flex-col gap-4 lg:hidden shadow-xl"
          >
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-colors py-3 border-b border-border last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="w-full py-4 rounded-xl bg-primary text-primary-foreground text-center font-black uppercase tracking-[0.2em] text-[10px]"
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