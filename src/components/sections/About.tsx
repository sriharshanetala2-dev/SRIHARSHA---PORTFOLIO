"use client";

import { motion } from "framer-motion";
import { Laptop, Database, Cpu, Activity, Terminal, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const nodes = [
  { id: "frontend", label: "Frontend", icon: Laptop, desc: "Next.js & TypeScript Hub", metrics: ["Next.js 15 Core", "Atomic Components", "Responsive Logic"] },
  { id: "systems", label: "Systems", icon: Database, desc: "Java & Spring Boot Engine", metrics: ["ACID-Compliant Registry", "Hardened Security", "Enterprise Design"] },
  { id: "mobile", label: "Mobile", icon: Activity, desc: "Flutter & Dart Node", metrics: ["Multi-Platform Core", "Real-time Sync", "Native Experience"] },
  { id: "neural", label: "Neural", icon: Cpu, desc: "AI & Logic Automation", metrics: ["Genkit Orchestration", "Semantic Intent", "Autonomous Flows"] }
];

export function About() {
  const [activeNode, setActiveNode] = useState(nodes[0]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-8 border-t border-border bg-background relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="section-label">FULL_STACK_DEVELOPER_CORE</div>
              <h2 className="text-3xl sm:text-6xl font-headline font-black leading-tight uppercase">
                Engineering <br className="hidden sm:block" /> <span className="text-gradient">Digital Intelligence</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-bold uppercase tracking-normal opacity-80 max-w-xl">
                Engineering high-performance ecosystems where robust systems logic meets autonomous AI orchestration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {nodes.map((node) => (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "p-6 rounded-2xl border-2 text-left transition-all duration-300 group relative overflow-hidden",
                    activeNode.id === node.id 
                      ? "bg-primary text-primary-foreground border-primary shadow-xl scale-[1.02]" 
                      : "bg-card border-border hover:border-primary/40 shadow-md"
                  )}
                >
                  <node.icon className={cn("w-6 h-6 mb-4", activeNode.id === node.id ? "text-primary-foreground" : "text-primary")} />
                  <div className="font-black text-sm uppercase tracking-[0.1em]">{node.label}</div>
                  <div className={cn("text-[10px] font-black uppercase tracking-widest mt-1 opacity-60", activeNode.id === node.id ? "text-primary-foreground" : "text-muted-foreground")}>{node.desc}</div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, scale: 0.98, x: 15 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="p-8 sm:p-12 rounded-[2.5rem] border-2 border-border bg-card/40 backdrop-blur-3xl space-y-10 relative overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-50" />
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
              <div className="p-5 rounded-xl bg-primary text-primary-foreground shadow-xl">
                <activeNode.icon className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight">{activeNode.label} Core</h3>
                <p className="text-[12px] font-black text-primary uppercase tracking-[0.4em] flex items-center gap-2">
                  <Terminal className="w-4 h-4" /> NODE_STATUS: ACTIVE
                </p>
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              {activeNode.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-[1.25rem] bg-background/50 border border-border/50 group/metric hover:border-primary/40 transition-all gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    <span className="font-black text-xs sm:text-sm uppercase tracking-[0.1em] text-foreground">{metric}</span>
                  </div>
                  <Zap className="w-4 h-4 text-primary opacity-30 group-hover/metric:opacity-100 transition-opacity hidden sm:block" />
                </div>
              ))}
            </div>

            <div className="pt-8 border-t border-border/50 relative z-10 flex items-center justify-between">
              <span className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em]">SYSTEM_SYNC: ACTIVE</span>
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">v4.0.2</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}