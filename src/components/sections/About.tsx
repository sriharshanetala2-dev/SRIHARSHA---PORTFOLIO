"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Palette, Database, Cpu, BrainCircuit, Activity } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { cn } from "@/lib/utils";

const synthesisNodes = [
  { 
    id: "frontend",
    label: "Frontend", 
    icon: Laptop, 
    color: "text-blue-500", 
    desc: "Pixel-perfect builds",
    image: "https://picsum.photos/seed/sri_front_v1/800/800",
    status: "Rendering Interface..."
  },
  { 
    id: "fullstack",
    label: "Full Stack", 
    icon: Database, 
    color: "text-indigo-500", 
    desc: "Real-time logic sync",
    image: "https://picsum.photos/seed/sri_stack_v2/800/800",
    status: "Synchronizing Data..."
  },
  { 
    id: "uiux",
    label: "UI Design", 
    icon: Palette, 
    color: "text-purple-500", 
    desc: "Interaction design",
    image: "https://picsum.photos/seed/sri_ui_v3/800/800",
    status: "Architecting Flows..."
  },
  { 
    id: "ai",
    label: "AI Systems", 
    icon: Cpu, 
    color: "text-orange-500", 
    desc: "Neural orchestration",
    image: "https://picsum.photos/seed/sri_ai_v4/800/800",
    status: "Optimizing Models..."
  }
];

export function About() {
  const [activeNode, setActiveNode] = useState(synthesisNodes[0]);

  return (
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-black leading-[1.1] tracking-tighter uppercase shimmer-text">
                Bridging Logic <br />
                <span className="text-gradient">& Experience</span>
              </h2>
            </div>

            <div className="space-y-8 text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
              <p>
                As a <span className="text-primary font-bold">B.Sc Computer Science graduate</span>, I view software as a medium for structured creativity. My approach focuses on architectural precision and pixel-perfect choreography.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {synthesisNodes.map((node) => (
                <button 
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  onMouseEnter={() => setActiveNode(node)}
                  className={cn(
                    "flex items-center gap-4 p-5 rounded-2xl border transition-all shadow-sm text-left group relative overflow-hidden",
                    activeNode.id === node.id 
                      ? "bg-secondary/40 border-primary shadow-lg ring-1 ring-primary/20" 
                      : "bg-secondary/20 border-border/50 hover:border-primary/50"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl bg-background transition-transform shadow-inner",
                    node.color,
                    activeNode.id === node.id && "scale-110"
                  )}>
                    <node.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-[10px] uppercase tracking-widest">{node.label}</span>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-[0.1em] font-bold">{node.desc}</span>
                  </div>
                  
                  {activeNode.id === node.id && (
                    <motion.div 
                      layoutId="active-pill"
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]"
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-border shadow-3xl bg-secondary/10 data-flow-grid group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 0.6, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image 
                    src={activeNode.image}
                    alt={activeNode.label}
                    fill
                    className="object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"
                    data-ai-hint="data flow"
                  />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-3/4 h-3/4 border-2 border-primary/20 rounded-full animate-pulse flex items-center justify-center">
                    <div className="w-2/3 h-2/3 border border-primary/10 rounded-full animate-ping" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent)]" />
                    <Activity className="w-16 h-16 text-primary absolute opacity-40 animate-pulse" />
                 </div>
                 
                 {[...Array(6)].map((_, i) => (
                   <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -20, 0],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{ 
                      duration: 3 + i, 
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    className="absolute w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary),0.8)]"
                    style={{
                      left: `${20 + (i * 12)}%`,
                      top: `${30 + (i * 8)}%`
                    }}
                   />
                 ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 p-5 glass-card rounded-2xl flex items-center gap-4 border border-white/5 min-w-[200px]">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping absolute inset-0" />
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black uppercase tracking-[0.4em]">Logic Stream: {activeNode.label}</span>
                  <motion.span 
                    key={activeNode.status}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-[10px] font-bold text-green-500 uppercase tracking-widest"
                  >
                    {activeNode.status}
                  </motion.span>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}