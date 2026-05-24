'use client';

import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Zap, Terminal, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const title = "Engineering";
  const subtitle = "Intelligence";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.8,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
  };

  const neuralPulse = (index: number) => ({
    color: ["hsl(var(--foreground))", "hsl(var(--primary))", "hsl(var(--foreground))"],
    scale: [1, 1.15, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      delay: index * 0.1,
      ease: "easeInOut",
    }
  });

  const activeWave = (index: number) => ({
    y: [0, -25, 0],
    scale: [1, 1.25, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      delay: (index + title.length) * 0.15,
      ease: "easeInOut"
    }
  });

  return (
    <section className="min-h-screen flex items-center justify-center pt-56 pb-32 px-8 relative overflow-hidden bg-background">
      <div className="absolute inset-0 neural-grid opacity-[0.06] pointer-events-none" />
      
      <div className="absolute top-[10%] left-[-15%] w-[70%] h-[70%] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-15%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[180px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center space-y-20 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="section-label mx-auto"
        >
          <Activity className="w-6 h-6" />
          SYSTEM_ARCHITECT_v5.0 // CORE_ONLINE
        </motion.div>

        <div className="space-y-16 lg:space-y-24">
          <motion.h1
            className="text-[4rem] leading-[1] sm:text-8xl lg:text-[11rem] font-headline font-black tracking-tight uppercase flex flex-col items-center select-none"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <span className="flex flex-wrap justify-center mb-10 lg:mb-16">
              {title.split("").map((letter, index) => (
                <motion.span 
                  key={index} 
                  variants={child} 
                  className="inline-block hover:text-primary transition-all cursor-default drop-shadow-2xl"
                  whileHover={{ y: -30, scale: 1.4, rotate: 8 }}
                  animate={neuralPulse(index)}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="flex flex-wrap justify-center shimmer-text py-10 px-6">
              {subtitle.split("").map((letter, index) => (
                <motion.span 
                  key={index} 
                  variants={child} 
                  className="inline-block cursor-default drop-shadow-4xl"
                  whileHover={{ scale: 1.4, rotate: -8 }}
                  animate={activeWave(index)}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-2xl sm:text-3xl lg:text-5xl text-muted-foreground max-w-6xl mx-auto leading-relaxed font-bold uppercase tracking-tight opacity-90 px-6"
          >
            Architecting high-performance digital ecosystems where technical integrity meets autonomous orchestration.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-16 px-8"
        >
          <Button size="lg" className="w-full sm:w-auto rounded-full h-24 sm:h-32 px-16 sm:px-24 text-[24px] sm:text-[32px] font-black uppercase tracking-[0.5em] shadow-4xl shadow-primary/40 hover:scale-105 transition-all group" asChild>
            <a href="#portfolio">
              Archive <ArrowRight className="ml-8 w-10 h-10 group-hover:translate-x-6 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full h-24 sm:h-32 px-16 sm:px-24 text-[24px] sm:text-[32px] font-black uppercase tracking-[0.5em] border-4 border-border hover:bg-secondary/60 transition-all shadow-2xl" asChild>
            <a href="#contact">Contact</a>
          </Button>
        </motion.div>

        <div className="pt-32 sm:pt-48 grid grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 max-w-7xl mx-auto px-8">
          {[
            { label: "Core Kernel", value: "Neural_v5", icon: Cpu },
            { label: "Integrity", value: "Hardened", icon: Code2 },
            { label: "Subsystem", value: "Verified", icon: Zap },
            { label: "Latency", value: "0.4ms", icon: Terminal }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.8 + (i * 0.15), duration: 0.8 }}
              className="space-y-8 p-12 sm:p-16 rounded-[4rem] bg-secondary/30 border border-border/80 text-left hover:border-primary/60 transition-all group backdrop-blur-3xl shadow-4xl hover:-translate-y-4"
            >
              <stat.icon className="w-10 h-10 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-4">
                <p className="text-[16px] font-mono font-black uppercase tracking-[0.6em] text-muted-foreground/60">{stat.label}</p>
                <p className="text-xl sm:text-3xl font-black uppercase text-foreground font-mono leading-none">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
