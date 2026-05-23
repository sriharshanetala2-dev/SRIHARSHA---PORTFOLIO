"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Zap, BrainCircuit, Cpu, ShieldCheck } from "lucide-react";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 25 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-12 sm:space-y-20 relative z-10">
        {/* Elite Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="inline-flex items-center gap-4 px-8 py-3 rounded-full border-2 border-primary/30 bg-primary/10 text-[10px] sm:text-xs font-black tracking-[0.6em] text-primary uppercase shadow-3xl backdrop-blur-xl"
        >
          <ShieldCheck className="w-5 h-5 text-primary animate-pulse" />
          FULL STACK AI ARCHITECT v3.0 // INITIALIZED
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-10 sm:space-y-14">
          <motion.h1
            variants={item}
            className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter leading-[0.9] uppercase shimmer-text"
          >
            ENGINEERING <br className="hidden sm:block" />
            <span className="text-gradient">NEURAL</span> ECOSYSTEMS
          </motion.h1>

          <motion.div
            variants={item}
            className="max-w-5xl mx-auto space-y-12 px-4"
          >
            <p className="text-base sm:text-2xl lg:text-3xl text-foreground font-black uppercase tracking-tight leading-relaxed opacity-100">
              Designing high-performance digital environments by merging <span className="text-primary underline underline-offset-8">Full Stack Integrity</span> with autonomous <span className="text-primary underline underline-offset-8">Neural Orchestration</span>.
            </p>
            <div className="space-y-8">
              <p className="text-xs sm:text-base lg:text-lg text-muted-foreground font-bold uppercase tracking-[0.25em] opacity-80 leading-relaxed max-w-4xl mx-auto">
                Mastery in assembling enterprise-grade digital kernels using <span className="text-foreground">Next.js, Spring Boot, and Flutter</span>, synchronized with AI agents across 
                <span className="text-primary"> Claude 3.5, Gemini 2.0, GPT-4o, and n8n</span>.
              </p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-primary/80 font-black uppercase tracking-[0.8em] animate-pulse">
                FOUNDATION: JAVA // PYTHON // SQL // B.SC COMPUTER SCIENCE
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-16 sm:gap-28 pt-10"
        >
          <div className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto px-6 sm:px-0">
            <a
              href="#portfolio"
              className="flex items-center justify-center gap-6 px-12 py-7 rounded-2xl bg-primary text-primary-foreground font-black text-xs tracking-[0.5em] uppercase transition-all hover:scale-105 active:scale-95 shadow-4xl shadow-primary/50 group"
            >
              ACCESS REGISTRY
              <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-6 px-12 py-7 rounded-2xl bg-secondary text-foreground font-black text-xs tracking-[0.5em] uppercase border-2 border-border hover:border-primary/50 transition-all shadow-3xl backdrop-blur-xl"
            >
              SYSTEM SYNC
              <Zap className="w-5 h-5 text-primary" />
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-6 opacity-40 pt-16"
          >
            <span className="text-[11px] font-black uppercase tracking-[1em]">INITIALIZE SCROLL</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}