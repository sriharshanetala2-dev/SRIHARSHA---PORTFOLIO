
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
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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

  const ProjectIcon = iconMap[project.icon as keyof typeof iconMap] || Code2;

  if (!mounted) return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="p-4 rounded-full bg-primary/10 animate-pulse">
        <Cpu className="w-8 h-8 text-primary" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Industrial Neural Backdrop */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 neural-grid opacity-[0.05] dark:opacity-[0.2]" />
        <div className="logic-scan-subsystem opacity-[0.05] dark:opacity-[0.15]" />
      </div>

      <Navbar />
      
      <main className="pt-24 sm:pt-48 pb-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto space-y-24 sm:space-y-40">
          {/* Back Navigation Node */}
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-4 text-[11px] font-black text-primary uppercase tracking-[0.6em] hover:gap-6 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            REGISTRY_ARCHIVE
          </Link>

          {/* Header Metadata */}
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-primary/10 border-2 border-primary/30 text-[11px] font-black text-primary uppercase tracking-[0.6em] shadow-xl"
            >
              <Activity className="w-4 h-4" />
              {project.category}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-7xl lg:text-9xl font-headline font-black tracking-tighter uppercase leading-[0.9] shimmer-text"
            >
              {project.title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm sm:text-xl text-muted-foreground leading-relaxed font-bold uppercase tracking-tight max-w-4xl opacity-80"
            >
              {project.description}
            </motion.p>
          </div>

          {/* Structural Visualization Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square sm:aspect-video rounded-[3rem] sm:rounded-[4rem] overflow-hidden border-2 border-border/60 shadow-4xl bg-secondary/5 group"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 flex flex-col items-center gap-12">
                <motion.div 
                  animate={{ boxShadow: ["0 0 20px hsl(var(--primary)/0.1)", "0 0 60px hsl(var(--primary)/0.4)", "0 0 20px hsl(var(--primary)/0.1)"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="p-12 sm:p-24 rounded-[3rem] sm:rounded-[5rem] bg-card border-2 border-border/50 shadow-3xl backdrop-blur-3xl relative"
                >
                  <ProjectIcon className="w-16 h-16 sm:w-32 sm:h-32 text-primary" />
                  <div className="absolute -top-4 -right-4 p-4 rounded-2xl bg-primary text-primary-foreground shadow-2xl">
                    <Zap className="w-6 h-6 animate-pulse" />
                  </div>
                </motion.div>

                <div className="text-center space-y-2">
                  <p className="text-[11px] font-black uppercase tracking-[0.6em] text-primary opacity-50">NODE_IDENTITY</p>
                  <h3 className="text-xl sm:text-5xl font-black uppercase tracking-tighter">{project.title}</h3>
                </div>

                <div className="flex gap-4 sm:gap-12 px-8 sm:px-16 py-6 sm:py-8 glass-card rounded-[2rem] sm:rounded-[3rem] shadow-4xl">
                   {project.metrics.map((metric, i) => (
                     <div key={i} className="flex flex-col items-center px-4 sm:px-10 border-r last:border-0 border-border/50">
                       <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground/60 mb-2">{metric.label}</span>
                       <span className="text-xs sm:text-xl font-black text-primary font-mono">{metric.value}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-10 left-10 p-4 glass-card rounded-2xl border-2 border-border flex items-center gap-4 bg-black/40">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.6em] text-green-500">INTEGRITY_VERIFIED</span>
            </div>
          </motion.div>

          {/* Logic Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 sm:gap-40">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                  {project.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-6 p-8 rounded-[2rem] bg-secondary/20 border-2 border-border/50 group hover:border-primary/50 transition-all"
                    >
                      <div className="w-3 h-3 rounded-full bg-primary shadow-primary/50 group-hover:scale-150 transition-transform" />
                      <span className="font-black text-xs sm:text-xl uppercase tracking-tight">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-12">
              <div className="p-10 sm:p-16 rounded-[3rem] bg-card border-2 border-border space-y-16 lg:sticky lg:top-40 shadow-4xl backdrop-blur-2xl">
                <div className="space-y-8">
                  <p className="text-[11px] font-black text-primary uppercase tracking-[0.6em] flex items-center gap-4">
                    <Code2 className="w-5 h-5" /> TECH_MATRIX
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-6 py-3 rounded-xl bg-secondary/50 text-[10px] sm:text-xs font-black uppercase tracking-widest border-2 border-border/50 hover:border-primary/50 transition-all">
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

                <div className="pt-12 border-t-2 border-border/50 text-center">
                   <p className="text-[9px] text-muted-foreground/40 font-black uppercase tracking-[0.8em]">
                     HASH: {Math.random().toString(36).substring(7).toUpperCase()}
                   </p>
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
