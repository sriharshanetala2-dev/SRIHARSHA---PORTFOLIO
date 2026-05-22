"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Activity, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-black tracking-[0.4em] text-primary uppercase"
        >
          <Activity className="w-4 h-4" />
          Full Stack Developer Subsystem
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter leading-none uppercase"
        >
          DEVELOPING <br />
          <span className="text-gradient">SYSTEMS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-sm sm:text-lg text-muted-foreground font-medium uppercase tracking-[0.2em] opacity-70 leading-relaxed"
        >
          Building high-performance Full Stack solutions where enterprise logic meets professional engineering. Optimized infrastructure. Zero-lag performance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-12 pt-8"
        >
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#portfolio"
              className="flex items-center justify-center gap-4 px-10 py-5 rounded-lg bg-primary text-primary-foreground font-black text-[11px] tracking-[0.3em] uppercase transition-all hover:scale-105 shadow-xl"
            >
              Access Projects
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="flex items-center justify-center gap-4 px-10 py-5 rounded-lg bg-secondary text-foreground font-black text-[11px] tracking-[0.3em] uppercase border border-border hover:bg-secondary/80 transition-all"
            >
              <Code2 className="w-4 h-4 text-primary" />
              Developer Profile
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 opacity-30"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.6em]">Scroll to Initialize</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
