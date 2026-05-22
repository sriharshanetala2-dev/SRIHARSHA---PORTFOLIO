"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles, Code2, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="glow-mesh opacity-50" />
      
      {/* Structural Grid Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:60px_60px] opacity-[0.03] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto text-center space-y-12 animate-in fade-in slide-in-from-bottom-12 duration-1000 relative z-10">
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass-card text-[10px] font-black tracking-[0.4em] text-primary uppercase border-primary/20">
          <Cpu className="w-4 h-4" />
          Computational Systems • Full Stack Development
          <Sparkles className="w-4 h-4" />
        </div>

        <div className="space-y-6">
          <h1 className="text-7xl md:text-[13rem] font-headline font-black leading-[0.8] tracking-tighter">
            CODE <br />
            <span className="text-gradient">SYNTHESIS</span>
          </h1>
          <div className="flex items-center justify-center gap-6">
             <div className="h-px w-16 bg-foreground/20" />
             <p className="text-[11px] font-black uppercase tracking-[0.6em] opacity-50">The Computer Science Portfolio of Netala Sriharsha</p>
             <div className="h-px w-16 bg-foreground/20" />
          </div>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium opacity-80">
          Building high-performance digital ecosystems through meticulous back-end logic and intelligent semantic AI integrations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-12">
          <Button 
            asChild
            size="lg" 
            className="h-20 px-16 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-black text-xs uppercase tracking-[0.3em] group transition-all shadow-2xl shadow-primary/30 hover:scale-105"
          >
            <a href="#portfolio">
              Explore Matrix
              <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-3 transition-transform" />
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="ghost" 
            className="h-20 px-16 rounded-full glass-card hover:bg-foreground/5 font-black text-xs uppercase tracking-[0.3em] border-white/10"
          >
            <a href="#contact">Direct Query</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <ChevronDown className="w-12 h-12 text-primary" />
      </div>
    </section>
  );
}
