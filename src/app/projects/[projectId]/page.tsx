"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/app/lib/projects-data";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { 
  ArrowLeft, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Activity,
  Box,
  Layout,
  Terminal,
  ShieldCheck,
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
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!project) {
    notFound();
  }

  const projectImage = PlaceHolderImages.find(img => img.id === project.imageId);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <div className="glow-mesh opacity-20" />
      <Navbar />
      
      <main className="pt-32 sm:pt-48 pb-20 sm:pb-32 px-4 sm:px-12 relative z-10">
        <div className="max-w-7xl mx-auto space-y-20 sm:space-y-40">
          
          {/* Back Navigation */}
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-4 text-[11px] sm:text-[13px] font-black text-primary uppercase tracking-[0.5em] hover:gap-8 transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            Archive / {project.category}
          </Link>

          {/* Project Title Section */}
          <div className="space-y-12 sm:space-y-20 max-w-6xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-[11px] font-black text-accent uppercase tracking-[0.3em]"
            >
              <Terminal className="w-4 h-4" />
              Project Registry: {project.id}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-headline font-black tracking-tighter uppercase leading-[1.05]"
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
              className="text-lg sm:text-3xl lg:text-4xl text-muted-foreground leading-relaxed font-medium opacity-90 border-l-2 border-primary/20 pl-6 sm:pl-12 max-w-5xl"
            >
              {project.description}
            </motion.p>
          </div>

          {/* Interface & Logic Visualization */}
          <section className="space-y-16 sm:space-y-24">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-8 border-b border-border/40 pb-12">
               <div className="space-y-4 text-center sm:text-left">
                 <h2 className="text-2xl sm:text-5xl font-headline font-black tracking-tight uppercase flex items-center justify-center sm:justify-start gap-4">
                   <Layout className="w-8 h-8 text-primary" />
                   Interface Logic
                 </h2>
                 <p className="text-muted-foreground font-black text-[11px] sm:text-[13px] uppercase tracking-[0.5em]">System Architecture & UX Blueprint</p>
               </div>
               <div className="flex gap-4">
                 {[...Array(3)].map((_, i) => (
                   <div key={i} className="w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-primary/20" />
                 ))}
               </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[16/9] w-full rounded-[2.5rem] sm:rounded-[5rem] overflow-hidden border border-border bg-secondary/10 shadow-3xl"
            >
              <div className="absolute inset-0 data-flow-grid opacity-10 pointer-events-none" />
              {projectImage && (
                <Image 
                  src={projectImage.imageUrl} 
                  alt={projectImage.description}
                  fill
                  className="object-cover opacity-90 hover:scale-105 transition-transform duration-1000 grayscale hover:grayscale-0"
                  data-ai-hint={projectImage.imageHint}
                />
              )}
              <div className="absolute bottom-6 sm:bottom-12 right-6 sm:right-12 p-6 sm:p-10 glass-card bg-black/60 rounded-3xl sm:rounded-4xl border-white/10 flex items-center gap-6 shadow-2xl backdrop-blur-3xl">
                <ShieldCheck className="w-6 h-6 text-green-500" />
                <span className="text-[11px] sm:text-[13px] font-black uppercase tracking-[0.4em] text-white">Security: Verified</span>
              </div>
            </motion.div>
          </section>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 sm:gap-32">
            <div className="lg:col-span-8 space-y-24 sm:space-y-48">
              <section className="space-y-12 sm:space-y-20">
                <h2 className="text-3xl sm:text-7xl font-headline font-black tracking-tight flex items-center gap-6 sm:gap-12 uppercase shimmer-text leading-tight">
                  <Cpu className="w-10 h-10 sm:w-20 sm:h-20 text-primary" />
                  Engineering Logic
                </h2>
                <p className="text-lg sm:text-3xl text-muted-foreground leading-[1.8] font-medium opacity-90 max-w-5xl">
                  {project.longDescription}
                </p>
              </section>

              <section className="space-y-12 sm:space-y-20">
                <h2 className="text-3xl sm:text-7xl font-headline font-black tracking-tight flex items-center gap-6 sm:gap-12 uppercase shimmer-text leading-tight">
                  <Layers className="w-10 h-10 sm:w-20 sm:h-20 text-primary" />
                  Subsystem Matrix
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                  {project.features.map((feature, i) => (
                    <motion.div 
                      key={feature}
                      whileHover={{ x: 20, backgroundColor: "hsl(var(--primary) / 0.08)" }}
                      className="flex items-center gap-6 sm:gap-12 p-10 sm:p-20 rounded-[3rem] sm:rounded-[5rem] bg-secondary/20 border border-border/50 group transition-all shadow-xl"
                    >
                      <div className="w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-primary shadow-[0_0_40px_rgba(var(--primary),0.8)] group-hover:scale-125 transition-transform" />
                      <span className="font-black text-sm sm:text-4xl tracking-tighter uppercase leading-tight">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar Parameters */}
            <div className="lg:col-span-4 space-y-16">
              <div className="p-10 sm:p-20 rounded-[3.5rem] sm:rounded-[6rem] bg-card/60 border border-border/60 space-y-16 sm:space-y-32 lg:sticky lg:top-44 shadow-3xl backdrop-blur-3xl overflow-hidden">
                
                <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
                   <Box className="w-64 h-64 -rotate-12" />
                </div>

                <div className="space-y-10 sm:space-y-16 relative z-10">
                  <p className="text-[12px] sm:text-[14px] font-black text-primary uppercase tracking-[0.6em] flex items-center gap-4">
                    <Code2 className="w-6 h-6 sm:w-8 sm:h-8" /> Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-4 sm:gap-8">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-6 sm:px-10 py-4 sm:py-6 rounded-2xl sm:rounded-3xl bg-secondary/80 text-[11px] sm:text-[15px] font-black uppercase tracking-widest border border-border/50 hover:border-primary/50 transition-all hover:scale-105 shadow-xl">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-12 sm:pt-24 border-t border-border/40 space-y-10 sm:space-y-16 relative z-10">
                  <p className="text-[12px] sm:text-[14px] font-black text-accent uppercase tracking-[0.6em] flex items-center gap-4">
                    <Activity className="w-6 h-6 sm:w-8 sm:h-8" /> Node Parameters
                  </p>
                  <div className="grid grid-cols-3 gap-4 sm:gap-10">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col items-center gap-2 text-center">
                        <span className="text-[10px] sm:text-[12px] font-black text-muted-foreground uppercase tracking-widest">{m.label}</span>
                        <span className="text-sm sm:text-xl font-black text-primary uppercase font-headline">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-12 sm:pt-32 border-t border-border/40 text-center opacity-40">
                   <p className="text-[11px] sm:text-[14px] text-muted-foreground font-black uppercase tracking-[0.8em]">
                     Engineering Archive
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
