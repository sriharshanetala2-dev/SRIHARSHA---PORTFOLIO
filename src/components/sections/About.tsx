"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Database, Cpu, Zap, Fingerprint, Activity, Sparkles, Binary } from "lucide-react";
import { cn } from "@/lib/utils";

const synthesisNodes = [
  { 
    id: "frontend",
    label: "Frontend Core", 
    icon: Laptop, 
    color: "text-blue-500", 
    desc: "Next.js & TypeScript Hub",
    status: "Active",
    metrics: ["Next.js 15 High-Performance", "Atomic Component Subsystems"]
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
    color: "text-purple-500", 
    desc: "Flutter & Dart Node",
    status: "Reactive",
    metrics: ["Multi-Platform Flutter Core", "Real-time Firebase Sync"]
  },
  { 
    id: "neural",
    label: "Neural Core", 
    icon: Cpu, 
    color: "text-emerald-500", 
    desc: "AI & Logic Automation",
    status: "Operational",
    metrics: ["Genkit Logic Orchestration", "n8n Autonomous Workflows"]
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
    <section id="about" className="py-20 sm:py-32 px-6 relative overflow-hidden bg-transparent border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="section-label"
              >
                <Fingerprint className="w-3.5 h-3.5" />
                SYSTEM ARCHITECT PROFILE
              </motion.div>
              <h2 className="text-4xl sm:text-6xl font-black leading-tight shimmer-text">
                ARCHITECTING <br className="hidden sm:block" />
                INTELLIGENCE
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground font-bold uppercase tracking-tight leading-relaxed opacity-90 max-w-xl mx-auto lg:mx-0">
                Engineering digital ecosystems where <span className="text-primary">robust systems logic</span> meets high-performance <span className="text-accent">AI orchestration</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {synthesisNodes.map((node, i) => (
                <button 
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "flex items-center gap-4 p-5 rounded-2xl border transition-all text-left group relative overflow-hidden",
                    activeNode.id === node.id 
                      ? "bg-card border-primary/40 shadow-xl scale-[1.02]" 
                      : "bg-secondary/10 border-border/40 hover:border-primary/20"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-lg bg-background border border-border/50 transition-all",
                    node.color,
                    activeNode.id === node.id ? "scale-110 shadow-md" : "opacity-40"
                  )}>
                    <node.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-black text-[11px] uppercase tracking-widest leading-none mb-1">{node.label}</span>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-wider font-black opacity-60 truncate">{node.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="relative w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="p-8 sm:p-10 rounded-3xl border border-border/50 bg-card/60 backdrop-blur-xl space-y-8 relative overflow-hidden shadow-2xl group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-all duration-1000">
                    <Sparkles className="w-16 h-16 text-primary" />
                  </div>
                  
                  <div className="flex flex-col items-center gap-6 relative z-10">
                    <div className="relative p-6 sm:p-8 rounded-full bg-background border border-border shadow-inner">
                      <activeNode.icon className={cn("w-12 h-12 sm:w-16 sm:h-16 transition-colors duration-500", activeNode.color)} />
                      <div className="absolute -top-1 -right-1 p-2 rounded-lg bg-primary text-primary-foreground shadow-lg animate-pulse">
                        <Zap className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-primary/60">NODE_STATUS: ACTIVE</p>
                      <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight shimmer-text">{activeNode.label}</h3>
                    </div>
                  </div>

                  <div className="space-y-3 relative z-10">
                    {activeNode.metrics.map((metric, i) => (
                      <div 
                        key={i} 
                        className="flex items-center justify-between p-4 rounded-xl bg-background/40 border border-border/50 group/metric"
                      >
                        <div className="flex items-center gap-3">
                          <Binary className="w-4 h-4 text-primary opacity-30" />
                          <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">LOGIC_VECTOR</span>
                        </div>
                        <span className="text-xs sm:text-sm font-black text-foreground uppercase tracking-wide text-right">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border/50 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-primary animate-ping opacity-30" />
                      <div className="flex flex-col">
                        <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground leading-none mb-1">SYSTEM_SYNC</span>
                        <span className="text-[9px] font-black text-primary uppercase tracking-[0.2em]">{activeNode.status} // LATENCY_MINIMAL</span>
                      </div>
                    </div>
                    <Activity className="w-6 h-6 text-primary/20 animate-pulse" />
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