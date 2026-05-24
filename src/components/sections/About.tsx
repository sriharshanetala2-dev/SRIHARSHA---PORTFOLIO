"use client";

import { motion } from "framer-motion";
import { Laptop, Database, Cpu, Activity, CheckCircle2, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const nodes = [
  { id: "frontend", label: "Frontend", icon: Laptop, desc: "Next.js & TypeScript Hub", metrics: ["Next.js 15 Performance", "Atomic Components", "Responsive Logic"] },
  { id: "systems", label: "Systems", icon: Database, desc: "Java & Spring Boot Engine", metrics: ["ACID-Compliant Registry", "Hardened Security", "Enterprise Design"] },
  { id: "mobile", label: "Mobile", icon: Activity, desc: "Flutter & Dart Node", metrics: ["Multi-Platform Core", "Real-time Firebase Sync", "Native Experience"] },
  { id: "neural", label: "Neural", icon: Cpu, desc: "AI & Logic Automation", metrics: ["Genkit Orchestration", "n8n Workflows", "Semantic Parsing"] }
];

export function About() {
  const [activeNode, setActiveNode] = useState(nodes[0]);

  return (
    <section id="about" className="py-32 px-6 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="section-label">SYSTEM_ARCHITECT</div>
              <h2 className="text-4xl sm:text-7xl font-headline font-black leading-[0.9] uppercase">
                Architecting <br /> <span className="text-gradient">Digital Intelligence</span>
              </h2>
            </div>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-70">
              Engineering digital ecosystems where robust systems logic meets high-performance AI orchestration. I focus on building scalable, secure, and intelligent applications.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nodes.map((node) => (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "p-8 rounded-[2rem] border-2 text-left transition-all duration-500 group relative overflow-hidden",
                    activeNode.id === node.id 
                      ? "bg-primary text-primary-foreground border-primary shadow-2xl shadow-primary/20 scale-105" 
                      : "bg-card border-border hover:border-primary/40"
                  )}
                >
                  <node.icon className={cn("w-8 h-8 mb-6 transition-transform group-hover:scale-110", activeNode.id === node.id ? "text-primary-foreground" : "text-primary")} />
                  <div className="font-black text-sm uppercase tracking-widest leading-none">{node.label}</div>
                  <div className={cn("text-[10px] font-black uppercase tracking-widest mt-2 opacity-60", activeNode.id === node.id ? "text-primary-foreground" : "text-muted-foreground")}>{node.desc}</div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="p-12 sm:p-20 rounded-[4rem] border-2 border-border bg-card/50 backdrop-blur-3xl space-y-12 relative overflow-hidden shadow-4xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
            
            <div className="flex items-center gap-6 relative z-10">
              <div className="p-6 rounded-3xl bg-primary text-primary-foreground shadow-2xl">
                <activeNode.icon className="w-10 h-10" />
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl sm:text-5xl font-headline font-black uppercase tracking-tight">{activeNode.label} Core</h3>
                <p className="text-[11px] font-black text-primary uppercase tracking-[0.5em] opacity-80 flex items-center gap-2">
                  <Terminal className="w-3 h-3" /> NODE_STATUS: OPERATIONAL
                </p>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              {activeNode.metrics.map((metric, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-3xl bg-secondary/50 border border-border group/metric hover:border-primary/40 transition-all">
                  <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                  <span className="font-black text-xs sm:text-sm uppercase tracking-widest leading-none">{metric}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-border relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">SYSTEM_SYNC: ACTIVE</span>
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">v4.0.2</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}