"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Cpu, Code2, Sparkles } from "lucide-react";
import { projects } from "@/app/lib/projects-data";
import { iconMap } from "@/app/lib/icon-map";

export function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
  };

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-4 sm:px-6 relative overflow-hidden bg-background/50 border-t border-border scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-24 relative z-10">
        <div className="space-y-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 px-6 py-2 rounded-xl bg-primary/10 border border-primary/20 text-[11px] font-black tracking-[0.6em] text-primary uppercase mx-auto shadow-xl"
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
            className="max-w-3xl text-sm sm:text-lg text-muted-foreground font-bold uppercase tracking-tight mx-auto opacity-80"
          >
            High-performance software systems engineered for enterprise stability and technical integrity.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12"
        >
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon] || Code2;
            return (
              <motion.div key={project.id} variants={item}>
                <Link href={`/projects/${project.id}`} className="block h-full group">
                  <Card className="h-full glass-card border border-border/50 hover:border-primary transition-all duration-700 rounded-[2.5rem] overflow-hidden group-hover:shadow-[0_0_40px_rgba(var(--primary),0.15)]">
                    <CardContent className="p-8 sm:p-12 space-y-10 flex flex-col h-full relative">
                      <div className="flex justify-between items-start">
                        <div className="p-5 rounded-2xl bg-secondary/80 border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-500 shadow-inner">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">
                          {project.category}
                        </span>
                      </div>

                      <div className="space-y-4 flex-grow">
                        <h3 className="text-xl sm:text-3xl font-headline font-black uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground font-bold uppercase tracking-tight text-[11px] sm:text-xs opacity-70 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 bg-secondary/60 border border-border rounded-lg group-hover:bg-primary/5 transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-8 border-t border-border/50 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary opacity-60">ACCESS_CORE</span>
                          <Sparkles className="w-3 h-3 text-primary opacity-20 group-hover:opacity-100 animate-pulse" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all shadow-xl">
                          <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
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