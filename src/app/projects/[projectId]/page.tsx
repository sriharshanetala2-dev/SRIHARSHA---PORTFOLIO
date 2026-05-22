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
  Fingerprint
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
          transition={{ duration: 0.8, type: "spring" }}
        >
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-[0.4em] hover:gap-5 transition-all group"
          >
            <Fingerprint className="w-4 h-4" />
            Registry / {project.id}
          </Link>
        </motion.div>

        {/* Engineering Header */}
        <div className="space-y-8 sm:space-y-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.3em]"
          >
            <Activity className="w-4 h-4" />
            Class: {project.category}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter uppercase leading-[1.1] shimmer-text"
          >
            {project.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-4xl opacity-80"
          >
            {project.description}
          </motion.p>
        </div>

        {/* CRITICAL: Horizontal Metrics HUD - SIDE BY SIDE ON ALL SCREENS */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="grid grid-cols-3 gap-2 sm:gap-12 bg-primary/5 p-6 sm:p-14 rounded-[2rem] sm:rounded-[3rem] border border-primary/10 shadow-3xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 data-flow opacity-10 pointer-events-none" />
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center space-y-1 sm:space-y-3 relative z-10">
              <span className="text-[8px] sm:text-[11px] font-black text-primary uppercase tracking-[0.3em] opacity-60">{metric.label}</span>
              <span className="text-[10px] sm:text-3xl font-black text-foreground uppercase tracking-tighter">{metric.value}</span>
            </div>
          ))}
        </motion.div>

        {/* Architectural Record Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8 space-y-20">
            {/* AI Manifest Subsystem (Developer AI Style) */}
            <section className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">AI Architectural Manifest</h2>
              </div>
              
              <div className="bg-black/90 rounded-[2.5rem] sm:rounded-[4.5rem] border border-white/5 overflow-hidden shadow-3xl font-mono relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30" />
                
                {/* Terminal Header */}
                <div className="bg-secondary/40 px-6 py-5 border-b border-white/5 flex items-center justify-between">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/30" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30" />
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/50">
                    node-architect@manifest:~/registry/{project.id}.json
                  </div>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 sm:p-14 space-y-14 overflow-x-auto no-scrollbar">
                  <div className="space-y-10">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <span className="text-primary/50 text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">System Manifest</span>
                      <pre className="text-indigo-200/90 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap font-bold bg-white/5 p-6 rounded-2xl border border-white/5 w-full">
                        <code>{project.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>

                  <div className="pt-10 border-t border-white/5 space-y-6">
                    <p className="text-[10px] font-black text-primary/60 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
                      <Zap className="w-3 h-3" />
                      Neural Activity Stream
                    </p>
                    {project.systemLogs.map((log: string, i: number) => (
                      <div key={i} className="flex gap-5 items-center group">
                        <span className="text-muted-foreground/30 text-[10px] font-black group-hover:text-primary transition-colors">{String(i + 1).padStart(2, '0')}</span>
                        <span className="text-foreground/80 text-xs sm:text-sm font-bold tracking-tight group-hover:text-foreground transition-colors">{log}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Subsystem Engineering */}
            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Workflow className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">Engineering Subsystems</h2>
              </div>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">
                {project.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="p-8 rounded-3xl bg-secondary/30 border border-white/5 flex items-center gap-6 group hover:border-primary/40 transition-all shadow-xl"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm sm:text-lg tracking-tight">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Technical Meta Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-8 sm:p-14 rounded-[3rem] sm:rounded-[5rem] glass-card space-y-14 lg:sticky lg:top-32 border border-primary/20 bg-primary/5 backdrop-blur-3xl shadow-3xl"
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
                   <div className="flex items-center gap-5 text-sm font-bold opacity-70">
                     <Activity className="w-5 h-5 text-primary" />
                     <span>L4 System Verification</span>
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
