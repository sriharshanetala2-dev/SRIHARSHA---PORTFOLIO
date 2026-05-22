
"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/lib/projects-data";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Workflow, 
  Activity, 
  Cpu, 
  Shield, 
  Zap, 
  Database,
  Terminal
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
      
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-24">
        {/* Navigation Registry */}
        <Link 
          href="/#portfolio" 
          className="inline-flex items-center gap-3 text-[11px] font-black text-primary uppercase tracking-[0.4em] hover:gap-5 transition-all group"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to System Registry
        </Link>

        {/* Project Header */}
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-secondary/50 border border-border text-[10px] font-black text-primary uppercase tracking-widest">
            <Activity className="w-4 h-4" />
            Node: {project.category}
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] shimmer-text">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-4xl opacity-80">
            {project.description}
          </p>
        </div>

        {/* System Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8 space-y-20">
            {/* Interface Logic Visualization */}
            <section className="space-y-10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Terminal className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">Interface Logic Blueprint</h2>
              </div>
              <div className="aspect-video relative rounded-[2.5rem] overflow-hidden border border-border bg-secondary/5 shadow-3xl group">
                <div className="absolute inset-0 data-flow-grid opacity-10" />
                <img 
                  src={`https://picsum.photos/seed/${project.id}_logic/1200/675`}
                  alt="System Architecture"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[2s]"
                  data-ai-hint="software architecture"
                />
                <div className="absolute top-8 left-8 flex gap-3">
                  <div className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/10 backdrop-blur-xl text-[10px] font-black text-green-500 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Logic: Active
                  </div>
                </div>
              </div>
            </section>

            {/* Technical Subsystems */}
            <section className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Workflow className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black uppercase tracking-tight">Engineering Logic</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                {project.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="p-8 rounded-3xl bg-secondary/30 border border-border/50 flex items-center gap-5 group hover:border-primary/50 transition-all">
                    <div className="w-10 h-10 rounded-2xl bg-background flex items-center justify-center text-primary shadow-inner">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-sm sm:text-base tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Persistent Parameter Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="p-10 rounded-[3rem] glass-card space-y-12 lg:sticky lg:top-32 border border-white/5 bg-card/40 backdrop-blur-3xl shadow-3xl">
              <div className="space-y-8">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Tech Stack Matrix</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-xl bg-secondary text-[11px] font-black uppercase tracking-widest border border-border shadow-inner">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-10 border-t border-border/50 space-y-8">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Node Parameters</p>
                <div className="grid grid-cols-3 gap-3">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="flex flex-col items-center justify-center p-5 bg-background/50 rounded-2xl border border-border/50 group hover:border-primary/50 transition-all">
                      <span className="text-[8px] font-black text-muted-foreground uppercase mb-2 tracking-widest">{m.label}</span>
                      <span className="text-[11px] font-black text-primary uppercase tracking-tighter">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-10 border-t border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_#22c55e]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-green-500">System Verified</span>
                </div>
                <div className="p-2 rounded-lg bg-secondary/50 border border-border">
                  <Shield className="w-4 h-4 opacity-40" />
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
