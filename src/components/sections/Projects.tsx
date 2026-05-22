
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Layers, Cpu } from "lucide-react";
import { projects, Project } from "@/app/lib/projects-data";

function ProjectLens({ project }: { project: Project }) {
  return (
    <div className="relative h-64 overflow-hidden bg-muted/20 border-b border-border flex items-center justify-center p-6 sm:p-8 group-hover:bg-primary/5 transition-all duration-500">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 2 }}
          className="relative p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-card border border-border shadow-xl transition-all duration-500"
        >
          <project.icon className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
          <div className="absolute -top-1.5 -right-1.5 p-1.5 rounded-lg bg-accent text-accent-foreground shadow-lg border border-border">
            <Cpu className="w-3.5 h-3.5" />
          </div>
        </motion.div>
        <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-primary opacity-60">System Lens</p>
      </div>

      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex justify-between px-4 sm:px-6 py-2.5 sm:py-3 glass-card rounded-xl sm:rounded-2xl border-border bg-background/50 backdrop-blur-md">
         {project.metrics.map((m, i) => (
           <div key={i} className="flex flex-col items-start px-2 border-r last:border-0 border-border/20">
             <span className="text-[6px] sm:text-[8px] font-black uppercase tracking-widest text-muted-foreground whitespace-nowrap">{m.label}</span>
             <span className="text-[9px] sm:text-[11px] font-bold text-accent font-mono truncate max-w-[80px] sm:max-w-none">{m.value}</span>
           </div>
         ))}
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        <div className="text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card text-[10px] font-black tracking-[0.4em] text-primary uppercase border-primary/20"
          >
            <Layers className="w-4 h-4" />
            Project Matrix
          </motion.div>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-headline font-black tracking-tighter leading-[0.9] uppercase shimmer-text">
            COMPUTATIONAL <span className="text-gradient">SHOWCASE</span>
          </h2>
          
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-medium opacity-70 leading-relaxed uppercase tracking-[0.15em]">
            A curated selection of software experiments, ranging from core Java algorithms to high-performance AI-integrated Full Stack systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card overflow-hidden group hover:border-primary/40 transition-all flex flex-col h-full rounded-[2.5rem] bg-card/30">
                <Link href={`/projects/${project.id}`} className="relative block flex-1">
                  <ProjectLens project={project} />
                  
                  <CardContent className="p-8 sm:p-10 space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase text-accent tracking-[0.3em] px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                          {project.category}
                        </span>
                        <div className="flex gap-1">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-all duration-500" style={{ transitionDelay: `${i * 100}ms` }} />
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-2xl sm:text-3xl font-headline font-black leading-tight group-hover:text-primary transition-colors tracking-tighter uppercase">
                          {project.title}
                        </h3>
                        <div className="p-3 rounded-xl bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>

                      <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-medium line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-8 border-t border-border/50">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-lg bg-secondary/50 text-[10px] font-black uppercase tracking-widest border border-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
