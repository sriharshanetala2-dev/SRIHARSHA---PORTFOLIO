"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";

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
      "fixed top-0 w-full z-[100] transition-all duration-700 px-4 sm:px-10",
      scrolled ? "py-6" : "py-10"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4 rounded-3xl transition-all duration-700 border",
        scrolled 
          ? "bg-background/80 backdrop-blur-3xl border-border/60 shadow-2xl" 
          : "bg-transparent border-transparent"
      )}>
        <Link href="/" className="flex items-center gap-4 sm:gap-5 group">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-3 rounded-2xl bg-primary text-primary-foreground shadow-xl flex items-center justify-center"
          >
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-xl font-headline font-black tracking-normal uppercase leading-none shimmer-text">
              SRI HARSHA
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-primary/80 mt-1">
              Full Stack Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-14">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-all uppercase tracking-[0.2em] relative group"
              >
                {link.name}
                <motion.span 
                  className="absolute -bottom-2 left-0 h-[2px] bg-primary rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "circOut" }}
                />
              </a>
            ))}
          </div>
          
          <div className="h-6 w-px bg-border/50" />
          
          <div className="flex items-center gap-8">
            <motion.button 
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-3.5 rounded-2xl bg-secondary/40 border border-border/60 hover:border-primary/50 transition-all"
              aria-label="Toggle Theme"
            >
              {mounted && (resolvedTheme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
            </motion.button>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-2xl bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all"
            >
              Sync Node
            </motion.a>
          </div>
        </div>

        {/* Mobile Interface Controls */}
        <div className="flex items-center gap-4 lg:hidden">
          <motion.button 
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-3 rounded-2xl bg-secondary/40 border border-border/60"
          >
            {mounted && (resolvedTheme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />)}
          </motion.button>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className="p-3 rounded-2xl bg-primary text-primary-foreground shadow-xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="absolute top-full left-4 right-4 mt-6 bg-background/95 backdrop-blur-3xl border border-border/60 rounded-[2.5rem] p-10 flex flex-col gap-6 lg:hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-primary py-4 border-b border-border/20 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a 
              href="#contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="w-full py-5 rounded-2xl bg-primary text-primary-foreground text-center font-black uppercase tracking-[0.3em] text-[10px] shadow-2xl shadow-primary/30"
              onClick={() => setIsOpen(false)}
            >
              Initiate Sync
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}