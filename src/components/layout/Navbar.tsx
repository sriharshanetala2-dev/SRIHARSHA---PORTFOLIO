"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#portfolio" },
  { name: "Dashboard", href: "#dashboard" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glass-nav py-4" : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 group-hover:scale-110 transition-transform duration-300">
            <Logo />
          </div>
          <span className="text-xl font-headline font-bold tracking-tight">
            SRI<span className="text-primary">HARSHA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6 px-6 py-2 rounded-full glass-card">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button 
            asChild
            className="rounded-full px-8 h-12 font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
          >
            <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Hire Me</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 glass-card rounded-xl text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full glass-nav lg:hidden p-8 animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-headline font-bold hover:text-primary transition-colors"
                onClick={(e) => scrollToSection(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="w-full h-14 text-lg font-bold rounded-2xl">
              <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>Hire Me</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
