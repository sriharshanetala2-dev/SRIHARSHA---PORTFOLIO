
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
      
      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto space-y-20">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-3 text-xs font-black text-primary uppercase tracking-widest hover:brightness-125 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Registry
          </Link>
        </motion.div>

        <div className="space-y-8">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-black text-primary uppercase tracking-[0.5em] opacity-60">{project.category}</span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-headline font-black tracking-tighter uppercase leading-tight">
              {project.title}
            </h1>
          </div>

          <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-black uppercase tracking-tight max-w-4xl opacity-80">
            {project.description}
          </p>
        </div>

        {/* PERSISTENT SIDE-BY-SIDE METRICS HUD */}
        <div className="grid grid-cols-3 gap-0 bg-secondary border-2 border-border rounded-3xl overflow-hidden shadow-xl">
          {project.metrics.map((metric, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center py-12 border-r last:border-0 border-border bg-secondary/20">
              <span className="text-xs font-black text-primary uppercase tracking-widest mb-3 opacity-60">{metric.label}</span>
              <span className="text-sm sm:text-xl font-black text-foreground uppercase tracking-widest">{metric.value}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8 space-y-24">
            <section className="space-y-10">
              <div className="flex items-center gap-5">
                <Database className="w-7 h-7 text-primary" />
                <h2 className="text-2xl font-black uppercase tracking-widest">System Specification</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {Object.entries(manifestData).map(([key, value]) => (
                  <div key={key} className="p-10 rounded-3xl bg-secondary/50 border border-border shadow-md">
                    <p className="text-xs font-black text-primary uppercase tracking-widest mb-3 opacity-60">
                      {key.replace(/_/g, ' ')}
                    </p>
                    <p className="text-lg font-black uppercase text-foreground/90 tracking-widest">
                      {String(value)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-10">
              <div className="flex items-center gap-5">
                <Activity className="w-7 h-7 text-indigo-500" />
                <h2 className="text-2xl font-black uppercase tracking-widest">Process Logs</h2>
              </div>
              
              <div className="space-y-3 font-mono bg-black/5 p-10 rounded-3xl border border-border shadow-inner">
                {project.systemLogs.map((log: string, i: number) => (
                  <div key={i} className="flex gap-6 items-center py-3 border-b border-border/10 last:border-0">
                    <span className="text-primary/30 text-xs font-black w-8">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-xs sm:text-sm font-black uppercase tracking-tight opacity-80">{log}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-12">
              <div className="flex items-center gap-5">
                <Layers className="w-7 h-7 text-indigo-500" />
                <h2 className="text-2xl font-black uppercase tracking-widest">Engineering Logic</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-90 max-w-4xl">
                {project.longDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="p-8 rounded-2xl bg-secondary/30 border border-border flex items-center gap-6 shadow-sm"
                  >
                    <Box className="w-5 h-5 text-primary opacity-60" />
                    <span className="font-black text-xs uppercase tracking-widest">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="lg:col-span-4">
            <div className="p-12 rounded-[2.5rem] border-2 border-border bg-secondary/20 space-y-12 lg:sticky lg:top-32 shadow-2xl">
              <div className="space-y-10">
                <div className="space-y-6">
                  <p className="text-xs font-black text-primary uppercase tracking-widest opacity-60">Core Technology</p>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-5 py-2.5 rounded-xl bg-background text-xs font-black uppercase tracking-widest border border-border shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-10 border-t border-border flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-widest text-primary">Developer Verified</span>
                  </div>
                  <ShieldCheck className="w-7 h-7 text-primary/40" />
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
