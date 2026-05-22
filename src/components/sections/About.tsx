
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Palette, Database, Cpu, BrainCircuit, Activity, Network, Code2, ShieldCheck, Zap } from "lucide-react";
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

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.02),transparent)] pointer-events-none" />
      
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
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-headline font-black leading-[0.9] tracking-tighter uppercase shimmer-text">
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
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]"
                    />
                  )}
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
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-border/50 shadow-3xl bg-secondary/5 data-flow-grid group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, filter: "blur(15px)", scale: 1.1 }}
                  animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, filter: "blur(15px)", scale: 0.9 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Technical Background Grid Layers */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--primary),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--primary),0.05)_1px,transparent_1px)] bg-[size:80px_80px]" />
                  </div>

                  {/* Central Node Visual */}
                  <div className="relative z-10 flex flex-col items-center gap-10">
                    <motion.div 
                      animate={{ 
                        boxShadow: activeNode.id === 'ai' ? ["0 0 20px rgba(249,115,22,0.2)", "0 0 50px rgba(249,115,22,0.4)", "0 0 20px rgba(249,115,22,0.2)"] : ["0 0 20px rgba(var(--primary),0.2)", "0 0 50px rgba(var(--primary),0.4)", "0 0 20px rgba(var(--primary),0.2)"]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="relative p-12 rounded-[3.5rem] bg-card border border-border/50 shadow-2xl transition-all duration-700 backdrop-blur-3xl group-hover:scale-105"
                    >
                      <activeNode.icon className={cn("w-20 h-20 transition-colors duration-500", activeNode.color)} />
                      <div className="absolute -top-3 -right-3 p-3 rounded-2xl bg-accent text-accent-foreground shadow-xl border border-white/10">
                        <Zap className="w-5 h-5 animate-pulse" />
                      </div>
                      
                      {/* Technical "Scanning" Element */}
                      <motion.div 
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent pointer-events-none"
                      />
                    </motion.div>

                    <div className="flex flex-col items-center gap-2">
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary opacity-60">Neural Engine v4.0</p>
                      <h3 className="text-2xl font-black uppercase tracking-tighter">{activeNode.label}</h3>
                    </div>

                    {/* Metrics HUD */}
                    <div className="flex gap-4 px-6 py-3 glass-card rounded-2xl border-white/5 bg-background/50">
                       {activeNode.metrics.map((metric, i) => (
                         <div key={i} className="flex flex-col items-center px-4 border-r last:border-0 border-border/50">
                           <span className="text-[7px] font-black uppercase tracking-widest text-muted-foreground mb-1">Vector</span>
                           <span className="text-[10px] font-bold text-accent">{metric}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Dynamic Status Bar */}
              <div className="absolute bottom-8 left-8 right-8 p-5 glass-card rounded-[1.5rem] flex items-center justify-between border border-white/5 bg-black/40 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping absolute inset-0" />
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/40">Stream: {activeNode.id}</span>
                    <motion.span 
                      key={activeNode.status}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[10px] font-bold text-green-500 uppercase tracking-widest"
                    >
                      {activeNode.status}
                    </motion.span>
                  </div>
                </div>
                <div className="flex gap-1.5">
                   {[...Array(4)].map((_, i) => (
                     <motion.div 
                      key={i}
                      animate={{ opacity: [0.2, 1, 0.2] }}
                      transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                      className="w-1 h-3 rounded-full bg-primary/40" 
                     />
                   ))}
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
