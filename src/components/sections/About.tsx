
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Palette, Database, Cpu, BrainCircuit, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const synthesisNodes = [
  { 
    id: "frontend",
    label: "Frontend", 
    icon: Laptop, 
    color: "text-blue-400", 
    desc: "Pixel-perfect React",
    status: "Compiling Interface...",
    metrics: ["60fps", "WAI-ARIA", "Tailwind"]
  },
  { 
    id: "fullstack",
    label: "Full Stack", 
    icon: Database, 
    color: "text-indigo-400", 
    desc: "Real-time logic & sync",
    status: "Synchronizing State...",
    metrics: ["ACID", "REST/GraphQL", "Auth"]
  },
  { 
    id: "uiux",
    label: "UI/UX Logic", 
    icon: Palette, 
    color: "text-purple-400", 
    desc: "Architectural design",
    status: "Mapping Experience...",
    metrics: ["Framer", "Design Ops", "UX"]
  },
  { 
    id: "ai",
    label: "Neural Systems", 
    icon: Cpu, 
    color: "text-orange-400", 
    desc: "Genkit AI flow",
    status: "Optimizing Neural...",
    metrics: ["LLMs", "Prompt", "RAG"]
  }
];

export function About() {
  const [activeNode, setActiveNode] = useState(synthesisNodes[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.02),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-[9px] font-black tracking-[0.4em] text-primary uppercase border border-primary/20">
                <BrainCircuit className="w-3.5 h-3.5" />
                Logic Synthesis Node
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black leading-tight sm:leading-none tracking-tighter uppercase shimmer-text">
                NEURAL <br className="hidden sm:block" />
                <span className="text-gradient">ARCHITECTURE</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium max-w-lg mx-auto lg:mx-0">
                As a <span className="text-primary font-bold">B.Sc Computer Science graduate</span>, I architect digital products where computational logic meets human-centric design.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {synthesisNodes.map((node) => (
                <button 
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-[1.2rem] sm:rounded-[1.5rem] border transition-all text-left group relative overflow-hidden",
                    activeNode.id === node.id 
                      ? "bg-secondary/40 border-primary shadow-[0_0_20px_rgba(var(--primary),0.1)] ring-1 ring-primary/20" 
                      : "bg-secondary/10 border-border/50 hover:border-primary/50"
                  )}
                >
                  <div className={cn(
                    "p-2.5 sm:p-3 rounded-xl bg-background transition-all duration-500",
                    node.color,
                    activeNode.id === node.id ? "scale-110 shadow-lg" : "opacity-50"
                  )}>
                    <node.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-[9px] sm:text-[10px] uppercase tracking-widest">{node.label}</span>
                    <span className="text-[8px] sm:text-[9px] text-muted-foreground uppercase tracking-[0.1em] font-bold truncate max-w-[120px]">{node.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Matrix */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-border/50 shadow-3xl bg-secondary/5 data-flow-grid group">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, filter: "blur(10px)", scale: 1.05 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center p-4 sm:p-6"
                >
                  <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-10 w-full">
                    <motion.div 
                      animate={{ 
                        boxShadow: ["0 0 15px hsl(var(--primary) / 0.1)", "0 0 40px hsl(var(--primary) / 0.4)", "0 0 15px hsl(var(--primary) / 0.1)"]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="relative p-7 sm:p-12 rounded-[2rem] sm:rounded-[3.5rem] bg-card border border-border/50 shadow-2xl backdrop-blur-3xl"
                    >
                      <activeNode.icon className={cn("w-10 h-10 sm:w-20 sm:h-20 transition-colors duration-500", activeNode.color)} />
                      <div className="absolute -top-1 -right-1 sm:-top-3 sm:-right-3 p-1.5 sm:p-3 rounded-lg sm:rounded-xl bg-accent text-accent-foreground shadow-xl border border-white/10">
                        <Zap className="w-3 h-3 sm:w-5 sm:h-5 animate-pulse" />
                      </div>
                    </motion.div>

                    <div className="flex flex-col items-center gap-1">
                      <p className="text-[7px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary opacity-60">Neural Node</p>
                      <h3 className="text-base sm:text-2xl font-black uppercase tracking-tighter text-center">{activeNode.label}</h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-3 sm:px-6 py-2 sm:py-3 glass-card rounded-xl sm:rounded-2xl border-white/5 bg-background/50">
                       {activeNode.metrics.map((metric, i) => (
                         <div key={i} className="flex flex-col items-center px-2 sm:px-4 border-r last:border-0 border-border/50">
                           <span className="text-[5px] sm:text-[7px] font-black uppercase tracking-widest text-muted-foreground mb-0.5">Vector</span>
                           <span className="text-[8px] sm:text-[10px] font-bold text-accent whitespace-nowrap">{metric}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 p-3 sm:p-5 glass-card rounded-xl sm:rounded-[1.5rem] flex items-center justify-between border border-white/5 bg-black/40 shadow-2xl">
                <div className="flex items-center gap-2.5 sm:gap-4">
                  <div className="relative">
                    <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-ping absolute inset-0" />
                    <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[6px] sm:text-[8px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-white/40">Stream: {activeNode.id}</span>
                    <motion.span 
                      key={activeNode.status}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[8px] sm:text-[10px] font-bold text-green-500 uppercase tracking-widest truncate max-w-[100px] sm:max-w-none"
                    >
                      {activeNode.status}
                    </motion.span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
