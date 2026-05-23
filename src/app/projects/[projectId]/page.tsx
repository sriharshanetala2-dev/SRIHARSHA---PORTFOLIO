"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/lib/projects-data";
import { iconMap } from "@/app/lib/icon-map";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Zap,
  Activity,
  Terminal,
  Cpu
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  // Correct unwrap for Next.js 15
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === resolvedParams.projectId);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!project) {
    notFound();
  }

  if (!mounted) return null;

  const ProjectIcon = iconMap[project.icon] || Code2;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 neural-grid opacity-[0.05] dark:opacity-[0.1]" />
      </div>

      <Navbar />
      
      <main className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto space-y-20">
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-4 text-[11px] font-black text-primary uppercase tracking-[0.6em] hover:gap-6 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            REGISTRY_ARCHIVE
          </Link>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-[0.5em]"
            >
              <Activity className="w-3.5 h-3.5" />
              {project.category}
            </motion.div>
            
            <h1 className="text-4xl sm:text-7xl font-headline font-black tracking-tighter uppercase leading-[0.9] shimmer-text">
              {project.title}
            </h1>

            <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed font-bold uppercase tracking-tight max-w-3xl opacity-70">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-24">
            <div className="lg:col-span-8 space-y-20">
              <section className="space-y-8">
                <h2 className="text-2xl sm:text-4xl font-headline font-black tracking-tight flex items-center gap-4 uppercase shimmer-text">
                  <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  SYSTEM_LOGIC
                </h2>
                <p className="text-xs sm:text-lg text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-70">
                  {project.longDescription}
                </p>
              </section>

              <section className="space-y-8">
                <h2 className="text-2xl sm:text-4xl font-headline font-black tracking-tight flex items-center gap-4 uppercase shimmer-text">
                  <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  NODES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 rounded-[1.5rem] bg-secondary/20 border border-border group hover:border-primary/50 transition-all">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="font-black text-[10px] sm:text-sm uppercase tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 rounded-[2.5rem] bg-card border border-border space-y-12 lg:sticky lg:top-40 shadow-xl backdrop-blur-2xl">
                <div className="space-y-6">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em] flex items-center gap-3">
                    <Code2 className="w-4 h-4" /> TECH_MATRIX
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-4 py-2 rounded-lg bg-secondary text-[9px] font-black uppercase tracking-widest border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-border/50 space-y-6">
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.5em] flex items-center gap-3">
                    <Activity className="w-4 h-4" /> PERFORMANCE
                  </p>
                  <div className="space-y-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-[9px] font-black text-muted-foreground/60 uppercase tracking-widest">{m.label}</span>
                        <span className="text-xs font-black text-primary font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}