"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code2, Activity } from "lucide-react";
import { projects } from "@/app/lib/projects-data";
import { iconMap } from "@/app/lib/icon-map";

export function Projects() {
  return (
    <section id="portfolio" className="py-24 sm:py-32 px-6 bg-secondary/5 border-t border-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="text-center space-y-6">
          <div className="section-label mx-auto">PROJECT REGISTRY</div>
          <h2 className="text-4xl sm:text-6xl font-headline font-black tracking-tighter uppercase leading-none">
            TECHNICAL <span className="text-gradient">RECORDS</span>
          </h2>
          <p className="text-sm sm:text-lg text-muted-foreground max-w-3xl mx-auto font-black opacity-70 uppercase tracking-widest leading-relaxed">
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
                className="h-full"
              >
                <Link href={`/projects/${project.id}`} className="group h-full block">
                  <Card className="h-full rounded-[2rem] overflow-hidden glass-card hover:translate-y-[-8px] transition-all duration-500">
                    <CardContent className="p-10 space-y-8 flex flex-col h-full relative">
                      <div className="flex justify-between items-start">
                        <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-xl">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary/60 bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
                          {project.category}
                        </span>
                      </div>
                      
                      <div className="space-y-3 flex-grow">
                        <h3 className="text-2xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-bold uppercase tracking-tight opacity-80 line-clamp-3">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="pt-6 border-t border-border/50 flex items-center justify-between text-[11px] font-black uppercase tracking-[0.2em] text-primary group-hover:gap-2 transition-all">
                        Access Details <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
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