"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Layers, Cpu } from "lucide-react";
import { projects, Project } from "@/app/lib/projects-data";

/**
 * ProjectMatrixLens: A sophisticated, architecture-focused visualization.
 */
function ProjectMatrixLens({ project }: { project: Project }) {
  return (
    <div className="relative h-64 sm:h-80 overflow-hidden bg-muted/20 border-b border-white/10 group-hover:bg-primary/5 transition-all duration-700 flex items-center justify-center p-8">
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      {/* Floating UI Elements */}
      <motion.div 
        className="relative z-10 flex flex-col items-center gap-6"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="relative">
          <div className="p-6 sm:p-8 rounded-[2.5rem] sm:rounded-[3rem] bg-card border border-white/10 shadow-[0_0_50px_rgba(var(--primary),0.1)] group-hover:shadow-[0_0_80px_rgba(var(--primary),0.2)] transition-all duration-700">
            <project.icon className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
          </div>
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-accent text-accent-foreground shadow-xl border border-white/10"
          >
            <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.div>
        </div>
        
        <div className="space-y-1 text-center">
          <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.5em] text-primary opacity-60">Logic Module</p>
          <p className="text-base sm:text-lg font-black font-headline tracking-tighter uppercase">{project.title}</p>
        </div>
      </motion.div>

      {/* Telemetry Bar */}
      <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex justify-between gap-4 px-4 sm:px-6 py-3 sm:py-4 glass-card rounded-xl sm:rounded-2xl border-white/5 bg-background/40 backdrop-blur-md">
         {project.metrics.slice(0, 2).map((m, i) => (
           <div key={i} className="flex flex-col items-start gap-1">
             <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-muted-foreground">{m.label}</span>
             <span className="text-[10px] sm:text-[11px] font-bold text-accent font-mono tracking-tighter">{m.value}</span>
           </div>
         ))}
      </div>
    </div>
  );
}

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--primary),0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card text-[10px] font-black tracking-[0.5em] text-primary uppercase border-primary/20 shadow-xl"
          >
            <Layers className="w-4 h-4" />
            Project Matrix
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl md:text-9xl font-headline font-black tracking-tighter leading-[0.9] uppercase"
          >
            COMPUTATIONAL <br />
            <span className="text-gradient">SHOWCASE</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-xl text-muted-foreground max-w-3xl font-medium leading-relaxed opacity-70 px-4"
          >
            A curated selection of software experiments, ranging from core Java algorithms to high-performance AI-integrated Full Stack systems.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Card className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-700 flex flex-col h-full border-white/5 shadow-3xl bg-card/20 backdrop-blur-3xl rounded-[2.5rem] sm:rounded-[3rem]">
                <Link href={`/projects/${project.id}`} className="relative block flex-1">
                  <ProjectMatrixLens project={project} />
                  
                  <CardContent className="p-8 sm:p-12 space-y-8 sm:space-y-10">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-[8px] sm:text-[10px] font-black uppercase text-accent tracking-[0.4em] px-3 sm:px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                          {project.category}
                        </span>
                        <div className="flex gap-1 sm:gap-2">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-all duration-500" style={{ transitionDelay: `${i * 100}ms` }} />
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-start justify-between gap-4 sm:gap-6">
                        <h3 className="text-2xl sm:text-4xl font-headline font-black leading-tight group-hover:text-primary transition-colors tracking-tighter uppercase">
                          {project.title}
                        </h3>
                        <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-secondary/50 border border-white/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                      </div>

                      <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-medium line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:gap-3 pt-6 sm:pt-10 border-t border-white/10">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-secondary/30 text-[8px] sm:text-[10px] font-black uppercase tracking-widest border border-white/5 group-hover:border-primary/20 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}