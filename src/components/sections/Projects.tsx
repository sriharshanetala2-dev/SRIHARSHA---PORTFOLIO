"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { cn } from "@/lib/utils";

const categories = ["All", "Web", "UI/UX", "Management"];

const projects = [
  {
    title: "Student Management System",
    category: "Management",
    image: PlaceHolderImages.find(img => img.id === "student-system"),
    tags: ["Java", "SQL", "HTML/CSS"],
    description: "A centralized system for managing academic records, student details, and administrative tasks efficiently.",
  },
  {
    title: "Interactive Weather App",
    category: "Web",
    image: PlaceHolderImages.find(img => img.id === "weather-app"),
    tags: ["JavaScript", "HTML5", "CSS3"],
    description: "Real-time weather application providing accurate forecast data with a clean, responsive user interface.",
  },
  {
    title: "Advanced Todo App",
    category: "Web",
    image: PlaceHolderImages.find(img => img.id === "todo-app"),
    tags: ["React", "JavaScript", "Git"],
    description: "A feature-rich productivity tool for task tracking, categorization, and persistent data management.",
  },
  {
    title: "Data Analytics for Business",
    category: "UI/UX",
    image: PlaceHolderImages.find(img => img.id === "data-analytics"),
    tags: ["Python", "SQL", "React"],
    description: "Insightful data visualization platform designed to help businesses make data-driven decisions.",
  },
  {
    title: "E-commerce Website",
    category: "Web",
    image: PlaceHolderImages.find(img => img.id === "ecommerce-site"),
    tags: ["React", "Bootstrap", "SQL"],
    description: "A complete online shopping experience with product listings, search functionality, and a responsive layout.",
  },
  {
    title: "Retailer Service Provider App",
    category: "UI/UX",
    image: PlaceHolderImages.find(img => img.id === "retailer-app"),
    tags: ["React", "AWS S3", "Bootstrap"],
    description: "Platform connecting retailers with essential service providers, leveraging cloud storage for reliability.",
  },
  {
    title: "Interactive Racing Website",
    category: "Web",
    image: PlaceHolderImages.find(img => img.id === "racing-site"),
    tags: ["HTML", "Bootstrap", "JavaScript"],
    description: "Dynamic landing page for racing enthusiasts featuring high-performance animations and event schedules.",
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="space-y-6 text-center mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
          Selected Works
        </div>
        <h2 className="text-4xl md:text-5xl font-headline font-bold">Featured Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          A showcase of my recent development work, focused on building clean and functional applications.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300",
                activeTab === cat 
                  ? "bg-accent text-accent-foreground shadow-xl scale-105" 
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.map((project, idx) => (
          <Card key={idx} className="group border-border bg-card overflow-hidden hover:border-accent/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2">
            <div className="relative h-64 overflow-hidden">
              {project.image && (
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  data-ai-hint={project.image.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                <button className="p-4 bg-accent rounded-full text-accent-foreground hover:scale-110 transition-transform shadow-lg" aria-label="GitHub Repository">
                  <Github className="w-6 h-6" />
                </button>
                <button className="p-4 bg-accent rounded-full text-accent-foreground hover:scale-110 transition-transform shadow-lg" aria-label="Live Demo">
                  <ExternalLink className="w-6 h-6" />
                </button>
              </div>
            </div>
            <CardContent className="p-8 space-y-5">
              <Badge variant="outline" className="border-accent/50 text-accent font-bold px-3 py-1">
                {project.category}
              </Badge>
              <h3 className="text-2xl font-headline font-bold group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[11px] uppercase font-bold tracking-widest text-muted-foreground bg-secondary/80 px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
