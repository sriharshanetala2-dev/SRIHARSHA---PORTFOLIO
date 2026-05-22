"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="glow-mesh" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, base: "easeOut" }}
        className="max-w-7xl mx-auto text-center space-y-12 md:space-y-16 relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-primary/10 text-[12px] sm:text-xs font-black tracking-[0.5em] text-primary uppercase border border-primary/20 shadow-xl backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4" />
          Full Stack & UI Architect
        </motion.div>

        <div className="space-y-8">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black leading-[1.05] sm:leading-[0.95] tracking-tighter uppercase"
          >
            Computational <br />
            <span className="text-gradient">Experience</span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xs sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium opacity-80 uppercase tracking-[0.25em]"
        >
          B.Sc Computer Science graduate specializing in high-performance React ecosystems and elite digital architecture.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10"
        >
          <Button 
            asChild
            size="lg" 
            className="w-full sm:w-auto h-16 px-14 rounded-full font-black uppercase tracking-[0.4em] text-xs group shadow-2xl hover:scale-105 transition-all bg-primary text-primary-foreground"
          >
            <a href="#portfolio">
              Project Matrix
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto h-16 px-14 rounded-full font-black uppercase tracking-[0.4em] text-xs hover:scale-105 transition-all border-border/60 bg-background/50 backdrop-blur-md"
          >
            <a href="#contact">Hire Me</a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
