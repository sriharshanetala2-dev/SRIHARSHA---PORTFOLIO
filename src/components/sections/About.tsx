
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Database, Cpu, Zap, Fingerprint, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const synthesisNodes = [
  { 
    id: "frontend",
    label: "Frontend Core", 
    icon: Laptop, 
    color: "text-blue-500", 
    desc: "Next.js & TypeScript Hub",
    status: "Active",
    metrics: ["High-Performance Next.js 15", "Atomic Component Logic"]
  },
  { 
    id: "systems",
    label: "Systems Core", 
    icon: Database, 
    color: "text-indigo-500", 
    desc: "Java & Spring Boot Engine",
    status: "Synced",
    metrics: ["ACID-Compliant SQL Registry", "Spring Security Hardened"]
  },
  { 
    id: "mobile",
    label: "Mobile Core", 
    icon: Activity, 
    color: "text-cyan-500", 
    desc: "Flutter & Dart Node",
    status: "Reactive",
    metrics: ["Multi-Platform Flutter Core", "Real-time Firebase Sync"]
  },
  { 
    id: "neural",
    label: "Neural Core", 
    icon: Cpu, 
    color: "text-primary", 
    desc: "AI & Logic Automation",
    status: "Operational",
    metrics: ["Gemini 2.0 & Claude 3.5", "n8n Workflow Orchestration"]
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
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-background/50 border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 text-[10px] font-black tracking-[0.4em] text-primary uppercase border border-primary/20 mx-auto lg:mx-0 shadow-lg backdrop-blur-sm">
                <Fingerprint className="w-4 h-4" />
                SYSTEM ARCHITECT PROFILE
              </div>
              <h2 className="text-3xl sm:text-6xl font-headline font-black leading-[1.0] tracking-tighter uppercase">
                ARCHITECTING <br className="hidden sm:block" />
                <span className="text-gradient">INTELLIGENCE</span>
              </h2>
              <p className="text-xs sm:text-lg text-muted-foreground leading-relaxed font-bold max-w-xl mx-auto lg:mx-0 opacity-80 uppercase tracking-tight">
                Engineering digital ecosystems where <span className="text-primary font-black">robust systems logic</span> meets high-performance <span className="text-primary font-black">AI orchestration</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {synthesisNodes.map((node) => (
                <button 
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "flex items-center gap-4 p-5 rounded-2xl border transition-all text-left group shadow-lg",
                    activeNode.id === node.id 
                      ? "bg-card border-primary shadow-primary/10 scale-[1.01]" 
                      : "bg-secondary/20 border-border hover:border-primary/30"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl bg-background transition-all duration-500 border border-border/50",
                    node.color,
                    activeNode.id === node.id ? "scale-105 shadow-md" : "opacity-50"
                  )}>
                    <node.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-black text-[10px] uppercase tracking-widest leading-none mb-1">{node.label}</span>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-black opacity-50 truncate">{node.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="p-8 sm:p-14 rounded-[2rem] sm:rounded-[2.5rem] border-2 border-border bg-card space-y-10 sm:space-y-12 relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 neural-grid opacity-[0.03] pointer-events-none" />
                  
                  <div className="flex flex-col items-center gap-6 relative z-10">
                    <div className="relative p-8 rounded-full bg-background border border-border shadow-xl group">
                      <activeNode.icon className={cn("w-16 h-16 sm:w-20 sm:h-20 transition-colors duration-500", activeNode.color)} />
                      <div className="absolute -top-1 -right-1 p-3 rounded-2xl bg-primary text-primary-foreground shadow-lg animate-pulse">
                        <Zap className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <p className="text-[9px] font-black uppercase tracking-[0.6em] text-primary opacity-50">NODE_ACTIVE</p>
                      <h3 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight">{activeNode.label}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-3 relative z-10">
                    {activeNode.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-5 sm:p-7 rounded-2xl bg-background border border-border shadow-md hover:border-primary/50 transition-all group">
                        <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground opacity-40">LOGIC_VECTOR</span>
                        <span className="text-[10px] sm:text-base font-black text-primary uppercase tracking-widest text-left sm:text-right">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-border/50 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                      <div className="flex flex-col">
                        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-muted-foreground/50 leading-none mb-1">NODE_STATUS</span>
                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">{activeNode.status} // SYNCED</span>
                      </div>
                    </div>
                    <Activity className="w-6 h-6 text-primary/20" />
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
