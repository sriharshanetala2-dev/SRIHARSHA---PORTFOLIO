"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Palette, Database, Cpu, Zap, Fingerprint, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const synthesisNodes = [
  { 
    id: "frontend",
    label: "Frontend", 
    icon: Laptop, 
    color: "text-blue-600", 
    desc: "React & Next.js",
    status: "Active",
    metrics: ["Performance: 120fps", "Fluid Orchestration"]
  },
  { 
    id: "fullstack",
    label: "Full Stack", 
    icon: Database, 
    color: "text-indigo-600", 
    desc: "Java & Spring Boot",
    status: "Synced",
    metrics: ["ACID Compliance", "Real-time Data Sync"]
  },
  { 
    id: "uiux",
    label: "Systems Design", 
    icon: Palette, 
    color: "text-purple-600", 
    desc: "Industrial UI/UX",
    status: "Mapped",
    metrics: ["High-Contrast Visuals", "Precise UX Flow"]
  },
  { 
    id: "ai",
    label: "AI Systems", 
    icon: Cpu, 
    color: "text-primary", 
    desc: "Genkit Integration",
    status: "Neural",
    metrics: ["Semantic Parsing", "LLM Integration"]
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
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 text-[11px] font-black tracking-[0.4em] text-primary uppercase border border-primary/20 mx-auto lg:mx-0">
                <Fingerprint className="w-4 h-4" />
                Developer Registry
              </div>
              <h2 className="text-4xl sm:text-6xl font-headline font-black leading-[1.05] tracking-tighter uppercase">
                CODE <br className="hidden sm:block" />
                <span className="text-primary">IDENTITY</span>
              </h2>
              <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-bold max-w-xl mx-auto lg:mx-0 opacity-80 uppercase tracking-widest">
                As a <span className="text-primary font-black">Full Stack Developer</span>, I architect digital ecosystems where high-performance logic meets industrial stability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {synthesisNodes.map((node) => (
                <button 
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "flex items-center gap-4 p-5 rounded-2xl border transition-all text-left group",
                    activeNode.id === node.id 
                      ? "bg-secondary border-primary/40 shadow-xl" 
                      : "bg-secondary/30 border-border/50 hover:border-primary/30"
                  )}
                >
                  <div className={cn(
                    "p-4 rounded-xl bg-background transition-all duration-500 shadow-inner",
                    node.color,
                    activeNode.id === node.id ? "scale-110" : "opacity-40"
                  )}>
                    <node.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-black text-[11px] uppercase tracking-widest leading-none mb-1">{node.label}</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-black opacity-40 truncate">{node.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="w-full"
              >
                <div className="p-8 sm:p-12 rounded-[2.5rem] border-2 border-border/50 bg-secondary/10 space-y-10 relative overflow-hidden shadow-2xl">
                  <div className="flex flex-col items-center gap-6 relative z-10">
                    <div className="relative p-8 rounded-full bg-card border border-border shadow-2xl">
                      <activeNode.icon className={cn("w-16 h-16 transition-colors duration-500", activeNode.color)} />
                      <div className="absolute -top-1 -right-1 p-2.5 rounded-xl bg-primary text-primary-foreground shadow-xl">
                        <Zap className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <p className="text-[11px] font-black uppercase tracking-[0.5em] text-primary opacity-60">Technical Node</p>
                      <h3 className="text-3xl sm:text-5xl font-headline font-black uppercase tracking-tighter">{activeNode.label}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 relative z-10">
                    {activeNode.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center justify-between p-5 rounded-2xl bg-background border border-border shadow-md group hover:border-primary/50 transition-all">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground opacity-40">Vector</span>
                        <span className="text-xs sm:text-sm font-black text-primary uppercase tracking-widest">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-border/50 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40 leading-none mb-1">State</span>
                        <span className="text-xs font-black text-green-600 uppercase tracking-widest">{activeNode.status} Subsystem</span>
                      </div>
                    </div>
                    <Activity className="w-6 h-6 text-green-500/20" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}