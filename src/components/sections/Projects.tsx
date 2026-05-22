
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
            className="inline-flex items-center gap-4 px-6 py-2 rounded-lg bg-primary/10 border border-primary/20 text-xs font-black tracking-widest text-primary uppercase"
          >
            <Box className="w-5 h-5" />
            Project Archive
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-7xl font-headline font-black tracking-tighter uppercase leading-none"
          >
            TECHNICAL <span className="text-gradient">RECORDS</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-sm sm:text-lg text-muted-foreground font-black uppercase tracking-widest leading-relaxed mx-auto opacity-70"
          >
            Full Stack & Mobile software systems engineered for performance and structural stability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <Link href={`/projects/${project.id}`} className="block h-full group">
                <Card className="h-full bg-secondary/30 border-border hover:border-primary transition-all rounded-3xl overflow-hidden shadow-xl border-2">
                  <CardContent className="p-10 space-y-10 flex flex-col h-full">
                    <div className="flex justify-between items-start">
                      <div className="p-5 rounded-2xl bg-background border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-md">
                        <project.icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                        {project.category}
                      </span>
                    </div>

                    <div className="space-y-5 flex-grow">
                      <h3 className="text-2xl sm:text-3xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground font-bold uppercase tracking-tight leading-relaxed text-sm opacity-80">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-background border border-border rounded-lg shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-border flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-widest text-primary opacity-60">View Details</span>
                      <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
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
