"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { cn } from "@/lib/utils";

const categories = ["All", "Web", "Frontend", "UI"];

const projects = [
  {
    title: "Modern Personal Portfolio",
    category: "Web",
    image: PlaceHolderImages[0] || { imageUrl: "https://picsum.photos/seed/p1/800/600", imageHint: "portfolio website" },
    tags: ["Next.js", "Tailwind CSS", "Lucide Icons"],
    description: "A professional portfolio built to showcase skills and projects with a focus on clean design and performance.",
  },
  {
    title: "Interactive Weather App",
    category: "Web",
    image: PlaceHolderImages[1] || { imageUrl: "https://picsum.photos/seed/p2/800/600", imageHint: "weather app" },
    tags: ["React", "Fetch API", "Tailwind"],
    description: "Real-time weather application that fetches data from a weather API and displays local forecasts.",
  },
  {
    title: "Task Management Tool",
    category: "Web",
    image: PlaceHolderImages[2] || { imageUrl: "https://picsum.photos/seed/p3/800/600", imageHint: "to do list" },
    tags: ["JavaScript", "LocalStorage", "CSS"],
    description: "A simple and effective productivity app to manage daily tasks with persistent data storage.",
  },
  {
    title: "E-commerce Landing Page",
    category: "Frontend",
    image: PlaceHolderImages[3] || { imageUrl: "https://picsum.photos/seed/p4/800/600", imageHint: "online store" },
    tags: ["HTML", "SASS", "Responsive"],
    description: "A pixel-perfect landing page for a fictional brand, focusing on high-quality visuals and user engagement.",
  },
  {
    title: "Recipe Explorer",
    category: "Frontend",
    image: PlaceHolderImages[4] || { imageUrl: "https://picsum.photos/seed/p5/800/600", imageHint: "food recipes" },
    tags: ["React", "Styled Components"],
    description: "An application that allows users to search for various food recipes and filter them by category.",
  },
  {
    title: "Expense Tracker Dashboard",
    category: "UI",
    image: PlaceHolderImages[5] || { imageUrl: "https://picsum.photos/seed/p6/800/600", imageHint: "finance dashboard" },
    tags: ["React", "Chart.js"],
    description: "A visual tool for tracking personal finances with data visualization for monthly spending.",
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
        <h2 className="text-4xl md:text-5xl font-headline font-bold">Foundation Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          Here are some of the core projects I've built while mastering web development. 
          Each one focuses on solving specific technical challenges.
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
              <Image
                src={project.image.imageUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                data-ai-hint={project.image.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                <button className="p-4 bg-accent rounded-full text-accent-foreground hover:scale-110 transition-transform shadow-lg">
                  <Github className="w-6 h-6" />
                </button>
                <button className="p-4 bg-accent rounded-full text-accent-foreground hover:scale-110 transition-transform shadow-lg">
                  <ExternalLink className="w-6 h-6" />
                </button>
              </div>
            </div>
            <CardContent className="p-8 space-y-5">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="border-accent/50 text-accent font-bold px-3 py-1">
                  {project.category}
                </Badge>
              </div>
              <h3 className="text-2xl font-headline font-bold group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
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
