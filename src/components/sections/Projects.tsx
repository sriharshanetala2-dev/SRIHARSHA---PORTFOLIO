"use client";

import { useState } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { PlaceHolderImages } from "@/app/lib/placeholder-images";
import { cn } from "@/lib/utils";

const categories = ["All", "Web", "Mobile", "AI", "Infrastructure"];

const projects = [
  {
    title: "Enterprise Dashboard",
    category: "Web",
    image: PlaceHolderImages[0] || { imageUrl: "https://picsum.photos/seed/p1/800/600", imageHint: "dashboard software" },
    tags: ["React", "TypeScript", "D3.js"],
    description: "A real-time data visualization platform for enterprise resource planning.",
  },
  {
    title: "EcoShop Mobile",
    category: "Mobile",
    image: PlaceHolderImages[1] || { imageUrl: "https://picsum.photos/seed/p2/800/600", imageHint: "mobile shopping" },
    tags: ["React Native", "Firebase", "Redux"],
    description: "Sustainable e-commerce mobile application with localized logistics.",
  },
  {
    title: "Sentinel Cloud",
    category: "Infrastructure",
    image: PlaceHolderImages[2] || { imageUrl: "https://picsum.photos/seed/p3/800/600", imageHint: "data visual" },
    tags: ["AWS", "Terraform", "Go"],
    description: "Automated infrastructure monitoring and self-healing system.",
  },
  {
    title: "FinFlow",
    category: "Web",
    image: PlaceHolderImages[3] || { imageUrl: "https://picsum.photos/seed/p4/800/600", imageHint: "banking app" },
    tags: ["Next.js", "Prisma", "Tailwind"],
    description: "Personal finance management tool with AI-driven budgeting insights.",
  },
  {
    title: "Linguist AI",
    category: "AI",
    image: PlaceHolderImages[4] || { imageUrl: "https://picsum.photos/seed/p5/800/600", imageHint: "artificial intelligence" },
    tags: ["OpenAI", "Node.js", "Python"],
    description: "NLP platform for multi-language sentiment analysis and translation.",
  },
  {
    title: "Vitality Tracker",
    category: "Mobile",
    image: PlaceHolderImages[5] || { imageUrl: "https://picsum.photos/seed/p6/800/600", imageHint: "fitness app" },
    tags: ["Flutter", "HealthKit", "GraphQL"],
    description: "End-to-end health tracking solution with medical API integrations.",
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="space-y-4 text-center mb-16">
        <h2 className="text-4xl font-headline font-bold">Featured Projects</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A collection of digital products built with precision, scalability, and impact in mind.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeTab === cat 
                  ? "bg-accent text-accent-foreground shadow-lg" 
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <Card key={idx} className="group border-border bg-card overflow-hidden hover:border-accent/50 transition-colors shadow-xl">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={project.image.imageUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                data-ai-hint={project.image.imageHint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <button className="p-3 bg-accent rounded-full text-accent-foreground hover:scale-110 transition-transform">
                  <Github className="w-5 h-5" />
                </button>
                <button className="p-3 bg-accent rounded-full text-accent-foreground hover:scale-110 transition-transform">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="border-accent text-accent">
                  {project.category}
                </Badge>
              </div>
              <h3 className="text-xl font-headline font-bold">{project.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground bg-secondary px-2 py-1 rounded">
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
