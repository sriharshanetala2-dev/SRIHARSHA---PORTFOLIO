"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/lib/projects-data";
import { 
  Database,
  ShieldCheck,
  Layers,
  ChevronLeft,
  Activity,
  Box
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = use(params);
  const project = projects.find((p) => p.id === projectId);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!project) notFound();
  if (!mounted) return null;

  let manifestData = {};
  try {
    manifestData = JSON.parse(project.codeSnippet);
  } catch (e) {
    manifestData = { "System_Core": project.id, "Status": "OPERATIONAL" };
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-16">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.4em] hover:brightness-125 transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Registry
          </Link>
        </motion.div>

        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.5em]">{project.category}</span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-headline font-black tracking-tighter uppercase leading-none">
              {project.title}
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-black uppercase tracking-tight max-w-4xl opacity-80">
            {project.description}
          </p>
        </div>

        {/* PERSISTENT SIDE-BY-SIDE METRICS HUD */}
        <div className="grid grid-cols-3 gap-0 bg-secondary border border-border rounded-xl overflow-hidden shadow-md">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center py-10 border-r last:border-0 border-border">
              <span className="text-[9px] font-black text-primary uppercase tracking-[0.5em] mb-2 opacity-60">{metric.label}</span>
              <span className="text-xs sm:text-xl font-black text-foreground uppercase tracking-widest">{metric.value}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8 space-y-20">
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <Database className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-black uppercase tracking-widest">System Specification</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {Object.entries(manifestData).map(([key, value]) => (
                  <div key={key} className="p-8 rounded-xl bg-secondary/50 border border-border">
                    <p className="text-[9px] font-black text-primary uppercase tracking-[0.4em] mb-2 opacity-60">
                      {key.replace(/_/g, ' ')}
                    </p>
                    <p className="text-base font-black uppercase text-foreground/90 tracking-widest">
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <Activity className="w-6 h-6 text-indigo-500" />
                <h2 className="text-xl font-black uppercase tracking-widest">Process Logs</h2>
              </div>
              
              <div className="space-y-2 font-mono bg-black/5 p-6 rounded-xl border border-border">
                {project.systemLogs.map((log: string, i: number) => (
                  <div key={i} className="flex gap-4 items-center py-2 opacity-80">
                    <span className="text-primary/40 text-[10px] font-black w-6">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[11px] sm:text-sm font-black uppercase tracking-tight">{log}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-10">
              <div className="flex items-center gap-4">
                <Layers className="w-6 h-6 text-indigo-500" />
                <h2 className="text-xl font-black uppercase tracking-widest">Engineering Logic</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-80">
                {project.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="p-6 rounded-xl bg-secondary/30 border border-border flex items-center gap-5"
                  >
                    <Box className="w-4 h-4 text-primary" />
                    <span className="font-black text-[10px] uppercase tracking-[0.3em]">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="p-10 rounded-2xl border border-border bg-secondary/20 space-y-10 lg:sticky lg:top-32 shadow-sm">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-[9px] font-black text-primary uppercase tracking-[0.5em]">Core Technology</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded bg-background text-[10px] font-black uppercase tracking-widest border border-border">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-[0.5em] text-primary">Developer Verified</span>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-primary/50" />
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