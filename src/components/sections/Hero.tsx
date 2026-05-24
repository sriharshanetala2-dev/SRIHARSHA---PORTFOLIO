'use client';

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Zap, ShieldCheck } from "lucide-react";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 25 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Optical Depth Glare */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="lens-flare top-[-25%] left-[-20%] scale-150" />
      </div>

      <div className="max-w-7xl mx-auto text-center space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/25 bg-primary/10 text-[10px] sm:text-[11px] font-black tracking-[0.5em] text-primary uppercase shadow-2xl backdrop-blur-xl mx-auto"
        >
          <ShieldCheck className="w-4 h-4 text-primary" />
          INDUSTRIAL SYSTEMS ENGINEER // v3.0
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
          <motion.h1 variants={item} className="text-4xl sm:text-6xl lg:text-7xl font-headline font-black tracking-tighter uppercase shimmer-text leading-[0.85]">
            CLEAN ARCHITECTURE
          </motion.h1>
          <motion.h1 variants={item} className="text-4xl sm:text-6xl lg:text-7xl font-headline font-black tracking-tighter uppercase text-gradient leading-[0.85]">
            NEURAL LOGIC
          </motion.h1>
        </motion.div>

        <motion.div variants={item} initial="hidden" animate="show" className="max-w-3xl mx-auto space-y-10">
          <p className="text-sm sm:text-lg lg:text-xl text-foreground font-bold uppercase tracking-tight leading-snug opacity-80 max-w-2xl mx-auto">
            Engineering high-performance systems where <span className="text-primary font-black">Full Stack Integrity</span> meets autonomous <span className="text-primary font-black">Neural Orchestration</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["JAVA", "PYTHON", "SQL", "SYSTEMS DESIGN"].map((tech, i) => (
              <motion.span 
                key={tech} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + (i * 0.1) }}
                className="text-[10px] text-primary/80 font-black uppercase tracking-[0.3em] px-4 py-2 bg-primary/5 border border-primary/10 rounded-lg hover:bg-primary/15 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} initial="hidden" animate="show" className="flex flex-col items-center gap-10 pt-6">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6">
            <a href="#portfolio" className="flex items-center justify-center gap-4 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-black text-[11px] tracking-[0.2em] uppercase transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(var(--primary),0.25)] shadow-xl group">
              SYSTEM REGISTRY
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </a>
            <a href="#contact" className="flex items-center justify-center gap-4 px-10 py-5 rounded-xl bg-secondary/40 text-foreground font-black text-[11px] tracking-[0.2em] uppercase border border-border hover:border-primary/40 transition-all shadow-lg backdrop-blur-xl group">
              INITIATE SYNC
              <Zap className="w-4 h-4 text-primary group-hover:rotate-12 transition-transform" />
            </a>
          </div>
          
          <motion.div 
            animate={{ y: [0, 6, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
            className="opacity-20 flex flex-col items-center gap-2"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">INIT_OS_LOAD</span>
            <ChevronDown className="w-3 h-3" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}