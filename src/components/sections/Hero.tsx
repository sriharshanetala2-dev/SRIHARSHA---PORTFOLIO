
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-32 pb-16 px-6 overflow-hidden">
      <div className="glow-mesh" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 data-flow-grid opacity-10 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto text-center space-y-10 sm:space-y-14 relative z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 text-[11px] sm:text-xs font-black tracking-[0.4em] text-primary uppercase border border-primary/20 shadow-2xl backdrop-blur-xl"
        >
          <Sparkles className="w-4 h-4" />
          Neural Architecture & Full Stack Logic
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-headline font-black leading-[1.1] tracking-tighter uppercase flex flex-col items-center"
          >
            <span className="block">Computational</span>
            <span className="text-gradient shimmer-text block">Experience</span>
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-px w-8 sm:w-16 bg-primary/30" />
            <p className="text-[10px] sm:text-xs font-black text-muted-foreground uppercase tracking-[0.6em] opacity-60">System Version 1.0.4</p>
            <div className="h-px w-8 sm:w-16 bg-primary/30" />
          </motion.div>
        </div>

        <motion.p 
          variants={itemVariants}
          className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-medium uppercase tracking-[0.2em] px-4"
        >
          Architecting elite React ecosystems with a focus on high-performance digital logic and structural integrity.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8"
        >
          <Button 
            asChild
            size="lg" 
            className="w-full sm:w-auto h-16 px-12 rounded-full font-black uppercase tracking-[0.3em] text-[11px] group shadow-2xl hover:scale-105 transition-all bg-primary text-primary-foreground"
          >
            <a href="#portfolio">
              Project Archive
              <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto h-16 px-12 rounded-full font-black uppercase tracking-[0.3em] text-[11px] hover:scale-105 transition-all border-border/60 bg-background/50 backdrop-blur-md group"
          >
            <a href="#contact" className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-primary group-hover:animate-pulse" />
              Initialize Hire
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Hero Stats (Hiring Focus) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 2 }}
        className="absolute bottom-10 left-10 hidden xl:flex flex-col gap-4 border-l border-primary/20 pl-6"
      >
        <div className="space-y-1">
          <p className="text-[10px] font-black text-primary tracking-widest uppercase">Latency</p>
          <p className="text-lg font-black font-mono tracking-tighter">0.024ms</p>
        </div>
        <div className="space-y-1">
          <p className="text-[10px] font-black text-primary tracking-widest uppercase">Uptime</p>
          <p className="text-lg font-black font-mono tracking-tighter">100.00%</p>
        </div>
      </motion.div>
    </section>
  );
}
