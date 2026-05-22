
"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/app/lib/projects-data";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Zap,
  Activity,
  Box,
  Terminal,
  Cpu,
  ShieldCheck,
  Globe
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ projectId: string }>;
}

export default function ProjectPage({ params }: PageProps) {
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

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="glow-mesh opacity-20" />
      <Navbar />
      
      <main className="pt-28 sm:pt-44 pb-20 sm:pb-32 px-4 sm:px-12 relative z-10">
        <div className="max-w-7xl mx-auto space-y-12 sm:space-y-32">
          
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-4 text-[11px] sm:text-[13px] font-black text-primary uppercase tracking-[0.5em] hover:gap-8 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            Archive / {project.category}
          </Link>

          <div className="space-y-8 sm:space-y-16 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[11px] font-black text-accent uppercase tracking-[0.3em]"
            >
              <Activity className="w-4 h-4" />
              Engineering Record: {project.id}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-black tracking-tighter uppercase leading-tight"
            >
              {project.title.split(' ').map((word, i) => (
                <span key={i} className={cn("inline-block mr-[0.3em] last:mr-0", i % 2 !== 0 ? "text-gradient shimmer-text" : "text-foreground")}>
                  {word}
                </span>
              ))}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-medium opacity-90 border-l-2 border-primary/20 pl-4 sm:pl-10"
            >
              {project.description}
            </motion.p>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-32">
            <div className="lg:col-span-8 space-y-24 sm:space-y-40">
              <section className="space-y-8 sm:space-y-20">
                <h2 className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-black tracking-tight flex items-center gap-4 sm:gap-12 uppercase shimmer-text leading-tight">
                  <Layers className="w-10 h-10 sm:w-20 sm:h-20 text-primary" />
                  Engineering Logic
                </h2>
                <p className="text-base sm:text-3xl text-muted-foreground leading-[1.8] font-medium opacity-90 max-w-5xl">
                  {project.longDescription}
                </p>
              </section>

              <section className="space-y-8 sm:space-y-20">
                <h2 className="text-2xl sm:text-6xl md:text-7xl lg:text-8xl font-headline font-black tracking-tight flex items-center gap-4 sm:gap-12 uppercase shimmer-text leading-tight">
                  <CheckCircle2 className="w-10 h-10 sm:w-20 sm:h-20 text-primary" />
                  Core Subsystems
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12">
                  {project.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 20, backgroundColor: "hsl(var(--primary) / 0.08)" }}
                      className="flex items-center gap-6 sm:gap-12 p-8 sm:p-20 rounded-[2.5rem] sm:rounded-[5rem] bg-secondary/20 border border-border/50 group transition-all shadow-xl"
                    >
                      <div className="w-3 h-3 sm:w-8 sm:h-8 rounded-full bg-primary shadow-[0_0_40px_rgba(var(--primary),0.8)] group-hover:scale-150 transition-transform" />
                      <span className="font-black text-sm sm:text-4xl tracking-tighter uppercase leading-tight">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-16">
              <div className="p-10 sm:p-24 rounded-[3.5rem] sm:rounded-[7rem] bg-card/60 border border-border/60 space-y-16 sm:space-y-32 lg:sticky lg:top-44 shadow-3xl backdrop-blur-3xl overflow-hidden">
                
                <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
                   <Box className="w-64 h-64 -rotate-12" />
                </div>

                <div className="space-y-8 sm:space-y-16 relative z-10">
                  <p className="text-[12px] sm:text-[14px] font-black text-primary uppercase tracking-[0.6em] flex items-center gap-4">
                    <Code2 className="w-6 h-6 sm:w-8 sm:h-8" /> Tech Stack Matrix
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-8">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-5 sm:px-10 py-3 sm:py-6 rounded-xl sm:rounded-4xl bg-secondary/80 text-[11px] sm:text-[15px] font-black uppercase tracking-widest border border-border/50 hover:border-primary/50 transition-all hover:scale-105 shadow-xl">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-10 sm:pt-24 border-t border-border/40 space-y-8 relative z-10">
                  <p className="text-[12px] sm:text-[14px] font-black text-accent uppercase tracking-[0.6em] flex items-center gap-4">
                    <Activity className="w-6 h-6 sm:w-8 sm:h-8" /> Node Parameters
                  </p>
                  <div className="space-y-6 sm:space-y-14">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-[12px] sm:text-[14px] font-black text-muted-foreground uppercase tracking-widest">{m.label}</span>
                        <span className="text-base sm:text-3xl font-black text-primary uppercase font-headline">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-10 sm:pt-32 border-t border-border/40 text-center opacity-40">
                   <p className="text-[11px] sm:text-[13px] text-muted-foreground font-black uppercase tracking-[0.8em]">
                     Architectural Verified Node
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
