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
      "fixed top-0 w-full z-50 transition-all duration-300 px-4 sm:px-6",
      scrolled ? "py-2 sm:py-4" : "py-4 sm:py-6"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 border",
        scrolled ? "bg-background/95 backdrop-blur-md border-border shadow-md" : "bg-transparent border-transparent"
      )}>
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <div className="p-1.5 sm:p-2 rounded bg-primary text-primary-foreground">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-headline font-black tracking-tight uppercase leading-none">SRI HARSHA</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Full Stack Developer</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-black text-foreground/70 hover:text-primary transition-all uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="h-6 w-px bg-border" />
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted && (resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
          </button>
          
          <a 
            href="#contact"
            className="px-6 py-2 rounded bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-widest hover:brightness-110 transition-all shadow-md"
          >
            Hire Developer
          </a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 lg:hidden">
          <button 
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {mounted && (resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
          </button>
          <button 
            className="p-1.5 sm:p-2 rounded bg-secondary text-foreground border border-border"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-4 right-4 sm:left-6 sm:right-6 mt-2 bg-background border border-border rounded-xl p-4 sm:p-6 flex flex-col gap-2 sm:gap-4 lg:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-black uppercase tracking-widest hover:text-primary transition-colors py-2 sm:py-3 border-b border-border/50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="w-full py-3 sm:py-4 rounded bg-primary text-primary-foreground text-center font-black uppercase tracking-widest text-[11px]"
              onClick={() => setIsOpen(false)}
            >
              Hire Developer
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}