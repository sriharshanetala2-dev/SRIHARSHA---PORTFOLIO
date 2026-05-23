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
  Box,
  Terminal,
  Cpu
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
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Logic Mesh Subsystem for Persistence */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 neural-grid opacity-[0.15]" />
        <div className="absolute inset-0 logic-mesh opacity-[0.3]" />
        <div className="running-glare top-[-10%] left-[-5%] w-[1000px] h-[1000px] bg-primary/10" />
        <div className="absolute inset-0 logic-scan-line" />
      </div>

      <Navbar />
      
      <main className="relative z-10 pt-28 sm:pt-40 pb-20 px-4 sm:px-6 max-w-7xl mx-auto space-y-12 sm:space-y-24">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-3 text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.3em] hover:brightness-125 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            Registry Hub
          </Link>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            <span className="text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.5em] opacity-60">{project.category}</span>
            <h1 className="text-3xl sm:text-6xl lg:text-8xl font-headline font-black tracking-tighter uppercase leading-[1.05] shimmer-text">
              {project.title}
            </h1>
          </div>

          <p className="text-base sm:text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-bold uppercase tracking-tight max-w-5xl opacity-90">
            {project.description}
          </p>
        </div>

        {/* INDUSTRIAL HUD */}
        <div className="grid grid-cols-3 gap-0 bg-secondary/50 border-2 border-border rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl backdrop-blur-xl">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center py-6 sm:py-16 border-r last:border-0 border-border bg-secondary/20">
              <span className="text-[8px] sm:text-xs font-black text-primary uppercase tracking-[0.4em] mb-2 sm:mb-4 opacity-60 truncate px-2">{metric.label}</span>
              <span className="text-[10px] sm:text-2xl font-black text-foreground uppercase tracking-widest">{metric.value}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-24">
          <div className="lg:col-span-8 space-y-16 sm:space-y-32">
            <section className="space-y-8 sm:space-y-10">
              <div className="flex items-center gap-4 sm:gap-6">
                <Cpu className="w-6 h-6 sm:w-10 sm:h-10 text-primary" />
                <h2 className="text-lg sm:text-3xl font-black uppercase tracking-[0.2em]">System Manifest</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                {Object.entries(manifestData).map(([key, value]) => (
                  <div key={key} className="p-6 sm:p-12 rounded-2xl sm:rounded-[2rem] bg-secondary/30 border-2 border-border/50 shadow-xl backdrop-blur-sm">
                    <p className="text-[9px] sm:text-xs font-black text-primary uppercase tracking-[0.4em] mb-2 sm:mb-4 opacity-60">
                      {key.replace(/_/g, ' ')}
                    </p>
                    <p className="text-xs sm:text-xl font-black uppercase text-foreground/90 tracking-widest">
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8 sm:space-y-10">
              <div className="flex items-center gap-4 sm:gap-6">
                <Terminal className="w-6 h-6 sm:w-10 sm:h-10 text-primary" />
                <h2 className="text-lg sm:text-3xl font-black uppercase tracking-[0.2em]">Processing Logs</h2>
              </div>
              
              <div className="space-y-3 sm:space-y-4 font-mono bg-black/40 p-6 sm:p-14 rounded-2xl sm:rounded-[2.5rem] border-2 border-border shadow-inner overflow-x-auto no-scrollbar backdrop-blur-3xl">
                {project.systemLogs.map((log: string, i: number) => (
                  <div key={i} className="flex gap-4 sm:gap-8 items-center py-2 sm:py-4 border-b border-border/10 last:border-0 whitespace-nowrap">
                    <span className="text-primary/40 text-[9px] sm:text-[11px] font-black w-6">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[10px] sm:text-base font-black uppercase tracking-tight opacity-70">{log}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-8 sm:space-y-16">
              <div className="flex items-center gap-4 sm:gap-6">
                <Layers className="w-6 h-6 sm:w-10 sm:h-10 text-primary" />
                <h2 className="text-lg sm:text-3xl font-black uppercase tracking-[0.2em]">Architectural Core</h2>
              </div>
              <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-90 max-w-5xl">
                {project.longDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                {project.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="p-6 sm:p-10 rounded-2xl bg-secondary/20 border-2 border-border flex items-center gap-6 sm:gap-8 shadow-xl hover:border-primary/50 transition-all"
                  >
                    <Box className="w-5 h-5 sm:w-6 sm:h-6 text-primary opacity-60" />
                    <span className="font-black text-[10px] sm:text-sm uppercase tracking-[0.2em]">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="p-8 sm:p-16 rounded-2xl sm:rounded-[3rem] border-2 border-border bg-secondary/20 space-y-8 sm:space-y-12 lg:sticky lg:top-40 shadow-2xl backdrop-blur-md">
              <div className="space-y-8 sm:space-y-12">
                <div className="space-y-6 sm:space-y-8">
                  <p className="text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.4em] opacity-60 text-center lg:text-left">Kernel Registry</p>
                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-4 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl bg-background/50 text-[9px] sm:text-[11px] font-black uppercase tracking-widest border border-border shadow-md hover:border-primary transition-all">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 sm:pt-12 border-t-2 border-border flex items-center justify-between">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-primary">Verified Node</span>
                  </div>
                  <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary/40" />
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