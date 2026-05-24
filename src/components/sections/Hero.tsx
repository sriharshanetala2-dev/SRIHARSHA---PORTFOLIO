'use client';

import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Zap, ShieldCheck, Activity } from "lucide-react";

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.5 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70, damping: 18 } }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 sm:pt-40 pb-20 px-6 relative overflow-hidden">
      {/* Visual Depth Subsystem */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="lens-flare top-[-10%] left-[-5%] scale-150 opacity-50" />
        <div className="absolute bottom-[-15%] right-[-5%] w-[900px] h-[900px] bg-primary/10 rounded-full blur-[180px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto text-center space-y-14 sm:space-y-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="section-label mx-auto"
        >
          <ShieldCheck className="w-4 h-4 text-primary animate-pulse" />
          SYSTEM_ARCHITECT_v4.0 // LIVE_NODE
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show" className="space-y-8 sm:space-y-12">
          <motion.div variants={item} className="space-y-4">
            <h1 className="text-5xl sm:text-8xl lg:text-9xl font-headline font-black tracking-tighter uppercase leading-[0.8] sm:leading-[0.85] shimmer-text">
              ENGINEERING
            </h1>
            <h1 className="text-5xl sm:text-8xl lg:text-9xl font-headline font-black tracking-tighter uppercase leading-[0.8] sm:leading-[0.85] text-gradient">
              INTELLIGENCE
            </h1>
          </motion.div>

          <motion.div variants={item} className="max-w-4xl mx-auto space-y-12">
            <p className="text-base sm:text-2xl lg:text-3xl text-muted-foreground font-bold uppercase tracking-tight leading-relaxed max-w-3xl mx-auto px-6 opacity-95">
              Architecting digital ecosystems where <span className="text-primary font-black">Full Stack Integrity</span> meets autonomous <span className="text-accent font-black">Neural Orchestration</span>.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 px-4">
              {["Java 21", "Spring Boot", "Genkit", "Next.js 15", "Architecture"].map((tech, i) => (
                <motion.span 
                  key={tech} 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + (i * 0.1) }}
                  className="text-[10px] sm:text-xs text-primary font-black uppercase tracking-[0.4em] px-6 py-3 bg-secondary/40 border border-primary/20 rounded-xl hover:border-primary/50 transition-all cursor-default backdrop-blur-3xl shadow-lg"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-14 pt-12"
        >
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-8">
            <a 
              href="#portfolio" 
              className="magnetic-button flex items-center justify-center gap-4 px-14 py-7 rounded-2xl bg-primary text-primary-foreground font-black text-xs tracking-[0.3em] uppercase shadow-[0_0_40px_rgba(var(--primary),0.3)] hover:scale-[1.03] group"
            >
              SYSTEM REGISTRY
              <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
            </a>
            <a 
              href="#contact" 
              className="magnetic-button flex items-center justify-center gap-4 px-14 py-7 rounded-2xl bg-secondary/50 text-foreground font-black text-xs tracking-[0.3em] uppercase border border-border hover:border-primary transition-all shadow-2xl backdrop-blur-3xl group"
            >
              INITIATE SYNC
              <Zap className="w-5 h-5 text-accent group-hover:rotate-12 transition-transform duration-500" />
            </a>
          </div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} 
            className="flex flex-col items-center gap-4 opacity-40"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-primary">SCAN_FOR_LOGIC</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Industrial OS HUD (Dynamic Status) */}
      <div className="hidden lg:flex flex-col gap-5 absolute bottom-16 left-16 pointer-events-none opacity-50">
        <div className="flex items-center gap-4 px-5 py-3 bg-background/50 border border-border rounded-xl backdrop-blur-2xl shadow-xl">
          <Activity className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest">NETWORK_LATENCY: 14ms</span>
        </div>
        <div className="flex items-center gap-4 px-5 py-3 bg-background/50 border border-border rounded-xl backdrop-blur-2xl shadow-xl">
          <Zap className="w-4 h-4 text-accent" />
          <span className="text-[10px] font-black uppercase tracking-widest">NEURAL_KERNEL: STABLE</span>
        </div>
      </div>
    </section>
  );
}