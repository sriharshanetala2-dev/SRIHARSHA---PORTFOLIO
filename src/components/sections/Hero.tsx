"use client";

import { motion } from "framer-motion";
import { ChevronDown, Cpu, ArrowRight, Activity, Zap } from "lucide-react";

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
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 25 }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-background">
      {/* Quantum Background Components */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 neural-grid opacity-10 pointer-events-none" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto text-center space-y-12 relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card text-[10px] font-black tracking-[0.4em] text-primary uppercase border-primary/20 backdrop-blur-xl"
        >
          <Activity className="w-3.5 h-3.5" />
          Neural Core v4.0 Active
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter leading-[1.05] uppercase italic"
        >
          QUANTUM <br />
          <span className="text-gradient">SYSTEMS</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl mx-auto text-xs sm:text-base md:text-lg text-muted-foreground font-medium uppercase tracking-[0.2em] opacity-70 leading-relaxed"
        >
          Architecting elite digital ecosystems where neural logic meets professional visual precision. 
          Performance optimized. Zero-lag infrastructure.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-16 pt-8"
        >
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#portfolio"
              className="group relative flex items-center justify-center gap-4 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-black text-[11px] tracking-[0.3em] uppercase transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] overflow-hidden"
            >
              <span className="relative z-10">Access Registry</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#about"
              className="group flex items-center justify-center gap-4 px-10 py-5 rounded-xl bg-secondary/80 text-foreground font-black text-[11px] tracking-[0.3em] uppercase border border-white/10 transition-all hover:bg-secondary hover:border-primary/50 backdrop-blur-md"
            >
              <Zap className="w-4 h-4 text-primary" />
              Core Logic
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 opacity-30"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.6em]">Initialize Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}