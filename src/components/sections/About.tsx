
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Palette, Database, Cpu, BrainCircuit, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const synthesisNodes = [
  { 
    id: "frontend",
    label: "Frontend Orchestration", 
    icon: Laptop, 
    color: "text-blue-500", 
    desc: "Pixel-perfect React builds",
    status: "Compiling Interface...",
    metrics: ["60fps", "WAI-ARIA", "Tailwind"]
  },
  { 
    id: "fullstack",
    label: "Full Stack Integrity", 
    icon: Database, 
    color: "text-indigo-500", 
    desc: "Real-time logic & sync",
    status: "Synchronizing State...",
    metrics: ["ACID", "REST/GraphQL", "Auth"]
  },
  { 
    id: "uiux",
    label: "UI/UX Logic", 
    icon: Palette, 
    color: "text-purple-500", 
    desc: "Architectural design",
    status: "Mapping Experience...",
    metrics: ["Framer", "Design Ops", "UX"]
  },
  { 
    id: "ai",
    label: "Neural Systems", 
    icon: Cpu, 
    color: "text-orange-500", 
    desc: "Genkit AI integration",
    status: "Optimizing Neural Core...",
    metrics: ["LLMs", "Prompt Eng", "RAG"]
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
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.02),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-[9px] font-black tracking-[0.4em] text-primary uppercase border border-primary/20">
                <BrainCircuit className="w-3.5 h-3.5" />
                Logic Synthesis Node
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-headline font-black leading-[0.9] tracking-tighter uppercase shimmer-text">
                NEURAL <br />
                <span className="text-gradient">ARCHITECTURE</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium max-w-lg">
                As a <span className="text-primary font-bold">B.Sc Computer Science graduate</span>, I architect digital products where computational logic meets human-centric design.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {synthesisNodes.map((node) => (
                <button 
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  onMouseEnter={() => setActiveNode(node)}
                  className={cn(
                    "flex items-center gap-4 p-5 rounded-[1.5rem] border transition-all text-left group relative overflow-hidden",
                    activeNode.id === node.id 
                      ? "bg-secondary/40 border-primary shadow-[0_0_20px_rgba(var(--primary),0.1)] ring-1 ring-primary/20" 
                      : "bg-secondary/10 border-border/50 hover:border-primary/50"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl bg-background transition-all duration-500",
                    node.color,
                    activeNode.id === node.id ? "scale-110 shadow-lg" : "opacity-50"
                  )}>
                    <node.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-[10px] uppercase tracking-widest">{node.label}</span>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-[0.1em] font-bold">{node.desc}</span>
                  </div>
                  
                  {activeNode.id === node.id && (
                    <motion.div 
                      layoutId="active-node-indicator"
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.8)]"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Matrix (AI Tech Flows) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[2.5rem] sm:rounded-[3rem] overflow-hidden border border-border/50 shadow-3xl bg-secondary/5 data-flow-grid group">
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                
                {/* Moving Tech Flows */}
                <motion.div 
                  animate={{ 
                    x: ["-100%", "100%"],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
                />
                <motion.div 
                  animate={{ 
                    x: ["100%", "-100%"],
                    opacity: [0, 0.4, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
                  className="absolute top-2/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"
                />
                <motion.div 
                  animate={{ 
                    y: ["-100%", "100%"],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
                  className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary to-transparent"
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, filter: "blur(15px)", scale: 1.1 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(15px)", scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center p-4 sm:p-0"
                >
                  <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-10 w-full">
                    <motion.div 
                      animate={{ 
                        boxShadow: ["0 0 20px hsl(var(--primary) / 0.2)", "0 0 60px hsl(var(--primary) / 0.5)", "0 0 20px hsl(var(--primary) / 0.2)"]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="relative p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] bg-card border border-border/50 shadow-2xl backdrop-blur-3xl"
                    >
                      <activeNode.icon className={cn("w-12 h-12 sm:w-20 sm:h-20 transition-colors duration-500", activeNode.color)} />
                      <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 p-2 sm:p-3 rounded-xl bg-accent text-accent-foreground shadow-xl border border-white/10">
                        <Zap className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                      </div>
                    </motion.div>

                    <div className="flex flex-col items-center gap-1 sm:gap-2">
                      <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary opacity-60">Neural Engine v4.0</p>
                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-center">{activeNode.label}</h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 glass-card rounded-2xl border-white/5 bg-background/50 max-w-[90%] sm:max-w-none">
                       {activeNode.metrics.map((metric, i) => (
                         <div key={i} className="flex flex-col items-center px-3 sm:px-4 border-r last:border-0 border-border/50">
                           <span className="text-[6px] sm:text-[7px] font-black uppercase tracking-widest text-muted-foreground mb-0.5 sm:mb-1">Vector</span>
                           <span className="text-[9px] sm:text-[10px] font-bold text-accent whitespace-nowrap">{metric}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 p-3 sm:p-5 glass-card rounded-xl sm:rounded-[1.5rem] flex items-center justify-between border border-white/5 bg-black/40 shadow-2xl">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="relative">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-ping absolute inset-0" />
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-white/40">Stream: {activeNode.id}</span>
                    <motion.span 
                      key={activeNode.status}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[9px] sm:text-[10px] font-bold text-green-500 uppercase tracking-widest truncate max-w-[120px] sm:max-w-none"
                    >
                      {activeNode.status}
                    </motion.span>
                  </div>
                </div>
                <div className="flex gap-1 sm:gap-1.5">
                   {[...Array(4)].map((_, i) => (
                     <motion.div 
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                      className="w-0.5 sm:w-1 h-2 sm:h-3 rounded-full bg-primary/40" 
                     />
                   ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
