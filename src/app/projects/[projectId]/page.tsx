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
      
      <main className="pt-32 sm:pt-44 pb-20 sm:pb-32 px-6 sm:px-12 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-32">
          
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-4 text-[12px] font-black text-primary uppercase tracking-[0.6em] hover:gap-8 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            Archive / {project.category}
          </Link>

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
              className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter uppercase leading-tight sm:leading-[1.1] flex flex-wrap"
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
              className="text-lg sm:text-2xl text-muted-foreground leading-relaxed font-medium opacity-90 border-l-2 border-primary/20 pl-6 sm:pl-10"
            >
              {project.description}
            </motion.p>
          </div>

          {/* Visual Hero HUD */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative aspect-[4/5] sm:aspect-video rounded-[3rem] sm:rounded-[4.5rem] overflow-hidden border border-border/60 shadow-3xl bg-secondary/5 data-flow-grid group"
          >
            <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-20">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1.5px, transparent 1.5px)', backgroundSize: '64px 64px' }} />
              </div>

              <div className="relative z-10 flex flex-col items-center gap-8 sm:gap-20 w-full">
                <motion.div 
                  animate={{ 
                    boxShadow: ["0 0 30px hsl(var(--primary) / 0.1)", "0 0 80px hsl(var(--primary) / 0.3)", "0 0 30px hsl(var(--primary) / 0.1)"]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="relative p-10 sm:p-24 rounded-[3rem] sm:rounded-[6rem] bg-card border border-border/50 shadow-3xl backdrop-blur-3xl"
                >
                  <project.icon className="w-16 h-16 sm:w-40 sm:h-40 text-primary" />
                  <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 p-4 sm:p-8 rounded-2xl sm:rounded-[2.5rem] bg-accent text-accent-foreground shadow-3xl border border-white/10">
                    <Zap className="w-6 sm:w-12 h-6 sm:h-12 animate-pulse" />
                  </div>
                </motion.div>

                <div className="flex flex-col items-center gap-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.8em] text-primary opacity-60">System Core Node</p>
                  <h3 className="text-2xl sm:text-6xl font-black uppercase tracking-tighter text-center px-4 leading-tight">{project.title}</h3>
                </div>

                {/* Metrics Control Panel */}
                <div className="grid grid-cols-1 sm:flex items-center justify-center gap-6 sm:gap-12 px-6 sm:px-20 py-8 sm:py-12 glass-card rounded-[2.5rem] sm:rounded-[4rem] border-white/10 bg-background/60 shadow-3xl backdrop-blur-2xl w-full max-w-4xl mx-auto">
                   {project.metrics.map((metric, i) => (
                     <div key={i} className="flex flex-col items-center px-4 sm:px-12 border-b sm:border-b-0 sm:border-r last:border-0 border-border/30 pb-4 sm:pb-0 last:pb-0">
                       <span className="text-[10px] sm:text-[12px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-2 sm:mb-3 whitespace-nowrap">{metric.label}</span>
                       <span className="text-lg sm:text-3xl font-black text-accent uppercase font-headline whitespace-nowrap">{metric.value}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Corner Decorative Elements */}
            <div className="absolute top-8 left-8 sm:top-14 sm:left-14 flex gap-3 sm:gap-4">
               <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl glass-card border-white/5 bg-black/40 flex items-center justify-center shadow-2xl">
                 <Cpu className="w-5 h-5 sm:w-8 sm:h-8 text-primary/60" />
               </div>
               <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl glass-card border-white/5 bg-black/40 flex items-center justify-center shadow-2xl">
                 <ShieldCheck className="w-5 h-5 sm:w-8 sm:h-8 text-primary/60" />
               </div>
            </div>

            <div className="absolute bottom-8 left-8 sm:bottom-14 sm:left-14 p-3 sm:p-8 glass-card rounded-2xl sm:rounded-[2.5rem] border-white/10 bg-black/60 flex items-center gap-4 shadow-3xl">
              <div className="relative">
                <div className="w-2.5 h-2.5 sm:w-5 sm:h-5 rounded-full bg-green-500 animate-ping absolute inset-0" />
                <div className="w-2.5 h-2.5 sm:w-5 sm:h-5 rounded-full bg-green-500 shadow-[0_0_20px_#22c55e]" />
              </div>
              <span className="text-[10px] sm:text-[13px] font-black uppercase tracking-[0.6em] text-green-500">Node Secure</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-24">
            <div className="lg:col-span-8 space-y-20 sm:space-y-32">
              <section className="space-y-12 sm:space-y-16">
                <h2 className="text-3xl sm:text-7xl font-headline font-black tracking-tight flex items-center gap-6 sm:gap-10 uppercase shimmer-text">
                  <Layers className="w-10 h-10 sm:w-16 sm:h-16 text-primary" />
                  Engineering Logic
                </h2>
                <p className="text-lg sm:text-2xl text-muted-foreground leading-[1.8] font-medium opacity-90 max-w-4xl">
                  {project.longDescription}
                </p>
              </section>

              <section className="space-y-12 sm:space-y-16">
                <h2 className="text-3xl sm:text-7xl font-headline font-black tracking-tight flex items-center gap-6 sm:gap-10 uppercase shimmer-text">
                  <CheckCircle2 className="w-10 h-10 sm:w-16 sm:h-16 text-primary" />
                  Core Subsystems
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                  {project.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 15, backgroundColor: "hsl(var(--primary) / 0.08)" }}
                      className="flex items-center gap-6 sm:gap-10 p-8 sm:p-16 rounded-[2.5rem] sm:rounded-[4.5rem] bg-secondary/20 border border-border/50 group transition-all shadow-xl"
                    >
                      <div className="w-3 h-3 sm:w-6 sm:h-6 rounded-full bg-primary shadow-[0_0_30px_rgba(var(--primary),0.8)] group-hover:scale-150 transition-transform" />
                      <span className="font-black text-base sm:text-3xl tracking-tighter uppercase">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-12">
              <div className="p-10 sm:p-20 rounded-[3rem] sm:rounded-[5.5rem] bg-card/60 border border-border/60 space-y-12 sm:space-y-24 lg:sticky lg:top-44 shadow-3xl backdrop-blur-3xl overflow-hidden">
                
                <div className="absolute top-0 right-0 p-14 opacity-5 pointer-events-none">
                   <Box className="w-48 h-48 -rotate-12" />
                </div>

                <div className="space-y-10 sm:space-y-12 relative z-10">
                  <p className="text-[12px] font-black text-primary uppercase tracking-[0.6em] flex items-center gap-5">
                    <Code2 className="w-6 h-6" /> Tech Stack Matrix
                  </p>
                  <div className="flex flex-wrap gap-3 sm:gap-6">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-4 sm:px-7 py-3 sm:py-5 rounded-2xl sm:rounded-3xl bg-secondary/80 text-[10px] sm:text-[13px] font-black uppercase tracking-widest border border-border/50 hover:border-primary/50 transition-all hover:scale-105 shadow-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-12 sm:pt-20 border-t border-border/40 space-y-10 relative z-10">
                  <p className="text-[12px] font-black text-accent uppercase tracking-[0.6em] flex items-center gap-5">
                    <Activity className="w-6 h-6" /> Node Parameters
                  </p>
                  <div className="space-y-6 sm:space-y-10">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-[13px] font-black text-muted-foreground uppercase tracking-widest">{m.label}</span>
                        <span className="text-[13px] sm:text-2xl font-black text-primary uppercase font-headline">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-12 sm:pt-24 border-t border-border/40 text-center opacity-40">
                   <p className="text-[11px] text-muted-foreground font-black uppercase tracking-[0.8em]">
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
