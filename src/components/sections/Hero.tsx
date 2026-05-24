'use client';

import { motion } from "framer-motion";
import { ArrowRight, Activity, Code2, Cpu, Zap, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const glares = Array.from({ length: 6 });

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 relative overflow-hidden bg-background">
      {/* Structural Background Layer */}
      <div className="absolute inset-0 neural-grid opacity-[0.05] pointer-events-none" />
      
      {/* Modern Optical Effects */}
      {glares.map((_, i) => (
        <div 
          key={i} 
          className="glare-streak" 
          style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${12 + Math.random() * 10}s`
          }} 
        />
      ))}

      <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center space-y-12 sm:space-y-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-label mx-auto"
        >
          <Activity className="w-3.5 h-3.5" />
          SYSTEM_ARCHITECT_v4.0 // LIVE_NODE
        </motion.div>

        <div className="space-y-6 sm:space-y-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[2.5rem] leading-[1.1] sm:text-6xl lg:text-8xl font-headline font-black tracking-tight uppercase"
          >
            Engineering <br className="hidden sm:block" />
            <span className="text-gradient">Intelligence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-bold uppercase tracking-normal opacity-90 px-4"
          >
            Architecting digital ecosystems where Full Stack integrity meets autonomous neural orchestration.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6"
        >
          <Button size="lg" className="w-full sm:w-auto rounded-xl h-14 sm:h-16 px-10 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/10 hover:scale-105 transition-all" asChild>
            <a href="#portfolio">
              System Registry <ArrowRight className="ml-3 w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-xl h-14 sm:h-16 px-10 text-[10px] font-black uppercase tracking-[0.2em] border-2 hover:bg-secondary/50 transition-all" asChild>
            <a href="#contact">Initiate Sync</a>
          </Button>
        </motion.div>

        {/* Technical Data Matrix */}
        <div className="pt-8 sm:pt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
          {[
            { label: "Architecture", value: "Neural", icon: Cpu },
            { label: "Integrity", value: "Verified", icon: Code2 },
            { label: "Subsystem", value: "Active", icon: Zap },
            { label: "Latency", value: "14ms", icon: Box }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + (i * 0.1) }}
              className="space-y-2 p-4 rounded-xl bg-secondary/20 border border-border/40 text-left hover:border-primary/40 transition-all group"
            >
              <stat.icon className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-0.5">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                <p className="text-[10px] font-black uppercase text-foreground font-mono">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}