"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Showcase", href: "#portfolio" },
  { name: "Skills", href: "#skills" },
  { name: "Growth", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  if (!mounted) return null;

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "glass-nav py-4" : "bg-transparent py-10"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <div className="w-11 h-11 transition-transform duration-700 group-hover:rotate-12">
            <Logo />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-headline font-black tracking-tighter uppercase">
              SRI<span className="text-primary">HARSHA</span>
            </span>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40">Software Developer</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 px-8 py-3 rounded-full glass-card border-white/5 shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-[10px] font-black text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.3em]"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-5">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full w-12 h-12 border border-white/5 hover:bg-white/5 shadow-inner transition-all"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <Button 
              asChild
              className="rounded-full px-10 h-14 font-black text-[11px] uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 hover:scale-105 transition-transform"
            >
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Hire Me</a>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-12 h-12 border border-white/5"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <button
            className="p-3 glass-card rounded-2xl text-foreground shadow-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full glass-nav lg:hidden p-10 animate-in fade-in slide-in-from-top-6 shadow-3xl">
          <div className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-3xl font-headline font-black hover:text-primary transition-colors tracking-tight"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="w-full h-16 text-lg font-black rounded-2xl shadow-xl shadow-primary/20">
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Hire Me</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
