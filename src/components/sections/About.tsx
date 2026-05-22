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
    color: "text-blue-500", 
    desc: "React & Next.js",
    status: "Active",
    metrics: ["Performance: 120fps", "Modern Orchestration"]
  },
  { 
    id: "fullstack",
    label: "Full Stack", 
    icon: Database, 
    color: "text-indigo-500", 
    desc: "Java & Spring Boot",
    status: "Synced",
    metrics: ["ACID Compliance", "Real-time Data"]
  },
  { 
    id: "uiux",
    label: "Systems Design", 
    icon: Palette, 
    color: "text-purple-500", 
    desc: "UI Engineering",
    status: "Mapped",
    metrics: ["Industrial Visuals", "Precise UX"]
  },
  { 
    id: "ai",
    label: "AI Systems", 
    icon: Cpu, 
    color: "text-orange-500", 
    desc: "Genkit AI Tools",
    status: "Neural",
    metrics: ["LLM Integration", "Semantic Parsing"]
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
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 sm:space-y-12"
          >
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 rounded-full bg-primary/10 text-[9px] sm:text-[10px] font-black tracking-widest text-primary uppercase border border-primary/20 mx-auto lg:mx-0">
                <Fingerprint className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                Developer Registry
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-headline font-black leading-[1.1] tracking-tighter uppercase">
                CODE <br className="hidden sm:block" />
                <span className="text-primary">IDENTITY</span>
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed font-bold max-w-xl mx-auto lg:mx-0 opacity-80 uppercase tracking-widest">
                As a <span className="text-primary font-black">Full Stack Developer</span>, I build digital ecosystems where high-performance engineering logic meets industrial-grade stability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {synthesisNodes.map((node) => (
                <button 
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl border transition-all text-left group",
                    activeNode.id === node.id 
                      ? "bg-secondary border-primary/40 shadow-md" 
                      : "bg-secondary/20 border-border/50 hover:border-primary/30"
                  )}
                >
                  <div className={cn(
                    "p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-background transition-all duration-500",
                    node.color,
                    activeNode.id === node.id ? "scale-105 shadow-sm" : "opacity-30"
                  )}>
                    <node.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-black text-[9px] sm:text-[10px] uppercase tracking-widest">{node.label}</span>
                    <span className="text-[8px] sm:text-[9px] text-muted-foreground uppercase tracking-wider font-black opacity-50 truncate">{node.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="relative pt-8 lg:pt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="p-6 sm:p-10 rounded-2xl sm:rounded-[2rem] border border-border/50 bg-secondary/5 space-y-8 sm:space-y-10 relative overflow-hidden shadow-xl">
                  <div className="flex flex-col items-center gap-4 sm:gap-6 relative z-10">
                    <div className="relative p-6 sm:p-10 rounded-full bg-card border border-border shadow-lg">
                      <activeNode.icon className={cn("w-10 h-10 sm:w-12 sm:h-12 transition-colors duration-500", activeNode.color)} />
                      <div className="absolute -top-1 -right-1 p-1.5 sm:p-2 rounded-lg bg-primary text-primary-foreground shadow-md">
                        <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>
                    </div>
                    <div className="text-center space-y-1">
                      <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-primary opacity-60">Technical Registry</p>
                      <h3 className="text-2xl sm:text-3xl font-headline font-black uppercase tracking-tighter">{activeNode.label}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:gap-3 relative z-10">
                    {activeNode.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl bg-background border border-border shadow-sm">
                        <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-muted-foreground opacity-40">Metric</span>
                        <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-black text-primary uppercase tracking-wider text-right">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 sm:pt-6 border-t border-border/50 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-green-500 animate-pulse" />
                      <div className="flex flex-col">
                        <span className="text-[8px] font-black uppercase tracking-widest text-muted-foreground/40 leading-none mb-1">Status</span>
                        <span className="text-[9px] sm:text-[10px] font-black text-green-600 uppercase tracking-widest">{activeNode.status} Node</span>
                      </div>
                    </div>
                    <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-green-500/30" />
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