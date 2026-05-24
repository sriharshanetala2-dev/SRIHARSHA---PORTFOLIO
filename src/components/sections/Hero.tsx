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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Visual Depth Subsystem */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="lens-flare top-[-10%] left-[-5%] scale-150 opacity-30" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[180px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto text-center space-y-12 sm:space-y-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="section-label mx-auto mb-4"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-primary" />
          SYSTEM_ARCHITECT_v4.2 // MASTER_NODE
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 sm:space-y-8">
          <motion.div variants={item} className="space-y-2">
            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-headline font-black tracking-tighter uppercase leading-[0.75] shimmer-text">
              ENGINEERING
            </h1>
            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-headline font-black tracking-tighter uppercase leading-[0.75] text-gradient">
              INTELLIGENCE
            </h1>
          </motion.div>

          <motion.div variants={item} className="max-w-3xl mx-auto space-y-10">
            <p className="text-base sm:text-xl lg:text-2xl text-muted-foreground font-bold uppercase tracking-tight leading-snug max-w-2xl mx-auto px-4 opacity-90">
              Architecting high-performance digital ecosystems where <span className="text-primary font-black">Systems Integrity</span> meets autonomous <span className="text-accent font-black">Neural Orchestration</span>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 px-4">
              {["Java 21", "Spring Boot", "Genkit", "Next.js 15", "Architecture"].map((tech, i) => (
                <motion.span 
                  key={tech} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + (i * 0.1) }}
                  className="text-[9px] sm:text-[11px] text-primary/80 font-black uppercase tracking-[0.4em] px-5 py-2.5 bg-secondary/30 border border-primary/10 rounded-lg hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default backdrop-blur-3xl"
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
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-12 pt-8"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6">
            <a 
              href="#portfolio" 
              className="magnetic-button flex items-center justify-center gap-4 px-12 py-6 rounded-xl bg-primary text-primary-foreground font-black text-[11px] tracking-[0.3em] uppercase shadow-2xl hover:brightness-110 group"
            >
              SYSTEM REGISTRY
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </a>
            <a 
              href="#contact" 
              className="magnetic-button flex items-center justify-center gap-4 px-12 py-6 rounded-xl bg-secondary/50 text-foreground font-black text-[11px] tracking-[0.3em] uppercase border border-border hover:border-primary/50 transition-all shadow-xl backdrop-blur-3xl group"
            >
              INITIATE SYNC
              <Zap className="w-4 h-4 text-accent group-hover:rotate-12 transition-transform duration-500" />
            </a>
          </div>
          
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
            className="flex flex-col items-center gap-3 opacity-30"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.6em] text-primary">SCAN_FOR_LOGIC</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Industrial OS HUD (Refined Status) */}
      <div className="hidden lg:flex flex-col gap-3 absolute bottom-12 left-12 pointer-events-none opacity-40">
        <div className="flex items-center gap-3 px-4 py-2.5 bg-background/40 border border-border/50 rounded-lg backdrop-blur-xl shadow-lg">
          <Activity className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-widest">NETWORK_LATENCY: 14ms</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2.5 bg-background/40 border border-border/50 rounded-lg backdrop-blur-xl shadow-lg">
          <Zap className="w-3.5 h-3.5 text-accent" />
          <span className="text-[9px] font-black uppercase tracking-widest">NEURAL_KERNEL: STABLE</span>
        </div>
      </div>
    </section>
  );
}
