'use client';

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Zap, ShieldCheck, Activity } from "lucide-react";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <section className="min-h-[100svh] flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="lens-flare top-[-10%] left-[-5%] scale-150 opacity-20" />
      </div>

      <div className="max-w-6xl mx-auto text-center space-y-10 sm:space-y-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="section-label mx-auto"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          SYSTEM_ARCHITECT_v4.2 // MASTER_NODE
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
          <motion.div variants={item} className="space-y-2">
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter shimmer-text">
              ENGINEERING
            </h1>
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tighter text-gradient">
              INTELLIGENCE
            </h1>
          </motion.div>

          <motion.div variants={item} className="max-w-2xl mx-auto space-y-8">
            <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground font-bold uppercase tracking-tight leading-relaxed opacity-90">
              Architecting high-performance digital ecosystems where <span className="text-primary">Systems Integrity</span> meets autonomous <span className="text-accent">Neural Orchestration</span>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2 px-4">
              {["Java 21", "Spring Boot", "Genkit", "Next.js 15", "Architecture"].map((tech, i) => (
                <motion.span 
                  key={tech} 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + (i * 0.1) }}
                  className="text-[9px] sm:text-[10px] text-primary/80 font-black uppercase tracking-[0.3em] px-4 py-2 bg-secondary/30 border border-primary/10 rounded-md hover:border-primary/30 transition-all backdrop-blur-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-col items-center gap-10"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6">
            <a 
              href="#portfolio" 
              className="magnetic-button flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-black text-[10px] tracking-[0.2em] uppercase hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              SYSTEM REGISTRY
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="magnetic-button flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-secondary/50 text-foreground font-black text-[10px] tracking-[0.2em] uppercase border border-border hover:border-primary/20 transition-all backdrop-blur-md"
            >
              INITIATE SYNC
              <Zap className="w-4 h-4 text-accent" />
            </a>
          </div>
          
          <motion.div 
            animate={{ y: [0, 5, 0] }} 
            transition={{ duration: 4, repeat: Infinity }} 
            className="flex flex-col items-center gap-2 opacity-30"
          >
            <span className="text-[8px] font-black uppercase tracking-[0.4em] text-primary">SCAN_FOR_LOGIC</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      <div className="hidden lg:flex flex-col gap-2 absolute bottom-10 left-10 opacity-30 pointer-events-none">
        <div className="flex items-center gap-3 px-4 py-2 bg-background/40 border border-border/50 rounded-lg backdrop-blur-md">
          <Activity className="w-3 h-3 text-primary animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-widest">NETWORK: 14ms</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-background/40 border border-border/50 rounded-lg backdrop-blur-md">
          <Zap className="w-3 h-3 text-accent" />
          <span className="text-[9px] font-black uppercase tracking-widest">KERNEL: STABLE</span>
        </div>
      </div>
    </section>
  );
}