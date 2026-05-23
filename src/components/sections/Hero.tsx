"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Code2, Zap } from "lucide-react";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-10 sm:space-y-14 relative z-10">
        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border-2 border-primary/20 bg-primary/5 text-[11px] sm:text-[12px] font-black tracking-[0.4em] text-primary uppercase shadow-[0_0_30px_rgba(var(--primary),0.1)]"
        >
          <Zap className="w-4 h-4 animate-pulse" />
          Industrial Systems Architect
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 sm:space-y-8">
          <motion.h1
            variants={item}
            className="text-4xl sm:text-7xl md:text-8xl font-headline font-black tracking-tighter leading-[1.05] uppercase shimmer-text"
          >
            ENGINEERING <br className="hidden sm:block" />
            HYPER-SCALE LOGIC
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-3xl mx-auto text-sm sm:text-xl text-muted-foreground font-bold uppercase tracking-widest opacity-80 leading-relaxed px-4"
          >
            Architecting high-performance digital ecosystems with Next.js, Spring Boot, and Flutter. Verified industrial stability for enterprise applications.
          </motion.p>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-12 pt-10"
        >
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-6 sm:px-0">
            <a
              href="#portfolio"
              className="flex items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-black text-[12px] tracking-[0.3em] uppercase transition-all hover:scale-105 active:scale-95 shadow-3xl shadow-primary/30"
            >
              Access Archive
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#about"
              className="flex items-center justify-center gap-4 px-10 py-5 rounded-2xl bg-secondary text-foreground font-black text-[12px] tracking-[0.3em] uppercase border-2 border-border hover:bg-secondary/80 transition-all shadow-xl"
            >
              System Specs
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4 opacity-30 pt-16"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.8em]">Initialize Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}