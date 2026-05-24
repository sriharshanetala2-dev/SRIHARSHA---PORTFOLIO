'use client';

import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Zap, Terminal, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-48 pb-24 px-8 relative overflow-hidden bg-background">
      <div className="absolute inset-0 neural-grid opacity-[0.06] pointer-events-none" />
      
      <div className="absolute top-[10%] left-[-15%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-15%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center space-y-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="section-label mx-auto"
        >
          <Activity className="w-5 h-5" />
          SYSTEM_ARCHITECT_v5.0 // CORE_ONLINE
        </motion.div>

        <div className="space-y-12">
          <motion.h1
            className="text-5xl leading-[1.1] sm:text-7xl lg:text-9xl font-headline font-black tracking-tight uppercase flex flex-col items-center select-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-6 lg:mb-10 text-foreground">
              Engineering
            </span>
            <span className="shimmer-text py-4 px-6">
              Intelligence
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-bold uppercase tracking-tight opacity-90 px-6"
          >
            Architecting high-performance digital ecosystems where technical integrity meets autonomous orchestration.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 px-8"
        >
          <Button size="lg" className="w-full sm:w-auto rounded-full h-16 sm:h-20 px-10 sm:px-14 text-sm sm:text-lg font-black uppercase tracking-[0.4em] shadow-2xl shadow-primary/30 hover:scale-105 transition-all group" asChild>
            <a href="#portfolio">
              Archive <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-3 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full h-16 sm:h-20 px-10 sm:px-14 text-sm sm:text-lg font-black uppercase tracking-[0.4em] border-2 border-border hover:bg-secondary/60 transition-all shadow-xl" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </motion.div>

        <div className="pt-24 sm:pt-32 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto px-8">
          {[
            { label: "Core Kernel", value: "Neural_v5", icon: Cpu },
            { label: "Integrity", value: "Hardened", icon: Code2 },
            { label: "Subsystem", value: "Verified", icon: Zap },
            { label: "Latency", value: "0.4ms", icon: Terminal }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + (i * 0.1), duration: 0.8 }}
              className="space-y-4 p-8 sm:p-10 rounded-[3rem] bg-secondary/30 border border-border/80 text-left hover:border-primary/60 transition-all group backdrop-blur-3xl shadow-xl hover:-translate-y-2"
            >
              <stat.icon className="w-8 h-8 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-2">
                <p className="text-[12px] font-mono font-black uppercase tracking-[0.4em] text-muted-foreground/60">{stat.label}</p>
                <p className="text-lg sm:text-xl font-black uppercase text-foreground font-mono leading-none">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
