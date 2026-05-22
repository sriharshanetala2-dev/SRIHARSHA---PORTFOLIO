"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Code2 } from "lucide-react";

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0 neural-grid opacity-[0.03] pointer-events-none" />
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto text-center space-y-8 relative z-10"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-black tracking-widest text-primary uppercase"
        >
          <Code2 className="w-4 h-4" />
          Full Stack Developer // Certified
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl lg:text-7xl font-headline font-black tracking-tighter leading-[1.1] uppercase"
        >
          ENGINEERING <br />
          <span className="text-primary">SYSTEMS</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-2xl mx-auto text-sm sm:text-base text-muted-foreground font-bold uppercase tracking-widest opacity-80 leading-relaxed"
        >
          High-performance Full Stack solutions where technical logic meets professional engineering. Building stable software ecosystems and zero-lag infrastructure.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col items-center gap-12 pt-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-black text-[11px] tracking-widest uppercase transition-all hover:scale-105 shadow-lg"
            >
              Access Portfolio
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-lg bg-secondary text-foreground font-black text-[11px] tracking-widest uppercase border border-border hover:bg-secondary/80 transition-all"
            >
              Developer Profile
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 opacity-40"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">Initialize Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
