"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Terminal, Activity, Layers, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects, Project } from "@/app/lib/projects-data";

/**
 * SystemLens: A unique, UI-focused visualization for projects.
 * Instead of screenshots, this component visualizes the "architecture" and logic.
 */
function SystemLens({ project }: { project: Project }) {
  return (
    <div className="relative h-72 overflow-hidden bg-muted/10 border-b border-white/5 group-hover:bg-primary/5 transition-all duration-700 flex items-center justify-center p-8">
      {/* Decorative Blueprint Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-foreground" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-foreground" />
        <div className="grid grid-cols-6 h-full w-full">
          {[...Array(6)].map((_, i) => <div key={i} className="border-r border-white/5" />)}
        </div>
      </div>

      {/* Dynamic Visual Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <div className="relative">
          <div className="p-7 rounded-[2.5rem] bg-card border border-white/10 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700">
            <project.icon className="w-14 h-14 text-primary" />
          </div>
          <div className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-accent text-accent-foreground shadow-lg animate-bounce">
            <Activity className="w-4 h-4" />
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary opacity-60">Module Engine</p>
          <p className="text-sm font-black font-headline tracking-tight">{project.title}</p>
        </div>

        {/* Dynamic Metric Bar */}
        <div className="absolute bottom-6 left-6 right-6 flex justify-between gap-6 px-4 py-3 glass-card rounded-2xl border-white/5">
           {project.metrics.slice(0, 2).map((m, i) => (
             <div key={i} className="flex flex-col items-start">
               <span className="text-[8px] font-black uppercase tracking-widest opacity-40">{m.label}</span>
               <span className="text-[10px] font-bold text-accent">{m.value}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-500 flex flex-col h-full border-white/5 shadow-2xl">
      <Link href={`/projects/${project.id}`} className="relative block flex-1">
        <SystemLens project={project} />
        
        <CardContent className="p-10 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase text-accent tracking-[0.3em] px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                {project.category}
              </span>
              <div className="flex gap-1.5">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
                ))}
              </div>
            </div>
            
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-3xl font-headline font-black leading-none group-hover:text-primary transition-colors tracking-tighter">
                {project.title}
              </h3>
              <ArrowUpRight className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <p className="text-base text-muted-foreground leading-relaxed font-medium line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-lg bg-secondary/50 text-[9px] font-black uppercase tracking-widest border border-white/5">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

export function Projects() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.02),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card text-[10px] font-black tracking-[0.4em] text-primary uppercase border-primary/20">
            <Terminal className="w-3.5 h-3.5" />
            Computational Project Matrix
          </div>
          <h2 className="text-6xl md:text-9xl font-headline font-black tracking-tighter leading-[0.85]">
            SYSTEM <br />
            <span className="text-gradient">SHOWCASE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed opacity-70">
            A comprehensive mapping of my computational journey—transitioning from algorithmic foundations to semantic AI full-stack applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
