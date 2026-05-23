"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Palette, Database, Cpu, Zap, Fingerprint, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

const synthesisNodes = [
  { 
    id: "frontend",
    label: "Frontend Core", 
    icon: Laptop, 
    color: "text-emerald-500", 
    desc: "React & Next.js Ecosystem",
    status: "Active",
    metrics: ["120fps Logic Engine", "Fluid Data Mapping"]
  },
  { 
    id: "fullstack",
    label: "Systems Core", 
    icon: Database, 
    color: "text-blue-500", 
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
    desc: "Genkit AI Integration",
    status: "Active",
    metrics: ["Semantic Intent Parsing", "LLM Native Pipelines"]
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
    <section id="about" className="py-24 sm:py-40 px-4 sm:px-6 relative overflow-hidden bg-background/50 border-t-2 border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-primary/10 text-[11px] font-black tracking-[0.5em] text-primary uppercase border-2 border-primary/20 mx-auto lg:mx-0 shadow-lg">
                <Fingerprint className="w-5 h-5" />
                Engineering Profile
              </div>
              <h2 className="text-4xl sm:text-7xl font-headline font-black leading-[1.05] tracking-tighter uppercase">
                SYSTEM <br className="hidden sm:block" />
                <span className="text-gradient">ARCHITECTURE</span>
              </h2>
              <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed font-bold max-w-xl mx-auto lg:mx-0 opacity-80 uppercase tracking-widest">
                Architecting digital ecosystems where <span className="text-primary font-black">high-performance logic</span> meets industrial reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {synthesisNodes.map((node) => (
                <button 
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "flex items-center gap-5 p-6 rounded-[2rem] border-2 transition-all text-left group",
                    activeNode.id === node.id 
                      ? "bg-card border-primary/50 shadow-2xl scale-[1.02]" 
                      : "bg-secondary/30 border-border/50 hover:border-primary/30"
                  )}
                >
                  <div className={cn(
                    "p-4 rounded-2xl bg-background transition-all duration-500 shadow-xl",
                    node.color,
                    activeNode.id === node.id ? "scale-110 shadow-primary/20" : "opacity-40"
                  )}>
                    <node.icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-black text-[12px] uppercase tracking-widest leading-none mb-1.5">{node.label}</span>
                    <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-black opacity-50 truncate">{node.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full"
              >
                <div className="p-10 sm:p-16 rounded-[3rem] border-2 border-border bg-card space-y-12 relative overflow-hidden shadow-3xl">
                  <div className="flex flex-col items-center gap-8 relative z-10">
                    <div className="relative p-8 rounded-full bg-background border-2 border-border shadow-2xl">
                      <activeNode.icon className={cn("w-16 h-16 sm:w-20 sm:h-20 transition-colors duration-500", activeNode.color)} />
                      <div className="absolute -top-2 -right-2 p-3 rounded-2xl bg-primary text-primary-foreground shadow-2xl">
                        <Zap className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="text-center space-y-3">
                      <p className="text-[11px] font-black uppercase tracking-[0.6em] text-primary opacity-60">System Registry Node</p>
                      <h3 className="text-3xl sm:text-6xl font-headline font-black uppercase tracking-tighter">{activeNode.label}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 relative z-10">
                    {activeNode.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-background border-2 border-border shadow-xl group hover:border-primary transition-all">
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-muted-foreground opacity-40">Logic Vector</span>
                        <span className="text-[12px] sm:text-base font-black text-primary uppercase tracking-widest">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-10 border-t-2 border-border/50 flex items-center justify-between relative z-10">
                    <div className="flex items-center gap-5">
                      <div className="w-3.5 h-3.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.6)]" />
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/50 leading-none mb-1.5">Node Status</span>
                        <span className="text-[12px] font-black text-green-500 uppercase tracking-widest">{activeNode.status} Online</span>
                      </div>
                    </div>
                    <Activity className="w-7 h-7 text-green-500/20" />
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