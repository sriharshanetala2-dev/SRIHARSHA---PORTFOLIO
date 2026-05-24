"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Database, Cpu, Zap, Fingerprint, Activity, Sparkles } from "lucide-react";
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
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-transparent border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 text-[11px] font-black tracking-[0.5em] text-primary uppercase border border-primary/20 mx-auto lg:mx-0 shadow-xl backdrop-blur-md">
                <Fingerprint className="w-4 h-4" />
                SYSTEM ARCHITECT PROFILE
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black leading-[0.9] tracking-tighter uppercase">
                ARCHITECTING <br className="hidden sm:block" />
                <span className="text-gradient">INTELLIGENCE</span>
              </h2>
              <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-bold max-w-xl mx-auto lg:mx-0 opacity-80 uppercase tracking-tight">
                Engineering digital ecosystems where <span className="text-primary font-black">robust systems logic</span> meets high-performance <span className="text-primary font-black">AI orchestration</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {synthesisNodes.map((node, i) => (
                <motion.button 
                  key={node.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "flex items-center gap-4 p-5 rounded-2xl border transition-all text-left group shadow-lg relative overflow-hidden",
                    activeNode.id === node.id 
                      ? "bg-card border-primary shadow-primary/20 scale-[1.02]" 
                      : "bg-secondary/20 border-border hover:border-primary/30"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl bg-background transition-all duration-700 border border-border/50 relative z-10",
                    node.color,
                    activeNode.id === node.id ? "scale-110 shadow-lg" : "opacity-50"
                  )}>
                    <node.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col min-w-0 relative z-10">
                    <span className="font-black text-[11px] uppercase tracking-[0.3em] leading-none mb-1">{node.label}</span>
                    <span className="text-[11px] text-muted-foreground uppercase tracking-[0.3em] font-black opacity-50 truncate">{node.desc}</span>
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
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.5, ease: "anticipate" }}
                className="w-full"
              >
                <div className="p-8 sm:p-14 rounded-[2.5rem] sm:rounded-[3.5rem] border-2 border-border bg-card/80 backdrop-blur-3xl space-y-12 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
                    <Sparkles className="w-16 h-16 text-primary" />
                  </div>
                  
                  <div className="flex flex-col items-center gap-8 relative z-10">
                    <div className="relative p-10 rounded-full bg-background/50 border border-border shadow-2xl transition-transform duration-700 group-hover:scale-110">
                      <activeNode.icon className={cn("w-20 h-20 sm:w-24 sm:h-24 transition-colors duration-500", activeNode.color)} />
                      <div className="absolute -top-1 -right-1 p-3.5 rounded-2xl bg-primary text-primary-foreground shadow-xl animate-pulse">
                        <Zap className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="text-center space-y-3">
                      <p className="text-[11px] font-black uppercase tracking-[0.6em] text-primary opacity-60">NODE_ACTIVE</p>
                      <h3 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight">{activeNode.label}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 relative z-10">
                    {activeNode.metrics.map((metric, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + (i * 0.1) }}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-6 sm:p-8 rounded-2xl bg-background/40 border border-border shadow-md hover:border-primary/50 transition-all group/metric"
                      >
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground opacity-50 group-hover/metric:text-primary transition-colors">LOGIC_VECTOR</span>
                        <span className="text-sm sm:text-lg font-black text-primary uppercase tracking-widest text-left sm:text-right">{metric}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-10 border-t border-border/50 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-5">
                      <div className="w-4 h-4 rounded-full bg-primary animate-pulse shadow-[0_0_20px_rgba(var(--primary),0.6)]" />
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground/60 leading-none mb-1">NODE_STATUS</span>
                        <span className="text-[11px] font-black text-primary uppercase tracking-widest">{activeNode.status} // SYNCED</span>
                      </div>
                    </div>
                    <Activity className="w-7 h-7 text-primary/30 animate-pulse" />
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