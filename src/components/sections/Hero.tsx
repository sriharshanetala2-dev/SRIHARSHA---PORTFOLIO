"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Zap, BrainCircuit, Cpu, ShieldCheck } from "lucide-react";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-12 sm:space-y-20 relative z-10">
        {/* Elite Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full border-2 border-primary/20 bg-primary/5 text-[10px] sm:text-xs font-black tracking-[0.5em] text-primary uppercase shadow-2xl backdrop-blur-md"
        >
          <ShieldCheck className="w-5 h-5 text-primary animate-pulse" />
          FULL STACK AI ARCHITECT v3.0 // INITIALIZED
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 sm:space-y-12">
          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-headline font-black tracking-tighter leading-[0.95] uppercase shimmer-text"
          >
            ENGINEERING <br className="hidden sm:block" />
            <span className="text-gradient">NEURAL</span> ECOSYSTEMS
          </motion.h1>

          <motion.div
            variants={item}
            className="max-w-5xl mx-auto space-y-10 px-4"
          >
            <p className="text-sm sm:text-lg lg:text-2xl text-foreground font-black uppercase tracking-tight leading-relaxed opacity-95">
              Developing high-performance digital architectures by merging <span className="text-primary">Full Stack Integrity</span> with advanced <span className="text-primary">Neural Orchestration</span>.
            </p>
            <div className="space-y-6">
              <p className="text-xs sm:text-base lg:text-lg text-muted-foreground font-bold uppercase tracking-[0.2em] opacity-70 leading-relaxed max-w-4xl mx-auto">
                Mastery in assembling enterprise-grade ecosystems using <span className="text-foreground">Next.js, Spring Boot, and Flutter</span>, integrated with autonomous AI agents across 
                <span className="text-primary"> Claude 3.5, Gemini 2.0, GPT-4o, and n8n</span>.
              </p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-primary/60 font-black uppercase tracking-[0.6em] animate-pulse">
                FOUNDATION: JAVA // PYTHON // SQL // B.SC COMPUTER SCIENCE
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-16 sm:gap-24 pt-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-6 sm:px-0">
            <a
              href="#portfolio"
              className="flex items-center justify-center gap-5 px-10 py-6 rounded-2xl bg-primary text-primary-foreground font-black text-xs tracking-[0.4em] uppercase transition-all hover:scale-105 active:scale-95 shadow-3xl shadow-primary/40 group"
            >
              ACCESS REGISTRY
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-5 px-10 py-6 rounded-2xl bg-secondary text-foreground font-black text-xs tracking-[0.4em] uppercase border-2 border-border hover:border-primary/40 transition-all shadow-2xl backdrop-blur-sm"
            >
              SYSTEM SYNC
              <Zap className="w-5 h-5 text-primary" />
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4 opacity-30 pt-12"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.8em]">INITIALIZE SCROLL</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
