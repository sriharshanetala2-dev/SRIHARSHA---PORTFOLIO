"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Code2, BrainCircuit } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { projects, Project } from "@/app/lib/projects-data";

function ProjectCard({ project, idx }: { project: Project, idx: number }) {
  const imageData = PlaceHolderImages.find(img => img.id === project.id);

  return (
    <Card 
      className="glass-card overflow-hidden group hover:border-primary/50 transition-all duration-500 flex flex-col h-full"
    >
      <Link href={`/projects/${project.id}`} className="relative h-72 overflow-hidden block">
        {imageData && (
          <Image
            src={imageData.imageUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            data-ai-hint={imageData.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
           <ArrowUpRight className="w-10 h-10 text-primary mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform" />
           <p className="text-sm font-medium text-muted-foreground line-clamp-3 mb-6">
             {project.description}
           </p>
           <span className="text-xs font-bold uppercase tracking-widest text-primary">View Full Case Study</span>
        </div>
        <div className="absolute top-4 right-4 p-2 rounded-xl glass-card backdrop-blur-md">
          <project.icon className="w-4 h-4 text-primary" />
        </div>
      </Link>

      <CardContent className="p-8 flex-1 flex flex-col gap-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-black uppercase text-primary tracking-widest">
              {project.category}
            </span>
          </div>
          <h3 className="text-2xl font-headline font-bold leading-tight group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-bold uppercase tracking-widest text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export function Projects() {
  const learningProjects = projects.filter(p => p.phase === 'learning');
  const fullstackProjects = projects.filter(p => p.phase === 'fullstack');

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-7xl font-headline font-bold tracking-tighter">Selected <span className="text-primary">Works</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            A curated evolution of engineering — from foundational systems to advanced full-stack and AI architectures.
          </p>
        </div>

        {/* Phase Sections */}
        {[
          { 
            id: "phase1",
            title: "Core Engineering Foundations", 
            subtitle: "Phase 01: Mastery of Logic & Data",
            icon: Code2, 
            data: learningProjects 
          },
          { 
            id: "phase2",
            title: "Full Stack & AI Mastery", 
            subtitle: "Phase 02: Modern Scalable Architecture",
            icon: BrainCircuit, 
            data: fullstackProjects 
          }
        ].map((phase) => (
          <div key={phase.id} className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <phase.icon className="w-6 h-6" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">{phase.subtitle}</span>
                </div>
                <h3 className="text-3xl font-headline font-bold">{phase.title}</h3>
              </div>
              <p className="text-muted-foreground text-sm max-w-sm">
                Demonstrating specialized growth through practical application of complex technical concepts.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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