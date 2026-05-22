"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Box } from "lucide-react";
import { projects } from "@/app/lib/projects-data";

export function Projects() {
  return (
    <section id="portfolio" className="py-32 px-6 relative bg-background border-t border-border">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div className="space-y-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded bg-primary/10 border border-primary/20 text-[10px] font-black tracking-[0.5em] text-primary uppercase"
          >
            <Box className="w-4 h-4" />
            Project Archive
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl md:text-8xl font-headline font-black tracking-tighter uppercase leading-none"
          >
            TECHNICAL <span className="text-gradient">RECORDS</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-[12px] sm:text-sm text-muted-foreground font-black uppercase tracking-[0.3em] leading-relaxed mx-auto opacity-70"
          >
            Full Stack & Mobile software systems engineered for performance and structural stability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <Link href={`/projects/${project.id}`} className="block h-full group">
                <Card className="h-full bg-secondary/50 border-border hover:border-primary transition-all rounded-xl overflow-hidden shadow-lg">
                  <CardContent className="p-8 space-y-8 flex flex-col h-full">
                    <div className="flex justify-between items-start">
                      <div className="p-4 rounded bg-background border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <project.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary bg-primary/10 px-3 py-1 rounded">
                        {project.category}
                      </span>
                    </div>

                    <div className="space-y-4 flex-grow">
                      <h3 className="text-2xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-bold uppercase tracking-tight leading-relaxed text-[11px] opacity-80">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-background border border-border rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-border flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Initialize Sync</span>
                      <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0" />
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
