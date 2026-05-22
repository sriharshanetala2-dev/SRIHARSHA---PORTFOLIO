"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#portfolio" },
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
      scrolled ? "py-4 bg-background/80 backdrop-blur-xl border-b border-border/50" : "py-8 bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg bg-primary text-primary-foreground">
            <Code className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter uppercase leading-none">SRI HARSHA</span>
            <span className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40">Dev. Hub</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-8 px-8 py-3 rounded-full bg-secondary/30 border border-border">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border p-8 flex flex-col gap-6 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-black uppercase tracking-tighter hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}