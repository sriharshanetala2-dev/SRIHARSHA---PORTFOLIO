'use client';

import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Zap, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const glares = Array.from({ length: 4 });

  return (
    <section className="min-h-screen flex items-center justify-center pt-40 pb-20 px-6 relative overflow-hidden bg-background">
      {/* Structural Background Layer */}
      <div className="absolute inset-0 neural-grid opacity-[0.03] pointer-events-none" />
      
      {/* Modern Optical Effects */}
      {glares.map((_, i) => (
        <div 
          key={i} 
          className="glare-streak" 
          style={{ 
            top: `${20 + Math.random() * 60}%`, 
            left: `${10 + Math.random() * 80}%`,
            animationDelay: `${i * 2}s`,
            animationDuration: `${15 + i * 5}s`
          }} 
        />
      ))}

      <div className="absolute top-[5%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center space-y-12 sm:space-y-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-label mx-auto text-[8px] sm:text-[10px] mt-2"
        >
          <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          FULL_STACK_DEVELOPER_v4.0 // LIVE_NODE
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[2.5rem] leading-[1.1] sm:text-7xl lg:text-8xl font-headline font-black tracking-tight uppercase"
          >
            Engineering <br className="hidden sm:block" />
            <span className="text-gradient">Intelligence</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-bold uppercase tracking-normal opacity-90 px-4"
          >
            Building digital ecosystems where Full Stack integrity meets autonomous neural orchestration.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 px-6"
        >
          <Button size="lg" className="w-full sm:w-auto rounded-2xl h-14 sm:h-16 px-12 text-[10px] font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 hover:scale-105 transition-all group" asChild>
            <a href="#portfolio">
              System Registry <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-2xl h-14 sm:h-16 px-12 text-[10px] font-black uppercase tracking-[0.2em] border-2 border-border hover:bg-secondary/40 transition-all" asChild>
            <a href="#contact">Initiate Sync</a>
          </Button>
        </motion.div>

        {/* Technical Data Matrix */}
        <div className="pt-12 sm:pt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 max-w-5xl mx-auto px-4">
          {[
            { label: "Core Logic", value: "Neural", icon: Cpu },
            { label: "Integrity", value: "Verified", icon: Code2 },
            { label: "Subsystem", value: "Active", icon: Zap },
            { label: "Latency", value: "14ms", icon: Box }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="space-y-4 p-4 sm:p-6 rounded-2xl bg-secondary/10 border border-border/50 text-left hover:border-primary/40 transition-all group backdrop-blur-md"
            >
              <stat.icon className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                <p className="text-xs font-black uppercase text-foreground font-mono">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}