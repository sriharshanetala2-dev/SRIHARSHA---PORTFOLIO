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
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-[11px] font-black tracking-[0.6em] text-primary uppercase shadow-xl backdrop-blur-md mx-auto"
        >
          <ShieldCheck className="w-4 h-4 text-primary animate-pulse" />
          FULL STACK & AI ENGINEER // v3.0
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-4">
          <motion.h1 className="text-4xl sm:text-7xl lg:text-9xl font-headline font-black tracking-tighter uppercase shimmer-text leading-[0.9]">
            CLEAN CODE
          </motion.h1>
          <motion.h1 className="text-4xl sm:text-7xl lg:text-9xl font-headline font-black tracking-tighter uppercase text-gradient leading-[0.9]">
            NEURAL LOGIC
          </motion.h1>
        </motion.div>

        <motion.div variants={item} initial="hidden" animate="show" className="max-w-3xl mx-auto space-y-10">
          <p className="text-base sm:text-2xl lg:text-3xl text-foreground font-black uppercase tracking-tight leading-snug">
            Designing high-performance systems where <span className="text-primary">Full Stack Integrity</span> meets autonomous <span className="text-primary">Neural Orchestration</span>.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["JAVA", "PYTHON", "SQL", "B.SC COMPUTER SCIENCE"].map((tech) => (
              <span key={tech} className="text-[11px] text-primary font-black uppercase tracking-[0.6em] px-5 py-2.5 bg-primary/5 border border-primary/10 rounded-lg">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={item} initial="hidden" animate="show" className="flex flex-col items-center gap-10 pt-10">
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6">
            <a href="#portfolio" className="flex items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-black text-[11px] tracking-[0.4em] uppercase transition-all hover:scale-[1.02] shadow-xl group">
              TECHNICAL RECORDS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
            <a href="#contact" className="flex items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-secondary/30 text-foreground font-black text-[11px] tracking-[0.4em] uppercase border border-border hover:border-primary/30 transition-all shadow-lg backdrop-blur-md">
              SYSTEM SYNC
              <Zap className="w-5 h-5 text-primary" />
            </a>
          </div>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity }} className="opacity-20 flex flex-col items-center gap-2">
            <span className="text-[11px] font-black uppercase tracking-[0.6em]">SCROLL_TO_LOAD</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
