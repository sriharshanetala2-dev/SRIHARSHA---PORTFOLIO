
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
  Cpu
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
  const [sessionCode, setSessionCode] = useState("");
  
  useEffect(() => {
    setMounted(true);
    // Generate code on client only
    setSessionCode(Math.random().toString(36).substring(7).toUpperCase());
  }, []);

  if (!project) {
    notFound();
  }

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="glow-mesh opacity-20" />
      <Navbar />
      
      <main className="pt-28 sm:pt-44 pb-20 sm:pb-32 px-6 sm:px-12 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-32">
          
          {/* Breadcrumb / Back */}
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-3 text-[11px] font-black text-primary uppercase tracking-[0.5em] hover:gap-6 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            Archive / {project.category}
          </Link>

          {/* Header */}
          <div className="space-y-12 sm:space-y-16 max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-[11px] font-black text-accent uppercase tracking-[0.4em]"
            >
              <Activity className="w-4 h-4" />
              Engineering Record: {project.id}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter uppercase leading-[1.1] flex flex-wrap"
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
              className="text-base sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium opacity-90 border-l-2 border-primary/20 pl-8"
            >
              {project.description}
            </motion.p>
          </div>

          {/* System Visualizer (System Lens) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative aspect-square sm:aspect-video rounded-[3rem] sm:rounded-[4.5rem] overflow-hidden border border-border/60 shadow-3xl bg-secondary/5 data-flow-grid group"
          >
            <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-20">
              {/* Background HUD elements */}
              <div className="absolute inset-0 opacity-10 pointer-events-none hidden sm:block">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1.5px, transparent 1.5px)', backgroundSize: '64px 64px' }} />
              </div>

              <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-16 w-full">
                <motion.div 
                  animate={{ 
                    boxShadow: ["0 0 20px hsl(var(--primary) / 0.1)", "0 0 60px hsl(var(--primary) / 0.4)", "0 0 20px hsl(var(--primary) / 0.1)"]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="relative p-10 sm:p-24 rounded-[3rem] sm:rounded-[6rem] bg-card border border-border/50 shadow-2xl backdrop-blur-3xl"
                >
                  <project.icon className="w-16 h-16 sm:w-32 sm:h-32 text-primary" />
                  <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 p-3 sm:p-6 rounded-2xl sm:rounded-[2rem] bg-accent text-accent-foreground shadow-2xl border border-white/10">
                    <Zap className="w-5 sm:w-10 h-5 sm:w-10 animate-pulse" />
                  </div>
                </motion.div>

                <div className="flex flex-col items-center gap-3">
                  <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.6em] text-primary opacity-70">Core Architectural Node</p>
                  <h3 className="text-xl sm:text-5xl font-black uppercase tracking-tighter text-center px-4 leading-tight">{project.title}</h3>
                </div>

                {/* HUD Overlay Bar */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-12 px-6 sm:px-16 py-4 sm:py-10 glass-card rounded-2xl sm:rounded-[3.5rem] border-white/10 bg-background/60 shadow-3xl backdrop-blur-2xl">
                   {project.metrics.map((metric, i) => (
                     <div key={i} className="flex flex-col items-center px-4 sm:px-12 border-r last:border-0 border-border/50">
                       <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-2 whitespace-nowrap">{metric.label}</span>
                       <span className="text-[12px] sm:text-2xl font-black text-accent font-mono whitespace-nowrap">{metric.value}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Corner Status Indicators */}
            <div className="absolute top-6 left-6 sm:top-12 sm:left-12 flex gap-3">
               <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl glass-card border-white/5 bg-black/40 flex items-center justify-center">
                 <Cpu className="w-5 h-5 sm:w-7 sm:h-7 text-primary/60" />
               </div>
               <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl glass-card border-white/5 bg-black/40 flex items-center justify-center">
                 <Terminal className="w-5 h-5 sm:w-7 sm:h-7 text-primary/60" />
               </div>
            </div>

            <div className="absolute bottom-6 left-6 sm:bottom-12 sm:left-12 p-3 sm:p-6 glass-card rounded-xl sm:rounded-3xl border-white/10 bg-black/60 flex items-center gap-3 sm:gap-5 shadow-2xl">
              <div className="relative">
                <div className="w-2 h-2 sm:w-4 sm:h-4 rounded-full bg-green-500 animate-ping absolute inset-0" />
                <div className="w-2 h-2 sm:w-4 sm:h-4 rounded-full bg-green-500 shadow-[0_0_15px_#22c55e]" />
              </div>
              <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.5em] text-green-500">System Verified</span>
            </div>
          </motion.div>

          {/* Details Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-24">
            <div className="lg:col-span-8 space-y-20 sm:space-y-32">
              <section className="space-y-10 sm:space-y-14">
                <h2 className="text-3xl sm:text-6xl font-headline font-black tracking-tight flex items-center gap-5 sm:gap-8 uppercase shimmer-text">
                  <Layers className="w-8 h-8 sm:w-14 sm:h-14 text-primary" />
                  Technical Logic
                </h2>
                <p className="text-base sm:text-xl text-muted-foreground leading-[1.85] font-medium opacity-90 max-w-4xl">
                  {project.longDescription}
                </p>
              </section>

              <section className="space-y-10 sm:space-y-14">
                <h2 className="text-3xl sm:text-6xl font-headline font-black tracking-tight flex items-center gap-5 sm:gap-8 uppercase shimmer-text">
                  <CheckCircle2 className="w-8 h-8 sm:w-14 sm:h-14 text-primary" />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10">
                  {project.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 12, backgroundColor: "hsl(var(--primary) / 0.05)" }}
                      className="flex items-center gap-5 sm:gap-8 p-8 sm:p-14 rounded-[2.5rem] sm:rounded-[4rem] bg-secondary/20 border border-border/50 group transition-all"
                    >
                      <div className="w-3 h-3 sm:w-5 sm:h-5 rounded-full bg-primary shadow-[0_0_25px_rgba(var(--primary),0.8)] group-hover:scale-150 transition-transform" />
                      <span className="font-black text-sm sm:text-2xl tracking-tighter uppercase">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-12">
              <div className="p-10 sm:p-16 rounded-[3rem] sm:rounded-[5rem] bg-card/60 border border-border/60 space-y-12 sm:space-y-20 lg:sticky lg:top-40 shadow-3xl backdrop-blur-3xl overflow-hidden">
                
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                   <Box className="w-40 h-40 -rotate-12" />
                </div>

                <div className="space-y-8 sm:space-y-10 relative z-10">
                  <p className="text-[11px] sm:text-xs font-black text-primary uppercase tracking-[0.5em] flex items-center gap-4">
                    <Code2 className="w-6 h-6" /> Tech Stack Matrix
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-5">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-secondary/80 text-[10px] sm:text-[12px] font-black uppercase tracking-widest border border-border/50 hover:border-primary/50 transition-all hover:scale-105">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-10 sm:pt-16 border-t border-border/40 space-y-8 sm:space-y-12 relative z-10">
                  <p className="text-[11px] sm:text-xs font-black text-accent uppercase tracking-[0.5em] flex items-center gap-4">
                    <Zap className="w-6 h-6" /> System Performance
                  </p>
                  <div className="space-y-5 sm:space-y-8">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-[11px] sm:text-[12px] font-black text-muted-foreground uppercase tracking-widest">{m.label}</span>
                        <span className="text-[12px] sm:text-xl font-black text-primary font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-12 sm:pt-20 border-t border-border/40 text-center opacity-30">
                   <p className="text-[11px] text-muted-foreground font-black uppercase tracking-[0.6em]">
                     Node Session: {sessionCode}
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
