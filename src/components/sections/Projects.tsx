"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Activity, Zap } from "lucide-react";
import { projects } from "@/app/lib/projects-data";

export function Projects() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-black tracking-widest text-primary uppercase">
            <Zap className="w-4 h-4" />
            Registry
          </div>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
            Architectural <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="max-w-3xl text-sm sm:text-lg text-muted-foreground font-medium uppercase tracking-[0.15em] leading-relaxed">
            High-integrity systems engineered for performance and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/projects/${project.id}`}>
                <Card className="group h-full bg-secondary/20 border-border/50 hover:border-primary/50 transition-all rounded-[2rem] overflow-hidden">
                  <CardContent className="p-10 space-y-8">
                    <div className="flex justify-between items-start">
                      <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <project.icon className="w-8 h-8" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary px-3 py-1 bg-primary/10 rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-3xl font-black uppercase tracking-tighter group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-medium leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-background/50 border border-border rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-border/30 flex items-center justify-between group-hover:translate-x-2 transition-transform">
                      <span className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">View Logic</span>
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}