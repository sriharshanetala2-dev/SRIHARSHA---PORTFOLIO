
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
      transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
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
      y: 30,
      scale: 0.8,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 150,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-44 pb-20 px-6 relative overflow-hidden bg-background">
      {/* Structural Background Layer */}
      <div className="absolute inset-0 neural-grid opacity-[0.03] pointer-events-none" />
      
      <div className="absolute top-[5%] left-[-10%] w-[60%] h-[60%] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto text-center space-y-12 sm:space-y-16 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-label mx-auto text-[8px] sm:text-[10px]"
        >
          <Code2 className="w-4 h-4" />
          FULL_STACK_DEVELOPER_v4.0 // LIVE_NODE
        </motion.div>

        <div className="space-y-8 sm:space-y-12">
          <motion.h1
            className="text-[2.75rem] leading-[1.1] sm:text-7xl lg:text-9xl font-headline font-black tracking-tight uppercase flex flex-col items-center select-none"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <span className="flex flex-wrap justify-center overflow-hidden">
              {title.split("").map((letter, index) => (
                <motion.span 
                  key={index} 
                  variants={child} 
                  className="inline-block hover:text-primary transition-colors cursor-default"
                  whileHover={{ y: -15, scale: 1.15, rotate: 2 }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.12,
                    ease: "easeInOut"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
            <span className="flex flex-wrap justify-center overflow-hidden shimmer-text">
              {subtitle.split("").map((letter, index) => (
                <motion.span 
                  key={index} 
                  variants={child} 
                  className="inline-block cursor-default"
                  whileHover={{ scale: 1.2, rotate: -3, color: "hsl(var(--primary))" }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: (index + title.length) * 0.12,
                    ease: "easeInOut"
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-sm sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-bold uppercase tracking-normal opacity-90 px-4"
          >
            Building high-performance digital ecosystems where technical integrity meets autonomous orchestration.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 px-6"
        >
          <Button size="lg" className="w-full sm:w-auto rounded-2xl h-14 sm:h-18 px-12 text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-primary/20 hover:scale-105 transition-all group" asChild>
            <a href="#portfolio">
              System Registry <ArrowRight className="ml-4 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-2xl h-14 sm:h-18 px-12 text-[10px] font-black uppercase tracking-[0.3em] border-2 border-border hover:bg-secondary/40 transition-all" asChild>
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
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + (i * 0.1), duration: 0.5 }}
              className="space-y-4 p-5 sm:p-7 rounded-[2rem] bg-secondary/10 border border-border/50 text-left hover:border-primary/40 transition-all group backdrop-blur-md shadow-xl"
            >
              <stat.icon className="w-5 h-5 text-primary opacity-70 group-hover:opacity-100 transition-opacity" />
              <div className="space-y-1">
                <p className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                <p className="text-xs font-black uppercase text-foreground font-mono">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
