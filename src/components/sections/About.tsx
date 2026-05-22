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
    status: "Compiling UI",
    metrics: ["120fps Performance", "Modern Orchestration", "Fluid Logic"]
  },
  { 
    id: "fullstack",
    label: "Full Stack", 
    icon: Database, 
    color: "text-indigo-500", 
    desc: "Java & Spring Boot",
    status: "Syncing Systems",
    metrics: ["ACID Compliance", "Real-time Data", "Secure Core"]
  },
  { 
    id: "uiux",
    label: "Systems Design", 
    icon: Palette, 
    color: "text-purple-500", 
    desc: "UI Engineering",
    status: "Mapping Logic",
    metrics: ["Scalable CSS", "Precise UX", "Industrial Visuals"]
  },
  { 
    id: "ai",
    label: "AI Systems", 
    icon: Cpu, 
    color: "text-orange-500", 
    desc: "Genkit AI Tools",
    status: "Training Node",
    metrics: ["LLM Integration", "Semantic Logic", "Tool Chaining"]
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
    <section id="about" className="py-24 md:py-40 px-6 relative overflow-hidden bg-background border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 text-[10px] font-black tracking-[0.4em] text-primary uppercase border border-primary/20">
                <Fingerprint className="w-4 h-4" />
                Developer Registry
              </div>
              <h2 className="text-4xl sm:text-7xl font-headline font-black leading-[1] tracking-tighter uppercase">
                CODE <br className="hidden sm:block" />
                <span className="text-gradient">IDENTITY</span>
              </h2>
              <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-bold max-w-xl mx-auto lg:mx-0 opacity-80 uppercase tracking-widest">
                As a <span className="text-primary font-black">Full Stack Developer</span>, I build digital ecosystems where high-performance engineering logic meets industrial-grade stability.
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
                      ? "bg-secondary border-primary/40 shadow-sm" 
                      : "bg-secondary/20 border-white/5 hover:border-primary/30"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl bg-background transition-all duration-500",
                    node.color,
                    activeNode.id === node.id ? "scale-110 shadow-sm" : "opacity-30"
                  )}>
                    <node.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-black text-[10px] uppercase tracking-widest">{node.label}</span>
                    <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-black opacity-40 truncate">{node.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <div className="p-10 rounded-[2.5rem] border border-border/50 bg-secondary/5 space-y-12">
                  <div className="flex flex-col items-center gap-8">
                    <div className="relative p-12 rounded-full bg-card border border-border shadow-xl">
                      <activeNode.icon className={cn("w-20 h-20 transition-colors duration-500", activeNode.color)} />
                      <div className="absolute -top-2 -right-2 p-3 rounded-xl bg-primary text-primary-foreground shadow-lg">
                        <Zap className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="text-center space-y-2">
                      <p className="text-[9px] font-black uppercase tracking-[0.6em] text-primary">Active Logic Node</p>
                      <h3 className="text-3xl sm:text-5xl font-headline font-black uppercase tracking-tighter">{activeNode.label}</h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {activeNode.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center justify-between p-5 rounded-xl bg-background border border-border">
                        <span className="text-[9px] font-black uppercase tracking-[0.5em] text-muted-foreground opacity-50">Technical Vector</span>
                        <span className="text-[11px] font-black text-primary uppercase tracking-widest">{metric}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-border/50 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <div className="flex flex-col">
                        <span className="text-[8px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">Status Registry</span>
                        <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">{activeNode.status}</span>
                      </div>
                    </div>
                    <Activity className="w-4 h-4 text-green-500/40" />
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