"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Cpu, Code2, Activity } from "lucide-react";
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 14 } }
  };

  return (
    <section id="portfolio" className="py-20 sm:py-32 px-6 relative overflow-hidden bg-background/50 border-t border-border scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24 relative z-10">
        <div className="space-y-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="section-label mx-auto"
          >
            <Cpu className="w-3.5 h-3.5" />
            PROJECT REGISTRY_v5.0
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black leading-tight shimmer-text"
          >
            TECHNICAL RECORDS
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl text-sm sm:text-lg text-muted-foreground font-bold uppercase tracking-tight mx-auto opacity-90 px-6 leading-relaxed"
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
                  <Card className="h-full glass-card border border-border/40 hover:border-primary/40 transition-all rounded-[2rem] overflow-hidden group-hover:shadow-xl bg-card/60">
                    <CardContent className="p-8 sm:p-10 space-y-8 flex flex-col h-full relative">
                      <div className="flex justify-between items-start">
                        <div className="p-4 rounded-xl bg-secondary border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-md border border-primary/20">
                          {project.category}
                        </span>
                      </div>

                      <div className="space-y-4 flex-grow">
                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight shimmer-text">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground font-bold uppercase tracking-tight text-[11px] sm:text-xs opacity-90 line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-3 py-1 bg-secondary/40 border border-border rounded-md group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-border/40 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Activity className="w-4 h-4 text-primary/50" />
                          <span className="text-[9px] font-black uppercase tracking-widest text-primary/60">ACCESS_CORE</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <ArrowRight className="w-5 h-5" />
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