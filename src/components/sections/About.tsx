"use client";

import { motion } from "framer-motion";
import { Laptop, Database, Cpu, Activity, Terminal, Zap } from "lucide-react";
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

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-8 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="section-label">FULL_STACK_DEVELOPER_CORE</div>
              <h2 className="text-4xl sm:text-6xl font-headline font-black leading-tight uppercase">
                Architecting <br className="hidden sm:block" /> <span className="text-gradient">Digital Intelligence</span>
              </h2>
              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed font-bold uppercase tracking-normal opacity-80 max-w-xl">
                Engineering high-performance ecosystems where robust systems logic meets autonomous AI orchestration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {nodes.map((node) => (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "p-8 rounded-3xl border-2 text-left transition-all duration-300 group relative overflow-hidden",
                    activeNode.id === node.id 
                      ? "bg-primary text-primary-foreground border-primary shadow-2xl scale-[1.03]" 
                      : "bg-card border-border hover:border-primary/40 shadow-lg"
                  )}
                >
                  <node.icon className={cn("w-7 h-7 mb-5", activeNode.id === node.id ? "text-primary-foreground" : "text-primary")} />
                  <div className="font-black text-sm uppercase tracking-[0.1em]">{node.label}</div>
                  <div className={cn("text-[11px] font-black uppercase tracking-widest mt-2 opacity-60", activeNode.id === node.id ? "text-primary-foreground" : "text-muted-foreground")}>{node.desc}</div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="p-10 sm:p-14 rounded-[3rem] border-2 border-border bg-card/40 backdrop-blur-3xl space-y-12 relative overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 relative z-10">
              <div className="p-6 rounded-2xl bg-primary text-primary-foreground shadow-2xl">
                <activeNode.icon className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl sm:text-5xl font-headline font-black uppercase tracking-tight">{activeNode.label} Core</h3>
                <p className="text-[12px] font-black text-primary uppercase tracking-[0.5em] flex items-center gap-3">
                  <Terminal className="w-4 h-4" /> NODE_STATUS: ACTIVE
                </p>
              </div>
            </div>

            <div className="space-y-5 relative z-10">
              {activeNode.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-7 rounded-[1.5rem] bg-background/50 border border-border/50 group/metric hover:border-primary/40 transition-all gap-5">
                  <div className="flex items-center gap-5">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="font-black text-xs sm:text-sm uppercase tracking-[0.1em] text-foreground">{metric}</span>
                  </div>
                  <Zap className="w-4 h-4 text-primary opacity-30 group-hover/metric:opacity-100 transition-opacity hidden sm:block" />
                </div>
              ))}
            </div>

            <div className="pt-10 border-t border-border/50 relative z-10 flex items-center justify-between">
              <span className="text-[11px] font-black text-muted-foreground uppercase tracking-[0.4em]">SYSTEM_SYNC: ACTIVE</span>
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.4em]">v4.0.2</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}