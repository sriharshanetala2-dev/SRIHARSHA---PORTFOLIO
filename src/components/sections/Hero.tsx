"use client";

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Code2 } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded border border-primary/20 bg-primary/5 text-[10px] font-black tracking-[0.4em] text-primary uppercase"
        >
          <Code2 className="w-4 h-4" />
          Full Stack Developer Registry
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl sm:text-8xl md:text-9xl font-headline font-black tracking-tighter leading-[0.9] uppercase"
        >
          BUILDING <br />
          <span className="text-gradient">SYSTEMS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground font-medium uppercase tracking-[0.15em] opacity-80 leading-relaxed"
        >
          High-performance Full Stack solutions where enterprise logic meets professional engineering. Building zero-lag infrastructure and stable software ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-12 pt-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#portfolio"
              className="flex items-center justify-center gap-4 px-10 py-5 rounded bg-primary text-primary-foreground font-black text-[11px] tracking-[0.3em] uppercase transition-all hover:brightness-110"
            >
              Access Portfolio
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="flex items-center justify-center gap-4 px-10 py-5 rounded bg-secondary text-foreground font-black text-[11px] tracking-[0.3em] uppercase border border-border hover:bg-secondary/80 transition-all"
            >
              Developer Profile
            </a>
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 opacity-30"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.5em]">Scroll to Initialize</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}