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
      
      <main className="pt-28 sm:pt-40 pb-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-16 sm:space-y-24">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-3 text-[11px] font-black text-primary uppercase tracking-[0.3em] hover:brightness-125 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Registry
          </Link>
        </motion.div>

        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-black text-primary uppercase tracking-[0.5em] opacity-60">{project.category}</span>
            <h1 className="text-4xl sm:text-7xl lg:text-8xl font-headline font-black tracking-tighter uppercase leading-[1.05]">
              {project.title}
            </h1>
          </div>

          <p className="text-lg sm:text-3xl text-muted-foreground leading-relaxed font-bold uppercase tracking-tight max-w-5xl opacity-80">
            {project.description}
          </p>
        </div>

        {/* PERSISTENT HORIZONTAL HUD */}
        <div className="grid grid-cols-3 gap-0 bg-secondary border-2 border-border rounded-[2.5rem] overflow-hidden shadow-2xl">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center py-8 sm:py-16 border-r-2 last:border-0 border-border bg-secondary/30 min-w-0">
              <span className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.4em] mb-4 opacity-60 truncate px-4">{metric.label}</span>
              <span className="text-xs sm:text-2xl font-black text-foreground uppercase tracking-widest truncate px-4">{metric.value}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8 space-y-20 sm:space-y-32">
            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <Database className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />
                <h2 className="text-xl sm:text-3xl font-black uppercase tracking-[0.2em]">System Specification</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {Object.entries(manifestData).map(([key, value]) => (
                  <div key={key} className="p-8 sm:p-12 rounded-[2rem] bg-secondary/50 border-2 border-border shadow-xl">
                    <p className="text-[10px] sm:text-xs font-black text-primary uppercase tracking-[0.5em] mb-4 opacity-60">
                      {key.replace(/_/g, ' ')}
                    </p>
                    <p className="text-sm sm:text-xl font-black uppercase text-foreground/90 tracking-widest break-words leading-tight">
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <Activity className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />
                <h2 className="text-xl sm:text-3xl font-black uppercase tracking-[0.2em]">Process Logs</h2>
              </div>
              
              <div className="space-y-4 font-mono bg-black/5 p-8 sm:p-14 rounded-[2.5rem] border-2 border-border shadow-inner overflow-x-auto no-scrollbar">
                {project.systemLogs.map((log: string, i: number) => (
                  <div key={i} className="flex gap-8 items-center py-4 border-b border-border/10 last:border-0 whitespace-nowrap">
                    <span className="text-primary/30 text-[11px] font-black w-8">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[11px] sm:text-base font-black uppercase tracking-tight opacity-80">{log}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-12 sm:space-y-16">
              <div className="flex items-center gap-6">
                <Layers className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />
                <h2 className="text-xl sm:text-3xl font-black uppercase tracking-[0.2em]">Engineering Logic</h2>
              </div>
              <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-90 max-w-5xl">
                {project.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {project.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="p-8 sm:p-10 rounded-2xl sm:rounded-3xl bg-secondary/30 border-2 border-border flex items-center gap-8 shadow-xl hover:border-primary/50 transition-all"
                  >
                    <Box className="w-6 h-6 text-primary opacity-60" />
                    <span className="font-black text-[11px] sm:text-sm uppercase tracking-[0.2em]">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="p-10 sm:p-16 rounded-[3rem] border-2 border-border bg-secondary/20 space-y-12 lg:sticky lg:top-40 shadow-[0_40px_100px_rgba(0,0,0,0.1)]">
              <div className="space-y-12">
                <div className="space-y-8">
                  <p className="text-[11px] font-black text-primary uppercase tracking-[0.5em] opacity-60 text-center lg:text-left">Tech Stack Registry</p>
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-5 py-3 rounded-xl bg-background text-[11px] font-black uppercase tracking-widest border-2 border-border shadow-xl hover:border-primary transition-all">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-12 border-t-2 border-border flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                    <span className="text-[11px] font-black uppercase tracking-widest text-primary">System Verified</span>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-primary/40" />
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