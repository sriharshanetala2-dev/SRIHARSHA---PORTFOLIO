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

  const ProjectIcon = iconMap[project.icon as keyof typeof iconMap] || Code2;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 neural-grid opacity-[0.05] dark:opacity-[0.15]" />
      </div>

      <Navbar />
      
      <main className="pt-32 pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-24">
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-4 text-[11px] font-black text-primary uppercase tracking-[0.6em] hover:gap-6 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            REGISTRY_ARCHIVE
          </Link>

          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-primary/10 border-2 border-primary/30 text-[11px] font-black text-primary uppercase tracking-[0.6em]"
            >
              <Activity className="w-4 h-4" />
              {project.category}
            </motion.div>
            
            <h1 className="text-4xl sm:text-7xl lg:text-9xl font-headline font-black tracking-tighter uppercase leading-[0.9] shimmer-text">
              {project.title}
            </h1>

            <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed font-bold uppercase tracking-tight max-w-4xl opacity-80">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            <div className="lg:col-span-8 space-y-24">
              <section className="space-y-12">
                <h2 className="text-3xl sm:text-6xl font-headline font-black tracking-tight flex items-center gap-6 uppercase shimmer-text">
                  <Layers className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
                  SYSTEM_LOGIC
                </h2>
                <p className="text-sm sm:text-xl text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-80">
                  {project.longDescription}
                </p>
              </section>

              <section className="space-y-12">
                <h2 className="text-3xl sm:text-6xl font-headline font-black tracking-tight flex items-center gap-6 uppercase shimmer-text">
                  <CheckCircle2 className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
                  ARCHITECTURAL_NODES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-6 p-8 rounded-[2rem] bg-secondary/20 border-2 border-border/50 group hover:border-primary/50 transition-all">
                      <div className="w-3 h-3 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                      <span className="font-black text-xs sm:text-xl uppercase tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-12">
              <div className="p-10 rounded-[3rem] bg-card border-2 border-border space-y-16 lg:sticky lg:top-40 shadow-4xl backdrop-blur-2xl">
                <div className="space-y-8">
                  <p className="text-[11px] font-black text-primary uppercase tracking-[0.6em] flex items-center gap-4">
                    <Code2 className="w-5 h-5" /> TECH_MATRIX
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-6 py-3 rounded-xl bg-secondary/50 text-[10px] sm:text-xs font-black uppercase tracking-widest border-2 border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-12 border-t-2 border-border/50 space-y-8">
                  <p className="text-[11px] font-black text-primary uppercase tracking-[0.6em] flex items-center gap-4">
                    <Activity className="w-5 h-5" /> PERFORMANCE_LOGS
                  </p>
                  <div className="space-y-6">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-[11px] font-black text-muted-foreground/60 uppercase tracking-widest">{m.label}</span>
                        <span className="text-xs sm:text-base font-black text-primary font-mono">{m.value}</span>
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
