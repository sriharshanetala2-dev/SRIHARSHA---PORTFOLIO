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
  ShieldCheck,
  BrainCircuit,
  Box,
  Fingerprint,
  Network
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

  // Parse the manifest data for structured display
  let manifestData = {};
  try {
    manifestData = JSON.parse(project.codeSnippet);
  } catch (e) {
    manifestData = { "System_Core": project.id, "Status": "OPERATIONAL" };
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-16">
        {/* Navigation Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.5em] hover:text-accent transition-all group"
          >
            <Terminal className="w-4 h-4" />
            Registry / {project.id}
          </Link>
        </motion.div>

        {/* Engineering Header */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-[9px] font-black text-primary uppercase tracking-[0.4em]"
          >
            <Cpu className="w-4 h-4" />
            Class: {project.category}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-7xl lg:text-8xl font-headline font-black tracking-tighter uppercase italic leading-[1] shimmer-text"
          >
            {project.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-base sm:text-xl text-muted-foreground leading-relaxed font-medium max-w-3xl opacity-70"
          >
            {project.description}
          </motion.p>
        </div>

        {/* CRITICAL: Side-by-Side Horizontal Metrics HUD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grid grid-cols-3 gap-4 sm:gap-12 bg-secondary/40 p-8 sm:p-12 rounded-3xl border border-white/5 relative overflow-hidden backdrop-blur-2xl shadow-3xl"
        >
          <div className="absolute inset-0 data-flow opacity-10 pointer-events-none" />
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center space-y-2 relative z-10 border-r last:border-0 border-white/10">
              <span className="text-[8px] sm:text-[10px] font-black text-primary uppercase tracking-[0.4em] opacity-60 px-2">{metric.label}</span>
              <span className="text-[10px] sm:text-2xl font-black text-foreground uppercase tracking-tighter truncate w-full px-2">{metric.value}</span>
            </div>
          ))}
        </motion.div>

        {/* Architectural Manifest Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-20">
            
            {/* System Specification Grid */}
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                  <Cpu className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-black uppercase tracking-tight italic">System Specification</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(manifestData).map(([key, value]) => (
                  <div key={key} className="p-8 rounded-2xl bg-secondary/20 border border-white/5 space-y-3 hover:border-primary/30 transition-all shadow-xl">
                    <p className="text-[9px] font-black text-primary uppercase tracking-[0.3em] opacity-60">
                      {key.replace(/_/g, ' ')}
                    </p>
                    <p className="text-sm sm:text-lg font-black uppercase tracking-tight text-foreground/90">
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Neural Process Stream */}
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                  <Network className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-black uppercase tracking-tight italic">Process Trace Logs</h2>
              </div>
              
              <div className="space-y-2.5 font-mono">
                {project.systemLogs.map((log: string, i: number) => (
                  <div key={i} className="flex gap-4 items-center p-5 rounded-xl bg-black/40 border border-white/5 group hover:bg-black/60 transition-all">
                    <div className="text-primary/30 text-[9px] font-black group-hover:text-primary transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] sm:text-sm font-bold tracking-tight opacity-60 group-hover:opacity-100 transition-opacity uppercase">
                      {log}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Subsystem Engineering */}
            <section className="space-y-10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Workflow className="w-5 h-5" />
                </div>
                <h2 className="text-lg font-black uppercase tracking-tight italic">Engineering Subsystems</h2>
              </div>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-medium">
                {project.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="p-6 rounded-2xl bg-secondary/20 border border-white/5 flex items-center gap-5 hover:border-primary/30 transition-all shadow-xl"
                  >
                    <div className="w-10 h-10 rounded-xl bg-background flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Zap className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm tracking-widest uppercase">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Technical Metadata Sidebar */}
          <aside className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 sm:p-10 rounded-[2.5rem] glass-card space-y-10 lg:sticky lg:top-32 border border-primary/20 bg-primary/5 backdrop-blur-3xl shadow-3xl"
            >
              <div className="space-y-10">
                <div className="space-y-4">
                  <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em]">Core Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-background text-[9px] font-black uppercase tracking-widest border border-white/5 shadow-inner">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_hsl(var(--accent))]" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-accent">Neural Locked</span>
                  </div>
                  <ShieldCheck className="w-4 h-4 text-accent/50" />
                </div>

                <div className="pt-8 border-t border-white/5 space-y-4">
                   <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.4em]">Orchestration Meta</p>
                   <div className="flex items-center gap-3 text-[10px] font-bold opacity-60">
                     <Activity className="w-4 h-4 text-primary" />
                     <span className="uppercase">L4 Integrity Verified</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}