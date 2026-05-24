"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code2 } from "lucide-react";
import { projects } from "@/app/lib/projects-data";
import { iconMap } from "@/app/lib/icon-map";

export function Projects() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <div className="section-label mx-auto">PROJECT REGISTRY</div>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Technical Records</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            High-performance software systems engineered for enterprise stability and technical integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const Icon = iconMap[project.icon] || Code2;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/projects/${project.id}`} className="group h-full block">
                  <Card className="h-full rounded-2xl overflow-hidden">
                    <CardContent className="p-8 space-y-6 flex flex-col h-full">
                      <div className="flex justify-between items-start">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-3 py-1 rounded-md">
                          {project.category}
                        </span>
                      </div>
                      <div className="space-y-2 flex-grow">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="pt-4 border-t border-border flex items-center justify-between text-sm font-bold text-primary">
                        Access Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}