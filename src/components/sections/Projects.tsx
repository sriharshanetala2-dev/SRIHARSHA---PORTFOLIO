"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Layers } from "lucide-react";
import { projectsShort } from "@/app/lib/projects-data-short";

export function Projects() {
  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        <div className="text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass-card text-xs font-black tracking-[0.5em] text-primary uppercase border-primary/30"
          >
            <Layers className="w-4 h-4" />
            Project Matrix
          </motion.div>
          
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-headline font-black tracking-tighter leading-[1.1] uppercase shimmer-text">
            COMPUTATIONAL <span className="text-gradient">SHOWCASE</span>
          </h2>
          
          <p className="text-sm sm:text-xl text-muted-foreground max-w-4xl mx-auto font-medium opacity-80 leading-relaxed uppercase tracking-[0.2em]">
            A curated selection of software experiments, ranging from core Java algorithms to high-performance AI-integrated systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">
          {projectsShort.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card overflow-hidden group hover:border-primary/50 transition-all flex flex-col h-full rounded-[3rem] bg-card/20 hover:shadow-2xl">
                <Link href={`/projects/${project.id}`} className="relative block flex-1">
                  <CardContent className="p-10 sm:p-12 space-y-10">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase text-accent tracking-[0.4em] px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                          {project.category}
                        </span>
                        <div className="flex gap-1.5">
                          {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-2 h-2 rounded-full bg-primary/20 group-hover:bg-primary transition-all duration-500" style={{ transitionDelay: `${i * 100}ms` }} />
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-start justify-between gap-6">
                        <h3 className="text-3xl sm:text-4xl font-headline font-black leading-[1.1] group-hover:text-primary transition-colors tracking-tighter uppercase">
                          {project.title}
                        </h3>
                        <div className="p-4 rounded-2xl bg-secondary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-lg">
                          <ArrowUpRight className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-10 border-t border-border/40">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-4 py-2 rounded-xl bg-secondary/50 text-xs font-black uppercase tracking-widest border border-border/60 hover:border-primary/30 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
