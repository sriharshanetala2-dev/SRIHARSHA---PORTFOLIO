
"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Code2, BrainCircuit, Terminal, Layers, ShieldCheck, Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects, Project } from "@/app/lib/projects-data";

/**
 * ProjectLens: A unique, UI-focused visualization for projects
 * Instead of screenshots, this component visualizes the "architecture" of the project.
 */
function ProjectLens({ project }: { project: Project }) {
  return (
    <div className="relative h-64 overflow-hidden bg-muted/30 border-b border-foreground/5 group-hover:bg-primary/5 transition-colors flex items-center justify-center p-8">
      {/* Decorative Blueprint Lines */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-foreground" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-foreground" />
        <div className="absolute inset-0 border-[20px] border-foreground/5 rounded-full" />
      </div>

      {/* Dynamic Visual Content based on Project Type */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <div className="p-6 rounded-[2rem] bg-background shadow-2xl ring-1 ring-foreground/5 group-hover:scale-110 transition-transform duration-700">
          <project.icon className="w-12 h-12 text-primary" />
        </div>
        
        <div className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40">System Core</p>
          <p className="text-xs font-bold font-headline">{project.title}</p>
        </div>

        {/* Floating Data Nodes */}
        <div className="absolute -top-4 -right-4 flex gap-1 items-center p-2 rounded-lg bg-background border border-foreground/5 shadow-xl animate-float">
          <Activity className="w-3 h-3 text-accent" />
          <span className="text-[8px] font-black">STABLE</span>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
          <div className="flex justify-around gap-4">
             {project.metrics.map((m, i) => (
               <div key={i} className="flex flex-col items-center">
                 <span className="text-[7px] font-black uppercase tracking-widest opacity-40">{m.label}</span>
                 <span className="text-[9px] font-bold text-primary">{m.value}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, idx }: { project: Project, idx: number }) {
  return (
    <Card 
      className="glass-card overflow-hidden group hover:border-primary/40 transition-all duration-500 flex flex-col h-full border-foreground/5"
    >
      <Link href={`/projects/${project.id}`} className="relative block flex-1">
        <ProjectLens project={project} />
        
        <CardContent className="p-8 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-black uppercase text-primary tracking-[0.3em]">
                {project.category}
              </span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-primary/20" />
                ))}
              </div>
            </div>
            
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-headline font-black leading-[0.9] group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed font-medium">
              {project.description}
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-foreground/5">
             <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md bg-foreground/5 text-[8px] font-black uppercase tracking-widest opacity-60">
                    {tag}
                  </span>
                ))}
             </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

export function Projects() {
  const learningProjects = projects.filter(p => p.phase === 'learning');
  const fullstackProjects = projects.filter(p => p.phase === 'fullstack');

  return (
    <section id="portfolio" className="py-32 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-[9px] font-black tracking-widest text-primary uppercase border-primary/20">
              <Terminal className="w-3 h-3" />
              Engineered Modules
            </div>
            <h2 className="text-5xl md:text-9xl font-headline font-black tracking-tighter leading-none">
              SYSTEM <br />
              <span className="text-gradient">SHOWCASE</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-lg font-medium leading-relaxed opacity-60">
            A chronological mapping of technical growth—transitioning from logical foundations to neural-orchestrated full stack architectures.
          </p>
        </div>

        {/* Phase Sections */}
        {[
          { 
            id: "phase1",
            title: "Core Foundations", 
            subtitle: "Engineering Logic & Data Integrity",
            icon: Layers, 
            data: learningProjects 
          },
          { 
            id: "phase2",
            title: "Intelligence Hub", 
            subtitle: "Semantic AI & Scalable Distribution",
            icon: BrainCircuit, 
            data: fullstackProjects 
          }
        ].map((phase) => (
          <div key={phase.id} className="space-y-12">
            <div className="flex items-center gap-6 pb-6 border-b border-foreground/5">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <phase.icon className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">{phase.subtitle}</p>
                <h3 className="text-3xl font-headline font-black uppercase tracking-tight">{phase.title}</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
              {phase.data.map((project, idx) => (
                <ProjectCard key={project.id} project={project} idx={idx} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
