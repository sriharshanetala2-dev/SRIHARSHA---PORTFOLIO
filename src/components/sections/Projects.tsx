"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, Code2, BrainCircuit } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { cn } from "@/lib/utils";
import { projects, Project } from "@/app/lib/projects-data";

function ProjectCard({ project, idx }: { project: Project, idx: number }) {
  const imageData = PlaceHolderImages.find(img => img.id === project.id);

  return (
    <div className="h-full">
      <Card 
        className={cn(
          "group border-border bg-card overflow-hidden hover:border-accent/40 transition-all duration-300 shadow-xl hover:shadow-2xl h-full flex flex-col",
          "animate-in fade-in slide-in-from-bottom-10 duration-700 fill-mode-both"
        )}
        style={{ animationDelay: `${idx * 100}ms` }}
      >
        <Link href={`/projects/${project.id}`} className="relative h-64 overflow-hidden block">
          {imageData && (
            <Image
              src={imageData.imageUrl}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              data-ai-hint={imageData.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
             <div className="bg-accent text-accent-foreground px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
               View Details <ArrowRight className="w-4 h-4" />
             </div>
          </div>
          
          {project.icon && (
            <div className="absolute top-4 left-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border shadow-sm z-10">
              <project.icon className="w-4 h-4 text-accent" />
            </div>
          )}
        </Link>

        <CardContent className="p-8 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-accent/5 text-accent border-accent/10 text-[10px] uppercase font-bold px-2">
              {project.category}
            </Badge>
            <Link href={`/projects/${project.id}`}>
              <h3 className="text-xl font-headline font-bold group-hover:text-accent transition-colors leading-tight">
                {project.title}
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 2).map((tag: string) => (
                <span 
                  key={tag} 
                  className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-secondary/50 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function Projects() {
  const learningProjects = projects.filter(p => p.phase === 'learning');
  const fullstackProjects = projects.filter(p => p.phase === 'fullstack');

  return (
    <section id="portfolio" className="py-32 px-6 bg-background/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            Portfolio Timeline
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Project Architecture Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Exploring the evolution from core engineering foundations to high-performance modern web and AI solutions.
          </p>
        </div>

        {/* Learning Phase - Now First */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
              <Code2 className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-headline font-bold">Phase 01: Core Learning & Engineering</h3>
              <p className="text-muted-foreground font-medium uppercase text-[10px] tracking-widest">Foundation & Systems Building</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {learningProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </div>
        </div>

        {/* Full Stack Phase - Now Second */}
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-accent/10 text-accent">
              <BrainCircuit className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-3xl font-headline font-bold">Phase 02: Full Stack & AI Mastery</h3>
              <p className="text-muted-foreground font-medium uppercase text-[10px] tracking-widest">Modern Architectural Solutions</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullstackProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} idx={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}