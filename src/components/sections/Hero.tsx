'use client';

import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Zap, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const title = "Engineering";
  const subtitle = "Intelligence";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 * i },
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
      y: 40,
      scale: 0.8,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
  };

  // Continuous "Neural Pulse" animation for Engineering
  const neuralPulse = (index: number) => ({
    color: ["hsl(var(--foreground))", "hsl(var(--primary))", "hsl(var(--foreground))"],
    scale: [1, 1.15, 1],
    y: [0, -5, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      delay: index * 0.1,
      ease: "easeInOut",
    }
  });

  // High-Visibility "Active Wave" animation for Intelligence
  const activeWave = (index: number) => ({
    y: [0, -20, 0],
    scale: [1, 1.2, 1],
    opacity: [1, 1, 1], // Constant visibility
    transition: {
      duration: 2.5,
      repeat: Infinity,
      delay: (index + title.length) * 0.1,
      ease: "easeInOut"
    }
  });

  return (
    <section className="min-h-screen flex items-center justify-center pt-48 pb-24 px-6 relative overflow-hidden bg-background">
      {/* Structural Background Layer */}
      <div className="absolute inset-0 neural-grid opacity-[0.04] pointer-events-none" />
      
      <div className="absolute top-[5%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center space-y-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-label mx-auto"
        >
          <Code2 className="w-5 h-5" />
          FULL_STACK_DEVELOPER_v4.0 // LIVE_NODE
        </motion.div>

        <div className="space-y-12 lg:space-y-16">
          <motion.h1
            className="text-[3.25rem] leading-[1.2] sm:text-7xl lg:text-9xl font-headline font-black tracking-tight uppercase flex flex-col items-center select-none"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <span className="flex flex-wrap justify-center overflow-hidden mb-8 lg:mb-12">
              {title.split("").map((letter, index) => (
                <motion.span 
                  key={index} 
                  variants={child} 
                  className="inline-block hover:text-primary transition-colors cursor-default drop-shadow-xl"
                  whileHover={{ y: -20, scale: 1.3, rotate: 5 }}
                  animate={neuralPulse(index)}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="flex flex-wrap justify-center overflow-hidden shimmer-text py-6 px-4">
              {subtitle.split("").map((letter, index) => (
                <motion.span 
                  key={index} 
                  variants={child} 
                  className="inline-block cursor-default drop-shadow-2xl"
                  whileHover={{ scale: 1.35, rotate: -5, color: "hsl(var(--foreground))" }}
                  animate={activeWave(index)}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl sm:text-2xl lg:text-4xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-bold uppercase tracking-wide opacity-90 px-4"
          >
            Architecting high-performance digital ecosystems where technical integrity meets autonomous orchestration.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 px-6"
        >
          <Button size="lg" className="w-full sm:w-auto rounded-full h-20 sm:h-28 px-20 text-[20px] sm:text-[24px] font-black uppercase tracking-[0.4em] shadow-4xl shadow-primary/30 hover:scale-105 transition-all group" asChild>
            <a href="#portfolio">
              System Registry <ArrowRight className="ml-6 w-8 h-8 group-hover:translate-x-4 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full h-20 sm:h-28 px-20 text-[20px] sm:text-[24px] font-black uppercase tracking-[0.4em] border-2 border-border hover:bg-secondary/50 transition-all shadow-xl" asChild>
            <a href="#contact">Initiate Sync</a>
          </Button>
        </motion.div>

        {/* Technical Data Matrix */}
        <div className="pt-24 sm:pt-40 grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-14 max-w-7xl mx-auto px-6">
          {[
            { label: "Core Logic", value: "Neural", icon: Cpu },
            { label: "Integrity", value: "Verified", icon: Code2 },
            { label: "Subsystem", value: "Active", icon: Zap },
            { label: "Latency", value: "14ms", icon: Box }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 + (i * 0.1), duration: 0.6 }}
              className="space-y-6 p-12 sm:p-14 rounded-[3.5rem] bg-secondary/20 border border-border/60 text-left hover:border-primary/50 transition-all group backdrop-blur-2xl shadow-3xl hover:-translate-y-3"
            >
              <stat.icon className="w-8 h-8 text-primary opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-3">
                <p className="text-[14px] font-mono font-black uppercase tracking-[0.5em] text-muted-foreground">{stat.label}</p>
                <p className="text-xl sm:text-2xl font-black uppercase text-foreground font-mono leading-none">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}