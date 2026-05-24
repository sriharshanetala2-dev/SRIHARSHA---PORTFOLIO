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

      <div className="max-w-7xl mx-auto text-center space-y-12 sm:space-y-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="section-label mx-auto"
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          SYSTEM_ARCHITECT_v4.2 // MASTER_NODE
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
          <motion.div variants={item} className="space-y-4">
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black leading-[1] tracking-tight shimmer-text">
              ENGINEERING
            </h1>
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black leading-[1] tracking-tight text-gradient">
              INTELLIGENCE
            </h1>
          </motion.div>

          <motion.div variants={item} className="max-w-3xl mx-auto space-y-10">
            <p className="text-base sm:text-xl lg:text-2xl text-muted-foreground font-medium tracking-normal leading-relaxed opacity-95">
              Architecting high-performance digital ecosystems where <span className="text-primary font-bold">Systems Integrity</span> meets autonomous <span className="text-accent font-bold">Neural Orchestration</span>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 px-4">
              {["Java 21", "Spring Boot", "Genkit", "Next.js 15", "Architecture"].map((tech, i) => (
                <motion.span 
                  key={tech} 
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + (i * 0.1) }}
                  className="text-[10px] sm:text-xs text-primary/90 font-black uppercase tracking-[0.2em] px-5 py-2.5 bg-secondary/30 border border-primary/10 rounded-lg hover:border-primary/30 transition-all backdrop-blur-sm"
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
          className="flex flex-col items-center gap-12"
        >
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-6">
            <a 
              href="#portfolio" 
              className="magnetic-button flex items-center justify-center gap-3 px-12 py-6 rounded-2xl bg-primary text-primary-foreground font-black text-xs tracking-[0.2em] uppercase hover:shadow-2xl hover:shadow-primary/30 transition-all"
            >
              SYSTEM REGISTRY
              <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="magnetic-button flex items-center justify-center gap-3 px-12 py-6 rounded-2xl bg-secondary/50 text-foreground font-black text-xs tracking-[0.2em] uppercase border border-border hover:border-primary/20 transition-all backdrop-blur-md"
            >
              INITIATE SYNC
              <Zap className="w-4 h-4 text-accent" />
            </a>
          </div>
          
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 4, repeat: Infinity }} 
            className="flex flex-col items-center gap-3 opacity-40"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">SCAN_FOR_LOGIC</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      <div className="hidden lg:flex flex-col gap-4 absolute bottom-12 left-12 opacity-40 pointer-events-none">
        <div className="flex items-center gap-4 px-5 py-2.5 bg-background/40 border border-border/50 rounded-xl backdrop-blur-md shadow-lg">
          <Activity className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest">NETWORK: 14ms</span>
        </div>
        <div className="flex items-center gap-4 px-5 py-2.5 bg-background/40 border border-border/50 rounded-xl backdrop-blur-md shadow-lg">
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-[10px] font-black uppercase tracking-widest">KERNEL: STABLE</span>
        </div>
      </div>
    </section>
  );
}
