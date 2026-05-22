"use client";

import { motion } from "framer-motion";
import { ChevronDown, Code, Zap, Cpu, ArrowRight } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[160px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[160px] -z-10" />
      <div className="absolute inset-0 neural-grid opacity-10 pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto text-center space-y-12 relative z-10"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-8 py-3 rounded-full glass-card text-[11px] font-black tracking-[0.5em] text-primary uppercase border-primary/20"
        >
          <Cpu className="w-4 h-4 animate-spin-slow" />
          Neural Systems & Architecture
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.05] uppercase"
        >
          ORCHESTRATING <br />
          <span className="text-gradient">SYSTEM LOGIC</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl mx-auto text-sm sm:text-lg md:text-xl text-muted-foreground font-medium uppercase tracking-[0.3em] opacity-80 leading-relaxed"
        >
          Architecting high-performance digital ecosystems where complex logic meets professional visual precision.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-16 pt-8"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#portfolio"
              className="group relative flex items-center gap-4 px-12 py-6 rounded-full bg-primary text-primary-foreground font-black text-[12px] tracking-[0.3em] uppercase transition-all hover:scale-105 hover:shadow-3xl hover:shadow-primary/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <span className="relative z-10">Explore Systems</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
            </a>
            
            <a
              href="#about"
              className="group flex items-center gap-4 px-12 py-6 rounded-full bg-secondary/50 text-foreground font-black text-[12px] tracking-[0.3em] uppercase border border-white/10 transition-all hover:bg-secondary hover:border-primary/50"
            >
              Core Protocol
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 opacity-30"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.5em]">Scroll to Access</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
