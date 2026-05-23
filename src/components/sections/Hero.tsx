"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Zap, ShieldCheck } from "lucide-react";

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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 25 } }
  };

  const headlineVariants = {
    hidden: { opacity: 0, x: -15 },
    show: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-12 sm:space-y-16 relative z-10">
        {/* Professional Node Identity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full border-2 border-primary/20 bg-primary/5 text-[10px] sm:text-[11px] font-black tracking-[0.5em] text-primary uppercase shadow-2xl backdrop-blur-xl mx-auto"
        >
          <ShieldCheck className="w-4 h-4 text-primary animate-pulse" />
          FULL STACK AI ARCHITECT // SYSTEM_CORE_v3.0
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-10 sm:space-y-14">
          <div className="overflow-hidden space-y-2">
            <motion.h1
              custom={0}
              variants={headlineVariants}
              className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter leading-none uppercase shimmer-text"
            >
              FULL STACK
            </motion.h1>
            <motion.h1
              custom={1}
              variants={headlineVariants}
              className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter leading-none uppercase text-gradient"
            >
              AI ENGINEER
            </motion.h1>
          </div>

          <motion.div
            variants={item}
            className="max-w-4xl mx-auto space-y-10 px-4"
          >
            <p className="text-lg sm:text-2xl lg:text-3xl text-foreground font-black uppercase tracking-tight leading-snug">
              Engineering high-performance digital systems through robust <span className="text-primary underline underline-offset-[8px] decoration-2">Full Stack Integrity</span> and autonomous <span className="text-primary underline underline-offset-[8px] decoration-2">AI Orchestration</span>.
            </p>
            <div className="space-y-8">
              <p className="text-xs sm:text-base lg:text-lg text-muted-foreground font-bold uppercase tracking-[0.25em] opacity-80 leading-relaxed max-w-3xl mx-auto">
                Specializing in scalable software kernels using <span className="text-foreground">Next.js, Spring Boot, and Flutter</span>, synchronized with neural agents across 
                <span className="text-primary"> Claude 3.5, Gemini 2.0, and n8n</span>.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                {["JAVA", "PYTHON", "SQL", "B.SC COMPUTER SCIENCE"].map((tech) => (
                  <span key={tech} className="text-[9px] sm:text-[10px] text-primary font-black uppercase tracking-[0.4em] px-5 py-2.5 bg-primary/5 border border-primary/15 rounded-lg shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-12 sm:gap-20 pt-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-6 sm:px-0">
            <a
              href="#portfolio"
              className="flex items-center justify-center gap-5 px-12 py-7 rounded-2xl bg-primary text-primary-foreground font-black text-[11px] tracking-[0.4em] uppercase transition-all hover:scale-[1.03] active:scale-95 shadow-4xl shadow-primary/30 group cursor-pointer"
            >
              TECHNICAL RECORDS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-5 px-12 py-7 rounded-2xl bg-secondary/40 text-foreground font-black text-[11px] tracking-[0.4em] uppercase border-2 border-border hover:border-primary/40 transition-all shadow-2xl backdrop-blur-xl cursor-pointer"
            >
              SYSTEM SYNC
              <Zap className="w-5 h-5 text-primary" />
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4 opacity-30 pt-8"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.8em]">SCROLL_TO_INITIALIZE</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
