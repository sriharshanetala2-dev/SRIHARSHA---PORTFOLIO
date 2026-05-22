
"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/app/lib/projects-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Github, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Code2 
} from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function ProjectPage({ params }: { params: Promise<{ projectId: string }> }) {
  const resolvedParams = use(params);
  const project = projects.find((p) => p.id === resolvedParams.projectId);
  
  if (!project) {
    notFound();
  }

  const imageData = PlaceHolderImages.find((img) => img.id === project.id);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Back Navigation */}
          <Link 
            href="/#portfolio" 
            className="inline-flex items-center gap-2 text-sm font-bold text-accent uppercase tracking-widest hover:gap-4 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Showcase
          </Link>

          {/* Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[10px] font-black text-accent uppercase tracking-[0.2em]">
              {project.category}
            </div>
            <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tighter">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl group">
            {imageData && (
              <Image 
                src={imageData.imageUrl} 
                alt={project.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-12">
              <section className="space-y-6">
                <h2 className="text-3xl font-headline font-bold flex items-center gap-3">
                  <Layers className="w-6 h-6 text-accent" />
                  Project Architecture
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </section>

              <section className="space-y-6">
                <h2 className="text-3xl font-headline font-bold flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  Key Modules & Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/50">
                      <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(var(--accent),0.5)]" />
                      <span className="font-bold text-sm tracking-tight">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 rounded-[2rem] bg-card border border-border space-y-8 sticky top-32 shadow-xl">
                <div className="space-y-4">
                  <p className="text-[10px] font-black text-accent uppercase tracking-widest flex items-center gap-2">
                    <Code2 className="w-3 h-3" /> Technical Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-secondary text-xs font-bold border border-border/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-6 border-t border-border">
                  <Button 
                    asChild 
                    className="w-full h-14 rounded-xl bg-accent text-accent-foreground font-black uppercase tracking-widest gap-2"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5" /> Repository
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full h-14 rounded-xl font-black uppercase tracking-widest gap-2"
                  >
                    <a href="#" onClick={(e) => { e.preventDefault(); alert('Demo environment initializing...'); }}>
                      <ExternalLink className="w-5 h-5" /> Live System
                    </a>
                  </Button>
                </div>

                <div className="pt-4 text-center">
                   <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-tighter opacity-50">
                     Reference ID: {project.id.toUpperCase()}-v1.0
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
