"use client";

import { motion } from "framer-motion";
import { Laptop, Database, Cpu, Activity, Terminal, ShieldCheck, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const nodes = [
  { id: "frontend", label: "Frontend", icon: Laptop, desc: "Next.js & TypeScript Hub", metrics: ["Next.js 15 High-Performance", "Atomic Component Subsystems", "Responsive Design Logic"] },
  { id: "systems", label: "Systems", icon: Database, desc: "Java & Spring Boot Engine", metrics: ["ACID-Compliant Registry", "Hardened Security Protocols", "Enterprise Architecture"] },
  { id: "mobile", label: "Mobile", icon: Activity, desc: "Flutter & Dart Node", metrics: ["Multi-Platform Core", "Real-time Firebase Sync", "Native Experience UX"] },
  { id: "neural", label: "Neural", icon: Cpu, desc: "AI & Logic Automation", metrics: ["Genkit Orchestration", "Semantic Intent Parsing", "Autonomous Workflows"] }
];

export function About() {
  const [activeNode, setActiveNode] = useState(nodes[0]);

  return (
    <section id="about" className="py-24 sm:py-32 px-6 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="section-label">SYSTEM_ARCHITECT</div>
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-headline font-black leading-[0.9] uppercase">
                Architecting <br /> <span className="text-gradient">Digital Intelligence</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed font-bold uppercase tracking-normal opacity-80 max-w-xl">
                Engineering high-performance ecosystems where robust systems logic meets autonomous AI orchestration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nodes.map((node) => (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "p-8 rounded-[2rem] border-2 text-left transition-all duration-500 group relative overflow-hidden",
                    activeNode.id === node.id 
                      ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/20 scale-[1.02]" 
                      : "bg-card border-border hover:border-primary/40"
                  )}
                >
                  <node.icon className={cn("w-8 h-8 mb-6 transition-transform group-hover:scale-110", activeNode.id === node.id ? "text-primary-foreground" : "text-primary")} />
                  <div className="font-black text-sm uppercase tracking-[0.15em] leading-none">{node.label}</div>
                  <div className={cn("text-[10px] font-black uppercase tracking-widest mt-2.5 opacity-60", activeNode.id === node.id ? "text-primary-foreground" : "text-muted-foreground")}>{node.desc}</div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-16 rounded-[3.5rem] border-2 border-border bg-card/50 backdrop-blur-3xl space-y-12 relative overflow-hidden shadow-4xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 relative z-10">
              <div className="p-6 rounded-3xl bg-primary text-primary-foreground shadow-2xl">
                <activeNode.icon className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl sm:text-5xl font-headline font-black uppercase tracking-tight leading-none">{activeNode.label} Core</h3>
                <p className="text-[11px] font-black text-primary uppercase tracking-[0.5em] opacity-80 flex items-center gap-2">
                  <Terminal className="w-3 h-3" /> NODE_STATUS: OPERATIONAL
                </p>
              </div>
            </div>

            <div className="space-y-5 relative z-10">
              {activeNode.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-[1.5rem] bg-secondary/30 border border-border/50 group/metric hover:border-primary/40 transition-all gap-4">
                  <div className="flex items-center gap-5">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_rgba(var(--primary),0.6)]" />
                    <span className="font-black text-xs sm:text-sm uppercase tracking-[0.1em] leading-none text-foreground">{metric}</span>
                  </div>
                  <Zap className="w-4 h-4 text-primary opacity-20 group-hover/metric:opacity-100 transition-opacity hidden sm:block" />
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-border/60 relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]">SYSTEM_SYNC: ACTIVE</span>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">v4.0.2</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}