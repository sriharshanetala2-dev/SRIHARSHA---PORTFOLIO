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
    color: "text-cyan-400", 
    desc: "Next.js & TypeScript Hub",
    status: "Active",
    metrics: ["High-Performance Next.js 15", "Atomic Component Logic"]
  },
  { 
    id: "systems",
    label: "Systems Core", 
    icon: Database, 
    color: "text-blue-400", 
    desc: "Java & Spring Boot Engine",
    status: "Synced",
    metrics: ["ACID-Compliant SQL Registry", "Spring Security Hardened"]
  },
  { 
    id: "mobile",
    label: "Mobile Core", 
    icon: Activity, 
    color: "text-purple-400", 
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
    <section id="about" className="py-24 sm:py-40 px-6 relative overflow-hidden bg-transparent border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-8 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="section-label"
              >
                <Fingerprint className="w-4 h-4" />
                SYSTEM ARCHITECT PROFILE
              </motion.div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-headline font-black leading-[0.85] tracking-tighter uppercase shimmer-text">
                ARCHITECTING <br className="hidden sm:block" />
                INTELLIGENCE
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed font-bold max-w-xl mx-auto lg:mx-0 opacity-90 uppercase tracking-tight">
                Engineering digital ecosystems where <span className="text-primary font-black">robust systems logic</span> meets high-performance <span className="text-primary font-black">AI orchestration</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {synthesisNodes.map((node, i) => (
                <motion.button 
                  key={node.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "flex items-center gap-5 p-6 rounded-3xl border transition-all text-left group shadow-xl relative overflow-hidden",
                    activeNode.id === node.id 
                      ? "bg-card border-primary shadow-primary/20 scale-[1.03]" 
                      : "bg-secondary/20 border-border hover:border-primary/40"
                  )}
                >
                  <div className={cn(
                    "p-4 rounded-2xl bg-background transition-all duration-700 border border-border/50 relative z-10 shadow-lg",
                    node.color,
                    activeNode.id === node.id ? "scale-110 rotate-12 shadow-primary/10" : "opacity-40 group-hover:opacity-100"
                  )}>
                    <node.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col min-w-0 relative z-10">
                    <span className="font-black text-[12px] uppercase tracking-[0.2em] leading-none mb-2">{node.label}</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black opacity-60 truncate">{node.desc}</span>
                  </div>
                  {activeNode.id === node.id && (
                    <motion.div layoutId="node-glow" className="absolute inset-0 bg-primary/5 pointer-events-none" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -30 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="p-10 sm:p-16 rounded-[3rem] sm:rounded-[4rem] border-2 border-border bg-card/40 backdrop-blur-3xl space-y-16 relative overflow-hidden shadow-3xl group">
                  <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-30 transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12">
                    <Sparkles className="w-24 h-24 text-primary" />
                  </div>
                  
                  <div className="flex flex-col items-center gap-10 relative z-10">
                    <div className="relative p-12 rounded-full bg-background/50 border border-border shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:shadow-primary/20">
                      <activeNode.icon className={cn("w-24 h-24 sm:w-32 sm:h-32 transition-colors duration-700", activeNode.color)} />
                      <div className="absolute -top-2 -right-2 p-4 rounded-[1.5rem] bg-primary text-primary-foreground shadow-2xl animate-pulse">
                        <Zap className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="text-center space-y-4">
                      <p className="text-[12px] font-black uppercase tracking-[0.6em] text-primary opacity-60">NODE_STATUS: ACTIVE</p>
                      <h3 className="text-3xl sm:text-5xl font-headline font-black uppercase tracking-tight shimmer-text">{activeNode.label}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 relative z-10">
                    {activeNode.metrics.map((metric, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-8 rounded-3xl bg-background/50 border border-border shadow-xl hover:border-primary/50 transition-all group/metric"
                      >
                        <div className="flex items-center gap-4">
                          <Binary className="w-5 h-5 text-primary opacity-20 group-hover/metric:opacity-100 transition-opacity" />
                          <span className="text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground opacity-60">LOGIC_VECTOR</span>
                        </div>
                        <span className="text-sm sm:text-xl font-black text-foreground uppercase tracking-wider text-left sm:text-right">{metric}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-12 border-t border-border/50 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-6">
                      <div className="w-5 h-5 rounded-full bg-primary animate-ping opacity-70" />
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground/60 leading-none mb-2">OS_SYNC</span>
                        <span className="text-[11px] font-black text-primary uppercase tracking-widest">{activeNode.status} // LATENCY_MINIMAL</span>
                      </div>
                    </div>
                    <Activity className="w-8 h-8 text-primary/30 animate-pulse" />
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