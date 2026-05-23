"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Cpu, Code2 } from "lucide-react";
import { projects } from "@/app/lib/projects-data";
import { iconMap } from "@/app/lib/icon-map";

export function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-background/50 border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 relative z-10">
        <div className="space-y-6 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 px-6 py-2 rounded-xl bg-primary/10 border border-primary/20 text-[11px] font-black tracking-[0.6em] text-primary uppercase mx-auto"
          >
            <Cpu className="w-4 h-4" />
            PROJECT REGISTRY
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-headline font-black tracking-tighter uppercase leading-none shimmer-text"
          >
            TECHNICAL <span className="text-gradient">RECORDS</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl text-sm sm:text-lg text-muted-foreground font-bold uppercase tracking-tight mx-auto opacity-70"
          >
            High-performance software systems engineered for enterprise stability and technical integrity.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10"
        >
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon] || Code2;
            return (
              <motion.div key={project.id} variants={item}>
                <Link href={`/projects/${project.id}`} className="block h-full group">
                  <Card className="h-full glass-card border border-border hover:border-primary transition-all rounded-[2rem] overflow-hidden group-hover:scale-[1.02] duration-500">
                    <CardContent className="p-8 sm:p-10 space-y-8 flex flex-col h-full">
                      <div className="flex justify-between items-start">
                        <div className="p-4 rounded-2xl bg-secondary/80 border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-widest text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/20">
                          {project.category}
                        </span>
                      </div>

                      <div className="space-y-4 flex-grow">
                        <h3 className="text-xl sm:text-2xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground font-bold uppercase tracking-tight text-xs sm:text-sm opacity-60 line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-secondary/40 border border-border rounded-lg">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-border/50 flex items-center justify-between">
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-primary opacity-50">ACCESS_CORE</span>
                        <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center border border-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
