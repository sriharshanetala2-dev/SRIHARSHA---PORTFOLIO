
"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles, Code2, Layers } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="glow-mesh" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-bold tracking-widest text-primary uppercase border border-primary/20">
          <Sparkles className="w-3.5 h-3.5" />
          Full Stack & UI Developer
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-headline font-black leading-tight tracking-tighter">
            Creating <span className="text-gradient">Fluid</span> <br />
            Digital Experiences
          </h1>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium">
          I bridge the gap between complex backend logic and intuitive frontend design to build high-performance, user-centric applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <Button 
            asChild
            size="lg" 
            className="h-16 px-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm group shadow-xl shadow-primary/20"
          >
            <a href="#portfolio">
              View My Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="h-16 px-10 rounded-full border-border hover:bg-foreground/5 font-bold text-sm"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  );
}
