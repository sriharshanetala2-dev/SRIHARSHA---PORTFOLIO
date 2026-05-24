'use client';

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Activity, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden bg-background">
      {/* Structural Elements */}
      <div className="absolute inset-0 neural-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto text-center space-y-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-label mx-auto"
        >
          <Activity className="w-3.5 h-3.5" />
          SYSTEM_ARCHITECT_v4.0 // LIVE_NODE
        </motion.div>

        <div className="space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-8xl lg:text-[9rem] font-headline font-black tracking-tight leading-[0.85] uppercase"
          >
            Engineering <br />
            <span className="text-gradient">Intelligence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-bold uppercase tracking-tight opacity-80"
          >
            Architecting digital ecosystems where Full Stack integrity meets autonomous neural orchestration.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <Button size="lg" className="rounded-2xl h-20 px-12 text-xs font-black uppercase tracking-widest shadow-2xl shadow-primary/20 hover:scale-105 transition-all" asChild>
            <a href="#portfolio">
              View Projects <ArrowRight className="ml-3 w-5 h-5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-2xl h-20 px-12 text-xs font-black uppercase tracking-widest border-2 hover:bg-secondary/50 transition-all" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>

        <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto opacity-50">
          {[
            { label: "Architecture", value: "Neural" },
            { label: "Integrity", value: "Verified" },
            { label: "Subsystem", value: "Active" },
            { label: "Latency", value: "14ms" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="space-y-2 border-l border-border pl-6 text-left"
            >
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              <p className="text-sm font-black uppercase text-primary font-mono">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 animate-bounce opacity-20"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
}