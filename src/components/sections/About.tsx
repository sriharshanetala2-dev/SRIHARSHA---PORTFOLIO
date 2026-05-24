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
    color: "text-blue-400", 
    accent: "bg-blue-400/10 border-blue-400/20",
    desc: "Next.js & TypeScript Hub",
    status: "Active",
    metrics: ["Next.js 15 High-Performance", "Atomic Component Subsystems"]
  },
  { 
    id: "systems",
    label: "Systems Core", 
    icon: Database, 
    color: "text-indigo-400", 
    accent: "bg-indigo-400/10 border-indigo-400/20",
    desc: "Java & Spring Boot Engine",
    status: "Synced",
    metrics: ["ACID-Compliant SQL Registry", "Spring Security Hardened"]
  },
  { 
    id: "mobile",
    label: "Mobile Core", 
    icon: Activity, 
    color: "text-purple-400", 
    accent: "bg-purple-400/10 border-purple-400/20",
    desc: "Flutter & Dart Node",
    status: "Reactive",
    metrics: ["Multi-Platform Flutter Core", "Real-time Firebase Sync"]
  },
  { 
    id: "neural",
    label: "Neural Core", 
    icon: Cpu, 
    color: "text-emerald-400", 
    accent: "bg-emerald-400/10 border-emerald-400/20",
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
    <section id="about" className="py-24 sm:py-40 px-6 relative overflow-hidden bg-transparent border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            <div className="space-y-10 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="section-label"
              >
                <Fingerprint className="w-4 h-4" />
                SYSTEM ARCHITECT PROFILE
              </motion.div>
              <h2 className="text-5xl sm:text-7xl lg:text-8xl font-headline font-black leading-[0.85] tracking-tighter uppercase shimmer-text">
                ARCHITECTING <br className="hidden sm:block" />
                INTELLIGENCE
              </h2>
              <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed font-bold max-w-xl mx-auto lg:mx-0 opacity-95 uppercase tracking-tight">
                Engineering digital ecosystems where <span className="text-primary font-black">robust systems logic</span> meets high-performance <span className="text-accent font-black">AI orchestration</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {synthesisNodes.map((node, i) => (
                <motion.button 
                  key={node.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.7 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "flex items-center gap-6 p-7 rounded-[2rem] border transition-all text-left group shadow-2xl relative overflow-hidden",
                    activeNode.id === node.id 
                      ? "bg-card border-primary/50 shadow-primary/20 scale-[1.03]" 
                      : "bg-secondary/15 border-border/50 hover:border-primary/40"
                  )}
                >
                  <div className={cn(
                    "p-5 rounded-2xl bg-background transition-all duration-700 border border-border/50 relative z-10 shadow-xl",
                    node.color,
                    activeNode.id === node.id ? "scale-110 rotate-6 shadow-primary/20" : "opacity-40 group-hover:opacity-100"
                  )}>
                    <node.icon className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col min-w-0 relative z-10">
                    <span className="font-black text-[13px] uppercase tracking-[0.3em] leading-none mb-2">{node.label}</span>
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
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -40 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="w-full"
              >
                <div className="p-12 sm:p-20 rounded-[4rem] border-2 border-border/50 bg-card/40 backdrop-blur-3xl space-y-20 relative overflow-hidden shadow-4xl group">
                  <div className="absolute top-0 right-0 p-16 opacity-10 group-hover:opacity-30 transition-all duration-1000 group-hover:scale-125 group-hover:rotate-12">
                    <Sparkles className="w-28 h-28 text-primary" />
                  </div>
                  
                  <div className="flex flex-col items-center gap-12 relative z-10">
                    <div className={cn("relative p-16 rounded-full bg-background/60 border border-border shadow-3xl transition-all duration-700 group-hover:scale-110 group-hover:shadow-primary/30")}>
                      <activeNode.icon className={cn("w-28 h-28 sm:w-36 sm:h-36 transition-colors duration-700", activeNode.color)} />
                      <div className="absolute -top-3 -right-3 p-5 rounded-3xl bg-primary text-primary-foreground shadow-3xl animate-pulse">
                        <Zap className="w-10 h-10" />
                      </div>
                    </div>
                    <div className="text-center space-y-5">
                      <p className="text-[12px] font-black uppercase tracking-[0.8em] text-primary opacity-70">NODE_STATUS: ACTIVE</p>
                      <h3 className="text-4xl sm:text-6xl font-headline font-black uppercase tracking-tight shimmer-text leading-none">{activeNode.label}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 relative z-10">
                    {activeNode.metrics.map((metric, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + (i * 0.1) }}
                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 p-10 rounded-3xl bg-background/60 border border-border shadow-2xl hover:border-primary/60 transition-all group/metric"
                      >
                        <div className="flex items-center gap-5">
                          <Binary className="w-6 h-6 text-primary opacity-30 group-hover/metric:opacity-100 transition-opacity" />
                          <span className="text-[11px] font-black uppercase tracking-[0.5em] text-muted-foreground opacity-70">LOGIC_VECTOR</span>
                        </div>
                        <span className="text-sm sm:text-2xl font-black text-foreground uppercase tracking-wider text-left sm:text-right leading-tight">{metric}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-16 border-t border-border/50 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-8">
                      <div className="w-6 h-6 rounded-full bg-primary animate-ping opacity-60" />
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black uppercase tracking-[0.6em] text-muted-foreground opacity-60 leading-none mb-3">SYSTEM_SYNC</span>
                        <span className="text-[12px] font-black text-primary uppercase tracking-widest">{activeNode.status} // LATENCY_MINIMAL</span>
                      </div>
                    </div>
                    <Activity className="w-10 h-10 text-primary/40 animate-pulse" />
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