
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="glow-mesh" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="max-w-7xl mx-auto text-center space-y-12 md:space-y-16 relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-primary/10 text-[10px] font-black tracking-[0.4em] text-primary uppercase border border-primary/20"
        >
          <Sparkles className="w-4 h-4" />
          Full Stack & UI Developer
        </motion.div>

        <div className="space-y-8">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] font-headline font-black leading-[0.9] tracking-tighter uppercase">
            Computational <br />
            <span className="text-gradient">Experience</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium opacity-70 uppercase tracking-[0.1em]">
          B.Sc Computer Science graduate specializing in modern React ecosystems and high-performance digital architecture.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
          <Button 
            asChild
            size="lg" 
            className="w-full sm:w-auto h-16 px-12 rounded-full font-black uppercase tracking-[0.3em] text-[10px] group shadow-2xl hover:scale-105 transition-all bg-primary text-primary-foreground"
          >
            <a href="#portfolio">
              Project Archive
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto h-16 px-12 rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:scale-105 transition-all border-border/50"
          >
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-10 hidden xl:flex items-center gap-4 text-[9px] font-mono font-bold uppercase tracking-[0.6em] opacity-40"
      >
        <Terminal className="w-4 h-4" />
        <span>Logical flow initiated // System ready</span>
      </motion.div>
    </section>
  );
}
