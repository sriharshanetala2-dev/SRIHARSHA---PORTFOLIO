
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="glow-mesh" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto text-center space-y-10 md:space-y-12 relative z-10"
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

        <div className="space-y-6">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-black leading-[0.9] tracking-tighter uppercase"
          >
            Computational <br />
            <span className="text-gradient">Experience</span>
          </motion.h1>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium opacity-70 uppercase tracking-[0.2em]"
        >
          B.Sc Computer Science graduate specializing in modern React ecosystems and high-performance digital architecture.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
        >
          <Button 
            asChild
            size="lg" 
            className="w-full sm:w-auto h-16 px-12 rounded-full font-black uppercase tracking-[0.3em] text-[10px] group shadow-2xl hover:scale-105 transition-all bg-primary text-primary-foreground"
          >
            <a href="#portfolio">
              Project Matrix
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
        </motion.div>
      </motion.div>
    </section>
  );
}
