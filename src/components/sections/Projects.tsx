
"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Monitor, Database, Cloud, Code2, Layout, Zap, Search } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "student-system",
    title: "Student Management System",
    category: "Academic",
    tags: ["Java", "SQL", "JDBC"],
    description: "A comprehensive Java-based desktop application for tracking academic performance and student enrollment with a MySQL backend.",
    icon: Database
  },
  {
    id: "weather-app",
    title: "Interactive Weather App",
    category: "Web",
    tags: ["JavaScript", "HTML5", "CSS3", "API"],
    description: "Real-time weather tracking application that fetches dynamic data using OpenWeatherMap API and features a custom-built responsive UI.",
    icon: Cloud
  },
  {
    id: "todo-app",
    title: "Advanced Todo App",
    category: "Web",
    tags: ["React", "JavaScript", "Git", "LocalStorage"],
    description: "A high-performance productivity tool with state persistence, category filtering, and mobile-first design architecture.",
    icon: Zap
  },
  {
    id: "data-analytics",
    title: "Data Analytics Platform",
    category: "Data",
    tags: ["Python", "SQL", "Pandas"],
    description: "Built a Python-driven dashboard for visualizing business metrics and sales trends through automated data processing scripts.",
    icon: Search
  },
  {
    id: "ecommerce-site",
    title: "E-commerce Website",
    category: "Fullstack",
    tags: ["React", "Bootstrap", "SQL"],
    description: "Fully responsive online marketplace featuring product catalogs, advanced search filters, and a secure checkout simulation.",
    icon: Layout
  },
  {
    id: "retailer-app",
    title: "Retailer Service App",
    category: "Cloud",
    tags: ["React", "AWS S3", "Bootstrap"],
    description: "A cloud-integrated platform connecting retailers with suppliers, utilizing AWS S3 for reliable document and asset storage.",
    icon: Cloud
  },
  {
    id: "racing-site",
    title: "Formula Racing Hub",
    category: "UI/UX",
    tags: ["HTML", "Bootstrap", "JavaScript"],
    description: "High-performance landing page for racing events featuring custom CSS animations and dynamic race schedule components.",
    icon: Code2
  },
  {
    id: "networking-tool",
    title: "Networking Monitor",
    category: "Core",
    tags: ["React", "Networking Basics", "Git"],
    description: "Simulated network topology monitor used to demonstrate understanding of IP addressing, subnets, and packet flow logic.",
    icon: Monitor
  }
];

export function Projects() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-background/50">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6 text-center mb-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            Junior Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Showcase Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A diverse collection of applications demonstrating proficiency in frontend, backend, and core engineering concepts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.id);
            return (
              <Card 
                key={idx} 
                className="group border-border bg-card overflow-hidden hover:border-accent/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden">
                  {imageData && (
                    <Image
                      src={imageData.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      data-ai-hint={imageData.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                    <button className="p-3 bg-accent rounded-full text-accent-foreground hover:scale-110 transition-transform shadow-lg" aria-label="GitHub Repository">
                      <Github className="w-5 h-5" />
                    </button>
                    <button className="p-3 bg-accent rounded-full text-accent-foreground hover:scale-110 transition-transform shadow-lg" aria-label="Live Demo">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {project.icon && (
                    <div className="absolute top-4 left-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border shadow-sm">
                      <project.icon className="w-4 h-4 text-accent" />
                    </div>
                  )}
                </div>

                <CardContent className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-accent/5 text-accent border-accent/10 text-[10px] uppercase font-bold px-2">
                        {project.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-headline font-bold group-hover:text-accent transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-secondary/50 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
