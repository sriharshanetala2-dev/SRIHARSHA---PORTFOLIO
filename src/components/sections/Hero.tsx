'use client';

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Zap, ShieldCheck, Sparkles } from "lucide-react";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      {/* Professional Lens Optic Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="lens-flare top-[-20%] left-[-20%]" />
        <div className="lens-flare bottom-[-20%] right-[-20%] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-[11px] font-black tracking-[0.5em] text-primary uppercase shadow-2xl backdrop-blur-xl mx-auto"
        >
          <ShieldCheck className="w-4 h-4 text-primary animate-pulse" />
          FULL STACK & AI ENGINEER // v3.0
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          <motion.h1 variants={item} className="text-4xl sm:text-6xl lg:text-7xl font-headline font-black tracking-tighter uppercase shimmer-text leading-[0.9]">
            CLEAN CODE
          </motion.h1>
          <motion.h1 variants={item} className="text-4xl sm:text-6xl lg:text-7xl font-headline font-black tracking-tighter uppercase text-gradient leading-[0.9]">
            NEURAL LOGIC
          </motion.h1>
        </motion.div>

        <motion.div variants={item} initial="hidden" animate="show" className="max-w-3xl mx-auto space-y-10">
          <p className="text-sm sm:text-lg lg:text-xl text-foreground font-black uppercase tracking-tight leading-snug opacity-90">
            Designing high-performance systems where <span className="text-primary">Full Stack Integrity</span> meets autonomous <span className="text-primary">Neural Orchestration</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["JAVA", "PYTHON", "SQL", "B.SC COMPUTER SCIENCE"].map((tech, i) => (
              <motion.span 
                key={tech} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + (i * 0.1) }}
                className="text-[11px] text-primary font-black uppercase tracking-[0.4em] px-4 py-2 bg-primary/5 border border-primary/10 rounded-lg hover:bg-primary/10 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} initial="hidden" animate="show" className="flex flex-col items-center gap-12 pt-10">
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-6">
            <a href="#portfolio" className="flex items-center justify-center gap-4 px-12 py-5 rounded-2xl bg-primary text-primary-foreground font-black text-[11px] tracking-[0.3em] uppercase transition-all hover:scale-[1.05] hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] shadow-xl group">
              TECHNICAL RECORDS
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#contact" className="flex items-center justify-center gap-4 px-12 py-5 rounded-2xl bg-secondary/30 text-foreground font-black text-[11px] tracking-[0.3em] uppercase border border-border hover:border-primary/30 transition-all shadow-lg backdrop-blur-xl group">
              SYSTEM SYNC
              <Zap className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
            </a>
          </div>
          
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
            className="opacity-30 flex flex-col items-center gap-3"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em]">SCROLL_TO_LOAD</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}