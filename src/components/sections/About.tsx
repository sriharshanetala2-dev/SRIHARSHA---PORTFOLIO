"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Palette, Database, Cpu, BrainCircuit, Zap, Fingerprint } from "lucide-react";
import { cn } from "@/lib/utils";

const synthesisNodes = [
  { 
    id: "frontend",
    label: "Frontend", 
    icon: Laptop, 
    color: "text-blue-400", 
    desc: "Elite React Interfaces",
    status: "Compiling UI...",
    metrics: ["120fps", "Modern", "Fluid"]
  },
  { 
    id: "fullstack",
    label: "Full Stack", 
    icon: Database, 
    color: "text-indigo-400", 
    desc: "Robust state flows",
    status: "Syncing Logic...",
    metrics: ["ACID", "Real-time", "Secure"]
  },
  { 
    id: "uiux",
    label: "Logic Design", 
    icon: Palette, 
    color: "text-purple-400", 
    desc: "System Architecture",
    status: "Mapping Experience...",
    metrics: ["Scalable", "Precise", "Visual"]
  },
  { 
    id: "ai",
    label: "Neural Engine", 
    icon: Cpu, 
    color: "text-orange-400", 
    desc: "Genkit AI Agents",
    status: "Training Model...",
    metrics: ["LLMs", "Orchestration", "Tools"]
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.05),transparent)] pointer-events-none" />
      
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
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black tracking-[0.4em] text-primary uppercase border border-primary/20">
                <Fingerprint className="w-4 h-4" />
                Identity Manifest
              </div>
              <h2 className="text-4xl sm:text-7xl font-headline font-black leading-[1] tracking-tighter uppercase italic shimmer-text">
                SYSTEMIC <br className="hidden sm:block" />
                <span className="text-gradient">IDENTITY</span>
              </h2>
              <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 opacity-80 uppercase tracking-widest">
                As a <span className="text-primary font-bold">B.Sc Computer Science graduate</span>, I engineer digital solutions where systemic logic meets elite architectural design.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {synthesisNodes.map((node) => (
                <button 
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "flex items-center gap-4 p-5 rounded-2xl border transition-all text-left relative overflow-hidden group",
                    activeNode.id === node.id 
                      ? "bg-secondary border-primary/40 shadow-xl" 
                      : "bg-secondary/20 border-white/5 hover:border-primary/30"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl bg-background transition-all duration-500",
                    node.color,
                    activeNode.id === node.id ? "scale-110 shadow-xl" : "opacity-30"
                  )}>
                    <node.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-[10px] uppercase tracking-widest">{node.label}</span>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-bold opacity-40 truncate">{node.desc}</span>
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
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-white/5 bg-secondary/5 shadow-3xl flex items-center justify-center p-8 group">
              <div className="absolute inset-0 neural-grid opacity-10" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(10px)", scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 flex flex-col items-center gap-10 w-full"
                >
                  <div className="relative p-12 sm:p-20 rounded-full bg-card/40 border border-white/10 shadow-3xl backdrop-blur-3xl quantum-border">
                    <activeNode.icon className={cn("w-20 h-20 sm:w-40 sm:h-40 transition-colors duration-500", activeNode.color)} />
                    <div className="absolute -top-4 -right-4 p-4 rounded-xl bg-primary text-primary-foreground shadow-2xl border border-white/20">
                      <Zap className="w-6 h-6 animate-pulse" />
                    </div>
                  </div>

                  <div className="text-center space-y-2">
                    <p className="text-[9px] font-black uppercase tracking-[0.6em] text-primary opacity-50">Active Vector Node</p>
                    <h3 className="text-2xl sm:text-5xl font-headline font-black uppercase tracking-tighter italic">{activeNode.label}</h3>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4 sm:gap-8 px-6 py-4 glass-card rounded-2xl border-white/10 bg-background/50">
                     {activeNode.metrics.map((metric, i) => (
                       <div key={i} className="flex flex-col items-center px-4 sm:px-6 border-r last:border-0 border-white/10">
                         <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground opacity-50 mb-0.5">Vector</span>
                         <span className="text-[11px] font-black text-primary whitespace-nowrap">{metric}</span>
                       </div>
                     ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-2xl flex items-center justify-between border-white/10 bg-black/60">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/40">Status Registry</span>
                    <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">{activeNode.status}</span>
                  </div>
                </div>
                <Activity className="w-4 h-4 text-green-500/40" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}