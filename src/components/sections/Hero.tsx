'use client';

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Activity, Terminal, Code2, Cpu, Zap, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const glares = Array.from({ length: 6 });

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-24 px-6 relative overflow-hidden bg-background">
      {/* Structural Elements */}
      <div className="absolute inset-0 neural-grid opacity-[0.04] pointer-events-none" />
      
      {/* Animated Glares */}
      {glares.map((_, i) => (
        <div 
          key={i} 
          className="glare-streak" 
          style={{ 
            top: `${Math.random() * 100}%`, 
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${10 + Math.random() * 15}s`
          }} 
        />
      ))}

      <div className="absolute top-[10%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center space-y-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-label mx-auto"
        >
          <Activity className="w-3.5 h-3.5" />
          SYSTEM_ARCHITECT_v4.0 // LIVE_NODE
        </motion.div>

        <div className="space-y-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-7xl lg:text-[8.5rem] font-headline font-black tracking-tighter leading-[0.85] uppercase"
          >
            Engineering <br />
            <span className="text-gradient">Intelligence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-bold uppercase tracking-normal opacity-80 px-4"
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
          <Button size="lg" className="rounded-2xl h-16 sm:h-20 px-10 sm:px-14 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] shadow-2xl shadow-primary/20 hover:scale-105 transition-all" asChild>
            <a href="#portfolio">
              System Registry <ArrowRight className="ml-4 w-5 h-5" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="rounded-2xl h-16 sm:h-20 px-10 sm:px-14 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] border-2 hover:bg-secondary/50 transition-all" asChild>
            <a href="#contact">Initiate Sync</a>
          </Button>
        </motion.div>

        <div className="pt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto opacity-70">
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
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="space-y-3 p-6 rounded-2xl bg-secondary/10 border border-border/50 text-left hover:border-primary/30 transition-all group"
            >
              <stat.icon className="w-5 h-5 text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">{stat.label}</p>
                <p className="text-sm font-black uppercase text-foreground font-mono">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 animate-bounce opacity-20 hidden sm:block"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </div>
    </section>
  );
}