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
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center space-y-8 md:space-y-12 relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-[10px] font-black tracking-[0.2em] text-primary uppercase border border-primary/20"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Full Stack & UI Developer
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black leading-none tracking-tighter">
            Bridging Logic & <br />
            <span className="text-gradient">Human Experience</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium opacity-80">
          Transforming computational theory into high-performance, pixel-perfect digital solutions. B.Sc Computer Science graduate specializing in modern React ecosystems and intelligent systems.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-6">
          <Button 
            asChild
            size="lg" 
            className="w-full sm:w-auto h-14 sm:h-16 px-10 rounded-full font-bold text-sm group shadow-xl hover:scale-105 transition-all"
          >
            <a href="#portfolio">
              Explore Projects
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto h-14 sm:h-16 px-10 rounded-full font-bold text-sm hover:scale-105 transition-all"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        className="absolute bottom-10 left-10 hidden xl:flex items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-widest"
      >
        <Terminal className="w-4 h-4" />
        <span>System active // Deployment ready</span>
      </motion.div>
    </section>
  );
}
