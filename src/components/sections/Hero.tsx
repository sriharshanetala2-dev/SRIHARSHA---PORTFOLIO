'use client';

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Zap, ShieldCheck, Activity } from "lucide-react";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.4 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-28 sm:pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Visual Depth Subsystem */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="lens-flare top-[-10%] left-[-10%] scale-150 opacity-40" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto text-center space-y-12 sm:space-y-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="section-label mx-auto"
        >
          <ShieldCheck className="w-4 h-4 text-primary animate-pulse" />
          SYSTEM_ARCHITECT_v3.0 // OPERATIONAL
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 sm:space-y-8">
          <motion.div variants={item} className="space-y-2">
            <h1 className="text-4xl sm:text-7xl lg:text-9xl font-headline font-black tracking-tighter uppercase leading-[0.8] sm:leading-[0.85] shimmer-text">
              ENGINEERING
            </h1>
            <h1 className="text-4xl sm:text-7xl lg:text-9xl font-headline font-black tracking-tighter uppercase leading-[0.8] sm:leading-[0.85] text-gradient">
              INTELLIGENCE
            </h1>
          </motion.div>

          <motion.div variants={item} className="max-w-4xl mx-auto space-y-10">
            <p className="text-sm sm:text-xl lg:text-2xl text-muted-foreground font-bold uppercase tracking-tight leading-relaxed max-w-2xl mx-auto px-4 opacity-90">
              Architecting high-performance digital ecosystems where <span className="text-primary font-black">Full Stack Integrity</span> meets autonomous <span className="text-primary font-black">Neural Orchestration</span>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 px-4">
              {["Java 21", "Spring Boot", "Genkit", "Next.js 15", "Systems Design"].map((tech, i) => (
                <motion.span 
                  key={tech} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + (i * 0.1) }}
                  className="text-[10px] sm:text-xs text-primary/80 font-black uppercase tracking-[0.3em] px-5 py-2.5 bg-secondary/30 border border-border rounded-xl hover:border-primary/40 transition-all cursor-default backdrop-blur-md"
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
          transition={{ delay: 1.8, duration: 1 }}
          className="flex flex-col items-center gap-12 pt-8"
        >
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-6">
            <a 
              href="#portfolio" 
              className="magnetic-button flex items-center justify-center gap-4 px-12 py-6 rounded-2xl bg-primary text-primary-foreground font-black text-xs tracking-[0.2em] uppercase shadow-2xl shadow-primary/30 hover:scale-[1.02] group"
            >
              SYSTEM REGISTRY
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="magnetic-button flex items-center justify-center gap-4 px-12 py-6 rounded-2xl bg-secondary/40 text-foreground font-black text-xs tracking-[0.2em] uppercase border border-border hover:border-primary/50 transition-all shadow-xl backdrop-blur-2xl group"
            >
              INITIATE SYNC
              <Zap className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
            </a>
          </div>
          
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
            className="flex flex-col items-center gap-3 opacity-30"
          >
            <span className="text-[9px] font-black uppercase tracking-[0.5em] text-primary">SCAN_FOR_LOGIC</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating System HUD */}
      <div className="hidden lg:block absolute bottom-12 left-12 space-y-4 pointer-events-none opacity-40">
        <div className="flex items-center gap-3 px-4 py-2 bg-background/40 border border-border rounded-lg backdrop-blur-xl">
          <Activity className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-widest">NETWORK_LATENCY: 12ms</span>
        </div>
        <div className="flex items-center gap-3 px-4 py-2 bg-background/40 border border-border rounded-lg backdrop-blur-xl">
          <Zap className="w-4 h-4 text-primary" />
          <span className="text-[9px] font-black uppercase tracking-widest">LOGIC_SYNTH: ONLINE</span>
        </div>
      </div>
    </section>
  );
}