"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6",
      scrolled ? "py-4" : "py-6"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-6 py-4 rounded-xl transition-all duration-300 border",
        scrolled ? "bg-background/95 backdrop-blur-md border-border shadow-2xl" : "bg-transparent border-transparent"
      )}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded bg-primary text-primary-foreground">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-headline font-black tracking-tight uppercase leading-none">SRI HARSHA</span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-primary">Full Stack Developer</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black text-foreground/70 hover:text-primary transition-all uppercase tracking-[0.2em] relative"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <a 
            href="#contact"
            className="px-6 py-2.5 rounded bg-primary text-primary-foreground text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all"
          >
            Contact Node
          </a>
        </div>

        <button 
          className="lg:hidden p-2 rounded bg-secondary text-foreground border border-border"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 bg-background border border-border rounded-2xl p-8 flex flex-col gap-6 lg:hidden shadow-3xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-headline font-black uppercase tracking-tight hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="w-full py-4 rounded bg-primary text-primary-foreground text-center font-black uppercase tracking-widest text-[10px]"
              onClick={() => setIsOpen(false)}
            >
              Contact Node
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}