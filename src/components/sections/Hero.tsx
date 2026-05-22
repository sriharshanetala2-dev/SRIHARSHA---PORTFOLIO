
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Terminal, Layers } from "lucide-react";

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
    hidden: { opacity: 0, y: 50, filter: "blur(20px)", scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-28 pb-20 px-4 sm:px-6 overflow-hidden">
      <div className="glow-mesh" />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 data-flow-grid opacity-10 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto text-center space-y-10 sm:space-y-20 relative z-10"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 rounded-full bg-primary/10 text-[11px] sm:text-[13px] font-black tracking-[0.4em] sm:tracking-[0.5em] text-primary uppercase border border-primary/20 shadow-2xl backdrop-blur-xl"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          Neural Architecture & Systems logic
        </motion.div>

        <div className="space-y-8 sm:space-y-14">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black leading-[1.1] tracking-tighter uppercase flex flex-col items-center"
          >
            <span className="block opacity-90">Computational</span>
            <span className="text-gradient shimmer-text block">Experience</span>
          </motion.h1>
          
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-4 sm:gap-6"
          >
            <div className="h-px w-10 sm:w-28 bg-primary/20" />
            <p className="text-[11px] sm:text-[14px] font-black text-muted-foreground uppercase tracking-[0.4em] sm:tracking-[0.6em] opacity-50">Architectural Node v2.1.0</p>
            <div className="h-px w-10 sm:w-28 bg-primary/20" />
          </motion.div>
        </div>

        <motion.p 
          variants={itemVariants}
          className="text-lg sm:text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium uppercase tracking-[0.1em] sm:tracking-[0.2em] px-2 opacity-80"
        >
          Architecting elite digital ecosystems with a focus on high-performance logic and structural integrity.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-8 sm:pt-12"
        >
          <Button 
            asChild
            size="lg" 
            className="w-full sm:w-auto h-16 sm:h-20 px-12 sm:px-16 rounded-full font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[11px] sm:text-[12px] group shadow-3xl hover:scale-105 transition-all bg-primary text-primary-foreground active:scale-95"
          >
            <a href="#portfolio">
              Project Archive
              <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-3 transition-transform" />
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto h-16 sm:h-20 px-12 sm:px-16 rounded-full font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[11px] sm:text-[12px] hover:scale-105 transition-all border-border/60 bg-background/50 backdrop-blur-md group active:scale-95"
          >
            <a href="#contact" className="flex items-center gap-4">
              <Terminal className="w-5 h-5 text-primary group-hover:animate-pulse" />
              Initialize Hire
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Hero Accent Visual */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-full max-w-7xl pointer-events-none"
      >
        <Layers className="w-full h-auto text-primary" />
      </motion.div>
    </section>
  );
}
