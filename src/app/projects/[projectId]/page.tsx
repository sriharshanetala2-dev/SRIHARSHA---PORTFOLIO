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
      
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-16 sm:space-y-28">
        {/* Navigation Registry Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.5em] hover:gap-6 transition-all group"
          >
            <Fingerprint className="w-4 h-4" />
            Registry / {project.id}
          </Link>
        </motion.div>

        {/* Engineering Header */}
        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-[0.3em]"
          >
            <Activity className="w-4 h-4" />
            Class: {project.category}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[1.05] shimmer-text break-words"
          >
            {project.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg sm:text-2xl text-muted-foreground leading-relaxed font-medium max-w-4xl opacity-80"
          >
            {project.description}
          </motion.p>
        </div>

        {/* CRITICAL: Horizontal Metrics HUD - SIDE BY SIDE PERSISTENCE */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grid grid-cols-3 gap-2 sm:gap-12 bg-primary/5 p-8 sm:p-14 rounded-[2rem] sm:rounded-[3rem] border border-primary/20 shadow-3xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 data-flow opacity-10 pointer-events-none" />
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center space-y-2 sm:space-y-4 relative z-10">
              <span className="text-[9px] sm:text-[11px] font-black text-primary uppercase tracking-[0.4em] opacity-70">{metric.label}</span>
              <span className="text-[11px] sm:text-3xl font-black text-foreground uppercase tracking-tighter">{metric.value}</span>
            </div>
          ))}
        </motion.div>

        {/* Architectural Logic Manifest Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-8 space-y-24">
            
            {/* System Specification (Blueprint Style) */}
            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Cpu className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">System Specification Manifest</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {Object.entries(manifestData).map(([key, value]) => (
                  <div key={key} className="p-8 rounded-[2rem] bg-secondary/30 border border-white/5 space-y-3 hover:border-primary/40 transition-all shadow-xl group">
                    <p className="text-[10px] font-black text-primary/60 uppercase tracking-[0.3em] group-hover:text-primary transition-colors">
                      {key.replace(/_/g, ' ')}
                    </p>
                    <p className="text-base sm:text-xl font-black uppercase tracking-tight text-foreground/90">
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Neural Activity Logic Stream */}
            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Network className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">Neural Process Architecture</h2>
              </div>
              
              <div className="space-y-3">
                {project.systemLogs.map((log: string, i: number) => (
                  <div key={i} className="flex gap-6 items-center p-6 rounded-2xl bg-black/40 border border-white/5 group hover:bg-black/60 transition-all shadow-lg">
                    <div className="text-primary/30 text-[10px] font-black group-hover:text-primary transition-colors font-mono">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div className="text-xs sm:text-base font-bold tracking-tight opacity-70 group-hover:opacity-100 transition-opacity">
                      {log}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Subsystem Engineering */}
            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Workflow className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">Engineering Subsystems</h2>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">
                {project.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="p-8 rounded-[2rem] bg-secondary/30 border border-white/5 flex items-center gap-6 group hover:border-primary/40 transition-all shadow-xl"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm sm:text-lg tracking-tight uppercase">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Technical Metadata Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="p-8 sm:p-14 rounded-[3rem] sm:rounded-[4rem] glass-card space-y-14 lg:sticky lg:top-32 border border-primary/20 bg-primary/5 backdrop-blur-3xl shadow-3xl"
            >
              <div className="space-y-12">
                <div className="space-y-6">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">System Core Stack</p>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-4 py-2 rounded-xl bg-background text-[10px] font-black uppercase tracking-widest border border-primary/20 shadow-inner">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-12 border-t border-primary/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse shadow-[0_0_15px_hsl(var(--accent))]" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-accent">Neural Locked</span>
                  </div>
                  <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <div className="pt-12 border-t border-primary/10">
                   <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.5em] mb-6">Orchestration Meta</p>
                   <div className="flex items-center gap-5 text-xs font-bold opacity-70">
                     <Activity className="w-5 h-5 text-primary" />
                     <span className="uppercase">L4 System Verification</span>
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

// Hallucination Fix: Icon replacement mapping
const ShieldCheck = Shield; // Reusing Shield as a placeholder if ShieldCheck is not standard in some versions, but standard lucide has it.
