"use client";

import { motion } from "framer-motion";
import { Laptop, Database, Cpu, Activity, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

const nodes = [
  { id: "frontend", label: "Frontend", icon: Laptop, desc: "Next.js & TypeScript Hub", metrics: ["Next.js 15 Performance", "Atomic Components"] },
  { id: "systems", label: "Systems", icon: Database, desc: "Java & Spring Boot Engine", metrics: ["ACID-Compliant Registry", "Hardened Security"] },
  { id: "mobile", label: "Mobile", icon: Activity, desc: "Flutter & Dart Node", metrics: ["Multi-Platform Core", "Real-time Firebase Sync"] },
  { id: "neural", label: "Neural", icon: Cpu, desc: "AI & Logic Automation", metrics: ["Genkit Orchestration", "n8n Workflows"] }
];

export function About() {
  const [activeNode, setActiveNode] = useState(nodes[0]);

  return (
    <section id="about" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="section-label">SYSTEM ARCHITECT</div>
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
              Architecting <br /> Digital Intelligence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Engineering digital ecosystems where robust systems logic meets high-performance AI orchestration. I focus on building scalable, secure, and intelligent applications.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {nodes.map((node) => (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={cn(
                    "p-6 rounded-2xl border text-left transition-all",
                    activeNode.id === node.id ? "bg-primary/5 border-primary" : "bg-card border-border hover:border-primary/20"
                  )}
                >
                  <node.icon className={cn("w-6 h-6 mb-4", activeNode.id === node.id ? "text-primary" : "text-muted-foreground")} />
                  <div className="font-bold text-sm uppercase tracking-wider">{node.label}</div>
                  <div className="text-xs text-muted-foreground mt-1">{node.desc}</div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card p-10 rounded-[2rem] border border-border shadow-xl space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-xl bg-primary/10 text-primary">
                <activeNode.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{activeNode.label} Core</h3>
                <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">Node Status: Operational</p>
              </div>
            </div>
            <div className="space-y-4">
              {activeNode.metrics.map((metric, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="font-bold text-sm tracking-tight">{metric}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}