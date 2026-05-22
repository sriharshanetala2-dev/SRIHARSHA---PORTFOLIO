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
      
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 sm:space-y-20">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-black text-primary uppercase tracking-widest hover:brightness-125 transition-all"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            Back to Registry
          </Link>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col gap-2 sm:gap-4">
            <span className="text-[9px] sm:text-xs font-black text-primary uppercase tracking-[0.4em] opacity-60">{project.category}</span>
            <h1 className="text-3xl sm:text-6xl lg:text-7xl xl:text-8xl font-headline font-black tracking-tighter uppercase leading-tight">
              {project.title}
            </h1>
          </div>

          <p className="text-lg sm:text-2xl text-muted-foreground leading-relaxed font-black uppercase tracking-tight max-w-4xl opacity-80">
            {project.description}
          </p>
        </div>

        {/* PERSISTENT SIDE-BY-SIDE METRICS HUD */}
        <div className="grid grid-cols-3 gap-0 bg-secondary border-2 border-border rounded-xl sm:rounded-3xl overflow-hidden shadow-xl">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center py-6 sm:py-12 border-r last:border-0 border-border bg-secondary/20 min-w-0">
              <span className="text-[8px] sm:text-xs font-black text-primary uppercase tracking-widest mb-1 sm:mb-3 opacity-60 truncate px-2">{metric.label}</span>
              <span className="text-[9px] sm:text-xl font-black text-foreground uppercase tracking-widest truncate px-2">{metric.value}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-8 space-y-16 sm:space-y-24">
            <section className="space-y-6 sm:space-y-10">
              <div className="flex items-center gap-4 sm:gap-5">
                <Database className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                <h2 className="text-lg sm:text-2xl font-black uppercase tracking-widest">System Specification</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {Object.entries(manifestData).map(([key, value]) => (
                  <div key={key} className="p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-secondary/50 border border-border shadow-md">
                    <p className="text-[9px] sm:text-xs font-black text-primary uppercase tracking-widest mb-2 sm:mb-3 opacity-60">
                      {key.replace(/_/g, ' ')}
                    </p>
                    <p className="text-sm sm:text-lg font-black uppercase text-foreground/90 tracking-widest break-words">
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6 sm:space-y-10">
              <div className="flex items-center gap-4 sm:gap-5">
                <Activity className="w-5 h-5 sm:w-7 sm:h-7 text-indigo-500" />
                <h2 className="text-lg sm:text-2xl font-black uppercase tracking-widest">Process Logs</h2>
              </div>
              
              <div className="space-y-2 sm:space-y-3 font-mono bg-black/5 p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-border shadow-inner overflow-x-auto no-scrollbar">
                {project.systemLogs.map((log: string, i: number) => (
                  <div key={i} className="flex gap-4 sm:gap-6 items-center py-2 sm:py-3 border-b border-border/10 last:border-0 whitespace-nowrap">
                    <span className="text-primary/30 text-[10px] font-black w-6">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[9px] sm:text-sm font-black uppercase tracking-tight opacity-80">{log}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8 sm:space-y-12">
              <div className="flex items-center gap-4 sm:gap-5">
                <Layers className="w-5 h-5 sm:w-7 sm:h-7 text-indigo-500" />
                <h2 className="text-lg sm:text-2xl font-black uppercase tracking-widest">Engineering Logic</h2>
              </div>
              <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-90 max-w-4xl">
                {project.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {project.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-secondary/30 border border-border flex items-center gap-4 sm:gap-6 shadow-sm"
                  >
                    <Box className="w-4 h-4 sm:w-5 sm:h-5 text-primary opacity-60" />
                    <span className="font-black text-[9px] sm:text-xs uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="p-8 sm:p-12 rounded-2xl sm:rounded-[2.5rem] border-2 border-border bg-secondary/20 space-y-8 sm:space-y-12 lg:sticky lg:top-32 shadow-2xl">
              <div className="space-y-8 sm:space-y-10">
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-[9px] sm:text-xs font-black text-primary uppercase tracking-widest opacity-60">Core Technology</p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl bg-background text-[9px] sm:text-xs font-black uppercase tracking-widest border border-border shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 sm:pt-10 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-primary">Developer Verified</span>
                  </div>
                  <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7 text-primary/40" />
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