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
  Activity
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
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
      
      <main className="pt-28 sm:pt-40 pb-20 sm:pb-32 px-6 sm:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">
          {/* Back Navigation */}
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-3 text-xs font-black text-primary uppercase tracking-[0.5em] hover:gap-6 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            Project Archive
          </Link>

          {/* Header */}
          <div className="space-y-10 sm:space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-xs font-black text-accent uppercase tracking-[0.4em]"
            >
              <Activity className="w-4 h-4" />
              {project.category}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="flex flex-wrap items-center gap-x-[0.4em] text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter uppercase leading-[1.1] sm:leading-[1.05]"
            >
              {project.title.split(' ').map((word, i) => (
                <span key={i} className={cn("inline-block", i % 2 !== 0 ? "text-gradient" : "text-foreground")}>
                  {word}
                </span>
              ))}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-4xl opacity-90"
            >
              {project.description}
            </motion.p>
          </div>

          {/* Featured Technical Visual (System Lens) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square sm:aspect-video rounded-[3rem] sm:rounded-[4rem] overflow-hidden border border-border/60 shadow-3xl bg-secondary/5 data-flow-grid group"
          >
            <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-16">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }} />
              </div>

              <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-14 w-full">
                <motion.div 
                  animate={{ 
                    boxShadow: ["0 0 20px hsl(var(--primary) / 0.1)", "0 0 50px hsl(var(--primary) / 0.4)", "0 0 20px hsl(var(--primary) / 0.1)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative p-10 sm:p-20 rounded-[2.5rem] sm:rounded-[5rem] bg-card border border-border/50 shadow-2xl backdrop-blur-3xl"
                >
                  <project.icon className="w-12 h-12 sm:w-28 sm:h-28 text-primary" />
                  <div className="absolute -top-2 -right-2 sm:-top-5 sm:-right-5 p-2 sm:p-5 rounded-xl sm:rounded-3xl bg-accent text-accent-foreground shadow-xl border border-white/10">
                    <Zap className="w-4 sm:w-8 h-4 sm:w-8 animate-pulse" />
                  </div>
                </motion.div>

                <div className="flex flex-col items-center gap-2">
                  <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.5em] sm:tracking-[0.8em] text-primary opacity-70">Architectural Node</p>
                  <h3 className="text-sm sm:text-4xl font-black uppercase tracking-tighter text-center px-6 leading-tight">{project.title}</h3>
                </div>

                <div className="flex gap-3 sm:gap-10 px-4 sm:px-14 py-3 sm:py-8 glass-card rounded-2xl sm:rounded-[3rem] border-white/10 bg-background/60 shadow-2xl backdrop-blur-xl overflow-hidden max-w-[95vw]">
                   {project.metrics.map((metric, i) => (
                     <div key={i} className="flex flex-col items-center px-3 sm:px-10 border-r last:border-0 border-border/50">
                       <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-1 whitespace-nowrap">{metric.label}</span>
                       <span className="text-[11px] sm:text-lg font-black text-accent font-mono whitespace-nowrap">{metric.value}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 p-2 sm:p-5 glass-card rounded-xl sm:rounded-2xl border-white/10 bg-black/50 flex items-center gap-2 sm:gap-4">
              <div className="w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-green-500">System Verified</span>
            </div>
          </motion.div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-20">
            <div className="lg:col-span-8 space-y-16 sm:space-y-24">
              <section className="space-y-8 sm:space-y-12">
                <h2 className="text-3xl sm:text-5xl font-headline font-black tracking-tight flex items-center gap-4 sm:gap-6 uppercase shimmer-text">
                  <Layers className="w-6 h-6 sm:w-10 sm:h-10 text-primary" />
                  Engineering Logic
                </h2>
                <p className="text-base sm:text-xl text-muted-foreground leading-[1.8] font-medium opacity-90">
                  {project.longDescription}
                </p>
              </section>

              <section className="space-y-8 sm:space-y-12">
                <h2 className="text-3xl sm:text-5xl font-headline font-black tracking-tight flex items-center gap-4 sm:gap-6 uppercase shimmer-text">
                  <CheckCircle2 className="w-6 h-6 sm:w-10 sm:h-10 text-primary" />
                  System Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                  {project.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 8 }}
                      className="flex items-center gap-4 sm:gap-6 p-6 sm:p-10 rounded-2xl sm:rounded-[3rem] bg-secondary/30 border border-border/50 group"
                    >
                      <div className="w-2.5 h-2.5 sm:w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_rgba(var(--primary),0.6)] group-hover:scale-125 transition-transform" />
                      <span className="font-bold text-sm sm:text-xl tracking-tight">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-10">
              <div className="p-8 sm:p-14 rounded-[2rem] sm:rounded-[4rem] bg-card/50 border border-border/60 space-y-10 sm:space-y-14 lg:sticky lg:top-36 shadow-3xl backdrop-blur-2xl">
                <div className="space-y-6 sm:space-y-8">
                  <p className="text-xs sm:text-[11px] font-black text-primary uppercase tracking-[0.5em] flex items-center gap-3">
                    <Code2 className="w-5 h-5" /> Tech Matrix
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-2xl bg-secondary/60 text-[10px] sm:text-[11px] font-black uppercase tracking-widest border border-border/50 hover:border-primary/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-8 sm:pt-12 border-t border-border/40 space-y-6 sm:space-y-10">
                  <p className="text-xs sm:text-[11px] font-black text-accent uppercase tracking-[0.5em] flex items-center gap-3">
                    <Zap className="w-5 h-5" /> Performance
                  </p>
                  <div className="space-y-4 sm:space-y-6">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-[11px] font-black text-muted-foreground uppercase tracking-widest">{m.label}</span>
                        <span className="text-[11px] sm:text-lg font-black text-primary font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-10 sm:pt-14 border-t border-border/40 text-center">
                   <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.4em] opacity-40">
                     Check: {sessionCode}
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
