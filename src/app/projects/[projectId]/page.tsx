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

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="glow-mesh opacity-20" />
      <Navbar />
      
      <main className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16">
          {/* Back Navigation */}
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-[0.4em] hover:gap-4 transition-all group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Project Archive
          </Link>

          {/* Header */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black text-accent uppercase tracking-[0.2em]"
            >
              <Activity className="w-3 h-3" />
              {project.category}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-black tracking-tighter uppercase leading-[1.1] sm:leading-tight"
            >
              {project.title.split(' ').map((word, i) => (
                <span key={i} className={cn("inline-block mr-[0.2em] last:mr-0", i % 2 !== 0 ? "text-gradient" : "")}>
                  {word}
                </span>
              ))}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-3xl opacity-70"
            >
              {project.description}
            </motion.p>
          </div>

          {/* Featured Technical Visual (System Lens) - Lite for Mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-square sm:aspect-video rounded-[2rem] sm:rounded-[3rem] overflow-hidden border border-border shadow-3xl bg-secondary/5 data-flow-grid group"
          >
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-12">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
              </div>

              <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-10 w-full">
                <motion.div 
                  animate={{ 
                    boxShadow: ["0 0 20px hsl(var(--primary) / 0.1)", "0 0 50px hsl(var(--primary) / 0.3)", "0 0 20px hsl(var(--primary) / 0.1)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="relative p-6 sm:p-16 rounded-[2rem] sm:rounded-[4rem] bg-card border border-border/50 shadow-2xl backdrop-blur-3xl"
                >
                  <project.icon className="w-10 h-10 sm:w-24 sm:h-24 text-primary" />
                  <div className="absolute -top-1 -right-1 sm:-top-4 sm:-right-4 p-1.5 sm:p-4 rounded-lg sm:rounded-2xl bg-accent text-accent-foreground shadow-xl border border-white/10">
                    <Zap className="w-3 sm:w-6 h-3 sm:h-6 animate-pulse" />
                  </div>
                </motion.div>

                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <p className="text-[7px] sm:text-[10px] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] text-primary opacity-60">Architectural Node</p>
                  <h3 className="text-sm sm:text-3xl font-black uppercase tracking-tighter text-center px-4">{project.title}</h3>
                </div>

                <div className="flex gap-2 sm:gap-6 px-3 sm:px-10 py-2 sm:py-5 glass-card rounded-xl sm:rounded-[2rem] border-white/5 bg-background/50 shadow-2xl">
                   {project.metrics.map((metric, i) => (
                     <div key={i} className="flex flex-col items-center px-1.5 sm:px-6 border-r last:border-0 border-border/50">
                       <span className="text-[5px] sm:text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-0.5 sm:mb-1">{metric.label}</span>
                       <span className="text-[8px] sm:text-sm font-bold text-accent font-mono whitespace-nowrap">{metric.value}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>

            {/* Ambient Tech Flows */}
            <motion.div 
              animate={{ 
                x: ["-100%", "100%"],
                opacity: [0, 0.2, 0]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/3 left-0 right-0 h-px bg-primary"
            />
            
            <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 p-1.5 sm:p-4 glass-card rounded-lg sm:rounded-xl border-white/5 bg-black/40 flex items-center gap-1.5 sm:gap-3">
              <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[6px] sm:text-[10px] font-black uppercase tracking-widest text-green-500">System Verified: {project.id}</span>
            </div>
          </motion.div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
            <div className="lg:col-span-8 space-y-12 sm:space-y-16">
              <section className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-4xl font-headline font-black tracking-tight flex items-center gap-3 sm:gap-4 uppercase shimmer-text">
                  <Layers className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />
                  Engineering Logic
                </h2>
                <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-medium opacity-80">
                  {project.longDescription}
                </p>
              </section>

              <section className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-4xl font-headline font-black tracking-tight flex items-center gap-3 sm:gap-4 uppercase shimmer-text">
                  <CheckCircle2 className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />
                  System Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                  {project.features.map((feature, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 sm:gap-5 p-4 sm:p-6 rounded-xl sm:rounded-[2rem] bg-secondary/20 border border-border/50 group"
                    >
                      <div className="w-2 h-2 sm:w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)] group-hover:scale-125 transition-transform" />
                      <span className="font-bold text-xs sm:text-base tracking-tight">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="p-6 sm:p-10 rounded-[1.5rem] sm:rounded-[3rem] bg-card/40 border border-border space-y-8 sm:space-y-10 lg:sticky lg:top-32 shadow-3xl backdrop-blur-xl">
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-[9px] sm:text-[10px] font-black text-primary uppercase tracking-[0.4em] flex items-center gap-2">
                    <Code2 className="w-4 h-4" /> Tech Matrix
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-3">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 sm:px-4 py-1 sm:py-2 rounded-md sm:rounded-xl bg-secondary/50 text-[8px] sm:text-xs font-black uppercase tracking-widest border border-border/50 hover:border-primary/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 sm:pt-8 border-t border-border/50 space-y-4 sm:space-y-6">
                  <p className="text-[9px] sm:text-[10px] font-black text-accent uppercase tracking-[0.4em] flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Performance
                  </p>
                  <div className="space-y-3 sm:space-y-4">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-[8px] sm:text-[10px] font-bold text-muted-foreground uppercase">{m.label}</span>
                        <span className="text-[10px] sm:text-sm font-black text-primary font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 sm:pt-8 border-t border-border/50 text-center">
                   <p className="text-[7px] sm:text-[9px] text-muted-foreground font-black uppercase tracking-widest opacity-40">
                     Check: {Math.random().toString(36).substring(7).toUpperCase()}
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