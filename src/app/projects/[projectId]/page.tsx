"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/lib/projects-data";
import { 
  ArrowLeft, 
  Activity, 
  Workflow, 
  Shield, 
  Zap, 
  Terminal,
  Cpu,
  Database,
  Layers,
  Code2,
  ChevronRight,
  ShieldCheck,
  BrainCircuit
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = use(params);
  const project = projects.find((p) => p.id === projectId);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!project) notFound();
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-3 text-[11px] font-black text-primary uppercase tracking-[0.4em] hover:gap-5 transition-all group"
          >
            <ArrowLeft className="w-4 h-4" />
            Registry / {project.id}
          </Link>
        </motion.div>

        {/* Engineering Header */}
        <div className="space-y-8 sm:space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/50 border border-border text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.3em]"
          >
            <Layers className="w-4 h-4" />
            Class: {project.category}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-tight shimmer-text"
          >
            {project.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed font-medium max-w-4xl opacity-80"
          >
            {project.description}
          </motion.p>
        </div>

        {/* CRITICAL: Persistent Horizontal Metrics HUD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-3 gap-4 sm:gap-12 bg-secondary/10 p-6 sm:p-14 rounded-2xl sm:rounded-[3rem] border border-border/50 shadow-2xl backdrop-blur-sm"
        >
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center space-y-1 sm:space-y-2">
              <span className="text-[9px] sm:text-[11px] font-black text-primary uppercase tracking-[0.3em] opacity-60">{metric.label}</span>
              <span className="text-xs sm:text-3xl font-black text-foreground uppercase tracking-tighter">{metric.value}</span>
            </div>
          ))}
        </motion.div>

        {/* Architectural Record Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8 space-y-20">
            {/* System Logic Trace (Developer AI Style) */}
            <section className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">AI Subsystem Manifest</h2>
              </div>
              
              <div className="bg-black/80 rounded-[2rem] sm:rounded-[3rem] border border-white/10 overflow-hidden shadow-3xl font-mono">
                {/* Terminal Header */}
                <div className="bg-secondary/40 px-6 py-4 border-b border-white/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/40" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                    <div className="w-3 h-3 rounded-full bg-green-500/40" />
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">
                    node-architect@manifest:~/registry/{project.id}.json
                  </div>
                </div>
                
                {/* Terminal Content - AI Architecture Style */}
                <div className="p-6 sm:p-12 space-y-12 overflow-x-auto no-scrollbar">
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <span className="text-primary/40 text-xs font-black">MANIFEST</span>
                      <pre className="text-primary/80 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-bold">
                        <code>{project.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="pt-10 border-t border-white/5 space-y-4">
                    <p className="text-[10px] font-black text-primary/40 uppercase tracking-[0.3em] mb-4">Neural Activity Stream</p>
                    {project.systemLogs.map((log: string, i: number) => (
                      <div key={i} className="flex gap-4 items-center">
                        <span className="text-muted-foreground/20 text-[10px] font-black">{String(i + 1).padStart(2, '0')}</span>
                        <span className="text-foreground/70 text-xs sm:text-sm font-bold tracking-tight">{log}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Subsystem Logic Section */}
            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Workflow className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">Engineering Subsystems</h2>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
                {project.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-secondary/30 border border-border/50 flex items-center gap-5 group hover:border-primary/50 transition-all shadow-inner">
                    <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm sm:text-base tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Technical Parameter Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[4rem] glass-card space-y-12 lg:sticky lg:top-32 border border-white/5 bg-card/40 backdrop-blur-3xl shadow-3xl">
              <div className="space-y-10">
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Technology Stack</p>
                  <div className="flex flex-wrap gap-2.5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3.5 py-1.5 rounded-lg bg-secondary text-[10px] font-black uppercase tracking-widest border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-10 border-t border-border/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                    <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-green-500">Node Secure</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-secondary/50 border border-border opacity-40">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                <div className="pt-10 border-t border-border/50">
                   <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] mb-4">Engineering Meta</p>
                   <div className="flex items-center gap-4 text-xs font-bold opacity-60">
                     <Activity className="w-4 h-4 text-primary" />
                     <span>Orchestration: L4 Verified</span>
                   </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}