
"use client";

import { useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Database, Sparkles, Network, Code2, LineChart, Search } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "student-system",
    title: "Student Management System",
    category: "Academic / Management",
    tags: ["Java", "SQL", "JDBC"],
    description: "An intelligent, high-performance database system designed for seamless academic lifecycle tracking and performance analytics.",
    icon: Database,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "#dashboard"
  },
  {
    id: "weather-app",
    title: "AI Weather Oracle",
    category: "Generative AI",
    tags: ["JavaScript", "OpenWeather API", "Neural Networks"],
    description: "A creative AI-powered weather forecasting application utilizing neural network architectures to predict atmospheric trends with a stunning, futuristic interface.",
    icon: Sparkles,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "https://weather.visualcrossing.com"
  },
  {
    id: "todo-app",
    title: "AI Cognitive Task Manager",
    category: "GenAI / Coding",
    tags: ["Next.js", "Genkit", "Firebase"],
    description: "A dynamic orchestration engine utilizing code-driven logic and LLMs to prioritize, categorize, and automate scheduling with predictive accuracy.",
    icon: Code2,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "https://github.com/sriharshanetala2-dev"
  },
  {
    id: "ecommerce-site",
    title: "MarketSync: Adaptive Trading Hub",
    category: "E-Commerce / FinTech",
    tags: ["React", "Tailwind", "Firebase"],
    description: "A professional marketing analytics platform integrating stock market trend analysis and real-time data visualization for digital asset management.",
    icon: LineChart,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "https://github.com/sriharshanetala2-dev"
  },
  {
    id: "subnet-master",
    title: "SubnetMaster: Visual IP Engine",
    category: "Network Engineering",
    tags: ["React", "Networking", "Subnetting"],
    description: "An autonomous network topology designer for precision IP subnetting, utilizing terminal-style logic and visual calculation engines.",
    icon: Network,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "https://www.subnet-calculator.com"
  },
  {
    id: "data-analytics",
    title: "Data Analytics Platform",
    category: "Business Intel",
    tags: ["Python", "SQL", "Pandas"],
    description: "Advanced analytical engine for synthesizing complex business datasets into predictive visual insights through automated processing scripts.",
    icon: Search,
    github: "https://github.com/sriharshanetala2-dev",
    demo: "https://public.tableau.com"
  }
];

function ProjectCard({ project, idx }: { project: any, idx: number }) {
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
        <div className="relative h-64 overflow-hidden">
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
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-accent rounded-full text-accent-foreground hover:scale-110 transition-transform shadow-lg" 
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href={project.demo}
              target={project.demo.startsWith('#') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="p-3 bg-accent rounded-full text-accent-foreground hover:scale-110 transition-transform shadow-lg" 
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
          
          {project.icon && (
            <div className="absolute top-4 left-4 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border shadow-sm z-10">
              <project.icon className="w-4 h-4 text-accent" />
            </div>
          )}
        </div>

        <CardContent className="p-8 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <Badge variant="secondary" className="bg-accent/5 text-accent border-accent/10 text-[10px] uppercase font-bold px-2">
              {project.category}
            </Badge>
            <h3 className="text-xl font-headline font-bold group-hover:text-accent transition-colors leading-tight">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
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
    </div>
  );
}

export function Projects() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-background/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6 text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-bold text-accent uppercase tracking-widest">
            Showcase Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold">Featured Innovations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A curated collection of high-impact applications demonstrating creative technical proficiency and AI-level architectural thinking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
