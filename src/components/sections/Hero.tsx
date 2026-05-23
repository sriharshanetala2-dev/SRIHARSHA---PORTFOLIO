
"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Zap, Activity, Cpu } from "lucide-react";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-12 sm:space-y-16 relative z-10">
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-[11px] font-black tracking-[0.5em] text-primary uppercase shadow-lg"
        >
          <Cpu className="w-4 h-4 text-primary animate-pulse" />
          SYSTEMS ENGINEERING KERNEL v2.0
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 sm:space-y-12">
          <motion.h1
            variants={item}
            className="text-4xl sm:text-6xl md:text-8xl font-headline font-black tracking-tighter leading-[0.95] uppercase shimmer-text"
          >
            ENGINEERING <br className="hidden sm:block" />
            <span className="text-gradient">HYPER-SCALE</span> LOGIC
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-4xl mx-auto text-sm sm:text-xl text-muted-foreground font-bold uppercase tracking-[0.2em] opacity-70 leading-relaxed px-4"
          >
            Architecting robust digital ecosystems with Next.js, Spring Boot, and Flutter. Industrial-grade stability for complex enterprise systems.
          </motion.p>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-16 pt-12"
        >
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-6 sm:px-0">
            <a
              href="#portfolio"
              className="flex items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-black text-[11px] tracking-[0.4em] uppercase transition-all hover:scale-105 active:scale-95 shadow-3xl shadow-primary/30"
            >
              ACCESS ARCHIVE
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#architectural-toolkit"
              className="flex items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-secondary text-foreground font-black text-[11px] tracking-[0.4em] uppercase border border-border hover:bg-secondary/80 transition-all shadow-xl"
            >
              SYSTEM SPECS
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4 opacity-20 pt-12"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.8em]">INITIALIZE SCROLL</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
