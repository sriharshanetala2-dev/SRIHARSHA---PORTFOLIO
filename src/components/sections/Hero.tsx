"use client";

import { motion } from "framer-motion";
import { ChevronDown, Code, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card text-[11px] font-black tracking-[0.4em] text-primary uppercase"
        >
          <Code className="w-4 h-4" />
          Full Stack Architecture & Systems
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.1] uppercase"
        >
          Architecting <br />
          <span className="text-gradient">Digital Integrity</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-muted-foreground font-medium uppercase tracking-[0.2em] opacity-80"
        >
          Building high-performance ecosystems where complex logic meets professional visual execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-12"
        >
          <a
            href="#portfolio"
            className="group flex items-center gap-4 px-10 py-5 rounded-full bg-primary text-primary-foreground font-black text-sm tracking-[0.2em] uppercase transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
          >
            Explore Systems
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}