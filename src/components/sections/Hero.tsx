"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Cpu, Zap, Activity, BrainCircuit } from "lucide-react";

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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 15 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-12 sm:space-y-20 relative z-10">
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-[10px] sm:text-xs font-black tracking-[0.5em] text-primary uppercase shadow-2xl backdrop-blur-sm"
        >
          <BrainCircuit className="w-5 h-5 text-primary animate-pulse" />
          FULL STACK AI ARCHITECT v3.0 // INITIALIZED
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 sm:space-y-12">
          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-black tracking-tighter leading-[0.9] uppercase shimmer-text"
          >
            ENGINEERING <br className="hidden sm:block" />
            <span className="text-gradient">INTELLIGENT</span> SYSTEMS
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-4xl mx-auto text-xs sm:text-lg lg:text-xl text-muted-foreground font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] opacity-80 leading-relaxed px-4"
          >
            Specializing in high-performance Full Stack Ecosystems and Neural Orchestration. 
            Mastery in <span className="text-primary">Next.js, Spring Boot, Flutter</span>, and AI agents using 
            <span className="text-primary"> Claude 3.5, Gemini 2.0, GPT-4o, and n8n</span>.
          </motion.p>
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
              ACCESS ARCHIVE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-5 px-10 py-6 rounded-2xl bg-secondary text-foreground font-black text-xs tracking-[0.4em] uppercase border border-border hover:bg-secondary/80 transition-all shadow-2xl backdrop-blur-sm"
            >
              SYSTEM SYNC
              <Zap className="w-5 h-5 text-primary" />
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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