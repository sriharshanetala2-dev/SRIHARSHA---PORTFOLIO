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
    desc: "Elite React Systems",
    status: "Compiling Interface...",
    metrics: ["120fps", "Accessible", "Modern"]
  },
  { 
    id: "fullstack",
    label: "Full Stack", 
    icon: Database, 
    color: "text-indigo-400", 
    desc: "Robust logic flows",
    status: "Synchronizing State...",
    metrics: ["ACID", "Real-time", "Secure"]
  },
  { 
    id: "uiux",
    label: "UI/UX Logic", 
    icon: Palette, 
    color: "text-purple-400", 
    desc: "Architectural Design",
    status: "Mapping Experience...",
    metrics: ["Framer", "Scalable", "Precise"]
  },
  { 
    id: "ai",
    label: "Neural Systems", 
    icon: Cpu, 
    color: "text-orange-400", 
    desc: "Genkit AI Agents",
    status: "Optimizing Neural...",
    metrics: ["LLMs", "Reasoning", "Tools"]
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
    <section id="about" className="py-24 md:py-40 px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.03),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="space-y-12 sm:space-y-16"
          >
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 text-[12px] font-black tracking-[0.4em] text-primary uppercase border border-primary/20">
                <BrainCircuit className="w-4 h-4" />
                Logic Synthesis Node
              </div>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-headline font-black leading-tight tracking-tighter uppercase shimmer-text">
                NEURAL <br className="hidden sm:block" />
                <span className="text-gradient">ARCHITECTURE</span>
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 opacity-80">
                As a <span className="text-primary font-bold">B.Sc Computer Science graduate</span>, I architect digital products where computational logic meets human-centric design.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {synthesisNodes.map((node) => (
                <button 
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "flex items-center gap-4 p-6 rounded-[2rem] border transition-all text-left group relative overflow-hidden active:scale-95",
                    activeNode.id === node.id 
                      ? "bg-secondary border-primary/50 shadow-2xl ring-1 ring-primary/20" 
                      : "bg-secondary/20 border-border/50 hover:border-primary/50 hover:bg-secondary/40"
                  )}
                >
                  <div className={cn(
                    "p-4 rounded-2xl bg-background transition-all duration-700",
                    node.color,
                    activeNode.id === node.id ? "scale-110 shadow-xl" : "opacity-40"
                  )}>
                    <node.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-[12px] uppercase tracking-widest">{node.label}</span>
                    <span className="text-[11px] text-muted-foreground uppercase tracking-widest font-bold truncate opacity-60">{node.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right Visual Matrix */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[3rem] sm:rounded-[4rem] overflow-hidden border border-border bg-secondary/5 data-flow-grid group shadow-3xl">
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }} />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, filter: "blur(15px)", scale: 1.1 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(15px)", scale: 0.9 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center p-8"
                >
                  <div className="relative z-10 flex flex-col items-center gap-10 w-full">
                    <motion.div 
                      animate={{ 
                        boxShadow: ["0 0 20px hsl(var(--primary) / 0.1)", "0 0 60px hsl(var(--primary) / 0.4)", "0 0 20px hsl(var(--primary) / 0.1)"]
                      }}
                      transition={{ duration: 6, repeat: Infinity }}
                      className="relative p-12 sm:p-20 rounded-[3rem] sm:rounded-[5rem] bg-card border border-border/50 shadow-3xl backdrop-blur-3xl"
                    >
                      <activeNode.icon className={cn("w-16 h-16 sm:w-32 sm:h-32 transition-colors duration-700", activeNode.color)} />
                      <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 p-3 sm:p-6 rounded-2xl bg-accent text-accent-foreground shadow-2xl border border-white/10">
                        <Zap className="w-5 sm:w-8 h-5 sm:h-8 animate-pulse" />
                      </div>
                    </motion.div>

                    <div className="flex flex-col items-center gap-2">
                      <p className="text-[11px] font-black uppercase tracking-[0.6em] text-primary opacity-60">Architectural Node</p>
                      <h3 className="text-xl sm:text-4xl font-black uppercase tracking-tighter text-center">{activeNode.label}</h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8 px-6 py-4 glass-card rounded-2xl border-white/10 bg-background/60 shadow-3xl">
                       {activeNode.metrics.map((metric, i) => (
                         <div key={i} className="flex flex-col items-center px-4 sm:px-10 border-r last:border-0 border-border/50">
                           <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Vector</span>
                           <span className="text-[13px] font-black text-accent whitespace-nowrap">{metric}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-[2rem] flex items-center justify-between border border-white/10 bg-black/50 shadow-3xl">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping absolute inset-0" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_15px_#22c55e]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40">Status: {activeNode.id}</span>
                    <motion.span 
                      key={activeNode.status}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-[12px] font-black text-green-500 uppercase tracking-[0.2em]"
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