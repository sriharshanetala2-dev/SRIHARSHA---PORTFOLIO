"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Database, Cpu, Zap, Fingerprint, Activity, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

const synthesisNodes = [
  { 
    id: "frontend",
    label: "Frontend Core", 
    icon: Laptop, 
    color: "text-blue-500", 
    desc: "React & Next.js Ecosystem",
    status: "Active",
    metrics: ["Hydrated Logic Engine", "Fluid Data Mapping"]
  },
  { 
    id: "fullstack",
    label: "Systems Core", 
    icon: Database, 
    color: "text-indigo-500", 
    desc: "Java & Spring Boot Hub",
    status: "Synced",
    metrics: ["ACID Integrity Locked", "Atomic Operations"]
  },
  { 
    id: "mobile",
    label: "Mobile Core", 
    icon: Activity, 
    color: "text-cyan-500", 
    desc: "Flutter & Dart Node",
    status: "Reactive",
    metrics: ["Multi-Platform Sync", "Hardware Logic Access"]
  },
  { 
    id: "ai",
    label: "Neural Core", 
    icon: Cpu, 
    color: "text-primary", 
    desc: "Genkit & LLM Integration",
    status: "Operational",
    metrics: ["Gemini & Claude Pipelines", "n8n Workflow Automation"]
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
    <section id="about" className="py-24 sm:py-40 px-6 relative overflow-hidden bg-background/50 border-t-2 border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-primary/10 text-[10px] sm:text-xs font-black tracking-[0.5em] text-primary uppercase border-2 border-primary/20 mx-auto lg:mx-0 shadow-2xl backdrop-blur-sm">
                <Fingerprint className="w-5 h-5" />
                ENGINEERING PROFILE
              </div>
              <h2 className="text-4xl sm:text-7xl font-headline font-black leading-[1.0] tracking-tighter uppercase">
                SYSTEM <br className="hidden sm:block" />
                <span className="text-gradient">ARCHITECTURE</span>
              </h2>
              <p className="text-xs sm:text-lg text-muted-foreground leading-relaxed font-bold max-w-xl mx-auto lg:mx-0 opacity-80 uppercase tracking-[0.2em]">
                Architecting digital ecosystems where <span className="text-primary font-black">high-performance logic</span> meets industrial-grade stability and <span className="text-primary font-black">AI intelligence</span>.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {synthesisNodes.map((node) => (
                <button 
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "flex items-center gap-6 p-6 rounded-[2.5rem] border-2 transition-all text-left group shadow-xl",
                    activeNode.id === node.id 
                      ? "bg-card border-primary shadow-primary/20 scale-[1.02]" 
                      : "bg-secondary/40 border-border/50 hover:border-primary/40"
                  )}
                >
                  <div className={cn(
                    "p-4 rounded-2xl bg-background transition-all duration-500 shadow-2xl border border-border/50",
                    node.color,
                    activeNode.id === node.id ? "scale-110 shadow-primary/30" : "opacity-50"
                  )}>
                    <node.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-black text-xs uppercase tracking-widest leading-none mb-2">{node.label}</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-black opacity-60 truncate">{node.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="w-full"
              >
                <div className="p-10 sm:p-20 rounded-[3rem] border-2 border-border bg-card space-y-16 relative overflow-hidden shadow-3xl">
                  <div className="absolute inset-0 data-flow-grid opacity-10 pointer-events-none" />
                  
                  <div className="flex flex-col items-center gap-10 relative z-10">
                    <div className="relative p-10 rounded-full bg-background border-2 border-border shadow-3xl group">
                      <activeNode.icon className={cn("w-16 h-16 sm:w-24 sm:h-24 transition-colors duration-500", activeNode.color)} />
                      <div className="absolute -top-4 -right-4 p-4 rounded-3xl bg-primary text-primary-foreground shadow-3xl animate-bounce">
                        <Zap className="w-7 h-7" />
                      </div>
                    </div>
                    <div className="text-center space-y-4">
                      <p className="text-xs font-black uppercase tracking-[0.8em] text-primary opacity-60">REGISTRY NODE ACTIVE</p>
                      <h3 className="text-3xl sm:text-6xl font-headline font-black uppercase tracking-tighter leading-none">{activeNode.label}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 relative z-10">
                    {activeNode.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center justify-between p-8 rounded-3xl bg-background border-2 border-border shadow-2xl hover:border-primary transition-all group">
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-muted-foreground opacity-50">LOGIC_VECTOR</span>
                        <span className="text-xs sm:text-lg font-black text-primary uppercase tracking-widest">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-12 border-t-2 border-border/50 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-6">
                      <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse shadow-[0_0_30px_rgba(59,130,246,0.8)]" />
                      <div className="flex flex-col">
                        <span className="text-xs font-black uppercase tracking-[0.5em] text-muted-foreground/60 leading-none mb-2">NODE STATUS</span>
                        <span className="text-xs font-black text-blue-500 uppercase tracking-widest">{activeNode.status} // SYNCED</span>
                      </div>
                    </div>
                    <Activity className="w-8 h-8 text-blue-500/30" />
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